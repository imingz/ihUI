<!-- html -->
<template>
  <i-button @click="openMsg">消息提示</i-button>
</template>

<!-- js -->
<script setup>
import iMessage from "../index.js"; //此处为本地示例，请使用import {iMessage} from "ih-ui";引入
import { getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const openMsg = () => {
  instance.proxy.$message({ text: "默认消息提示！" });
};
</script>