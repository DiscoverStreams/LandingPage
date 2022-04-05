<template>
<NavBar />
  <div class="container">
    <Background :description="Description" :image="image" :email="email" :phone="phone" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Background from "@/components/Contacts/Background.vue";

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
.container {
  display: flex;
  flex-direction: column;
}

</style>
