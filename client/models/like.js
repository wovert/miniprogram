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
    LikeModel.prototype.getClassicLikeStatus = function (id, category, callback) {
        this.request({
            url: "classic/" + category + "/" + id + "/favor",
            success: callback
        });
    };
    return LikeModel;
}(http_1.Http));
exports.LikeModel = LikeModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpa2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQW9DO0FBRXBDO0lBQStCLDZCQUFJO0lBQW5DOztJQW9CQSxDQUFDO0lBbkJDLHdCQUFJLEdBQUosVUFBTSxRQUFnQixFQUFFLE1BQWMsRUFBRSxJQUFZO1FBQ2xELElBQU0sR0FBRyxHQUFXLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFBO1FBQ2hFLElBQU0sSUFBSSxHQUFHO1lBQ1gsTUFBTSxRQUFBO1lBQ04sSUFBSSxNQUFBO1NBQ0wsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEtBQUE7WUFDSCxNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksTUFBQTtTQUNMLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx3Q0FBb0IsR0FBcEIsVUFBc0IsRUFBVSxFQUFFLFFBQWdCLEVBQUUsUUFBYTtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsR0FBRyxFQUFFLGFBQVcsUUFBUSxTQUFJLEVBQUUsV0FBUTtZQUN0QyxPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBcEJELENBQStCLFdBQUksR0FvQmxDO0FBcEJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uL3V0aWxzL2h0dHAnXHJcblxyXG5leHBvcnQgY2xhc3MgTGlrZU1vZGVsIGV4dGVuZHMgSHR0cCB7XHJcbiAgbGlrZSAoYmVoYXZpb3I6IHN0cmluZywgYXJ0X2lkOiBudW1iZXIsIHR5cGU6IG51bWJlcikge1xyXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBiZWhhdmlvciA9PT0gJ2xpa2UnID8gJ2xpa2UnIDogJ2xpa2UvY2FuY2VsJ1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgYXJ0X2lkLFxyXG4gICAgICB0eXBlXHJcbiAgICB9XHJcbiAgICB0aGlzLnJlcXVlc3Qoe1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NpY0xpa2VTdGF0dXMgKGlkOiBudW1iZXIsIGNhdGVnb3J5OiBudW1iZXIsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgIHRoaXMucmVxdWVzdCh7XHJcbiAgICAgIHVybDogYGNsYXNzaWMvJHtjYXRlZ29yeX0vJHtpZH0vZmF2b3JgLFxyXG4gICAgICBzdWNjZXNzOiBjYWxsYmFja1xyXG4gICAgfSlcclxuICB9XHJcbn0iXX0=