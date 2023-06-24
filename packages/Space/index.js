import iSpace from "./index.vue";
iSpace.install = (app) => {
  app.component(iSpace.name, iSpace);
};
export default iSpace;
