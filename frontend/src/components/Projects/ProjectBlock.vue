<template>
  <div class="project">
    <!-- image covers the block with a text overlay for the city-->
    <!-- <img :src="image" alt="City"> -->
    <!-- text overlay on hover to show a description -->
    <p>{{city}}</p>
  </div>
</template>

<script>
export default {
  name: "ProjectBlock",
  props: {
    image: String,
    city: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project{
  width: 30rem;
  height: 15rem;
  border: solid 1px green;
  margin: 0.25rem;
}
</style>
