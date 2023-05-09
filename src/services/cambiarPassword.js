import axios from 'axios'
export async function cambiarPassword(id, claves) {
    return await axios.patch(`https://server4-sand.vercel.app/usuarios/${id}/cambiarContrasenia`, {
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({password: claves.password, nueva: claves.nueva, repetir: claves.repetir})
    })
}