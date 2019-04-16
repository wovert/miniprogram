"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../../models/book");
var like_1 = require("../../models/like");
var bookModel = new book_1.BookModel();
var likeModel = new like_1.LikeModel();
Page({
    data: {
        comments: [],
        book: null,
        likeStatus: false,
        likeCount: 0,
        posting: false
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
    onLike: function (event) {
        var likeOrCancle = event.detail.behavior;
        console.log(this.data.book);
        likeModel.like(likeOrCancle, this.data.book.id, 400);
    },
    onFakePost: function (event) {
        this.setData({
            posting: true
        });
    },
    onCancel: function (event) {
        this.setData({
            posting: false
        });
    },
    onPost: function (event) {
        var _this = this;
        var comment = event.detail.text || event.detail.value;
        if (!comment) {
            return;
        }
        if (comment.length > 12) {
            wx.showToast({
                title: '短评最多12个字',
                icon: 'none'
            });
            return;
        }
        bookModel.postComment(this.data.book.id, comment).then(function (res) {
            wx.showToast({
                title: '+ 1',
                icon: 'none'
            });
            _this.data.comments.unshift({
                content: comment,
                nums: 1
            });
            _this.setData({
                comments: _this.data.comments,
                posting: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib29rLWRldGFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUE2QztBQUM3QywwQ0FBNkM7QUFDN0MsSUFBTSxTQUFTLEdBQVEsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFDdEMsSUFBTSxTQUFTLEdBQVEsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFFdEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsSUFBSTtRQUNWLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxDQUFDO1FBQ1osT0FBTyxFQUFFLEtBQUs7S0FDZjtJQUtELE1BQU0sRUFBRSxVQUFVLE9BQVk7UUFBdEIsaUJBd0JQO1FBdkJDLElBQU0sR0FBRyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUE7UUFDL0IsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN2QyxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzNDLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDbkIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxJQUFJLEVBQUUsR0FBRzthQUNWLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO1FBRUYsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7YUFDdkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7UUFFRixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVztnQkFDM0IsU0FBUyxFQUFFLEdBQUcsQ0FBQyxRQUFRO2FBQ3hCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU0sRUFBTixVQUFRLEtBQVU7UUFDaEIsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBRUQsVUFBVSxFQUFWLFVBQVksS0FBVTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQVUsS0FBVTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTSxFQUFOLFVBQVEsS0FBVTtRQUFsQixpQkE4QkM7UUE3QkMsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFFdkQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU07U0FDUDtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDdkIsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7WUFDRixPQUFNO1NBQ1A7UUFDRCxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQzlELEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osSUFBSSxFQUFFLE1BQU07YUFDYixDQUFDLENBQUE7WUFFRixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixJQUFJLEVBQUUsQ0FBQzthQUNSLENBQUMsQ0FBQTtZQUVGLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtnQkFDN0IsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2snXG5pbXBvcnQgeyBMaWtlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlrZSdcbmNvbnN0IGJvb2tNb2RlbDogYW55ID0gbmV3IEJvb2tNb2RlbCgpXG5jb25zdCBsaWtlTW9kZWw6IGFueSA9IG5ldyBMaWtlTW9kZWwoKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGNvbW1lbnRzOiBbXSxcbiAgICBib29rOiBudWxsLFxuICAgIGxpa2VTdGF0dXM6IGZhbHNlLFxuICAgIGxpa2VDb3VudDogMCxcbiAgICBwb3N0aW5nOiBmYWxzZVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9uczogYW55KSB7XG4gICAgY29uc3QgYmlkOiBudW1iZXIgPSBvcHRpb25zLmJpZFxuICAgIGNvbnN0IGRldGFpbCA9IGJvb2tNb2RlbC5nZXREZXRhaWwoYmlkKVxuICAgIGNvbnN0IGNvbW1lbnRzID0gYm9va01vZGVsLmdldENvbW1lbnRzKGJpZClcbiAgICBjb25zdCBsaWtlU3RhdHVzID0gYm9va01vZGVsLmdldExpa2VTdGF0dXMoYmlkKVxuXG4gICAgZGV0YWlsLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBib29rOiByZXNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbW1lbnRzLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjb21tZW50czogcmVzLmNvbW1lbnRzXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBsaWtlU3RhdHVzLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaWtlU3RhdHVzOiByZXMubGlrZV9zdGF0dXMsXG4gICAgICAgIGxpa2VDb3VudDogcmVzLmZhdl9udW1zXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgb25MaWtlIChldmVudDogYW55KSB7XG4gICAgY29uc3QgbGlrZU9yQ2FuY2xlID0gZXZlbnQuZGV0YWlsLmJlaGF2aW9yXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLmJvb2spXG4gICAgbGlrZU1vZGVsLmxpa2UobGlrZU9yQ2FuY2xlLCB0aGlzLmRhdGEuYm9vay5pZCwgNDAwKVxuICB9LFxuXG4gIG9uRmFrZVBvc3QgKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcG9zdGluZzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgb25DYW5jZWwgKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgcG9zdGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIG9uUG9zdCAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGNvbW1lbnQgPSBldmVudC5kZXRhaWwudGV4dCB8fCBldmVudC5kZXRhaWwudmFsdWVcblxuICAgIGlmICghY29tbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGNvbW1lbnQubGVuZ3RoID4gMTIpIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn55+t6K+E5pyA5aSaMTLkuKrlrZcnLFxuICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgYm9va01vZGVsLnBvc3RDb21tZW50KHRoaXMuZGF0YS5ib29rLmlkLCBjb21tZW50KS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICcrIDEnLFxuICAgICAgICBpY29uOiAnbm9uZSdcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZGF0YS5jb21tZW50cy51bnNoaWZ0KHtcbiAgICAgICAgY29udGVudDogY29tbWVudCxcbiAgICAgICAgbnVtczogMVxuICAgICAgfSlcblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY29tbWVudHM6ICB0aGlzLmRhdGEuY29tbWVudHMsXG4gICAgICAgIHBvc3Rpbmc6IGZhbHNlXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfVxufSkiXX0=