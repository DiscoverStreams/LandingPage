<template>
<NavBar />
<div class="container">
    <Map />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Map from "@/components/Data/Map"
//import Charts from "@/components/Data/Charts"

export default {
  name: "ProjectData",
  components: {
    NavBar,
    Map,
    //Charts
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

.BackGroundImage{
  display: flex;
  position: relative;
}

</style>