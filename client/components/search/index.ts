import {
  KeywordModel
} from '../../models/keyword.js'

import {
  BookModel
} from '../../models/book.js'

import { paginationBev } from '../behaviors/pagination.js'

const keywordModel: KeywordModel = new KeywordModel()
const bookModel: BookModel = new BookModel()

Component({
  behaviors: [paginationBev],
  properties: {
    more: {
      type: String,
      observer: 'loadMore' // 监听函数
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [], // 历史搜索
    hotWords: [], // 热门搜索
    searching: false, // 是否显示搜索组件
    q: '',
    loadingCenter: false
  },

  attached () {
    this.setData({
      historyWords: keywordModel.getHistory()
    })
    keywordModel.getHot().then((res: any) => {
      this.setData({
        hotWords: res.hot
      })
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore () {
      // console.log(123123)
      // if (!this.data.q) {
      //   return
      // }
      // if (this.data.loading) { // 如果有锁，则返回
      //   return
      // }
      // const len = this.data.dataArray.length
      // this.data.loading = true // 锁
      // bookModel.search(len, this.data.q).then((res: any) => {
      //   const tempArr = this.data.dataArray.concat(res.books)
      //   this.setData({
      //     dataArray: tempArr,
      //     loading: false
      //   })
    
      // })

      if (this.isLocked()) {
        return
      }
      if (this.hasMore()) {
        this.locked() // 正在请求 锁定
        bookModel.search(this.getCurrentStart(), this.data.q)
          .then((res: any) => {
            this.setMoreData(res.books)
            this.unLocked() // 请求成功 解锁
          }, () => {
            this.unLocked() // 请求失败 解锁
          })
        // 死锁
      }
    },

    onCancel(event: any) {
      this.initialize()
      this.triggerEvent('cancel', {}, {})
    },

    onDelete(event: any) {
      this.initialize()
      this._closeResult()
    },

    onConfirm(event: any) {
      this._showResult()
      this._showLoadingCenter()
      this.initialize() 
      const q = event.detail.value || event.detail.text
      this.setData({q})
      bookModel.search(0, q)
        .then((res: any) => {
          this.setMoreData(res.books)
          this.setTotal(res.total)
          keywordModel.addToHistory(q)
          this._hideLoadingCenter()
        })
    },

    _showLoadingCenter() {
      this.setData({
        loadingCenter: true
      })
    },

    _hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      })
    },

    _showResult() {
      this.setData({
        searching: true
      })
    },

    _closeResult() {
      this.setData({
        searching: false,
        q: ''
      })
    }

    // onReachBottom(){
    //   console.log(123123)
    // }

    // scroll-view | Page onReachBottom

  }
})