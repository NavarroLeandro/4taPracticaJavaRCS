// 7- Nos piden realizar una agenda telefónica de contactos.
// Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.
// Una agenda de contactos está formada por un conjunto de contactos. Se podrá
// crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
// (10).
// Los métodos de la agenda serán los siguientes:
// ● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
// no puede almacenar más contactos indicar por pantalla.
// ● existeContacto(Conctacto): indica si el contacto pasado existe o no.
// ● listarContactos(): Lista toda la agenda
// ● buscarContacto(nombre): busca un contacto por su nombre y muestra su
// teléfono.
// ● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
// ha eliminado o no por pantalla
// ● agendaLlena(): indica si la agenda está llena.
// ● huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones por consola para probar todas estas funcionalidades.

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  equals(otroContacto) {
    return this.nombre === otroContacto.nombre;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamano = tamano;
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena()) {
      console.log("La agenda está llena, no se puede añadir el contacto.");
      return;
    }

    if (this.existeContacto(contacto)) {
      console.log("El contacto ya existe en la agenda.");
      return;
    }

    this.contactos.push(contacto);
    console.log("Contacto añadido a la agenda.");
  }

  existeContacto(contacto) {
    return this.contactos.some((c) => c.equals(contacto));
  }

  listarContactos() {
    console.log("Agenda de contactos:");
    this.contactos.forEach((c) => console.log(`${c.nombre}: ${c.telefono}`));
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find((c) => c.nombre === nombre);
    if (contactoEncontrado) {
      console.log(`Teléfono de ${nombre}: ${contactoEncontrado.telefono}`);
    } else {
      console.log(`No se encontró ningún contacto con el nombre ${nombre}`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex((c) => c.equals(contacto));
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log("Contacto eliminado de la agenda.");
    } else {
      console.log("No se encontro al contacto en la agenda.");
    }
  }
  agendaLlena() {
    return this.contactos.length >= this.tamano;
  }

  huecosLibres() {
    return this.tamano - this.contactos.length;
  }
}

// Crear una agenda con tamaño por defecto
const miAgenda = new Agenda();

// Crear una agenda con tamaño indicado
// const miAgenda = new Agenda(20);

function mostrarMenu() {
  console.log("Menú:");
  console.log("1. Añadir contacto");
  console.log("2. Comprobar si un contacto existe");
  console.log("3. Listar todos los contactos");
  console.log("4. Buscar contacto");
  console.log("5. Eliminar contacto");
  console.log("6. Comprobar si la agenda está llena");
  console.log("7. Ver cuántos contactos más podemos ingresar");
  console.log("0. Salir");
}

function ejecutarOpcion(opcion) {
  switch (opcion) {
    case "1":
      const nombre = prompt("Introduce el nombre del contacto:");
      const telefono = prompt("Introduce el teléfono del contacto:");
      const nuevoContacto = new Contacto(nombre, telefono);
      miAgenda.aniadirContacto(nuevoContacto);
      break;
    case "2":
      const nombreBusqueda = prompt("Introduce el nombre del contacto:");
      const contactoBuscado = new Contacto(nombreBusqueda, "");
      const existe = miAgenda.existeContacto(contactoBuscado);
      if (existe) {
        console.log("El contacto" + nombreBusqueda + "ya existe en la agenda.");
      } else {
        console.log(
          "El contacto " + nombreBusqueda + " no existe en la agenda"
        );
      }
      break;
    case "3":
      miAgenda.listarContactos();
      break;
    case "4":
      const nombreBusqueda2 = prompt("Introduce el nombre del contacto:");
      miAgenda.buscarContacto(nombreBusqueda2);
      break;
    case "5":
      const nombreEliminar = prompt(
        "Introduce el nombre del contacto a eliminar:"
      );
      const contactoEliminar = new Contacto(nombreEliminar, "");
      miAgenda.eliminarContacto(contactoEliminar);
      break;
    case "6":
        miAgenda.agendaLlena();
        break;
    case "7":
        miAgenda.huecosLibres();
    break;

    case "0":
        break;
  }
}

function ejecutarMenu() {
    let opcion;
    do {
      mostrarMenu();
      opcion = prompt("Introduce una opción:");
      ejecutarOpcion(opcion);
    } while (opcion !== "0");
  }
  
  ejecutarMenu();