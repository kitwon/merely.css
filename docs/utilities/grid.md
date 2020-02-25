---
title: Grid 栅格
---

24 栅格系统。栅格中不同的大小都能根据媒体查询断点实现响应式布局。

## 一般浮动布局
使用一般浮动布局时候需要使用`.clearfix`容器包裹住浮动的元素。

::: demo
<template>
  <div class="container-md clearfix">
    <div class="col-8 float-left border p4">One</div>
    <div class="col-8 float-left border p4">Two</div>
    <div class="col-8 float-left border p4">Three</div>
  </div>
</template>

<style lang="stylu">
.css {
  color: #fff;
}
</style>
:::

### 反向布局

::: demo
<template>
<div class="container-lg clearfix">
  <div class="col-4 float-right border p-4">
    One
  </div>
  <div class="col-4 float-right border p-4">
    Two
  </div>
  <div class="col-4 float-right border p-4">
    Three
  </div>
</div>
</template>
:::