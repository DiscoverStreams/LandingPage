<template>
  <div class="projects">
    <!-- <div v-for="(project, index) in projects" :key="index">
      <ProjectBlock :city='project.city' :image='project.image' />
    </div> -->
    <div class="container">
      <carousel :settings="settings" :breakpoints="breakpoints" :wrap-around="true">
        <slide v-for="(project, i) in projects" :key="i">
          <ProjectBlock :city='project.city' :image='project.image' />  
          
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
    
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import ProjectBlock from './ProjectBlock';


export default {
  name: "Projects",
  components: {
    ProjectBlock,
    Carousel,
    Slide,
    Navigation,
    Pagination
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
      
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center"
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      1200: {
        itemsToShow: 2,
        snapAlign: "center"
      },
      // 1024 and up
      1700: {
        itemsToShow: 3,
        snapAlign: "center"
      }
    }
  })
};
</script>

<style scoped>
.projects{
  display: unset;
  /* flex-flow: row wrap; */
  width: 100%;
  /* justify-content: space-around; */
  margin: 0 auto 1rem auto;
}

.container {
  width: 80%;
  margin: 0 auto 1rem auto;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #642afb;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  /* padding: 10px; */
}

.carousel__prev,
.carousel__next {
  /* box-sizing: content-box;
  border: 5px solid white; */
}

</style>
