<template>
  <div>
    <header class="navbar">
      <div class="container-fluid">
        <div class="navbarContenedor">
          <div  v-for="(data,i) in Data" :key="i" @click="index()" class="logo" id="menu">
            <img
              :src="data.img"
              alt="Taller de arte La ruca"
            />
            <h1>{{data.title}}</h1>
          </div>
          <div @click="abrirMenu" id="MenuMovil" class="hamburger hamburger3">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
          </div>
          <transition name="fade">
            <nav v-if="menu" class="navegacion">
              <div v-for="(item, a) in items" :key="a" class="navItem">
                <i :class="item.LinkIcono"></i>
                <nuxt-link
                  @click="abrirMenu"
                  :to="{ path: item.url, hash: item.hash }"
                >
                  <span @click="abrirMenu">{{ item.linkNombre }}</span>
                </nuxt-link>
              </div>
              <div class="socialIcons">
                <div class="social">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/larucapewen/"
                  >
                    <i class="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </div>              
               <!--  <facebook></facebook> -->
                <div @click="enviar()" class="social">
                  <i class="fab fa-whatsapp" aria-hidden="true"></i>
                </div>
              </div>
            </nav>
          </transition>
          <nav class="navegacion escritorio">
            <div v-for="(item, i) in items" :key="i" class="navItem">
              <i :class="item.LinkIcono"></i>
              <nuxt-link :to="{ path: item.url, hash: item.hash }">
                {{ item.linkNombre }}</nuxt-link
              >
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import facebook from "./facebook.vue";
import data from "../content/navbar.json";
export default {
  components: { facebook },
  name: "navbar",

  data() {
    return {
      menu: false,
      Data:[],
      items: [
        {
          url: "/",
          linkNombre: "Inicio",
          LinkIcono: "fas fa-home",
        },
        {
          url: "SobreNosotros",
          linkNombre: "Nosotros",
          LinkIcono: "fas fa-users",
        },
        {
          url: "/",
          hash: "#acti",
          linkNombre: "Espacios",
          LinkIcono: "fas fa-bullhorn",
        },
        {
          url: "/",
          hash: "#talleres",
          linkNombre: "Actividades",
          LinkIcono: "fas fa-book-reader",
        },
        {
          url: "/",
          hash: "#galeria",
          linkNombre: "Fotos",
          LinkIcono: "fas fa-image",
        },
        {
          url: "contacto",
          linkNombre: "Contactanos",
          LinkIcono: "fas fa-envelope-open-text",
        },
      ],
    };
  },
   mounted() {
    let array = [{ ...data }];
    this.Data = array;   
  },
  methods: {
    abrirMenu() {
      this.menu = !this.menu;
      document.getElementById("MenuMovil").classList.toggle("is-open");
    },
    enviar() {
      window.open(
        `https://api.whatsapp.com/send?phone=+543513462249&text=Hola!,%20¿como%20estan?%20deseo%20mas%20info%20sobre:`,
        "_blank"
      );
    },
    index() {
      this.$router.push({
        path: "/",
        hash: "",
      });
    },
  },
};
</script>
<style>
.logo {
  width: 80px;
  height: 70px;
  background-color: none;
  display: flex;
  flex-grow: 1;
  align-items: center;
  color: #4b1e35;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.logo img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 20px;
}

.navbarContenedor {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}

.navbar {
  width: 100%;
  background-color: rgb(255, 255, 255);
  height: 70px;
  box-shadow: 3px 9px 30px -6px rgba(0, 0, 0, 0.55);
  -webkit-box-shadow: 3px 9px 30px -6px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 3px 9px 30px -6px rgba(0, 0, 0, 0.55);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
}

.navegacion {
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 100vh;
  background-color: rgb(253, 253, 253);
  transition: all 0.9s ease;
  display: flex;
  overflow-y: hidden;
}

.navItem {
  margin-top: 20px;
  display: flex;
  font-size: 1.6rem;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.6s;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
}

.navItem:nth-child(1n) {
  color: #2aaae2;
}

.navItem:nth-child(2n) {
  color: #f9b001;
}

.navItem:nth-child(3n) {
  color: #f86a9a;
}

.navItem:nth-child(4n) {
  color: #75da8f;
}

.navItem i {
  margin-right: 20px;
  line-height: 0;
}

.navItem:hover,
.navItem:focus {
  background-size: 100% 1px;
}

.socialIcons {
  display: flex;
  margin-top: 50px;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
}
.social i {
  font-size: 1.9rem;
}
.social:nth-child(1n) {
  color: transparent;
  background-image: linear-gradient(45deg, #ffdf9e, #e56969, #8a49a1);
  -webkit-background-clip: text;
}

.social:nth-child(2n) {
  color: #139cf7;
}

.social:nth-child(3n) {
  color: #00e676;
}

.social:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.hamburger {
  margin: auto;
  width: 30px;
  height: 30px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.hamburger .bar {
  padding: 0;
  width: 30px;
  height: 4px;
  background-color: #2aaae2;
  display: block;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.bar1 {
  top: 0;
  position: absolute;
  z-index: 3003;
}

.bar2,
.bar3 {
  top: 13.5px;
  z-index: 3003;
}

.bar3 {
  right: 0;
  z-index: 3003;
}

.bar4 {
  bottom: 0;
  z-index: 3003;
}

.is-open .bar1 {
  transform: rotate(45deg) translate(22px, 22px);
  transition: all 0.4s;
  position: fixed;
  z-index: 3003;
}

.is-open .bar2 {
  transform: scaleX(0);
}

.is-open .bar3 {
  transition: all 0.4s;
  transform: rotate(-45deg) translate(-24px, 1px);
  position: fixed;
  z-index: 3003;
}

.is-open .bar4 {
  transition: all 0.4s;
  transform: scaleX(0);
}
.escritorio {
  display: none;
}

@media only screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  .navegacion {
    overflow-y: scroll;
  }
  .navItem {
    margin-top: 10px;
  }
  .socialIcons {
    margin-top: 20px;
    width: 90%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .navItem {
    margin-top: 5%;
  }

  .socialIcons {
    width: initial;
  }
  .escritorio {
    display: none;
  }
  .socialIcons {
    width: 250px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .logo img {
    height: 60px;
    width: 60px;
  }
  .hamburger {
    display: none !important;
  }
  .escritorio {
    display: flex;
  }
  .navegacion {
    display: flex;
    align-items: center;
    background-color: transparent;
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: row;
    position: relative;
    width: auto;
    height: 80px;
    overflow-y: hidden !important;
  }

  .navItem {
    margin-left: 3%;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size 0.6s;
    margin-top: 0;
  }
  .navItem i {
    margin-right: 0;
    line-height: 1;
  }
  .socialIcons {
    display: none;
  }
}

@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .socialIcons {
    display: none;
  }
  .escritorio {
    display: flex;
  }
  .navbar,
  .logo,
  .logo img {
    height: 80px;
  }
  .logo img {
    height: 50px;
    width: 50px;
  }
  .logo h1 {
    font-size: 1.2rem;
  }

  .hamburger {
    display: none !important;
  }

  .navegacion {
    display: flex;
    align-items: center;
    background-color: transparent;
    flex-grow: 4;
    justify-content: flex-end;
    flex-direction: row;
    position: relative;
    width: auto;
    height: 80px;
    overflow-y: hidden;
  }

  .navItem {
    margin-left: 3%;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size 0.6s;
    margin-top: 0;
  }
  .navItem i {
    margin-right: 0;
    line-height: 1;
  }
}
</style>
