// ============================================
// LABORATORIO 6: Objetos
// ============================================

// 1. CREAR OBJETOS
let persona = {
    nombre: "Carlos",
    edad: 25,
    ciudad: "Bogotá",
    esEstudiante: true
};

console.log("Persona:", persona);
console.log("Nombre:", persona.nombre);        // Notación de punto
console.log("Edad:", persona["edad"]);         // Notación de corchetes

// 2. MODIFICAR Y AGREGAR PROPIEDADES
persona.edad = 26;                  // Modificar
persona.profesion = "Desarrollador"; // Agregar
delete persona.esEstudiante;        // Eliminar

console.log("\nPersona actualizada:", persona);

// 3. OBJETOS CON MÉTODOS
let calculadora = {
    marca: "Casio",
    modelo: "FX-991",
    sumar: function(a, b) {
        return a + b;
    },
    restar(a, b) {  // Sintaxis corta
        return a - b;
    }
};

console.log("\n=== CALCULADORA ===");
console.log("Suma:", calculadora.sumar(10, 5));
console.log("Resta:", calculadora.restar(10, 5));

// 4. THIS - referencia al objeto actual
let usuario = {
    nombre: "Ana",
    edad: 30,
    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    },
    cumplirAños() {
        this.edad++;
        return `¡Feliz cumpleaños! Ahora tienes ${this.edad} años`;
    }
};

console.log("\n=== USUARIO ===");
console.log(usuario.saludar());
console.log(usuario.cumplirAños());

// 5. OBJETOS ANIDADOS
let empresa = {
    nombre: "TechCorp",
    direccion: {
        calle: "Calle 100",
        numero: 123,
        ciudad: "Medellín",
        pais: "Colombia"
    },
    empleados: [
        {nombre: "Juan", cargo: "Developer"},
        {nombre: "María", cargo: "Designer"}
    ]
};

console.log("\n=== EMPRESA ===");
console.log("Empresa:", empresa.nombre);
console.log("Ciudad:", empresa.direccion.ciudad);
console.log("Primer empleado:", empresa.empleados[0].nombre);

// 6. MÉTODOS DE OBJETO

// Object.keys - obtener claves
let producto = {codigo: "A123", nombre: "Laptop", precio: 1000};
console.log("\n=== OBJECT.KEYS ===");
console.log("Claves:", Object.keys(producto));

// Object.values - obtener valores
console.log("Valores:", Object.values(producto));

// Object.entries - pares clave-valor
console.log("Entradas:", Object.entries(producto));

// 7. RECORRER OBJETOS

// for...in
console.log("\n=== RECORRER OBJETO ===");
for (let clave in producto) {
    console.log(`${clave}: ${producto[clave]}`);
}

// 8. DESESTRUCTURACIÓN
let {nombre, edad, ciudad} = persona;
console.log("\n=== DESESTRUCTURACIÓN ===");
console.log(nombre, edad, ciudad);

// Con renombre
let {nombre: nombrePersona, edad: edadPersona} = persona;
console.log(nombrePersona, edadPersona);

// 9. SPREAD OPERATOR (copiar/combinar)
let config1 = {color: "azul", tamaño: "grande"};
let config2 = {tamaño: "pequeño", peso: "ligero"};
let configFinal = {...config1, ...config2}; // config2 sobrescribe tamaño
console.log("\n=== SPREAD ===");
console.log("Config final:", configFinal);

// 10. EJERCICIO PRÁCTICO: Sistema de Biblioteca

console.log("\n=== SISTEMA DE BIBLIOTECA ===");

let biblioteca = {
    nombre: "Biblioteca Central",
    libros: [
        {
            titulo: "Cien años de soledad",
            autor: "Gabriel García Márquez",
            año: 1967,
            disponible: true
        },
        {
            titulo: "Don Quijote",
            autor: "Miguel de Cervantes",
            año: 1605,
            disponible: false
        },
        {
            titulo: "1984",
            autor: "George Orwell",
            año: 1949,
            disponible: true
        }
    ],
    
    // Método para buscar libros disponibles
    librosDisponibles() {
        return this.libros.filter(libro => libro.disponible);
    },
    
    // Método para prestar libro
    prestarLibro(titulo) {
        let libro = this.libros.find(l => l.titulo === titulo);
        if (libro && libro.disponible) {
            libro.disponible = false;
            return `Libro "${titulo}" prestado exitosamente`;
        }
        return `Libro "${titulo}" no disponible`;
    },
    
    // Método para devolver libro
    devolverLibro(titulo) {
        let libro = this.libros.find(l => l.titulo === titulo);
        if (libro) {
            libro.disponible = true;
            return `Libro "${titulo}" devuelto exitosamente`;
        }
        return `Libro "${titulo}" no encontrado`;
    },
    
    // Estadísticas
    estadisticas() {
        let total = this.libros.length;
        let disponibles = this.libros.filter(l => l.disponible).length;
        return {
            total,
            disponibles,
            prestados: total - disponibles
        };
    }
};

// Probar el sistema
console.log("Libros disponibles:");
biblioteca.librosDisponibles().forEach(l => console.log(`- ${l.titulo}`));

console.log("\n" + biblioteca.prestarLibro("1984"));
console.log(biblioteca.prestarLibro("1984")); // Ya no disponible

console.log("\n" + biblioteca.devolverLibro("Don Quijote"));

console.log("\nEstadísticas:", biblioteca.estadisticas());

// DESAFÍO: Crea un objeto "carrito de compras" con métodos para:
// 1. Agregar productos
// 2. Eliminar productos
// 3. Calcular total
// 4. Aplicar descuento