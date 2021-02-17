<template>
  <div class="projects">
    <!-- <div v-for="(project, index) in projects" :key="index">
      <ProjectBlock :city='project.city' :image='project.image' />
    </div> -->
    <!-- <div class="container">
      <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
        <slide v-for="(project, i) in projects" :key="i">
          <ProjectBlock :city='project.city' :image='project.image' />  
          
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div> -->
    <!-- class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :dragging-distance="70" 
      3d fixed-height="300px" arrows-outside bullets-outside-->
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
        <!-- <template v-slot:content> -->
        <!-- <ProjectBlock :city='project.city' :image='project.image' />   -->
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// import ProjectBlock from './ProjectBlock';


export default {
  name: "Projects",
  components: {
    // ProjectBlock,
    VueperSlides,
    VueperSlide
    // Carousel,
    // Slide,
    // Navigation,
    // Pagination
  },
  data: () => ({
    projects: [
      {
        city: 'Kansas/Colarado', 
        // image: 'Ark-dry-kansas.jpg'
        image: require(`@/assets/projectImages/Ark-dry-kansas.jpg`),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'
      },
      {
        city: 'California', 
        // image: 'california-desert.webp',
        image: require(`@/assets/projectImages/california-desert.webp`),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'

      },
      {
        city: 'Michigan', 
        // image: 'Ausable-River-Michigan.jpeg',
        image: require(`@/assets/projectImages/Ausable-River-Michigan.jpeg`),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'

      },
      
    ],
  })
};
</script>

<style scoped>
.projects{
  /* display: inline !important; */
  /* flex-flow: row wrap; */
  width: 80%;
  /* justify-content: space-around; */
  margin: 0 auto 1rem auto;
}

.container {
  width: 80%;
  margin: 0 auto 1rem auto;
  /* display: inline !important; */
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
