<template>
  <div class="container">
    <h2>Our Team</h2>
    <div class="team-container">
      <div class="team" v-for="(member, index) in team" :key="index">
        <!-- <div class="img-container"> -->
        <img class="img" src="@/assets/teamImages/face.jpg" alt="face">
        <!-- </div> -->
        <div class="description">
          <h4>{{member.name}}</h4>
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
        affiliation: 'University of Kansas'
      },
      {
        name: 'Will Farmer',
        affiliation: 'USGS - Lakewood CO'
      },
      {
        name: 'Mary Hill',
        affiliation: 'University of Kansas'
      },
      {
        name: 'Samuel Zipper',
        affiliation: 'University of Victoria'
      },
      {
        name: 'Hoori Ajami',
        affiliation: 'UC Riverside'
      },
      {
        name: 'Jillian Deines',
        affiliation: 'Stanford'
      },
      {
        name: 'Holly Doremus',
        affiliation: 'UC Berkeley'
      },
      {
        name: 'Laura Foglia',
        affiliation: 'UC Davis'
      },
      {
        name: 'Tom Gleeson',
        affiliation: 'University of Victoria'
      },
      {
        name: 'Ben Kerr',
        affiliation: 'Foundry Spatial Ltd.'
      },
      {
        name: 'Earl Lewis',
        affiliation: 'Kansas Department of Agriculture'
      },
      {
        name: 'Howard Reeves',
        affiliation: 'USGS – Lansing MI'
      },
      {
        name: 'Chloe Wardropper',
        affiliation: 'University of Idaho'
      },
      {
        name: 'Gabriele Villarini',
        affiliation: 'University of Iowa'
      },
      {
        name: 'Misty Porter',
        affiliation: 'University of Kansas'
      },
      {
        name: 'Lauren Hay',
        affiliation: 'Formerly USGS – Lakewood, CO'
      },
    ]
  })
};
</script>

<style scoped>

h4{
  margin: 0;
  margin-bottom: 0.25rem;
}

p{
  margin: 0;
}

.container{
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  /* flex-direction: column; */
}

.team-container{
  display: flex;
  flex-flow: row wrap;
  max-width: 100rem;
  width: 90%;
  justify-content: space-around;
  margin: 0 auto 0 auto;
}

.team{
  padding: 1.25rem;
  width: 15rem;
  display: flex;
}

.description{
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0.75rem 0 0 0;
}

.img{
  float: left;
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
}
/* 
.img-container{
  max-width: 1rem;
  width: 4rem;
  height: 4rem;
} */
</style>