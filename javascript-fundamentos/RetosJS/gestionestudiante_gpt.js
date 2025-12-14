
// chat GPT  CODIGO PROFESIONAL :

// ============================================
// SISTEMA DE GESTIÓN DE ESTUDIANTES
// Código estilo profesional (sin frameworks)
// ============================================

const estudiantes = [
    { nombre: "Ana", edad: 20, notas: [4.0, 3.5, 4.5] },
    { nombre: "Carlos", edad: 17, notas: [3.0, 2.8, 3.2] },
    { nombre: "Beatriz", edad: 22, notas: [4.8, 4.9, 5.0] },
    { nombre: "David", edad: 19, notas: [2.5, 3.0, 2.8] }
];

// =====================
// FUNCIONES UTILITARIAS
// =====================

const calcularPromedio = (notas) => {
    if (!notas.length) return 0;

    return notas.reduce((suma, nota) => suma + nota, 0) / notas.length; // promedio
};

const esEstudianteValido = (estudiante) => {
    return estudiante.notas.every(nota => nota >= 0 && nota <= 5); // todo lo que sea entre 0 y 5
};

const estaAprobado = (estudiante) => {
    return calcularPromedio(estudiante.notas) >= 3.0; // promedio >= 3.0
};

// =====================
// LÓGICA DE NEGOCIO
// =====================

const estudiantesConPromedio = estudiantes.map(estudiante => ({
    ...estudiante,
    promedio: calcularPromedio(estudiante.notas)
}));

const estudiantesAprobados = estudiantesConPromedio.filter(estaAprobado);

const mejorEstudiante = estudiantesConPromedio.reduce((mejor, actual) =>{  
    return actual.promedio > mejor.promedio ? actual : mejor;
});

// =====================
// REPORTE
// =====================

console.log("=== REPORTE DE ESTUDIANTES ===");

estudiantesConPromedio.forEach(est => {
    const estado = est.promedio >= 3 ? "APROBADO" : "REPROBADO";
    console.log(`${est.nombre} → Promedio: ${est.promedio.toFixed(2)} → ${estado}`);
});

console.log(`\nMejor estudiante: ${mejorEstudiante.nombre} (${mejorEstudiante.promedio.toFixed(2)})`);


//let suma = notas.reduce((suma, nota) => suma + nota, 0);
//let promedio = suma / notas.length;
//return promedio;
