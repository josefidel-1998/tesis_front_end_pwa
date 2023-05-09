import { defineStore } from 'pinia';

export const usePinia = defineStore('biufortGlobal', {
    state: () => {
      return { 
        bandera: false, 
        banderaCrearCuenta: false,
        filtroPeces: [], 
        peces: [],
        ubicaciones: [],
        filtroUbicaciones: [],
        nudos: [],
        banderaImgs: false,
        banderaSesion: false
      }
    },
    actions: {
      allFish() {
      let url = "https://server01-tesis.vercel.app/api/peces"        
      fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': $cookies.get('token')
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
            this.banderaImgs = false;
            this.peces = data;
            this.filtroPeces = data;
        })
        this.banderaImgs = true;
    },
    allPlaces(){
      let url = "https://server4-sand.vercel.app/api/ubicaciones"
      fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': $cookies.get('token')
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.banderaImgs = false
        this.ubicaciones = data;
        this.filtroUbicaciones = data;
      })
      this.banderaImgs = true;
    },
    getNudos() {
      let url = "https://server01-tesis.vercel.app/api/nudos"
      fetch(url, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': $cookies.get('token')
        }
      })
      .then(response => response.json())
      .then(data => {
          console.log(data)
          this.banderaImgs = false;
          this.nudos = data
      })
      this.banderaImgs = true;
  }
  }
})