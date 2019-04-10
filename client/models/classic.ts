import { Http } from '../utils/http'

export class ClassicModel extends Http {
  getLatest (callback) {
    this.request({
      url: 'classic/latest',
      success: (res: Object) => {
        callback(res)
      },
      fail: (err: Object) => {
        console.log(err)
      }
    })
  }
}