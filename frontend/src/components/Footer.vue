<template>
  <div class="box">
    <div class="pad" >
      <div class="logo-container">
        <img class="logo" src="@/assets/Logo.png" alt="LOGO">  
        <div class="header">Discover Stream</div>
      </div>
      <div class="column">  
        <h4>Explore</h4>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank" >Explore Kansas/Colarado</a>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank">Explore California</a>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank">Explore Michigan</a>
      </div>
      <div class="column">  
        <h4>Information</h4>
        <router-link to="/about">About</router-link> 
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank" >References</a>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank">Data Sources</a>
      </div>
      <div class="column">  
        <h4>Connect</h4>
        <router-link to="/contact">Contact</router-link> 
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank">Citing DiscoverStream</a>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank">License Possibly</a>
      </div>
    </div>
    <div>
      &copy; {{year}} DiscoverStream
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    year : new Date().getFullYear(),
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  font-size: 2.5rem;
  margin: auto 0 auto 0;
  padding-left: 0.5rem;
  max-width: 2rem;
  color:  #d3ffeb;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.logo-container{
  display: flex;
}

.logo{
  width: 7.5rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.box{
  display: flex;
  background-color: rgba(34, 32, 32, 0.808);
  color: white;
  margin: 0rem;
  flex-shrink: 0;
  flex-direction: column;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding-bottom: 1rem;
}

.pad{
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 90%;
  max-width: 100rem;  
  margin: auto;
  padding: 1rem 1rem 1rem 1rem;
}

.column{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  padding: 0.5rem;
}

h4{
  color: #d3ffeb;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  font-size: 1rem;
}

a {
  color: #30b87b;
  outline: none;
  text-decoration: none;
  padding: 0.1rem 0.05rem 0;
  font-size: 1rem;
}

a:hover{
  color: #00b966be;
}

@media only screen and (max-width: 1200px) {
  .header {
    display: none;
  }
  .logo{
    width: 5.5rem;
  }
  h4 {
    font-size: 0.9rem;
  }
  a {
    font-size: 0.9rem;
  }
  
}
@media only screen and (max-width: 500px) {
  .logo{
    display: none;
  }
  h4 {
    font-size: 0.9rem;
  }
  a {
    font-size: 0.9rem;
  }
  .pad {
    display: flex;
    flex-direction: column;
  }
}

</style>
