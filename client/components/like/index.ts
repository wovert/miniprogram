Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
      value: false,
      observer () {
      }
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike () {
      let like = !this.properties.like
      let count = this.properties.count
      count = like ? count+1 : count-1
      this.setData({
        count,
        like
      })
      // 激活
      let behavior = this.properties.like ? 'like': 'cancle'
      // 自定义事件名称
      this.triggerEvent(
        'like', 
        {
          behavior
        }, 
        {}
      )
    }
  }
})
