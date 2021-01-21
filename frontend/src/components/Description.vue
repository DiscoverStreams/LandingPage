<template>
  <div class="box">
    <h4>{{ description }}</h4>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: {
    description: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  border: #42b983 1px solid;
  margin: 0px 20px 50px 20px;
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
