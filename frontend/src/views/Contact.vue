<template>
  <div class="Container">
      <div class="Navbar"> <NavBar /> </div>
    <div class="Background"> <Background :Title="Title" :Description="Description" 
    :BackgroundImage="BackgroundImage" :Email="Email" :Phone="Phone" /> </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Background from "@/components/ContactComponents/Background.vue";

export default {
  name: "Contact",
  components: {
    NavBar,
    Background
  },
    data: () => ({
    Title: "Contact us",
    Description: "If you would like to contact the team about research inquiries you can use the following two methods and we will get back with you",
    Email: "something@something.com",
    Phone: "+?-???-???-????",
    BackgroundImage: "@/assets/ProjectImages/Ausable_river.jpg"
  })
};
</script>

<style scoped>

.Navbar {
  z-index: 9999;
}

.Container {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  
}

.Background {
  font-size: 5vw;
}

</style>
