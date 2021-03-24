<template>
  <div class="projects">
    
    <vueper-slides 
       class="no-shadow "
       fixed-height="300px"
       :visible-slides="2"
       :slide-ratio="1 / 4"
       :dragging-distance="70"
       :gap="3"
       :breakpoints="{ 1000: { '3d': true, visibleSlides: 1} }"
     >
       <vueper-slide class="title" v-for="(project, i) in projects" :key="i" :image="project.image" :link="project.link" :title="project.city">
        </vueper-slide>
     </vueper-slides>
  </div>
</template>



<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default {
  name: "Projects",
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    projects: [
      {
        city: 'Kansas/Colarado', 
        image: require(`@/assets/projectImages/Ark-dry-kansas.jpg`),
        link: 'http://localhost:8080/#/exploreKansas',
      },
      {
        city: 'California', 
        image: require(`@/assets/projectImages/california-desert.webp`),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'

      },
      {
        city: 'Michigan', 
        image: require(`@/assets/projectImages/Ausable-River-Michigan.jpeg`),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'

      },
      
    ],
  })
};
</script>

<style scoped>
.projects{
  width: 80%;
  margin: 0 auto 1rem auto;
}

.container {
  width: 80%;
  margin: 0 auto 1rem auto;
}

.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}

.title {
  font-size: 2rem;
  text-decoration: none;
  font-weight: bold;
  color: #56ffb8;
}

@media only screen and (max-width: 1200px) {
  .title{
    font-size: 1.5rem;
  }
}

</style>
