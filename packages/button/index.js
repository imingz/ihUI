import iButton from './index.vue'
iButton.install = app => {
  app.component(iButton.name, iButton)
} 
export default iButton