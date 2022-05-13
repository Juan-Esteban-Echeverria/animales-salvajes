import traerData from "./consulta.js";


//ACCESO AL SELECTOR & ASYNC AWAIT PARA TRAER LA IMAGEN
let selector = document.getElementById("animal")

//EVENTO SELECTOR
selector.addEventListener('change', async(e)=>{
    e.preventDefault()
    
        // ACCESO AL ELEMENTO DEL DOM PARA LA VISTA PREVIA
        const prevista = document.getElementById('preview')

        // RESETEAR PREVISTA
        prevista.innerHTML = " "

        // IMPRESION EN EL DOM DE LA VISTA PREVIA
        const img = document.createElement('img')

        const valorAnimal = await traerData(animal.value)
        
        // FUNCION IIFE AUTOEJECUTABLE
        const ImagenAutoEjecutable = (() => {
            img.setAttribute('src', `./assets/imgs/${valorAnimal.imagen}`)
            img.setAttribute('class', `px-5`)
        prevista.appendChild(img)
        })()
})
