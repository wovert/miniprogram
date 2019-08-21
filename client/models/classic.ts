import { 
  Http
} from '../utils/http-promise'

export class ClassicModel extends Http {

  getLatest (callback: any) {
    this.request({
      url: 'classic/latest',
      success: (res: any) => {
        callback(res)
        this._setLatestIndex(res.index)
        const key = this._getKey(res.index)
        wx.setStorageSync(key, res)
      }
    })
  }

  getClassic (index: number, nextOrPrevious: string, callback: any) {
    // 缓存中读取数据
    const key: string = nextOrPrevious === 'next' ? this._getKey(index + 1) : this._getKey(index -1)
    const classic: object = wx.getStorageSync(key)
    if (!classic) {
      // 从接口中获取数据
      this.request({
        url: `classic/${index}/${nextOrPrevious}`,
        success: (res: any) => {
          // 写入缓存
          wx.setStorageSync(this._getKey(res.index), res)
          callback(res)
        }
      })
    } else {
      callback(classic)
    }
  }

  isFirst (index: number) {
    return index === 1 ? true : false
  }

  isLatest (index: number) {
    return index === this._getLatestIndex() ? true : false
  }

  getMyFavor(success: any) {
    const params = {
        url: 'classic/favor',
        success: success
    }
    this.request(params)
  }
  getById(cid: number, type: number, success: any) {
    let params = {
        url: `classic/${type}/${cid}`,
        success: success
    }
    this.request(params)
  }
  _setLatestIndex (index: number) {
    // 同步更新
    wx.setStorageSync('latestIndex', index)
  }

  _getLatestIndex () {
    return parseInt(wx.getStorageSync('latestIndex'))
  }

  _getKey (index: number) {
    return `classic-${index}`
  }  
}