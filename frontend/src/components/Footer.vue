<template>
  <div class="box">
    <div class="pad" >
      <div>
        <img src="" alt="LOGO">  
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
.box{
  display: flex;
  padding: 1rem;  
  background-color: rgba(34, 32, 32, 0.808);
  color: white;
  margin: 0rem;
  flex-shrink: 0;
  flex-direction: column;
}

.pad{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 100rem;  
  margin: auto;
}

.column{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
}

h4{
  color: #d3ffeb;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

a {
  color: #30b87b;
  outline: none;
  text-decoration: none;
  padding: 0.1rem 0.05rem 0;
}

a:hover{
  color: #00b966be;
}


</style>
