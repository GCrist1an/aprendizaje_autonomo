let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2


let primero = frutas[0];
// Manzana

let ultimo = frutas[frutas.length - 1];
// Banana

console.log (primero);
console.log (ultimo);
frutas[1] = "Naranja";
console.log(frutas);
// ["Manzana", "Naranja"]   
frutas.push("Mango");
console.log(frutas);
// ["Manzana", "Naranja", "Mango"]

// ============================================
// LABORATORIO 5: Arreglos (Arrays)
// ============================================

// 1. CREAR ARREGLOS
let frutas = ["Manzana", "Banana", "Naranja"];
let numeros = [10, 20, 30, 40, 50];
let mixto = [1, "texto", true, null];
let vacio = [];

console.log("Frutas:", frutas);
console.log("Primer elemento:", frutas[0]);
console.log("Último elemento:", frutas[frutas.length - 1]);

// 2. AGREGAR ELEMENTOS
frutas.push("Uva");           // Agregar al final
frutas.unshift("Fresa");      // Agregar al inicio
console.log("\nDespués de agregar:", frutas);

// 3. ELIMINAR ELEMENTOS
let ultimaFruta = frutas.pop();      // Eliminar del final
let primeraFruta = frutas.shift();   // Eliminar del inicio
console.log("Eliminadas:", primeraFruta, ultimaFruta);
console.log("Array actual:", frutas);

// 4. MÉTODOS DE BÚSQUEDA
let ciudades = ["Bogotá", "Medellín", "Cali", "Cartagena"];

console.log("\n=== BÚSQUEDA ===");
console.log("¿Incluye 'Cali'?", ciudades.includes("Cali"));
console.log("Índice de 'Medellín':", ciudades.indexOf("Medellín"));
console.log("Índice de 'Lima':", ciudades.indexOf("Lima")); // -1 si no existe

// 5. MÉTODOS DE TRANSFORMACIÓN

// map - transforma cada elemento
let precios = [100, 200, 300];
let preciosConIVA = precios.map(precio => precio * 1.19);
console.log("\n=== MAP ===");
console.log("Precios:", precios);
console.log("Con IVA (19%):", preciosConIVA);

// filter - filtra elementos
let edades = [15, 22, 18, 30, 12, 25];
let mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log("\n=== FILTER ===");
console.log("Edades:", edades);
console.log("Mayores de edad:", mayoresDeEdad);

// find - encuentra el primer elemento que cumple
let productos = [
    {nombre: "Laptop", precio: 1000},
    {nombre: "Mouse", precio: 20},
    {nombre: "Teclado", precio: 50}
];
let productoBarato = productos.find(p => p.precio < 30);
console.log("\n=== FIND ===");
console.log("Producto < $30:", productoBarato);

// reduce - reduce a un solo valor
let numeros2 = [1, 2, 3, 4, 5];
let suma = numeros2.reduce((acumulador, num) => acumulador + num, 0);
console.log("\n=== REDUCE ===");
console.log("Números:", numeros2);
console.log("Suma total:", suma);

// 6. MÉTODOS DE ORDEN
let nombres = ["Carlos", "Ana", "Beatriz", "David"];
console.log("\n=== ORDENAMIENTO ===");
console.log("Original:", nombres);
console.log("Ordenado:", [...nombres].sort()); // Spread para no modificar original
console.log("Invertido:", [...nombres].reverse());

let valores = [50, 10, 30, 20];
console.log("Números ordenados:", [...valores].sort((a, b) => a - b));

// 7. MÉTODOS ÚTILES
console.log("\n=== MÉTODOS ÚTILES ===");

// slice - extraer porción
let colores = ["rojo", "verde", "azul", "amarillo", "morado"];
console.log("Del índice 1 al 3:", colores.slice(1, 3));

// splice - modificar array
let animales = ["perro", "gato", "conejo", "pez"];
animales.splice(2, 1, "hamster"); // Elimina 1 en pos 2, inserta "hamster"
console.log("Después de splice:", animales);

// concat - unir arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log("Concatenados:", arr1.concat(arr2));

// join - convertir a string
console.log("Join con '-':", frutas.join(" - "));

// 8. VERIFICACIONES
console.log("\n=== VERIFICACIONES ===");

// every - todos cumplen
let todosMayores = edades.every(edad => edad >= 18);
console.log("¿Todos mayores de 18?", todosMayores);

// some - al menos uno cumple
let algunMayor = edades.some(edad => edad >= 18);
console.log("¿Alguno mayor de 18?", algunMayor);

// 9. EJERCICIO PRÁCTICO: Sistema de Inventario
console.log("\n=== INVENTARIO DE TIENDA ===");

let inventario = [
    {producto: "Laptop", cantidad: 5, precio: 1000},
    {producto: "Mouse", cantidad: 20, precio: 25},
    {producto: "Teclado", cantidad: 15, precio: 75},
    {producto: "Monitor", cantidad: 8, precio: 300}
];

// Valor total del inventario
let valorTotal = inventario.reduce((total, item) => {
    return total + (item.cantidad * item.precio);
}, 0);
console.log("Valor total inventario: $" + valorTotal);

// Productos con stock bajo
let stockBajo = inventario.filter(item => item.cantidad < 10);
console.log("Stock bajo:", stockBajo.map(i => i.producto));

// Producto más caro
let masCaro = inventario.reduce((max, item) => 
    item.precio > max.precio ? item : max
);
console.log("Más caro:", masCaro.producto);

// DESAFÍO: Crea funciones para:
// 1. Eliminar duplicados de un array


let inventario1 = ["Laptop", "Mouse", "Teclado", "Monitor", "Mouse", "Laptop"];

function eliminarDuplicados(array) {
    let sinDuplicados = []; // 1️⃣ Array auxiliar

    for (let i = 0; i < array.length; i++) { // 2️⃣ Recorremos el array
        if (!sinDuplicados.includes(array[i])) { // 3️⃣ Si NO existe
            sinDuplicados.push(array[i]); // 4️⃣ Lo agregamos
        }
    }

    return sinDuplicados; // 5️⃣ Devolvemos el resultado
}

console.log(eliminarDuplicados(inventario1));

function segundoMasGrande(arr) {
    if (arr.length < 2) {
        return "El arreglo debe tener al menos dos números";
    }

    let mayor = arr[0];
    let segundoMayor = -Infinity;

    for (let num of arr) {
        if (num > mayor) {
            segundoMayor = mayor;
            mayor = num;
        } else if (num < mayor && num > segundoMayor) {
            segundoMayor = num;
        }
    }

    return segundoMayor;
}

// Prueba
console.log(segundoMasGrande([10, 5, 20, 8]));
console.log(segundoMasGrande([20, 20, 10]));



// 3. Aplanar un array de arrays [[1,2], [3,4]] => [1,2,3,4]

function aplanarArray(arrays) {
    let resultado = []; // 1️⃣ Array auxiliar 
    for (let subArray of arrays) { // 2️⃣ Recorremos el array principal
        for (let elemento of subArray) { // 3️⃣ Recorremos cada sub-array
            resultado.push(elemento); // 4️⃣ Agregamos el elemento al resultado
        }   
    }
    return resultado; // 5️⃣ Devolvemos el array aplanado
}
console.log(aplanarArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]