<!-- html -->
<template>
  <i-tabs>
    <i-tab-pane :label="label" name="one"> 
         选项卡一 
    </i-tab-pane>
    <i-tab-pane label="选项卡二" name="tow"> 选项卡二 </i-tab-pane>
    <i-tab-pane label="选项卡三" name="three"> 选项卡三 </i-tab-pane>
  </i-tabs>
</template>


<!-- js -->
<script setup>
  import {h} from "vue"
  const label=h("span",{},[
      h("i",{class:"i-icon-folder-close"}),
      "选项卡一"
    ])
</script>