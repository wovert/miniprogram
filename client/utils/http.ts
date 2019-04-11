import {config} from '../config'

const tips: object = {
  1: '抱歉，出现一个错误',
  1005: 'appkey无效，请在www.wovert.com申请',
  3000: '期刊不存在'
}

class Http {
  request (params: object) {
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method ? params.method : 'GET', 
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success!: (res?: object) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res.data)
        } else {
         showError(res.data.error_code)
        }
      },
      fail!: () => showError(1)
    })
  }
  showError = (errorCode: number) => {
    errorCode = !errorCode ? 1 : errorCode
    const tip = tips[errorCode]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export {Http}