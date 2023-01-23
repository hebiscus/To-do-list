import { allTasks } from "./allTasks";
import { pubsub } from './pubsub.js';
import format from 'date-fns/format';
import { changeDateFormat } from "./allTasks";
import isThisWeek from 'date-fns/isThisWeek';
import parseISO from 'date-fns/parseISO';

export const weekTasks = {
    list: [],
    render: container => {
      const taskDiv = document.querySelector(".task-div");
      taskDiv.replaceChildren();

      const weekTasksList = allTasks.list.filter(function(task) {
        // const todayDate = DateFormat(new Date());
        const parseDate = parseISO(task.dueDate);
        return isThisWeek(parseDate);
      });
      
      weekTasksList.forEach(task => {
      //then the ui stuff for a new task list
      const taskContent = document.createElement("div");
      taskContent.classList.add("task-content");
      taskDiv.appendChild(taskContent);
  
      const statusCheckbox = document.createElement("input");
      statusCheckbox.classList.add("status-checkbox");
      statusCheckbox.setAttribute("type", "checkbox");
      taskContent.appendChild(statusCheckbox);
  
      const tasknameText = document.createElement("p");
      tasknameText.classList.add("taskname-text");
      tasknameText.innerText = `${task.name}`;
      taskContent.appendChild(tasknameText);
  
      const taskPriorityButton = document.createElement("button");
      taskPriorityButton.classList.add("taskpriority-button");
      taskPriorityButton.innerText = `${task.priority}`;
  
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
      const formattedDate = changeDateFormat(task.dueDate);
      taskdueDateText.innerText = formattedDate;
      taskContent.appendChild(taskdueDateText);
  
      const taskEdit = document.createElement("img");
      taskEdit.classList.add("task-edit");
      taskEdit.setAttribute("src", "../src/info.svg");
      taskEdit.addEventListener("click", function() {allTasks.editTaskModal(task)});
      taskContent.appendChild(taskEdit);
  
      const taskDelete = document.createElement("img");
      taskDelete.classList.add("task-delete");
      taskDelete.setAttribute("src", "../src/trash.svg");
      taskDelete.addEventListener("click", allTasks.taskDeleted);
      taskContent.appendChild(taskDelete);
      })
  
      //tell the pubsub controller that we want to know about any taskAdded event
      console.log('allTasks: wants to know if a task is added');
      pubsub.subscribe('taskAdded', allTasks.taskAdded);
    }
}

function DateFormat(date) {
    const formattedDate = format(new Date(date), 'yyyy-MM-dd');
    return formattedDate;
}