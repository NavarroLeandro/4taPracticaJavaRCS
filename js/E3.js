// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
// propiedades de alto y ancho, mas los métodos necesarios para modificar y
// mostrar sus propiedades, calcular el perímetro y el área.

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  calcularPerimetro() {
    return perimetro = 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }

  mostrarPropiedades() {
    console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`, );
  }
}
