<!-- html -->
<template>
    <i-progress :percent="20" :setPercentText="textMethod" roundCorner></i-progress>
    <i-progress :percent="40" bgColor="#505050" roundCorner>百分之40</i-progress>
    <i-progress :percent="60" currentStatus="OTHER" roundCorner><i class="m-icon-arrow-double-right"></i></i-progress>
    <i-progress :percent="90" :setPercentText="textMethod" currentStatus="FAIL" roundCorner></i-progress>
    <i-progress :percent="100" progressHeight="20" currentStatus="SUCCESS" roundCorner>
      <i-button type="success" size="mini" round>完成</i-button>
    </i-progress>
</template>
<!-- js -->
<script setup>
const textMethod = (percent) => {
  if (percent < 70) {
    return 'ing'
  }
  return 'fail'
}
</script>
<style scoped>
.ih-progress {
  margin-bottom: 10px;
}
.ih-button-mini {
  padding: 3px;
  font-size: 12px;
}
</style>