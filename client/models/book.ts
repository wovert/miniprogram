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
}