<!-- html -->
<template>
  <m-popover v-model="visible" trigger="manual" placement="top-start">
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
      <i-button size="mini" type="text" @click="visible = false">取消</i-button>
      <i-button type="primary" size="mini" @click="visible = false"
        >确定</i-button
      >
    </div>
    <template #reference>
      <i-button size="medium" @click="handler">删除</i-button>
    </template>
  </m-popover>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, onMounted, computed } from "vue";

const visible = ref(false);
function handler() {
  visible.value = !visible.value;
  console.log(visible.value);
}
</script>
