"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_1 = require("../../models/classic");
var like_1 = require("../../models/like");
var classicModel = new classic_1.ClassicModel();
var likeModel = new like_1.LikeModel();
Page({
    data: {
        dataInfo: null,
        latest: true,
        first: false,
        likeCount: 0,
        likeStatus: false
    },
    onLoad: function () {
        var _this = this;
        classicModel.getLatest(function (res) {
            _this.setData({
                dataInfo: res,
                likeCount: res.fav_nums,
                likeStatus: res.like_status
            });
        });
    },
    onReady: function () {
    },
    onLike: function (event) {
        var behavior = event.detail.behavior;
        likeModel.like(behavior, this.data.dataInfo.id, this.data.dataInfo.type);
    },
    onPrevious: function () {
        this._updateClassic('previous');
    },
    onNext: function () {
        this._updateClassic('next');
    },
    _updateClassic: function (nextOrPrevious) {
        var _this = this;
        classicModel.getClassic(this.data.dataInfo.index, nextOrPrevious, function (res) {
            _this._getLikeStatus(res.id, res.type);
            _this.setData({
                dataInfo: res,
                latest: classicModel.isLatest(res.index),
                first: classicModel.isFirst(res.index)
            });
        });
    },
    _getLikeStatus: function (id, category) {
        var _this = this;
        likeModel.getClassicLikeStatus(id, category, function (res) {
            _this.setData({
                likeCount: res.fav_nums,
                likeStatus: res.like_status
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnREFBbUQ7QUFDbkQsMENBQTZDO0FBQzdDLElBQU0sWUFBWSxHQUFpQixJQUFJLHNCQUFZLEVBQUUsQ0FBQTtBQUNyRCxJQUFNLFNBQVMsR0FBYyxJQUFJLGdCQUFTLEVBQUUsQ0FBQTtBQUs1QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBS0QsTUFBTSxFQUFOO1FBQUEsaUJBU0M7UUFQQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXO2FBQzVCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFDUCxDQUFDO0lBRUQsTUFBTSxFQUFOLFVBQVEsS0FBVTtRQUNoQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBV0QsY0FBYyxFQUFkLFVBQWdCLGNBQXNCO1FBQXRDLGlCQVNDO1FBUkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFVBQUMsR0FBUTtZQUN6RSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDeEMsS0FBSyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzthQUN2QyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxjQUFjLEVBQWQsVUFBZ0IsRUFBVSxFQUFFLFFBQWdCO1FBQTVDLGlCQU9DO1FBTkMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFRO1lBQ3BELEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVc7YUFDNUIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuaW1wb3J0IHsgQ2xhc3NpY01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NsYXNzaWMnXG5pbXBvcnQgeyBMaWtlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlrZSdcbmNvbnN0IGNsYXNzaWNNb2RlbDogQ2xhc3NpY01vZGVsID0gbmV3IENsYXNzaWNNb2RlbCgpXG5jb25zdCBsaWtlTW9kZWw6IExpa2VNb2RlbCA9IG5ldyBMaWtlTW9kZWwoKVxuXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBkYXRhSW5mbzogbnVsbCxcbiAgICBsYXRlc3Q6IHRydWUsXG4gICAgZmlyc3Q6IGZhbHNlLFxuICAgIGxpa2VDb3VudDogMCxcbiAgICBsaWtlU3RhdHVzOiBmYWxzZVxuICB9LFxuXG4gIC8qKlxuICAgKiDnm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICAvLy8g5pWw5o2u5L+d5a2Y5ZyoIFN0b3JhZ2VcbiAgICBjbGFzc2ljTW9kZWwuZ2V0TGF0ZXN0KChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZGF0YUluZm86IHJlcyxcbiAgICAgICAgbGlrZUNvdW50OiByZXMuZmF2X251bXMsXG4gICAgICAgIGxpa2VTdGF0dXM6IHJlcy5saWtlX3N0YXR1c1xuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKiBcbiAgICog6aG16Z2i5riy5p+T5a6M5oiQIFxuICAgKi9cbiAgb25SZWFkeSAoKSB7XG4gIH0sXG5cbiAgb25MaWtlIChldmVudDogYW55KSB7XG4gICAgY29uc3QgYmVoYXZpb3IgPSBldmVudC5kZXRhaWwuYmVoYXZpb3JcbiAgICBsaWtlTW9kZWwubGlrZShiZWhhdmlvciwgdGhpcy5kYXRhLmRhdGFJbmZvLmlkLCB0aGlzLmRhdGEuZGF0YUluZm8udHlwZSlcbiAgfSxcblxuICBvblByZXZpb3VzICgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzc2ljKCdwcmV2aW91cycpXG4gIH0sXG5cbiAgb25OZXh0ICgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzc2ljKCduZXh0JylcbiAgfSxcblxuICAvLyBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgLy8gICB0aGlzLnNldERhdGEhKHtcbiAgLy8gICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgLy8gICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gIC8vICAgfSlcbiAgLy8gfSxcblxuICBfdXBkYXRlQ2xhc3NpYyAobmV4dE9yUHJldmlvdXM6IHN0cmluZykge1xuICAgIGNsYXNzaWNNb2RlbC5nZXRDbGFzc2ljKHRoaXMuZGF0YS5kYXRhSW5mby5pbmRleCwgbmV4dE9yUHJldmlvdXMsIChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5fZ2V0TGlrZVN0YXR1cyhyZXMuaWQsIHJlcy50eXBlKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZGF0YUluZm86IHJlcyxcbiAgICAgICAgbGF0ZXN0OiBjbGFzc2ljTW9kZWwuaXNMYXRlc3QocmVzLmluZGV4KSxcbiAgICAgICAgZmlyc3Q6IGNsYXNzaWNNb2RlbC5pc0ZpcnN0KHJlcy5pbmRleClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBfZ2V0TGlrZVN0YXR1cyAoaWQ6IG51bWJlciwgY2F0ZWdvcnk6IG51bWJlcikge1xuICAgIGxpa2VNb2RlbC5nZXRDbGFzc2ljTGlrZVN0YXR1cyhpZCwgY2F0ZWdvcnksIChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlrZUNvdW50OiByZXMuZmF2X251bXMsXG4gICAgICAgIGxpa2VTdGF0dXM6IHJlcy5saWtlX3N0YXR1c1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59KVxuIl19