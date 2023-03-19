// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// ● Una propiedad titular con el valor "Alex".
// ● Una propiedad saldo, teniendo como valor inicial 0.
// ● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
// cantidad como parámetro
// ● Un método extraer() que permita retirar la cantidad pasada como
// parámetro.
// ● Un método informar() que retorne la información del estado de la cuenta.
// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
// mostrar la descripción del estado de la cuenta.

let cuenta = {
  titular: "alex",
  saldo: 0,
  ingresar: function(){
    nuevoSaldo = parseInt(prompt("ingrese la candidad de dinero que desea ingresar: "));
    this.saldo = this.saldo + nuevoSaldo;
  },

  extraer: function(){
    dineroExtraido = parseInt(prompt("ingrese la candidad de dinero que desea retirar: "));
    this.saldo = this.saldo - dineroExtraido;
  },


  informar: function(){
    console.log("El estado de cuenta actual cuenta con: " + this.saldo+ " Pesos.");
  }
};