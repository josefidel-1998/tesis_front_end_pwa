<template>
  <div>
    <Nav />
    <section id="perfil">
      <Modal />
      <div id="perfil_fondo">
        <template v-if="imagen">
          <img :src="'/src/assets/imgSmall/' + imagen" alt="foto_perfil" />
        </template>
        <template v-else>
          <img class="naranja" src="/src/assets/usuario.png" alt="usuario" />
        </template>
        <div v-if="bandera" class="spinner-border text-light spinner1" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <h2 class="text-center">{{ nombre }}</h2>
      </div>
      <div class="datos__div">
        <ul>
          <div v-if="bandera" class="spinner-border naranja spinner1" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div v-else>
            <li>
              <p><i class="bi bi-envelope m-2 naranja"></i> {{ email }}</p>
            </li>
            <li >
              <p>
                <i class="bi bi-person-up m-2 naranja"></i>Nivel:
                {{ preferencias.nivel }}
              </p>
            </li>
            <li >
              <p>
                <i class="bi bi-droplet m-2 naranja"></i>Tipo de agua:
                {{ preferencias.agua }}
              </p>
            </li>
            <li >
              <p>
                <i class="bi bi-pin m-2 naranja"></i>Próximo objetivo:
                {{ preferencias.pez }}
              </p>
            </li>
          </div>
        </ul>
        <span
          class="text-center d-block py-1 px-3 fs-6 text-success w-50 mx-auto"
          v-if="pinia.bandera"
          >Actualizaste tu perfil</span
        >
        <router-link to="/editar-perfil">Editar mi perfil</router-link>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../layout/Footer.vue";
import Nav from "../layout/Nav.vue";
import Modal from "../components/Modal.vue";
import { usePinia } from "../store/pinia.js";
export default{
  components: {
    Nav,
    Modal,
    Footer,
  },
  setup() {
    const pinia = usePinia();
    return { pinia };
  },
  data() {
    return {
      nombre: "",
      email: "",
      preferencias: {},
      imagen: "",
      contador: 0,
      bandera: false,
      intervalo: () => {}
    };
  },
  mounted() {

    this.bandera = true;

    const id = JSON.parse(localStorage.getItem("id"));

    fetch(`https://server4-sand.vercel.app/api/usuarios/${id}`)
      .then((datos) => datos.json())
      .then((data) => {
        this.preferencias = data.preferencias;
        this.nombre = data.nombre;
        this.email = data.email;
        this.bandera = false;
      });
      if(this.pinia.bandera){
         this.intervalo = setInterval(() => {
          this.contador++;
          console.log(this.contador)
          if(this.contador == 5){
            this.pinia.bandera = false;
          }
        }, 1000);
      }
  },
  watch:{
    contador(num){
      if(num == 5){
        clearInterval(this.intervalo)
      }
    }
  }
};
</script>

<style scoped>
#perfil {
  padding-top: 20px;
}

#perfil_fondo {
  background: url(/src/assets/fonde_azul.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  margin: 0% auto!important;
  display: inline-block!important;
}

#perfil_fondo img {
  margin: 12% auto 0;
}

#perfil h2 {
  color: #fff;
  margin-top: 20px;
}

#perfil img {
  display: flex;
  text-align: center;
  border: #fff;
  border-style: solid;
  border-radius: 100px;
}

#perfil ul,
#perfil ol {
  margin: 50px 8.5% 20px;
  padding: 0% !important;
}

#perfil div a {
  margin: 20px 8.5%;
  padding: 10px 20px;
  background-color: #ff4d01;
  border-radius: 50px;
  text-align: center;
  color: #fff;
  text-transform: capitalize;
  display: inline-block;
  width: 80%;
}

#perfil div:nth-child(2) {
  display: flex;
  justify-content: center;
  margin: 13% 0 15px;
}

#perfil i {
  font-size: 20px !important;
}
.datos__div{
  min-height: 80vh;
}
.spinner1{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
</style>
