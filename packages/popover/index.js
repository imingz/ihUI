import iPopover from './index.vue';
iPopover.install = app => {
    app.component(iPopover.name, iPopover)
}
export default iPopover