<template>
  <span class="lds-dual-ring" v-if="bandera"></span>
  <section v-else id="editar-perfil">
    <Modal />
    <Nav />
    <form
      id="form-welcome"
      class="container-fluid"
      @submit.prevent="editarPerfil"
    >
      <fieldset>
        <article class="row d-flex flex-column">
          <div class="col inputs-controls">
            <label id="nombre"
              ><i class="bi bi-person fs-3 naranja"></i> Nombre de
              usuario</label
            >
            <input
              type="text"
              id="nombre"
              class="w-100"
              placeholder="nombre"
              name="nombre"
              @change="validarNombre"
              @keypress="validarNombre"
              @keyup="validarNombre"
              v-model="nombre"
            />
            <span class="d-block text-center text-danger mb-4">{{validacionNombre}}</span>
          </div>
        </article>
        <article class="d-flex flex-column gap-4">
          <div>
            <label
              ><i class="bi bi-pin m-2 naranja" id="pez"></i> Próximo
              objetivo</label
            >
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="pez"
              id="pez"
            >
              <option
                v-for="pez in peces"
                :key="pez.id"
                :value="pez.nombres"
                name="pez"
              >
                {{ pez.nombres }}
              </option>
            </select>
          </div>

          <div>
            <h2 class="titulo-form"><i class="bi bi-droplet m-2 naranja"></i> Tipo de agua</h2>
            <label for="dulce">Dulce</label>
            <input
              v-model="agua"
              type="radio"
              id="dulce"
              value="dulce"
              name="agua"
            />
            <label for="salado">Salado</label>
            <input
              v-model="agua"
              type="radio"
              id="salado"
              value="salado"
              name="agua"
            />
          </div>
          <div id="diferente">
            <h2 class="titulo-form"><i class="bi bi-person-up m-2 naranja"></i> Nivel</h2>
            <div class="my-3">
              <label for="principiante">Principiante</label>
              <input
                type="radio"
                name="principiante"
                v-model="nivel"
                value="principiante"
                id="principiante"
              />
            </div>
            <div class="my-3">
              <label for="avanzado">Avanzado</label>
              <input
                type="radio"
                name="avanzado"
                v-model="nivel"
                value="avanzado"
                id="avanzado"
              />
            </div>
            <div class="my-3">
              <label for="experto">Experto</label>
              <input
                type="radio"
                name="experto"
                v-model="nivel"
                value="experto"
                id="experto"
              />
            </div>
          </div>
        </article>
        <input type="submit" id="confirmar" value="Guardar datos"/>
        <router-link to="/perfil" id="cancelar">Cancelar</router-link>
      </fieldset>
    </form>
    <Footer />
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import Nav from "../layout/Nav.vue";
import Footer from "../layout/Footer.vue";
import { usePinia } from "../store/pinia.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const pinia = usePinia();
const nombre = ref("");
const agua = ref("");
const nivel = ref("");
const pez = ref("");
const peces = ref([]);
let router = useRouter();
let validacionNombre = ref("");
let verificar = ref(false);
let bandera = ref(false);
let id = JSON.parse(localStorage.getItem("id"));

function validarNombre() {
  if (nombre.value == "") {
    validacionNombre.value = "Debés de colocar tu nombre";
    verificar.value = false;
    console.log(verificar.value);
  } else if (nombre.value.length < 4) {
    validacionNombre.value = "Tu nombre tiene que tener al menos 4 carácteres";
    verificar.value = false;
    console.log(verificar.value);
  } else {
    verificar.value = true;
    validacionNombre.value = "";
    console.log(verificar.value);
  }
}

const editarPerfil = () => {
  const datos = {
    nombre: nombre.value,
    preferencias: {
      agua: agua.value,
      nivel: nivel.value,
      pez: pez.value,
    },
  };

  if (verificar.value == true || nombre.value) {
    fetch(`https://server4-sand.vercel.app/api/usuarios/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": $cookies.get("token"),
      },
      body: JSON.stringify(datos),
    })
    .then((r) => {
      if (r.ok) {
        pinia.bandera = true;
        router.push('/perfil');
        console.log(r);
      }
    })
  }
}

onMounted(() => {

  bandera.value = true;

  fetch(`https://server4-sand.vercel.app/api/usuarios/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": $cookies.get("token"),
    },
  })
    .then((r) => r.json())
    .then((data) => {
      nombre.value = data.nombre;
      agua.value = data.preferencias.agua;
      nivel.value = data.preferencias.nivel;
      pez.value = data.preferencias.pez;
      bandera.value = false;
    });

  fetch("https://server01-tesis.vercel.app/api/peces")
    .then((response) => response.json())
    .then((data) => {
      peces.value = data;
      bandera.value = false;
    });
});
</script>

<style scoped>

#editar-perfil #diferente {
    margin-bottom: 0;
}

#cancelar {
  margin: auto 40%;
  text-align: center;
}

#editar-perfil div {
  margin-bottom: 20px;
}

#editar-perfil label {
  margin-bottom: 10px;
}

#confirmar {
  margin: 20px auto;
  padding: 10px 0;
  background-color: #ff4d01;
  border-radius: 50px;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  display: inline-block;
  width: 100%;
  border: none;
}

#form-welcome {
  margin: 20% 0 8em !important;
}

#form-welcome fieldset {
  margin: 0 30px;
}

.titulo-form {
  font-size: 1em !important;
}

#form-welcome label i,
.titulo-form i {
  margin-right: 15px;
}

#dulce,
#salado,
#principiante,
#avanzado,
#experto {
  margin: 0 10px;
}
.lds-dual-ring {
  display: block;
  width: 80px;
  height: 80px;
  margin: auto;
  margin-block-start: 8rem;
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
