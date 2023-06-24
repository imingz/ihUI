<!-- html -->
<template>
    <i-progress :percent="20"></i-progress>
    <i-progress :percent="40" bgColor="#505050"></i-progress>
    <i-progress :percent="60" currentStatus="OTHER"></i-progress>
    <i-progress :percent="90" currentStatus="FAIL"></i-progress>
    <i-progress :percent="100" currentStatus="SUCCESS"></i-progress>
</template>
<style scoped>
.ih-progress {
  margin-bottom: 10px;
}
</style>