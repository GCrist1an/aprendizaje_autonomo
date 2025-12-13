// ============================================
// LABORATORIO 3: Ciclos (Loops)
// ============================================

// 1. FOR LOOP (conoces el número de repeticiones)
console.log("=== TABLA DEL 5 ===");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 2. WHILE LOOP (mientras se cumpla condición)
console.log("\n=== CUENTA REGRESIVA ===");
let contador = 5;
while (contador > 0) {
    console.log(contador);
    contador--;
}
console.log("¡Despegue! 🚀");

// 3. DO-WHILE (ejecuta al menos una vez)
console.log("\n=== VALIDACIÓN DE CONTRASEÑA ===");
let intentos = 0;
let contraseñaCorrecta = "abc123";
let intento = "xyz"; // Primera prueba incorrecta

do {
    intentos++;
    console.log(`Intento ${intentos}: ${intento}`);
    
    if (intento === contraseñaCorrecta) {
        console.log("✓ Contraseña correcta");
        break;
    }
    
    // Simulamos otro intento
    intento = intentos === 1 ? "wrong" : "abc123";
    
} while (intentos < 3);

// 4. FOR...OF (iterar sobre elementos)
console.log("\n=== LISTA DE FRUTAS ===");
let frutas = ["Manzana", "Banana", "Naranja"];
for (let fruta of frutas) {
    console.log(`- ${fruta}`);
}

// 5. BREAK y CONTINUE
console.log("\n=== NÚMEROS PARES DEL 1 AL 10 ===");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue; // Salta los impares
    console.log(i);
}

console.log("\n=== BUSCAR NÚMERO ===");
for (let i = 1; i <= 100; i++) {
    if (i === 7) {
        console.log(`¡Encontrado el ${i}!`);
        break; // Detiene el ciclo
    }
}

// 6. CICLOS ANIDADOS
console.log("\n=== PATRÓN DE ASTERISCOS ===");
for (let fila = 1; fila <= 5; fila++) {
    let linea = "";
    for (let col = 1; col <= fila; col++) {
        linea += "* ";
    }
    console.log(linea);
}

// 7. EJERCICIO PRÁCTICO: Generador de números primos
console.log("\n=== NÚMEROS PRIMOS DEL 1 AL 20 ===");
for (let num = 2; num <= 20; num++) {
    let esPrimo = true;
    
    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            esPrimo = false;
            break;
        }
    }
    
    if (esPrimo) {
        console.log(num);
    }
}

// 8. EJERCICIO: Suma de números
console.log("\n=== SUMA DEL 1 AL 100 ===");
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("Resultado:", suma);

// DESAFÍO: Crea un programa que imprima la serie Fibonacci
// hasta el número 100 (0, 1, 1, 2, 3, 5, 8, 13, 21...)

console.log ("SERIE FINOBONACCI HASTA 100");
let a =0;
let b =1;
console.log(a);
console.log(b);
while (true) {
    let siguiente = a + b;

    if (siguiente > 100) {
        break;
    }

    console.log(siguiente);
    a = b;
    b = siguiente;
}
