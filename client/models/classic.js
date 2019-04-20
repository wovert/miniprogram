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
}(http_1.Http));
exports.ClassicModel = ClassicModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9DO0FBRXBDO0lBQWtDLGdDQUFJO0lBQXRDOztJQW1FQSxDQUFDO0lBakVDLGdDQUFTLEdBQVQsVUFBVyxRQUFhO1FBQXhCLGlCQVVDO1FBVEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsT0FBTyxFQUFFLFVBQUMsR0FBUTtnQkFDaEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNiLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMvQixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbkMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDN0IsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVksS0FBYSxFQUFFLGNBQXNCLEVBQUUsUUFBYTtRQUFoRSxpQkFpQkM7UUFmQyxJQUFNLEdBQUcsR0FBVyxjQUFjLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUE7UUFDaEcsSUFBTSxPQUFPLEdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxHQUFHLEVBQUUsYUFBVyxLQUFLLFNBQUksY0FBZ0I7Z0JBQ3pDLE9BQU8sRUFBRSxVQUFDLEdBQVE7b0JBRWhCLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7b0JBQy9DLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDZixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNsQjtJQUNILENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVMsS0FBYTtRQUNwQixPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ25DLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVUsS0FBYTtRQUNyQixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ3hELENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsT0FBWTtRQUNyQixJQUFNLE1BQU0sR0FBRztZQUNYLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUE7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFDRCw4QkFBTyxHQUFQLFVBQVEsR0FBVyxFQUFFLElBQVksRUFBRSxPQUFZO1FBQzdDLElBQUksTUFBTSxHQUFHO1lBQ1QsR0FBRyxFQUFFLGFBQVcsSUFBSSxTQUFJLEdBQUs7WUFDN0IsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUNELHNDQUFlLEdBQWYsVUFBaUIsS0FBYTtRQUU1QixFQUFFLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNFLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFTLEtBQWE7UUFDcEIsT0FBTyxhQUFXLEtBQU8sQ0FBQTtJQUMzQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBbkVELENBQWtDLFdBQUksR0FtRXJDO0FBbkVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uL3V0aWxzL2h0dHAnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xhc3NpY01vZGVsIGV4dGVuZHMgSHR0cCB7XHJcblxyXG4gIGdldExhdGVzdCAoY2FsbGJhY2s6IGFueSkge1xyXG4gICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnY2xhc3NpYy9sYXRlc3QnLFxyXG4gICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBjYWxsYmFjayhyZXMpXHJcbiAgICAgICAgdGhpcy5fc2V0TGF0ZXN0SW5kZXgocmVzLmluZGV4KVxyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuX2dldEtleShyZXMuaW5kZXgpXHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoa2V5LCByZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc2ljIChpbmRleDogbnVtYmVyLCBuZXh0T3JQcmV2aW91czogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAvLyDnvJPlrZjkuK3or7vlj5bmlbDmja5cclxuICAgIGNvbnN0IGtleTogc3RyaW5nID0gbmV4dE9yUHJldmlvdXMgPT09ICduZXh0JyA/IHRoaXMuX2dldEtleShpbmRleCArIDEpIDogdGhpcy5fZ2V0S2V5KGluZGV4IC0xKVxyXG4gICAgY29uc3QgY2xhc3NpYzogb2JqZWN0ID0gd3guZ2V0U3RvcmFnZVN5bmMoa2V5KVxyXG4gICAgaWYgKCFjbGFzc2ljKSB7XHJcbiAgICAgIC8vIOS7juaOpeWPo+S4reiOt+WPluaVsOaNrlxyXG4gICAgICB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogYGNsYXNzaWMvJHtpbmRleH0vJHtuZXh0T3JQcmV2aW91c31gLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgLy8g5YaZ5YWl57yT5a2YXHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyh0aGlzLl9nZXRLZXkocmVzLmluZGV4KSwgcmVzKVxyXG4gICAgICAgICAgY2FsbGJhY2socmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhbGxiYWNrKGNsYXNzaWMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0ZpcnN0IChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IDEgPyB0cnVlIDogZmFsc2VcclxuICB9XHJcblxyXG4gIGlzTGF0ZXN0IChpbmRleDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IHRoaXMuX2dldExhdGVzdEluZGV4KCkgPyB0cnVlIDogZmFsc2VcclxuICB9XHJcblxyXG4gIGdldE15RmF2b3Ioc3VjY2VzczogYW55KSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgdXJsOiAnY2xhc3NpYy9mYXZvcicsXHJcbiAgICAgICAgc3VjY2Vzczogc3VjY2Vzc1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXF1ZXN0KHBhcmFtcylcclxuICB9XHJcbiAgZ2V0QnlJZChjaWQ6IG51bWJlciwgdHlwZTogbnVtYmVyLCBzdWNjZXNzOiBhbnkpIHtcclxuICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgdXJsOiBgY2xhc3NpYy8ke3R5cGV9LyR7Y2lkfWAsXHJcbiAgICAgICAgc3VjY2Vzczogc3VjY2Vzc1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXF1ZXN0KHBhcmFtcylcclxuICB9XHJcbiAgX3NldExhdGVzdEluZGV4IChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAvLyDlkIzmraXmm7TmlrBcclxuICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdsYXRlc3RJbmRleCcsIGluZGV4KVxyXG4gIH1cclxuXHJcbiAgX2dldExhdGVzdEluZGV4ICgpIHtcclxuICAgIHJldHVybiBwYXJzZUludCh3eC5nZXRTdG9yYWdlU3luYygnbGF0ZXN0SW5kZXgnKSlcclxuICB9XHJcblxyXG4gIF9nZXRLZXkgKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiBgY2xhc3NpYy0ke2luZGV4fWBcclxuICB9ICBcclxufSJdfQ==