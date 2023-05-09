<template>
  <section class="w-100 container-sm">
    <Modal />
    <header class="col mb-6 d-flex items-left justify-content-left">
      <a id="atras" href="#"
        ><i class="bi bi-arrow-left-short fs-1 naranja"></i
      ></a>
      <h2>Notificaciones</h2>
    </header>
    <div>
      <ul class="row">
        <li class="w-100">
          <a href="#" class="col mb-6 d-flex items-left justify-content-left">
            <i class="bi bi-bell-fill fs-3 naranja col mb-4"></i>
            <p class="ms-3">Notificaciones</p>
          </a>
        </li>
        <li class="w-100">
          <a href="#" class="col mb-6 d-flex items-left justify-content-left">
            <i class="bi bi-bookmark-plus-fill fs-3 naranja col mb-3"></i>
            <p class="ms-3">Notificaciones Push</p>
          </a>
        </li>
        <li class="w-100">
          <a href="#" class="col mb-6 d-flex items-left justify-content-left">
            <i class="bi bi-chat-right-fill fs-3 naranja col mb-3"></i>
            <p class="ms-3">Notificaciones por msj</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import Modal from "../components/Modal.vue";
</script>
<style scoped>
li {
  background-color: #fff;
  padding: 5px 10px;
}

a {
  color: #000;
  margin: 5px;
  text-decoration: none;
}

p {
  font-size: 1.3em;
  margin-bottom: 0%;
}

ol,
ul {
  padding-left: 0%;
}

.col {
  flex: none;
}

header {
  padding: 15px;
  box-shadow: 5px 5px rgba(7, 7, 7, 0.03);
}

section.w-100.container-sm {
  padding: 0px;
}

ul {
  margin-top: 10px;
}

ul li[data-v-c6c7db38] {
  box-shadow: 5px 5px rgb(7 7 7 / 3%);
  height: 50px;
}

.fs-3 {
  font-size: 1.4rem !important;
}

h2 {
  margin: 0 10px;
  color: #ff4d00;
  padding: 10px 0;
  font-size: 1.5em;
}

#atras {
  color: #ff4d00;
}
</style>
