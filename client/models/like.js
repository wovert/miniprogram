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
var LikeModel = (function (_super) {
    __extends(LikeModel, _super);
    function LikeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LikeModel.prototype.like = function (behavior, art_id, type) {
        var url = behavior === 'like' ? 'like' : 'like/cancel';
        var data = {
            art_id: art_id,
            type: type
        };
        this.request({
            url: url,
            method: 'POST',
            data: data
        });
    };
    return LikeModel;
}(http_1.Http));
exports.LikeModel = LikeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpa2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9DO0FBRXBDO0lBQStCLDZCQUFJO0lBQW5DOztJQWFBLENBQUM7SUFaQyx3QkFBSSxHQUFKLFVBQU0sUUFBZ0IsRUFBRSxNQUFjLEVBQUUsSUFBWTtRQUNsRCxJQUFJLEdBQUcsR0FBVyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtRQUM5RCxJQUFNLElBQUksR0FBRztZQUNYLE1BQU0sUUFBQTtZQUNOLElBQUksTUFBQTtTQUNMLENBQUE7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsR0FBRyxLQUFBO1lBQ0gsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLE1BQUE7U0FDTCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBK0IsV0FBSSxHQWFsQztBQWJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uL3V0aWxzL2h0dHAnXHJcblxyXG5leHBvcnQgY2xhc3MgTGlrZU1vZGVsIGV4dGVuZHMgSHR0cCB7XHJcbiAgbGlrZSAoYmVoYXZpb3I6IFN0cmluZywgYXJ0X2lkOiBOdW1iZXIsIHR5cGU6IE51bWJlcikge1xyXG4gICAgbGV0IHVybDogU3RyaW5nID0gYmVoYXZpb3IgPT09ICdsaWtlJyA/ICdsaWtlJyA6ICdsaWtlL2NhbmNlbCdcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGFydF9pZCxcclxuICAgICAgdHlwZVxyXG4gICAgfVxyXG4gICAgdGhpcy5yZXF1ZXN0KHtcclxuICAgICAgdXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgZGF0YVxyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=