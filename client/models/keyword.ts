import { 
  Http
} from '../utils/http-promise'

export class KeywordModel extends Http {
  key: string = 'q'
  maxLength: number = 10

  getHistory () {
    const words: any = wx.getStorageSync(this.key)
    if (!words) {
      return []
    }
    return words
  }

  getHot () {
    return this.request({
      url:'/book/hot_keyword'
    })
  }

  addToHistory (keyword: string) {
    let words: array = this.getHistory()
    const has: boolean = words.includes(keyword)
    // 队列
    if (!has) {
      // 数组末尾删除，keyword 数组第一位
      const len: number = words.length
      if (len >= this.maxLength) {
        words.pop()
      }
      words.unshift(keyword)
      wx.setStorageSync(this.key, words)
    }
  }
}