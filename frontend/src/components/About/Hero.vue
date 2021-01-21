<template>
  <div class="img-container">
    <img class="img" :src="require(`@/assets/projectImages/${image}`)" alt="City">  
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
  props: {
    description: String,
    image: String
  }
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
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 578px;
  width: 100%;
  transition: all .5s ease-in-out ;
  border-radius: 0.75rem;
}

.description {
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

</style>
