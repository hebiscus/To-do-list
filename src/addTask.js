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
        const sidebar = document.querySelector(".sidebar");
        const addButton = document.createElement("button");
        addButton.classList.add("addButton");
        addButton.innerText = "Add new";
        addButton.addEventListener('click', AddTask.popupModal);
        sidebar.appendChild(addButton);
      },
    //   add: ev => {
    //     ev.preventDefault();
    //     let task = new Task();
    //     let title = input.value;
    //     input.value = ''; //clear the form
    
    //     //tell anyone who is listening that a movie was added
    //     console.log(`MOVIE FORM: just movieAdded "${title}"`);
    //     pubsub.publish('movieAdded', title);
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

        const modalText =  document.createElement("p");
        modalText.innerText = "that's a test";
        modalContent.appendChild(modalText);

        modalContainer.style.display = "block";
    }

     
}