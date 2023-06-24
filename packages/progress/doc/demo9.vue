<!-- html -->
<template>
<div class="ih-style">
    <i-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="120"
      :circleHeight="10"
      currentStatus="SUCCESS"
      isShowText
    >
    </i-progress>
    <i-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="150"
      :circleHeight="10"
      currentStatus="OTHER"
      isShowText
    >
    </i-progress>
    <i-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="200"
      :circleHeight="10"
      currentStatus="FAIL"
      isShowText
    >
    </i-progress>
</div>
</template>
<script setup>
  import {ref} from 'vue'
  const percent = ref(0)
  setTimeout(()=>{
    percent.value += 55
  },500)
</script>
<style scoped>
.ih-style{
  display: flex;
  flex-wrap: wrap;
}
.ih-progress {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>