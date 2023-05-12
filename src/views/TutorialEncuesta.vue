<template>
  <section class="container w-100" id="tutorial_encuesta">
    <Modal />
    <div class="col mb-6 d-flex items-left justify-content-left header-tutorial">
      <h1 class="titulo-header">Tutorial 1/3</h1>
    </div>
    <div class="row m-auto mb-3">
      <img class="img mb-5 tutorial" src="../assets/encuesta1.png" />
      <h3 class="text-center fs-1 fw-bold">Completá la Encuesta</h3>
      <p class="text-center mt-4 tutorial_p">
        Llená tus datos en el perfil para poder mejorar nuestro sistema de
        sugerencias y hacer una mejor experiencia para vos.
      </p>
    </div>
    <div class="row w-75 mx-auto d-grid gap-4">
      <router-link to="/tutorial-ubicacion" class="boton-naranja"
        >Siguiente</router-link
      >
      <router-link to="/inicio" class="saltar">Saltar tutorial</router-link>
    </div>
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
</script>
<style scope>

#tutorial_encuesta {
  padding: 0%;
  margin: 0%;
}

.container-sm, .container {
    max-width: 700px!important; 
  }

.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
    --bs-gutter-x: 0!important;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
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

p {
  text-align: center !important;
}

.saltar {
  text-align: center;
  margin: 0 auto;
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

.header-tutorial {
  padding: 10px 0;
}


</style>
