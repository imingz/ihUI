<template>
  <i-table :options="options" size="small"></i-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "name", title: "事件名", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "attr", title: "回调参数", align: "center" },
      { field: "exm", title: "示例", align: "center", width: "350px" },
    ],
    datas: [
      {
        name: "close",
        red: "modal关闭事件",
        attr: "()",
        exm: "close = () =>{}",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>