<template>
    <i-space :size="[0, 60]">
          <m-badge :value="11" :max="10">
            <i-button>设置最大值10</i-button>
        </m-badge>
         <m-badge :value="100" :max='99'>
            <i-button>设置最大值99</i-button>
        </m-badge>
    </i-space>
</template>