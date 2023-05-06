import { allTasks } from "./allTasks";
import { pubsub } from './pubsub.js';
import { changeDateFormat } from "./allTasks";
import format from 'date-fns/format';

export const completedTasks = {
    list: [],
    render: container => {
      const taskDiv = document.querySelector(".task-div");
      taskDiv.replaceChildren();
      
      completedTasks.list.forEach(task => {
      //then the ui stuff for a new task list
      const taskContent = document.createElement("div");
      taskContent.classList.add("task-content");
      taskDiv.appendChild(taskContent);
  
      const statusCheckbox = document.createElement("input");
      statusCheckbox.classList.add("status-checkbox");
      statusCheckbox.setAttribute("type", "checkbox");
      statusCheckbox.setAttribute("checked", "");
      statusCheckbox.addEventListener("click", allTasks.taskChangeStatus);
      taskContent.appendChild(statusCheckbox);
  
      const tasknameText = document.createElement("p");
      tasknameText.classList.add("taskname-text-completed");
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
      taskDelete.addEventListener("click", completedTasks.completedTaskDeleted);
      taskContent.appendChild(taskDelete);
      });
    },
    completedTaskDeleted: ev => {
        const taskContent = ev.target.closest('div');
        const taskNameP = taskContent.children[1];
        const taskName = taskNameP.innerText;
        completedTasks.list = completedTasks.list.filter(function(nm) {
          return nm.name !== taskName;
        });
        localStorage.setItem("tasks-completed", JSON.stringify(completedTasks.list));
        taskContent.parentElement.removeChild(taskContent);
      },
}