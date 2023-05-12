<template>
    <div class="modal">
      <p>Biufort esta diseñada para dar una mejor experiencia en teléfonos &#128512; &#128241;</p>
    </div>
</template>

<script setup>

</script>
<style scope>
.modal{
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgba(0, 0, 0, 0.9);
  color: white;
}
.modal p{
  width: 50vw;
  font-size: 3rem;
  text-align: center;
}

@media screen and (max-width: 780px){
  .modal{
    display: none;
  }
}
</style>