<template>
  <Nav />
  <span class="lds-dual-ring" v-if="bandera"></span>
  <section v-else>
    <Modal />
    
    <article class="portada relative">
      <div>
        <h2 class="fs-5 pt-4">{{ nombreLocal }}</h2>
        <p id="temperatura-valor">{{ datosClima.temp }} °C</p>
        <span id="tem__span">
          <p>{{ datosClima.tMin }} °C</p>
          |
          <p>{{ datosClima.tMax }} °C</p>
        </span>
        <p id="sensacion-termica">
          Sensación térmica {{ datosClima.rFeel }} °C
        </p>
      </div>
      <div>
        <img id="icono-animado" :src="datosClima.icon" :alt="datosClima.temp" />
      </div>
    </article>

    <article
      id="redondito"
      class="container-fluid d-flex flex-row justify-content-center shadow bg-white"
    >
      <div class="px-2 py-4 text-center w-100 border-end border-2">
        <i class="bi bi-wind fs-1 naranja"></i>
        <p class="fw-semibold text-secondary">
          Viento <br />
          <span v-if="bandera"></span>
          <span v-else class="fs-4 fw-normal">{{parseInt(datosClima.speed * 3.6)}}</span>
          km/h
        </p>
      </div>
      <div class="px-2 py-4 text-center w-100 border-end border-2">
        <i class="bi bi-thermometer fs-1 naranja"></i>
        <p class="fw-semibold text-secondary">
          Presión Atm <br /><span class="fs-4 fw-normal">{{
            datosClima.pressure
          }}</span>
          hPa
        </p>
      </div>
      <div class="px-2 py-4 text-center w-100">
        <i class="bi bi-droplet fs-1 naranja"></i>
        <p class="fw-semibold text-secondary">
          Humedad <br /><span class="fs-4 fw-normal">{{
            datosClima.humidity
          }}</span
          >%
        </p>
      </div>
    </article>

    <article class="shadow" id="redondito2">
      <figure v-for="dias in diasPosteriores" :key="dias.lenght">
        <img :src="dias.icon" />
        <figcaption class="text-center">
          <p>{{ dias.dia }}</p>
          <p class="fw-semibold">{{ dias.temp }} °C</p>
        </figcaption>
      </figure>
    </article>
    <FaseLunar />
  </section>
    <Footer />
</template>

<script setup>
import Nav from "../layout/Nav.vue";
import Footer from "../layout/Footer.vue";
import Modal from "../components/Modal.vue";
import FaseLunar from "../components/FaseLunar.vue";
import { ref, onMounted } from "vue";

const apiKey = ref("83dab742ede4dbf64eb69517ccc07a79");
const url = ref(`https://api.openweathermap.org/data/2.5/weather`);
const datosClima = ref({});
const fechaActual = ref("");
const diasPosteriores = ref([]);
const faseLunar = ref("");
const nombreLocal = ref("");
let lat = ref(0);
let long = ref(0);
let bandera = ref(false);

