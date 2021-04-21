<template>
  <div class="home">
    <h2>Exploring Streamflow Depletion</h2>
    <Projects />
    <Description :description="description" />
    <Affiliations />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from "@/components/Description";
import Affiliations from "@/components/Affiliations";
import Projects from "@/components/Projects/Projects";

export default {
  name: "Home",
  components: {
    Description,
    Affiliations,
    Projects
  },
  data: () => ({
    description: [
      "DiscoverStream provides visualizations to enable visualization of streamflow depletion – an important consideration of water management – making it accessible to water managers, landowners, and farmers. ",
      "Developed through a partnership funded by USGS Powell Center, DiscoverStream provides estimates and interpretation of the effects of groundwater pumping on surface water resources, also known as streamflow depletion, through trend analysis of easily accessible data."
    ]  
  })
};
</script>

<style scoped>

h2{
  margin-bottom: 2rem;
}

.home{
  margin: auto;
  justify-content: center;
  margin-top: 1rem;
  width: 90%;
}

@media only screen and (min-width: 1440px) {
  .home {
    width: 90%;
  }
}

</style>