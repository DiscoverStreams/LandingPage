<template>
<div class="Landing-Container">
      <div class="Projects"> <Projects /> </div>
      <div class="HomeNavbar"> <HomeNavbar /> </div>
        <!--<h1 class= "LandingPageTitle"> DiscoverStreams Visualization Tool </h1>-->
    </div>
</template>

<script>
// @ is an alias to /src
import HomeNavbar from "@/components/HomeComponents/HomeNavbar.vue";
import Projects from "@/components/HomeComponents/Projects.vue";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Projects
  },
  data: () => ({
  })
};
</script>

<style scoped>

.Landing-Container{
  display: flex;
  position: relative;
  text-decoration: none;
  background-color: black;
}

.Projects {
  width: 100%;
}

.HomeNavbar {
  position: absolute;
  top: 0;
  z-index: 1;
}

.LandingPageTitle{
  position: absolute;
  padding-left: 20px;
  font-size: 60px;
  color: antiquewhite;
  top: 500px;
  z-index: 2;
}


@media only screen and (min-width: 1440px) {
  .home {
    width: 90%;
  }
}

</style>