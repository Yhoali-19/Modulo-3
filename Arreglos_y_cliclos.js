// Declarar un arreglo con diferentes tipos de frutas
const frutas = ["manzana", "plátano", "pera", "manzana", "naranja", "plátano", "pera", "manzana", "naranja"];

// Crear un objeto para almacenar la cantidad de cada fruta
const contadorFrutas = {};

// Recorrer el arreglo con un ciclo for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++; // Si la fruta ya existe en el objeto, aumenta su contador
    } else {
        contadorFrutas[fruta] = 1; // Si no existe, inicializa el contador en 1
    }
}

// Imprimir los resultados usando un ciclo while
let keys = Object.keys(contadorFrutas); // Obtener las claves del objeto
let index = 0;
while (index < keys.length) {
    let fruta = keys[index];
    console.log(`Hay ${contadorFrutas[fruta]} ${fruta}(s).`);
    index++;
}
