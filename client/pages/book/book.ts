import { BookModel } from '../../models/book'
const bookModel: BookModel = new BookModel()

Page({
  data: {
  },
  onLoad () {
    // const promise = new Promise((resolve: any, reject:any) => {
    //   wx.getSystemInfo({
    //     success: (res: any) => resolve(res),
    //     fail: (error: any) => reject(error)
    //   })
    // })
    // promise.then(
    //   (res: any) => console.log(res),
    //   (error: any) => console.log(error)
    // )

    // const hostList = bookModel.getHostList()
    // hostList.then(res => {
    //   console.log(res)
    //   bookModel.getMyBookCount().then(res => {
    //     console.log(res)
    //     bookModel.getMyBookCount().then(res => {
    //       console.log(res)
    //     })
    //   })
    // })

    bookModel.getHostList()
    .then(res => {
      console.log(res)
      return bookModel.getMyBookCount()
    })
    .then(res => {
      console.log(res)
      return bookModel.getMyBookCount()
    })
    .then(res => {
      console.log(res)
    })

  }
})
