<template>
  <NavBar />
  <router-view class="body" />
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import axios from 'axios'

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data: () => ({

  }),
  methods: {
    getData: function () {
      axios.get('http://localhost/discovery-stream/phpapi/get.php')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted: function () {
    console.log('mounted');
    this.getData();
  }
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
