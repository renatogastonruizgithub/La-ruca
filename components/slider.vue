<template>
  <transition name="fade">
    <div>
      <div class="conten-slider">
        <div v-for="i in [currentIndex]" :key="i" class="texto">
          <h1>{{ currentImg.h1 }}</h1>
          <p>{{ currentImg.h2 }}</p>
          <div class="textoBotones">
            <nuxt-link
              class="btnBanner"
              :to="{ path: currentImg.url, hash: currentImg.hash }"
            >
              {{ currentImg.linkNombre }}</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="cont_prevs">
        <span class="prevs" @click="prev"><i class="fas fa-chevron-left"></i></span>
        <span class="nexts" @click="next"> <i class="fas fa-chevron-right"></i></span>
      </div>
    </div>
  </transition>
</template>
<script>
import btnPry from "./btnPry.vue";
export default {
  components: { btnPry },
  name: "Slider",
  data() {
    return {
      txtBtn: "Descubre mas",
      claseBtn: "btnBanner",
      txtBtn2: "Inscripciones",
      claseBtn2: "btnSecundario",
      images: [
        {
          h1: "Jardin impulso waldorf",
          h2:
            "Experiencias artísticas, musicales, teatrales, circenses, plásticas y yoga ",
          url: "/",
          hash: "#talleres",
          linkNombre: "Ver actividades",
        },
        {
          h1: "Recorriendo una pedagogia viva",
          h2:
            "Escuela lúdica multidisciplinaria de crianza respetuosa pensado para niñ@s desde los 3 años de edad.",
          url: "/",
          hash: "#nos",
          linkNombre: "Descubrinos",
        },
      ],
      timer: null,
      currentIndex: 0,
    };
  },

   mounted: function () {
    this.startSlide();
  }, 

  methods: {
    ir() {
      this.$router.push({
        name: "contacto",
      });
    },
     startSlide: function () {
      this.timer = setInterval(this.next, 9000);
    }, 

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
<style>
.conten-slider {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  position: relative;
  height: 50vh;
}
.conten-slider a {
  background-image: none;
}
.slider {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
}
.cont_prevs {
  width: 100%;
  height: 30px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
  bottom: 50%;
  left: 0;
}
.prevs,
.nexts {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 20px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 50%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-decoration: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nexts {
  right: 0;
  margin-right: 10px;
}

.prevs {
  left: 0;
  margin-left: 10px;
}

@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .conten-slider {
    width: 95%;
  }
  .nexts {
    right: 0;
    margin-right: 6%;
  }

  .prevs {
    left: 0;
    margin-left: 6%;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .conten-slider {
    width: 95%;
  }
  .nexts {
    right: 0;
    margin-right: 5rem;
    width: 45px;
    height: 45px;
  }

  .prevs {
    left: 0;
    margin-left: 5rem;
    width: 25px;
    height: 25px;
    
  }
}
</style>