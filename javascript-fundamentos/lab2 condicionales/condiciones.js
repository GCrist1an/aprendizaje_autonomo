// ============================================
// LABORATORIO 2: Condicionales
// ============================================

// 1. IF SIMPLE
let temperatura = 28;

if (temperatura > 30) {
    console.log("Hace mucho calor");
}

// 2. IF-ELSE
let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// 3. IF-ELSE IF-ELSE (Múltiples condiciones)
let nota = 85;

console.log("\n=== SISTEMA DE CALIFICACIONES ===");
if (nota >= 90) {
    console.log("Calificación: A - Excelente");
} else if (nota >= 80) {
    console.log("Calificación: B - Muy Bien");
} else if (nota >= 70) {
    console.log("Calificación: C - Bien");
} else if (nota >= 60) {
    console.log("Calificación: D - Suficiente");
} else {
    console.log("Calificación: F - Reprobado");
}

// 4. OPERADORES LÓGICOS
let usuario = "admin";
let contraseña = "1234";

console.log("\n=== SISTEMA DE LOGIN ===");
if (usuario === "admin" && contraseña === "1234") {
    console.log("✓ Acceso concedido");
} else {
    console.log("✗ Acceso denegado");
}

// 5. SWITCH (Alternativa a múltiples if-else)
let diaSemana = 3;

console.log("\n=== DÍAS DE LA SEMANA ===");
switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
    case 7:
        console.log("Fin de semana");
        break;
    default:
        console.log("Día inválido");
}

// 6. OPERADOR TERNARIO (If corto)
let esAdulto = edad >= 18 ? "Sí" : "No";
console.log("\n¿Es adulto?", esAdulto);

// 7. EJERCICIO PRÁCTICO: Calculadora de IMC
let peso = 70; // kg
let altura = 1.75; // metros
let imc = peso / (altura * altura);

console.log("\n=== CALCULADORA DE IMC ===");
console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Estado: Bajo peso");
} else if (imc < 25) {
    console.log("Estado: Peso normal");
} else if (imc < 30) {
    console.log("Estado: Sobrepeso");
} else {
    console.log("Estado: Obesidad");
}

// DESAFÍO: Crea un sistema que determine si un año es bisiesto
// Un año es bisiesto si es divisible por 4, excepto los siglos
// que deben ser divisibles por 400
let año = 2028;
// Tu código aquí...

console.log("\n=== AÑO BISIESTO ===");
if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) { // condicion de año bisiesto no debe ser divisible por 100 por eso dice excepto los siglos 

    console.log(año + " Si es un año bisiesto");
} else {
    console.log(año + " no es año bisiesto");
}
