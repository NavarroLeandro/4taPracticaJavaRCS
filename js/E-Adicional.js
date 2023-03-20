// Con el siguiente array de objetos, crear una funcion que permita 
// dibujar una tabla con las columnas Producto - categoria - precio. Realizar las siguientes tareas:

// Mostrar la tabla completa
// filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.
// Buscar un producto serum y mostrarlo por pantalla,
// Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto no existe en el array.


let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    { 
      nombreProducto: "Tonico exfoliante", 
      precio: 2350.45, 
      categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];

  function estructuraTabla(listaProductos) {
    let tabla = "<table>";
    tabla += "<tr><th>Producto</th><th>Precio</th><th>Categoria</th></tr>";
    listaProductos.forEach((producto) => {
      tabla += "<tr>";
      tabla += "<td>" + producto.nombreProducto + "</td>";
      tabla += "<td>" + producto.precio + "</td>";
      tabla += "<td>" + producto.categoria + "</td>";
      tabla += "</tr>";
    });
    tabla += "</table>";
    document.write("<br><b>Tabla de productos</b>")
    document.write(tabla);
  
    let categoriaFiltro = "Protector solar"
    let productosFiltrados = listaProductos.filter(
      (producto) => producto.categoria === categoriaFiltro
    )
  
    let tablaFiltrada = "<table>"
    tablaFiltrada += "<tr><th>Producto</th><th>Precio</th><th>Categoria</th></tr>"
    productosFiltrados.forEach((producto) => {
      tablaFiltrada += "<br>"
      tablaFiltrada += "<tr>"
      tablaFiltrada += "<td>" + producto.nombreProducto + "</td>"
      tablaFiltrada += "<td>" + producto.precio + "</td>"
      tablaFiltrada += "<td>" + producto.categoria + "</td>"
      tablaFiltrada += "</tr>"
    })
  
    tablaFiltrada += "</table>"
    document.write("<br><br><b>Tabla con filtro '"+ categoriaFiltro +"'</b>")
    document.write(tablaFiltrada)
  
    let productoBuscar = listaProductos.find((producto) => producto.nombreProducto === "Sérum hidratante")
  
    if(productoBuscar){
      document.write("<br><br>Producto buscado: <b>" + productoBuscar.nombreProducto)
    }else{
      document.write("<br>No se encontró ningun producto con ese nombre")
    }
  
    let productoNoExiste = listaProductos.find((producto) => producto.nombreProducto === "Bruma")
  
    if(productoNoExiste){
      document.write(productoNoExiste)
    } else{
      document.write("<br><br></b>No se encontró ningun producto con el nombre <b>'Bruma'")
    }
  }
  estructuraTabla(listaProductos)

  