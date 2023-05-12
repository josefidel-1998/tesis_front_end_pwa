<template>
  <section class="container w-100">
    <Modal />
    <div class="col mb-6 d-flex items-left justify-content-left header-tutorial">
      <router-link id="atras" to="/tutorial-encuesta"
        ><i class="bi bi-arrow-left-short fs-1 naranja"></i
      ></router-link>
      <h2 class="titulo-header">Tutorial 2/3</h2>
    </div>
    <div class="row m-auto mb-3">
      <img class="img mb-5 tutorial" src="../assets/encuesta2.png" />
      <h3 class="text-center fs-1 fw-bold">Localizá tu Camping</h3>
      <p class="text-center mt-4 tutorial_p">
        Desde el mapa podés encontrar diferentes puntos de interés para pescar
        de forma segura y cómoda. Tenemos todo tipo de propuestas para que tus
        aventuras sean únicas.
      </p>
    </div>
    <div class="row w-75 mx-auto d-grid gap-4">
      <router-link to="/tutorial-busqueda" class="boton-naranja"
        >Siguiente</router-link
      >
      <router-link to="/inicio" class="saltar">Saltar tutorial</router-link>
    </div>
  </section>
</template>

<script set up>
import Modal from "../components/Modal.vue";
</script>

<style scope>

.tutorial_p {
  width: 75%;
  margin: auto;
}

.header-tutorial {
  padding: 10px 20px;
  box-shadow: 5px 5px rgba(7, 7, 7, 0.03);
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

#atras {
  color: #ff4d00;
}

.titulo-header {
  margin: 0 10px;
  color: #ff4d00;
  padding: 8px 0;
  font-size: 1.3em;
}

.saltar {
  text-align: center;
  margin: 0 auto;
}
</style>
