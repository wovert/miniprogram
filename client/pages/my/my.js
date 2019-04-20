"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_1 = require("../../models/classic");
var book_1 = require("../../models/book");
var common_1 = require("../../utils/common");
var classicModel = new classic_1.ClassicModel();
var bookModel = new book_1.BookModel();
Page({
    data: {
        authorized: false,
        userInfo: null,
        bookCount: 0,
        classics: null
    },
    onShow: function (options) {
        this.userAuthorized1();
        this.getMyBookCount();
        this.getMyFavor();
    },
    getMyFavor: function () {
        var _this = this;
        classicModel.getMyFavor(function (res) {
            _this.setData({
                classics: res
            });
        });
    },
    getMyBookCount: function () {
        var _this = this;
        bookModel.getMyBookCount()
            .then(function (res) {
            _this.setData({
                bookCount: res.count
            });
        });
    },
    userAuthorized1: function () {
        var _this = this;
        common_1.promisic(wx.getSetting)()
            .then(function (data) {
            if (data.authSetting['scope.userInfo']) {
                return common_1.promisic(wx.getUserInfo)();
            }
            return false;
        })
            .then(function (data) {
            if (!data)
                return;
            _this.setData({
                authorized: true,
                userInfo: data.userInfo
            });
        });
    },
    userAuthorized: function () {
        var _this = this;
        wx.getSetting({
            success: function (data) {
                if (data.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (data) {
                            console.log(data);
                            _this.setData({
                                authorized: true,
                                userInfo: data.userInfo
                            });
                        }
                    });
                }
            }
        });
    },
    onGetUserInfo: function (event) {
        console.log(event);
        var userInfo = event.detail.userInfo;
        if (userInfo) {
            this.setData({
                userInfo: userInfo,
                authorized: true
            });
        }
    },
    onJumpToAbout: function (event) {
        wx.navigateTo({
            url: '/pages/about/about',
        });
    },
    onStudy: function (event) {
        wx.navigateTo({
            url: '/pages/course/course',
        });
    },
    onJumpToDetail: function (event) {
        var cid = event.detail.cid;
        wx.navigateTo({
            url: "/pages/book-detail/book-detail?bid=" + cid
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdEQUFtRDtBQUNuRCwwQ0FBNkM7QUFDN0MsNkNBQTZDO0FBRTdDLElBQU0sWUFBWSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFBO0FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksZ0JBQVMsRUFBRSxDQUFBO0FBRWpDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFFBQVEsRUFBRSxJQUFJO1FBQ2QsU0FBUyxFQUFFLENBQUM7UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmO0lBRUQsTUFBTSxFQUFOLFVBQU8sT0FBWTtRQUNqQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQU1uQixDQUFDO0lBRUQsVUFBVSxFQUFWO1FBQUEsaUJBTUM7UUFMQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQUMsR0FBUTtZQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxFQUFkO1FBQUEsaUJBT0M7UUFOQyxTQUFTLENBQUMsY0FBYyxFQUFFO2FBQ3ZCLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDYixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxHQUFHLENBQUMsS0FBSzthQUNyQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxlQUFlLEVBQWY7UUFBQSxpQkFlQztRQWRDLGlCQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFDLElBQVM7WUFDZCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDdEMsT0FBTyxpQkFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFBO2FBQ2xDO1lBQ0QsT0FBTyxLQUFLLENBQUE7UUFDZCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxJQUFTO1lBQ2QsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTTtZQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsY0FBYyxFQUFkO1FBQUEsaUJBaUJDO1FBaEJDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixPQUFPLEVBQUUsVUFBQyxJQUFTO2dCQUNqQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtvQkFFdEMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt3QkFDYixPQUFPLEVBQUUsVUFBQyxJQUFTOzRCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBOzRCQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDO2dDQUNYLFVBQVUsRUFBRSxJQUFJO2dDQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7NkJBQ3hCLENBQUMsQ0FBQTt3QkFDSixDQUFDO3FCQUNGLENBQUMsQ0FBQTtpQkFDSDtZQUNILENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsYUFBYSxFQUFiLFVBQWMsS0FBVTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQ3RDLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLFVBQUE7Z0JBQ1IsVUFBVSxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsYUFBYSxFQUFiLFVBQWMsS0FBVTtRQUN0QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQjtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsT0FBTyxFQUFQLFVBQVEsS0FBVTtRQUNoQixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHNCQUFzQjtTQUM1QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsY0FBYyxFQUFkLFVBQWUsS0FBVTtRQUN2QixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQTtRQUU1QixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLHdDQUFzQyxHQUFLO1NBQ2hELENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc2ljTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xhc3NpYydcbmltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9ib29rJ1xuaW1wb3J0IHsgcHJvbWlzaWMgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24nXG5cbmNvbnN0IGNsYXNzaWNNb2RlbCA9IG5ldyBDbGFzc2ljTW9kZWwoKVxuY29uc3QgYm9va01vZGVsID0gbmV3IEJvb2tNb2RlbCgpXG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBhdXRob3JpemVkOiBmYWxzZSwgLy8g55So5oi35piv5ZCm5o6I5p2DXG4gICAgdXNlckluZm86IG51bGwsXG4gICAgYm9va0NvdW50OiAwLFxuICAgIGNsYXNzaWNzOiBudWxsXG4gIH0sXG5cbiAgb25TaG93KG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudXNlckF1dGhvcml6ZWQxKClcbiAgICB0aGlzLmdldE15Qm9va0NvdW50KClcbiAgICB0aGlzLmdldE15RmF2b3IoKVxuICAgIC8vIHd4LmdldFVzZXJJbmZvKHtcbiAgICAvLyAgIHN1Y2Nlc3M6ZGF0YT0+e1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH0sXG5cbiAgZ2V0TXlGYXZvcigpIHtcbiAgICBjbGFzc2ljTW9kZWwuZ2V0TXlGYXZvcigocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGNsYXNzaWNzOiByZXNcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBnZXRNeUJvb2tDb3VudCgpIHtcbiAgICBib29rTW9kZWwuZ2V0TXlCb29rQ291bnQoKVxuICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYm9va0NvdW50OiByZXMuY291bnRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH0sXG5cbiAgdXNlckF1dGhvcml6ZWQxKCkge1xuICAgIHByb21pc2ljKHd4LmdldFNldHRpbmcpKClcbiAgICAgIC50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzaWMod3guZ2V0VXNlckluZm8pKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIFxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgICAgdXNlckluZm86IGRhdGEudXNlckluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH0sXG5cbiAgdXNlckF1dGhvcml6ZWQoKSB7XG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g55So5oi35o6I5p2D5omN6IO96I635Y+W55So5oi35pWw5o2uXG4gICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgc3VjY2VzczogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlckluZm86IGRhdGEudXNlckluZm9cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICBvbkdldFVzZXJJbmZvKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCkgICAgXG4gICAgY29uc3QgdXNlckluZm8gPSBldmVudC5kZXRhaWwudXNlckluZm9cbiAgICBpZiAodXNlckluZm8pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHVzZXJJbmZvLFxuICAgICAgICBhdXRob3JpemVkOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBvbkp1bXBUb0Fib3V0KGV2ZW50OiBhbnkpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9hYm91dC9hYm91dCcsXG4gICAgfSlcbiAgfSxcblxuICBvblN0dWR5KGV2ZW50OiBhbnkpIHtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogJy9wYWdlcy9jb3Vyc2UvY291cnNlJyxcbiAgICB9KVxuICB9LFxuXG4gIG9uSnVtcFRvRGV0YWlsKGV2ZW50OiBhbnkpe1xuICAgIGNvbnN0IGNpZCA9IGV2ZW50LmRldGFpbC5jaWRcbiAgICAvLyBjb25zdCB0eXBlID0gZXZlbnQuZGV0YWlsLnR5cGVcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDpgL3BhZ2VzL2Jvb2stZGV0YWlsL2Jvb2stZGV0YWlsP2JpZD0ke2NpZH1gXG4gICAgfSlcbiAgfVxufSlcblxuICAgIC8vIHd4Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgdXJsOmAvcGFnZXMvY2xhc3NpYy1kZXRhaWwvaW5kZXg/Y2lkPSR7Y2lkfVxuICAgIC8vICAgICAmdHlwZT0ke3R5cGV9YFxuICAgIC8vIH0pIl19