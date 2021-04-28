<template>
  <div class="about">
    <Hero :description="description" :image="image" />
    <div class="teamsbox">
      <Funding />
      <Affiliations />
      <Team />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/About/Hero";
import Team from "@/components/About/Team";
import Funding from "@/components/About/Funding";
import Affiliations from "@/components/Affiliations";


export default {
  name: "About",
  components: {
    Hero,
    Team,
    Affiliations,
    Funding
  },
  data: () => ({
    description: "DiscoverStream is an ongoing project being developed as part of a USGS Powell Center for Data Analysis and Synthesis Working Group led by researchers at the University of Waterloo, University of Kansas, and USGS. Questions can be directed towards Andrea Brookfield",
    image: 'Ausable_river.jpg'
  })
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
}

.container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
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
