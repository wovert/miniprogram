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
    BookModel.prototype.postComment = function (book_id, content) {
        return this.request({
            url: "book/add/short_comment",
            method: 'POST',
            data: {
                book_id: book_id,
                content: content
            }
        });
    };
    return BookModel;
}(http_promise_1.Http));
exports.BookModel = BookModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBRThCO0FBRTlCO0lBQStCLDZCQUFJO0lBQW5DOztJQTBDQSxDQUFDO0lBeENDLCtCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLGVBQWU7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLGtCQUFrQjtTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFXLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxVQUFRLEdBQUcsWUFBUztTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFlLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxXQUFTLEdBQUcsV0FBUTtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFhLEdBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxVQUFRLEdBQUcsbUJBQWdCO1NBQ2pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQWEsT0FBZSxFQUFFLE9BQWU7UUFDM0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSx3QkFBd0I7WUFDN0IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxTQUFBO2dCQUNQLE9BQU8sU0FBQTthQUNSO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQTFDRCxDQUErQixtQkFBSSxHQTBDbEM7QUExQ1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICBIdHRwXHJcbn0gZnJvbSAnLi4vdXRpbHMvaHR0cC1wcm9taXNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tNb2RlbCBleHRlbmRzIEh0dHAge1xyXG5cclxuICBnZXRIb3N0TGlzdCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnYm9vay9ob3RfbGlzdCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRNeUJvb2tDb3VudCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnYm9vay9mYXZvci9jb3VudCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXREZXRhaWwgKGJpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgYm9vay8ke2JpZH0vZGV0YWlsYFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldExpa2VTdGF0dXMgKGJpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgL2Jvb2svJHtiaWR9L2Zhdm9yYFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldENvbW1lbnRzIChiaWQ6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYGJvb2svJHtiaWR9L3Nob3J0X2NvbW1lbnRgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcG9zdENvbW1lbnQgKGJvb2tfaWQ6IG51bWJlciwgY29udGVudDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgYm9vay9hZGQvc2hvcnRfY29tbWVudGAsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYm9va19pZCxcclxuICAgICAgICBjb250ZW50XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59Il19