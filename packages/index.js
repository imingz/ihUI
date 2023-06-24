//导入组件
import iButton from "./button/index";
import iInput from "./input/index";
import iTable from "./table/index";
import iSelect from "./select/index";
import iDropdown from "./dropDown/index";
import iRadio from "./radio/index";
import iCheckbox from "./checkbox/index";
import Message from "./message/index";
import Confirm from "./confirm/index";
import iModal from "./modal/index";
import mDrawer from "./drawer/index";
import Loading from "./loading/index";
import iSwitch from "./switch/index";
import iTree from "./tree/index";
import iOptfile from "./optfile/index";
import iTextarea from "./textarea/index";
import iRow from "./mrow/index";
import iCol from "./mcol/index";
import iPagination from "./pagination/index";
import $ih from "./function/index";
import iDate from "./date/index";
import iBacktop from "./backtop/index";
import iCollapse from "./collapse/index";
import iCollapseItem from "./collapse/item/index";
import iMenu from "./menu/index";
import iTabs from "./tabs/index";
import iSpace from "./Space/index";
import mPopover from './popover/index';
import mProgress from './progress/index'
import iColorPicker from './colorPicker/index'
import mBreadcrumb from './breadcrumb/index'
import iBadge from './badge/index'
import mDivider from './divider/index'
//存在所有组件
const components = [
  iButton,
  iInput,
  iTable,
  iSelect,
  iDropdown,
  iRadio,
  iCheckbox,
  iModal,
  mDrawer,
  iSwitch,
  iTree,
  iOptfile,
  iTextarea,
  iRow,
  iCol,
  iPagination,
  iDate,
  iBacktop,
  iCollapse,
  iCollapseItem,
  iMenu,
  iTabs,
  iSpace,
  mPopover,
  mProgress,
  iColorPicker,
  mBreadcrumb,
  iBadge,
  mDivider
];
const install = (app) => {
  components.forEach((i) => {
    app.use(i)
  })
  app.config.globalProperties.$message = Message
  app.config.globalProperties.$Confirm = Confirm
  app.config.globalProperties.$Loading = Loading
  app.config.globalProperties.$ih = $ih
}
const ihUi = {
  version: '0.4.1',
  install
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  // 以下是具体的组件列表
  iButton,
  iInput,
  iTable,
  iSelect,
  iDropdown,
  iRadio,
  iCheckbox,
  Message,
  Confirm,
  iModal,
  mDrawer,
  Loading,
  iSwitch,
  iTree,
  iOptfile,
  iTextarea,
  iRow,
  iCol,
  iPagination,
  $ih,
  iDate,
  iBacktop,
  iCollapse,
  iCollapseItem,
  iMenu,
  iTabs,
  mPopover,
  iSpace,
  mProgress,
  iColorPicker,
  mBreadcrumb,
  iBadge,
  mDivider
}
export default ihUi
