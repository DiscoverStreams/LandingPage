<template>
  <div class="container">
    <h2 class="title">{{title}}</h2 >
    <div class="img-container">
      <img class="logos" v-for="(affiliate, index) in affiliations" :key="index"  :src="require(`../../assets/affiliateLogos/${affiliate.image}`)" :alt="affiliate.alt">
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
        image: 'USGSPowellCenter.png',
        alt: 'USGS',
        name: 'USGS Powell Center'
      },
      {
        image: 'KansasUniversity.png',
        alt: 'UK',
        name: 'University of Kansas'
      },
      {
        image: 'WaterlooU.png',
        alt: 'UW',
        name: 'University of Waterloo'
      },
      {
        image: 'UniversityOfIdaho.png',
        alt: 'UI',
        name: 'University of Idaho'
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
}

.title{
  display: flex;
  margin: 20px;
  float: left;
}

.img-container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.logos{
  padding: 20px;
  max-width: 250px;
  max-height: 150px;
}
</style>
