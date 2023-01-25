import css from "./style.css";
import { AddTask } from "./addTask";
import { allTasks } from "./allTasks";
import { todayTasks } from "./todayTasks";
import { weekTasks } from "./weekTasks";
import { completedTasks } from "./completedTasks";

// if (!localStorage.getItem('tasks')) {
//     populateStorage();
//   } else {
//     setStyles();
// }


(function renderTemplate() {
    const content = document.getElementById("content");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    const headerText = document.createElement("h1");
    headerText.classList.add("headerText")
    headerText.innerText = "Heb To-do";
    headerDiv.appendChild(headerText);

    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.add("sidebar");

    const sidePanelDiv = document.createElement("div");
    sidePanelDiv.classList.add("side-panel");

    const sidePanelLeft = document.createElement("div");
    sidePanelLeft.classList.add("sidepanel-left");
    const sidePanelRight = document.createElement("div");
    sidePanelRight.classList.add("sidepanel-right");
    
    const allTasksButton = document.createElement("button");
    allTasksButton.addEventListener("click", function() {renderModules("all")});
    allTasksButton.innerText = "All tasks";
    const todayTasksButton = document.createElement("button");
    todayTasksButton.innerText = "Today";
    todayTasksButton.addEventListener("click", function() {renderModules("today")});
    const thisWeekButton = document.createElement("button");
    thisWeekButton.innerText = "This week";
    thisWeekButton.addEventListener("click", function() {renderModules("week")});
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";
    completedButton.addEventListener("click", function() {renderModules("completed")});

    const allTasksStats = document.createElement("div");
    const todayTasksStats = document.createElement("div");
    const thisWeekStats = document.createElement("div");
    const completedStats = document.createElement("div");

    const taskspaceDiv = document.createElement("div");
    taskspaceDiv.classList.add("tasks-space");

    sidePanelLeft.append(allTasksButton, todayTasksButton, thisWeekButton, completedButton);
    sidePanelRight.append(allTasksStats, todayTasksStats, thisWeekStats, completedStats)
    sidePanelDiv.append(sidePanelLeft, sidePanelRight);
    sidebarDiv.appendChild(sidePanelDiv);
    content.append(headerDiv, sidebarDiv, taskspaceDiv);
})();

(function renderFirstPage() {
    const sidebar = document.querySelector(".sidebar");
    const taskSpace = document.querySelector(".tasks-space");

    const topSection = document.createElement("div");
    topSection.classList.add("top-section");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-div");
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

    taskSpace.append(topSection, taskDiv);
    sortByDiv.append(sortText1, sortDate, sortText2, sortPriority);
    topSection.append(priorityHeadline, dueHeadline);

    AddTask.render(sidebar);
    
    if (localStorage.getItem('tasks')) {
        const savedTasks= JSON.parse(localStorage.getItem("tasks"));
        allTasks.list = savedTasks;
        allTasks.render(taskSpace);
    } else {
        allTasks.render(taskSpace);
    }
})();

function renderModules(moduleType) {
    const taskDiv = document.querySelector(".task-div");
    taskDiv.replaceChildren();

    if (moduleType == "all") {
        allTasks.render(taskDiv);
    } else if (moduleType == "today") {
        todayTasks.render(taskDiv);
    } else if (moduleType == "week") {
        weekTasks.render(taskDiv);
    } else if (moduleType == "completed" && localStorage.getItem('tasks-completed')) {
        const savedCompTasks = JSON.parse(localStorage.getItem("tasks-completed"));
        completedTasks.list = savedCompTasks;
        completedTasks.render(taskDiv);
    } else {
        completedTasks.render(taskDiv);
    }
}





function setStyles() {
    const savedTasks= JSON.parse(localStorage.getItem("tasks"));
  
    allTasks.list = savedTasks;
    // document.getElementById('bgcolor').value = currentColor;
    // document.getElementById('font').value = currentFont;
    // document.getElementById('image').value = currentImage;
  
    // htmlElem.style.backgroundColor = `#${currentColor}`;
    // pElem.style.fontFamily = currentFont;
    // imgElem.setAttribute('src', currentImage);
}

function populateStorage() {
    localStorage.setItem("tasks", JSON.stringify(allTasks.list));

    setStyles();
}