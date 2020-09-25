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
      <van-form ref="myform">
        <!-- 手机号 -->
        <van-field
          :rules="rules.mobile"
          v-model="use.mobile"
          name="mobile"
          placeholder="请输入手机号"
        >
          <template #left-icon>
            <i class="iconfont iconbianzu1"></i>
          </template>
        </van-field>
        <!-- 验证码 -->
        <van-field
          :rules="rules.code"
          v-model="use.code"
          placeholder="请输入验证码"
        >
          <template #button>
            <span @click="getCode" class="mycolor">获取验证码</span>
          </template>
          <template #left-icon>
            <i class="iconfont iconyanzhengma"></i>
          </template>
        </van-field>
        <!-- 同意协议 -->
        <p class="word">
          登录既同意
          <span class="mycolor">《用户使用协议》</span>
          和
          <span class="mycolor">《隐私协议》</span>
        </p>
        <div class="loginBtn">
          <van-button round block type="danger" native-type="submit">
            确定
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// 导入 axios
import axios from 'axios'

export default {
  data () {
    return {
      use: {
        mobile: '18888881111',
        code: ''
      },
      // 添加验证规则
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'onBlur' }, // 非空判断
          {
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: '请输入正确的手机号',
            trigger: 'onBlur'
          }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'onBlur' }, // 非空判断
          {
            pattern: /^\d{4}$/,
            message: '请输入正确的验证码',
            trigger: 'onBlur'
          }
        ]
      }
    }
  },
  methods: {
    // 得到服务器中的验证码
    getCode () {
      // 校验手机号是否合法
      this.$refs.myform
        .validate('mobile')
        .then(() => {
          console.log('then')
          // 添加加载动画
          this.$toast.loading({
            duration: 0, // 一直显示
            message: '加载中', // 加载的文本
            forbidClick: true // 禁止点击背景
          })
          axios({
            url: 'http://localhost:1337/au/code',
            method: 'POST',
            data: {
              mobile: this.use.mobile
            }
          }).then(res => {
            // 得到验证码
            console.log(res.data.data)
            // 提示验证码
            this.$toast.success(res.data.data)
          })
        })
        .catch(error => {
          console.log('catch')
          // 打印校验的信息
          this.$toast.fail(error.message)
        })
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
  .word {
    margin: 15px 0 12px 0;
  }
  .loginBtn {
    margin-top: 44px;
  }
}
</style>
