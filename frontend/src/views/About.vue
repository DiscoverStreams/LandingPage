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
    description: "The Powell Center serves as a catalyst for innovative thinking in Earth system science research by providing the time, creative space, & computational, data manipulation & data management resources to promote synthesis of existing information leading to emergent Earth System science knowledge.",
    image: 'Ausable_river.jpg'
  })
};
</script>

<style scoped>
.about{
  display: flex;
  flex-direction: column;
}

.container{
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.teamsbox{
  width: 90%;
  margin: auto;
}
</style>