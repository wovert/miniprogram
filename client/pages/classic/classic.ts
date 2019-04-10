//index.js
//获取应用实例
import { IMyApp } from '../../app'
import { ClassicModel } from '../../models/classic'
import { LikeModel } from '../../models/like'
let classicModel: ClassicModel = new ClassicModel()
let likeModel: LikeModel = new LikeModel()

const app = getApp<IMyApp>()

Page({
  data: {
    dataInfo: null,
    test: 1
  },

  /**
   * 监听页面加载
   */
  onLoad () {
    classicModel.getLatest((res: Object) => {
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

  onLike: function (event: Object) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.dataInfo.id, this.data.dataInfo.type)
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
