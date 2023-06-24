<!-- html -->
<template>
    <i-progress :progressHeight="26" :percent="20" isShowText></i-progress>
    <i-progress :progressHeight="26" :percent="40" bgColor="#505050" isShowText></i-progress>
    <i-progress :progressHeight="26" :percent="60" currentStatus="OTHER" isShowText></i-progress>
    <i-progress :progressHeight="26" :percent="90" currentStatus="FAIL" isShowText></i-progress>
    <i-progress :progressHeight="26" :percent="100" currentStatus="SUCCESS" isShowText></i-progress>
</template>
<style scoped>
.ih-progress {
  margin-bottom: 10px;
}
</style>