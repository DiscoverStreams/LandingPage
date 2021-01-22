<template>
  <div class="container">
    <h1 class="title">{{title}}</h1>
    <div class="img-container">
      <img class="logos" v-for="(affiliate, index) in affiliations" :key="index"  :src="require(`@/assets/affiliateLogos/${affiliate.image}`)" :alt="affiliate.alt">
      <div class="text-box">
        <h2>The Powell Center</h2>
        <p>A little description about them        </p>
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
        name: 'Powell Center'
      }
    ]
  }),

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.img-container{
  display: flex;
  flex-flow: row wrap;
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
  text-align: left;
}
</style>
