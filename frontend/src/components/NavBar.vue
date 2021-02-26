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
aside {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(83, 80, 80, 0.925);
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.5);
  transform: translateX(110%);
  transition: transform 200ms;
  overflow-x: hidden;
  overflow-y: auto;
}

aside.open {
  transform: translateX(0);
}

.sidebar-text{
  margin: 1rem 0rem 0rem 0rem;
  color: white !important;
}

.close {
  position: absolute;
  cursor: pointer;
  top: 0.75rem;
  right: 1.25rem;
  text-shadow: none;
  color: black;
  -webkit-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  background: transparent;
  font-size: 2rem;
  opacity: 1;
  font-weight: lighter;
  border: none;
}

.close:focus{
  border: none;
  outline: none;
}

.close:active{
  border: none;
  outline: none;
}

.close:hover{
  opacity: 0.5;
}

.ct-sidenav-list {
  padding: 5rem 2rem 3rem;
  list-style: none;
  color: #6e6e6e;
  text-align: left;
}

/* .sidebar-content {
  text-decoration: none !important;
  
} */

.sidebar-dropdown-btn{
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;

}

.sidebar-dropdown{
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem 1rem 1rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.content-sub{
  margin-right: 5rem;
  margin-top: -1.5rem;
}

.information-sub{
  margin-right: 10rem;
  margin-top: -1.5rem;
}

.explore-sub{
  margin-right: 16.5rem;
  margin-top: -1.5rem;
}

.dropdown {
  display: inline;
  overflow: hidden;
}

.dropdown .dropbtn {
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropbtn{
  font-weight: bold;
  font-size: 1rem;
  color: #2c3e50;
  text-decoration: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  background-color: #f9f9f9;
  right: 0;
  min-width: 110px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  /* float: none; */
  color: black;
  padding: 0.5rem 0.75rem;
  display: block;
  text-align: left;
}

.dropdown:hover .dropbtn {
  color: #42b983;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover  .dropdown-content { 
  
  display: block;
}

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
  font-size: 1rem;
  text-decoration: none;
}

.nav a:hover{
  color: #42b983;
}

.hamburger {
  cursor: pointer;
  display: block;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  background: white;
}

.hamburger:focus{
  outline: none;

}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
