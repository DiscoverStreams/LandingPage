<template>
  <div class="Container">
    <img class="NavBackground" src="@/assets/BackgroundImages/ExploreScienceBackground.jpg">
    <NavBar />
    <ScienceExplanation />
    <DepletionMethods />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ScienceExplanation from "@/components/ExploreScienceComponents/ScienceExplanation.vue";
import DepletionMethods from "@/components/ExploreScienceComponents/StreamflowDepletionMethods.vue";

export default {
  name: "ExploreScience",
  components: {
    NavBar,
    ScienceExplanation,
    DepletionMethods

  },
};
</script>

<style scoped>

.Container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.NavBackground {
  display: flex;
  position: absolute;
  width:100%;
  height:480vh;
  filter: brightness(60%);
}

</style>
