<template>
  <NavBar />
  <div>blahblahblah</div>
  <router-view class="body" />
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data: () => ({
  })
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
  
}
html, body {
  height: 100%;
  margin: 0px ;
}

.body{
  flex: 1 0 auto; 
}
</style>
