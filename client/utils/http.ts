import {config} from '../config'

const tips:Object = {
  1: '抱歉，出现一个错误',
  1005: 'appkey无效，请在www.wovert.com申请',
  3000: '期刊不存在'
}

const showError = (errorCode: Number) => {
  errorCode = !errorCode ? 1 : errorCode
  wx.showToast({
    title: tips[errorCode],
    icon: 'none',
    duration: 2000
  })
}
class Http {
  request (params: Object) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method ? params.method : 'GET', 
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success!: (res?: Object) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res.data)
        } else {
         showError(res.data.error_code)
        }
      },
      fail!: () => {
        showError(1)
      }
    })
  }
}

export {Http}