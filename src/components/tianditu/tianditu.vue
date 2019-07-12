<template>
  <div>
    <div id="mapDiv" class="mapDiv" ref="mapDiv"></div>
  </div>
</template>
<script>
import TMap from "@/components/tianditu/init";
export default {
  data() {
    return {
      T: "",
      map: ""
    };
  },
  mounted() {
    setTimeout(this.getPosition(), 1000);
  },
  watch: {
    $route: "getPosition"
  },
  methods: {
    getPosition() {
      TMap.init()
        .then(T => {
          this.T = T;
          let me = this;
          this.map = new T.Map(this.$refs.mapDiv);
          this.map.centerAndZoom(new T.LngLat(116.40969, 39.89945), 12);
          let lc = new T.LocalCity();
          lc.location(e => {
            me.map.panTo(e.lnglat, 18);
            alert(e.cityName);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
 
<style scoped>
.mapDiv {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
