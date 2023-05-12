<template>
  <section id="detalle">
    <Modal />
    <header class="col mb-6 d-flex items-left justify-content-left header-nudos">
      <router-link id="atras" to="/nudos" class="a-nudos"
        ><i class="bi bi-arrow-left-short fs-1 naranja"></i
      ></router-link>
      <h1>Detalle de {{ nudo.nombre }}</h1>
    </header>
    <ul class="card" id="detalle_nudo">
      <li class="card-body li-nudos">
        <img
          :src="nudo.img"
          :alt="nudo.nombre"
          class="card-img-top mb-4"
        />
        <div class="text-center">
          <h2 class="card-title naranja">{{ nudo.nombre }}</h2>
          <p class="card-text p-nudos">{{ nudo.detalle }}</p>
          <p class="card-text p-nudos">{{ nudo.pasos }}</p>
        </div>
      </li>
    </ul>
    <Footer />
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import Footer from "../layout/Footer.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const nudo = ref({});
const router = useRoute();
onMounted(() => {
  nudo.value = JSON.parse(router.params.nudo);
});

console.log(nudo);
</script>

<style scoped>

.card {
  --bs-card-border-width: 0 !important;
}

.a-nudos {
  text-decoration: none;

  color: #ff4d01;
}

.a-nudos:focus {
  color: white !important;
  background-color: #0449f4 !important;
}

#detalle_nudo {
  width: 90%;
  margin: 4em auto 12em;
  padding: 0%;
}

.li-nudos {
  padding-left: 20px !important;
  padding-top: 5px !important;
}

#listadito {
  padding-left: 2vw;
  padding-right: 2vw;
}

#divinput {
  padding-left: 2vw;
  padding-right: 2vw;
}

.header-nudos {
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

.header-nudos h1 {
  margin: 0 10px;
  color: #ff4d00;
  padding: 8px 0;
  font-size: 1.4em;
  z-index: 1;
}

.p-nudos {
  margin: auto;
  width: 90%;
}
</style>
