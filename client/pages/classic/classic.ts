//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { Http } from '../../utils/http'

const app = getApp<IMyApp>()

Page({
  data: {
    test: 1
  },

  /**
   * 监听页面加载
   */
  onLoad () {
    // 异步调用
    // wx.request({
    //   url: 'http://bl.7yue.pro/v1/classic/latest',
    //   header: {
    //     appkey: 'RdshydjBvcYZhMZC'
    //   },
    //   success: (res: any) => {
    //     console.log(this.data)
    //     console.log(res)
    //   }
    // })
    Http.request({
      url: 'classic/latest',
      success: (res: Object) => {
        console.log(res)
      },
      fail: (err: Object) => {
        // console.log(err)
      }
    })

  },

  /** 
   * 页面渲染完成 
   */
  onReady () {
  },
  getUserInfo(e: any) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData!({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
