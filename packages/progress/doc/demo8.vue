<!-- html -->
<template>
<div class="ih-style">
    <i-progress
      :percent="20"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >
     <i-button type="primary" size="mini" leftIcon="i-icon-prompt" round></i-button>
    </i-progress>
    <i-progress
      :percent="40"
      bgColor="#505050"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >progress</i-progress>
    <i-progress
      :percent="100"
      currentStatus="SUCCESS"
      progressType="circle"
      :circleSize="120"
      :circleHeight="10"
      isShowText
    >
    FULL
    </i-progress>
</div>
</template>
<style scoped>
.ih-style{
  display: flex;
  flex-wrap: wrap;
}
.ih-progress {
  margin-bottom: 10px;
  margin-right: 10px;
}
.ih-button-round {
  border-radius: 50%;
}
.ih-button-mini {
  padding: 4px;
}
</style>