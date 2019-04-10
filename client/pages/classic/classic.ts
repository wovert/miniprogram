//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { ClassicModel } from '../../models/classic'
let classic = new ClassicModel()

const app = getApp<IMyApp>()

Page({
  data: {
    dataInfo: {},
    test: 1
  },

  /**
   * 监听页面加载
   */
  onLoad () {
    classic.getLatest((res: Object) => {
      this.setData({
        dataInfo: res
      })
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
