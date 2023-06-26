<!-- html -->
<template>
  <i-space>
    <i-button @click="openMsg1">消息提示</i-button>
    <i-button @click="openMsg2">5秒后消失</i-button>
  </i-space>
</template>

<!-- js -->
<script setup>
import iMessage from "../index.js"; //此处为本地示例，请使用import {iMessage} from "ih-ui";引入
const openMsg1 = () => {
  iMessage({
    text: "自定义Icon！",
    icon: "i-icon-collection_fill",
  });
};
const openMsg2 = () => {
  iMessage({
    text: "5秒后消失！",
    icon: "i-icon-good",
    timeout: 5000,
  });
};
</script>