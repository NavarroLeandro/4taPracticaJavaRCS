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
    this._Autor = Autor;
    this._ISBN = ISBN;
    this._Titulo = Titulo;
    this._NumeroDePaginas = NumeroDePaginas;
  }

  get ISBN(){
    return this._ISBN;
  }
  set ISBN(nuevoISBN){
    this._ISBN = nuevoISBN;
  }
  

  get Titulo(){
    return this._Titulo;
  }
  set Titulo(nuevoTitulo){
    this._Titulo = nuevoTitulo;
  }
  

  get Autor(){
    return this._Autor;
  }
  set Autor(nuevoAutor){
    this._Autor = nuevoAutor;
  }

  get NumeroDePaginas(){
    return this._NumeroDePaginas;
  }
  set NumeroDePaginas(nuevoNumeroDePaginas){
    this._NumeroDePaginas = nuevoNumeroDePaginas;
  }

  mostrarLibro() {
    console.log(
      "El libro " +
        this._Titulo +
        " con ISBN " +
        this._ISBN +
        " creado por el autor " +
        this._Autor +
        " tiene páginas " +
        this._NumeroDePaginas +
        "."
    );
  }
}

const libro1 = new Libro("123456789", "El Quijote", "Miguel de Cervantes", 863);
const libro2 = new Libro("987654321", "La Odisea", "Homero", 496);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1.NumeroDePaginas > libro2.NumeroDePaginas) {
  console.log(
    "El libro " +
      libro1.Titulo +
      " tiene más páginas que el libro " +
      libro2.Titulo
  );
} else if (libro1.NumeroDePaginas < libro2.NumeroDePaginas) {
  console.log(
    "El libro " +
      libro2.Titulo +
      " tiene más páginas que el libro " +
      libro1.Titulo
  );
} else {
  console.log(
    "El libro " +
      libro2.Titulo +
      " tiene iguales páginas que el libro " +
      libro1.Titulo
  );
}
