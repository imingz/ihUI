<template>
  <i-space :size="[0, 60]">
    <i-badge :value="99" type="primary">
      <i-button>默认</i-button>
    </i-badge>
    <i-badge :value="100" type="success">
      <i-button>成功</i-button>
    </i-badge>
    <i-badge :value="10" type="warning">
      <i-button>警告</i-button>
    </i-badge>
    <i-badge :value="3" type="danger">
      <i-button>危险</i-button>
    </i-badge>
    <i-badge :value="3" type="info">
      <i-button>危险</i-button>
    </i-badge>
    <i-badge :value="50" isDot>
      <i-button>小红点</i-button>
    </i-badge>
  </i-space>
</template>