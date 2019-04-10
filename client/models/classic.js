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
var http_1 = require("../utils/http");
var ClassicModel = (function (_super) {
    __extends(ClassicModel, _super);
    function ClassicModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicModel.prototype.getLatest = function (callback) {
        this.request({
            url: 'classic/latest',
            success: function (res) {
                callback(res);
            },
            fail: function (err) {
                console.log(err);
            }
        });
    };
    return ClassicModel;
}(http_1.Http));
exports.ClassicModel = ClassicModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9DO0FBRXBDO0lBQWtDLGdDQUFJO0lBQXRDOztJQVlBLENBQUM7SUFYQyxnQ0FBUyxHQUFULFVBQVcsUUFBUTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixPQUFPLEVBQUUsVUFBQyxHQUFXO2dCQUNuQixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBVztnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVpELENBQWtDLFdBQUksR0FZckM7QUFaWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAgfSBmcm9tICcuLi91dGlscy9odHRwJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsYXNzaWNNb2RlbCBleHRlbmRzIEh0dHAge1xyXG4gIGdldExhdGVzdCAoY2FsbGJhY2spIHtcclxuICAgIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogJ2NsYXNzaWMvbGF0ZXN0JyxcclxuICAgICAgc3VjY2VzczogKHJlczogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2socmVzKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyOiBPYmplY3QpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59Il19