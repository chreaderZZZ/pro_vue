<template>
  <div class="MapBox">
    <div ref="basicMapbox" :style="mapSize"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  props: {
    mapWidth: {
      type: String,
    },
    mapHeight: {
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    // 初始化
    init() {
      mapboxgl.accessToken = "pk.eyJ1Ijoia3Jva3JvYiIsImEiOiJja2YzcmcyNDkwNXVpMnRtZGwxb2MzNWtvIn0.69leM_6Roh26Ju7Lqb2pwQ";
      const nav = new mapboxgl.NavigationControl();
      const map = new mapboxgl.Map({
        container: this.$refs.basicMapbox,
        style: "mapbox://styles/mapbox/streets-v9",
      });
      map.addControl(nav, 'top-left');
    },
  },
  computed: {
    mapSize() {
      let styleObj = {
        width: this.mapWidth,
        height: '95%',
      };
      return styleObj;
    },
  },
};
</script>
<style>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css");
@import url("https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js");

.MapBox{
    /* 将其完全撑满 */
    height: 100vh;
    padding-left: 15px;
}
</style>
