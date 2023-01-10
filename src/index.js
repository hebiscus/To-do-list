import css from "./style.css";
import Task from "./addTask";
import { pubsub } from './pubsub.js';
import { AddTask } from "./addTask";
import { allTasks } from "./allTasks";

function renderTemplate() {
    const content = document.getElementById("content");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    content.appendChild(headerDiv);

    const headerText = document.createElement("h1");
    headerText.classList.add("headerText")
    headerText.innerText = "Heb To-do";
    headerDiv.appendChild(headerText);

    const sidebarDiv = document.createElement("div");
    sidebarDiv.classList.add("sidebar");
    content.appendChild(sidebarDiv);

    const taskspaceDiv = document.createElement("div");
    taskspaceDiv.classList.add("tasks-space");
    content.appendChild(taskspaceDiv);
}

renderTemplate();

(function renderModules() {
    const sidebar = document.querySelector(".sidebar");
    const taskSpace = document.querySelector(".tasks-space");

    AddTask.render(sidebar);

    allTasks.render(taskSpace);


})();