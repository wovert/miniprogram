"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_1 = require("../../models/classic");
var like_1 = require("../../models/like");
var classicModel = new classic_1.ClassicModel();
var likeModel = new like_1.LikeModel();
var app = getApp();
Page({
    data: {
        dataInfo: null,
        test: 1
    },
    onLoad: function () {
        var _this = this;
        classicModel.getLatest(function (res) {
            _this.setData({
                dataInfo: res
            });
        });
    },
    onReady: function () {
    },
    onLike: function (event) {
        var behavior = event.detail.behavior;
        likeModel.like(behavior, this.data.dataInfo.id, this.data.dataInfo.type);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxnREFBbUQ7QUFDbkQsMENBQTZDO0FBQzdDLElBQUksWUFBWSxHQUFpQixJQUFJLHNCQUFZLEVBQUUsQ0FBQTtBQUNuRCxJQUFJLFNBQVMsR0FBYyxJQUFJLGdCQUFTLEVBQUUsQ0FBQTtBQUUxQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsSUFBSTtRQUNkLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFLRCxNQUFNLEVBQU47UUFBQSxpQkFNQztRQUxDLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFXO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPO0lBQ1AsQ0FBQztJQUVELE1BQU0sRUFBRSxVQUFVLEtBQWE7UUFDN0IsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBWSxDQUFNO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUMzQyxJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7IENsYXNzaWNNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2ljJ1xuaW1wb3J0IHsgTGlrZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpa2UnXG5sZXQgY2xhc3NpY01vZGVsOiBDbGFzc2ljTW9kZWwgPSBuZXcgQ2xhc3NpY01vZGVsKClcbmxldCBsaWtlTW9kZWw6IExpa2VNb2RlbCA9IG5ldyBMaWtlTW9kZWwoKVxuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUluZm86IG51bGwsXG4gICAgdGVzdDogMVxuICB9LFxuXG4gIC8qKlxuICAgKiDnm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCAoKSB7XG4gICAgY2xhc3NpY01vZGVsLmdldExhdGVzdCgocmVzOiBPYmplY3QpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGRhdGFJbmZvOiByZXNcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICAvKiogXG4gICAqIOmhtemdoua4suafk+WujOaIkCBcbiAgICovXG4gIG9uUmVhZHkgKCkge1xuICB9LFxuXG4gIG9uTGlrZTogZnVuY3Rpb24gKGV2ZW50OiBPYmplY3QpIHtcbiAgICBsZXQgYmVoYXZpb3IgPSBldmVudC5kZXRhaWwuYmVoYXZpb3JcbiAgICBsaWtlTW9kZWwubGlrZShiZWhhdmlvciwgdGhpcy5kYXRhLmRhdGFJbmZvLmlkLCB0aGlzLmRhdGEuZGF0YUluZm8udHlwZSlcbiAgfSxcblxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==