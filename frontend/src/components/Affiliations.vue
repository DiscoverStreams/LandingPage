<template>
  <div class="container">
    <h2 class="title">{{title}}</h2>
    <div class="img-container">
      <img class="logos" v-for="(affiliate, index) in affiliations" :key="index"  :src="require(`@/assets/affiliateLogos/${affiliate.image}`)" :alt="affiliate.alt">
    </div>
  </div>
</template>

<script>

export default {
  name: "Affiliations",
  data: () => ({
    title: 'In Partnership with...',
    affiliations: [
      {
        image: 'USGSPowellCenter.png',
        alt: 'USGS',
        name: 'USGS Powell Center'
      },
      {
        image: 'WaterlooU.png',
        alt: 'UW',
        name: 'University of Waterloo'
      },
      {
        image: 'KansasUniversity.png',
        alt: 'UK',
        name: 'University of Kansas'
      },
      
      {
        image: 'UniversityOfVictoria.png',
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}


.title{
  display: flex;
  margin: 1.25rem;
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
