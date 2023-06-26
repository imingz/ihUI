<!-- html -->
<template>
  <i-space>
    <i-button @click="openInfo">文本状态</i-button>
    <i-button @click="openSuccess">成功状态</i-button>
    <i-button @click="openWarn">警告状态</i-button>
    <i-button @click="openError">错误状态</i-button>
    <i-button @click="openCustom">自定义</i-button>
  </i-space>
</template>

<!-- js -->
<script setup>
import iMessage from "../index.js"; //此处为本地示例，请使用import {iMessage} from "ih-ui";引入
const openInfo = () => {
  iMessage({
    type: "info",
    text: "文本消息提示!",
  });
};
const openSuccess = () => {
  iMessage({
    type: "success",
    text: "成功状态消息提示!",
  });
};
const openWarn = () => {
  iMessage({
    type: "warn",
    text: "警告状态消息提示!",
  });
};
const openError = () => {
  iMessage({
    type: "error",
    text: "错误状态消息提示!",
  });
};
const openCustom = () => {
  iMessage({
    type: "custom",
    text: "自定义消息弹窗样式",
    icon: "i-icon-file-common",
    textColor: "#000",
    bgColor: "#e19af3",
  });
};
</script>