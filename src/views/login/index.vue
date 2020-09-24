<template>
  <div class="login">
    <!-- 头部导航 -->
    <van-nav-bar>
      <template #left>
        <i class="iconfont iconbtn_nav_back mylefticon"></i>
      </template>
    </van-nav-bar>
    <!-- 内容区域 -->
    <div class="content">
      <!-- 标题 -->
      <h2>您好，请登录</h2>
      <!-- 表单区域 -->
      <van-form>
        <van-field v-model="use.mobile" placeholder="请输入手机号">
          <template #left-icon>
            <i class="iconfont iconbianzu1"></i>
          </template>
        </van-field>
        <van-field v-model="use.code" placeholder="请输入验证码">
          <template #button>
            <span class="mycolor">获取验证码</span>
          </template>
          <template #left-icon>
            <i class="iconfont iconyanzhengma"></i>
          </template>
        </van-field>
        <div>
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      use: {
        mobile: '18888881111',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
// scoped：让样式只在当前组件中起作用
// 为了能够让设置了 scoped 的样式响应到子组件中内部去，可以使用一个选择器： 深度选择器 /deep/
.login {
  font-size: 12px;
  /deep/ .van-nav-bar__left {
    padding-left: 0px !important;
  }
  .mylefticon {
    font-size: 44px;
  }
  .content {
    padding: 0 15px;
    h2 {
      margin-top: 50px;
      margin-bottom: 63px;
    }
  }
  .mycolor {
    color: #16bed8;
  }
}
</style>
