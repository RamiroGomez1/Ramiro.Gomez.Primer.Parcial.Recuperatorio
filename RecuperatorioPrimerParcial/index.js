let hamburguesas = [
    { 'id': 1, 'nombre': 'Armonia', 'precio': 12000, 'descripcion': 'Doble medallón de carne, queso cheddar, queso roquefort, huevo frito y pan con queso gratinado.', 'img': 'assets/hamburguesas/burga-1.jpg' },
    { 'id': 2, 'nombre': 'Doble batalla', 'precio': 15000, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble beacon, cebolla caramelizada y pan con semillas de sésamo.', 'img': 'assets/hamburguesas/burga-2.jpg' },
    { 'id': 3, 'nombre': 'Clásica Law', 'precio': 9000, 'descripcion': 'Medallón de carne, queso cheddar, panceta, cebolla crispy, salsa barbacoa, tomate, lechuga y pan con semillas de sésamo.', 'img': 'assets/hamburguesas/burga-3.jpg' },
    { 'id': 4, 'nombre': 'Exotically', 'precio': 16500, 'descripcion': 'Medallón de carne, doble queso roquefort, rúcula, cebolla caramelizada, tomate, hongo portobello salteado y pan brioche con semillas.', 'img': 'assets/hamburguesas/burga-4.jpg' },
    { 'id': 5, 'nombre': 'La Bestia', 'precio': 19000, 'descripcion': 'Quíntuple medallón de carne, 5 capas de cheddar, panceta en cada piso, cheddar en cada piso, queso especial derretido y pan con queso gratinado.', 'img': 'assets/hamburguesas/burga-5.jpg' },
    { 'id': 6, 'nombre': 'Nuggy Chop', 'precio': 14500, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble panceta, cebolla caramelizada, Nuggets de muzzarella y pan con queso gratinado.', 'img': 'assets/hamburguesas/burga-6.jpg' },
]

let bebidas = [
    { 'id': 7, 'nombre': 'Agua sin gas (1L)', 'precio': 2000, 'descripcion': 'Botella 1 litro agua Villavicencio sin gas.', 'img': 'assets/bebidas/agua-con-gas.png' },
    { 'id': 8, 'nombre': 'Agua con gas (1L)', 'precio': 1500, 'descripcion': 'Botella 1 litro agua Saldan con gas.', 'img': 'assets/bebidas/agua-sin-gas.png' },
    { 'id': 9, 'nombre': 'Aquarius Manzana (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de manzana.', 'img': 'assets/bebidas/aquarius-manzana.png' },
    { 'id': 10, 'nombre': 'Aquarius Pomelo (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de pomelo.', 'img': 'assets/bebidas/aquarius-pomelo.png' },
    { 'id': 11, 'nombre': 'Aquarius Naranja (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de naranja.', 'img': 'assets/bebidas/aquarius-naranja.png' },
    { 'id': 12, 'nombre': 'Coca-Cola (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Coca-Cola.', 'img': 'assets/bebidas/coca-cola.png' },
    { 'id': 13, 'nombre': 'Sprite (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Sprite.', 'img': 'assets/bebidas/sprite.png' },
]

let tragos = [
    { 'id': 14, 'nombre': 'Campari', 'precio': 6000, 'descripcion': 'Vaso de Campari y jugo de naranja.', 'img': 'assets/tragos/campari.png' },
    { 'id': 15, 'nombre': 'Fernet', 'precio': 7000, 'descripcion': 'Vaso de Coca-Cola y Fernet.', 'img': 'assets/tragos/fernet.png' },
    { 'id': 16, 'nombre': 'Gancia', 'precio': 6000, 'descripcion': 'Vaso de Gancia y Sprite.', 'img': 'assets/tragos/gancia.png' },
    { 'id': 17, 'nombre': 'Ron Havana Club', 'precio': 9000, 'descripcion': 'Vaso de Ron y Coca-Cola.', 'img': 'assets/tragos/ron.png' },
    { 'id': 18, 'nombre': 'Daiquiri', 'precio': 7000, 'descripcion': 'Vaso de Daiquiri.', 'img': 'assets/tragos/daiquiri.png' },
]

let listaProductos = [
    { 'id': 1, 'nombre': 'Armonia', 'precio': 12000, 'descripcion': 'Doble medallón de carne, queso cheddar, queso roquefort, huevo frito y pan con queso gratinado.', 'img': 'assets/hamburguesas/burga-1.jpg' },
    { 'id': 2, 'nombre': 'Doble batalla', 'precio': 15000, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble beacon, cebolla caramelizada y pan con semillas de sésamo.', 'img': 'assets/hamburguesas/burga-2.jpg' },
    { 'id': 3, 'nombre': 'Clásica Law', 'precio': 9000, 'descripcion': 'Medallón de carne, queso cheddar, panceta, cebolla crispy, salsa barbacoa, tomate, lechuga y pan con semillas de sésamo.', 'img': 'assets/hamburguesas/burga-3.jpg' },
    { 'id': 4, 'nombre': 'Exotically', 'precio': 16500, 'descripcion': 'Medallón de carne, doble queso roquefort, rúcula, cebolla caramelizada, tomate, hongo portobello salteado y pan brioche con semillas.', 'img': 'assets/hamburguesas/burga-4.jpg' },
    { 'id': 5, 'nombre': 'La Bestia', 'precio': 19000, 'descripcion': 'Quíntuple medallón de carne, 5 capas de cheddar, panceta en cada piso, cheddar en cada piso, queso especial derretido y pan con queso gratinado.', 'img': 'assets/hamburguesas/burga-5.jpg' },
    { 'id': 6, 'nombre': 'Nuggy Chop', 'precio': 14500, 'descripcion': 'Doble medallón de carne, doble queso cheddar, doble panceta, cebolla caramelizada, Nuggets de muzzarella y pan con queso gratinado.', 'img': 'assets/hamburguesas/burga-6.jpg' },
    { 'id': 7, 'nombre': 'Agua sin gas (1L)', 'precio': 2000, 'descripcion': 'Botella 1 litro agua Villavicencio sin gas.', 'img': 'assets/bebidas/agua-con-gas.png' },
    { 'id': 8, 'nombre': 'Agua con gas (1L)', 'precio': 1500, 'descripcion': 'Botella 1 litro agua Saldan con gas.', 'img': 'assets/bebidas/agua-sin-gas.png' },
    { 'id': 9, 'nombre': 'Aquarius Manzana (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de manzana.', 'img': 'assets/bebidas/aquarius-manzana.png' },
    { 'id': 10, 'nombre': 'Aquarius Pomelo (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de pomelo.', 'img': 'assets/bebidas/aquarius-pomelo.png' },
    { 'id': 11, 'nombre': 'Aquarius Naranja (3L)', 'precio': 5500, 'descripcion': 'Botella 3 litros agua saborizada Aquarius de naranja.', 'img': 'assets/bebidas/aquarius-naranja.png' },
    { 'id': 12, 'nombre': 'Coca-Cola (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Coca-Cola.', 'img': 'assets/bebidas/coca-cola.png' },
    { 'id': 13, 'nombre': 'Sprite (1.5L)', 'precio': 4500, 'descripcion': 'Botella 1.5 litros de Sprite.', 'img': 'assets/bebidas/sprite.png' },
    { 'id': 14, 'nombre': 'Campari', 'precio': 6000, 'descripcion': 'Vaso de Campari y jugo de naranja.', 'img': 'assets/tragos/campari.png' },
    { 'id': 15, 'nombre': 'Fernet', 'precio': 7000, 'descripcion': 'Vaso de Coca-Cola y Fernet.', 'img': 'assets/tragos/fernet.png' },
    { 'id': 16, 'nombre': 'Gancia', 'precio': 6000, 'descripcion': 'Vaso de Gancia y Sprite.', 'img': 'assets/tragos/gancia.png' },
    { 'id': 17, 'nombre': 'Ron Havana Club', 'precio': 9000, 'descripcion': 'Vaso de Ron y Coca-Cola.', 'img': 'assets/tragos/ron.png' },
    { 'id': 18, 'nombre': 'Daiquiri', 'precio': 7000, 'descripcion': 'Vaso de Daiquiri.', 'img': 'assets/tragos/daiquiri.png' },
]

function obtenerCarrito() {
    let carrito = localStorage.getItem("carrito");
    let carritoParseado = JSON.parse(carrito)|| [];
    return carritoParseado;
}

function guardarCarrito(arrayCarrito) {
    let carrito = JSON.stringify(arrayCarrito)
    localStorage.setItem("carrito", carrito)
}


function sumarAlCarrito(id) {
    let carrito = obtenerCarrito();
    let existe = false;
    let productoSeleccionado = listaProductos.filter(producto => producto["id"] == id)[0]

    let nombreProductoSeleccionado = productoSeleccionado.nombre
    let precioProductoSeleccionado = productoSeleccionado["precio"]

    console.log(nombreProductoSeleccionado)
    console.log(precioProductoSeleccionado)

    
    for (let i = 0; i < carrito.length; i++) {
        
        if (carrito[i]["nombre"] == productoSeleccionado["nombre"]) {
            carrito[i]["cantidad"] += 1
            existe = true
            
        }
    }
    
    if(!existe){

        let objetoProducto = {
            nombre: nombreProductoSeleccionado,
            precio: precioProductoSeleccionado,
            cantidad: 1
        }
        
        carrito.push(objetoProducto)
    }
    
    alert(`Un/una: ${nombreProductoSeleccionado} fue agregado al carrito`)
    guardarCarrito(carrito);
    console.log(productoSeleccionado)
    console.log(carrito)
}


function ordenarProductosPorPrecio(arrayCategoria, idInput, idContenedor) {
    let textoInput = document.getElementById(idInput).value.toLowerCase();
    let arrayFiltrado = arrayCategoria.filter(producto => producto.nombre.toLowerCase().includes(textoInput))

    let arrayOrdenado = arrayCategoria.sort((a,b) => a.precio - b.precio);

    mostrarProductos(arrayOrdenado, idContenedor);
}

function filtrarProductos(arrayCategoria, idInput, idContenedor){
    let textoInput = document.getElementById(idInput).value.toLowerCase();

    let arrayFiltrado = arrayCategoria.filter(producto => producto.nombre.toLowerCase().includes(textoInput))
    
    mostrarProductos(arrayFiltrado, idContenedor)
}


function mostrarProductos(arrayProductos, id) {

    let espacio = document.getElementById(id);


    if (id === "listado-hamburguesas") {
        espacio.innerHTML = arrayProductos.map(producto => `
    
            <li class="li-hamburguesa" id="${producto.id}">
                        <img class="img-producto" src="${producto.img}" alt="hamburguesa">
                        <div>
                            <h3 class="nombre-producto">${producto.nombre}</h3>
                            <p class="precio-producto">$${producto.precio}</p>
                            <p class="descripcion-producto">${producto.descripcion}</p>
                        </div> 
                    <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${producto["id"]})"> Agregar al carrito </button>
                </li>
            `
        ).join("")

    } else if (id === "listado-bebidas") {
        espacio.innerHTML = arrayProductos.map(producto => `
    
            <li class="li-bebida" id="${producto.id}">
                        <img class="img-producto" src="${producto.img}" alt="bebida">
                        <div>
                            <h3 class="nombre-producto">${producto.nombre}</h3>
                            <p class="precio-producto">$${producto.precio}</p>
                            <p class="descripcion-producto">${producto.descripcion}</p>
                        </div> 
                    <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${producto["id"]})"> Agregar al carrito </button>
            `
        ).join("")
    } else if (id === "listado-tragos") {
        espacio.innerHTML = arrayProductos.map(producto => `
    
            <li class="li-tragos" id="${producto.id}">
                        <img class="img-producto" src="${producto.img}" alt="trago">
                        <div>
                            <h3 class="nombre-producto">${producto.nombre}</h3>
                            <p class="precio-producto">$${producto.precio}</p>
                            <p class="descripcion-producto">${producto.descripcion}</p>
                        </div> 
                    <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${producto["id"]})"> Agregar al carrito </button>
                    </li>
                    `
                ).join("")
            }
            
        }

window.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(hamburguesas, "listado-hamburguesas")
    mostrarProductos(bebidas, "listado-bebidas")
    mostrarProductos(tragos, "listado-tragos")
})

