// ============================================
// LABORATORIO 4: Funciones
// ============================================

// 1. FUNCIÓN BÁSICA (sin parámetros, sin retorno)
function saludar() {
    console.log("¡Hola Mundo!");
}

saludar(); // Llamar la función

// 2. FUNCIÓN CON PARÁMETROS
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}!`);
}

saludarPersona("Carlos");
saludarPersona("María");

// 3. FUNCIÓN CON RETORNO
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);
console.log("5 + 3 =", resultado);

// 4. FUNCIÓN CON PARÁMETROS PREDETERMINADOS
function saludarConTitulo(nombre, titulo = "Sr.") {
    return `Hola ${titulo} ${nombre}`;
}

console.log(saludarConTitulo("Pérez"));           // Usa "Sr."
console.log(saludarConTitulo("García", "Dra."));  // Usa "Dra."

// 5. ARROW FUNCTIONS (funciones flecha)
const multiplicar = (a, b) => a * b;
const cuadrado = x => x * x; // Un parámetro, sin paréntesis
const saludar2 = () => "Hola"; // Sin parámetros

console.log(multiplicar(4, 5));
console.log(cuadrado(7));
console.log(saludar2());

// 6. FUNCIONES COMO VALORES
const operaciones = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => a / b
};

console.log("\n=== CALCULADORA ===");
console.log("10 + 5 =", operaciones.suma(10, 5));
console.log("10 - 5 =", operaciones.resta(10, 5));
console.log("10 * 5 =", operaciones.multiplicacion(10, 5));
console.log("10 / 5 =", operaciones.division(10, 5));

// 7. SCOPE (Alcance de variables)
let variableGlobal = "Soy global";

function demostrarScope() {
    let variableLocal = "Soy local";
    console.log(variableGlobal);  // ✓ Accede a global
    console.log(variableLocal);    // ✓ Accede a local
}

demostrarScope();
// console.log(variableLocal); // ✗ Error: no existe aquí

// 8. FUNCIONES PRÁCTICAS

// Validar email
function esEmailValido(email) {
    return email.includes("@") && email.includes(".");
}

console.log("\n=== VALIDACIÓN DE EMAIL ===");
console.log("juan@gmail.com:", esEmailValido("juan@gmail.com"));
console.log("invalido:", esEmailValido("invalido"));

// Calcular promedio
function calcularPromedio(numeros) {
    let suma = 0;
    for (let num of numeros) {
        suma += num;
    }
    return suma / numeros.length;
}

console.log("\n=== PROMEDIO DE NOTAS ===");
let notas = [85, 90, 78, 92, 88];
console.log("Notas:", notas);
console.log("Promedio:", calcularPromedio(notas));

// Encontrar el mayor
function encontrarMayor(arr) {
    let mayor = arr[0];
    for (let num of arr) {
        if (num > mayor) {
            mayor = num;
        }
    }
    return mayor;
}

console.log("Nota más alta:", encontrarMayor(notas));

// 9. FUNCIÓN RECURSIVA (se llama a sí misma)
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("\n=== FACTORIAL ===");
console.log("5! =", factorial(5)); // 5*4*3*2*1 = 120

// 10. CALLBACK (función como parámetro)
function procesarArray(arr, callback) {
    for (let item of arr) {
        callback(item);
    }
}

console.log("\n=== PROCESANDO NÚMEROS ===");
procesarArray([1, 2, 3, 4], num => console.log(`Número: ${num}`));

// DESAFÍO: Crea una función que convierta temperatura
// de Celsius a Fahrenheit y viceversa

function convertirTemperatura(valor, unidad) {
    if (unidad === "C") {
        return (valor * 9/5) + 32; // C a F
    } else if (unidad === "F") {
        return (valor - 32) * 5/9; // F a C
    } else {
        return "Unidad no válida. Usa 'C' o 'F'.";
    }

}

console.log("conversion de temperaturas:");
console.log("25°C a F:", convertirTemperatura(25, "C"));
console.log("77°F a C:", convertirTemperatura(77, "F"));
console.log(convertirTemperatura(100, "X"));