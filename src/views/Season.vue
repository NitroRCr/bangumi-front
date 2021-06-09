<template>
  <div id="season">
    <div :class="{'mdui-container': config.isLandscape}">
      <h3
        id="play-name"
        v-if="focused"
        :style="config.isLandscape ? {} : { margin: '15px 10px' }"
      >
        {{ focused.playName }}
      </h3>
      <div
        :class="{
          landscape: config.isLandscape,
          'mdui-shadow-4': config.isLandscape,
        }"
      >
        <div id="main-player"></div>
        <season-card
          v-if="focused"
          :focusedEpisode="focused.episode.num"
          :season="focused.season"
        ></season-card>
      </div>
      <page-footer></page-footer>
    </div>
  </div>
</template>
<script>
import PageFooter from '../components/PageFooter.vue'
import SeasonCard from '../components/SeasonCard.vue'
import Player from 'xgplayer/dist/simple_player'
import volume from 'xgplayer/dist/controls/volume'
import playbackRate from 'xgplayer/dist/controls/playbackRate'
import mdui from 'mdui'
const $ = mdui.$
export default {
  name: 'Season',
  props: ['config'],
  components: {
    SeasonCard,
    PageFooter
  },
  data: () => ({
    player: null,
    playerConfig: {
      id: 'main-player',
      url: null,
      autoplay: true,
      controlPlugins: [
        volume,
        playbackRate
      ],
      playbackRate: [0.5, 0.75, 1, 1.33, 2, 4],
      fluid: true
    },
    focused: null
  }),
  mounted () {
    this.loadSeason()
  },
  watch: {
    $route: 'loadSeason'
  },
  computed: {

  },
  methods: {
    loadSeason () {
      const params = this.$route.params
      if (this.focused) {
        const sameEp = this.focused.episode.num === params.epNum
        const sameSs = this.focused.season.id === params.seasonId
        if (sameEp && sameSs) return
        if (sameSs) {
          const season = this.focused.season
          const episode = season.episodes[params.epNum]
          episode.num = params.epNum
          const playName = season.name + ': ' + episode.title
          this.focused = {
            season,
            episode,
            playName
          }
          this.changePlay()
          return
        }
      }
      $.ajax({
        url: `/seasons/${params.seasonId}.json`,
        dataType: 'json',
        timeout: 10000,
        success: (season) => {
          const episode = season.episodes[params.epNum]
          episode.num = params.epNum
          const playName = season.name + ': ' + episode.title
          this.focused = {
            season,
            episode,
            playName
          }
          this.changePlay()
        },
        error: () => {
          mdui.snackbar('番剧加载失败')
        }
      })
    },
    changePlay () {
      const url = this.getUrl(this.focused.episode.videos)
      if (!this.player) {
        this.playerConfig.url = url
        this.player = new Player(this.playerConfig)
      } else {
        this.player.src = url
      }
    },
    getUrl (videos) {
      for (const url of videos) {
        if (url.indexOf('.mp4') !== -1) {
          return url
        }
        return null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
