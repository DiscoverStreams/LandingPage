<template>
  <div class="navBar nav">
    <img src="" alt="LOGO">
    <div > 
      <router-link to="/">Home</router-link> |
      <router-link to="/explore">Explore Data</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> 
    </div>
  </div>
</template>


<script>
export default {
  name: "NavBar"
};
</script>

<style>
.navBar {
  display: flex;
  padding: 30px;
  justify-content: space-between;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.74);
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
