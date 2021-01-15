<template>
  <div>
    <Description :description="description" />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from "@/components/Description";

export default {
  name: "Contact",
  components: {
    Description
  },
  data: () => ({
    description: "This is the contacts page"
  })
};
</script>
