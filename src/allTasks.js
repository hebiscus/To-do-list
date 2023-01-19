import { AddTask } from './addTask.js';
import { pubsub } from './pubsub.js';
import format from 'date-fns/format';

export const allTasks = {
  list: [],
  render: container => {
    const topSection = document.createElement("div");
    topSection.classList.add("top-section");
    container.appendChild(topSection);
    const sortByDiv = document.createElement("div");
    sortByDiv.classList.add("sort-by");
    topSection.appendChild(sortByDiv);
    const sortText1 = document.createElement("p");
    sortText1.innerText = "Sort by:";
    const sortDate = document.createElement("button");
    sortDate.classList.add("sort-date");
    sortDate.innerText = "date added"
    const sortText2 = document.createElement("p");
    sortText2.innerText = "/";
    const sortPriority = document.createElement("button");
    sortPriority.classList.add("sort-priority");
    sortPriority.innerText = "priority";
    const priorityHeadline = document.createElement("h3");
    priorityHeadline.classList.add("priority-headline");
    priorityHeadline.innerText = "Priority"
    const dueHeadline = document.createElement("h3");
    dueHeadline.classList.add("due-headline")
    dueHeadline.innerText = "Due";

    sortByDiv.append(sortText1, sortDate, sortText2, sortPriority);
    topSection.append(priorityHeadline, dueHeadline);
    
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div")
    container.appendChild(taskDiv);
    
    // deleteButton.addEventListener('click', actors.actorDeleted);

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

    //tell everyone that a task has been added to the list
    console.log('allTasks: tasksUpdated the list');
    pubsub.publish('tasksUpdated', allTasks.list);

    //then the ui stuff for a new task list
    const taskDiv= document.querySelector(".task-div");
    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskDiv.appendChild(taskContent);

    const statusCheckbox = document.createElement("input");
    statusCheckbox.classList.add("status-checkbox");
    statusCheckbox.setAttribute("type", "checkbox");
    taskContent.appendChild(statusCheckbox);

    const tasknameText = document.createElement("p");
    tasknameText.classList.add("taskname-text");
    tasknameText.innerText = `${taskobject.name}`;
    taskContent.appendChild(tasknameText);

    const taskPriorityButton = document.createElement("button");
    taskPriorityButton.classList.add("taskpriority-button");
    taskPriorityButton.innerText = `${taskobject.priority}`;

    if (taskPriorityButton.innerText == "low") {
      taskPriorityButton.style.backgroundColor = "#7AFE70";
    } else if (taskPriorityButton.innerText == "medium") {
      taskPriorityButton.style.backgroundColor = "#FEAD70";
    } else {
      taskPriorityButton.style.backgroundColor = "#FE707A";
    }

    taskContent.appendChild(taskPriorityButton);
    
    const taskdueDateText = document.createElement("p");
    taskdueDateText.classList.add("taskdate-text");
    const formattedDate = changeDateFormat(taskobject.dueDate);
    taskdueDateText.innerText = formattedDate;
    taskContent.appendChild(taskdueDateText);

    const taskEdit = document.createElement("img");
    taskEdit.classList.add("task-edit");
    taskEdit.setAttribute("src", "../src/info.svg");
    taskEdit.addEventListener("click", allTasks.editTaskModal);
    taskContent.appendChild(taskEdit);

    const taskDelete = document.createElement("img");
    taskDelete.classList.add("task-delete");
    taskDelete.setAttribute("src", "../src/trash.svg");
    taskContent.appendChild(taskDelete);

  },
  editTaskModal: function() {
    const content = document.getElementById("content");

    if(document.querySelector(".task-modal")){
        console.log("Element exists");
        const TaskModalContainer = document.querySelector(".task-modal");
        TaskModalContainer.style.display = "block";
    } else {
        const TaskModalContainer = document.createElement("section");
        TaskModalContainer.classList.add("task-modal");
        content.appendChild(TaskModalContainer);
        TaskModalContainer.style.display = "block";

        const TaskModalContent = document.createElement("div");
        TaskModalContent .classList.add("taskModal-content");
        TaskModalContainer.appendChild(TaskModalContent);

        const closeEditButton = document.createElement("button");
        closeEditButton.classList.add("close-edit");
        closeEditButton.innerText = "X";
        
        closeEditButton.onclick = function(){
          TaskModalContainer.style.display = "none";
        }
        window.onclick = function(e){
        if(e.target == TaskModalContainer){
          TaskModalContainer.style.display = "none";
            }
          }
      }
    }
  // actorDeleted: ev => {
  //   let item = ev.target.closest('li');
  //   let name = item.textContent;
  //   actors.list = actors.list.filter(nm => nm !== name);
  //   item.parentElement.removeChild(item);
  //   console.log(`ACTORS: actorDeleted the ${name}`);
  //   pubsub.publish('actorDeleted', actors.list);
  // }
};

function changeDateFormat(date) {
  const formattedDate = format(new Date(date), 'd/M/yyyy');
  return formattedDate;
}