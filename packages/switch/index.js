import iSwitch from './index.vue';
iSwitch.install = app => {
  app.component(iSwitch.name, iSwitch)
} 
export default iSwitch