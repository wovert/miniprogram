"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_1 = require("../../models/classic");
var classic = new classic_1.ClassicModel();
var app = getApp();
Page({
    data: {
        dataInfo: {},
        test: 1
    },
    onLoad: function () {
        var _this = this;
        classic.getLatest(function (res) {
            _this.setData({
                dataInfo: res
            });
        });
    },
    onReady: function () {
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxnREFBbUQ7QUFDbkQsSUFBSSxPQUFPLEdBQUcsSUFBSSxzQkFBWSxFQUFFLENBQUE7QUFFaEMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQUU7UUFDWixJQUFJLEVBQUUsQ0FBQztLQUNSO0lBS0QsTUFBTSxFQUFOO1FBQUEsaUJBTUM7UUFMQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBVztZQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxHQUFHO2FBQ2QsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTztJQUNQLENBQUM7SUFDRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7IENsYXNzaWNNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2ljJ1xubGV0IGNsYXNzaWMgPSBuZXcgQ2xhc3NpY01vZGVsKClcblxuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGRhdGFJbmZvOiB7fSxcbiAgICB0ZXN0OiAxXG4gIH0sXG5cbiAgLyoqXG4gICAqIOebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkICgpIHtcbiAgICBjbGFzc2ljLmdldExhdGVzdCgocmVzOiBPYmplY3QpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGRhdGFJbmZvOiByZXNcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKiogXG4gICAqIOmhtemdoua4suafk+WujOaIkCBcbiAgICovXG4gIG9uUmVhZHkgKCkge1xuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==