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
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
}

.Team{
    width: 100vw;
    height: 100vh;
}

</style>
