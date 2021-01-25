<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <div class="funding-container" v-for="(affiliate, index) in affiliations" :key="index">
      <img class="logos" :src="require(`@/assets/affiliateLogos/${affiliate.image}`)" :alt="affiliate.alt">
      <div class="text-box">
        <h2>The Powell Center</h2>
        <p>&quot;{{affiliate.description}}&quot;</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Affiliations",
  data: () => ({
    title: 'Funded By and In Partnership With...',
    affiliations: [
      {
        image: 'PowellCenter.jpg',
        alt: 'Powell Center',
        name: 'Powell Center',
        description: "The Powell Center serves as a catalyst for innovative thinking in Earth system science research by providing the time, creative space, & computational, data manipulation & data management resources to promote synthesis of existing information leading to emergent Earth System science knowledge.",
      }
    ]
  }),

};
</script>

<style scoped>
h4{
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

h1{
  margin: 0;
  margin-top: 1rem;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title{
  display: flex;
  margin: 1.25rem;
  float: left;
}

.funding-container{
  display: flex;
  max-width: 100rem;
  width: 100%;
  margin: 0 auto 0 auto;
}

.logos{
  padding: 1.25rem;
  max-width: 30rem;
  max-height: 30rem;
}

.text-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-bottom: 3rem;
}
</style>
