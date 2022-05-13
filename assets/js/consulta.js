// CONSULTA DE DATOS
const url = "http://127.0.0.1:5501/animales.json"

const traerData = async (nombre) => {
    try{
        const res = await fetch(url);
        const data = await res.json(); 

        const encontrar = data.animales.find(animal=>{
            return animal.name == nombre
        })

        return encontrar

    } catch (error){
        console.log(error)
    }
};

export default traerData