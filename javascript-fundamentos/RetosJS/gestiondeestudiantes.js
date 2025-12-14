//  RETOS (gestion de estudiantes)


// RETO 1 — Promedio por estudiante

const estudiantes = [
    { nombre: "Ana", edad: 20, notas: [4.0, 3.5, 4.5] },
    { nombre: "Carlos", edad: 17, notas: [3.0, 2.8, 3.2] },
    { nombre: "Beatriz", edad: 22, notas: [4.8, 4.9, 5.0] },
    { nombre: "David", edad: 19, notas: [2.5, 3.0, 2.8] }
];

// RETO 1 — Promedio por estudiante
estudiantes.forEach(estudiante => {
    const sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    console.log(`El promedio de ${estudiante.nombre} es: ${promedio.toFixed(2)}`);
});

//Devuelva solo los estudiantes con promedio ≥ 3.0
const estudiantesAprobados = estudiantes.filter(estudiante => {
    const sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    return promedio >= 3.0;
});

//Mejor estudiante
const mejorEstudiante = estudiantesAprobados.reduce((mejor, estudiante) => {
    const sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    const sumaNotasMejor = mejor.notas.reduce((acum, nota) => acum + nota, 0);

    const promedioMejor = sumaNotasMejor / mejor.notas.length;
    return promedio > promedioMejor ? estudiante : mejor;
}, estudiantesAprobados[0]);

console.log(`\nEl mejor estudiante aprobado es: ${mejorEstudiante.nombre}`);    


//=== REPORTE DE ESTUDIANTES ===
//Ana → Promedio: 4.0 → APROBADO
//Carlos → Promedio: 3.0 → APROBADO
//Beatriz → Promedio: 4.9 → APROBADO
//David → Promedio: 2.8 → REPROBADO
console.log("\nReporte de estudiantes:");
estudiantes.forEach(estudiante => {
    const sumaNotas = estudiante.notas.reduce((acum, nota) => acum + nota, 0);   
    const promedio = sumaNotas / estudiante.notas.length;
    const estado = promedio >= 3.0 ? "APROBADO" : "REPROBADO";
    console.log(`${estudiante.nombre} → Promedio: ${promedio.toFixed(2)} → ${estado}`);
}

);



