import { 
  Http
} from '../utils/http-promise'

export class BookModel extends Http {

  getHostList () {
    return this.request({
      url: 'book/hot_list'
    })
  }

  getMyBookCount () {
    return this.request({
      url: 'book/favor/count'
    })
  }

  getDetail (bid: number) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }

  getLikeStatus (bid: number) {
    return this.request({
      url: `/book/${bid}/favor`
    })
  }

  getComments(bid: number) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }
}