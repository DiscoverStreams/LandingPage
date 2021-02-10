<template>
  <div class="container">
    <Hero :description="description" :image="image" :email="email" :phone="phone" />
  </div>
</template>

<script>
import Hero from "@/components/Contacts/Hero";

export default {
  name: "Contact",
  components: {
    Hero
  },
  data: () => ({
    description: "Contact",
    email: 'Email: something@something.com',
    phone: 'Phone: +?-???-???-????',
    image: 'Ausable_river.jpg'
  })
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

</style>
