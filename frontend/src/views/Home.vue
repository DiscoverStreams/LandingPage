<template>
  <div class="home">
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
    description: "DiscoverStream uses USGS stream gage and groundwater level data, XXXX climate data, and irrigation data to enable users to interpret the relationship between surface water levels and groundwater pumping. Streamflow depletion is the reduction in streamflow due to groundwater pumping (Barlow et al 2018). Streamflow depletion is difficult to identify and quantify because it is superimposed on the natural variability of hydrological systems and human demands, and because streamflow depletion often evolves slowly and can be entirely invisible for many years to decades (Alley and Leake, 2004; Leake et al., 2010). The goal of this site is to help users identify streamflow depletion."
  })
};
</script>

<style scoped>
.home{
  margin: auto;
  justify-content: center;
  margin-top: 1rem;
}
</style>