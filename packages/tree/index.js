import iTree from './index.vue';
iTree.install = app => {
  app.component(iTree.name, iTree)
} 
export default iTree