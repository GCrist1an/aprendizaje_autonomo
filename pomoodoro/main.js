const tasks = []; // Array para almacenar las tareas
let time = 0; // Variable para llevar el control del tiempo
let timer = null; // Temporizador para los intervalos de trabajo
let timerBreak = null; // Temporizador para los intervalos de descanso
let current = null; // Tarea o estado actual

// Selección de elementos del DOM
const bAdd = document.querySelector('#bAdd'); // Botón de agregar tarea
const itTask = document.querySelector('#ittask'); // Campo de texto para ingresar tareas
const form = document.querySelector('#form'); // Formulario principal
const taskname = document.querySelector("#time #taskname"); // Nombre de la tarea actual
const taskContainer = document.querySelector('#task'); // Contenedor de la lista de tareas

// Evento para manejar el envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (itTask.value.trim() !== "") { // Verifica que el campo no esté vacío
        createTask(itTask.value.trim()); // Crea una nueva tarea
        itTask.value = ""; // Limpia el campo de texto
        renderTasks(); // Actualiza la lista de tareas en pantalla
    }
});

// Función para crear una nueva tarea
function createTask(value) {
    const newTask = {
        id: Math.random().toString(36).slice(2), // Genera un ID único
        title: value, // Título de la tarea
        completed: false, // Estado inicial de la tarea (no completada)
    };
    tasks.unshift(newTask); // Agrega la nueva tarea al inicio del array
}

// Función para renderizar la lista de tareas en el DOM
function renderTasks() {
    const html = tasks.map(task => `
        <div class="task">
            <div class="completed">
                ${task.completed 
                    ? `<span class="done">Done</span>` // Si está completada, muestra "Done"
                    : `<button class="start-button" data-id="${task.id}">${task.inProgress ? "In progress..." : "Start"}</button>`}
            </div>
            <div class="title">${task.title}</div>
        </div>
    `);
    taskContainer.innerHTML = html.join(''); // Inserta el HTML generado en el contenedor

    // Agrega eventos a los botones de "Start"
    const startButtons = document.querySelectorAll(".task .start-button");
    startButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!time && !button.textContent.includes("In progress...")) { // Si no hay un temporizador en curso
                const id = button.getAttribute("data-id"); // Obtiene el ID de la tarea
                startButtonsHandler(id); // Inicia el temporizador para la tarea
                button.textContent = "In progress..."; // Cambia el texto del botón
            }
        });
    });
}

// Función para manejar el inicio del temporizador
function startButtonsHandler(id) {
    time = 5; // Duración del temporizador (en segundos, para pruebas)
    current = id; // Almacena la tarea actual
    const taskIndex = tasks.findIndex(task => task.id === id); // Encuentra la tarea en el array
    if (taskIndex === -1) { // Verifica si la tarea existe
        console.error("Task not found!");
        return;
    }
    tasks[taskIndex].inProgress = true; // Marca la tarea como en progreso
    taskname.textContent = tasks[taskIndex].title; // Muestra el título de la tarea actual

    timer = setInterval(() => { // Inicia un temporizador que se ejecuta cada segundo
        timeHandler(id);
    }, 1000);
}

// Función para manejar el tiempo restante
function timeHandler(id) {
    time--; // Reduce el tiempo en 1 segundo
    renderTime(); // Actualiza el tiempo mostrado

    if (time === 0) { // Si el tiempo se acaba
        clearInterval(timer); // Detiene el temporizador
        markCompleted(id); // Marca la tarea como completada
        renderTasks(); // Actualiza la lista de tareas
        startBreak(); // Inicia el temporizador de descanso
    }
}

// Función para iniciar el descanso
function startBreak() {
    time = 5; // Duración del descanso (en segundos, para pruebas)
    taskname.textContent = "break"; // Muestra "break" como tarea actual
    timerBreak = setInterval(() => { // Inicia un temporizador para el descanso
        timerBreakHandler();
    }, 1000);
}

// Función para manejar el temporizador de descanso
function timerBreakHandler() {
    time--; // Reduce el tiempo en 1 segundo
    renderTime(); // Actualiza el tiempo mostrado

    if (time === 0) { // Si el descanso se acaba
        clearInterval(timerBreak); // Detiene el temporizador de descanso
        current = null; // Resetea la tarea actual
        taskname.textContent = ""; // Limpia el nombre de la tarea
        renderTasks(); // Actualiza la lista de tareas
    }
}

// Función para mostrar el tiempo en formato mm:ss
function renderTime() {
    const timeDiv = document.querySelector("#time #value");
    const minutes = parseInt(time / 60); // Calcula los minutos
    const seconds = time % 60; // Calcula los segundos

    // Muestra el tiempo con ceros iniciales si es necesario
    timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Función para marcar una tarea como completada
function markCompleted(id) {
    const taskIndex = tasks.findIndex(task => task.id === id); // Encuentra la tarea por ID
    if (taskIndex !== -1) { // Si la tarea existe
        tasks[taskIndex].completed = true; // Marca la tarea como completada
        tasks[taskIndex].inProgress = false; // Resetea el estado "en progreso"
    }
}
