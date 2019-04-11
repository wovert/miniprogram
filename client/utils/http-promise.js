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
    Http.prototype.request = function (_a) {
        var _this = this;
        var url = _a.url, _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.method, method = _c === void 0 ? 'GET' : _c;
        return new Promise(function (resolve, reject) {
            _this._request(url, resolve, reject, data, method);
        });
    };
    Http.prototype._request = function (url, resolve, reject, data, method) {
        if (data === void 0) { data = {}; }
        if (method === void 0) { method = 'GET'; }
        wx.request({
            url: config_1.config.api_base_url + url,
            method: method ? method : 'GET',
            data: data,
            header: {
                'content-type': 'application/json',
                'appkey': config_1.config.appkey
            },
            success: function (res) {
                var code = res.statusCode.toString();
                if (code.startsWith('2')) {
                    resolve(res.data);
                }
                else {
                    reject();
                    showError(res.data.error_code);
                }
            },
            fail: function () {
                reject();
                showError(1);
            }
        });
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQWdDO0FBRWhDLElBQU0sSUFBSSxHQUFXO0lBQ25CLENBQUMsRUFBRSxXQUFXO0lBQ2QsSUFBSSxFQUFFLDZCQUE2QjtJQUNuQyxJQUFJLEVBQUUsT0FBTztDQUNkLENBQUE7QUFFRDtJQUFBO1FBT0UsY0FBUyxHQUFHLFVBQUMsU0FBaUI7WUFDNUIsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtZQUN0QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO0lBMEJILENBQUM7SUF4Q0Msc0JBQU8sR0FBUCxVQUFRLEVBQStCO1FBQXZDLGlCQUlDO1lBSlEsWUFBRyxFQUFFLFlBQVMsRUFBVCw4QkFBUyxFQUFFLGNBQWEsRUFBYixtQ0FBYTtRQUNwQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBWUQsdUJBQVEsR0FBUixVQUFVLEdBQVcsRUFBRSxPQUFZLEVBQUUsTUFBVyxFQUFFLElBQWlCLEVBQUUsTUFBcUI7UUFBeEMscUJBQUEsRUFBQSxTQUFpQjtRQUFFLHVCQUFBLEVBQUEsY0FBcUI7UUFDeEYsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxlQUFNLENBQUMsWUFBWSxHQUFHLEdBQUc7WUFDOUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQy9CLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLFFBQVEsRUFBRSxlQUFNLENBQUMsTUFBTTthQUN4QjtZQUNELE9BQU8sRUFBRyxVQUFDLEdBQVk7Z0JBQ3JCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDbEI7cUJBQU07b0JBQ0wsTUFBTSxFQUFFLENBQUE7b0JBQ1IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7aUJBQy9CO1lBQ0gsQ0FBQztZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsQ0FBQTtnQkFDUixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDZCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBRU8sb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuY29uc3QgdGlwczogb2JqZWN0ID0ge1xyXG4gIDE6ICfmirHmrYnvvIzlh7rnjrDkuIDkuKrplJnor68nLFxyXG4gIDEwMDU6ICdhcHBrZXnml6DmlYjvvIzor7flnKh3d3cud292ZXJ0LmNvbeeUs+ivtycsXHJcbiAgMzAwMDogJ+acn+WIiuS4jeWtmOWcqCdcclxufVxyXG5cclxuY2xhc3MgSHR0cCB7XHJcbiAgcmVxdWVzdCh7dXJsLCBkYXRhID0ge30sIG1ldGhvZCA9J0dFVCd9KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZXF1ZXN0KHVybCwgcmVzb2x2ZSwgcmVqZWN0LCBkYXRhLCBtZXRob2QpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgc2hvd0Vycm9yID0gKGVycm9yQ29kZTogbnVtYmVyKSA9PiB7XHJcbiAgICBlcnJvckNvZGUgPSAhZXJyb3JDb2RlID8gMSA6IGVycm9yQ29kZVxyXG4gICAgY29uc3QgdGlwID0gdGlwc1tlcnJvckNvZGVdXHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogdGlwID8gdGlwIDogdGlwc1sxXSxcclxuICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9yZXF1ZXN0ICh1cmw6IHN0cmluZywgcmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSwgZGF0YTogb2JqZWN0ID0ge30sIG1ldGhvZDogc3RyaW5nID0nR0VUJykge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogY29uZmlnLmFwaV9iYXNlX3VybCArIHVybCxcclxuICAgICAgbWV0aG9kOiBtZXRob2QgPyBtZXRob2QgOiAnR0VUJywgXHJcbiAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ2FwcGtleSc6IGNvbmZpZy5hcHBrZXlcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyE6IChyZXM/OiBvYmplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gcmVzLnN0YXR1c0NvZGUudG9TdHJpbmcoKVxyXG4gICAgICAgIGlmIChjb2RlLnN0YXJ0c1dpdGgoJzInKSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KClcclxuICAgICAgICAgIHNob3dFcnJvcihyZXMuZGF0YS5lcnJvcl9jb2RlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKCkgPT4ge1xyXG4gICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgc2hvd0Vycm9yKDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge0h0dHB9Il19