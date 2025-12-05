const SumaController = {}

const ENV = import.meta.env

const API_URL = `http://${ENV.VITE_API_HOST}:${ENV.VITE_API_PORT}${ENV.VITE_API_BASE}/`

SumaController.sumar = async (datos) =>{
    try
    {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
        const data = await response.json()
        return data
    }catch(error){
        console.error('Error al realizar la suma:', error)
        throw error
    }
}

export default SumaController