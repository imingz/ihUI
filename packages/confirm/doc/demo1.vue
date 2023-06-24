<!-- html -->
<template>
  <i-button @click="openConfirm">确认消息</i-button>
</template>

<!-- js -->
<script setup>
import Confirm from "../index.js";
import iMessage from "../../message/index.js";
// 以上为本地示例，请使用import { Confirm, iMessage } from "ih-ui";引入
const openConfirm = () => {
  Confirm({
    text: "您确认要删除这条数据吗？",
  })
    .then(() => {
      iMessage({ text: "点击了确定" });
    })
    .catch(() => {
      iMessage({ text: "点击了取消" });
    });
};
</script>