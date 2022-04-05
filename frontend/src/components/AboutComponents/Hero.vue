<template>
  <div class="img-container">
    <img class="img" :src="image" alt="City">  
  </div>
  <div class="overlay">
    <div class="description">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data: () => ({
    description: "DiscoverStream is an ongoing project being developed as part of a USGS Powell Center for Data Analysis and Synthesis Working Group led by researchers at the University of Waterloo, University of Kansas, and USGS. Questions can be directed towards Andrea Brookfield",
    image: "src/assets/ProjectImages/Ausable_river.jpg"
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.img-container{
  width: 100%;
  height: 500px;
}

.img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  filter: saturate(300%) sepia(10%) brightness(70%);
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 578px;
  width: 100%;
  transition: all .5s ease-in-out;
}

.description {
  width: 75%;
  color: rgb(255, 255, 255);
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
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
