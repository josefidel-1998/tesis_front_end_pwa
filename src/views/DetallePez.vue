<template>
  <section id="detalle-pez">
    <Modal />
    <header class="col mb-6 d-flex items-left justify-content-left" id="header_peces">
      <router-link id="atras" to="/peces"
        ><i class="bi bi-arrow-left-short fs-1 naranja"></i
      ></router-link>
      <h1>Detalle de {{ pez.nombres }}</h1>
    </header>
    <div class="card" id="carta_pez">
      <figure class="card-body">
        <img
          :src="pez.img"
          :alt="pez.nombres"
          class="card-img-top mb-4"
        />
        <figcaption>
          <h2 class="card-title text-center naranja">{{ pez.nombres }}</h2>
          <p>{{ pez.descripcion }}</p>
          <ul class="list-group mt-6">
            <li class="list-group-item">
              <h3 id="carnada" class="mb-4">Carnadas</h3>
              <p>{{ pez.carnada }}</p>
            </li>
            <li class="list-group-item">
              <h3 id="agua" class="mb-4 mx-auto">Tipo de agua</h3>
              <p>{{ pez.agua }}</p>
            </li>
            <li class="list-group-item">
              <h3 id="cania" class="mb-4 mx-auto">Caña de pescar</h3>
              <p>{{ pez.cana }}</p>
            </li>
          </ul>
        </figcaption>
      </figure>
    </div>
    <Footer />
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import Footer from "../layout/Footer.vue";
import Nav from "../layout/Nav.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const pez = ref(JSON.parse(router.params.pez));
</script>

<style scoped>
#detalle-pez {
  padding: 0%!important;
}

#detalle-pez figure {
  margin: 0 0 8rem;
}

#detalle-pez a {
  text-decoration: none;
  color: #ff4d01;
}

#detalle-pez a:focus {
  color: white !important;
  background-color: #0449f4 !important;
}

#detalle-pez div {
  margin-top: 0px;
}

#carta_pez {
  width: 90%;
  margin: 2em auto 5em;
}

#detalle-pez button {
  color: white;
  background-color: #0449f4 !important;
  padding-right: 2vw;
  margin-left: 1vw;
}

#listadito {
  padding-left: 2vw;
  padding-right: 2vw;
}

#carnada {
  font-size: 1.1rem;
  padding: 5px 0 5px 40px;
  font-weight: bold;
  background-image: url("../assets/iconos/gusano.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}

#agua {
  font-size: 1.1rem;
  padding: 5px 0 5px 40px;
  font-weight: bold;
  background-image: url("../assets/iconos/agua.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}

#cania {
  font-size: 1.1rem;
  padding: 5px 0 5px 40px;
  font-weight: bold;
  background-image: url("../assets/iconos/cania.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
}

#divinput {
  padding-left: 2vw;
  padding-right: 2vw;
}

#detalle-pez {
  padding-left: 2vw;
  padding-right: 2vw;
}

#detalle-pez header {
  box-shadow: 5px 5px rgba(7, 7, 7, 0.03);
  background:white;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 15px 10px;
  z-index: 1;
}

#atras {
  color: #ff4d00;
}

#detalle-pez h1 {
  margin: 0 10px;
  color: #ff4d00;
  padding: 8px 0;
  font-size: 1.4em;
}

.card {
  --bs-card-border-width: 0 !important;
  --bs-card-spacer-y: 0 !important;
  --bs-card-spacer-x: 0 !important;
}

#detalle-pez img {
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.list-group {
  --bs-list-group-item-padding-x: 0 !important;
}

.list-group-item {
  border:none!important;
}
</style>
