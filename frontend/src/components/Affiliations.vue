<template>
  <div class="container">
    <h2 class="title">{{title}}</h2>
    <div class="img-container">
      <img class="logos"  v-for="affiliate in affiliations" :key="affiliate" :src="affiliate.image" >
    </div>
  </div>
</template>

<script>

export default {
  name: "Affiliations",
  data: () => ({
    title: 'In Partnership with',
    affiliations: [
      {
        image: 'src/assets/affiliateLogos/USGSPowellCenter.png',
        alt: 'USGS',
        name: 'USGS Powell Center'
      },
      {
        image: 'src/assets/affiliateLogos/WaterlooU.png',
        alt: 'UW',
        name: 'University of Waterloo'
      },
      {
        image: 'src/assets/affiliateLogos/KansasUniversity.png',
        alt: 'UK',
        name: 'University of Kansas'
      },
      
      {
        image: 'src/assets/affiliateLogos/UniversityOfVictoria.png',
        alt: 'UI',
        name: 'University of Victoria'
      }, 
    ]
  }),

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  height: 100px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  z-index: 999;

}

.title{
  color: white;
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin: 0;
  padding-left: 1rem;
  float: left;
}

.img-container{
  display: flex;
  flex-flow: row wrap;
  max-width: 100rem;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto 0 auto;
}
.logos{
  padding: 1.25rem;
  max-width: 7.5rem;
  max-height: 5rem;
}
</style>
