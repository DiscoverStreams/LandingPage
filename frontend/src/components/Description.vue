<template>
  <div class="box">
    <h4 v-for="(paragraph, i) in description" :key="i">{{ paragraph }}</h4>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    description: {
      type: Array,
      required: false,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  /* border: #42b983 1px solid; */
  margin: 2rem 2rem 1rem 2rem;
  padding: 0rem 0rem;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
