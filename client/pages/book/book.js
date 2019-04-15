"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../../models/book");
var bookModel = new book_1.BookModel();
Page({
    data: {
        books: [],
        searching: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBNkM7QUFDN0MsSUFBTSxTQUFTLEdBQWMsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELE1BQU07UUFBTixpQkFnQkM7UUFmQyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxHQUFHO2FBQ1gsQ0FBQyxDQUFBO1FBR0osQ0FBQyxDQUFDLENBQUE7SUFRSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9va01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2snXG5jb25zdCBib29rTW9kZWw6IEJvb2tNb2RlbCA9IG5ldyBCb29rTW9kZWwoKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGJvb2tzOiBbXSxcbiAgICBzZWFyY2hpbmc6IGZhbHNlXG4gIH0sXG4gIG9uTG9hZCAoKSB7XG4gICAgYm9va01vZGVsLmdldEhvc3RMaXN0KClcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYm9va3M6IHJlc1xuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIC8vIHJldHVybiBib29rTW9kZWwuZ2V0TXlCb29rQ291bnQoKVxuICAgIH0pXG4gICAgLy8gLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyAgIHJldHVybiBib29rTW9kZWwuZ2V0TXlCb29rQ291bnQoKVxuICAgIC8vIH0pXG4gICAgLy8gLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyB9KVxuICB9XG59KVxuIl19