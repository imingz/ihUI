import iDrawer from './index.vue';
iDrawer.install = app => {
  app.component(iDrawer.name, iDrawer)
} 
export default iDrawer