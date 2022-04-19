<template>
  <div class="img-container">
    <img class="img" :src="image" alt="City">  
    <div class="Description">
      {{description}}
    </div>
  </div>
</template>

<script>

import AusableRiver from "@/assets/ProjectImages/Ausable_river.jpg"

export default {
  name: "Hero",
  data: () => ({
    description: "DiscoverStreams is an ongoing project being developed as part of a USGS Powell Center for Data Analysis and Synthesis Working Group led by researchers at the University of Waterloo, University of Kansas, and USGS. Questions can be directed towards Andrea Brookfield",
    image: AusableRiver
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.img-container{
  width: 100%;
  height: 50%;
  text-align: center;
  justify-content: center;
}

.img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  filter: saturate(300%) sepia(50%) brightness(40%);
}

.Description {
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 75%;
  font-size: 3.5vw;
  color: Snow;
  font-family: "Orwell";
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 700px) {
  .description {
    font-size: 1.5rem;
    /* width: 90%; */
  }
}

@media only screen and (max-width: 450px) {
  .description {
    font-size: 1.25rem;
    width: 80%;
  }
}


</style>
