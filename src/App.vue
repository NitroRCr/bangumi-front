<template>
  <div id="app">
    <page-background ref="pageBackground"></page-background>
    <div class="mdui-toolbar mdui-color-theme mdui-shadow-4">
      <router-link class="mdui-typo-headline" to="/">{{
        config.siteTitle
      }}</router-link>
      <div class="mdui-toolbar-spacer"></div>
      <a
        href="javascript:;"
        @click="showAbout = !showAbout"
        class="mdui-btn mdui-btn-icon"
        ><i class="mdui-icon material-icons">{{
          showAbout ? "info" : "info_outline"
        }}</i></a
      >
    </div>
    <router-view :config="config" :showAbout="showAbout" />
  </div>
</template>

<script>
import PageBackground from './components/PageBackground.vue'
import mdui from 'mdui'
const $ = mdui.$
export default {
  data: () => ({
    config: {
      seasonsAPI: '/seasons.json',
      seasons: null,
      siteTitle: 'AnimePure',
      isLandscape: innerHeight < innerWidth,
      isMobile: !!navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    },
    showAbout: false
  }),
  components: {
    PageBackground
  },
  computed: {},
  beforeMount () {
    $.ajax({
      url: this.config.seasonsAPI,
      dataType: 'json',
      timeout: 10000,
      success: (json) => {
        this.config.seasons = json
      },
      error: () => {
        mdui.snackbar('番剧列表加载失败')
      }
    })
    setInterval(() => {
      const isLandscape = innerHeight < innerWidth
      if (isLandscape !== this.config.isLandscape) {
        this.$refs.pageBackground.setImage()
      }
      this.config.isLandscape = isLandscape
    }, 500)
  }
}
</script>
<style lang="scss">
#app {
  background-color: rgba(255, 255, 255, 0.85);
  min-height: 100vh;
  position: relative;
}
</style>
