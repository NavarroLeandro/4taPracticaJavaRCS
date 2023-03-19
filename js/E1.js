// 1- Crea un objeto llamado auto que tenga algunas características como el color,
// marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
// permitir encender y apagar el auto.

let auto = {
  color: "rojo",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,
  encender: function() {
    if (!this.encendido) {
      this.encendido = true;
      console.log("El auto está encendido.");
    } else {
      console.log("El auto ya está encendido.");
    }
  },
  apagar: function() {
    if (this.encendido) {
      this.encendido = false;
      console.log("El auto está apagado.");
    } else {
      console.log("El auto ya está apagado.");
    }
  }
};