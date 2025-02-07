// Declarar la variable nota con un valor entre 0 y 100
let nota = 85; // Puedes cambiar este valor para probar diferentes casos

// Verificar si la nota es válida
if (nota >= 0 && nota <= 100) {
    // Evaluar la nota y asignar un mensaje
    if (nota >= 90) {
        console.log(`Tu nota es ${nota}: Excelente`);
    } else if (nota >= 75) {
        console.log(`Tu nota es ${nota}: Bien`);
    } else if (nota >= 60) {
        console.log(`Tu nota es ${nota}: Suficiente`);
    } else {
        console.log(`Tu nota es ${nota}: No aprobado`);
    }
} else {
    console.log("Nota inválida. Ingresa un número entre 0 y 100.");
}

// Pruebas con diferentes valores
let notasDePrueba = [45, 60, 75, 0, 95];

notasDePrueba.forEach(notaPrueba => {
    if (notaPrueba >= 90) {
        console.log(`Tu nota es ${notaPrueba}: Excelente`);
    } else if (notaPrueba >= 75) {
        console.log(`Tu nota es ${notaPrueba}: Bien`);
    } else if (notaPrueba >= 60) {
        console.log(`Tu nota es ${notaPrueba}: Suficiente`);
    } else {
        console.log(`Tu nota es ${notaPrueba}: No aprobado`);
    }
});
