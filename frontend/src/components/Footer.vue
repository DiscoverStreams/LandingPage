<template>
  <div class="FooterContainer">
    <img class="FooterBackground" src="@/assets/test5.jpg">
    <!--<div class=FooterTop> </div> -->
    <div class="pad">
      <div class="logo-container">
        <img class="logo" src="@/assets/Logo.png" alt="LOGO" />
        <div class="header">Discover Stream</div>
      </div>
      <div class="footer-column">
        <h4>Explore</h4>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank"
          >Explore Kansas/Colarado</a>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank"
          >Explore California</a>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank"
          >Explore Michigan</a>
      </div>
      <div class="footer-column">
        <h4>Information</h4>
        <router-link to="/Information">Information</router-link>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank"
          >References</a
        >
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank"
          >Data Sources</a
        >
      </div>
      <div class="footer-column">
        <h4>Connect</h4>
        <router-link to="/Contact">Contact</router-link>
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank"
          >Citing DiscoverStream</a
        >
        <a href="https://interactiveviz.ku.edu/DiscoverWater/" target="_blank"
          >License Possibly</a
        >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.FooterContainer {
  display: flex;
  position: relative;
  width: 100%;
  height: 180px;
  margin: 0rem;
  flex-shrink: 0;
  flex-direction: column;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  padding-bottom: 1rem;
}

.FooterTop{
  display: flex;
  position: relative;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.5);
}
.FooterBackground{
  display: flex;
  position: absolute;
  width:100%;
  height:100%;
  filter: brightness(60%);
}

.header {
  font-size: 2.5rem;
  margin: auto 0 auto 0;
  padding-left: 0.5rem;
  max-width: 2rem;
  color: #d3ffeb;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.logo-container {
  display: flex;
}

.logo {
  width: 7.5rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.pad {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 90%;
  max-width: 100rem;
  margin: auto;
  padding: 1rem 1rem 1rem 1rem;
}

.footer-column {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  padding: 0.5rem;
}

h4 {
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

a:hover {
  color: #00b966be;
}

@media only screen and (max-width: 1200px) {
  .header {
    display: none;
  }
  .logo {
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
  .mailing-list {
    width: 100%;
    padding: 0 2rem;
    margin-bottom: 0.5rem;
    min-width: 12.25rem;
  }

  .mailButton {
    min-width: 5rem;
  }

  .logo {
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
