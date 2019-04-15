Component({
  properties: {
    book: Object
  },

  data: {

  },

  methods: {
    onTap (event: any) {
      const bid: number = this.properties.book.id
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })
    }
  }
})
