<template>
  <section id="detalle_lugares_section">
    <Modal />
    <header class="col mb-6 d-flex items-left justify-content-left">
      <router-link id="atras" to="/lugares"
        ><i class="bi bi-arrow-left-short fs-1 naranja"></i
      ></router-link>
      <h1>Detalle de camping</h1>
    </header>
    <article class="card">
      <GoogleMap
        api-key="AIzaSyA6r0Yu0jXjGOqyeEmJPXzS-9cwC_eNJE8"
        style="width: 100%; height: 600px"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </article>
    <Footer />
  </section>
</template>

<script>
import Modal from "../components/Modal.vue";
import Footer from "../layout/Footer.vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { useRoute } from "vue-router";
export default {
  components: { GoogleMap, Marker, Modal, Footer },
  name: "detalleUbicacion",
  setup() {
    const router = useRoute();
    //console.log(router.params)
    const ubicaciones = JSON.parse(router.params.id);
    const latitud = ubicaciones.latitud;
    const longitud = ubicaciones.longitud;

    const center = { lat: latitud, lng: longitud };
    return {
      center,
    };
  },
};
</script>

<style scoped>
.s {
  min-height: 50vh;
}

#detalle_lugares_section a {
  text-decoration: none;

  color: #ff4d01;
}

#detalle_lugares_section a:focus {
  color: white !important;
  background-color: #0449f4 !important;
}

#detalle_lugares_section li {
  padding-left: 20px !important;
  padding-top: 5px !important;
}

#detalle_lugares_section button {
  color: white;
  background-color: #0449f4 !important;
  padding-right: 2vw;
  margin-left: 1vw;
}

#listadito {
  padding-left: 2vw;
  padding-right: 2vw;
}

#divinput {
  padding-left: 2vw;
  padding-right: 2vw;
}

#detalle_lugares_section {
  padding: 0%;
}

#detalle_lugares_section header {
  padding: 10px;
  box-shadow: 5px 5px rgba(7, 7, 7, 0.03);
  z-index: 1;
}

#atras {
  color: #ff4d00;
}

#detalle_lugares_section h1 {
  margin: 0 10px;
  color: #ff4d00;
  padding: 8px 0;
  font-size: 1.4em;
}
</style>
