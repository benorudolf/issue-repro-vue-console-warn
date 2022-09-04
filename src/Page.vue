<script>
import { ref } from "vue";

// --

export default {
  setup() {
    const name = ref("Joe");

    return {
      name,
    };
  },
};
</script>

<template>
  <div>
    {{ name }}
  </div>
</template>

<style></style>
