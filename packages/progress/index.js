import iProgress from './index.vue';
iProgress.install = app => {
  app.component(iProgress.name, iProgress)
} 
export default iProgress