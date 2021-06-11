<template>
  <div class="card-container">
    <div class="season-card">
      <img :src="season.cover" class="cover mdui-shadow-3" />
      <div class="season-info">
        <div class="season-title">{{ season.name }}</div>
        <strong>地区：</strong> {{ season.area }} <br />
        <strong>年代：</strong> {{ season.age }} <br />
        <strong>标签：</strong>
        <span v-for="tag of season.tags" :key="tag">{{ tag }} </span> <br />
      </div>
    </div>
    <div class="ep-links">
      <router-link
        v-for="(episode, num) in season.episodes"
        :key="num"
        :to="'?epNum=' + num"
        class="mdui-btn mdui-btn-raised mdui-ripple"
        :class="{ 'mdui-color-theme-accent': num === focusedEpisode, 'mdui-color-white': !isLandscape }"
      >
        {{ episode.title }}</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'SeasonCard',
  props: ['season', 'focusedEpisode', 'isLandscape']
}
</script>
<style lang="scss" scoped>
img.cover {
  max-height: 200px;
  width: auto;
}
.season-card {
  padding: 10px;
  display: flex;
}
.season-info {
  padding: 10px;
  .season-title {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
div.ep-links {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  .mdui-btn {
    flex-grow: 1;
    margin-right: 5px;
    margin-bottom: 5px;
  }
}
</style>
