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
    Http.request = function (params) {
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
                    params.success(res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBZ0M7QUFFaEMsSUFBTSxJQUFJLEdBQVU7SUFDbEIsQ0FBQyxFQUFFLFdBQVc7SUFDZCxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVELElBQU0sU0FBUyxHQUFHLFVBQUMsU0FBaUI7SUFDbEMsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtJQUN0QyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdEIsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNmLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQUNEO0lBQUE7SUF1QkEsQ0FBQztJQXRCUSxZQUFPLEdBQWQsVUFBZ0IsTUFBYztRQUM1QixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLGVBQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUc7WUFDckMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDN0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxRQUFRLEVBQUUsZUFBTSxDQUFDLE1BQU07YUFDeEI7WUFDRCxPQUFPLEVBQUcsVUFBQyxHQUFZO2dCQUNyQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ3BCO3FCQUFNO29CQUNOLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2lCQUM5QjtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUc7Z0JBQ0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2QsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQUVPLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmNvbnN0IHRpcHM6T2JqZWN0ID0ge1xyXG4gIDE6ICfmirHmrYnvvIzlh7rnjrDkuIDkuKrplJnor68nLFxyXG4gIDEwMDU6ICdhcHBrZXnml6DmlYjvvIzor7flnKh3d3cud292ZXJ0LmNvbeeUs+ivtycsXHJcbiAgMzAwMDogJ+acn+WIiuS4jeWtmOWcqCdcclxufVxyXG5cclxuY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yQ29kZTogTnVtYmVyKSA9PiB7XHJcbiAgZXJyb3JDb2RlID0gIWVycm9yQ29kZSA/IDEgOiBlcnJvckNvZGVcclxuICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgdGl0bGU6IHRpcHNbZXJyb3JDb2RlXSxcclxuICAgIGljb246ICdub25lJyxcclxuICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgfSlcclxufVxyXG5jbGFzcyBIdHRwIHtcclxuICBzdGF0aWMgcmVxdWVzdCAocGFyYW1zOiBPYmplY3QpIHtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGNvbmZpZy5hcGlfYmFzZV91cmwgKyBwYXJhbXMudXJsLFxyXG4gICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgPyBwYXJhbXMubWV0aG9kIDogJ0dFVCcsIFxyXG4gICAgICBkYXRhOiBwYXJhbXMuZGF0YSxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnYXBwa2V5JzogY29uZmlnLmFwcGtleVxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzITogKHJlcz86IE9iamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBjb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChjb2RlLnN0YXJ0c1dpdGgoJzInKSkge1xyXG4gICAgICAgICAgcGFyYW1zLnN1Y2Nlc3MocmVzKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIHNob3dFcnJvcihyZXMuZGF0YS5lcnJvcl9jb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbCE6ICgpID0+IHtcclxuICAgICAgICBzaG93RXJyb3IoMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7SHR0cH0iXX0=