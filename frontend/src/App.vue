<template>
  <router-view />
  <Footer />
  <Mailing />
</template>

<script>
//import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Affiliations from "@/components/Affiliations.vue";
import Mailing from "@/components/Mailing.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
    Affiliations,
    Mailing
  },
  data: () => ({

  }),
};
</script>

<style>

@font-face {
  font-family: "Handwriting";
  src: url(./assets/Fonts/handwriting_draft/handwriting-draft.ttf) format("truetype");
}

@font-face {
  font-family: "Grille";
  src: url(./assets/Fonts/grille/Grille.ttf) format("truetype");
}

@font-face {
  font-family: "typenoksidi";
  src: url(./assets/Fonts/typenoksidi/typenoksidi.ttf) format("truetype");
}

@font-face {
  font-family: "roughwork";
  src: url(./assets/Fonts/roughwork/ROD.ttf) format("truetype");
}


#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  display: flex;
  flex-direction: column;
  height: 100%;
}

body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0px ;
}

.centre-body{
  flex: 1 0 auto; 
}
</style>
