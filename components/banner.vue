<template>
  <div>
    <transition name="fade">
      <section class="hero" :style="cssProps">
        <div class="sombra"></div>
        <div class="container-fluid text-content">
          <slider></slider>
        </div>
        <div>
          <img
            :src="require('static/img/nubesBanner.jpeg')"
            alt="nubes irradiando"
          />
        </div>
      </section>
    </transition>
  </div>
</template>
<script>
import btnPry from "../components/btnPry.vue";
import Slider from "./slider.vue";
export default {
  components: { btnPry, Slider },
  name: "banner",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/static/img/fondo1.jpeg")})`,
      },
      txtBtn: "Descubre mas",
      claseBtn: "btnBanner",
      txtBtn2: "Inscripciones",
      claseBtn2: "btnSecundario",
    };
  },
  methods: {},
};
</script>
<style>
.hero {
  display: flex;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.contenTexto {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.texto {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1%;
  padding-right: 1%;
  text-align: center;
  height: 50vh;
}
.texto h2 {
  color: rgb(233, 233, 233);
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
}

.texto h1 {
  font-size: 2rem;
  color: #ffffff;
   margin: 7% 0; 
  font-family: "Merienda One", cursive;
  font-weight: 900;
}

.sombra {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: -moz-linear-gradient(
    0deg, 
    rgba(252, 232, 243, 0.7) 0%,
    rgba(173,
      132,
      166, 0.87) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(252,232,243, 0.7) 0%,
    rgba(173,
      132,
      166, 0.87) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(252,232,243, 0.7) 0%,
    rgba(173,132,166, 0.87) 100%
  );
}

.text-content {
  z-index: 2;
}

.hero img {
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 180%;
  height: 80px;
  vertical-align: text-top;
  display: inline-block;
  font-size: 0;
  line-height: 0;
}
.hero img::before {
  content: "";
  width: 100%;
  height: 80px;
  background-color: darkgreen;
}
.contenSocialEscritorio {
  display: none;
}
.textoBotones {
  display: flex;
}
.textoBotones button {
  margin-right: 10px;
}
@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
  .texto h1 {
    margin: 0;
    font-size: 1.3rem;
    margin-bottom: 4%;
  }

  .socialIcons {
    width: initial;
  }

  .hero img {
    width: 100%;
    height: 60px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero img {
    width: 100%;
  }
  .texto h2 {
    font-size: 1.6rem;
    margin-bottom: 4%;
  }
  .texto h1 {
    font-size: 2.2rem;
    margin-bottom: 4%;
  }
  .textoBotones button {
    margin-right: 20px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .hero {
    background-size: 100% 100%;
    height: 109vh;
  }
 .texto h1 {
    font-size: 2.1rem;
    /* margin-bottom: 3%; */
    font-weight: normal;
    margin-bottom: 0;
  }

  .texto p {
    font-size: 1rem;
    margin-bottom: 5%;
    margin-top: 0;
    color:#ffff;
  }

  .hero img {
    width: 100%;
    height: 110px;
  }

  .contenSocialEscritorio {
    position: relative;
    display: flex;
  }

  .socialIconsEscritorio {
    position: fixed;
    height: 50px;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    z-index: 1000;
  }

  .socialE {
    color: #fff;
    background: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    display: flex;
    margin: 5px;
    padding: 5px;
    height: 15px;
    width: 15px;
    text-align: left;
    border-radius: 50px;
    transition: 1s;
    transition-property: transform;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
    z-index: 100;
  }

  .socialE:hover {
    background: rgba(255, 255, 255, 0.774) !important;
    transition: 0.5s ease-in-out;
  }
  .I {
    color: transparent;
    background-image: linear-gradient(45deg, #ffdf9e, #e56969, #8a49a1);
    -webkit-background-clip: text;
  }

  .F {
    color: #139cf7;
  }

  .W {
    color: #00e676;
  }
  .textoBotones button {
    margin-right: 30px;
  }
}

@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .socialIconsEscritorio {
    position: fixed;
  }
  .textoBotones button {
    margin-right: 30px;
  }
  .hero {
    background-size: 100% 100%;
    height: 100vh;
  }

  .texto h1 {
    font-size: 2.1rem;
    /* margin-bottom: 3%; */
    font-weight: normal;
    margin-bottom: 0;
  }

  .texto p {
    font-size: 1rem;
    margin-bottom: 5%;
    margin-top: 0;
    color:#ffff;
  }

  .hero img {
    width: 100%;
    height: 120px;
  }

  .contenSocialEscritorio {
    position: relative;
    display: flex;
  }

  .socialIconsEscritorio {
    position: fixed;
    height: 50px;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 0;
    z-index: 1000;
  }

  .socialE {
    color: #fff;
    background: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    display: flex;
    margin: 5px;
    padding: 10px;
    height: 20px;
    width: 20px;
    text-align: left;
    border-radius: 50px;
    transition: 1s;
    transition-property: transform;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
  }

  .socialE:hover {
    background: rgba(255, 255, 255, 0.774) !important;
    transition: 0.5s ease-in-out;
  }

  .I {
    color: transparent;
    background-image: linear-gradient(45deg, #ffdf9e, #e56969, #8a49a1);
    -webkit-background-clip: text;
    font-size: 28px;
  }

  .F {
    color: #139cf7;
    font-size: 28px;
  }

  .W {
    color: #00e676;
    font-size: 28px;
  }
}
</style>