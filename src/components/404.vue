<template>
<section class="container w-100" id="404">
    <Modal />
    <div class="col mb-6 d-flex items-left justify-content-left header-tutorial">
      <h2 class="titulo-header">Error</h2>
    </div>
    <div class="row m-auto mb-3">
      <img class="img mb-5 tutorial" src="../assets/fondo_404.png" />
      <h3 class="text-center fs-1 fw-bold">Ups, hubo un error</h3>
      <p class="text-center mt-4 tutorial_p">
        Parece que te perdiste en tu viaje de pesca, te ayudamos a volver por el camino correcto.
      </p>
    </div>
    <div class="row w-75 mx-auto d-grid gap-4">
      <router-link to="/" class="boton-naranja"
        >Ir a la App</router-link
      >
    </div>
  </section>
</template>

<script setup>
import Modal from "./Modal.vue";
</script>

<style scoped>
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

#404 {
  margin: 0%!important;
  padding: 0%!important;
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
