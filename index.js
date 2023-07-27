/*
//DIBUJO DE CABALLO EN ASCII ART
const asciiArt =
    ".,\n" +
    "/,`\\\n" +
    "` | \\____\\\n" +
    " _(      ) \\\n" +
    "\\\-\\~~~_|\\  \\\n" +
    "\   \\ `   \\  `\n" +
    "\     `     `\n" +
    "*supuestamente es un caballo*"
//array vacio para ingresar a los participantes
const participantes = []
//mensaje de bienvenida
let bienvenida = alert("Bienvenido a la carrera de caballos, a continuacion ingrese cantidad de participantes y de rondas a correr!")
//datos necesarios para la carrera
let rondas = parseInt(prompt("cuanta cantidad de rondas quiere hacer?"))
let cantidad = parseInt(prompt("cuantos participantes van a haber?"))
//cantidad total para el Math.random
let cantidadTotal = cantidad - 1

//ciclo para ingresar a los participantes
for (i = 0; i < cantidad; i++) {
    let nombre = prompt(`ingrese el nombre del jinete numero ${i + 1}`)
    participantes.push(nombre)
}

// funcion que permite hacer adelantamientos (hace un swap entre dos posiciones random del array participantes)
function swap(array) {
    let aux1 = Math.round(Math.random() * cantidadTotal)
    let aux2 = Math.round(Math.random() * cantidadTotal)
    while (aux2 === aux1) {
        aux2 = Math.round(Math.random() * cantidadTotal)
    }
    if (aux1 < aux2) {
        let i1 = array[aux1]
        let i2 = array[aux2]
        array[aux1] = array[aux2]
        array[aux2] = i1
        console.log(array)
        alert(`OMG ${i2} SE ACABA DE ADELANTAR \n ${asciiArt} \n ronda numero ${i}`)
    }
    else {
        let i1 = array[aux1]
        array[aux1] = array[aux2]
        array[aux2] = i1
        console.log(array)
        alert(`OMG ${i1} SE ACABA DE ADELANTAR \n ${asciiArt} \n ronda numero ${i}`)
    }
}


for (i = 0; i <= rondas; i++) {
    let aleatorio = Math.round(Math.random() * 3)
    if (i == 0) {
        alert(`Empezara la carrera, hagan sus apuestas entre los participantes \n${participantes.join("\n")}`)
    }
    else if (i == rondas) {
        console.log(participantes)
        console.log(`las posiciones son: \n posicion 1: ${participantes[0]} \n posicion 2:${participantes[1]} \n posicion 3: ${participantes[2]}`)
    }
    else if (i % aleatorio == 0) {
        swap(participantes)
    }
    else {
        alert(`${asciiArt} \n ronda numero ${i}`)
        console.log(participantes)
    }
}
alert(`Los tres mejores son: \n posicion 1: ${participantes[0]} \n posicion 2:${participantes[1]} \n posicion 3: ${participantes[2]}`)
*/

