import { pubsub } from './pubsub.js';

export const Task = class {
    constructor(name, description, dueDate, priority, status) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;        
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
        modalContainer.style.display = "block";

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContainer.appendChild(modalContent);

        const closeModalButton = document.createElement("button");
        closeModalButton.classList.add("close-btn");
        
        closeModalButton.onclick = function(){
            modalContainer.style.display = "none";
        }
        // window.onclick = function(e){
        // if(e.target == modalContainer){
        //     modalContainer.style.display = "none";
            
        //     }
        // }

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
        // formSubmit.preventDefault();
        formSubmit.addEventListener("click", AddTask.add);
    },
    add: ev => {
        ev.preventDefault();
        let nameInput = document.querySelector('.form-name');
        let descriptionInput = document.querySelector('.form-description');
        let dateInput = document.querySelector('.form-date');
        let priorityInput = document.querySelector('.form-priority');
        
        let name = nameInput.value;
        let description = descriptionInput.value;
        let dueDate = dateInput.value;
        let priority = priorityInput.value;
        nameInput.value = ''; //clear the form
        descriptionInput.value = '';
        dateInput.value = '';
        priorityInput.value = '';
        
        const newTask = new Task(name, description, dueDate, priority, "");

        //tell subscribers that a task was added
        console.log(`TASK FORM: just taskAdded ${name}`);
        pubsub.publish('taskAdded', newTask);
    }
}