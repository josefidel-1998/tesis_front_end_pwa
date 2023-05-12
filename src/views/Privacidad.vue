<template>
  <section class="w-100 container-sm section_privacidad">
    <Modal />
    <Nav />
    <div class="privacidad">
      <h2>Su privacidad es importante para nosotros</h2>
      <p>
        Nosotros y nuestros socios almacenamos o accedemos a información en un dispositivo, tales como cookies, y procesamos datos personales, tales como identificadores únicos e información estándar enviada por un dispositivo, para anuncios y contenido personalizados, medición de anuncios y del contenido e información sobre el público, así como para desarrollar y mejorar productos. Con su permiso, nosotros y nuestros socios podemos utilizar datos de localización geográfica precisa e identificación mediante las características de dispositivos. 
      </p>
      <p>
        Puede hacer clic para otorgarnos su consentimiento a nosotros y a nuestros socios para que llevemos a cabo el procesamiento previamente descrito. De forma alternativa, puede acceder a información más detallada y cambiar sus preferencias antes de otorgar o negar su consentimiento. Tenga en cuenta que algún procesamiento de sus datos personales puede no requerir de su consentimiento, pero usted tiene el derecho de rechazar tal procesamiento. Sus preferencias se aplicarán solo a este sitio web. Puede cambiar sus preferencias en cualquier momento entrando de nuevo en este sitio web o visitando nuestra política de privacidad.
      </p>
    </div>
    <Footer />
  </section>
</template>
<script setup>
import Modal from "../components/Modal.vue";
import Footer from "../layout/Footer.vue";
import Nav from "../layout/Nav.vue";
</script>
<style scoped>
.section_privacidad{
  padding: 2rem 0;
}
.section_privacidad p {
  margin-bottom: 0%;
  width: 75%;
  margin: auto;
  text-align: center;
}

.fs-3 {
  font-size: 1.4rem !important;
}

.section_privacidad h2 {
  margin: 10px 10px 30px;
  color: #ff4d00;
  padding: 10px 0;
  font-size: 1.3em;
  width: 75%;
  margin: auto;
  text-align: center;
}

.privacidad {
  margin: 70px 0 9rem 0;
}
</style>