// Array con todos los producos
const productos = [
    //ZAPATOS
    {
        id: "zapato-0",
        titulo: "Zapato FERCHO",
        imagen: "../productos/zapatos/zapato-0.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 22500
    },
    {
        id: "zapato-1",
        titulo: "Zapato MERCHO",
        imagen: "../productos/zapatos/zapato-1.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 27000
    },
    {
        id: "zapato-2",
        titulo: "Zapato OZUNA",
        imagen: "../productos/zapatos/zapato-2.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 20000
    },
    {
        id: "zapato-3",
        titulo: "Zapato YSY-A",
        imagen: "../productos/zapatos/zapato-3.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 16000
    },
    {
        id: "zapato-4",
        titulo: "Zapato C-R-O",
        imagen: "../productos/zapatos/zapato-4.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 25000
    },
    {
        id: "zapato-5",
        titulo: "Zapato DUKI",
        imagen: "../productos/zapatos/zapato-5.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 20500
    },
    {
        id: "zapato-6",
        titulo: "Zapato NEO-PISTEA",
        imagen: "../productos/zapatos/zapato-6.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 23700
    },
    {
        id: "zapato-7",
        titulo: "Zapato ASAN",
        imagen: "../productos/zapatos/zapato-7.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 33000
    },
    {
        id: "zapato-8",
        titulo: "Zapato MIDEL",
        imagen: "../productos/zapatos/zapato-8.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 15000
    },
    {
        id: "zapato-9",
        titulo: "Zapato TOBI",
        imagen: "../productos/zapatos/zapato-9.webp",
        categoria: {
            nombre: "Zapatos",
            id: "zapato"
        },
        precio: 14500
    },
    // ZAPATILLAS
    {
        id: "zapatilla-0",
        titulo: "Zapatilla ARRUINARSE",
        imagen: "../productos/zapatillas/zapatilla-0.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 29000
    },
    {
        id: "zapatilla-1",
        titulo: "Zapatilla LOCA",
        imagen: "../productos/zapatillas/zapatilla-1.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 33000
    },
    {
        id: "zapatilla-2",
        titulo: "Zapatilla BEAUTIFUL",
        imagen: "../productos/zapatillas/zapatilla-2.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 30000
    },
    {
        id: "zapatilla-3",
        titulo: "Zapatilla CLARAMENTE",
        imagen: "../productos/zapatillas/zapatilla-3.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 40000
    },
    {
        id: "zapatilla-4",
        titulo: "Zapatilla CARNAVALITO",
        imagen: "../productos/zapatillas/zapatilla-4.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 35000
    },
    {
        id: "zapatilla-5",
        titulo: "Zapatilla DOMINGUICIDIO",
        imagen: "../productos/zapatillas/zapatilla-5.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 32000
    },
    {
        id: "zapatilla-6",
        titulo: "Zapatilla PERDIDA",
        imagen: "../productos/zapatillas/zapatilla-6.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 41000
    },
    {
        id: "zapatilla-7",
        titulo: "Zapatilla ELLA",
        imagen: "../productos/zapatillas/zapatilla-7.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 37500
    },
    {
        id: "zapatilla-8",
        titulo: "Zapatilla PETALOS",
        imagen: "../productos/zapatillas/zapatilla-8.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 33700
    },
    {
        id: "zapatilla-9",
        titulo: "Zapatilla CHICA BIONICA",
        imagen: "../productos/zapatillas/zapatilla-9.webp",
        categoria: {
            nombre: "Zapatillas",
            id: "zapatilla"
        },
        precio: 38900
    },
    //BOTAS
    {
        id: "botas-0",
        titulo: "Bota PERFECTA",
        imagen: "../productos/botas/botas-0.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 55000
    },
    {
        id: "botas-1",
        titulo: "Bota MENTIA",
        imagen: "../productos/botas/botas-1.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 57500
    },
    {
        id: "botas-2",
        titulo: "Bota ENAMORADA",
        imagen: "../productos/botas/botas-2.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 60000
    },
    {
        id: "botas-3",
        titulo: "Bota DON",
        imagen: "../productos/botas/botas-3.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 62500
    },
    {
        id: "botas-4",
        titulo: "Bota DOS",
        imagen: "../productos/botas/botas-4.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 65000
    },
    {
        id: "botas-5",
        titulo: "Bota PERFECTA",
        imagen: "../productos/botas/botas-5.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 67500
    },
    {
        id: "botas-6",
        titulo: "Bota UNO los DOS",
        imagen: "../productos/botas/botas-6.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 88000
    },
    {
        id: "botas-7",
        titulo: "Bota PRISIONERO",
        imagen: "../productos/botas/botas-7.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 52000
    },
    {
        id: "botas-8",
        titulo: "Bota NAVIDAD",
        imagen: "../productos/botas/botas-8.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 48000
    },
    {
        id: "botas-9",
        titulo: "Bota TRAICION",
        imagen: "../productos/botas/botas-9.webp",
        categoria: {
            nombre: "Botas",
            id: "bota"
        },
        precio: 180000
    }
]
// Array con todos los links de los img utilizados en los filtros
const imgFiltros = [
    {
        nombre: "menor",
        link: "https://img.shields.io/badge/X  Precio%20%E2%86%91-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "mayor",
        link: "https://img.shields.io/badge/X  Precio%20%E2%86%93-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "zapato",
        link: "https://img.shields.io/badge/X%20%20Zapatos-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "zapatilla",
        link: "https://img.shields.io/badge/X%20%20Zapatillas-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    },
    {
        nombre: "bota",
        link: "https://img.shields.io/badge/X%20%20Botas-%23686E73.svg?style=for-the-badge&amp;logoColor=white"
    }]
// Array vacio para poder cargar los filtros que luego se convierten en img`s
const arrayDeFiltros = []

// Llamado al dom necesario
const contenedorProductos = document.querySelector("#contenedor-productos")
const contenedorFiltrosAplicados = document.querySelector(".filtros-aplicados")
const filtroAplicado = document.querySelector(".filtro-aplicado")
const botonesFiltros = document.querySelectorAll(".boton-filtro")
const botonesOrdenar = document.querySelectorAll(".dropdown-item")


// Funcion para cargar los productos
function cargarProductos(productoSeleccionado) {
    contenedorProductos.innerHTML = ""
    productoSeleccionado.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = `
        <div class="card h-100">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
          <div class="card-body text-center">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">$${producto.precio}</p>
            <span>3 cuotas sin interes de $${Math.round(producto.precio / 3)}</span>
           <div class="botones">
            <a  class="btn btn-sm btn-outline-success">Comprar</a>
            <a class="btn btn-sm btn-outline-dark"><i class="fa-solid fa-cart-shopping"></i></a>
           </div>
          </div>
        </div>
        `
        contenedorProductos.append(div)
    }

    );

}
cargarProductos(productos)

