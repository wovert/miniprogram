import { BookModel } from '../../models/book'
const bookModel: BookModel = new BookModel()

Page({
  data: {
    books: [],
    searching: false
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
  }
})
