import { pubsub } from './pubsub.js';
import format from 'date-fns/format';
import { addDoc, setDoc, doc } from 'firebase/firestore';
import { colRef, db } from './index.js';

export const Task = class {
    constructor(name, description, dueDate, priority, status, id) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.id = id;       
    }

    toggleStatus() {
        if (this.status == "completed") {
            this.status = "uncomplete";
        } else {
            this.status = "completed";
        }
    }
}

export const AddTask = {
    render: container => {
        const addButton = document.createElement("button");
        addButton.classList.add("addButton");
        addButton.setAttribute("type", "button");
        addButton.innerText = "Add new";
        addButton.addEventListener('click', function() {createModal()});
        container.prepend(addButton);
      },
    add: ev => {
        let nameInput = document.querySelector('.form-name');
        let descriptionInput = document.querySelector('.form-description');
        let dateInput = document.querySelector('.form-date');
        let priorityInput = document.querySelector('.form-priority');
        
        let name = nameInput.value.trim();
        let description = descriptionInput.value;
        let dueDate = dateInput.value;
        let priority = priorityInput.value;
        let status = "";
        let randomID = (Math.random() + 1).toString(36).substring(7);
        
        if (name == "" || dueDate == "") {
                return;
            }

        // addDoc(colRef, {
        //     name: nameInput.value.trim(),
        //     description: descriptionInput.value,
        //     dueDate: dateInput.value,
        //     priority: priorityInput.value,
        //     status: '',
        //     randomId: randomID
        // })
        // .then((docRef) => {
        //     console.log(docRef.id)
        //     nameInput.value = ''; //clear the form
        //     descriptionInput.value = '';
        // })
        const taskData = {
            name: nameInput.value.trim(),
            description: descriptionInput.value,
            dueDate: dateInput.value,
            priority: priorityInput.value,
            status: '',
            randomId: randomID
        }
        const addingTask = async () => {
            await setDoc(doc(db, "tasks", name), taskData);
        }
        addingTask();

        ev.preventDefault();
        nameInput.value = ''; //clear the form
        descriptionInput.value = '';

        const newTask = new Task(name, description, dueDate, priority, status, randomID);

        //tell subscribers that a task was added
        pubsub.publish('taskAdded', newTask);

        //hid the modal
        const modalContainer = document.querySelector(".modal");
        modalContainer.style.display = "none";
    }
}

function createModal() {
    const content = document.getElementById("content");

    if(document.querySelector(".modal")){
        const modalContainer = document.querySelector(".modal");
        modalContainer.style.display = "block";
    } else {
        const modalContainer = document.createElement("section");
        modalContainer.classList.add("modal");
        content.appendChild(modalContainer);
        modalContainer.style.display = "block";

        const modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContainer.appendChild(modalContent);

        const closeModalButton = document.createElement("button");
        closeModalButton.classList.add("close-btn");
        closeModalButton.innerText = "X";
        
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
        formName.setAttribute("type", "text");
        formName.classList.add("form-name");
        formName.setAttribute("maxlength", "33");
        formName.setAttribute("placeholder", "Task name");
        formName.setAttribute("required", "");
        modalForm.appendChild(formName);

        const formDescription = document.createElement("textarea");
        formDescription.classList.add("form-description");
        formDescription.setAttribute("maxlength", "60");
        formDescription.setAttribute("placeholder", "Description (max 60 char)");
        modalForm.appendChild(formDescription);

        const formDate = document.createElement("input");
        formDate.classList.add("form-date");
        formDate.setAttribute("type", "date");
        const fromattedTodaysDate = formatTodaysDate(new Date);
        formDate.setAttribute("min", fromattedTodaysDate);
        formDate.setAttribute("required", "");
        formDate.value = formatTodaysDate(new Date());
        modalForm.appendChild(formDate);

        const formPriority = document.createElement("select");
        formPriority.classList.add("form-priority");
        modalForm.appendChild(formPriority);

        const lowPriority = document.createElement("option");
        lowPriority.setAttribute("value", "low");
        lowPriority.innerText = "low priority";
        formPriority.appendChild(lowPriority);

        const mediumPriority = document.createElement("option");
        mediumPriority.setAttribute("value", "medium");
        mediumPriority.innerText = "medium priority";
        formPriority.appendChild(mediumPriority);

        const highPriority = document.createElement("option");
        highPriority.setAttribute("value", "high");
        highPriority.innerText = "high priority";
        formPriority.appendChild(highPriority);

        const formSubmit = document.createElement("input");
        formSubmit.setAttribute("type", "submit");
        formSubmit.classList.add("form-submit");
        modalForm.appendChild(formSubmit);
        formSubmit.addEventListener("click", AddTask.add);
    }
}

function formatTodaysDate(date) {
    const formattedDate = format(date, 'yyyy-MM-dd');
    return formattedDate;
}