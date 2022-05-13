import Animal from "./animal.js"

// CLASE CONSTRUCTORA LEON
class Leon extends Animal{
    constructor(nombre, edad, comentarios, img, sonido){
        super(nombre, edad, comentarios, img, sonido)
    }
    rugir(){
        const reproducir = document.createElement('audio')
        reproducir.setAttribute('src', `./assets/sounds/${this.getSonido}`)
        reproducir.setAttribute('type', 'mpeg');
            reproducir.play()
    }}


//CLASE CONSTRUCTORA LOBO    
class Lobo extends Animal{
    constructor(nombre, edad, comentarios, img, sonido){
        super(nombre, edad, comentarios, img, sonido)
    }
    aullar(){
        const reproducir = document.createElement('audio')
        reproducir.setAttribute('src', `./assets/sounds/${this.getSonido}`)
        reproducir.setAttribute('type', 'mpeg');
            reproducir.play()
    }}


// CLASE CONSTRUCTORA OSO
class Oso extends Animal{
    constructor(nombre, edad, comentarios, img, sonido){
        super(nombre, edad, comentarios, img, sonido)
    }
    gruñir(){
        const reproducir = document.createElement('audio')
        reproducir.setAttribute('src', `./assets/sounds/${this.getSonido}`)
        reproducir.setAttribute('type', 'mpeg');
            reproducir.play()
    }}


//CLASE CONSTRUCTORA SERPIENTE
class Serpiente extends Animal{
    constructor(nombre, edad, comentarios, img, sonido){
        super(nombre, edad, comentarios, img, sonido)
    }
    sisear(){
        const reproducir = document.createElement('audio')
        reproducir.setAttribute('src', `./assets/sounds/${this.getSonido}`)
        reproducir.setAttribute('type', 'mpeg');
            reproducir.play()
    }}


//CLASE CONSTRUCTORA AGUILA
class Aguila extends Animal{
    constructor(nombre, edad, comentarios, img, sonido){
        super(nombre, edad, comentarios, img, sonido)
    }
    chillar(){
        const reproducir = document.createElement('audio')
        reproducir.setAttribute('src', `./assets/sounds/${this.getSonido}`)
        reproducir.setAttribute('type', 'mpeg');
            reproducir.play()
    }}

export {Leon, Lobo, Oso, Serpiente, Aguila}