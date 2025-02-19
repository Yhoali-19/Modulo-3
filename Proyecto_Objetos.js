
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],

    describirLibro: function() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },

    
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
    },

    
    eliminarCapitulo: function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
        }
    }
};


libro.describirLibro();
libro.agregarCapitulo("Capítulo 4");
console.log("Capítulos:", libro.capitulos);
libro.eliminarCapitulo("Capítulo 2");
console.log("Capítulos después de eliminar:", libro.capitulos);