onMounted(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    lat.value = position.coords.latitude;
    long.value = position.coords.longitude;
    function convertirDia(dia) {
      switch (dia) {
        case 0:
          let domingo = "Dom";
          return domingo;

        case 1:
          let lunes = "Lun";
          return lunes;

        case 2:
          let martes = "Mar";
          return martes;

        case 3:
          let miercoles = "Miér";
          return miercoles;

        case 4:
          let jueves = "Jue";
          return jueves;

        case 5:
          let viernes = "Vier";
          return viernes;
        case 6:
          let sabado = "Sáb";
          return sabado;

        default:
          break;
      }
    }

    const API_KEY = "f3412604fc05c46d66a65dcf8f4244ea";
    const URL_CURRENT_W = "https://api.openweathermap.org/data/2.5/forecast";

    fetch(
      `${URL_CURRENT_W}?lat=${lat.value}&lon=${long.value}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((json) => {
        let dia1 = json.list[5];
        let dia2 = json.list[13];
        let dia3 = json.list[21];
        let dia4 = json.list[29];
        let dia5 = json.list[37];

        let diaNormal1 = convertirDia(new Date(dia1.dt_txt).getDay());
        let diaNormal2 = convertirDia(new Date(dia2.dt_txt).getDay());
        let diaNormal3 = convertirDia(new Date(dia3.dt_txt).getDay());
        let diaNormal4 = convertirDia(new Date(dia4.dt_txt).getDay());
        let diaNormal5 = convertirDia(new Date(dia5.dt_txt).getDay());

        diasPosteriores.value = [
          {
            dia: diaNormal1,
            temp: parseInt(dia1.main.temp - 273.5),
            icon: `https://openweathermap.org/img/wn/${dia1.weather[0].icon}@2x.png`,
          },
          {
            dia: diaNormal2,
            temp: parseInt(dia2.main.temp - 273.5),
            icon: `https://openweathermap.org/img/wn/${dia2.weather[0].icon}@2x.png`,
          },
          {
            dia: diaNormal3,
            temp: parseInt(dia3.main.temp - 273.5),
            icon: `https://openweathermap.org/img/wn/${dia3.weather[0].icon}@2x.png`,
          },
          {
            dia: diaNormal4,
            temp: parseInt(dia4.main.temp - 273.5),
            icon: `https://openweathermap.org/img/wn/${dia4.weather[0].icon}@2x.png`,
          },
          {
            dia: diaNormal5,
            temp: parseInt(dia5.main.temp - 273.5),
            icon: `https://openweathermap.org/img/wn/${dia5.weather[0].icon}@2x.png`,
          },
        ];
      });

    fetch(
      `${url.value}?lat=${lat.value}&lon=${long.value}&appid=${apiKey.value}`
    )
      .then((data) => data.json())
      .then((data) => {
        //console.log(data)
        bandera.value = false;
        const datos = {
          temp: parseInt(data.main.temp - 273.5),
          estado: data.weather[0].main,
          tMax: parseInt(data.main.temp_max - 273.5),
          tMin: parseInt(data.main.temp_min - 273.5),
          humidity: data.main.humidity,
          rFeel: parseInt(data.main.feels_like - 273.5),
          pressure: data.main.pressure,
          speed: data.wind.speed,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
        datosClima.value = datos;
      });

    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat.value}&lon=${long.value}&appid=${API_KEY}&lang=es`
    )
      .then((r) => r.json())
      .then((datos) => {
        bandera.value = false;
        console.log(datos)
        nombreLocal.value = datos[0].name;
      });
  });

  bandera.value = true;
});
</script>

<style scoped>
header {
  z-index: 1;
}

h2 {
  margin-bottom: 0;
}

p {
  margin-bottom: 5px !important;
}

ul li {
  list-style-type: none;
}

section {
  width: 100%;
  margin-block-end: 8rem;
}

.portada {
  width: 100%;
  margin-top: 10%;
  background-color: #0449f4;
  border-radius: 0px 0px 50px 50px;
  -webkit-border-radius: 0px 0px 50px 50px;
  -moz-border-radius: 0px 0px 50px 50px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem 2rem 2rem;
  padding-inline: 1rem;
  margin-block-end: 0;
}

.portada div:nth-of-type(1) {
  display: flex;
  flex-direction: column;
}

#temperatura-valor {
  font-size: 3rem;
  margin: 0 !important;
}

#sensacion-termica {
  font-size: 0.8em;
}

#tem__span {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
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

#icono-animado {
  min-width: 128px;
  min-height: 128px;
}

#redondito {
  border-radius: 1rem;
  position: absolute;
  margin: 0%;
}

#redondito p {
  font-size: 0.8em !important;
}

#redondito p span {
  font-size: 1.4em !important;
}

#redondito2 {
  border-radius: 33px;
  margin-block-start: 9rem;
  width: 100%;
  display: grid;
  place-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: #0449f4;
  padding-inline: 0.5rem;
  padding: 10px;
  color: white;
  margin-block-end: 0;
}

#redondito2 img {
  width: 50px;
}

#redondito2 figure figcaption p:first-child {
  font-size: 0.8em !important;
}

#redondito2 figure figcaption p {
  margin-bottom: 0 !important;
}

#redondito2 figure {
  border: rgba(255, 255, 255, 0.265);
  border-style: solid;
  border-right-width: 0.5px;
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 0;
  padding: 0 25%;
  margin: 10px 0;
}

#redondito2 figure:last-child {
  border-right-width: 0px;
}
</style>
