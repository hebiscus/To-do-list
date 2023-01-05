import css from "./style.css";
import Task from "./addTask";
import { pubsub } from './pubsub.js';
import { AddTask } from "./addTask";

// function renderHeader() {
//     const content = document.getElementById("content");
//     const headerDiv = document.createElement("div");
//     headerDiv.classList.add("header");
//     content.appendChild(headerDiv);
// }

// renderHeader();

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
    taskspaceDiv.classList.add("taskspace");
    content.appendChild(taskspaceDiv);
}

renderTemplate();
AddTask.render();