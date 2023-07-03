const inputTask = document.querySelector(".input-task");
const buttonTask = document.querySelector(".button-task");
const task = document.querySelector(".task");
const invalid = document.querySelector(".invalid");

function createLi() {
    const li = document.createElement("li");
    return li;
}

function clearInput() {
    inputTask.value = "";
    inputTask.focus();
}

function createButtonDelete(li) {
    li.innerText += " "
    const buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";

    //setAttribute, set all atribut you want, exp: class, id, href, value , data , title e etc
    buttonDelete.setAttribute("class", "delete");
    buttonDelete.setAttribute("title", "Delete this task");

    li.appendChild(buttonDelete)

}

function saveTask(){
    const liTasks = task.querySelectorAll("li")
    const listOfTasks = [];

    for (const task of liTasks) {
        let taskText = task.innerText;

        //trim() remove spaces in the text
        taskText = taskText.replace("Delete","").trim();
        
        listOfTasks.push(taskText);
      
    }
    //use json to save information or data between systems
    const taskJson = JSON.stringify(listOfTasks)

    //store information in the browser
    //just save strings
    //the firdt is the name used to pick the informations and second the information you want to save
    localStorage.setItem("tasks",taskJson)
}

function addTasksSaved(){
    //get the variable tasks in localStorage
    const tasks = localStorage.getItem("tasks")

    //trans forme the json to array 
    const listOfTasks = JSON.parse(tasks)

    for(let task of listOfTasks){
        createTask(task)
    }
}

function createTask(textInput) {

    const li = createLi();
    li.innerText = textInput;
    task.appendChild(li);
    clearInput();
    createButtonDelete(li);
    saveTask();
    
}

//when press on  keyboard key
inputTask.addEventListener("keypress", function (e) {

    //keyCode ===13 this is keybord enter
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
})

buttonTask.addEventListener("click", function () {

    if (!inputTask.value) return;
    createTask(inputTask.value);
})

document.addEventListener("click", function (e) {
    const event = e.target;

    //delete the task
    if (event.classList.contains("delete")) {
        
        //parentElement select the parent of this element, in this case li, and remove delete then 
        event.parentElement.remove();
        saveTask();
    }
})


addTasksSaved()