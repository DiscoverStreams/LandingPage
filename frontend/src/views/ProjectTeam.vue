<template>
<div class="TeamContainer">
    <NavBar />
    <div class="Team">
    <Team /> 
</div> </div>
</template>

<script>
import NavBar from "@/components/Navbar.vue"
import Team from "@/components/TeamComponents/Team.vue"

export default {
    name: "ProjectTeam",
    components: {
        NavBar,
        Team
    },
}
</script>

<style scoped>

.TeamContainer {
    width: 100%;
    height: 100vh;
    background-color: black;
    overflow-x: hidden;
}

.Team{
    width: 100%;
    height: 100vh;
}

.TeamContainer::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.TeamContainer {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>
