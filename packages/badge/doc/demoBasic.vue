<template>
  <i-space :size="[0, 60]">
    <m-badge :value="99" type="primary">
      <i-button>默认</i-button>
    </m-badge>
    <m-badge :value="100" type="success">
      <i-button>成功</i-button>
    </m-badge>
    <m-badge :value="10" type="warning">
      <i-button>警告</i-button>
    </m-badge>
    <m-badge :value="3" type="danger">
      <i-button>危险</i-button>
    </m-badge>
    <m-badge :value="3" type="info">
      <i-button>危险</i-button>
    </m-badge>
    <m-badge :value="50" isDot>
      <i-button>小红点</i-button>
    </m-badge>
  </i-space>
</template>