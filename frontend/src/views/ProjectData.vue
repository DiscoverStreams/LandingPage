<template>
<NavBar />
<div class="container">
    <Map />
   <!-- <Charts /> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Map from "@/components/Data/Map.vue"
//import Charts from "@/components/Data/Charts"

export default {
  name: "ProjectData",
  components: {
    NavBar,
    Map
  },
};
</script>

<style scoped>

.BackGroundImage{
  display: flex;
  position: relative;
}

</style>