<template>
  <div id="page-background" :style="{ backgroundImage: `url(${image})` }"></div>
</template>

<script>
export default {
  name: 'PageBackground',
  data: () => ({
    image: innerWidth > innerHeight
      ? '/img/portrait-black.png'
      : '/img/landscape-black.png',
    imageGroup: {
      landscape: [
        'img/landscape/1.jpg',
        'img/landscape/2.jpg',
        'img/landscape/3.jpg',
        'img/landscape/4.jpg',
        'img/landscape/5.jpg',
        'img/landscape/6.jpg',
        'img/landscape/7.jpg',
        'img/landscape/8.jpg'
      ],
      portrait: [
        'img/portrait/1.jpg',
        'img/portrait/2.jpg',
        'img/portrait/3.jpg',
        'img/portrait/4.jpg',
        'img/portrait/5.jpg',
        'img/portrait/6.jpg'
      ]
    }
  }),
  methods: {
    setImage (isLandscape) {
      const imagePath = isLandscape
        ? this.randint(this.imageGroup.landscape)
        : this.randint(this.imageGroup.portrait)
      const image = new Image()
      image.onload = () => {
        this.image = imagePath
      }
      image.src = imagePath
    },
    randint: (obj) => obj[Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)]]
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
