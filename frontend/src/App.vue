<template>
  <router-view />
  <Footer />
  <Mailing />
</template>

<script>
//import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Mailing from "@/components/Mailing.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
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

@font-face {
  font-family: "Orwell";
  src: url(./assets/Fonts/orwell/Orwell.ttf) format("truetype");
}

@font-face {
  font-family: "HandwritingShaded";
  src: url(./assets/Fonts/handwriting_draft_shaded/handwriting-draft-SHADED.otf) format("truetype");
}

@font-face {
  font-family: "Storybook";
  src: url(./assets/Fonts/Storybook/Storybook.TTF) format("truetype");
}

@font-face {
  font-family: "JBetude";
  src: url(./assets/Fonts/JBetude/JBEtude-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "OptimusPrinceps";
  src: url(./assets/Fonts/OptimusPrinceps/OptimusPrincepsSemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "TyposlabIrregular";
  src: url(./assets/Fonts/TyposlabIrregular/TypoSlabIrregularDemo.otf) format("truetype");
}

@font-face {
  font-family: "King";
  src: url(./assets/Fonts/King/KIN668.TTF) format("truetype");
}

@font-face {
  font-family: "Leorio";
  src: url(./assets/Fonts/Leorio/Leorio.ttf) format("truetype");
}

@font-face {
  font-family: "PhilosopherBold";
  src: url(./assets/Fonts/Philosopher/Philosopher-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "PhilospoherBoldItalic";
  src: url(./assets/Fonts/Philosopher/Philosopher-BoldItalic) format("truetype");
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
