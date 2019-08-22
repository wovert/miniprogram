"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var base64_1 = require("./base64");
var token_1 = require("../models/token");
var tips = {
    1: '抱歉，出现一个错误',
    1005: 'appkey无效，请在www.wovert.com申请',
    3000: '期刊不存在'
};
var Http = (function () {
    function Http() {
    }
    Http.prototype.request = function (_a) {
        var _this = this;
        var url = _a.url, _b = _a.data, data = _b === void 0 ? {} : _b, _c = _a.method, method = _c === void 0 ? 'GET' : _c;
        return new Promise(function (resolve, reject) {
            _this._request(url, resolve, reject, data, method);
        });
    };
    Http.prototype.showError = function (errorCode) {
        errorCode = !errorCode ? 1 : errorCode;
        var tip = tips[errorCode];
        wx.showToast({
            title: tip ? tip : tips[1],
            icon: 'none',
            duration: 2000
        });
    };
    Http.prototype._request = function (url, resolve, reject, data, method, noRefetch) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (method === void 0) { method = 'GET'; }
        if (noRefetch === void 0) { noRefetch = false; }
        wx.request({
            url: config_1.config.api_base_url + url,
            method: method,
            data: data,
            header: {
                'content-type': 'application/json',
                Authorization: this._encode()
            },
            success: function (res) {
                var code = res.statusCode.toString();
                if (code.startsWith('2')) {
                    resolve(res.data);
                }
                else {
                    if (code == '403') {
                        if (!noRefetch) {
                            _this._refetch(url, resolve, reject, data, method);
                        }
                    }
                    else {
                        reject();
                        var error_code = res.data.error_code;
                        _this._show_error(error_code);
                    }
                }
            },
            fail: function () {
                reject();
                _this._show_error(1);
            }
        });
    };
    Http.prototype._show_error = function (error_code) {
        if (!error_code) {
            error_code = 1;
        }
        var tip = tips[error_code];
        wx.showToast({
            title: tip ? tip : tips[1],
            icon: 'none',
            duration: 2000
        });
    };
    Http.prototype._refetch = function () {
        var _this = this;
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var token = new token_1.Token();
        token.getTokenFromServer(function (token) {
            _this._request.apply(_this, param.concat([true]));
        });
    };
    Http.prototype._encode = function () {
        var token = wx.getStorageSync('token');
        var base64 = new base64_1.Base64();
        var result = base64.encode(token + ':');
        return 'Basic ' + result;
    };
    return Http;
}());
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQWdDO0FBRWhDLG1DQUVpQjtBQUVqQix5Q0FFd0I7QUFFeEIsSUFBTSxJQUFJLEdBQVc7SUFDbkIsQ0FBQyxFQUFFLFdBQVc7SUFDZCxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVEO0lBQUE7SUFvRkEsQ0FBQztJQW5GQyxzQkFBTyxHQUFQLFVBQVEsRUFBK0I7UUFBdkMsaUJBSUM7WUFKUSxZQUFHLEVBQUUsWUFBUyxFQUFULDhCQUFTLEVBQUUsY0FBYSxFQUFiLG1DQUFhO1FBQ3BDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx3QkFBUyxHQUFULFVBQVUsU0FBaUI7UUFDekIsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtRQUN0QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELHVCQUFRLEdBQVIsVUFBVSxHQUFXLEVBQUUsT0FBWSxFQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLE1BQXFCLEVBQUUsU0FBaUI7UUFBN0csaUJBdUNDO1FBdkNpRCxxQkFBQSxFQUFBLFNBQWlCO1FBQUUsdUJBQUEsRUFBQSxjQUFxQjtRQUFFLDBCQUFBLEVBQUEsaUJBQWlCO1FBQzNHLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsZUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO1lBQzlCLE1BQU0sUUFBQTtZQUNOLElBQUksTUFBQTtZQUNKLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2dCQUVsQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTthQUM5QjtZQUNELE9BQU8sRUFBRyxVQUFDLEdBQVk7Z0JBQ3JCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDbEI7cUJBQU07b0JBR0wsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO3dCQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNkLEtBQUksQ0FBQyxRQUFRLENBQ1gsR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFBO3lCQUNGO3FCQUNGO3lCQUFNO3dCQUNMLE1BQU0sRUFBRSxDQUFBO3dCQUNSLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO3dCQUN0QyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO3FCQUM3QjtpQkFDRjtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLENBQUE7Z0JBQ1IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELDBCQUFXLEdBQVgsVUFBWSxVQUFlO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixVQUFVLEdBQUcsQ0FBQyxDQUFBO1NBQ2Y7UUFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUxRLGVBQVE7YUFBUixVQUFRLEVBQVIscUJBQVEsRUFBUixJQUFRO1lBQVIsMEJBQVE7O1FBQ2YsSUFBSSxLQUFLLEdBQVEsSUFBSSxhQUFLLEVBQUUsQ0FBQTtRQUM1QixLQUFLLENBQUMsa0JBQWtCLENBQUMsVUFBQyxLQUFLO1lBQzdCLEtBQUksQ0FBQyxRQUFRLE9BQWIsS0FBSSxFQUFhLEtBQUssU0FBRSxJQUFJLElBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0Qsc0JBQU8sR0FBUDtRQUNFLElBQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQTtRQUMzQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUV6QyxPQUFPLFFBQVEsR0FBRyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBcEZELElBb0ZDO0FBRU8sb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IHtcclxuICBCYXNlNjRcclxufSBmcm9tICcuL2Jhc2U2NCdcclxuXHJcbmltcG9ydCB7XHJcbiAgVG9rZW5cclxufSBmcm9tICcuLi9tb2RlbHMvdG9rZW4nXHJcblxyXG5jb25zdCB0aXBzOiBvYmplY3QgPSB7XHJcbiAgMTogJ+aKseatie+8jOWHuueOsOS4gOS4qumUmeivrycsXHJcbiAgMTAwNTogJ2FwcGtleeaXoOaViO+8jOivt+WcqHd3dy53b3ZlcnQuY29t55Sz6K+3JyxcclxuICAzMDAwOiAn5pyf5YiK5LiN5a2Y5ZyoJ1xyXG59XHJcblxyXG5jbGFzcyBIdHRwIHtcclxuICByZXF1ZXN0KHt1cmwsIGRhdGEgPSB7fSwgbWV0aG9kID0nR0VUJ30pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlcXVlc3QodXJsLCByZXNvbHZlLCByZWplY3QsIGRhdGEsIG1ldGhvZClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpIHtcclxuICAgIGVycm9yQ29kZSA9ICFlcnJvckNvZGUgPyAxIDogZXJyb3JDb2RlXHJcbiAgICBjb25zdCB0aXAgPSB0aXBzW2Vycm9yQ29kZV1cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXAgPyB0aXAgOiB0aXBzWzFdLFxyXG4gICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6Ieq5YqoIOaXoOaEn+efpemHjeaWsOWIt+aWsOS7pOeJjFxyXG4gIC8vIDLlsI/ml7ZcclxuICAvLyB0b2tlbiAx5bCP5pe2NTnliIY1OeenkiDotoXov4cy5bCP5pe2XHJcbiAgX3JlcXVlc3QgKHVybDogc3RyaW5nLCByZXNvbHZlOiBhbnksIHJlamVjdDogYW55LCBkYXRhOiBvYmplY3QgPSB7fSwgbWV0aG9kOiBzdHJpbmcgPSdHRVQnLCBub1JlZmV0Y2ggPSBmYWxzZSkge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogY29uZmlnLmFwaV9iYXNlX3VybCArIHVybCxcclxuICAgICAgbWV0aG9kLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIC8vICdhcHBrZXknOiBjb25maWcuYXBwa2V5LFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRoaXMuX2VuY29kZSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MhOiAocmVzPzogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAoY29kZS5zdGFydHNXaXRoKCcyJykpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHJlamVjdCgpXHJcbiAgICAgICAgICAvLyBfc2hvd19lcnJvcihyZXMuZGF0YS5lcnJvcl9jb2RlKVxyXG4gICAgICAgICAgaWYgKGNvZGUgPT0gJzQwMycpIHtcclxuICAgICAgICAgICAgaWYgKCFub1JlZmV0Y2gpIHtcclxuICAgICAgICAgICAgICB0aGlzLl9yZWZldGNoKFxyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIHJlamVjdCxcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICBtZXRob2RcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yX2NvZGUgPSByZXMuZGF0YS5lcnJvcl9jb2RlXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dfZXJyb3IoZXJyb3JfY29kZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICByZWplY3QoKVxyXG4gICAgICAgIHRoaXMuX3Nob3dfZXJyb3IoMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgX3Nob3dfZXJyb3IoZXJyb3JfY29kZTogYW55KSB7XHJcbiAgICBpZiAoIWVycm9yX2NvZGUpIHtcclxuICAgICAgZXJyb3JfY29kZSA9IDFcclxuICAgIH1cclxuICAgIGNvbnN0IHRpcCA9IHRpcHNbZXJyb3JfY29kZV1cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXAgPyB0aXAgOiB0aXBzWzFdLFxyXG4gICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxuICBfcmVmZXRjaCguLi5wYXJhbSkge1xyXG4gICAgbGV0IHRva2VuOiBhbnkgPSBuZXcgVG9rZW4oKVxyXG4gICAgdG9rZW4uZ2V0VG9rZW5Gcm9tU2VydmVyKCh0b2tlbikgPT4ge1xyXG4gICAgICB0aGlzLl9yZXF1ZXN0KC4uLnBhcmFtLCB0cnVlKVxyXG4gICAgfSlcclxuICB9XHJcbiAgX2VuY29kZSgpIHtcclxuICAgIGNvbnN0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICBjb25zdCBiYXNlNjQgPSBuZXcgQmFzZTY0KClcclxuICAgIGNvbnN0IHJlc3VsdCA9IGJhc2U2NC5lbmNvZGUodG9rZW4gKyAnOicpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICByZXR1cm4gJ0Jhc2ljICcgKyByZXN1bHRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7SHR0cH0iXX0=