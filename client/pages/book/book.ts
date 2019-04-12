import { BookModel } from '../../models/book'
const bookModel: BookModel = new BookModel()

Page({
  data: {
    books: []
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
  }
})
