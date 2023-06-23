<template>
  <button :class="isClass" :style="styles">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <span
      :style="{
        'margin-left':
          $slot['default'] == undefined ? '0px' : leftIcon ? '4px' : '0px',
        'margin-right':
          $slot['default'] == undefined ? '0px' : rightIcon ? '4px' : '0px',
      }"
      ><slot
    /></span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>
<script>
export default {
  name: "mButton",
};
</script>
<script setup>
import { computed, useSlots } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  round: Boolean,
  size: {
    type: String,
    default: "default",
  },
  customColor: {
    type: String,
    default: "",
  },
  leftIcon: String,
  rightIcon: String,
  localing: Boolean,
});
const mBtnDeaultStyle = {
  background: props.customColor,
  border: props.customColor,
  color: "#fff",
};
const $slot = useSlots();
const isClass = computed(() => {
  return [
    props.size == "default"
      ? "ih-button"
      : props.size == "medium"
      ? "ih-button-medium"
      : props.size == "small"
      ? "ih-button-small"
      : props.size == "mini"
      ? "ih-button-mini"
      : "ih-button",
    props.type ? (props.disabled ? "" : `ih-button-${props.type}`) : "",
    props.disabled ? `ih-button-${props.type}-disabled` : "",
    {
      "ih-button-round": props.round,
    },
  ];
});
const isIconClass = computed(() => {
  return [
    "iconfont",
    props.leftIcon || props.rightIcon,
    props.localing
      ? props.leftIcon == "m-icon-loading1" ||
        props.leftIcon == "m-icon-loading2" ||
        props.leftIcon == "m-icon-loading3" ||
        props.leftIcon == "m-icon-loading4" ||
        props.leftIcon == "m-icon-loading5" ||
        props.leftIcon == "m-icon-loading6" ||
        props.rightIcon == "m-icon-loading1" ||
        props.rightIcon == "m-icon-loading2" ||
        props.rightIcon == "m-icon-loading3" ||
        props.rightIcon == "m-icon-loading4" ||
        props.rightIcon == "m-icon-loading5" ||
        props.rightIcon == "m-icon-loading6"
        ? "ih-icon-loading"
        : ""
      : "",
  ];
});
const styles = computed(() => {
  return [
    props.customColor == ""
      ? {}
      : props.type == "default"
      ? {}
      : mBtnDeaultStyle,
  ];
});
</script>
<style>
@import url("../../styles/iconfont.css");
@import url("../../styles/main.css");
</style>
<style scoped lang="scss">
.ih-button {
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
  }
  span {
    display: inline-block;
  }
}
.ih-button-medium {
  padding: 8px 18px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 14px;
  }
}
.ih-button-small {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 13px;
  }
}
.ih-button-mini {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 12px;
  }
}
.ih-button-round {
  border-radius: 22px;
}
.ih-button-default {
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #333;
  &:hover {
    color: #0e80eb;
    border-color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ih-button-custom {
  color: #333;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ih-button-primary {
  border: 1px solid $primary;
  color: #fff;
  background-color: $primary;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ih-button-success {
  border: 1px solid #09b63d;
  color: #fff;
  background-color: #09b63d;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ih-button-danger {
  border: 1px solid #ec3437;
  background: #ec3437;
  color: #fff;
  &:hover {
    color: #fff;
    border-color: #ec3437;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ih-button-warning {
  border: 1px solid #f57b29;
  background: #f57b29;
  color: #fff;
  &:hover {
    color: #fff;
    border-color: #f57b29;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ih-button-text {
  border: 1px solid #fff;
  background: none;
  color: #0e80eb;
  &:hover {
    color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.ih-button-dashed {
  border: 1px dashed #d9d9d9;
  background: #fff;
  color: #333;
  &:hover {
    color: #0e80eb;
    border-color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}

.ih-button-default-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.ih-button-primary-disabled {
  cursor: no-drop;
  border: 1px solid #0e80eb;
  background: #0e80eb;
  opacity: 0.5;
  color: #fff;
}
.ih-button-success-disabled {
  cursor: no-drop;
  border: 1px solid #09b63d;
  background: #09b63d;
  opacity: 0.5;
  color: #fff;
}
.ih-button-danger-disabled {
  cursor: no-drop;
  border: 1px solid #ec3437;
  background: #ec3437;
  opacity: 0.5;
  color: #fff;
}
.ih-button-warning-disabled {
  cursor: no-drop;
  border: 1px solid #f57b29;
  background: #f57b29;
  opacity: 0.5;
  color: #fff;
}
.ih-button-dashed-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.ih-button-text-disabled {
  cursor: no-drop;
  border: 1px solid #fff;
  background: none;
  opacity: 0.5;
  color: #0e80eb;
}
.ih-button-custom-disabled {
  cursor: no-drop;
  opacity: 0.5;
}

.ih-icon-loading {
  animation: icon-loading 1.5s linear infinite;
  -webkit-animation: icon-loading 1.5s linear infinite;
}
@keyframes icon-loading {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>