<template>
  <div class="uservant">
    <h1>使用 vant</h1>
    <h3>1.0 使用 button 组件</h3>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <h3>2.0 添加一个 div</h3>
    <div class="box"></div>
    <h3>3.0 使用 iconfont</h3>
    <i class="iconfont iconicon_footbar_gs_nor myicon"></i>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.uservant {
  font-size: 16px;
}
.box {
  width: 200px;
  height: 200px;
  border: 5px solid #ccc;
}
.myicon {
    font-size: 100px;
    color: pink;
}
</style>
