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
    BookModel.prototype.search = function (start, q) {
        return this.request({
            url: 'book/search?summary=1',
            data: {
                q: q,
                start: start
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBRThCO0FBRTlCO0lBQStCLDZCQUFJO0lBQW5DOztJQW9EQSxDQUFDO0lBbERDLCtCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLGVBQWU7U0FDckIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsQ0FBUztRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLHVCQUF1QjtZQUM1QixJQUFJLEVBQUU7Z0JBQ0osQ0FBQyxHQUFBO2dCQUNELEtBQUssT0FBQTthQUNOO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRyxFQUFFLGtCQUFrQjtTQUN4QixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsNkJBQVMsR0FBVCxVQUFXLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxVQUFRLEdBQUcsWUFBUztTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUNBQWEsR0FBYixVQUFlLEdBQVc7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxXQUFTLEdBQUcsV0FBUTtTQUMxQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFhLEdBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxVQUFRLEdBQUcsbUJBQWdCO1NBQ2pDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwrQkFBVyxHQUFYLFVBQWEsT0FBZSxFQUFFLE9BQWU7UUFDM0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSx3QkFBd0I7WUFDN0IsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxTQUFBO2dCQUNQLE9BQU8sU0FBQTthQUNSO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQXBERCxDQUErQixtQkFBSSxHQW9EbEM7QUFwRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICBIdHRwXHJcbn0gZnJvbSAnLi4vdXRpbHMvaHR0cC1wcm9taXNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2tNb2RlbCBleHRlbmRzIEh0dHAge1xyXG5cclxuICBnZXRIb3N0TGlzdCAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnYm9vay9ob3RfbGlzdCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzZWFyY2goc3RhcnQ6IG51bWJlciwgcTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnYm9vay9zZWFyY2g/c3VtbWFyeT0xJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHEsXHJcbiAgICAgICAgc3RhcnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldE15Qm9va0NvdW50ICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICdib29rL2Zhdm9yL2NvdW50J1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldERldGFpbCAoYmlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGBib29rLyR7YmlkfS9kZXRhaWxgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlrZVN0YXR1cyAoYmlkOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGAvYm9vay8ke2JpZH0vZmF2b3JgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29tbWVudHMgKGJpZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBgYm9vay8ke2JpZH0vc2hvcnRfY29tbWVudGBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwb3N0Q29tbWVudCAoYm9va19pZDogbnVtYmVyLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGBib29rL2FkZC9zaG9ydF9jb21tZW50YCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBib29rX2lkLFxyXG4gICAgICAgIGNvbnRlbnRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=