const tasks = []; // Array to store tasks
let time = 0; // Variable to keep track of time
let timer = null; // Timer for tracking intervals
let timerBreak = null; // Timer for tracking breaks
let current = null; // Current task or state

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#ittask');
const form = document.querySelector('#form');
const taskname = document.querySelector("#time #taskname");
const taskContainer = document.querySelector('#task');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (itTask.value.trim() !== "") {
        createTask(itTask.value.trim());
        itTask.value = "";
        renderTasks();
    }
});

// Function to create a new task
function createTask(value) {
    const newTask = {
        id: Math.random().toString(36).slice(2),
        title: value,
        completed: false,
    };
    tasks.unshift(newTask);
}

// Function to render tasks
function renderTasks() {
    const html = tasks.map(task => `
        <div class="task">
            <div class="completed">
                ${task.completed 
                    ? `<span class="done">Done</span>` 
                    : `<button class="start-button" data-id="${task.id}">${task.inProgress ? "In progress..." : "Start"}</button>`}
            </div>
            <div class="title">${task.title}</div>
        </div>
    `);
    taskContainer.innerHTML = html.join('');

    const startButtons = document.querySelectorAll(".task .start-button");

    startButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!time && !button.textContent.includes("In progress...")) {
                const id = button.getAttribute("data-id");
                startButtonsHandler(id);
                button.textContent = "In progress...";
            }
        });
    });
}

function startButtonsHandler(id) {
    time = 5;
    current = id;
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        console.error("Task not found!");
        return;
    }
    tasks[taskIndex].inProgress = true;
    taskname.textContent = tasks[taskIndex].title;

    timer = setInterval(() => {
        timeHandler(id);
    }, 1000);
}

function timeHandler(id) {
    time--;
    renderTime();

    if (time === 0) {
        clearInterval(timer);
        markCompleted(id);
        renderTasks();
        startBreak();
    }
}

function startBreak(){
    time = 5;
    taskname.textContent = "break";
    timerBreak = setInterval(() => {
        timerBreakHandler();
    }, 1000);
}

function timerBreakHandler(){
    time--;
    renderTime();

    if (time === 0) {
        clearInterval(timerBreak);
        current = null;
        taskname.textContent = "";
        renderTasks();
    }
}

function renderTime() {
    const timeDiv = document.querySelector("#time #value");
    const minutes = parseInt(time / 60);
    const seconds = time % 60;

    timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function markCompleted(id){
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        tasks[taskIndex].inProgress = false; // Reset inProgress status
    }
}