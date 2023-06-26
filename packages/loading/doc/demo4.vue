<!-- html -->
<template>
  <i-button @click="openLoading">自定义加载图片</i-button>
</template>

<!-- js -->
<script setup>
  import Loading from "../index.js"; //此处为本地示例，请使用import { Loading } from "ih-ui";
  const openLoading = () => {
    Loading.show({
      text:"正在努力加载中...",
      // img:"https://ihui.codeym.com/logo.png"
    })
    setTimeout(()=>{
      Loading.hide()
    },5000)
  }
</script>