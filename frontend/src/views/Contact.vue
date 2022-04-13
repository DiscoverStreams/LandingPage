<template>
  <div class="container">
      <div class="Navbar"> <NavBar /> </div>
    <div class="Background"> <Background :description="Description" :image="image" :email="email" :phone="phone" /> </div>
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
    Description: "Contact",
    email: 'Email: something@something.com',
    phone: 'Phone: +?-???-???-????',
    image: 'src/assets/ProjectImages/Ausable_river.jpg'
  })
};
</script>

<style scoped>

.Navbar {
  z-index: 9999;
}

.container {
  display: flex;
  flex-direction: column;
}

</style>
