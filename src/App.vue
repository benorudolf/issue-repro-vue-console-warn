<script>
import { onMounted } from "@vue/runtime-core";
import { init as initWidget } from "./widget.js";

// --

export default {
  setup() {
    onMounted(() => {
      initWidget();
    });

    return {};
  },
};
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style></style>
