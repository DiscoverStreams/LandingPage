<template>
<div class="VisualizationToolContainer">
  <NavBar />
  <div class="VisualizationTool">
    <div class="Map"> <Map /> </div>
  </div> </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Map from "@/components/VisualizationDataComponents/Map.vue"
import Charts from "@/components/VisualizationDataComponents/Charts.vue"

export default {
  name: "ProjectData",
  components: {
    NavBar,
    Map,
    Charts
  },
 methods: {
    handler() {
      var args = arguments;
      for (var arg of args) {
        if (arg instanceof Function) {
          arg();
        }
      }
    }
  }
};
</script>

<style scoped>

.VisualizationToolContainer{
  overflow: hidden;
}

.VisualizationTool{
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: Black;
}

.Map {
  position: absolute;
  bottom: 0px;
  width: 50%;
  height: 70vh;
}

</style>