import clienteAxios from "../config/axios"

const logearUsuario = async datos =>{
    try {
        const respuesta = await clienteAxios.post('/url',datos);
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

export default logearUsuario;