<template>
    <i-space :size="[0, 60]">
          <i-badge :value="11" :max="10">
            <i-button>设置最大值10</i-button>
        </i-badge>
         <i-badge :value="100" :max='99'>
            <i-button>设置最大值99</i-button>
        </i-badge>
    </i-space>
</template>