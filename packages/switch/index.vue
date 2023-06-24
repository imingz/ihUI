<template>
  <div :class="['ih-switch-default',customClass]">
    <span class="ih-switch-left-text"  v-if="textAlign=='left'&&closeText!=''&&activeText!=''" :style="{'color':modelValue?activeColor:closeColor}">{{switchText}}</span>
    <div class="ih-switch-content"  :class="{'ih-switch-disabled':disabled}" @click="handleSwitch" :style="[switchStyle,{'width':width+'px'}]">
      <span class="ih-switch-round" :style="[roundStyle]"></span>
      <span class="ih-switch-flagtext" :style="flagTextStyle" v-if="showTipsText">{{flagText}}</span>
    </div>
    <span class="ih-switch-right-text" v-if="textAlign=='right'&&closeText!=''&&activeText!=''" :style="{'color':modelValue?activeColor:closeColor}">{{switchText}}</span>
  </div>
</template>
<script>
import { computed, onMounted, reactive, ref, watchEffect } from 'vue'
export default{
  name:"iSwitch"
}
</script>
<script setup>
const emit = defineEmits(['update:modelValue','change'])
const props = defineProps({
  modelValue:Boolean,
  width:{
    type:Number,
    default:45
  },
  closeColor:{
    type:String,
    default:"#BFBFBF"
  },
  activeColor:{
    type:String,
    default:"#0e80eb"
  },
  closeText:{
    type:String,
    default:""
  },
  activeText:{
    type:String,
    default:""
  },
  textAlign:{
    type:String,
    default:"left"
  },
  showTipsText:Boolean,
  disabled:Boolean,
  customClass:String,
})
const roundStyle = reactive({"left":'2px'})
const flagTextStyle = reactive({"left":props.width-20+'px'})
const switchStyle = reactive({"background":props.closeColor})
const flagText = ref('关')
const switchText = ref(props.modelValue?props.activeText:props.closeText)
const flag = ref(props.modelValue)
const handleSwitch = () =>{
  if(!props.disabled){
    flag.value = !flag.value
    emit('update:modelValue',flag.value)
    emit('change',flag.value)
    
  }
}
watchEffect(()=>{
  roundStyle.left = props.modelValue?props.width-20+'px':'2px'
  flagTextStyle.left = props.modelValue?'6px':props.width-20+'px'
  switchStyle.background = props.modelValue?props.activeColor:props.closeColor
  if(props.modelValue){
    flagText.value = "开"
    switchText.value = props.activeText
  }else{
    flagText.value = "关"
    switchText.value = props.closeText
  }
})
</script>

<style lang="scss" scoped>
.ih-switch-default{
  display: flex;
  align-items: center;
  .ih-switch-left-text,.ih-switch-right-text{
    font-size:14px;
    transition: all .3s ease;
    color:#505050
  }
  .ih-switch-left-text{
    margin-right:7px;
  }
  .ih-switch-right-text{
    margin-left:7px;
  }
  .ih-switch-content{
    width: 40px;
    height: 20px;
    background:#BFBFBF;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: all .3s ease;
    .ih-switch-round{
      width: 18px;
      height: 18px;
      display: inline-block;
      border-radius: 50%;
      background: #fff;
      position: absolute;
      top:1px;
      transition: all .3s ease;
    }
    .ih-switch-flagtext{
      height: 18px;
      display: inline-block;
      border-radius: 50%;
      color: #fff;
      position: absolute;
      top:1px;
      transition: all .3s ease;
      font-size:12px;
      line-height: 18px;
    }
  }
  .ih-switch-disabled{
    opacity: .5;
    cursor: no-drop;
  }
}


</style>