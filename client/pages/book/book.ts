import { BookModel } from '../../models/book'
import { random } from '../../utils/common'

const bookModel: BookModel = new BookModel()

Page({
  data: {
    books: [],
    searching: false,
    more: '' // 加载更多状态
  },
  onLoad () {
    bookModel.getHostList()
    .then(res => {
      this.setData({
        books: res
      })
      // console.log(res)
      // return bookModel.getMyBookCount()
    })
    // .then(res => {
    //   console.log(res)
    //   return bookModel.getMyBookCount()
    // })
    // .then(res => {
    //   console.log(res)
    // })
  },
  
  onSearch (event: any) {
    this.setData({
      searching: true
    })
  },

  onCancel (event: any) {
    this.setData({
      searching: false
    })
  },

  onReachBottom () {
    // 向 search 组件发送通知
    this.setData({
      more: random(16)
    })
  }

})
