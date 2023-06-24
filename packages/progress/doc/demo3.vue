<!-- html -->
<template>
    <i-progress :percent="20" isShowText roundCorner></i-progress>
    <i-progress :percent="40" :bgColor="custoiColorMethod" isShowText roundCorner></i-progress>
    <i-progress :percent="60" bgColor="#e6a23c" isShowText roundCorner></i-progress>
    <i-progress :percent="90" bgColor="#5cb87a" isShowText roundCorner></i-progress>
    <i-progress :percent="100" bgColor="#6f7ad3" isShowText roundCorner></i-progress>
</template>
<!-- js -->
<script setup>
const custoiColorMethod = (percent) => {
  if (percent < 70) {
    return '#909399'
  }
  return '#67c23a'
}
</script>
<style scoped>
.ih-progress {
  margin-bottom: 10px;
}
</style>