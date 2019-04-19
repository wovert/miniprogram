"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("../../models/book");
var common_1 = require("../../utils/common");
var bookModel = new book_1.BookModel();
Page({
    data: {
        books: [],
        searching: false,
        more: ''
    },
    onLoad: function () {
        var _this = this;
        bookModel.getHostList()
            .then(function (res) {
            _this.setData({
                books: res
            });
        });
    },
    onSearch: function (event) {
        this.setData({
            searching: true
        });
    },
    onCancel: function (event) {
        this.setData({
            searching: false
        });
    },
    onReachBottom: function () {
        this.setData({
            more: common_1.random(16)
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBNkM7QUFDN0MsNkNBQTJDO0FBRTNDLElBQU0sU0FBUyxHQUFjLElBQUksZ0JBQVMsRUFBRSxDQUFBO0FBRTVDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxFQUFFO1FBQ1QsU0FBUyxFQUFFLEtBQUs7UUFDaEIsSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU07UUFBTixpQkFnQkM7UUFmQyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxHQUFHO2FBQ1gsQ0FBQyxDQUFBO1FBR0osQ0FBQyxDQUFDLENBQUE7SUFRSixDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQVUsS0FBVTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVEsRUFBUixVQUFVLEtBQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxhQUFhO1FBRVgsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLElBQUksRUFBRSxlQUFNLENBQUMsRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvYm9vaydcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbidcblxuY29uc3QgYm9va01vZGVsOiBCb29rTW9kZWwgPSBuZXcgQm9va01vZGVsKClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBib29rczogW10sXG4gICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICBtb3JlOiAnJyAvLyDliqDovb3mm7TlpJrnirbmgIFcbiAgfSxcbiAgb25Mb2FkICgpIHtcbiAgICBib29rTW9kZWwuZ2V0SG9zdExpc3QoKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBib29rczogcmVzXG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxuICAgICAgLy8gcmV0dXJuIGJvb2tNb2RlbC5nZXRNeUJvb2tDb3VudCgpXG4gICAgfSlcbiAgICAvLyAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxuICAgIC8vICAgcmV0dXJuIGJvb2tNb2RlbC5nZXRNeUJvb2tDb3VudCgpXG4gICAgLy8gfSlcbiAgICAvLyAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxuICAgIC8vIH0pXG4gIH0sXG4gIFxuICBvblNlYXJjaCAoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBzZWFyY2hpbmc6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIG9uQ2FuY2VsIChldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlYXJjaGluZzogZmFsc2VcbiAgICB9KVxuICB9LFxuXG4gIG9uUmVhY2hCb3R0b20gKCkge1xuICAgIC8vIOWQkSBzZWFyY2gg57uE5Lu25Y+R6YCB6YCa55+lXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIG1vcmU6IHJhbmRvbSgxNilcbiAgICB9KVxuICB9XG5cbn0pXG4iXX0=