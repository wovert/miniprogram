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
var http_promise_1 = require("../utils/http-promise");
var ClassicModel = (function (_super) {
    __extends(ClassicModel, _super);
    function ClassicModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicModel.prototype.getLatest = function (callback) {
        var _this = this;
        this.request({
            url: 'classic/latest',
        }).then(function (res) {
            callback(res);
            _this._setLatestIndex(res.index);
            var key = _this._getKey(res.index);
            wx.setStorageSync(key, res);
        }, function (error) {
            console.log('fail:', error);
        });
    };
    ClassicModel.prototype.getClassic = function (index, nextOrPrevious, callback) {
        var _this = this;
        var key = nextOrPrevious === 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
        var classic = wx.getStorageSync(key);
        if (!classic) {
            this.request({
                url: "classic/" + index + "/" + nextOrPrevious,
            }).then(function (res) {
                wx.setStorageSync(_this._getKey(res.index), res);
                callback(res);
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
    ClassicModel.prototype.getMyFavor = function (success) {
        var params = {
            url: 'classic/favor',
            success: success
        };
        this.request(params);
    };
    ClassicModel.prototype.getById = function (cid, type, success) {
        var params = {
            url: "classic/" + type + "/" + cid,
            success: success
        };
        this.request(params);
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
}(http_promise_1.Http));
exports.ClassicModel = ClassicModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBRThCO0FBRTlCO0lBQWtDLGdDQUFJO0lBQXRDOztJQW1FQSxDQUFDO0lBakVDLGdDQUFTLEdBQVQsVUFBVSxRQUFhO1FBQXZCLGlCQVdDO1FBVkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEdBQUcsRUFBRSxnQkFBZ0I7U0FDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDZixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDYixLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMvQixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQyxFQUFFLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUM3QixDQUFDLEVBQUUsVUFBQyxLQUFVO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFZLEtBQWEsRUFBRSxjQUFzQixFQUFFLFFBQWE7UUFBaEUsaUJBZ0JDO1FBZEMsSUFBTSxHQUFHLEdBQVcsY0FBYyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hHLElBQU0sT0FBTyxHQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLGFBQVcsS0FBSyxTQUFJLGNBQWdCO2FBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO2dCQUViLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQy9DLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNqQixDQUFDLENBQUMsQ0FBQTtTQUNIO2FBQU07WUFDTCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDbEI7SUFDSCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFTLEtBQWE7UUFDcEIsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUNuQyxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFVLEtBQWE7UUFDckIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUN4RCxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLE9BQVk7UUFDckIsSUFBTSxNQUFNLEdBQUc7WUFDWCxHQUFHLEVBQUUsZUFBZTtZQUNwQixPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFBO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBQ0QsOEJBQU8sR0FBUCxVQUFRLEdBQVcsRUFBRSxJQUFZLEVBQUUsT0FBWTtRQUM3QyxJQUFJLE1BQU0sR0FBRztZQUNULEdBQUcsRUFBRSxhQUFXLElBQUksU0FBSSxHQUFLO1lBQzdCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUE7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFDRCxzQ0FBZSxHQUFmLFVBQWlCLEtBQWE7UUFFNUIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxPQUFPLFFBQVEsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUyxLQUFhO1FBQ3BCLE9BQU8sYUFBVyxLQUFPLENBQUE7SUFDM0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQW5FRCxDQUFrQyxtQkFBSSxHQW1FckM7QUFuRVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICBIdHRwXHJcbn0gZnJvbSAnLi4vdXRpbHMvaHR0cC1wcm9taXNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsYXNzaWNNb2RlbCBleHRlbmRzIEh0dHAge1xyXG5cclxuICBnZXRMYXRlc3QoY2FsbGJhY2s6IGFueSkge1xyXG4gICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnY2xhc3NpYy9sYXRlc3QnLFxyXG4gICAgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgY2FsbGJhY2socmVzKVxyXG4gICAgICB0aGlzLl9zZXRMYXRlc3RJbmRleChyZXMuaW5kZXgpXHJcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleShyZXMuaW5kZXgpXHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKGtleSwgcmVzKVxyXG4gICAgfSwgKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2ZhaWw6JywgZXJyb3IpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NpYyAoaW5kZXg6IG51bWJlciwgbmV4dE9yUHJldmlvdXM6IHN0cmluZywgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgLy8g57yT5a2Y5Lit6K+75Y+W5pWw5o2uXHJcbiAgICBjb25zdCBrZXk6IHN0cmluZyA9IG5leHRPclByZXZpb3VzID09PSAnbmV4dCcgPyB0aGlzLl9nZXRLZXkoaW5kZXggKyAxKSA6IHRoaXMuX2dldEtleShpbmRleCAtMSlcclxuICAgIGNvbnN0IGNsYXNzaWM6IG9iamVjdCA9IHd4LmdldFN0b3JhZ2VTeW5jKGtleSlcclxuICAgIGlmICghY2xhc3NpYykge1xyXG4gICAgICAvLyDku47mjqXlj6PkuK3ojrflj5bmlbDmja5cclxuICAgICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGBjbGFzc2ljLyR7aW5kZXh9LyR7bmV4dE9yUHJldmlvdXN9YCxcclxuICAgICAgfSkudGhlbigocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIC8vIOWGmeWFpee8k+WtmFxyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmModGhpcy5fZ2V0S2V5KHJlcy5pbmRleCksIHJlcylcclxuICAgICAgICAgIGNhbGxiYWNrKHJlcykgICAgICAgIFxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FsbGJhY2soY2xhc3NpYylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRmlyc3QgKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBpbmRleCA9PT0gMSA/IHRydWUgOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaXNMYXRlc3QgKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5fZ2V0TGF0ZXN0SW5kZXgoKSA/IHRydWUgOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZ2V0TXlGYXZvcihzdWNjZXNzOiBhbnkpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgICB1cmw6ICdjbGFzc2ljL2Zhdm9yJyxcclxuICAgICAgICBzdWNjZXNzOiBzdWNjZXNzXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW1zKVxyXG4gIH1cclxuICBnZXRCeUlkKGNpZDogbnVtYmVyLCB0eXBlOiBudW1iZXIsIHN1Y2Nlc3M6IGFueSkge1xyXG4gICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICB1cmw6IGBjbGFzc2ljLyR7dHlwZX0vJHtjaWR9YCxcclxuICAgICAgICBzdWNjZXNzOiBzdWNjZXNzXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW1zKVxyXG4gIH1cclxuICBfc2V0TGF0ZXN0SW5kZXggKGluZGV4OiBudW1iZXIpIHtcclxuICAgIC8vIOWQjOatpeabtOaWsFxyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoJ2xhdGVzdEluZGV4JywgaW5kZXgpXHJcbiAgfVxyXG5cclxuICBfZ2V0TGF0ZXN0SW5kZXggKCkge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KHd4LmdldFN0b3JhZ2VTeW5jKCdsYXRlc3RJbmRleCcpKVxyXG4gIH1cclxuXHJcbiAgX2dldEtleSAoaW5kZXg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGBjbGFzc2ljLSR7aW5kZXh9YFxyXG4gIH0gIFxyXG59Il19