<template>
  <section class="container-fluid" id="peces_section">
    <div class="container-fluid">
      <Nav />
      <Modal />
      <div id="divinput" class="input-group input__form">
        <input
          id="buscador"
          type="text"
          class="form-control rounded-pill"
          placeholder="Buscar"
          @keyup="filtrarPeces"
          v-model="textSearch"
        />
      </div>
    </div>
    <div class="peces my-5">
      <span class="lds-dual-ring" v-if="pinia.banderaImgs"></span>
      <article class="shadow" v-for="pez in pinia.filtroPeces" :key="pez._id">
        <figure>
          <img :src="pez.img" :alt="pez.nombres" />
          <figcaption>
            <h2>{{ pez.nombres }}</h2>
            <routerLink
              class="naranja link"
              :to="{
                name: 'Detalle Pez',
                params: { pez: JSON.stringify(pez) },
              }"
              >Ver más
            </routerLink>
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
  pinia.allFish();
  console.log(pinia.peces);
});

function filtrarPeces() {
  pinia.filtroPeces = pinia.peces.filter((filtro) =>
    filtro.nombres.toLowerCase().includes(textSearch.value.toLowerCase())
  );
}
</script>

<style scoped>
#peces_section {
  margin-block-start: 6rem;
  margin-block-end: 8rem;
  padding: 0%;
}

.input__form {
  max-width: 310px;
  margin: 0 auto;
}

.peces {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.peces article {
  max-width: 400px;
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 3rem;
  margin: auto;
  border-radius: 20px;
}

.peces article figure {
  width: 100%;
  border-radius: 100px;
}

.peces article figure img {
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  margin-top: 10px;
}

.peces article figure figcaption {
  display: flex;
  align-items: center;
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

#buscador::placeholder {
  color: #0140fe8e;
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
}

#peces_section header {
  z-index: 1;
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

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
