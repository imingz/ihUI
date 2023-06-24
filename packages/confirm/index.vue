<template>
<Transition name="fade">
  <div :class="['ih-confirm',customClass]" v-if="isShow">
      <div class="ih-wrapper">
        <div class="ih-header">
          <h3>{{title}}</h3>
          <a href="JavaScript:;" class="m-icon-close" @click="cancelCallback" v-if="closeShow"></a>
        </div>
        <div class="ih-body">
          <i :class="['icon-warning',icon]"></i>
          <span>{{text}}</span>
        </div>
        <div class="ih-footer">
          <i-button @click="cancelCallback" size="small" style="margin-right:10px" v-if="cancelShow">{{cancelText}}</i-button>
          <i-button @click="confirmCallback" size="small" type="primary" v-if="confirmShow">{{confirmText}}</i-button>
        </div>
      </div>
    
  </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted} from 'vue'
import iButton from '../button/index'
const props = defineProps({
  title: {
    type: String,
    default: '提示'
  },
  text: {
    type: String,
    default: ''
  },
  icon:{
    type:String,
    default:"m-icon-warning"
  },
  confirmText:{
    type:String,
    default:"确认"
  },
  cancelText:{
    type:String,
    default:"取消"
  },
  confirmShow:{
    type:Boolean,
    default:true
  },
  cancelShow:{
    type:Boolean,
    default:true
  },
  closeShow:{
    type:Boolean,
    default:true
  },
  customClass:String,
  // 确认按钮
  confirmCallback: {
    type: Function,
    default: () => {}
  },
  // 取消按钮
  cancelCallback: {
    type: Function,
    default: () => {}
  },
})
const isShow = ref(false)
onMounted(() => {
  isShow.value = true
})
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.ih-confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0.4);
  .ih-wrapper {
    width: 400px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 12px 0 rgba(7, 7, 7, 0.1);
    .ih-header{
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      color:#2e2e2e
    }
    .ih-footer {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
    }
    .ih-body {
      padding: 20px 20px;
      font-size: 14px;
      color:#505050;
      display: flex;
      align-items: center;
      .icon-warning {
        color: #f57b29;
        margin-right: 3px;
        font-size: 16px;
      }
    }
    .ih-footer {
      text-align: right;
      .xtx-button {
        margin-left: 20px;
      }
    }
    .ih-header {
      position: relative;
      h3 {
        font-weight: normal;
        font-size: 16px;
        margin:5px 0;
      }
      a {
        position: absolute;
        right: 15px;
        top: 12px;
        font-size: 20px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;
        font-size: 16px;
        text-decoration: none;
        &:hover {
          color: #666;
        }
      }
    }
  }
}
</style>