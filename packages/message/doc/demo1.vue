<!-- html -->
<template>
  <i-space>
    <i-button @click="openMsg">消息提示</i-button>
    <i-button @click="openVNodeMsg">消息提示(VNode)</i-button>
  </i-space>
</template>

<!-- js -->
<script setup>
import Message from '../index.js' //此处为本地示例，请使用import {Message} from "ih-ui";引入
import { h } from 'vue'
const openMsg = () => {
  Message({
    text: '默认消息提示'
  })
}

const openVNodeMsg = () => {
  Message({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
</script>
