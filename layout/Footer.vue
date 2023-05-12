<template>
        <footer class="container-fluid">
            <ul>
                <li><router-link class="text-white" to="/inicio"><i class="bi bi-house"></i> Home</router-link></li>
                <li><router-link class="text-white" to="/clima-actual"><i class="bi bi-droplet"></i> Clima</router-link></li>
                <li><router-link class="text-white" to="/informacion"><i class="bi bi-search"></i> +Info</router-link></li>
                <li><router-link class="text-white" to="/perfil"><i class="bi bi-person"></i> Perfil</router-link></li>
            </ul>
        </footer>
</template>

<script>

</script>

<style scoped>

footer .bi-person[data-v-a0eb554e] {
    font-size: 1.2em;
    width: 18px;
    height: 25px;
}
    footer{
        margin-block-start: 8rem;
        width: 100%;
        background-color:#0449F4;
        position: fixed;
        bottom: 0;
        padding: 15px 0;
        z-index: 1;
    }
    footer ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-block: 1rem;
        padding-left: 0 !important;
        margin: auto;
        transition: all 0.3s ease-in-out;
    }
    ul li{
        list-style: none;
    }

    footer ul li a{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>