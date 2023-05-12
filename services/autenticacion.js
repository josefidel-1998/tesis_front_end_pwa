import {usePinia} from '../store/pinia.js';

const pinia = usePinia();

export async function login(email,password) {
          
  return fetch('https://server4-sand.vercel.app/api/usuarios/login', {
      method: 'POST', 
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
  })
  .then(r => {
    if(r.ok){
      return r.json();
    }else if(r.status === 404){
      return r.json().then(error => {
            throw error;
        })
    }else{
      throw new Error("Error al llamar la api")
    }
  })
}

export async function logout(){
    await fetch("https://server4-sand.vercel.app/api/usuarios/logout" , {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'auth-token': $cookies.get('token')
        }
    })
      pinia.banderaSesion = true;
      $cookies.remove('token')
      this.$router.push({path: "/"})
}