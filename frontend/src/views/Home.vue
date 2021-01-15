<template>
  <div class="home">
    <Description :description="description" />
    <Affiliations />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from "@/components/Description";
import Affiliations from "@/components/Home/Affiliations";

export default {
  name: "Home",
  components: {
    Description,
     Affiliations
  },
  data: () => ({
    description: "Groundwater pumping can lead to reductions in streamflow (‘streamflow depletion’). Streamflow depletion must be accurately quantified for effective conjunctive management of groundwater and surface water resources, and is relevant for water management questions related to the attribution of streamflow change, estimating impacts of groundwater pumping, and mitigation of streamflow depletion issues."
  })
};
</script>

<style scoped>
.home{
  margin: auto;
  justify-content: center;
}
</style>