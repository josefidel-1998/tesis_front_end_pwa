<template>
  <section class="w-100 container-sm contrasena">
    <Modal />
    <header class="col mb-6 d-flex items-left justify-content-left">
      <a id="atras" href="#"
        ><i class="bi bi-arrow-left-short fs-1 naranja"></i
      ></a>
      <h1>Contraseña</h1>
    </header>
    <h2>Cambia tu contraseña</h2>
    <form id="form-contrasena" class="row mb-4" @submit="cambiarContrasenia">
      <fieldset class="w-100">
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-bag-x fs-3 naranja"></i>
          <input
            class="ms-3 w-75"
            :type="show === true ? 'text' : 'password'"
            type="password"
            id="password"
            placeholder="Contraseña"
            name="password"
          />
          <i class="bi bi-eye show-icon naranja" v-if="show" @click="show = !show"></i>
          <i class="bi bi-eye-slash hide-icon naranja" v-else @click="show = !show"></i>
        </div>
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-bag-plus fs-3 naranja"></i>
          <input
            class="ms-3 w-75"
            :type="show === true ? 'text' : 'password'"
            type="password"
            id="nuevo-password"
            placeholder="Nueva contraseña"
            name="nueva"
          />
          <i class="bi bi-eye show-icon naranja" v-if="show" @click="show = !show"></i>
          <i class="bi bi-eye-slash hide-icon naranja" v-else @click="show = !show"></i>
        </div>
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-bag-check fs-3 naranja"></i>
          <input
            class="ms-3 w-75"
            :type="show === true ? 'text' : 'password'"
            type="password"
            id="repetir-nuevo-password  "
            placeholder="Repetir contraseña nueva"
            name="repetir"
          />
          <i class="bi bi-eye show-icon naranja" v-if="show" @click="show = !show"></i>
          <i class="bi bi-eye-slash hide-icon naranja" v-else @click="show = !show"></i>
        </div>
        <div class="row w-100 mt-5 mx-auto d-grid">
          <button type="submit" class="btn fondoNaranja text-white">
            Guardar contraseña
          </button>
        </div>
      </fieldset>
    </form>
    <Footer />
  </section>
</template>
<script setup>
import Modal from "../components/Modal.vue";
import Footer from "../layout/Footer.vue";
import {cambiarPassword} from "../services/cambiarPassword.js"
import {ref, onMounted} from "vue";

let show = ref(false)

const cambiarContrasenia = e => {
  
  const id = JSON.parse(localStorage.getItem("id"));

  let datos = {
    password:e.target.password.value ,
    nueva:e.target.nueva.value ,
    repetir: e.target.repetir.value
  }

  cambiarPassword(id, datos)
  .then(() => console.log("se cambio la contrasenia"))
  .catch(() => console.error("no se pudo, boo"))
}
</script>
<style scoped>
.inputs-controls input {
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
}

.gris {
  color: #1313135c;
}
#form-contrasena{
  margin: 1rem 20px 0;
}
#form-contrasena button {
  outline: none;
  border: none;
  padding: 0.5rem 0;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
  margin: auto;
  width: 90%;
}

.contrasena a {
  color: #000;
  margin: 5px;
}

.col {
  flex: none;
}

.contrasena header {
  padding: 10px;
  box-shadow: 5px 5px rgba(7, 7, 7, 0.03);
}

.contrasena {
  padding: 0px;
}

#atras {
  color: #ff4d00;
}

.contrasena fieldset {
  margin-top: 20px;
}

.contrasena h1 {
  margin: 0 10px;
  color: #ff4d00;
  padding: 13px 0;
  font-size: 1.3em;
}

.contrasena h2 {
  margin: 20px auto 0;
  color: #ff4d00;
  padding: 10px 0;
  font-size: 1.5em;
  text-align: center;
}
</style>
