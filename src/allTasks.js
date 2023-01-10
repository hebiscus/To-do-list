import { AddTask } from './addTask.js';
import { pubsub } from './pubsub.js';

export const allTasks = {
  list: [],
  render: container => {
    const topSection = document.createElement("div");
    topSection.classList.add("top-section");
    container.appendChild(topSection);
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div")
    container.appendChild(taskDiv);
    
    // deleteButton.addEventListener('click', actors.actorDeleted);

    //tell the pubsub controller that we want to know about any taskAdded event
    console.log('allTasks: wants to know if a task is added');
    pubsub.subscribe('taskAdded', allTasks.taskAdded);
  },
  taskAdded: name => {
    //taskAdded event was published
    console.log(`TASKS: I hear that ${name} was added`);
    let list = new Set(allTasks.list);
    list.add(name);
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
    taskContent.appendChild(tasknameText);

    const taskPriorityButton = document.createElement("p");
    taskPriorityButton .classList.add("taskpriority-button");
    taskContent.appendChild(taskPriorityButton);
    
    const taskdueDateText = document.createElement("p");
    taskdueDateText.classList.add("taskdate-text");
    taskContent.appendChild(taskdueDateText);

    const taskEdit = document.createElement("p");
    taskEdit.classList.add("task-edit");
    taskContent.appendChild(taskEdit);

    const taskDelete = document.createElement("p");
    taskDelete.classList.add("task-delete");
    taskContent.appendChild(taskDelete);


    // allTasks.list.forEach(name => {
    //   let li = document.createElement('li');
    //   li.innerText = name;
    //   df.appendChild(li);
    // });
    // ul.appendChild(df);
  },
  // actorDeleted: ev => {
  //   let item = ev.target.closest('li');
  //   let name = item.textContent;
  //   actors.list = actors.list.filter(nm => nm !== name);
  //   item.parentElement.removeChild(item);
  //   console.log(`ACTORS: actorDeleted the ${name}`);
  //   pubsub.publish('actorDeleted', actors.list);
  // }
};
