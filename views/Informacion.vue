<template>
  <section class="container-fluid w-100 section-informacion">
    <Modal />
    <Nav />
    <div>
      <ul class="nav d-flex flex-column align-items-start lista_informacion">
        <li class="item-info">
          <router-link
            id="peces"
            class="nav-link block navegacion text-black"
            to="/peces"
            >Peces</router-link
          >
        </li>
        <li class="item-info">
          <router-link
            id="campings"
            class="nav-link block navegacion text-black"
            to="/lugares"
            >Campamentos</router-link
          >
        </li>
        <li class="item-info">
          <router-link
            id="nudos"
            class="nav-link block navegacion text-black"
            to="/nudos"
            >Nudos</router-link
          >
        </li>
      </ul>
    </div>
    <Footer />
  </section>
</template>

<script setup>
import Modal from "../components/Modal.vue";
import Nav from "../layout/Nav.vue";
import Footer from "../layout/Footer.vue";
</script>

<style scoped>
.lista_informacion {
  margin: -15px 0% 0px!important;
}

.section-informacion {
  margin-block-start: 5rem;
  padding: 0%;
}

.navegacion {
  font-weight: 500;
  padding: 10px 0 10px 4rem;
  margin: 10px;
}

#peces {
  background-image: url("../assets/iconos/pez_icono.png");
  background-repeat: no-repeat;
  background-position: left;
}

#campings {
  background-image: url("../assets/iconos/camping_icono.png");
  background-repeat: no-repeat;
  background-position: left;
}

#nudos {
  background-image: url("../assets/iconos/gancho_icono.png");
  background-repeat: no-repeat;
  background-position: left;
}

.item-info {
  padding: 1px 1rem;
  width: 100%;
  box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.33);
  -webkit-box-shadow: 0px 0px 5px -3px rgb(0 0 0 / 33%);
  -moz-box-shadow: 0px 0px 5px -3px rgba(0, 0, 0, 0.33);
}
</style>
