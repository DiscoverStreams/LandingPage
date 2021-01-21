<template>
  <div >    
    <Hero :description="description" :image="image" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/About/Hero";

export default {
  name: "About",
  components: {
    Hero
  },
  data: () => ({
    description: "The Powell Center serves as a catalyst for innovative thinking in Earth system science research by providing the time, creative space, & computational, data manipulation & data management resources to promote synthesis of existing information leading to emergent Earth System science knowledge.",
    image: 'Ausable_river.jpg'
  })
};
</script>

<style scoped>

</style>