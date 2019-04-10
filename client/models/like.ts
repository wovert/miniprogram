import { Http } from '../utils/http'

export class LikeModel extends Http {
  like (behavior: String, art_id: Number, type: Number) {
    let url: String = behavior === 'like' ? 'like' : 'like/cancel'
    const data = {
      art_id,
      type
    }
    this.request({
      url,
      method: 'POST',
      data
    })
  }
}