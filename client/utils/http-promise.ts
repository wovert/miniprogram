import {config} from '../config'

import {
  Base64
} from './base64'

import {
  Token
} from '../models/token'

const tips: object = {
  1: '抱歉，出现一个错误',
  1005: 'appkey无效，请在www.wovert.com申请',
  3000: '期刊不存在'
}

class Http {
  request({url='', data = {}, method ='GET'}) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method)
    })
  }

  showError(errorCode: number) {
    errorCode = !errorCode ? 1 : errorCode
    const tip = tips[errorCode]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }

  // 自动 无感知重新刷新令牌
  // 2小时
  // token 1小时59分59秒 超过2小时
  _request(url: string, resolve: any, reject: any, data: object = {}, method: string = 'GET', noRefetch = false) {
    wx.request({
      url: config.api_base_url + url,
      method,
      data,
      header: {
        'content-type': 'application/json',
        // 'appkey': config.appkey,
        Authorization: this._encode()
      },
      success: (res: object) => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          // reject()
          // _show_error(res.data.error_code)
          if (code == '403') {
            if (!noRefetch) {
              this._refetch(
                url,
                resolve,
                reject,
                data,
                method
              )
            }
          } else {
            reject()
            const error_code = res.data.error_code
            this._show_error(error_code)
          }
        }
      },
      fail: () => {
        reject()
        this._show_error(1)
      }
    })
  }
  _show_error(error_code: any) {
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
  _refetch(...param) {
    let token: any = new Token()
    token.getTokenFromServer((token) => {
      this._request(...param, true)
    })
  }
  _encode() {
    const token:string = wx.getStorageSync('token')
    const base64 = new Base64()
    const result = base64.encode(token + ':')
    // console.log(result)
    return 'Basic ' + result
  }
}

export {Http}