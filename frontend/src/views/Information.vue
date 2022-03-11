<template>
<NavBar />
  <div class="about">
    <h class="hello" hello> Hello </h>
      <Hero :description="description" :image="image" />
        <Funding />
        <Affiliations />
        <Team />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/AboutComponents/Hero.vue";
import Team from "@/components/AboutComponents/Team.vue";
import Funding from "@/components/AboutComponents/Funding.vue";
import Affiliations from "@/components/Affiliations.vue";


export default {
  name: "Information",
  components: {
    NavBar,
    Hero,
    Team,
    Affiliations,
    Funding
  },
  data: () => ({
    description: "DiscoverStream is an ongoing project being developed as part of a USGS Powell Center for Data Analysis and Synthesis Working Group led by researchers at the University of Waterloo, University of Kansas, and USGS. Questions can be directed towards Andrea Brookfield",
    image: "Ausable_river.jpg"
  })
};
</script>

<style scoped>
.about {
height: 1000px;
}

.teamsbox {
  width: 90%;
  margin: auto;
}

@media only screen and (min-width: 1440px) {
  .teamsbox {
    width: 75%;
  }
}
</style>
