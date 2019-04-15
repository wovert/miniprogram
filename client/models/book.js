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
var BookModel = (function (_super) {
    __extends(BookModel, _super);
    function BookModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookModel.prototype.getHostList = function () {
        return this.request({
            url: 'book/hot_list'
        });
    };
    BookModel.prototype.getMyBookCount = function () {
        return this.request({
            url: 'book/favor/count'
        });
    };
    BookModel.prototype.getDetail = function (bid) {
        return this.request({
            url: "book/" + bid + "/detail"
        });
    };
    BookModel.prototype.getLikeStatus = function (bid) {
        return this.request({
            url: "/book/" + bid + "/favor"
        });
    };
    BookModel.prototype.getComments = function (bid) {
        return this.request({
            url: "book/" + bid + "/short_comment"
        });
    };
    return BookModel;
}(http_promise_1.Http));
exports.BookModel = BookModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBRThCO0FBRTlCO0lBQStCLDZCQUFJO0lBQW5DOztJQStCQSxDQUFDO0lBN0JDLCtCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLGVBQWU7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLGtCQUFrQjtTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFXLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxVQUFRLEdBQUcsWUFBUztTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFlLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxXQUFTLEdBQUcsV0FBUTtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxVQUFRLEdBQUcsbUJBQWdCO1NBQ2pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUEvQkQsQ0FBK0IsbUJBQUksR0ErQmxDO0FBL0JZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXHJcbiAgSHR0cFxyXG59IGZyb20gJy4uL3V0aWxzL2h0dHAtcHJvbWlzZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rTW9kZWwgZXh0ZW5kcyBIdHRwIHtcclxuXHJcbiAgZ2V0SG9zdExpc3QgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2Jvb2svaG90X2xpc3QnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0TXlCb29rQ291bnQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2Jvb2svZmF2b3IvY291bnQnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0RGV0YWlsIChiaWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYGJvb2svJHtiaWR9L2RldGFpbGBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRMaWtlU3RhdHVzIChiaWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYC9ib29rLyR7YmlkfS9mYXZvcmBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRDb21tZW50cyhiaWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYGJvb2svJHtiaWR9L3Nob3J0X2NvbW1lbnRgXHJcbiAgICB9KVxyXG4gIH1cclxufSJdfQ==