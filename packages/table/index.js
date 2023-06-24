import iTable from './index.vue';
iTable.install = app => {
  app.component(iTable.name, iTable)
} 
export default iTable