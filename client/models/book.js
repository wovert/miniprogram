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
    return BookModel;
}(http_promise_1.Http));
exports.BookModel = BookModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBRThCO0FBRTlCO0lBQStCLDZCQUFJO0lBQW5DOztJQWFBLENBQUM7SUFYQywrQkFBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxlQUFlO1NBQ3JCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEdBQUcsRUFBRSxrQkFBa0I7U0FDeEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWJELENBQStCLG1CQUFJLEdBYWxDO0FBYlksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBcclxuICBIdHRwIFxyXG59IGZyb20gJy4uL3V0aWxzL2h0dHAtcHJvbWlzZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29rTW9kZWwgZXh0ZW5kcyBIdHRwIHtcclxuXHJcbiAgZ2V0SG9zdExpc3QgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2Jvb2svaG90X2xpc3QnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0TXlCb29rQ291bnQgKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2Jvb2svZmF2b3IvY291bnQnXHJcbiAgICB9KVxyXG4gIH1cclxufSJdfQ==