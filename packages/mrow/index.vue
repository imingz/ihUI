<template>
  <div class="ih-row-default"><slot></slot></div>
</template>
<script>
export default{
  name:"iRow"
}
</script>
<script setup>

</script>

<style lang="scss" scoped>
.ih-row-default{
  width:100%;
  height:auto;
  box-sizing: border-box;
  overflow: hidden;
}
</style>