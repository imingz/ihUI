<!-- html -->
<template>
  <i-button @click="openModal">自定义</i-button>
  <i-modal v-model="modalShow" :closeOnModal="false">
    <template #header>
      <i class="i-icon-email" style="font-size: 17px"></i> 新的邮件
    </template>
    <template #content>
      <i-input
        v-model="value"
        clearable
        @clear="clear"
        placeholder="请输入"
      ></i-input>
      <p>输入的值为：{{ value }}</p>
    </template>
    <template #footer>
      <i-button type="primary" size="small" @click="send">发送</i-button>
    </template>
  </i-modal>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
import iMessage from "../../message/index.js"; //此处为本地示例，请使用import {iMessage} from "ih-ui";引入
const modalShow = ref(false);
const value = ref("");
const openModal = () => {
  modalShow.value = true;
};
const send = () => {
  if (value.value == "") {
    iMessage({ type: "warn", text: "请输入内容!" });
  } else {
    modalShow.value = false;
    setTimeout(() => {
      iMessage({ type: "success", text: "发送成功!" });
    }, 500);
  }
};
</script>