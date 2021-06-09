<template>
  <div id="app">
    <div class="mdui-toolbar mdui-color-theme mdui-shadow-4">
      <router-link class="mdui-typo-headline" to="/">{{
        config.siteTitle
      }}</router-link>
      <div class="mdui-toolbar-spacer"></div>
      <!-- <router-link to="/about" class="mdui-btn mdui-btn-icon"
        ><i class="mdui-icon material-icons">info_outline</i></router-link
      > -->
    </div>
    <router-view :config="config" />
  </div>
</template>

<script>
import mdui from 'mdui'
const $ = mdui.$
export default {
  data: () => ({
    config: {
      seasonsAPI: '/seasons.json',
      seasons: null,
      siteTitle: 'AnimePure',
      isLandscape: null
    }
  }),
  computed: {
  },
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
      this.config.isLandscape = isLandscape
    }, 500)
  }
}
</script>
