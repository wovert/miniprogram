"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../utils/http");
var ClassicModel = (function (_super) {
    __extends(ClassicModel, _super);
    function ClassicModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicModel.prototype.getLatest = function (callback) {
        var _this = this;
        this.request({
            url: 'classic/latest',
            success: function (res) {
                callback(res);
                _this._setLatestIndex(res.index);
                var key = _this._getKey(res.index);
                wx.setStorageSync(key, res);
            }
        });
    };
    ClassicModel.prototype.getClassic = function (index, nextOrPrevious, callback) {
        var _this = this;
        var key = nextOrPrevious === 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
        var classic = wx.getStorageSync(key);
        if (!classic) {
            this.request({
                url: "classic/" + index + "/" + nextOrPrevious,
                success: function (res) {
                    wx.setStorageSync(_this._getKey(res.index), res);
                    callback(res);
                }
            });
        }
        else {
            callback(classic);
        }
    };
    ClassicModel.prototype.isFirst = function (index) {
        return index === 1 ? true : false;
    };
    ClassicModel.prototype.isLatest = function (index) {
        return index === this._getLatestIndex() ? true : false;
    };
    ClassicModel.prototype._setLatestIndex = function (index) {
        wx.setStorageSync('latestIndex', index);
    };
    ClassicModel.prototype._getLatestIndex = function () {
        return parseInt(wx.getStorageSync('latestIndex'));
    };
    ClassicModel.prototype._getKey = function (index) {
        return "classic-" + index;
    };
    return ClassicModel;
}(http_1.Http));
exports.ClassicModel = ClassicModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9DO0FBRXBDO0lBQWtDLGdDQUFJO0lBQXRDOztJQXFEQSxDQUFDO0lBbkRDLGdDQUFTLEdBQVQsVUFBVyxRQUFhO1FBQXhCLGlCQVVDO1FBVEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsT0FBTyxFQUFFLFVBQUMsR0FBUTtnQkFDaEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNiLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMvQixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDN0IsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVksS0FBYSxFQUFFLGNBQXNCLEVBQUUsUUFBYTtRQUFoRSxpQkFpQkM7UUFmQyxJQUFNLEdBQUcsR0FBVyxjQUFjLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEcsSUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxHQUFHLEVBQUUsYUFBVyxLQUFLLFNBQUksY0FBZ0I7Z0JBQ3pDLE9BQU8sRUFBRSxVQUFDLEdBQVE7b0JBRWhCLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7b0JBQy9DLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDZixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNsQjtJQUNILENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVMsS0FBYTtRQUNwQixPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ25DLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVUsS0FBYTtRQUNyQixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ3hELENBQUM7SUFFRCxzQ0FBZSxHQUFmLFVBQWlCLEtBQWE7UUFFNUIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sYUFBVyxLQUFPLENBQUE7SUFDM0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXJERCxDQUFrQyxXQUFJLEdBcURyQztBQXJEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAgfSBmcm9tICcuLi91dGlscy9odHRwJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsYXNzaWNNb2RlbCBleHRlbmRzIEh0dHAge1xyXG5cclxuICBnZXRMYXRlc3QgKGNhbGxiYWNrOiBhbnkpIHtcclxuICAgIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2NsYXNzaWMvbGF0ZXN0JyxcclxuICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzKVxyXG4gICAgICAgIHRoaXMuX3NldExhdGVzdEluZGV4KHJlcy5pbmRleClcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLl9nZXRLZXkocmVzLmluZGV4KVxyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKGtleSwgcmVzKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NpYyAoaW5kZXg6IG51bWJlciwgbmV4dE9yUHJldmlvdXM6IHN0cmluZywgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgLy8g57yT5a2Y5Lit6K+75Y+W5pWw5o2uXHJcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IG5leHRPclByZXZpb3VzID09PSAnbmV4dCcgPyB0aGlzLl9nZXRLZXkoaW5kZXggKyAxKSA6IHRoaXMuX2dldEtleShpbmRleCAtMSlcclxuICAgIGNvbnN0IGNsYXNzaWM6IG9iamVjdCA9IHd4LmdldFN0b3JhZ2VTeW5jKGtleSlcclxuICAgIGlmICghY2xhc3NpYykge1xyXG4gICAgICAvLyDku47mjqXlj6PkuK3ojrflj5bmlbDmja5cclxuICAgICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGBjbGFzc2ljLyR7aW5kZXh9LyR7bmV4dE9yUHJldmlvdXN9YCxcclxuICAgICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIC8vIOWGmeWFpee8k+WtmFxyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmModGhpcy5fZ2V0S2V5KHJlcy5pbmRleCksIHJlcylcclxuICAgICAgICAgIGNhbGxiYWNrKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjYWxsYmFjayhjbGFzc2ljKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNGaXJzdCAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSAxID8gdHJ1ZSA6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBpc0xhdGVzdCAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSB0aGlzLl9nZXRMYXRlc3RJbmRleCgpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBfc2V0TGF0ZXN0SW5kZXggKGluZGV4OiBudW1iZXIpIHtcclxuICAgIC8vIOWQjOatpeabtOaWsFxyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xhdGVzdEluZGV4JywgaW5kZXgpXHJcbiAgfVxyXG5cclxuICBfZ2V0TGF0ZXN0SW5kZXggKCkge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHd4LmdldFN0b3JhZ2VTeW5jKCdsYXRlc3RJbmRleCcpKVxyXG4gIH1cclxuXHJcbiAgX2dldEtleSAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGBjbGFzc2ljLSR7aW5kZXh9YFxyXG4gIH0gIFxyXG59Il19