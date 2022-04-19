<template>
  <div class="Container">
    <h class="Title"> Working Group Members </h>
    <div class="Team-Container">
      <div class="Team" v-for="member in team" :key="member">
        <img 
          v-if="member.image"
          class="img" 
          :src="member.image"
          :alt="member.name"
        >
        <img 
          v-else-if="!member.image"
          class="img" 
          src="@/assets/TeamImages/Face.jpg"
          :alt="member.name"
        >
        <div class="description">
          <h class="MemberName">{{member.name}} </h>
          <p class="MemberAffiliation"> >{{member.affiliation}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import WF from "@/assets/TeamImages/WilliamFarmer.jpg"
import SZ from "@/assets/TeamImages/SamZipper.jpg"
import HA from "@/assets/TeamImages/HooriAjami.jpg"
import TG from "@/assets/TeamImages/TomGleeson.jpg"
import GV from "@/assets/TeamImages/GabrieleVillarini.jpg"
import MP from "@/assets/TeamImages/MistyPorter.jpg"

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
        image: WF
      },
      {
        name: 'Mary Hill',
        affiliation: 'University of Kansas',
      },
      {
        name: 'Samuel Zipper',
        affiliation: 'Kansas Geological Survey',
        image: SZ
      },
      {
        name: 'Hoori Ajami',
        affiliation: 'UC Riverside',
        image: HA
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
        image: TG
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
        image: GV
      },
      {
        name: 'Misty Porter',
        affiliation: 'University of Kansas',
        image: MP
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

.Title {
  font-size: 3vw;
  font-family: "roughwork";
  color: aliceblue;
}

.Team-Container{
  display: flex;
  position: relative;
  flex-flow: row wrap;
  max-width: 100rem;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto 0 auto;
}

.Team{
  padding: 1.25rem;
  width: 100%;
  max-width: 18rem;
  display: flex;
  border: 4px solid DarkGrey;
  background-color: MintCream;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.MemberName {
  margin: 0;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
}

.MemberAffiliation {
  margin: 0;
  font-size: 1rem;
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