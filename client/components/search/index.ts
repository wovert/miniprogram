import {
  KeywordModel
} from '../../models/keyword.js'

import {
  BookModel
} from '../../models/book.js'

// import {
//   paginationBev
// } from '../behaviors/pagination.js'

const keywordModel: KeywordModel = new KeywordModel()
const bookModel: KeywordModel = new BookModel()

Component({
  /**
   * 组件的属性列表
   */
  // behaviors: [paginationBev],
  properties: {
    more: {
      type: String,
      observer: 'loadMore'
      // true, true, true,
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
    loading: false, // 加载状态
    loadingCenter: false
  },

  // attached() {
  //   this.setData({
  //     historyWords: keywordModel.getHistory()
  //   })

  //   keywordModel.getHot().then((res: any) => {
  //     this.setData({
  //       hotWords: res.hot
  //     })
  //   })
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      if (!this.data.q) {
        return
      }
      if (this.isLocked()) {
        return
      }
      if (this.hasMore()) {
        this.locked()
        bookModel.search(this.getCurrentStart(), this.data.q)
          .then((res: any) => {
            this.setMoreData(res.books)
            this.unLocked()
          }, () => {
            this.unLocked()
          })
        // 死锁
      }
    },

    onCancel(event: any) {
      // this.initialize()
      this.triggerEvent('cancel', {}, {})
    },

    onDelete(event: any) {
      this.initialize()
      this._closeResult()
    },

    onConfirm(event: any) {
      // this._showResult()
      // this._showLoadingCenter()
      // this.initialize() 
      const q = event.detail.value || event.detail.text
      // 测试队列
      keywordModel.addToHistory(q)


      // this.setData({
      //   q
      // })
      // bookModel.search(0, q)
      //   .then((res: any) => {
      //     this.setMoreData(res.books)
      //     this.setTotal(res.total)
      //     keywordModel.addToHistory(q)
      //     this._hideLoadingCenter()
      //   })
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