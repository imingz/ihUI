<!-- html -->
<template>
    <i-progress :percent="20" roundCorner isAnimation :progressSpeed="5"></i-progress>
    <i-progress :percent="40" currentStatus="SUCCESS" roundCorner isAnimation></i-progress>
    <i-progress :percent="60" currentStatus="OTHER" roundCorner isAnimation :progressSpeed="2"></i-progress>
    <i-progress :percent="90" currentStatus="FAIL" roundCorner isAnimation :progressSpeed="1"></i-progress>
    <i-progress :percent="100" bgColor="#505050" roundCorner isAnimation :progressSpeed="6"></i-progress>
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