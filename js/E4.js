// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
// las propiedades código, nombre y precio, además del método imprime datos, el
// cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores
// de los tres objetos instanciados.

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(`Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio}`);
  }
}

const productos = [];

productos.push(new Producto(1, 'Producto 1', 10));
productos.push(new Producto(2, 'Producto 2', 20));
productos.push(new Producto(3, 'Producto 3', 30));

productos.forEach(producto => {
  producto.imprimeDatos();
});
