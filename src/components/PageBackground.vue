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
        : '/img/landscape-black.png'
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
      const webpSupported = (function () {
        try {
          return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0
        } catch (err) {
          return false
        }
      })()
      const webp = webpSupported ? 'true' : 'false'
      return `https://api.krytro.com:1443/setu/?direction=${direction}&webp=${webp}`
    }
  },
  mounted () {
    this.setImage()
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
