import { BookModel } from '../../models/book'
import { LikeModel } from '../../models/like'
const bookModel: any = new BookModel()
const likeModel: any = new LikeModel()

Page({
  data: {
    comments: [],
    book: null,
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options: any) {
    wx.showLoading()
    const bid: number = options.bid
    const detail = bookModel.getDetail(bid)
    const comments = bookModel.getComments(bid)
    const likeStatus = bookModel.getLikeStatus(bid)

    // Promise.all: 并行多个请求，全部请求完毕之后回调
    // Promise.race: 三个请求当中有一个请求完毕就回调
    Promise.all([detail, comments, likeStatus]).then((res: any) => {
      this.setData({
        book: res[0],
        comments: res[1].comments,
        likeStatus: res[2].like_status,
        likeCount: res[2].fav_nums
      })
      wx.hideLoading()
    })

    // detail.then((res: any) => {
    //   this.setData({
    //     book: res
    //   })
    // })

    // comments.then((res: any) => {
    //   this.setData({
    //     comments: res.comments
    //   })
    // })

    // likeStatus.then((res: any) => {
    //   this.setData({
    //     likeStatus: res.like_status,
    //     likeCount: res.fav_nums
    //   })
    // })
  },

  onLike (event: any) {
    const likeOrCancle = event.detail.behavior
    console.log(this.data.book)
    likeModel.like(likeOrCancle, this.data.book.id, 400)
  },

  onFakePost (event: any) {
    this.setData({
      posting: true
    })
  },

  onCancel (event: any) {
    this.setData({
      posting: false
    })
  },

  onPost (event: any) {
    const comment = event.detail.text || event.detail.value

    if (!comment) {
      return
    }

    if (comment.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none'
      })
      return
    }
    bookModel.postComment(this.data.book.id, comment).then((res: any) => {
      wx.showToast({
        title: '+ 1',
        icon: 'none'
      })

      this.data.comments.unshift({
        content: comment,
        nums: 1
      })

      this.setData({
        comments:  this.data.comments,
        posting: false
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})