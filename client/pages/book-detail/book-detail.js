"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../../models/book");
var bookModel = new book_1.BookModel();
Page({
    data: {
        comments: [],
        book: null,
        likeStatus: false,
        likeCount: 0
    },
    onLoad: function (options) {
        var _this = this;
        var bid = options.bid;
        var detail = bookModel.getDetail(bid);
        var comments = bookModel.getComments(bid);
        var likeStatus = bookModel.getLikeStatus(bid);
        detail.then(function (res) {
            _this.setData({
                book: res
            });
        });
        comments.then(function (res) {
            _this.setData({
                comments: res.comments
            });
        });
        likeStatus.then(function (res) {
            _this.setData({
                likeStatus: res.like_status,
                likeCount: res.fav_nums
            });
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLWRldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUUwQjtBQUMxQixJQUFNLFNBQVMsR0FBUSxJQUFJLGdCQUFTLEVBQUUsQ0FBQTtBQUV0QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLElBQUksRUFBRSxJQUFJO1FBQ1YsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLENBQUM7S0FDYjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFBdEIsaUJBd0JQO1FBdkJDLElBQU0sR0FBRyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUE7UUFDL0IsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QyxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7YUFDdkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFRixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVztnQkFDM0IsU0FBUyxFQUFFLEdBQUcsQ0FBQyxRQUFRO2FBQ3hCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb29rTW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2snXG5jb25zdCBib29rTW9kZWw6IGFueSA9IG5ldyBCb29rTW9kZWwoKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGNvbW1lbnRzOiBbXSxcbiAgICBib29rOiBudWxsLFxuICAgIGxpa2VTdGF0dXM6IGZhbHNlLFxuICAgIGxpa2VDb3VudDogMFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYmlkOiBudW1iZXIgPSBvcHRpb25zLmJpZFxuICAgIGNvbnN0IGRldGFpbCA9IGJvb2tNb2RlbC5nZXREZXRhaWwoYmlkKVxuICAgIGNvbnN0IGNvbW1lbnRzID0gYm9va01vZGVsLmdldENvbW1lbnRzKGJpZClcbiAgICBjb25zdCBsaWtlU3RhdHVzID0gYm9va01vZGVsLmdldExpa2VTdGF0dXMoYmlkKVxuXG4gICAgZGV0YWlsLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBib29rOiByZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbW1lbnRzLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjb21tZW50czogcmVzLmNvbW1lbnRzXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBsaWtlU3RhdHVzLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaWtlU3RhdHVzOiByZXMubGlrZV9zdGF0dXMsXG4gICAgICAgIGxpa2VDb3VudDogcmVzLmZhdl9udW1zXG4gICAgICB9KVxuICAgIH0pICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfVxufSkiXX0=