<template>
<div class="Team">
<ProjectTeam /> </div>
</template>

<script>
import ProjectTeam from "@/components/TeamComponents/Team.vue"

export default {
    name: "ProjectTeam",
    components: {
        ProjectTeam
    },
}
</script>

<style scoped>

.Team{
    width: 100%;
    height: 100%;
}

</style>
