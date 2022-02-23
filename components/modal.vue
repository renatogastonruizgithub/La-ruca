<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal-content">
        <slot name="contenido"> </slot>
        <div class="botones">
          <span @click.prevent="handleClose" class="close">&times;</span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  methods: {
    handleClose() {
      this.$emit("closes");
      document.getElementsByTagName("html")[0].classList.remove("scrollHtml");
    },
  },
};
</script>
<style>
.modal {
  display: flex;
  position: fixed;
  z-index: 6000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh !important;
  overflow-y: hidden !important;
  background-color: rgba(0, 0, 0, 0.363);
  backdrop-filter: blur(3px);
}

.som {
  display: flex;
  position: fixed;
  z-index: 5999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh !important;
}
.modal-content {
  position: relative;
  width: 91%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-top: auto;
  border-radius: 12px;
  display: flex;
  height: 78%;
}

.contenido {
  position: absolute;
  z-index: 11;
  width: 100%;
  height: 100%;
}
.botones {
  position: fixed;
  z-index: 6003;
  background: rgba(165, 42, 42, 0);
  display: flex;
  justify-content: space-around;
  align-items: center;
  left: 0;
  right: 0;
  top: 10px;
  margin: auto;
  width: 80%;
  height: 50px;
}

.close {
  color: rgba(255, 255, 255, 0.507);
  font-size: 39px;
  font-weight: bold;
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--azul);
  border-radius: 50%;
}

.close:hover,
.close:focus {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  background-color: #ffffff77;
  transition: ease-in-out 0.4s;
}

@media only screen and (min-width: 320px) and (max-width: 546px) and (orientation: landscape) {
  .modal-content {
    height: 60%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 2560px) {
  .modal-content {
    height: auto;
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1140px) {
  .modal-content {
    height: auto;
  }
}
@media only screen and (min-width: 1140px) and (max-width: 2560px) {
  .modal-content {
    height: auto;
  }
}
</style>