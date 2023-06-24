import iDate from './index.vue';
iDate.install = app => {
  app.component(iDate.name, iDate)
} 
export default iDate