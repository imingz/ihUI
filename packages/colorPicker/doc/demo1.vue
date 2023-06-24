<template>
  <i-row style="display: flex; align-items: center">
    <i-col :span="4"><i-button @click.stop="showColorPicker">显示colorPicker面板</i-button></i-col>
    <i-col :span="6"><div :style="{ color: color }">结果颜色</div></i-col>
  </i-row>
  <i-colorPicker ref="colorPicker" v-model="color" :autoClose="autoClose"></i-colorPicker>
</template>

<script setup>
import { ref } from 'vue'
const color = ref('#000')
const autoClose = ref(false)
const colorPicker = ref()
const showColorPicker = () => {
  colorPicker.value.show()
}
</script>

<style lang="scss" scoped></style>
