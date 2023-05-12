<template>
  <section class="seccion__inicio">
    <Modal />
    <Nav />
    <div id="bienvenida">
        <div v-if="show" class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h2 v-else>
            ¡Bienvenido/a <span class="separador">{{ nombre }}!</span>
        </h2>
      <p>¿Estás listo para buscar tu nueva captura?</p>
      <div class="container-fluid justify-content-center shadow bg-white contenedor">
        <h3 class="titulo-naranja">Información importante</h3>
        <p>
          Para poder pescar de forma legal, necesitás obtener un permiso en el siguiente link:
        </p>
        <a
          href="https://mi.mda.gba.gob.ar/pesca/licencia/validacion"
          target="_blank"
          class="boton-naranja"
          >Conseguir licencia de pesca</a
        >
      </div>
    </div>
    <div id="uso">
      <div class="container-fluid justify-content-center shadow bg-white contenedor">
        <h3 class="titulo-naranja">¿Cómo uso la aplicación?</h3>
        <p>
          Te dejamos un breve tutorial para que puedas ver todas las cosas que
          podés hacer con Biufort
        </p>
        <router-link to="/tutorial-encuesta" class="boton-naranja">Ver tutorial</router-link>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Footer from "../layout/Footer.vue";
import Modal from "../components/Modal.vue";
import Nav from "../layout/Nav.vue";
const nombre = ref("");
let show = ref(false);
onMounted(() => {
  show.value = true;
  const id = JSON.parse(localStorage.getItem("id"));

  fetch(`https://server02-tesis.vercel.app/api/usuarios/${id}`)
    .then(r => r.json())
    .then(data => {
      nombre.value = data.nombre;
      show.value = false;
    });

});
</script>

<style scoped>
.seccion__inicio{
  min-height: 113vh;
}
#bienvenida {
  padding: 120px 20px 0px;
  background-color: #0142fe;
  border-radius: 65px;
  text-align: center;
  color: #fff;
  margin-top: 0%;
}

.separador {
  display: block;
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

.contenedor {
  color: #3d3d3d;
  border-radius: 30px;
  padding: 20px;
  margin-top: 40px;
  text-align: center;
}

.titulo-naranja {
  font-size: 1.2em !important;
  font-size: 1em !important;
  color: #ff4d01;
  font-weight: 800;
  text-transform: uppercase;
}

#bienvenida p, #uso p {
  font-size: 0.9em !important;
}

#uso {
  padding: 0px 20px;
  text-align: center;
  margin-top: 0%;
}

</style>
