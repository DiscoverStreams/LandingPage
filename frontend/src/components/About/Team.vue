<template>
  <div class="container">
    <h3>Our Team</h3>
    <div class="team-container">
      <div class="team" v-for="(member, index) in team" :key="index">
        <h4>{{member.name}}</h4>
        <p>{{member.affiliation}}</p>
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
      }
    ]
  })
};
</script>

<style scoped>

.container{
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.team-container{
  display: flex;
  flex-flow: row wrap;
  max-width: 100rem;
  width: 80%;
  justify-content: space-around;
  margin: 0 auto 0 auto;
}

.team{
  padding: 1.25rem;
  width: 15rem;
}
</style>