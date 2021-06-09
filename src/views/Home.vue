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
  props: ['config'],
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
</style>
