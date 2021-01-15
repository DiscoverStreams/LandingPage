<template>
  <div>
    <ProjectBlock  />
  </div>
</template>

<script>
import ProjectBlock from './ProjectBlock';

export default {
  name: "Projects",
  components: {
    ProjectBlock
  },
  data: () => ({
    cities: ['Kansas/Colarado', 'California', 'Michigan']  
    images: ['', '', '']
  })
};
</script>

<style scoped>
h3 {
  margin: 2.5rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.625rem;
}
a {
  color: #42b983;
}
</style>
