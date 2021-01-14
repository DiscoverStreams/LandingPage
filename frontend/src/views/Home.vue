<template>
  <div class="home">
    <Description :projectDescription="projectDescription" />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from "../components/Description";

export default {
  name: "Home",
  components: {
    Description
  },
  data: () => ({
    projectDescription:
      "The description goes here. The description goes here. The description goes here. The description goes here. The description goes here. The description goes here. The description goes here."
  })
};
</script>
