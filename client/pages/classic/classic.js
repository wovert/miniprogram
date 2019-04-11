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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxnREFBbUQ7QUFDbkQsMENBQTZDO0FBQzdDLElBQUksWUFBWSxHQUFpQixJQUFJLHNCQUFZLEVBQUUsQ0FBQTtBQUNuRCxJQUFJLFNBQVMsR0FBYyxJQUFJLGdCQUFTLEVBQUUsQ0FBQTtBQUUxQyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQTtBQUU1QixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsSUFBSTtRQUNkLE1BQU0sRUFBRSxJQUFJO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBS0QsTUFBTSxFQUFOO1FBQUEsaUJBVUM7UUFSQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUTtZQUU5QixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxHQUFHO2dCQUNiLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXO2FBQzVCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU87SUFDUCxDQUFDO0lBRUQsTUFBTSxFQUFOLFVBQVEsS0FBVTtRQUNoQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUNwQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBV0QsY0FBYyxFQUFkLFVBQWdCLGNBQXNCO1FBQXRDLGlCQVNDO1FBUkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFVBQUMsR0FBUTtZQUN6RSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDeEMsS0FBSyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzthQUN2QyxDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxjQUFjLEVBQWQsVUFBZ0IsRUFBVSxFQUFFLFFBQWdCO1FBQTVDLGlCQU9DO1FBTkMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBQyxHQUFRO1lBQ3BELEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEdBQUcsQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVc7YUFDNUIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCdcbmltcG9ydCB7IENsYXNzaWNNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9jbGFzc2ljJ1xuaW1wb3J0IHsgTGlrZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpa2UnXG5sZXQgY2xhc3NpY01vZGVsOiBDbGFzc2ljTW9kZWwgPSBuZXcgQ2xhc3NpY01vZGVsKClcbmxldCBsaWtlTW9kZWw6IExpa2VNb2RlbCA9IG5ldyBMaWtlTW9kZWwoKVxuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YUluZm86IG51bGwsXG4gICAgbGF0ZXN0OiB0cnVlLFxuICAgIGZpcnN0OiBmYWxzZSxcbiAgICBsaWtlQ291bnQ6IDAsXG4gICAgbGlrZVN0YXR1czogZmFsc2VcbiAgfSxcblxuICAvKipcbiAgICog55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQgKCkge1xuICAgIC8vLyDmlbDmja7kv53lrZjlnKggU3RvcmFnZVxuICAgIGNsYXNzaWNNb2RlbC5nZXRMYXRlc3QoKHJlczogYW55KSA9PiB7XG4gICAgICAvLyB0aGlzLl9nZXRMaWtlU3RhdHVzKHJlcy5pZCwgcmVzLnR5cGUpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBkYXRhSW5mbzogcmVzLFxuICAgICAgICBsaWtlQ291bnQ6IHJlcy5mYXZfbnVtcyxcbiAgICAgICAgbGlrZVN0YXR1czogcmVzLmxpa2Vfc3RhdHVzXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqIFxuICAgKiDpobXpnaLmuLLmn5PlrozmiJAgXG4gICAqL1xuICBvblJlYWR5ICgpIHtcbiAgfSxcblxuICBvbkxpa2UgKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgYmVoYXZpb3IgPSBldmVudC5kZXRhaWwuYmVoYXZpb3JcbiAgICBsaWtlTW9kZWwubGlrZShiZWhhdmlvciwgdGhpcy5kYXRhLmRhdGFJbmZvLmlkLCB0aGlzLmRhdGEuZGF0YUluZm8udHlwZSlcbiAgfSxcblxuICBvblByZXZpb3VzICgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzc2ljKCdwcmV2aW91cycpXG4gIH0sXG5cbiAgb25OZXh0ICgpIHtcbiAgICB0aGlzLl91cGRhdGVDbGFzc2ljKCduZXh0JylcbiAgfSxcblxuICAvLyBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhlKVxuICAvLyAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgLy8gICB0aGlzLnNldERhdGEhKHtcbiAgLy8gICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgLy8gICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gIC8vICAgfSlcbiAgLy8gfSxcblxuICBfdXBkYXRlQ2xhc3NpYyAobmV4dE9yUHJldmlvdXM6IHN0cmluZykge1xuICAgIGNsYXNzaWNNb2RlbC5nZXRDbGFzc2ljKHRoaXMuZGF0YS5kYXRhSW5mby5pbmRleCwgbmV4dE9yUHJldmlvdXMsIChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5fZ2V0TGlrZVN0YXR1cyhyZXMuaWQsIHJlcy50eXBlKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZGF0YUluZm86IHJlcyxcbiAgICAgICAgbGF0ZXN0OiBjbGFzc2ljTW9kZWwuaXNMYXRlc3QocmVzLmluZGV4KSxcbiAgICAgICAgZmlyc3Q6IGNsYXNzaWNNb2RlbC5pc0ZpcnN0KHJlcy5pbmRleClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBfZ2V0TGlrZVN0YXR1cyAoaWQ6IG51bWJlciwgY2F0ZWdvcnk6IG51bWJlcikge1xuICAgIGxpa2VNb2RlbC5nZXRDbGFzc2ljTGlrZVN0YXR1cyhpZCwgY2F0ZWdvcnksIChyZXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlrZUNvdW50OiByZXMuZmF2X251bXMsXG4gICAgICAgIGxpa2VTdGF0dXM6IHJlcy5saWtlX3N0YXR1c1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59KVxuIl19