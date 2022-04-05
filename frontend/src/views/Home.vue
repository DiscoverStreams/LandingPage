<template>
<div class="Landing-Container">
      <div class="Projects"> <Projects /> </div>
      <div class="HomeNavbar"> <HomeNavbar /> </div>
    </div>
    <div class="ProjectDescription"> <ProjectDescription /> </div>
</template>

<script>
// @ is an alias to /src
import HomeNavbar from "@/components/HomeComponents/HomeNavbar.vue";
import Projects from "@/components/HomeComponents/Projects.vue";
import ProjectDescription from '../components/HomeComponents/ProjectDescription.vue';

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Projects,
    ProjectDescription
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
  z-index: 2;
}

.HomeNavbar {
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 3;
}

.LandingPageTitle{
  display: flex;
  position: relative;
  font-size: 60px;
  color: antiquewhite;
  top: 500px;
}


@media only screen and (min-width: 1440px) {
  .home {
    width: 90%;
  }
}

</style>