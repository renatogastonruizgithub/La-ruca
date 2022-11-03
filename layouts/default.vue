<template>
  <div>
    <loading />
    <navbar />
    <div class="contenSocialEscritorio">
      <div v-on:scroll="btnScroll" class="socialIconsEscritorio">
        <div v-for="(item,i) in dire" :key="i" class="socialE">
          <a target="_blank" href="https://www.instagram.com/larucapewen/">
            <i class="fab fa-instagram I" aria-hidden="true"></i>
          </a>
        </div>
        <!-- <div @click="compartir()" id="socialFace" class="socialE">
          <span v-if="share_open" class="tooltiptext">
            <iframe
              src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2FIrradiandoelartedeeducar&layout=button_count&size=small&width=111&height=20&appId"
              width="111"
              height="20"
              style="border: none; overflow: hidden"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <a
              target="_blank"
              href="https://www.facebook.com/Irradiandoelartedeeducar"
              >visitanos</a
            >
          </span>
          <a><i class="fab fa-facebook-f F" aria-hidden="true"></i></a> 
        </div>-->
        <div @click="enviarb()" class="socialE">
          <i class="fab fa-whatsapp W" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <Nuxt />
    <footers />
  </div>
</template>
<script>
import navbar from "../components/navbar.vue";
import footers from "../components/footers.vue";
import loading from "../components/loading.vue";
import data from "../content/direcciones.json";
export default {
  components: {
    navbar,
    footers,
    loading,
  },
  data() {
    return {
      timerf: null,
      share_open: false,
      dire:[]
    };
  },
  mounted() {
    let array = [{ ...data }];
    this.dire = array;
  },
  methods: {
    btnScroll: function (event) {
      var boton = document.getElementsByClassName("socialE");

      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        boton[0].style.backgroundColor = "rgba(3, 58, 98, 0.4)";
        boton[1].style.backgroundColor = "rgba(3, 58, 98, 0.4)";
        boton[2].style.backgroundColor = "rgba(3, 58, 98, 0.4)";
      } else {
        boton[0].style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        boton[1].style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        boton[2].style.backgroundColor = "rgba(255, 255, 255, 0.4)";
      }
    },
    enviarb() {
      window.open(
        `https://api.whatsapp.com/send?text=https://www.laruca.com.ar`,
        "_blank"
      );
    },
   /*  compartir() {
      this.share_open = !this.share_open;
      this.timerf = setTimeout(() => {
        this.share_open = false;
      }, 3000);
    }, */
  },

  mounted: function () {
    window.addEventListener("scroll", this.btnScroll);
  },
  destroyed: function () {
    if (this.btnScroll) {
      window.removeEventListener("scroll", this.btnScroll);
    }
  },
};
</script>
<style>
#socialFace {
  position: relative;
}
#socialFace .tooltiptext {
  width: 120px;
  background-color: var(--titulo);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: -5px;
  right: 110%;
}

#socialFace .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent var(--titulo);
}
</style>
