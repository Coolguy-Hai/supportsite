# supportsite

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 添加新问题及解决方案
### 1. 修改src/components/Questions.vue
修改<script>标签下data中的allData数组，按照模板添加数据。
> question: 问题
> description: 问题描述
> id: 问题id，上一个问题id加一

### 2. 添加对应解决方案

#### 2.1 导入图片资源

在static/solutions下新建对应文件夹，修改名字为solutionx，x为上一步中的问题id。将对应解决方案所需的视频及图片资源导入该文件夹中，建议命名为img1.png、img2.png...。

#### 2.2 添加SolutionX.vue

在src/components/solutions下复制template.vue，并修改名字为SolutionX.vue，其中X为上一步中的问题id。

修改<script>标签下的data，按照模板添加数据。

> title: 问题
>
> description: 问题描述
>
> video: 视频资源路径，优酷视频网站下点击分享->复制通用代码->将video设置为通用代码中的src。
>
> steps: 解决步骤数组
>
> ​	intro：步骤简介
>
> ​	imgs：图片资源数组，建议为 ../../../static/solutions/solutionx/imgx.png

#### 2.3 添加解决方案路由

修改src/router/index.js。

1. 导入组件：import SolutionX from "..components/solutions/SolutionX"

2. 修改routes数组：添加路由

   > path: /solutionx
   >
   > component: SolutionX