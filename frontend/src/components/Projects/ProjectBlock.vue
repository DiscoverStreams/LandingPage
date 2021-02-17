<template>
  <div class="project">
    <!-- image covers the block with a text overlay for the city-->
    <img :src="require(`@/assets/projectImages/${image}`)" alt="City">
    <!-- text overlay on hover to show a description -->
    <div class="overlay">
      <div class="description">
        Visually discover more about changes in streamflow and streamflow depletion
      </div>
      <div class="text">
        {{city}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBlock",
  props: {
    image: String,
    city: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project{
  display: unset;
  position: relative;
  width: 30rem;
  height: 15rem;
  margin: 0.25rem;
}

.project img{
  max-width: 30rem;
  max-height: 15rem;
  width: 100%;
  height: 100%;
  object-fit: fill;
  overflow: hidden;
  filter: sepia(30%) brightness(70%);
  border-radius: 0.75rem;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 15rem;
  width: 30rem;
  transition: all .5s ease-in-out ;
  border-radius: 0.75rem;
}

.overlay > .text{
  opacity: 1;
}

.overlay > .description{
  opacity: 0;
}

.overlay:hover {
  opacity: 1;
  background-color: #a05dcc9c;
}

.overlay:hover > .text{
  opacity: 0;
}

.overlay:hover > .description{
  opacity: 1;
}

.text{
  color: rgb(212, 255, 55);
  font-size: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.description {
  color: rgb(255, 255, 255);
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
