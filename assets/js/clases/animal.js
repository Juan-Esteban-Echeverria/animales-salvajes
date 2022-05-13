// CLASE CONSTRUCTORA ANIMAL
class Animal{
    constructor(nombre, edad, comentarios, img, sonido){
        this._nombre = nombre
        this._edad = edad
        this._img = img
        this._comentarios = comentarios
        this._sonido = sonido
    }
    get getNombre(){
        return this._nombre
    }
    get getEdad(){
        return this._edad
    }
    get getImg(){
        return this._img
    }
    set setComentarios(nuevoComentario){
        this._comentarios = nuevoComentario
    }
    get getSonido(){
        return this._sonido
    }}

export default Animal