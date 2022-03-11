<template>
<div class="projects">
  <vueper-slides
  class="projects vueperslides1 no-shadow"
    ref="vueperslides1"
    @slide="$refs.vueperslides2 && $refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" 
    :touchable="true"
    :autoplay="false"
    :bullets="false"
    :visible-slides="1"
    :slide-ratio="1 / 4"
    :dragging-distance="300"
    :gap="0"
    fixedHeight="true"
    :breakpoints="{ 1000: { '3d': true, visibleSlides: 1} }">
    <vueper-slide 
    v-for="(project, i) in projects" 
      :key="i" 
      :image="project.image"
      :link="project.link">
    </vueper-slide>
  </vueper-slides>
  <br/>
  
  <div class="ProjectsOptions"> 
  <vueper-slides
  class="projects vueperslides2"
    ref="vueperslides2"
    @slide="$refs.vueperslides1 && $refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
    :visible-slides="projects.length"
    fixed-height="true"
    :bullets="false"
    :touchable="false"
    :gap="10"
    :arrows="false">
    <vueper-slide 
      class="sidedes2" v-for="(project, i) in projects" 
      :key="i" 
      :image="project.image"
      :title="project.city"
      @click="$refs.vueperslides2 && $refs.vueperslides2.goToSlide(i)">
    </vueper-slide>
  </vueper-slides>  </div>
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
        image: require('@/assets/ProjectImages/Ark-dry-kansas.jpg'),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/',
      },
      {
        city: 'California', 
        image: require('@/assets/ProjectImages/california-desert.jpg'),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'
      },
      {
        city: 'Michigan', 
        image: require('@/assets/ProjectImages/Ausable-River-Michigan.jpg'),
        link: 'https://interactiveviz.ku.edu/DiscoverWater/'
      },
      
    ],
  })
};
</script>

<style scoped>

.projects{
  width: 100%;
  height: 715px;
}

.vueperslides1{
  width: 100%;
  height: 575px;
  margin: auto;
}

.vueperslides__arrow {color: yellow}

.vueperslides {padding: 1 1em;}

.vueperslides__parallax-wrapper, .vueperslides__track {overflow: visible;}

.vueperslides1 .vueperslide{
  right: 0;
  font-size: 3rem;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  margin: 0;
}


 .vueperslides2{
   width: 90%;
   height: 100px;
   margin: auto;
}

 .vueperslides2 .vueperslide{
  width: 100px;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  justify-content: center;
  border-radius: 50%;
}

 .vueperslides2 .vueperslide:hover{
  box-shadow: 0 0 6px rgba(0, 0, 0, 1);
  opacity: 1;
  border-color: #000;
 }

/*@media only screen and (max-width: 1200px) {
  .title{
    font-size: 1.5rem;
  }
} */

</style>