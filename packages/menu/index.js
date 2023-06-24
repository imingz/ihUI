import iMenu from './index.vue';
iMenu.install = app => {
  app.component(iMenu.name, iMenu)
} 
export default iMenu