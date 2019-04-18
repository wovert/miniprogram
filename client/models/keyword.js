"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeywordModel = (function () {
    function KeywordModel() {
        this.key = 'q';
        this.maxLength = 10;
    }
    KeywordModel.prototype.getHistory = function () {
        var words = wx.getStorageSync(this.key);
        if (!words) {
            return [];
        }
        return words;
    };
    KeywordModel.prototype.getHot = function () {
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
}());
exports.KeywordModel = KeywordModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtleXdvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO1FBQ0UsUUFBRyxHQUFXLEdBQUcsQ0FBQTtRQUNqQixjQUFTLEdBQVcsRUFBRSxDQUFBO0lBNEJ4QixDQUFDO0lBMUJDLGlDQUFVLEdBQVY7UUFDRSxJQUFNLEtBQUssR0FBUSxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUE7U0FDVjtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELDZCQUFNLEdBQU47SUFFQSxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFjLE9BQWU7UUFDM0IsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3BDLElBQU0sR0FBRyxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFNUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUVSLElBQU0sR0FBRyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUE7WUFDaEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDekIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFBO2FBQ1o7WUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3RCLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNuQztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgS2V5d29yZE1vZGVsIHtcclxuICBrZXk6IHN0cmluZyA9ICdxJ1xyXG4gIG1heExlbmd0aDogbnVtYmVyID0gMTBcclxuXHJcbiAgZ2V0SGlzdG9yeSAoKSB7XHJcbiAgICBjb25zdCB3b3JkczogYW55ID0gd3guZ2V0U3RvcmFnZVN5bmModGhpcy5rZXkpXHJcbiAgICBpZiAoIXdvcmRzKSB7XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdvcmRzXHJcbiAgfVxyXG5cclxuICBnZXRIb3QgKCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBhZGRUb0hpc3RvcnkgKGtleXdvcmQ6IHN0cmluZykge1xyXG4gICAgbGV0IHdvcmRzOiBhcnJheSA9IHRoaXMuZ2V0SGlzdG9yeSgpXHJcbiAgICBjb25zdCBoYXM6IGJvb2xlYW4gPSB3b3Jkcy5pbmNsdWRlcyhrZXl3b3JkKVxyXG4gICAgLy8g6Zif5YiXXHJcbiAgICBpZiAoIWhhcykge1xyXG4gICAgICAvLyDmlbDnu4TmnKvlsL7liKDpmaTvvIxrZXl3b3JkIOaVsOe7hOesrOS4gOS9jVxyXG4gICAgICBjb25zdCBsZW46IG51bWJlciA9IHdvcmRzLmxlbmd0aFxyXG4gICAgICBpZiAobGVuID49IHRoaXMubWF4TGVuZ3RoKSB7XHJcbiAgICAgICAgd29yZHMucG9wKClcclxuICAgICAgfVxyXG4gICAgICB3b3Jkcy51bnNoaWZ0KGtleXdvcmQpXHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKHRoaXMua2V5LCB3b3JkcylcclxuICAgIH1cclxuICB9XHJcbn0iXX0=