<template>
  <div class="Container">
    <img class="NavBackground" src="@/assets/testdarkbackground.jpg">
    <NavBar />
    <ScienceExplanation />
    <DepletionMethods />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ScienceExplanation from "@/components/ExploreScienceComponents/ScienceExplanation.vue";
import DepletionMethods from "@/components/ExploreScienceComponents/StreamflowDepletionMethods.vue";

export default {
  name: "ExploreScience",
  components: {
    NavBar,
    ScienceExplanation,
    DepletionMethods

  },
};
</script>

<style scoped>

.Container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.NavBackground {
  display: flex;
  position: absolute;
  width:100%;
  height:450vh;
  filter: brightness(60%);
}

.Subtitle {
  font-size: 2vw;
  font-style: italic;
  margin: 4rem 0rem 1rem 0rem;
  text-align: left;
}

img {
  width: 60%;
  margin: 1rem 0rem;
}

h4{
  text-align: left;
}

table{
  margin: 3rem 0rem;
}

td{
  text-align: left;
  vertical-align: top;
  padding: 1rem;
  border: 1px solid #dddddd;
}

th {
  border: 1px solid #dddddd8c;
  border-bottom: 0px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

h4{
  font-weight: normal;
}

@media only screen and (min-width: 1440px) {
  .container {
    width: 75%;
  }
}

</style>