// Variable para mantener el filtro activo
let filtroActivo = null; 

// Se hace el filtro segun que boton se seleccione
botonesFiltros.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesFiltros.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        filtroActivo = e.currentTarget.id
        if (filtroActivo !== "todos") {
            const productosBoton = productos.filter(producto => producto.categoria.id === filtroActivo)
            cargarProductos(productosBoton)
            arrayDeFiltros.splice(0, 1, filtroActivo)
            cargarImgFiltros()
        } else {
            arrayDeFiltros.shift()
            cargarImgFiltros()
            filtroActivo = null
            cargarProductos(productos)
        }
    })
})

// Función de comparación para ordenar por precio
function compararPorPrecio() {
    if (filtroActivo != null) {
        const productosFiltrados = productos.filter(producto => producto.categoria.id === filtroActivo)
        return productosFiltrados.sort((productoA, productoB) => productoA.precio - productoB.precio)
    } else {
        return productos.sort((productoA, productoB) => productoA.precio - productoB.precio)
    }
}

// Aca ponemos en funcionamiennto el boton de ordenar
botonesOrdenar.forEach(boton => {
    boton.addEventListener("click", (e) => {
        if (e.currentTarget.id == "menor") {
            cargarProductos(compararPorPrecio(productos))
            arrayDeFiltros.splice(1, 1, e.currentTarget.id)
            if (arrayDeFiltros.includes("mayor")) {
                let index = arrayDeFiltros.indexOf("mayor")
                arrayDeFiltros.splice(index, 1)
            }
            cargarImgFiltros()
        } 
        else {
            arrayDeFiltros.splice(1, 1, e.currentTarget.id)
            if (arrayDeFiltros.includes("menor")) {
                let index = arrayDeFiltros.indexOf("menor")
                arrayDeFiltros.splice(index, 1)
            }         
            cargarImgFiltros()
            cargarProductos(compararPorPrecio(productos).reverse())
        }
    })
})
// Funcion para cargar los filtros en su contenedor
function cargarImgFiltros() {
    contenedorFiltrosAplicados.innerHTML =""
    arrayDeFiltros.forEach(filtro =>{
            let index = imgFiltros.findIndex(i => i.nombre === filtro)
            let img = document.createElement("img")
            img.classList.add("filtro-aplicado")
            img.classList.add(filtro)
            img.src = imgFiltros[index].link
            contenedorFiltrosAplicados.append(img)
        })
    }
