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
    let carrito = localStorage.getItem("carrito")
    return carrito ? JSON.parse(carrito) : [];
}

function guardarCarrito(arrayCarrito) {
    let carrito = JSON.stringify(arrayCarrito)
    localStorage.setItem("carrito", carrito)
}

function cargarProductosCarrito() 
{
    let tabla = document.getElementById("tabla-productos");
    let carrito = obtenerCarrito(); 
    let filasHTML = "";
    let total = 0;
    
    for (let i = 0; i < carrito.length; i++){


        filasHTML +=`
            <td>${carrito[i].nombre}</td>
            <td>${carrito[i].cantidad}</td>
            <td>$${carrito[i].precio}</td>
            <td>
            <button class="btn-restar-a-carrito" onclick="restarDelCarrito(${carrito[i]["id"]})">-</button>
            <button class="btn-sumar-a-carrito" onclick="sumarAlCarrito(${carrito[i]["id"]})">+</button>
            </td>
        </tr>`
        ;

        
        total += carrito[i].precio * carrito[i].cantidad;
    }

    
    if (tabla) {
        tabla.innerHTML = filasHTML;
    }
    
    
    let totalApagar = document.getElementById("valor-final");
    if (totalApagar) {
        totalApagar.innerText = `El valor final a pagar es de: $${total}`;
    }
}

function sumarAlCarrito(id) {
    let carrito = obtenerCarrito();
    let existe = false;

    let productoSeleccionado = listaProductos.filter(producto => producto["id"] == id)[0]
    console.log(productoSeleccionado)

    if(!productoSeleccionado) return;

    
    for (let i = 0; i < carrito.length; i++) {
        
        if (carrito[i].id == productoSeleccionado.id) {
            carrito[i].cantidad += 1
            existe = true
            break;
        }
    }
    
    if(!existe){

        let objetoProducto = {
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            cantidad: 1,
            id: id
        }
        
        carrito.push(objetoProducto)
    }
    
    guardarCarrito(carrito);
    alert(`Un/una: ${nombreProductoSeleccionado} fue agregado al carrito`)
    console.log(productoSeleccionado)
    console.log(carrito)
    location.reload

}

function restarDelCarrito(id) {
    let carrito = obtenerCarrito();
    let productoSeleccionado = listaProductos.filter(producto => producto["id"] == id);

    for (let i = 0; i< carrito.length ; i++){
        if(carrito[i]["id"] == id){
            productoSeleccionado = carrito[i]
        }
    }

    let existe = false;

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id == productoSeleccionado.id) {
            existe = true
            carrito[i].cantidad -=1

            if(carrito[i].cantidad === 0){
                let respuesta = confirm(`Quiere eliminar ${productoSeleccionado.nombre} del carrito`)

                if(respuesta) {
                    carrito.splice(i,1);
                    alert(`${productoSeleccionado.nombre} fue eliminado del carrito`)
                } else {carrito[i].cantidad = 1}

            }
            
            break;

        }
    }


    if (!existe) {
        alert(`No hay ningún producto ${productoSeleccionado.nombre}
    guardado en el carrito`);
    guardarCarrito(carrito);
    }

    guardarCarrito(carrito)

    location.reload

}

function limpiarCarrito() 
{
    localStorage.clear();
    alert("Carrito limpiado correctamente");
    location.reload();
}

window.addEventListener("DOMContentLoaded", () => {
    cargarProductosCarrito()
})
