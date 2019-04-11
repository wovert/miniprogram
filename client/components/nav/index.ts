Component({
  properties: {
    title: String,
    first: Boolean, // 是否为第一期
    latest: Boolean,  // 是否为最后一期
  },

  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    leftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    rightSrc: 'images/triangle@right.png',
  },

  methods: {
    onLeft () {
      // 触发自定义事件
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {})
      }
    },
    onRight () {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
