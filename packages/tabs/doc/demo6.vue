<!-- html -->
<template>
  <i-tabs v-model="activeName" @onTabRemove="handleRemove">
    <i-tab-pane
      v-for="tab in TabList"
      :key="tab.name"
      :label="tab.title"
      :name="tab.name"
      :disabled="tab.disabled"
      :closable="tab.closable"
    >
      {{ tab.content }}
    </i-tab-pane>
  </i-tabs>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";

const activeName = ref("2");
const TabList = ref([
  {
    title: "Tab 1",
    name: "1",
    content: "Tab 1 content",
    disabled: true,
  },
  {
    title: "Tab 2",
    name: "2",
    content: "Tab 2 is closable",
    closable: true,
  },
  {
    title: "Tab 3",
    name: "3",
    content: "Tab 3 content",
  },
]);

const handleRemove = (tabName) => {
  const tabs = TabList.value;
  let activeTab = activeName.value;
  if (activeTab === tabName) {
    tabs.forEach((tab, index) => {
      if (tab.name === tabName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeTab = nextTab.name;
        }
      }
    });
  }
  activeName.value = activeTab;
  TabList.value = tabs.filter((tab) => tab.name !== tabName);
};
</script>
