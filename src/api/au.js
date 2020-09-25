// 负责封装所有与登录相关的网络请求
// 导入自己封装的 request 文件
import _fetch from '@/utils/request'
// 封装方法：获取验证码
function apiGetCode (mobile) {
  return _fetch({
    url: '/au/code',
    method: 'POST',
    data: {
      mobile: mobile
    }
  })
}

// 暴露方法
export { apiGetCode }
