import Vue from 'vue'
import ImageLazy from 'cube-vue-image-lazy'

Vue.use(ImageLazy)

// Or you can override defaults
Vue.use(ImageLazy, {
  name: 'ImageLazyLoad',
  delay: 0,
  baseClass: 'image-lazy-load',
  deferredClass: 'image-lazy-load-deferred',
  loadingClass: 'image-lazy-load-loading',
  loadedClass: 'image-lazy-load-loaded'
})