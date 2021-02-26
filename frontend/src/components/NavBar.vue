<template>
  <div class="navBar nav">  
    <div class="logo-container"> 
      <img class="img" src="@/assets/Logo.png" alt="LOGO">
      <h3 class="header">DiscoverStream</h3>
    </div>
    <div class="nav"> 
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

<style scoped>
.header{
  font-size: 2rem;
  margin: auto 0 auto 0;
  padding-left: 0.5rem;
}

.logo-container{
  display: flex;
}

.img{
  width: 3rem;
}

.navBar {
  display: flex;
  padding: 0.5rem 7rem 0.5rem 7rem;
  justify-content: space-between;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.74);
  z-index: 999;
  position: sticky;
  top: 0;
  background-color: aliceblue;
}

.nav{
  margin: auto 0 auto 0;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
