<template>
  <transition name="fade">
    <div class="tolp">
      <div v-if="share_openf" class="tooltiptextf">
        <div class="fa">
          <iframe
            @click="cerrarf()"
            src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.facebook.com%2FIrradiandoelartedeeducar&layout=button_count&size=small&width=111&height=20&appId"
            width="111"
            height="20"
            style="border: none; overflow: hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <a
          @click="cerrarf()"
          href="https://www.facebook.com/Irradiandoelartedeeducar"
          >Visitanos</a
        >
      </div>
      <a>
        <i
          @click="compartirf()"
          class="fab fa-facebook-f"
          aria-hidden="true"
        ></i>
      </a>
    </div>
  </transition>
</template>
<style>
.tolp {
  position: relative;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 40px;
  width: 40px;
  margin: 0 10px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.tolp a {
  color: #139cf7;
}
.tooltiptextf a {
  font-size: 16px;
  color: #fbfbfb;
  font-weight: 900;
  padding-top: 3px;
}
.fa {
  width: 111px;
  overflow: hidden;
  zoom: 1;
  display: inline;
  display: inline-block;
  vertical-align: top;
}
.tolp .tooltiptextf {
  width: 130px;
  background-color: var(--titulo);
  color: rgb(189, 189, 189);
  text-align: center;
  border-radius: 6px;
  padding: 7px 0;
  position: absolute;
  z-index: 1;
  bottom: 50px;
  left: -4px;
  margin-left: -4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.tolp .tooltiptextf::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -45px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--titulo) transparent transparent transparent;
}
</style>

<script>
export default {
  data() {
    return {
      timer: null,
      share_openf: false,
    };
  },
  name: "facebook",
  mounted: function () {},

  methods: {
    compartirf() {
      this.share_openf = !this.share_openf;
      this.timer = setTimeout(() => {
        this.share_openf = false;
      }, 4000);
    },
    cerrarf() {
      this.share_openf = !this.share_openf;
    },
  },
};
</script>