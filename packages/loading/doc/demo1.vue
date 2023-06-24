<!-- html -->
<template>
  <i-button @click="openLoading">开始加载</i-button>
</template>

<!-- js -->
<script setup>
import Loading from "../index.js"; //此处为本地示例，请使用import { Loading } from "ih-ui";
const openLoading = () => {
  Loading.show();
  setTimeout(() => {
    Loading.hide();
  }, 5000);
};
</script>