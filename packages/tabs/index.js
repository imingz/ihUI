import iTabs from './index.vue';
import iTabPane from './pane.vue';
iTabs.install = app => {
  app.component(iTabs.name, iTabs)
  app.component(iTabPane.name,iTabPane)
}
export default iTabs