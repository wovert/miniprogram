"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var tips = {
    1: '抱歉，出现一个错误',
    1005: 'appkey无效，请在www.wovert.com申请',
    3000: '期刊不存在'
};
var Http = (function () {
    function Http() {
        this.showError = function (errorCode) {
            errorCode = !errorCode ? 1 : errorCode;
            var tip = tips[errorCode];
            wx.showToast({
                title: tip ? tip : tips[1],
                icon: 'none',
                duration: 2000
            });
        };
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
            fail: function () { return showError(1); }
        });
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBZ0M7QUFFaEMsSUFBTSxJQUFJLEdBQVc7SUFDbkIsQ0FBQyxFQUFFLFdBQVc7SUFDZCxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVEO0lBQUE7UUFxQkUsY0FBUyxHQUFHLFVBQUMsU0FBaUI7WUFDNUIsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUN0QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQTdCQyxzQkFBTyxHQUFQLFVBQVMsTUFBYztRQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGVBQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUc7WUFDckMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxRQUFRLEVBQUUsZUFBTSxDQUFDLE1BQU07YUFDeEI7WUFDRCxPQUFPLEVBQUcsVUFBQyxHQUFZO2dCQUNyQixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUN0QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7aUJBQzNDO3FCQUFNO29CQUNOLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUM5QjtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUcsY0FBTSxPQUFBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBWixDQUFZO1NBQzFCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFVSCxXQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQUVPLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHRpcHM6IG9iamVjdCA9IHtcclxuICAxOiAn5oqx5q2J77yM5Ye6546w5LiA5Liq6ZSZ6K+vJyxcclxuICAxMDA1OiAnYXBwa2V55peg5pWI77yM6K+35Zyod3d3LndvdmVydC5jb23nlLPor7cnLFxyXG4gIDMwMDA6ICfmnJ/liIrkuI3lrZjlnKgnXHJcbn1cclxuXHJcbmNsYXNzIEh0dHAge1xyXG4gIHJlcXVlc3QgKHBhcmFtczogb2JqZWN0KSB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBjb25maWcuYXBpX2Jhc2VfdXJsICsgcGFyYW1zLnVybCxcclxuICAgICAgbWV0aG9kOiBwYXJhbXMubWV0aG9kID8gcGFyYW1zLm1ldGhvZCA6ICdHRVQnLCBcclxuICAgICAgZGF0YTogcGFyYW1zLmRhdGEsXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2FwcGtleSc6IGNvbmZpZy5hcHBrZXlcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyE6IChyZXM/OiBvYmplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChjb2RlLnN0YXJ0c1dpdGgoJzInKSkge1xyXG4gICAgICAgICAgcGFyYW1zLnN1Y2Nlc3MgJiYgcGFyYW1zLnN1Y2Nlc3MocmVzLmRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgc2hvd0Vycm9yKHJlcy5kYXRhLmVycm9yX2NvZGUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsITogKCkgPT4gc2hvd0Vycm9yKDEpXHJcbiAgICB9KVxyXG4gIH1cclxuICBzaG93RXJyb3IgPSAoZXJyb3JDb2RlOiBudW1iZXIpID0+IHtcclxuICAgIGVycm9yQ29kZSA9ICFlcnJvckNvZGUgPyAxIDogZXJyb3JDb2RlXHJcbiAgICBjb25zdCB0aXAgPSB0aXBzW2Vycm9yQ29kZV1cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXAgPyB0aXAgOiB0aXBzWzFdLFxyXG4gICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtIdHRwfSJdfQ==