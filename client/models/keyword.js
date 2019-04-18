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
var KeywordModel = (function (_super) {
    __extends(KeywordModel, _super);
    function KeywordModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = 'q';
        _this.maxLength = 10;
        return _this;
    }
    KeywordModel.prototype.getHistory = function () {
        var words = wx.getStorageSync(this.key);
        if (!words) {
            return [];
        }
        return words;
    };
    KeywordModel.prototype.getHot = function () {
        return this.request({
            url: '/book/hot_keyword'
        });
    };
    KeywordModel.prototype.addToHistory = function (keyword) {
        var words = this.getHistory();
        var has = words.includes(keyword);
        if (!has) {
            var len = words.length;
            if (len >= this.maxLength) {
                words.pop();
            }
            words.unshift(keyword);
            wx.setStorageSync(this.key, words);
        }
    };
    return KeywordModel;
}(http_promise_1.Http));
exports.KeywordModel = KeywordModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtleXdvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBRThCO0FBRTlCO0lBQWtDLGdDQUFJO0lBQXRDO1FBQUEscUVBZ0NDO1FBL0JDLFNBQUcsR0FBVyxHQUFHLENBQUE7UUFDakIsZUFBUyxHQUFXLEVBQUUsQ0FBQTs7SUE4QnhCLENBQUM7SUE1QkMsaUNBQVUsR0FBVjtRQUNFLElBQU0sS0FBSyxHQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQTtTQUNWO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDZCxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHLEVBQUMsbUJBQW1CO1NBQ3hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWMsT0FBZTtRQUMzQixJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDcEMsSUFBTSxHQUFHLEdBQVksS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUU1QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBRVIsSUFBTSxHQUFHLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtZQUNoQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN6QixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUE7YUFDWjtZQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdEIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ25DO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUFrQyxtQkFBSSxHQWdDckM7QUFoQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICBIdHRwXHJcbn0gZnJvbSAnLi4vdXRpbHMvaHR0cC1wcm9taXNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleXdvcmRNb2RlbCBleHRlbmRzIEh0dHAge1xyXG4gIGtleTogc3RyaW5nID0gJ3EnXHJcbiAgbWF4TGVuZ3RoOiBudW1iZXIgPSAxMFxyXG5cclxuICBnZXRIaXN0b3J5ICgpIHtcclxuICAgIGNvbnN0IHdvcmRzOiBhbnkgPSB3eC5nZXRTdG9yYWdlU3luYyh0aGlzLmtleSlcclxuICAgIGlmICghd29yZHMpIHtcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gd29yZHNcclxuICB9XHJcblxyXG4gIGdldEhvdCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOicvYm9vay9ob3Rfa2V5d29yZCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRUb0hpc3RvcnkgKGtleXdvcmQ6IHN0cmluZykge1xyXG4gICAgbGV0IHdvcmRzOiBhcnJheSA9IHRoaXMuZ2V0SGlzdG9yeSgpXHJcbiAgICBjb25zdCBoYXM6IGJvb2xlYW4gPSB3b3Jkcy5pbmNsdWRlcyhrZXl3b3JkKVxyXG4gICAgLy8g6Zif5YiXXHJcbiAgICBpZiAoIWhhcykge1xyXG4gICAgICAvLyDmlbDnu4TmnKvlsL7liKDpmaTvvIxrZXl3b3JkIOaVsOe7hOesrOS4gOS9jVxyXG4gICAgICBjb25zdCBsZW46IG51bWJlciA9IHdvcmRzLmxlbmd0aFxyXG4gICAgICBpZiAobGVuID49IHRoaXMubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgd29yZHMucG9wKClcclxuICAgICAgfVxyXG4gICAgICB3b3Jkcy51bnNoaWZ0KGtleXdvcmQpXHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKHRoaXMua2V5LCB3b3JkcylcclxuICAgIH1cclxuICB9XHJcbn0iXX0=