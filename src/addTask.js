import { pubsub } from './pubsub.js';

export const Task = class {
    constructor(name, status, priority, dueDate, description) {
        this.name = name;
        this.status = status;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
    }

    toggleStatus() {
        if (this.status == "completed") {
            this.status = "notcompleted";
        } else {
            this.status = "completed";
        }
    }
}

export const AddTask = {
    render: container => {
        //build button to add a task
        const addButton = document.createElement("button");
        addButton.classList.add("addButton");
        addButton.innerText = "Add new";
        addButton.addEventListener('click', AddTask.popupModal);
        container.appendChild(addButton);
      },
    popupModal: function popupModal() {
        const content = document.getElementById("content");
        const modalContainer = document.createElement("section");
        modalContainer.classList.add("modal");
        content.appendChild(modalContainer);

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContainer.appendChild(modalContent);

        const closeModalButton = document.createElement("button");
        closeModalButton.classList.add("close-btn");
        
        closeModalButton.onclick = function(){
            modalContainer.style.display = "none";
        }
        window.onclick = function(e){
        if(e.target == modalContainer){
            modalContainer.style.display = "none";
            
            }
        }

        modalContent.appendChild(closeModalButton);

        const modalForm = document.createElement("form");
        modalForm.classList.add("modalform");
        modalContent.appendChild(modalForm);

        const formName = document.createElement("input");
        formName.classList.add("form-name");
        formName.setAttribute("type", "text");
        formName.setAttribute("placeholder", "Task name");
        modalForm.appendChild(formName);

        const formDescription = document.createElement("input");
        formDescription.classList.add("form-description");
        formDescription.setAttribute("type", "text");
        formDescription.setAttribute("placeholder", "Description");
        modalForm.appendChild(formDescription);

        const formDate = document.createElement("input");
        formDate.setAttribute("type", "date");
        formDate.classList.add("form-date");
        modalForm.appendChild(formDate);

        const formPriority = document.createElement("select");
        formPriority.classList.add("form-priority");
        modalForm.appendChild(formPriority);

        const lowPriority = document.createElement("option");
        lowPriority.setAttribute("value", "low priority");
        lowPriority.innerText = "low priority";
        formPriority.appendChild(lowPriority);

        const mediumPriority = document.createElement("option");
        mediumPriority.setAttribute("value", "medium priority");
        mediumPriority.innerText = "medium priority";
        formPriority.appendChild(mediumPriority);

        const highPriority = document.createElement("option");
        highPriority.setAttribute("value", "high priority");
        highPriority.innerText = "high priority";
        formPriority.appendChild(highPriority);

        const formSubmit = document.createElement("input");
        formSubmit.setAttribute("type", "submit");
        formSubmit.classList.add("form-submit");
        modalForm.appendChild(formSubmit);

        modalContainer.style.display = "block";
    },
    add: ev => {
        ev.preventDefault();
        let task = new Task();
        let title = input.value;
        input.value = ''; //clear the form
    
        //tell anyone who is listening that a movie was added
        console.log(`MOVIE FORM: just movieAdded "${title}"`);
        pubsub.publish('movieAdded', title);
    },
}