<template>
  <div class="container">
    <Projects />
  </div>
</template>

<script>
import Projects from "@/components/Projects/Projects";

export default {
  name: "Contact",
  components: {
    Projects
  },
  data: () => ({
   
  })
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

</style>
