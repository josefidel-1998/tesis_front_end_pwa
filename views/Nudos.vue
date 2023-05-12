<template>
  <section class="container-fluid" id="section_nudos">
    <Modal />
    <Nav />
    <ul class="nudos">
      <span class="lds-dual-ring" v-if="pinia.banderaImgs"></span>
      <li class="shadow" v-for="nudo in pinia.nudos" :key="nudo._id">
        <div>
          <img :src="nudo.img" :alt="nudo.nombre" />
          <div>
            <h2>{{ nudo.nombre }}</h2>
            <routerLink
              class="naranja link pb-3"
              :to="{
                name: 'Detalle Nudo',
                params: { nudo: JSON.stringify(nudo) },
              }"
              >Ver más</routerLink
            >
          </div>
        </div>
      </li>
    </ul>
    <Footer />
  </section>
</template>

<script setup>
import Footer from "../layout/Footer.vue";
import Modal from "../components/Modal.vue";
import Nav from "../layout/Nav.vue";
import { onMounted } from "vue";

import { usePinia } from "../store/pinia.js";

const pinia = usePinia();

onMounted(() => {
  pinia.getNudos();
});
</script>

<style scoped>

#section_nudos {
  padding: 0%;
}
.nudos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 100px 0 8em;
}

.nudos li {
  max-width: 600px;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-end: 3rem;
  margin: auto;
  border-radius: 20px;
}

.nudos li div:first-child {
  width: 100%;
  border-radius: 100px;
  padding: 1em 0;
}

.nudos li div img {
  max-width: 360px;
  height: 240px;
  object-fit: none;
  border-radius: 20px;
}

.nudos li div div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: 1rem;
  row-gap: 1rem;
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
  margin: auto;
}

header {
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
