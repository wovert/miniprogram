"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../../models/book");
var bookModel = new book_1.BookModel();
Page({
    data: {
        books: []
    },
    onLoad: function () {
        var _this = this;
        bookModel.getHostList()
            .then(function (res) {
            _this.setData({
                books: res
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBNkM7QUFDN0MsSUFBTSxTQUFTLEdBQWMsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELE1BQU07UUFBTixpQkFnQkM7UUFmQyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxHQUFHO2FBQ1gsQ0FBQyxDQUFBO1FBR0osQ0FBQyxDQUFDLENBQUE7SUFRSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2snXG5jb25zdCBib29rTW9kZWw6IEJvb2tNb2RlbCA9IG5ldyBCb29rTW9kZWwoKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGJvb2tzOiBbXVxuICB9LFxuICBvbkxvYWQgKCkge1xuICAgIGJvb2tNb2RlbC5nZXRIb3N0TGlzdCgpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJvb2tzOiByZXNcbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAvLyByZXR1cm4gYm9va01vZGVsLmdldE15Qm9va0NvdW50KClcbiAgICB9KVxuICAgIC8vIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXMpXG4gICAgLy8gICByZXR1cm4gYm9va01vZGVsLmdldE15Qm9va0NvdW50KClcbiAgICAvLyB9KVxuICAgIC8vIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXMpXG4gICAgLy8gfSlcbiAgfVxufSlcbiJdfQ==