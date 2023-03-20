// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ● ISBN
// ● Título
// ● Autor
// ● Número de páginas
// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el
// siguiente formato:
// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(ISBN, Titulo, Autor, NumeroDePaginas) {
     this.Autor = Autor;
     this.ISBN = ISBN;
     this.Titulo = Titulo;
     this.NumeroDePaginas = NumeroDePaginas;
    }
    mostrarLibro(){
        document.write("<p> El libro" + Libro.Titulo +"con ISBN"+ Libro.ISBN +" creado por el autor"+ Libro.Autor+"tiene páginas "+Libro.NumeroDePaginas +". </p>")
    }
}

