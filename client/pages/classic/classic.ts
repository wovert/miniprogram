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
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false
  },

  /**
   * 监听页面加载
   */
  onLoad () {
    /// 数据保存在 Storage
    classicModel.getLatest((res: any) => {
      // this._getLikeStatus(res.id, res.type)
      this.setData({
        dataInfo: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },

  /** 
   * 页面渲染完成 
   */
  onReady () {
  },

  onLike (event: any) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.data.dataInfo.id, this.data.dataInfo.type)
  },

  onPrevious () {
    this._updateClassic('previous')
  },

  onNext () {
    this._updateClassic('next')
  },

  // getUserInfo(e: any) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData!({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },

  _updateClassic (nextOrPrevious: string) {
    classicModel.getClassic(this.data.dataInfo.index, nextOrPrevious, (res: any) => {
      this._getLikeStatus(res.id, res.type)
      this.setData({
        dataInfo: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  _getLikeStatus (id: number, category: number) {
    likeModel.getClassicLikeStatus(id, category, (res: any) => {
      this.setData({
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  }
})
