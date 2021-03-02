<template>
  <div class="container">
    <div class="irrigation" >
      <Kansas />
    </div>
    <div class="hydro-moments">
      hydro moments
    </div>
  </div>
</template>

<script>
import Kansas from "@/components/Projects/Kansas/Kansas";

export default {
  name: "ExploreKansas",
  components: {
    Kansas
  },
  data: () => ({
   
  })
};
</script>

<style scoped>
.container {
  display: grid;
  padding: 1rem 0rem;
  grid-template-columns: 50% 50%;
  grid-template-rows: 400px 400px 400px 400px;
}

.irrigation {
  grid-column-start: 2;
  height: 100%;
  grid-row-start: 1;
  grid-row-end: 1;
  margin: 0rem 0.25rem;
}

.hydro-moments{
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 4;
}

</style>
