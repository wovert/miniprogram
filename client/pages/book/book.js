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
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBNkM7QUFDN0MsSUFBTSxTQUFTLEdBQWMsSUFBSSxnQkFBUyxFQUFFLENBQUE7QUFFNUMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELE1BQU07UUFBTixpQkFnQkM7UUFmQyxTQUFTLENBQUMsV0FBVyxFQUFFO2FBQ3RCLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDUCxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLEtBQUssRUFBRSxHQUFHO2FBQ1gsQ0FBQyxDQUFBO1FBR0osQ0FBQyxDQUFDLENBQUE7SUFRSixDQUFDO0lBQ0QsUUFBUSxFQUFSLFVBQVUsS0FBVTtRQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELFFBQVEsRUFBUixVQUFVLEtBQVU7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvYm9vaydcbmNvbnN0IGJvb2tNb2RlbDogQm9va01vZGVsID0gbmV3IEJvb2tNb2RlbCgpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYm9va3M6IFtdLFxuICAgIHNlYXJjaGluZzogZmFsc2VcbiAgfSxcbiAgb25Mb2FkICgpIHtcbiAgICBib29rTW9kZWwuZ2V0SG9zdExpc3QoKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBib29rczogcmVzXG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxuICAgICAgLy8gcmV0dXJuIGJvb2tNb2RlbC5nZXRNeUJvb2tDb3VudCgpXG4gICAgfSlcbiAgICAvLyAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxuICAgIC8vICAgcmV0dXJuIGJvb2tNb2RlbC5nZXRNeUJvb2tDb3VudCgpXG4gICAgLy8gfSlcbiAgICAvLyAudGhlbihyZXMgPT4ge1xuICAgIC8vICAgY29uc29sZS5sb2cocmVzKVxuICAgIC8vIH0pXG4gIH0sXG4gIG9uU2VhcmNoIChldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlYXJjaGluZzogdHJ1ZVxuICAgIH0pXG4gIH0sXG4gIG9uQ2FuY2VsIChldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNlYXJjaGluZzogZmFsc2VcbiAgICB9KVxuICB9XG59KVxuIl19