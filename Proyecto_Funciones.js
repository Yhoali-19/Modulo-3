// Array para almacenar los libros leídos
let librosLeidos = [];

// Función para agregar un libro al array
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: ${titulo}`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("No has leído ningún libro aún.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Pruebas de las funciones
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("1984");

mostrarLibrosLeidos();
