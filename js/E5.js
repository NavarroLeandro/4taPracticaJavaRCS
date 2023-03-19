// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
// año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
// generación pertenece la persona creada y cual es el rasgo característico de esta
// generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones: *imagen sobre que generacion eres 
// (x, baby boomer, Z o mileneal) segun tu año de nacimiento*

// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
// persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
    this.DNI = this.generaDNI();
  }

  mostrarGeneracion() {
    let generacion;
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      generacion = "Silent";
      console.log(`La persona pertenece a la generación ${generacion}, y su rasgo característico es la Austeridad.`);
    } else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
      generacion = "Baby Boom";
      console.log(`La persona pertenece a la generación ${generacion}, y su rasgo característico es la Ambicion.`);
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      generacion = "Generación X";
      console.log(`La persona pertenece a la generación ${generacion}, y su rasgo característico es el Obsesion por el exito.`);
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      generacion = "Generación Y (Millennials)";
      console.log(`La persona pertenece a la generación ${generacion}, y su rasgo característico es la Frustracion.`);
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      generacion = "Generación Z";
      console.log(`La persona pertenece a la generación ${generacion}, y su rasgo característico es la Irreverencia.`);
    } else {
      console.log("No se reconoce la generación de la persona.");
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} es menor de edad.`);
    }
  }

  mostrarDatos() {
    console.log(`Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.anioNacimiento}`);
  }

  generaDNI() {
    return Math.floor(Math.random() * 100000000);
  }
}
