<template>
  <section class="w-100 container-sm">
    <Modal />
    <div class="row mb-4">
      <img class="w-50 mx-auto my-4 tutorial" src="../assets/register-form.png" />
      <h1 class="text-center">Registrate</h1>
    </div>
    <form id="form-welcome" class="row mb-4" @submit.prevent="Registrarse">
      <fieldset class="w-100">
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-person fs-3 naranja"></i>
          <input
            class="ms-3 ingreso-form"
            type="text"
            id="nombre"
            placeholder="Nombre"
            @keypress="validarNombre"
            @keydown="validarNombre"
            @keyup="validarNombre"
            @change="validarNombre"
            v-model="nombre"
          />
        </div>
        <span class="d-block text-center text-danger mb-4">{{
          errornombre
        }}</span>
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-envelope fs-3 naranja"></i>
          <input
            class="ms-3 ingreso-form"
            type="email"
            id="email"
            placeholder="Email"
            @keypress="validarMail"
            @keydown="validarMail"
            @keyup="validarMail"
            @change="validarMail"
            v-model="email"
          />
        </div>
        <span class="d-block text-center text-danger mb-4">{{
          errorMail
        }}</span>
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-bag-x fs-3 naranja"></i>
          <input
            class="ms-3 ingreso-form"
            :type="show === true ? 'text' : 'password'"
            id="password"
            placeholder="Contraseña"
            @keypress="validarPassword"
            @change="validarPassword"
            v-model="password"
          />
          <i class="bi bi-eye show-icon naranja" v-if="show" @click="show = !show"></i>
          <i class="bi bi-eye-slash hide-icon naranja" v-else @click="show = !show"></i>
        </div>
        <span class="d-block text-center text-danger mb-4">{{
          errorPassword
        }}</span>
        <button type="submit" class="boton-naranja">
          Registrarme
        </button>
      </fieldset>
    </form>
    <div class="row mt-6 text-center">
      <h3>¿Ya tenés cuenta?</h3>
      <router-link to="/" >Ingresá</router-link>
    </div>
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import { usePinia } from "../store/pinia.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
const pinia = usePinia();
const router = useRouter();
const nombre = ref("");
const password = ref("");
const email = ref("");
const errorMail = ref("");
const errornombre = ref("");
const errorPassword = ref("");

let show = ref(false);
function Registrarse() {
  const datos = {
    nombre: nombre.value,
    email: email.value,
    password: password.value,
  };

  return fetch("https://server02-tesis.vercel.app/api/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((r) => {
      console.table(r);
      pinia.banderaCrearCuenta = true;
      router.push({ path: "/" });
    })
    .catch((e) => console.error(e.message));
}

function validar() {
  validarNombre();
  validarPassword();
  validarMail();
}

function validarNombre() {
  if (nombre.value == "" || nombre.value.length == 0) {
    errornombre.value = "Coloca tu nombre";
  } else if (nombre.value.length < 3) {
    errornombre.value = "Debe poner al menos 3 caracteres";
  } else {
    errornombre.value = "";
  }
}

function validarPassword() {
  if (password.value == "" || password.value.length == 0) {
    errorPassword.value = "Coloca tu contraseña";
  } else if (password.value.length < 6) {
    errorPassword.value = "La contraseña tiene que tener mas de 6 caracteres";
  } else {
    errorPassword.value = "";
  }
}

function validarMail() {
  if (email.value == "" || email.value.length == 0) {
    errorMail.value = "Coloca tu email";
  } else {
    errorMail.value = "";
  }
}
</script>

<style scoped>

.tutorial {
  margin-top: 40px;
}
.inputs-controls .ingreso-form {
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
}

.gris {
  color: #1313135c;
}

.boton-naranja {
  background-color: #ff4d01;
  color: #fff;
  padding: 10px 30%;
  border-radius: 20px;
  display: block;
  margin: 40px auto 0%;
  text-align: center;
  outline: none;
  border: none;
}
</style>
