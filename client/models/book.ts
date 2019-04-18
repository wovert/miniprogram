import { 
  Http
} from '../utils/http-promise'

export class BookModel extends Http {

  getHostList () {
    return this.request({
      url: 'book/hot_list'
    })
  }

  search(start: number, q: string) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q,
        start
      }
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

  getComments (bid: number) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }

  postComment (book_id: number, content: string) {
    return this.request({
      url: `book/add/short_comment`,
      method: 'POST',
      data: {
        book_id,
        content
      }
    })
  }
}