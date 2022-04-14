<template>
  <div class="Container">
    <h1 class="Title">{{title}}</h1>
    <div class="Funding-Container" v-for="affiliate in affiliations" :key="affiliate" >
      <img class="Logos" :src="affiliate.image" >
      <div class="Text-box">
        <h2 class="Subtitle"> The Powell Center</h2>
        <p class="FundingDescription">&quot;{{affiliate.description}}&quot;</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Funding",
  data: () => ({
    title: 'Funded By and In Partnership With...',
    affiliations: [
      {
        image: 'src/assets/affiliateLogos/PowellCenter.jpg',
        alt: 'Powell Center',
        name: 'Powell Center',
        description: "The Powell Center serves as a catalyst for innovative thinking in Earth system science research by providing the time, creative space, & computational, data manipulation & data management resources to promote synthesis of existing information leading to emergent Earth System science knowledge. We are a scientist-driven institution where leveraging existing research efforts produces powerful new insights and moves scientific understanding and its inclusion into management forward at an accelerated pace.",
      }
    ]
  }),

};
</script>

<style scoped>

.Container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: Silver;
}

.Title{
  display: flex;
  float: left;
  margin: 1.25rem;
  font-family: "King";
}

.Funding-Container{
  display: flex;
  max-width: 100rem;
  width: 100%;
  margin: 0 auto 0 auto;
}

.Logos{
  padding: 1.25rem;
  max-width: 20vw;
  max-height: 55vh;
}

.Text-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-bottom: 3rem;
}

.Subtitle {
  font-size: 2vw;
  font-family: "King";
}

.FundingDescription {
  font-size: 2vw;
  font-weight: 900;
  color: SlateGrey;
  font-family: "Leorio";
}

@media only screen and (max-width: 550px) {
  .logos{
    width: 80%;
    max-width: 260px;
    height: 80%;
    margin: auto;
  }
  .container{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
  }
  .funding-container{
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .text-box{
    width: 100%;
    margin: auto;
  }
}
</style>
