"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var tips = {
    1: '抱歉，出现一个错误',
    1005: 'appkey无效，请在www.wovert.com申请',
    3000: '期刊不存在'
};
var showError = function (errorCode) {
    errorCode = !errorCode ? 1 : errorCode;
    wx.showToast({
        title: tips[errorCode],
        icon: 'none',
        duration: 2000
    });
};
var Http = (function () {
    function Http() {
    }
    Http.prototype.request = function (params) {
        wx.request({
            url: config_1.config.api_base_url + params.url,
            method: params.method ? params.method : 'GET',
            data: params.data,
            header: {
                'content-type': 'application/json',
                'appkey': config_1.config.appkey
            },
            success: function (res) {
                var code = res.statusCode.toString();
                if (code.startsWith('2')) {
                    params.success && params.success(res.data);
                }
                else {
                    showError(res.data.error_code);
                }
            },
            fail: function () {
                showError(1);
            }
        });
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBZ0M7QUFFaEMsSUFBTSxJQUFJLEdBQVU7SUFDbEIsQ0FBQyxFQUFFLFdBQVc7SUFDZCxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVELElBQU0sU0FBUyxHQUFHLFVBQUMsU0FBaUI7SUFDbEMsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtJQUN0QyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEIsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUNEO0lBQUE7SUF1QkEsQ0FBQztJQXRCQyxzQkFBTyxHQUFQLFVBQVMsTUFBYztRQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGVBQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUc7WUFDckMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxRQUFRLEVBQUUsZUFBTSxDQUFDLE1BQU07YUFDeEI7WUFDRCxPQUFPLEVBQUcsVUFBQyxHQUFZO2dCQUNyQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzNDO3FCQUFNO29CQUNOLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUM5QjtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUc7Z0JBQ0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQUVPLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHRpcHM6T2JqZWN0ID0ge1xyXG4gIDE6ICfmirHmrYnvvIzlh7rnjrDkuIDkuKrplJnor68nLFxyXG4gIDEwMDU6ICdhcHBrZXnml6DmlYjvvIzor7flnKh3d3cud292ZXJ0LmNvbeeUs+ivtycsXHJcbiAgMzAwMDogJ+acn+WIiuS4jeWtmOWcqCdcclxufVxyXG5cclxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yQ29kZTogTnVtYmVyKSA9PiB7XHJcbiAgZXJyb3JDb2RlID0gIWVycm9yQ29kZSA/IDEgOiBlcnJvckNvZGVcclxuICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgdGl0bGU6IHRpcHNbZXJyb3JDb2RlXSxcclxuICAgIGljb246ICdub25lJyxcclxuICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgfSlcclxufVxyXG5jbGFzcyBIdHRwIHtcclxuICByZXF1ZXN0IChwYXJhbXM6IE9iamVjdCkge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogY29uZmlnLmFwaV9iYXNlX3VybCArIHBhcmFtcy51cmwsXHJcbiAgICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCA/IHBhcmFtcy5tZXRob2QgOiAnR0VUJywgXHJcbiAgICAgIGRhdGE6IHBhcmFtcy5kYXRhLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICdhcHBrZXknOiBjb25maWcuYXBwa2V5XHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MhOiAocmVzPzogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IGNvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXHJcbiAgICAgICAgaWYgKGNvZGUuc3RhcnRzV2l0aCgnMicpKSB7XHJcbiAgICAgICAgICBwYXJhbXMuc3VjY2VzcyAmJiBwYXJhbXMuc3VjY2VzcyhyZXMuZGF0YSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICBzaG93RXJyb3IocmVzLmRhdGEuZXJyb3JfY29kZSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwhOiAoKSA9PiB7XHJcbiAgICAgICAgc2hvd0Vycm9yKDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge0h0dHB9Il19