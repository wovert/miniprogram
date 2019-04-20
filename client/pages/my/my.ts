import { ClassicModel } from '../../models/classic'
import { BookModel } from '../../models/book'
import { promisic } from '../../utils/common'

const classicModel = new ClassicModel()
const bookModel = new BookModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false, // 用户是否授权
    userInfo: null,
    bookCount: 0,
    classics: null
  },

  onShow(options: any) {
    this.userAuthorized1()
    this.getMyBookCount()
    this.getMyFavor()
    // wx.getUserInfo({
    //   success:data=>{
    //     console.log(data)
    //   }
    // })
  },

  getMyFavor() {
    classicModel.getMyFavor((res: any) => {
      this.setData({
        classics: res
      })
    })
  },

  getMyBookCount() {
    bookModel.getMyBookCount()
      .then((res: any) => {
        this.setData({
          bookCount: res.count
        })
      })
  },

  userAuthorized1() {
    promisic(wx.getSetting)()
      .then((data: any) => {
        if (data.authSetting['scope.userInfo']) {
          return promisic(wx.getUserInfo)()
        }
        return false
      })
      .then((data: any) => {
        if (!data) return 
        this.setData({
          authorized: true,
          userInfo: data.userInfo
        })
      })
  },

  userAuthorized() {
    wx.getSetting({
      success: (data: any) => {
        if (data.authSetting['scope.userInfo']) {
          // 用户授权才能获取用户数据
          wx.getUserInfo({
            success: (data: any) => {
              console.log(data)
              this.setData({
                authorized: true,
                userInfo: data.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo(event: any) {
    console.log(event)    
    const userInfo = event.detail.userInfo
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
    }
  },

  onJumpToAbout(event: any) {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },

  onStudy(event: any) {
    wx.navigateTo({
      url: '/pages/course/course',
    })
  },

  onJumpToDetail(event: any){
    const cid = event.detail.cid
    // const type = event.detail.type
    wx.navigateTo({
      url:`/pages/book-detail/book-detail?bid=${cid}`
    })
  }
})

    // wx.navigateTo({
    //   url:`/pages/classic-detail/index?cid=${cid}
    //     &type=${type}`
    // })