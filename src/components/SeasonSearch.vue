<template>
  <div id="season-search" class="mdui-row">
    <div class="links" v-for="season of matchedSeasons" :key="season.id">
      <router-link
        class="season-link mdui-col-xs-4 mdui-col-sm-3 mdui-col-md-2"
        :to="`/bangumi/${season.id}`"
      >
        <div class="cover mdui-shadow-2">
          <img class="cover" :src="season.cover" />
        </div>
        <span class="season-title">{{ season.name }}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SeasonSearch',
  props: ['searchText', 'seasons'],
  computed: {
    matchedSeasons () {
      const list = []
      for (const season of this.seasons) {
        if (season.name.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) {
          list.push(season)
        }
      }
      return list
    }
  }
}
</script>
<style lang="scss">
#season-search {
  margin-top: 10px;
  .season-link {
    text-decoration: none;
    div.cover {
      width: 100%;
      height: 0;
      padding-bottom: 138%;
      overflow: hidden;
      background-color: #fff;
      img {
        width: 100%;
        height: auto;
      }
    }
    .season-title {
      display: block;
      color: rgba(0, 0, 0, 0.87);
      width: 100%;
      height: 2.3em;
      overflow: hidden;
      margin-top: 5px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
