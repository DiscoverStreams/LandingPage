<template>
  <div class="Container">
    <h2 class="Title">{{title}}</h2>
    <div class="img-container">
      <img class="logos"  v-for="affiliate in affiliations" :key="affiliate" :src="affiliate.image" >
    </div>
  </div>
</template>

<script>

export default {
  name: "Affiliations",
  data: () => ({
    title: 'Also In Partnership with',
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

.Container{
  display: flex;
  flex-direction: column;
  height: 175px;
  justify-content: center;
  z-index: 999;
  background-color: black;

}

.Title{
  display: flex;
  margin: 0;
  justify-content: center;
  font-size: 2vw;
  color: Silver;
}

.img-container{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 auto 0 auto;
  justify-content: space-around;
  background-color: LightSteelBlue;
  border: 5px solid DarkSlateGrey;
  border-radius: 40%;
}

.logos{
  padding: 1.25rem;
  max-width: 10vw;
  max-height: 10vh;
}
</style>
