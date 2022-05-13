import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/salvajes.js"
import traerData from "./consulta.js"

// ARRAY DE OBJETOS DE ANIMALES
let AnimalesSalvajes = []

// OBTENCION DE LOS ELEMENDOS DEL FORMULARIO
let nombre = document.getElementById("animal")
let edad = document.getElementById("edad")
let comentarios = document.getElementById("comentarios")


// ACCESO AL BOTON
let agregar = document.getElementById('btnRegistrar')


// EVENTO AL BOTON
agregar.addEventListener('click', async()=>{
    
    // COMPROBACION DE RELLENO DE FORMULARIO
    if (nombre.value == "Seleccione un animal"){
        return alert("Error: Faltan Datos por Rellenar")
     }
    if (edad.value == "Seleccione un rango de años"){
        return alert("Error: Faltan Datos por Rellenar")
    } 
    if (comentarios.value == false){
        return alert("Error: Faltan Datos por Rellenar")
    }
    
    // TRAER EL VALOR PARA LA CREACION DE INSTANCIAS
    const valorAnimal =  await traerData(animal.value)
    const nombreAnimal = valorAnimal.name
    
    // VARIABLE PARA LOS NUEVOS ANIMALES
    let nuevoAnimal;
    
    // SWITCH PARA LA LA CREACION DE INSTANCIAS
    switch (nombreAnimal){

        //LEON
        case 'Leon':
        nuevoAnimal = new Leon(
            nombre.value,
            edad.value,
            comentarios.value,
            `${valorAnimal.imagen}`,
            `${valorAnimal.sonido}`
        ); break;
    
        // LOBO
        case 'Lobo':
        nuevoAnimal = new Lobo(
            nombre.value,
            edad.value,
            comentarios.value,
            `${valorAnimal.imagen}`,
            `${valorAnimal.sonido}`
        ); break;
    
        // OSO
        case 'Oso':
        nuevoAnimal = new Oso(
            nombre.value,
            edad.value,
            comentarios.value,
            `${valorAnimal.imagen}`,
            `${valorAnimal.sonido}`
        ); break;
    
        //SERPIENTE
        case 'Serpiente':
        nuevoAnimal = new Serpiente(
            nombre.value,
            edad.value,
            comentarios.value,
            `${valorAnimal.imagen}`,
            `${valorAnimal.sonido}`
        ); break;
    
        // AGUILA
        case 'Aguila':
        nuevoAnimal = new Aguila(
            nombre.value,
            edad.value,
            comentarios.value,
            `${valorAnimal.imagen}`,
            `${valorAnimal.sonido}`
        ); break;
    }

    // VERIFIACION DE LA CREACION DE INSTANCIAS
    AnimalesSalvajes.push(nuevoAnimal)
    console.log(AnimalesSalvajes)



    // ACCESO AL ELEMENTO DEL DOM PARA LA TABLA
    const tabla = document.getElementById('Animales')

    // CREACION DE LAS CARDS
    const carta = document.createElement('div')
    carta.setAttribute('class', 'card')
    carta.setAttribute('class', 'mx-2')

    // CREACION DE LA IMAGEN DEL ANIMAL
    const timg = document.createElement('img')
    timg.setAttribute('src', `./assets/imgs/${valorAnimal.imagen}`)
    timg.setAttribute('class', `tarjetas`)

    
    // CREACION DEL ICONO DE SONIDO
    const icono = document.createElement('p')
    icono.setAttribute('class', 'card-body, p-1')
    icono.setAttribute('style', 'background-color: grey')
    icono.innerHTML = `<img id="sonido" src="./assets/imgs/audio.svg">`

    // REPRODUCTOR DE SONIDOS
    icono.addEventListener("click",() => {
        switch (nombreAnimal){

            //LEON
            case 'Leon':
            nuevoAnimal.rugir();
            break;
        
            // LOBO
            case 'Lobo':
            nuevoAnimal.aullar();
            break;
        
            // OSO
            case 'Oso':
            nuevoAnimal.gruñir();
            break;
        
            //SERPIENTE
            case 'Serpiente':
            nuevoAnimal.sisear();
            break;
        
            // AGUILA
            case 'Aguila':
            nuevoAnimal.chillar();
            break;
        }
      })

    // IMPRESION DE LA CARD EN LA TABLA
    tabla.appendChild(carta)

    // IMPRESION DE LAS IMAGEN EN LA CARD
    carta.appendChild(timg)
    
    //IMPRESION DEL ICONO EN LA CARD
    carta.appendChild(icono)


    // LIMPIEZA DE FORMULARIO
    const resetA = document.getElementById("animal")
    const resetE = document.getElementById("edad")
    const resetC = document.getElementById("comentarios")
    const prevista = document.getElementById('preview')
    resetA.selectedIndex = 0
    resetE.selectedIndex = 0
    resetC.value = " "
    prevista.innerHTML = " "


    // CARACTERISTICAS DE MODAL A LA IMAGEN DEL ANIMAL
    timg.setAttribute('data-toggle', 'modal')
    timg.setAttribute('data-target', "#exampleModal")

    // ACCESO AL DOM DEL MODAL
    const modalBody = document.querySelector('.modal-body')

    // EVENTO EN LA IMAGEN DE CADA ANIMAL
    timg.addEventListener('click', ()=>{
        
        // IMPRIMIENDO LAS CARACTERISTICAS EN EL MODAL
        modalBody.innerHTML =  `<img src="../assets/imgs/${nuevoAnimal._img}">
                                <p class="text-center"> <b> Nombre:      </b>${nuevoAnimal._nombre}</p>
                                <p class="text-center"> <b> Edad:        </b> ${nuevoAnimal._edad}</p>
                                <p class="text-center"> <b> Comentarios: </b>${nuevoAnimal._comentarios}</p>`

})

})  
