import css from "./style.css";
import { AddTask } from "./addTask";
import { allTasks } from "./allTasks";
import { todayTasks } from "./todayTasks";
import { weekTasks } from "./weekTasks";
import { completedTasks } from "./completedTasks";

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
    allTasksButton.classList.toggle("highlight-tab")
    const todayTasksButton = document.createElement("button");
    todayTasksButton.innerText = "Today";
    todayTasksButton.addEventListener("click", function() {renderModules("today")});
    const thisWeekButton = document.createElement("button");
    thisWeekButton.innerText = "This week";
    thisWeekButton.addEventListener("click", function() {renderModules("week")});
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";
    completedButton.addEventListener("click", function() {renderModules("completed")});

    const allTasksStats = document.createElement("img");
    allTasksStats.setAttribute("src", "circle.svg");
    allTasksStats.setAttribute("viewBox", "0 0 100 100");
    const todayTasksStats = document.createElement("img");
    todayTasksStats.setAttribute("src", "circle.svg");
    const thisWeekStats = document.createElement("img");
    thisWeekStats.setAttribute("src", "circle.svg");
    const completedStats = document.createElement("img");
    completedStats.setAttribute("src", "circle.svg");

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
    sortDate.innerText = "date";
    sortDate.addEventListener("click", () => {sortByDate()})
    const sortText2 = document.createElement("p");
    sortText2.innerText = "/";
    const sortPriority = document.createElement("button");
    sortPriority.classList.add("sort-priority");
    sortPriority.innerText = "priority";
    sortPriority.addEventListener("click", () => {sortByPriority()})
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
    const sidebarTabDiv = document.querySelector(".sidepanel-left");
    const currentHighlight = document.querySelector(".highlight-tab");
    const taskDiv = document.querySelector(".task-div");
    taskDiv.replaceChildren();

    if (moduleType == "all") {
        currentHighlight.classList.toggle("highlight-tab");
        sidebarTabDiv.firstElementChild.classList.toggle("highlight-tab");
        allTasks.render(taskDiv);
    } else if (moduleType == "today") {
        currentHighlight.classList.toggle("highlight-tab");
        sidebarTabDiv.children[1].classList.toggle("highlight-tab");
        todayTasks.render(taskDiv);
    } else if (moduleType == "week") {
        currentHighlight.classList.toggle("highlight-tab");
        sidebarTabDiv.children[2].classList.toggle("highlight-tab");
        weekTasks.render(taskDiv);
    } else if (moduleType == "completed" && localStorage.getItem('tasks-completed')) {
        currentHighlight.classList.toggle("highlight-tab");
        sidebarTabDiv.children[3].classList.toggle("highlight-tab");
        const savedCompTasks = JSON.parse(localStorage.getItem("tasks-completed"));
        completedTasks.list = savedCompTasks;
        completedTasks.render(taskDiv);
    } else {
        currentHighlight.classList.toggle("highlight-tab");
        sidebarTabDiv.children[3].classList.toggle("highlight-tab");
        completedTasks.render(taskDiv);
    }
};

function sortByPriority() {
    const priorityOrder = {low: 0, medium: 1, high: 2};

    const sidebarTabDiv = document.querySelector(".sidepanel-left");
    const currentHighlight = document.querySelector(".highlight-tab");
    const taskDiv = document.querySelector(".task-div");
    
    if (currentHighlight == sidebarTabDiv.children[0]) {
        allTasks.list.sort((a, b) => {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        })
        localStorage.setItem("tasks", JSON.stringify(allTasks.list));
        allTasks.render(taskDiv);
    } else if (currentHighlight == sidebarTabDiv.children[1]) {
        allTasks.list.sort((a, b) => {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        localStorage.setItem("tasks", JSON.stringify(allTasks.list));
        todayTasks.render(taskDiv);
    } else if (currentHighlight == sidebarTabDiv.children[2]) {
        allTasks.list.sort((a, b) => {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        localStorage.setItem("tasks", JSON.stringify(allTasks.list));
        weekTasks.render(taskDiv);
    } else {
        completedTasks.list.sort((a, b) => {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        localStorage.setItem("tasks-completed", JSON.stringify(completedTasks.list));
        completedTasks.render(taskDiv);
    }
}

function sortByDate() {
    const sidebarTabDiv = document.querySelector(".sidepanel-left");
    const currentHighlight = document.querySelector(".highlight-tab");
    const taskDiv = document.querySelector(".task-div");
    
    if (currentHighlight == sidebarTabDiv.children[0]) {
        allTasks.list.sort((a, b) => {
            let da = new Date(a.dueDate),
            db = new Date(b.dueDate);
            return da - db
        })
        localStorage.setItem("tasks", JSON.stringify(allTasks.list));
        allTasks.render(taskDiv);
    } else if (currentHighlight == sidebarTabDiv.children[1]) {
        allTasks.list.sort((a, b) => {
            let da = new Date(a.dueDate),
            db = new Date(b.dueDate);
            return da - db
        });
        localStorage.setItem("tasks", JSON.stringify(allTasks.list));
        todayTasks.render(taskDiv);
    } else if (currentHighlight == sidebarTabDiv.children[2]) {
        allTasks.list.sort((a, b) => {
            let da = new Date(a.dueDate),
            db = new Date(b.dueDate);
            return da - db
        });
        localStorage.setItem("tasks", JSON.stringify(allTasks.list));
        weekTasks.render(taskDiv);
    } else {
        completedTasks.list.sort((a, b) => {
            let da = new Date(a.dueDate),
            db = new Date(b.dueDate);
            return da - db
        });
        localStorage.setItem("tasks-completed", JSON.stringify(completedTasks.list));
        completedTasks.render(taskDiv);
    }
}
