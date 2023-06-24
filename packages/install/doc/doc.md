# 安装使用

## 安装

#### 推荐使用 _npm_ 的方式安装,也可选用 _cpm_ 或 _yarn_ 进行安装。

```
npm install  ih-ui
cnpm install  ih-ui --save
yarn add ih-ui
```

<br/>

## 使用 ih-ui

#### 需要注意的是 css 样式文件需要您单独引入。

```javascript
/*js*/
import { createApp } from "vue";
import App from "@/App.vue";
import ihUi from "ih-ui";
import "../node_modules/ih-ui/dist/style.css";

const app = createApp(App);
app.use(ihUi);
app.mount("#app");
```

<br/>

## 愉快开始

#### 至此 ih-ui 就引入完成并且可以使用了。

```html
<!-- html -->
<i-button>默认按钮</i-buttonn>
<i-button type="primary">主要按钮</i-button>
```

<br/>

## 按需引用

#### 您可以根据个人需要按需引用组件来使用，按需引用时不需要使用 <font color=#0e80eb>**app.use()**</font> 方法注册。

```javascript
/*js*/
import { iButton, mInput } from "ih-ui";
```

<br/>

```html
<i-button>点击</i-button>
<m-input v-model="value" placeholder="基本使用"></m-input>
```

<br/>
