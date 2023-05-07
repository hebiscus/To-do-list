import { AddTask } from './addTask.js';
import { pubsub } from './pubsub.js';
import format from 'date-fns/format';
import { completedTasks } from './completedTasks.js';

export const allTasks = {
  list: [],
  render: (container) => {
    // const sidepanel = document.querySelector(".sidepanel-left");
    // const tabName = sidepanel.firstElementChild;
    // tabName.classList.toggle("highlight-tab");

    const taskDiv = document.querySelector(".task-div");
    taskDiv.replaceChildren();
    
    allTasks.list.forEach(task => {
    //then the ui stuff for a new task list
    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskDiv.appendChild(taskContent);

    const statusCheckbox = document.createElement("input");
    statusCheckbox.classList.add("status-checkbox");
    statusCheckbox.setAttribute("type", "checkbox");
    statusCheckbox.addEventListener("click", allTasks.taskChangeStatus);
    taskContent.appendChild(statusCheckbox);

    const tasknameText = document.createElement("p");
    tasknameText.classList.add("taskname-text");
    tasknameText.innerText = `${task.name}`;
    taskContent.appendChild(tasknameText);

    const taskPriorityButton = document.createElement("button");
    taskPriorityButton.classList.add("taskpriority-button");
    taskPriorityButton.innerText = `${task.priority}`;

    if (taskPriorityButton.innerText == "low") {
      taskPriorityButton.style.backgroundColor = "#BDFF94";
    } else if (taskPriorityButton.innerText == "medium") {
      taskPriorityButton.style.backgroundColor = "#FF9E4F";
    } else {
      taskPriorityButton.style.backgroundColor = "#FF644F";
    }

    taskContent.appendChild(taskPriorityButton);
    
    const taskdueDateText = document.createElement("p");
    taskdueDateText.classList.add("taskdate-text");
    const formattedDate = changeDateFormat(task.dueDate);
    taskdueDateText.innerText = formattedDate;
    taskContent.appendChild(taskdueDateText);

    const taskEdit = document.createElement("img");
    taskEdit.classList.add("task-edit");
    taskEdit.setAttribute("src", "info.svg");
    taskEdit.addEventListener("click", function() {allTasks.editTaskModal(task)});
    taskContent.appendChild(taskEdit);

    const taskDelete = document.createElement("img");
    taskDelete.classList.add("task-delete");
    taskDelete.setAttribute("src", "trash.svg");
    taskDelete.addEventListener("click", allTasks.taskDeleted);
    taskContent.appendChild(taskDelete);
    })

    //tell the pubsub controller that we want to know about any taskAdded event
    console.log('allTasks: wants to know if a task is added');
    pubsub.subscribe('taskAdded', allTasks.taskAdded);
  },
  taskAdded: taskobject => {
    //taskAdded event was published
    console.log(`TASKS: I hear that ${taskobject.name} was added`);
    let list = new Set(allTasks.list);
    list.add(taskobject);
    allTasks.list = Array.from(list).sort();
    
    localStorage.setItem("tasks", JSON.stringify(allTasks.list));

    //tell everyone that a task has been added to the list
    console.log('allTasks: tasksUpdated the list');
    pubsub.publish('tasksUpdated', allTasks.list);

    allTasks.render();
  },
  editTaskModal: function(taskobject) {
    const content = document.getElementById("content");

    if(document.querySelector(".task-modal")){
        console.log("Element exists");
        const TaskModalContainer = document.querySelector(".task-modal");
        const TaskModalContent = document.querySelector(".taskModal-content");
        const taskNameInfo = TaskModalContent.firstElementChild;
        const taskDescriptionInfo = TaskModalContent.children[1];
        const taskDateInfo = TaskModalContent.children[2];
        const taskPriorityInfo = document.querySelector(".priority-info")
        const formattedDate = changeDateFormat(taskobject.dueDate);

        taskNameInfo.innerText = `Task: ${taskobject.name}`;
        taskDescriptionInfo.innerText = `Description: ${taskobject.description}`;
        taskDateInfo.innerText = `Due: ${formattedDate}`;
        taskPriorityInfo.innerText = taskobject.priority;

        if (taskPriorityInfo.innerText == "low") {
          taskPriorityInfo.style.backgroundColor = "#BDFF94";
        } else if (taskPriorityInfo.innerText == "medium") {
          taskPriorityInfo.style.backgroundColor = "#FF9E4F";
        } else {
          taskPriorityInfo.style.backgroundColor = "#FF644F";
        }

        TaskModalContainer.style.display = "block";
    } else {
        const TaskModalContainer = document.createElement("section");
        TaskModalContainer.classList.add("task-modal");
        content.appendChild(TaskModalContainer);
        TaskModalContainer.style.display = "block";

        const TaskModalContent = document.createElement("div");
        TaskModalContent.classList.add("taskModal-content");
        TaskModalContainer.appendChild(TaskModalContent);

        window.onclick = function(e){
          if(e.target == TaskModalContainer){
            TaskModalContainer.style.display = "none";
              }
        }
        
        const taskNameInfo = document.createElement("p");
        taskNameInfo.innerText = `Task: ${taskobject.name}`;
        const taskDescriptionInfo = document.createElement("p");
        taskDescriptionInfo.innerText = `Description: ${taskobject.description}`;
        const taskDateInfo = document.createElement("p");
        const formattedDate = changeDateFormat(taskobject.dueDate);
        taskDateInfo.innerText = `Due: ${formattedDate}`;
        const taskPriorityInfoDiv = document.createElement("div");
        taskPriorityInfoDiv.classList.add("priority-info-div");
        taskPriorityInfoDiv.innerText = `Priority:`
        
        const taskPriorityInfoEl = document.createElement("div");
        taskPriorityInfoEl.classList.add("priority-info");
        taskPriorityInfoEl.innerText = taskobject.priority;

        if (taskPriorityInfoEl.innerText == "low") {
          taskPriorityInfoEl.style.backgroundColor = "#BDFF94";
        } else if (taskPriorityInfoEl.innerText == "medium") {
          taskPriorityInfoEl.style.backgroundColor = "#FF9E4F";
        } else {
          taskPriorityInfoEl.style.backgroundColor = "#FF644F";
        }

        taskPriorityInfoDiv.appendChild(taskPriorityInfoEl);
        TaskModalContent.append(taskNameInfo, taskDescriptionInfo, taskDateInfo, taskPriorityInfoDiv);
      }
  },
  taskDeleted: ev => {
    const taskContent = ev.target.closest('div');
    const taskNameP = taskContent.children[1];
    const taskName = taskNameP.innerText;
    allTasks.list = allTasks.list.filter(function(nm) {
      return nm.name !== taskName;
    });
    localStorage.setItem("tasks", JSON.stringify(allTasks.list));
    taskContent.parentElement.removeChild(taskContent);

    
    console.log(`TASKS: taskDeleted the ${taskName}`);
    pubsub.publish('taskDeleted', allTasks.list);
  },
  taskChangeStatus: ev => {
    const taskContent = ev.target.closest('div');
    const statuscheckbox = taskContent.firstElementChild;
    const taskNameP = taskContent.children[1];
    const taskName = taskNameP.innerText;
    const taskObject = allTasks.list.find(function(nm) {
      return nm.name == taskName;
    });
    const TaskObjectCompleted = completedTasks.list.find(function(nm) {
      return nm.name == taskName;
    });

    if (statuscheckbox.checked == true) {
      taskObject.status = "completed";
      completedTasks.list.push(taskObject);
      localStorage.setItem("tasks-completed", JSON.stringify(completedTasks.list));
      allTasks.taskDeleted(ev);
    } else if (statuscheckbox.checked == false) {
      TaskObjectCompleted.status = "uncompleted";
      const taskIndex = completedTasks.list.indexOf(TaskObjectCompleted);
      completedTasks.list.splice(taskIndex, 1);
      localStorage.setItem("tasks-completed", JSON.stringify(completedTasks.list));
      completedTasks.render();
      allTasks.list.push(TaskObjectCompleted);
    }
  }
};

export function changeDateFormat(date) {
  const formattedDate = format(new Date(date), 'd/M/yyyy');
  return formattedDate;
}