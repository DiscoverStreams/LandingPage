<template>
  <div class="projects">
    <div v-for="(project, index) in projects" :key="index">
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
      <!-- <Kansas />

      <Kansas /> -->
    <!-- </div> -->
    

  </div>
  
</template>



<script>

// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// import Kansas from './Kansas/Kansas';

// import ProjectBlock from './ProjectBlock';

// <vueper-slides 
//       class="no-shadow "
//       fixed-height="300px"
//       :visible-slides="2"
//       :slide-ratio="1 / 4"
//       :dragging-distance="70"
//       :gap="3"
//       :breakpoints="{ 1000: { '3d': true, visibleSlides: 1} }"
//     >
//       <vueper-slide class="title" v-for="(project, i) in projects" :key="i" :image="project.image" :link="project.link" :title="project.city">
//         <!-- <template v-slot:content> -->
//         <!-- <ProjectBlock :city='project.city' :image='project.image' />   -->
//       </vueper-slide>
//     </vueper-slides>

import ProjectBlock from './ProjectBlock';
// import Kansas from './Kansas/Kansas';

export default {
  name: "Projects",
  components: {

    // ProjectBlock,
    VueperSlides,
    VueperSlide,
    // Kansas
    // Carousel,
    // Slide,
    // Navigation,
    // Pagination

    ProjectBlock,
    // Kansas

  },
  data: () => ({
    projects: [
      {
        city: 'Kansas/Colarado', 
        image: 'Ark-dry-kansas.jpg'
      },
      {
        city: 'California', 
        image: 'california-desert.webp'
      },
      {
        city: 'Michigan', 
        image: 'Ausable-River-Michigan.jpeg'
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
