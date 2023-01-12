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
    
    const allTasksButton = document.createElement("button");
    const todayTasksButton = document.createElement("button");
    const thisWeekButton = document.createElement("button");
    const completedButton = document.createElement("button");

    const allTasksStats = document.createElement("div");
    const todayTasksStats = document.createElement("div");
    const thisWeekStats = document.createElement("div");
    const completedStats = document.createElement("div");

    const taskspaceDiv = document.createElement("div");
    taskspaceDiv.classList.add("tasks-space");

    sidePanelDiv.append(allTasksButton, todayTasksButton, thisWeekButton, completedButton, allTasksStats, todayTasksStats, thisWeekStats, completedStats);
    sidebarDiv.appendChild(sidePanelDiv);
    content.append(headerDiv, sidebarDiv, taskspaceDiv);
})();

(function renderModules() {
    const sidebar = document.querySelector(".sidebar");
    const taskSpace = document.querySelector(".tasks-space");

    AddTask.render(sidebar);
    allTasks.render(taskSpace);


})();