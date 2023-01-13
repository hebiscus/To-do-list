import css from "./style.css";
import { AddTask } from "./addTask";
import { allTasks } from "./allTasks";

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
    allTasksButton.innerText = "All tasks";
    const todayTasksButton = document.createElement("button");
    todayTasksButton.innerText = "Today";
    const thisWeekButton = document.createElement("button");
    thisWeekButton.innerText = "This week";
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";

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

(function renderModules() {
    const sidebar = document.querySelector(".sidebar");
    const taskSpace = document.querySelector(".tasks-space");

    AddTask.render(sidebar);
    allTasks.render(taskSpace);


})();