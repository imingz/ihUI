import iModal from './index.vue';
iModal.install = app => {
  app.component(iModal.name, iModal)
} 
export default iModal