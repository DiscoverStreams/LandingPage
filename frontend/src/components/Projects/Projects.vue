<template>
  <div class="projects">
    <div v-for="(project, index) in projects" :key="index">
      <ProjectBlock :city='project.city' :image='project.image' />
    </div>
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
    projects: [
      {
        city: 'Kansas/Colarado', 
        image: ''
      },
      {
        city: 'California', 
        image: ''
      },
      {
        city: 'Michigan', 
        image: ''
      },
      
    ]
  })
};
</script>

<style scoped>
.projects{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto 1rem auto;
}

</style>
