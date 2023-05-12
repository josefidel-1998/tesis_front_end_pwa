<template>
  <section class="container w-100" id="tutorial_busqueda">
    <Modal />
    <div class="col mb-6 d-flex items-left justify-content-left header-tutorial">
      <router-link id="atras" to="/tutorial-ubicacion"
        ><i class="bi bi-arrow-left-short fs-1 naranja"></i
      ></router-link>
      <h2 class="titulo-header">Tutorial 3/3</h2>
    </div>
    <div class="row m-auto mb-3">
      <img class="img mb-5 tutorial" src="../assets/encuesta3.png" />
      <h3 class="text-center fs-1 fw-bold">Comenzá tu búsqueda</h3>
      <p class="text-center mt-4 tutorial_p">
        ¡Comenzá la búsqueda de las especies que querés pescar o los campings
        que quieras visitar!
      </p>
      <p class="text-center mt-4 tutorial_p">
        En la sección de Mapa o Información podés encontrar un buscador e
        iniciar tu viaje.
      </p>
    </div>
    <div class="row w-75 mx-auto d-grid gap-4">
      <router-link to="/inicio" class="boton-naranja"
        >Entendido</router-link
      >
    </div>
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
</script>
<style scoped>

#tutorial_busqueda {
  padding: 0%;
  margin: 0%;
}

.container-sm, .container {
    max-width: 700px!important; 
  }

.tutorial_p {
  width: 75%;
  margin: auto;
}

.boton-naranja {
  background-color: #ff4d01;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  display: block;
  margin: 0%;
  text-align: center;
}

.tutorial {
  margin-top: 20px;
}

.header-tutorial {
  padding: 10px 20px;
  box-shadow: 5px 5px rgba(7, 7, 7, 0.03);
}

#atras {
  color: #ff4d00;
}

.titulo-header {
  margin: 0 10px;
  color: #ff4d00;
  padding: 8px 0;
  font-size: 1.3em;
}

</style>
