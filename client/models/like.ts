import { Http } from '../utils/http-promise'

export class LikeModel extends Http {
  like (behavior: string, art_id: number, type: number) {
    const url: string = behavior === 'like' ? 'like' : 'like/cancel'
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

  getClassicLikeStatus (id: number, category: number, callback: any) {
    this.request({
      url: `classic/${category}/${id}/favor`,
      success: callback
    })
  }
}