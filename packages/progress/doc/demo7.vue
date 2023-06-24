<!-- html -->
<template>
  <div class="ih-style">
    <i-progress
      :percent="20"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
      :progressSpeed="1"
      :isAnimation="isStart"
    ></i-progress>
    <i-progress
      :percent="40"
      bgColor="#505050"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
      :progressSpeed="2"
      :isAnimation="isStart"
    ></i-progress>
    <i-progress
      :percent="60"
      currentStatus="OTHER"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
      :progressSpeed="3"
      :isAnimation="isStart"
    ></i-progress>
    <i-progress
      :percent="90"
      currentStatus="FAIL"
      progressType="circle"
      :circleSize="120"
      :circleHeight="10"
      isShowText
      :progressSpeed="4"
      :isAnimation="isStart"
    ></i-progress>
    <i-progress
      :percent="100"
      currentStatus="SUCCESS"
      progressType="circle"
      :circleSize="120"
      :circleHeight="10"
      isShowText
    >
    </i-progress>
  </div>
  <i-button type="primary" @click="startMethod" round>开始 / 暂停</i-button>
</template>
<script setup>
import {ref} from 'vue'
const isStart = ref(false)
const startMethod = () =>{
  isStart.value = !isStart.value
}
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