import { createRouter,  createWebHashHistory} from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'Bienvenido',
      component: () => import('../views/Bienvenido.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../components/404.vue'),
    },
    {
      path: '/inicio',
      name: "Inicio",
      component: () => import('../views/Inicio.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/registrate',
      name: 'Registrate',
      component: () => import('../views/Registrate.vue')
    },
    {
      path: '/peces',
      name: 'Peces',
      component: () => import('../views/Peces.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/detalle_pez/:pez',
      name: 'Detalle Pez',
      component: () => import('../views/DetallePez.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/detalle_nudo/:nudo',
      name: 'Detalle Nudo',
      component: () => import('../views/DetalleNudo.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/contrasenia',
      name: 'Contrasenia',
      component: () => import('../views/Contrasena.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/configuracion',
      name: 'Configuracion',
      component: () => import('../views/Configuracion.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/privacidad',
      name: 'Privacidad',
      component: () => import('../views/Privacidad.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/tutorial-busqueda',
      name: 'Tutorial Búsqueda',
      component: () => import('../views//TutorialBusqueda.vue')
    },
    {
      path: '/tutorial-encuesta',
      name: 'Tutorial Encuesta',
      component: () => import('../views/TutorialEncuesta.vue')
    },
    {
      path: '/tutorial-ubicacion',
      name: 'Tutorial Ubicación',
      component: () => import('../views/TutorialUbicacion.vue')
    },
    {
      path: '/clima-actual',
      name: 'Clima Actual',
      component: () => import('../views/ClimaActual.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/lugares',
      name: 'Ubicaciones',
      component: () => import('../views/Lugares.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/detalle/:id',
      name: 'Detalle Ubicación',
      component: () => import('../views/DetalleUbicacion.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: () => import('../views/Perfil.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: "/editar-perfil",
      name: "Editar Perfil",
      component: () => import('../views/EditarPerfil.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: "/informacion",
      name: "Información",
      component: () => import('../views/Informacion.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: "/privacidad",
      name: "Privacidad",
      component: () => import('../views/Privacidad.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: '/contrasenia',
      name: 'Contrasenia',
      component: () => import('../views/Contrasena.vue'),
      meta: {
        requireAuth: true
      },
    },
    {
      path: "/nudos",
      name: "Nudos",
      component: () => import('../views/Nudos.vue'),
      meta: {
        requireAuth: true
      },
    }

]
  const router = createRouter({
    history: createWebHashHistory(), // este hash history es el # para que te coloque las rutas , por defecto esta la de listPage
    routes, 
  });
  // el to es hacia donde quiere ir el usuario
  // from es de donde viene
  // next hacia donde ira el usuario
  router.beforeEach((to,from, next) => {
    //const auth = JSON.parse(localStorage.getItem('token')) !== null
    const auth = $cookies.get('token') !== null;

    const needAuth = to.meta.requireAuth

    if(needAuth && !auth) {
      next('/');
    }else{
      next();
    }
  })
export default router;
