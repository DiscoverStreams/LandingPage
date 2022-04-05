<template>
  <div class="container">
    <h1>Working Group Members</h1>
    <div class="team-container">
      <div class="team" v-for="member in team" :key="member">
        <img 
          v-if="member.image"
          class="img" 
          :src="member.image"
          :alt="member.name"
        >
        <img 
          v-else-if="!member.image"
          class="img" 
          :src="`src/assets/teamImages/face.jpg`" 
          :alt="member.name"
        >
        <div class="description">
          <h5>{{member.name}}</h5>
          <p>{{member.affiliation}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Team",
  components: {
  },
  data: () => ({
    team: [
      {
        name: 'Andrea Brookfield',
        affiliation: 'University of Kansas',
      },
      {
        name: 'Will Farmer',
        affiliation: 'USGS - Lakewood CO',
        image: 'src/assets/TeamImages/WilliamFarmer.jpg'
      },
      {
        name: 'Mary Hill',
        affiliation: 'University of Kansas',
      },
      {
        name: 'Samuel Zipper',
        affiliation: 'Kansas Geological Survey',
        image: 'src/assets/TeamImages/SamZipper.jpg'
      },
      {
        name: 'Hoori Ajami',
        affiliation: 'UC Riverside',
        image: 'src/assets/TeamImages/HooriAjami.jpg'
      },
      {
        name: 'Jillian Deines',
        affiliation: 'Stanford',
        
      },
      {
        name: 'Holly Doremus',
        affiliation: 'UC Berkeley',
        
      },
      {
        name: 'Laura Foglia',
        affiliation: 'UC Davis',
      },
      {
        name: 'Tom Gleeson',
        affiliation: 'University of Victoria',
        image: 'src/assets/TeamImages/TomGleeson.jpg'
      },
      {
        name: 'Ben Kerr',
        affiliation: 'Foundry Spatial Ltd.',
      },
      {
        name: 'Earl Lewis',
        affiliation: 'Kansas Department of Agriculture',
      },
      {
        name: 'Howard Reeves',
        affiliation: 'USGS – Lansing MI',
      },
      {
        name: 'Chloe Wardropper',
        affiliation: 'University of Idaho',
      },
      {
        name: 'Gabriele Villarini',
        affiliation: 'University of Iowa',
        image: 'src/assets/TeamImages/GabrieleVillarini.jpg'
      },
      {
        name: 'Misty Porter',
        affiliation: 'University of Kansas',
        image: 'src/assets/TeamImages/MistyPorter.jpg'
      },
      {
        name: 'Lauren Hay',
        affiliation: 'Formerly USGS – Lakewood, CO',
      },
    ]
  })
};
</script>

<style scoped>

h5{
  margin: 0;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
}

p{
  margin: 0;
  font-size: 1rem;
}

.container{
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  /* flex-direction: column; */
  z-index: 1000;
}

.team-container{
  display: flex;
  flex-flow: row wrap;
  max-width: 100rem;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto 0 auto;
}

.team{
  padding: 1.25rem;
  width: 100%;
  max-width: 18rem;
  display: flex;
  border: 1px solid rgba(233, 233, 233, 0.6);
  background-color: white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.description{
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.25rem 0 0.25rem 0;
  margin-top: 0;
  margin-bottom: auto;
  
}

.img{
  float: left;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 0.75rem;
}
/* 
.img-container{
  max-width: 1rem;
  width: 4rem;
  height: 4rem;
} */

@media only screen and (max-width: 700px) {
  .team{
    display: flex;
    flex-direction: column;
    width: 75%;
  }
  .img{
    margin: auto;
  }
}
</style>