<template>
  <section class="container-fluid" id="section_lugares">
    <div class="container-fluid mt-4">
      <Modal />
      <Nav />
      <form id="divinput" class="input-group mb-3 ver">
        <input
          id="buscador"
          type="text"
          class="form-control rounded-pill"
          placeholder="Buscar ubicaciones"
          @keyup="filtrarLugares"
          v-model="textSearch"
        />
      </form>
    </div>
    <div class="ubicaciones">
      <span class="lds-dual-ring" v-if="pinia.banderaImgs"></span>
      <article
        class="shadow"
        v-for="ubicaciones in pinia.filtroUbicaciones"
        :key="ubicaciones._id"
      >
        <figure>
          <img
            :src="ubicaciones.img"
            :alt="ubicaciones.nombre"
          />
          <figcaption>
            <h2 class="text-center">{{ ubicaciones.nombre }}</h2>
            <ul>
              <li>
                <p class="p-lugares">
                  <i class="bi bi-geo-alt naranja fs-5 i-lugares"></i
                  >{{ ubicaciones.dir }}
                </p>
              </li>
              <li>
                <p class="p-lugares">
                  <i class="bi bi-telephone naranja fs-5 i-lugares"></i
                  >{{ ubicaciones.tel }}
                </p>
              </li>
            </ul>
            <routerLink
              class="naranja link"
              :to="{
                name: 'Detalle Ubicación',
                params: { id: JSON.stringify(ubicaciones) },
              }"
            >
              Ver ubicación</routerLink
            >
          </figcaption>
        </figure>
      </article>
    </div>
    <Footer />
  </section>
</template>

<script setup>
import Footer from "../layout/Footer.vue";
import Modal from "../components/Modal.vue";
import Nav from "../layout/Nav.vue";
import { ref, onMounted } from "vue";
import { usePinia } from "../store/pinia.js";
const pinia = usePinia();
const textSearch = ref("");

onMounted(() => {
  pinia.allPlaces();
});

function filtrarLugares() {
  pinia.filtroUbicaciones = pinia.ubicaciones.filter((filtro) =>
    filtro.nombre.toLowerCase().includes(textSearch.value.toLowerCase())
  );
}
</script>

<style scoped>

.my-5 {
    margin-top: 2rem !important;
}
.p-lugares {
  margin-bottom: 10px !important;
}

.ubicaciones ul {
  margin-bottom: 0 !important;
  padding-left: 1em !important;
}

.ubicaciones {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem !important;
  margin-bottom: 10em;
}

.ubicaciones article {
  max-width: 600px;
  min-height: 360px;
  display: flex;
  justify-content: center;
  margin-block-end: 1rem;
  margin: auto;
  padding: 0;
  border-radius: 20px;
}

.ubicaciones article figure {
  width: 100%;
  border-radius: 100px;
}

.ubicaciones article figure img {
  max-width: 360px;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
}

.ubicaciones article figure figcaption {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-block: 1rem;
  row-gap: 1rem;
}

.iconito {
  width: 13px;
}

#ul__menu {
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#buscador {
  border: 1px solid #0142fe;
}

#divinput {
  margin: 90px auto 0;
  width: 360px;
}

#buscador::placeholder {
  color: #0140fe8e;
}

header {
  z-index: 1;
}

.link {
  background-color: #ff4d01;
  color: white;
  padding-block: 0.7rem;
  padding-inline: 1.2rem;
  border-radius: 12rem;
  font-weight: normal !important;
  width: 90%;
  text-align: center;
  margin:auto;
}

.i-lugares {
  margin: 0 10px 0 0;
}

.lds-dual-ring {
  display: block;
  width: 80px;
  height: 80px;
  margin: auto;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(0, 73, 109);
  border-color: rgb(3, 77, 114) transparent rgb(0, 76, 114) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

#section_lugares {
  padding: 0%;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
