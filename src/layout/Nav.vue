<template>
  <div>
    <header class="shadow-sm header-principal">
    <nav class="Nav Nav-expand-lg">
      <div class="container-fluid">
        <div class="menu__h1">
          <h1 class="naranja">{{ $route.name }} </h1>
          <button type="button" data-bs-toggle="collapse" data-bs-target="#NavNav" aria-controls="NavNav" aria-expanded="false" aria-label="Toggle navigation" id="hamburguesa">
            <i class="bi bi-list fs-3 naranja"></i>
          </button>
        </div>
        <div class="collapse Nav-collapse" id="NavNav">
        <ul class="nav-bar mb-5 menu">
          <li>
            <i class="bi bi-shield-check fs-3 naranja"></i>
            <router-link class="text-black" to="/privacidad">Politicas de privacidad</router-link>
          </li>
          <li>
            <i class="bi bi-escape fs-3 text-danger"></i>
            <button id="cerrar__sesion" @click="logout">Cerrar sesión</button>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  </header>
  </div>
</template>

<script>
  import {logout} from '../services/autenticacion.js';
  import {usePinia} from '../store/pinia.js';
  export default {
    setup(){
      
      const pinia = usePinia();
      return {pinia}
      
    },
    data(){
      return {
        menu: false
      }
    },
    methods: {  
      logout
    }
  }
</script>

<style scoped>
  .header-principal{
    background:white;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    padding: 10px 0rem 10px;
    z-index: 1;
  }
  .header-principal h1{
    margin: 6px 28px 5px;
    font-size: 1rem;
    font-weight: bold;
  }
.menu__h1{
  display: flex;
  /*flex-direction: row-reverse;*/
}
  .header-principal nav{
    transition: all 0.4s ease-in-out;
    width: 100%;
    background: url('../assets/logo_biufort_azul.png');
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  /*
  .menu__burger{
    position:fixed;
    right: 5%;
  }*/
  #hamburguesa{
    position:fixed;
    right: 5%;
    font-size: 1.4rem;
  }
  .header-principal button{
    background-color: transparent;
    outline: none;
    border: none;
    color: #FF4D01;
    margin-left: 0%;
    padding: 0%;
    font-weight: bold;
  }
  #cerrar__sesion{
    color: rgba(187, 4, 4, 0.79);
  }

  .Nav > .container-fluid {
    justify-content: flex-start!important;
    width: 100%;
}

.menu {
  margin: 20px 0 0!important;
}

#NavNav ul {
  padding-left: 0%!important;
  height: 700px;
  background: #ffffffe5;
}

.menu li {
  padding: 10px 0 10px 50px;
  width: 100vw;
  box-shadow: 0px 0px 5px -3px rgba(0,0,0,0.33);
  -webkit-box-shadow: 0px 0px 5px -3px rgb(0 0 0 / 33%);
  -moz-box-shadow: 0px 0px 5px -3px rgba(0,0,0,0.33);
}

.menu i {
  margin-right: 15px;
}

.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    --bs-gutter-x: 0!important;
}

.Nav {
  --bs-Nav-padding-y: 0!important;
}

</style>