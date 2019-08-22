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
        var _b = _a.url, url = _b === void 0 ? '' : _b, _c = _a.data, data = _c === void 0 ? {} : _c, _d = _a.method, method = _d === void 0 ? 'GET' : _d;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQWdDO0FBRWhDLG1DQUVpQjtBQUVqQix5Q0FFd0I7QUFFeEIsSUFBTSxJQUFJLEdBQVc7SUFDbkIsQ0FBQyxFQUFFLFdBQVc7SUFDZCxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVEO0lBQUE7SUFvRkEsQ0FBQztJQW5GQyxzQkFBTyxHQUFQLFVBQVEsRUFBa0M7UUFBMUMsaUJBSUM7WUFKUSxXQUFNLEVBQU4sNkJBQU0sRUFBRSxZQUFTLEVBQVQsOEJBQVMsRUFBRSxjQUFhLEVBQWIsbUNBQWE7UUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHdCQUFTLEdBQVQsVUFBVSxTQUFpQjtRQUN6QixTQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFBO1FBQ3RDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsdUJBQVEsR0FBUixVQUFTLEdBQVcsRUFBRSxPQUFZLEVBQUUsTUFBVyxFQUFFLElBQWlCLEVBQUUsTUFBc0IsRUFBRSxTQUFpQjtRQUE3RyxpQkF1Q0M7UUF2Q2dELHFCQUFBLEVBQUEsU0FBaUI7UUFBRSx1QkFBQSxFQUFBLGNBQXNCO1FBQUUsMEJBQUEsRUFBQSxpQkFBaUI7UUFDM0csRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxlQUFNLENBQUMsWUFBWSxHQUFHLEdBQUc7WUFDOUIsTUFBTSxRQUFBO1lBQ04sSUFBSSxNQUFBO1lBQ0osTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7Z0JBRWxDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO2FBQzlCO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBVztnQkFDbkIsSUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDdEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2lCQUNsQjtxQkFBTTtvQkFHTCxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUU7NEJBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FDWCxHQUFHLEVBQ0gsT0FBTyxFQUNQLE1BQU0sRUFDTixJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUE7eUJBQ0Y7cUJBQ0Y7eUJBQU07d0JBQ0wsTUFBTSxFQUFFLENBQUE7d0JBQ1IsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUE7d0JBQ3RDLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7cUJBQzdCO2lCQUNGO1lBQ0gsQ0FBQztZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsQ0FBQTtnQkFDUixLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JCLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsMEJBQVcsR0FBWCxVQUFZLFVBQWU7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLFVBQVUsR0FBRyxDQUFDLENBQUE7U0FDZjtRQUNELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsdUJBQVEsR0FBUjtRQUFBLGlCQUtDO1FBTFEsZUFBUTthQUFSLFVBQVEsRUFBUixxQkFBUSxFQUFSLElBQVE7WUFBUiwwQkFBUTs7UUFDZixJQUFJLEtBQUssR0FBUSxJQUFJLGFBQUssRUFBRSxDQUFBO1FBQzVCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxVQUFDLEtBQUs7WUFDN0IsS0FBSSxDQUFDLFFBQVEsT0FBYixLQUFJLEVBQWEsS0FBSyxTQUFFLElBQUksSUFBQztRQUMvQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxzQkFBTyxHQUFQO1FBQ0UsSUFBTSxLQUFLLEdBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMvQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFBO1FBQzNCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBRXpDLE9BQU8sUUFBUSxHQUFHLE1BQU0sQ0FBQTtJQUMxQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQUFwRkQsSUFvRkM7QUFFTyxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQge1xyXG4gIEJhc2U2NFxyXG59IGZyb20gJy4vYmFzZTY0J1xyXG5cclxuaW1wb3J0IHtcclxuICBUb2tlblxyXG59IGZyb20gJy4uL21vZGVscy90b2tlbidcclxuXHJcbmNvbnN0IHRpcHM6IG9iamVjdCA9IHtcclxuICAxOiAn5oqx5q2J77yM5Ye6546w5LiA5Liq6ZSZ6K+vJyxcclxuICAxMDA1OiAnYXBwa2V55peg5pWI77yM6K+35Zyod3d3LndvdmVydC5jb23nlLPor7cnLFxyXG4gIDMwMDA6ICfmnJ/liIrkuI3lrZjlnKgnXHJcbn1cclxuXHJcbmNsYXNzIEh0dHAge1xyXG4gIHJlcXVlc3Qoe3VybD0nJywgZGF0YSA9IHt9LCBtZXRob2QgPSdHRVQnfSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5fcmVxdWVzdCh1cmwsIHJlc29sdmUsIHJlamVjdCwgZGF0YSwgbWV0aG9kKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHNob3dFcnJvcihlcnJvckNvZGU6IG51bWJlcikge1xyXG4gICAgZXJyb3JDb2RlID0gIWVycm9yQ29kZSA/IDEgOiBlcnJvckNvZGVcclxuICAgIGNvbnN0IHRpcCA9IHRpcHNbZXJyb3JDb2RlXVxyXG4gICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgdGl0bGU6IHRpcCA/IHRpcCA6IHRpcHNbMV0sXHJcbiAgICAgIGljb246ICdub25lJyxcclxuICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyDoh6rliqgg5peg5oSf55+l6YeN5paw5Yi35paw5Luk54mMXHJcbiAgLy8gMuWwj+aXtlxyXG4gIC8vIHRva2VuIDHlsI/ml7Y1OeWIhjU556eSIOi2hei/hzLlsI/ml7ZcclxuICBfcmVxdWVzdCh1cmw6IHN0cmluZywgcmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSwgZGF0YTogb2JqZWN0ID0ge30sIG1ldGhvZDogc3RyaW5nID0gJ0dFVCcsIG5vUmVmZXRjaCA9IGZhbHNlKSB7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBjb25maWcuYXBpX2Jhc2VfdXJsICsgdXJsLFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgLy8gJ2FwcGtleSc6IGNvbmZpZy5hcHBrZXksXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdGhpcy5fZW5jb2RlKClcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogKHJlczogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IHJlcy5zdGF0dXNDb2RlLnRvU3RyaW5nKClcclxuICAgICAgICBpZiAoY29kZS5zdGFydHNXaXRoKCcyJykpIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIHJlamVjdCgpXHJcbiAgICAgICAgICAvLyBfc2hvd19lcnJvcihyZXMuZGF0YS5lcnJvcl9jb2RlKVxyXG4gICAgICAgICAgaWYgKGNvZGUgPT0gJzQwMycpIHtcclxuICAgICAgICAgICAgaWYgKCFub1JlZmV0Y2gpIHtcclxuICAgICAgICAgICAgICB0aGlzLl9yZWZldGNoKFxyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgIHJlamVjdCxcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICBtZXRob2RcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpXHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yX2NvZGUgPSByZXMuZGF0YS5lcnJvcl9jb2RlXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dfZXJyb3IoZXJyb3JfY29kZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICByZWplY3QoKVxyXG4gICAgICAgIHRoaXMuX3Nob3dfZXJyb3IoMSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgX3Nob3dfZXJyb3IoZXJyb3JfY29kZTogYW55KSB7XHJcbiAgICBpZiAoIWVycm9yX2NvZGUpIHtcclxuICAgICAgZXJyb3JfY29kZSA9IDFcclxuICAgIH1cclxuICAgIGNvbnN0IHRpcCA9IHRpcHNbZXJyb3JfY29kZV1cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXAgPyB0aXAgOiB0aXBzWzFdLFxyXG4gICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxuICBfcmVmZXRjaCguLi5wYXJhbSkge1xyXG4gICAgbGV0IHRva2VuOiBhbnkgPSBuZXcgVG9rZW4oKVxyXG4gICAgdG9rZW4uZ2V0VG9rZW5Gcm9tU2VydmVyKCh0b2tlbikgPT4ge1xyXG4gICAgICB0aGlzLl9yZXF1ZXN0KC4uLnBhcmFtLCB0cnVlKVxyXG4gICAgfSlcclxuICB9XHJcbiAgX2VuY29kZSgpIHtcclxuICAgIGNvbnN0IHRva2VuOnN0cmluZyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICBjb25zdCBiYXNlNjQgPSBuZXcgQmFzZTY0KClcclxuICAgIGNvbnN0IHJlc3VsdCA9IGJhc2U2NC5lbmNvZGUodG9rZW4gKyAnOicpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICByZXR1cm4gJ0Jhc2ljICcgKyByZXN1bHRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7SHR0cH0iXX0=