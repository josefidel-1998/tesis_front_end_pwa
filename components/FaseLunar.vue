<template>
    <div>
        <ul v-for="fase in filtroProbable" :key="fase.fase" class="container-fluid d-flex flex-row justify-content-center shadow bg-white">
            <li>
                <img class="w-25" :src="fase.imagen" :alt="fase.fase" />
                <p>Fase lunar: <span>{{ fase.fase }}</span></p>
            </li>
            <li>
                <img id="probabalidad" :src="porcentajePez" alt="probabilidad" />
                <p>Pique: <span>{{ fase.probabilidadText }}</span></p>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import {ref, computed} from "vue";
    function moon_phase(date) { 
        let year = date.getYear(),
            month = date.getMonth(),
            day = date.getDay();
        
        if (month < 3) {
            year--;
            month += 12;
        }

        ++month;

        let jd = 365.25 * year + 30.6 * month + day - 694039.09;
        jd /= 29.53;
        let phase = parseInt(jd, 10);
        jd -= phase;
        phase = Math.ceil(jd * 8);
        phase = phase & 7;

        switch (phase) {
            
            case 0: phase = "Luna nueva"; break;
            case 1: phase = "Luna creciente"; break;
            case 2: phase = "Cuarto creciente"; break;
            case 3: phase = "Luna Gibosa creciente"; break;
            case 4: phase = "Luna llena"; break;
            case 5: phase = "Luna gibosa menguante"; break;
            case 6: phase = "Cuarto menguante";
            case 7: phase = "Luna menguante";
        }

        return phase;
    }

    let probar = moon_phase(new Date(Date.now()))

    const piqueProbable = ref([
        {
            fase: "Luna nueva",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611249/icono_luna_nueva_qxikmr.png",
            probabilidad: 80,
            probabilidadText: "Muy bueno"
        },
        {
            fase: "Luna creciente",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611250/icono_luna_creciente_ixoyag.png",
            probabilidad: 100,
            probabilidadText: "Perfecto"
        },
        {
            fase: "Luna cuarto creciente",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611250/icono_luna_cuarto_creciente_zee6sc.png",
            probabilidad: 10,
            probabilidadText: "Malo"
        },
        {
            fase: "Luna Gibosa creciente",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611250/icono_luna_gibosa_creciente_uavlx4.png",
            probabilidad: 10,
            probabilidadText: "Malo"
        },
        {
            fase: "Luna gibosa menguante",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611249/icono_luna_gibosa_menguante_ljradj.png",
            probabilidad: 50,
            probabilidadText: "Regular"
        },
        {
            fase: "Luna cuarto menguante",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611250/icono_luna_cuarto_menguante_hlfo0v.png",
            probabilidad: 10,
            probabilidadText: "Malo"
        },
        {
            fase: "Luna menguante",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611790/icono_luna-menguante_ws5se0.png",
            probabilidad: 10,
            probabilidadText: "Malo"
        },
        {
            fase: "Luna llena",
            imagen: "https://res.cloudinary.com/drk2ccweo/image/upload/v1677611249/icono_luna_llena_ledhl5.png",
            probabilidad: 50,
            probabilidadText: "Regular"
        },
    ]);
    
    let filtroProbable = piqueProbable.value.filter(filtro => filtro.fase === probar);

    const porcentajePez = computed(() => {
        if(filtroProbable.probabilidad == 100){
            return 'https://res.cloudinary.com/drk2ccweo/image/upload/v1677611250/iconito_peces-perfecto_rqz9j0.png'
        }else if(filtroProbable.probabilidad == 80){
            return 'https://res.cloudinary.com/drk2ccweo/image/upload/v1677611249/muybueno_jwqznk.png'
        }else if(filtroProbable.probabilidad == 50){
            return 'https://res.cloudinary.com/drk2ccweo/image/upload/v1677611249/regular_wuzsv5.png'
        }else{
            return 'https://res.cloudinary.com/drk2ccweo/image/upload/v1677611249/malo_l3krha.png'
        }
    });
</script>

<style scoped>
    #faseLunar {
        border-radius: 1rem;
        position: absolute;
        margin:0%;
    }
    p {
    font-size: 1em;
    text-align: center;
    margin-top: 10px;
    }
    p span {
        display: block;
        font-weight: 700;
    }
    #faseLunar div {
        padding: 15px;
        text-align: center;
    }

    div {
        border-radius: 20px;
        margin-top: 3px;
    }

    ul {
        padding: 1em 0.7em 0.7em;
        border-radius: 20px;
    }

    ul li {
        margin: auto;
        text-align: center;
    }
</style>