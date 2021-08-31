<template>
  <div id="page-background" :style="{ backgroundImage: `url(${image})` }"></div>
</template>

<script>
export default {
  name: 'PageBackground',
  data () {
    return {
      image: innerWidth > innerHeight
        ? '/img/portrait-black.png'
        : '/img/landscape-black.png',
      webpSupported: (function () {
        try {
          return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0
        } catch (err) {
          return false
        }
      })()
    }
  },
  methods: {
    setImage () {
      const image = new Image()
      const url = this.getImage()
      image.onload = () => {
        this.image = url
      }
      image.src = url
    },
    getImage () {
      const direction = innerHeight > innerWidth ? 'portrait' : 'landscape'
      const webp = this.webpSupported ? 'true' : 'false'
      return `https://api.krytro.com:1443/setu/?direction=${direction}&webp=${webp}`
    }
  },
  mounted () {
    this.setImage();
    (function () {
      var img = new Image()
      function getResult (event) {
        this.webpSupported = event && event.type === 'load' ? img.width === 1 : false
      }
      img.onerror = getResult
      img.onload = getResult
      img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=' // 一像素图片
    })()
  }
}
</script>

<style lang="scss" scoped>
#page-background {
  transition: background 1s ease;
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  filter: brightness(75%);
}
</style>
