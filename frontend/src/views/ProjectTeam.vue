<template>
<div class="Container">
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

.Team{
    width: 100%;
    height: 100%;
}

</style>
