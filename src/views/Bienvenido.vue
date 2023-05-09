<template>
  <section class="w-100 container-sm">
    <Modal />
    <div class="row mb-4">
      <img class="w-50 mx-auto mb-4 tutorial" src="../assets/welcome-form.png" />
      <h1 class="text-center">Bienvenido</h1>
    </div>
    <form id="form-welcome" class="row mb-4" @submit.prevent="logearse">
      <fieldset class="w-100">
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-person fs-3 naranja"></i>
          <input
            class="ms-3 ingreso-form"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            @keypress="validarNombre"
            @change="validarNombre"
            v-model="usuario"
          />
          <i class="bi bi-eye show-icon text-white"></i>
        </div>
        <span class="d-block text-center text-danger mb-4">{{
          errorUsuario
        }}</span>
        <div
          class="col mb-4 inputs-controls d-flex items-center justify-content-center"
        >
          <i class="bi bi-bag fs-3 naranja"></i>
          <input
            class="ms-3 ingreso-form"
            :type="show === true ? 'text' : 'password'"
            id="password"
            name="password"
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
          Ingresar
        </button>
      </fieldset>
    </form>
    <div class="row mt-6 text-center">
      <h3>¿No tenés cuenta?</h3>
      <router-link to="/registrate">Registrate</router-link>
      <span
        class="text-center d-block py-1 px-3 fs-6 text-success w-50 mx-auto"
        v-if="pinia.banderaCrearCuenta"
        >Te creaste una cuenta</span
      >
      <span
        class="text-center d-block py-1 px-3 fs-6 text-success w-50 mx-auto"
        v-if="pinia.banderaSesion"
        >Cerraste tu sesión correctamente</span
      >
    </div>
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import { usePinia } from "../store/pinia.js";
import { login } from "../services/autenticacion";
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";

const pinia = usePinia();
const router = useRouter();

let contador = ref(0);
let intervalo = ref(() => {})
const usuario = ref("");
const password = ref("");

let errorUsuario = ref("");
let errorPassword = ref("");

let show = ref(false);

function validar() {
  validarNombre();
  validarPassword();
}

function validarNombre() {
  if (usuario.value == "" || usuario.value.length == 0) {
    errorUsuario.value = "Coloca tu nombre";
  } else if (usuario.value.length < 4) {
    errorUsuario.value = "Debe poner al menos 4 caracteres";
  } else {
    errorUsuario.value = "";
  }
}
function validarPassword() {
  if (password.value == "" || password.value.length == 0) {
    errorPassword.value = "Coloca tu contraseña";
  } else if (password.value.length < 4) {
    errorPassword.value = "La contraseña tiene que tener mas de 6 caracteres";
  } else {
    errorPassword.value = "";
  }
}
function logearse(datos) {
  let password = datos.target.password.value;
  let email = datos.target.email.value;

  login(email, password)
    .then((datos) => {
      let id = datos.usuario._id;
      let token = datos.token;

      console.log(datos);
      localStorage.setItem("id", JSON.stringify(id));

      //localStorage.setItem('token', JSON.stringify(token));
      $cookies.set("token", token);

      router.push({ path: `/perfil` });
    })
    .catch((e) => console.error(e.message));
}

onMounted(() => {
  console.log(pinia.banderaSesion)
  if(pinia.banderaSesion){
         intervalo.value = setInterval(() => {
          contador.value++;
          console.log(contador.value)
          if(contador.value == 5){
            pinia.banderaSesion = false;
            pinia.banderaCrearCuenta = false;
          }
        }, 1000);
      }
  console.log(pinia.banderaSesion);
});
watch(contador, numero => {
  if(numero == 5){
    clearInterval(intervalo.value)
  }
})

</script>

<style scoped>
.tutorial {
  margin-top: 40px;
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

.inputs-controls .ingreso-form {
  outline: none;
  border: none;
  border-bottom: 1px solid gray;
  width: 58%;
}

.gris {
  color: #1313135c;
}

footer {
  display: none;
}
</style>
