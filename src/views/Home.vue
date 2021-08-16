<template>
  <div class="home">
    <div class="mdui-container">
      <div class="seasons-loader" v-if="!config.seasons">
        <div class="mdui-spinner"></div>
      </div>
      <div
        class="mdui-textfield mdui-textfield-floating-label"
        v-if="config.seasons"
      >
        <label class="mdui-textfield-label">搜索番剧</label>
        <input class="mdui-textfield-input" v-model="searchText" />
      </div>
      <season-search
        v-if="searchText"
        :searchText="searchText"
        :seasons="config.seasons"
      ></season-search>
      <transition name="fade">
        <div class="about" v-if="showAbout">
          <div class="mdui-typo">
            <h2>关于</h2>
            <p>
              这是一个简易的可以播放视频的单页面应用，基于 VueJS 开发。<br />
              所有视频资源均来源于互联网，我们不参与所有资源的收集、储存、上传等。此应用也只有前端，没有后端服务器。仅供技术学习交流使用。<br />
              若涉及版权问题，请联系我删除相关资源。<a
                href="mailto:NitroFire.q@gmail.com"
                >Email</a
              >
            </p>
            <strong>开源项目</strong><br>
            <a href="https://github.com/NitroRCr/bangumi-front" target="_blank">NitroRCr/bangumi-front</a>
          </div>
        </div>
      </transition>
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonSearch from '../components/SeasonSearch.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
  name: 'Home',
  props: ['config', 'showAbout'],
  components: {
    SeasonSearch,
    PageFooter
  },
  data () {
    return {
      searchText: null
    }
  }
}
</script>
<style lang="scss">
.seasons-loader {
  margin: 10px auto;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
