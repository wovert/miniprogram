import {config} from '../config'

const tips: object = {
  1: '抱歉，出现一个错误',
  1005: 'appkey无效，请在www.wovert.com申请',
  3000: '期刊不存在'
}

class Http {
  request({url, data = {}, method ='GET'}) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
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

  _request (url: string, resolve: any, reject: any, data: object = {}, method: string ='GET') {
    wx.request({
      url: config.api_base_url + url,
      method: method ? method : 'GET', 
      data: data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success!: (res?: object) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          reject()
          showError(res.data.error_code)
        }
      },
      fail: () => {
        reject()
        showError(1)
      }
    })
  }
}

export {Http}