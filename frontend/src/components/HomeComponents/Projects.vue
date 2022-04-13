<template>
<div class="Projects">
  <vueper-slides
  class="Projects vueperslides1 no-shadow"
    ref="vueperslides1"
    @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" 
    :touchable="false"
    :autoplay="true"
    :bullets="false"
    :arrows="false"
    :visible-slides="1"
    :slide-ratio="1 / 4"
    :dragging-distance="300"
    :gap="0"
    fixedHeight="true"
    :breakpoints="{ 1000: { '3d': true, visibleSlides: 1} }">
    <vueper-slide 
    v-for="(project, i) in projects" 
      :key="i" 
      :image="project.image">
    </vueper-slide>
  </vueper-slides>
  <br/>
  
  <vueper-slides
  class="Projects vueperslides2"
    ref="vueperslides2"
    @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
    :visible-slides="projects.length"
    fixed-height="true"
    :bullets="false"
    :touchable="false"
    :gap="1"
    :arrows="false">
    <vueper-slide 
      class="sidedes2" v-for="(project, i) in projects" 
      :key="i" 
      :image="project.image"
      @click="$refs.vueperslides2 && $refs.vueperslides2.goToSlide(i)">
    </vueper-slide>
  </vueper-slides>
  <div class="Projects2"> <div class=ProjectNameContainer>
   <div  v-for="project in projects" :key="project"> <p class="ProjectNames"> {{project.city}} </p> </div>
    </div> </div>
</div>
</template>



<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import Kansas from '@/assets/ProjectImages/Ark-dry-kansas.jpg'
import California from '@/assets/ProjectImages/california-desert.jpg'
import Michigan from '@/assets/ProjectImages/Ausable-River-Michigan.jpg'
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
        image: Kansas,
        link: 'https://interactiveviz.ku.edu/DiscoverWater/',
      },
      {
        city: 'California', 
        image: California,
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'
      },
      {
        city: 'Michigan', 
        image: Michigan,
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'
      },
      
    ],
  })
};
</script>

<style scoped>

.Projects{
  width: 100%;
  height: 100vh;
}

.vueperslides1{
  width: 100%;
  height: 100vh;
  margin: auto;
}

.vueperslides1 .vueperslide{
  right: 0;
  font-size: 3rem;
  text-decoration: none;
  color: black;
  margin: 0;
}


 .vueperslides2{
   position: relative;
   bottom: 120px;
   width: 95%;
   height: 90px;
   margin: auto;
   z-index: 3;
}

 .vueperslides2 .vueperslide{
  width: 100px;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  justify-content: center;
}

 .vueperslides2 .vueperslide:hover{
  box-shadow: 0 0 6px rgba(0, 0, 0, 1);
  opacity: 1;
  border-color: #000;
 }

 .Projects2 {
  width: 100%;
  height: 50px;
  display: flex;
  bottom: 100px;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  margin: 0;
  padding: 0;
}

.ProjectNameContainer {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 0%;
  padding: 0%;
  z-index: 2;
}

.ProjectNames{
  font-size: 2.5vw;
  font-family: "Handwriting";
  color: white;
}

</style>