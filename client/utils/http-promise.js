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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC1wcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsb0NBQWdDO0FBRWhDLG1DQUVpQjtBQUVqQix5Q0FFd0I7QUFFeEIsSUFBTSxJQUFJLEdBQVc7SUFDbkIsQ0FBQyxFQUFFLFdBQVc7SUFDZCxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSxPQUFPO0NBQ2QsQ0FBQTtBQUVEO0lBQUE7SUFrRkEsQ0FBQztJQWpGQyxzQkFBTyxHQUFQLFVBQVEsRUFBK0I7UUFBdkMsaUJBSUM7WUFKUSxZQUFHLEVBQUUsWUFBUyxFQUFULDhCQUFTLEVBQUUsY0FBYSxFQUFiLG1DQUFhO1FBQ3BDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCx3QkFBUyxHQUFULFVBQVUsU0FBaUI7UUFDekIsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtRQUN0QyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdELHVCQUFRLEdBQVIsVUFBVSxHQUFXLEVBQUUsT0FBWSxFQUFFLE1BQVcsRUFBRSxJQUFpQixFQUFFLE1BQXFCLEVBQUUsU0FBaUI7UUFBN0csaUJBdUNDO1FBdkNpRCxxQkFBQSxFQUFBLFNBQWlCO1FBQUUsdUJBQUEsRUFBQSxjQUFxQjtRQUFFLDBCQUFBLEVBQUEsaUJBQWlCO1FBQzNHLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsZUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHO1lBQzlCLE1BQU0sUUFBQTtZQUNOLElBQUksTUFBQTtZQUNKLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2dCQUVsQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTthQUM5QjtZQUNELE9BQU8sRUFBRyxVQUFDLEdBQVk7Z0JBQ3JCLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtpQkFDbEI7cUJBQU07b0JBR0wsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO3dCQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNkLEtBQUksQ0FBQyxRQUFRLENBQ1gsR0FBRyxFQUNILE9BQU8sRUFDUCxNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sQ0FDUCxDQUFBO3lCQUNGO3FCQUNGO3lCQUFNO3dCQUNMLE1BQU0sRUFBRSxDQUFBO3dCQUNSLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO3dCQUN0QyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO3FCQUM3QjtpQkFDRjtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLENBQUE7Z0JBQ1IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyQixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELDBCQUFXLEdBQVgsVUFBWSxVQUFlO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDZixVQUFVLEdBQUcsQ0FBQyxDQUFBO1NBQ2Y7UUFDRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNYLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELHVCQUFRLEdBQVI7UUFBQSxpQkFLQztRQUxRLGVBQVE7YUFBUixVQUFRLEVBQVIscUJBQVEsRUFBUixJQUFRO1lBQVIsMEJBQVE7O1FBQ2YsSUFBSSxLQUFLLEdBQVEsSUFBSSxhQUFLLEVBQUUsQ0FBQTtRQUM1QixLQUFLLENBQUMsa0JBQWtCLENBQUMsVUFBQyxLQUFLO1lBQzdCLEtBQUksQ0FBQyxRQUFRLE9BQWIsS0FBSSxFQUFhLEtBQUssU0FBRSxJQUFJLElBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0Qsc0JBQU8sR0FBUDtRQUNFLElBQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDL0MsSUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQTtRQUMzQixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQTtRQUV6QyxPQUFPLFFBQVEsR0FBRyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDLEFBbEZELElBa0ZDO0FBRU8sb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW1wb3J0IHtcclxuICBCYXNlNjRcclxufSBmcm9tICcuL2Jhc2U2NCdcclxuXHJcbmltcG9ydCB7XHJcbiAgVG9rZW5cclxufSBmcm9tICcuLi9tb2RlbHMvdG9rZW4nXHJcblxyXG5jb25zdCB0aXBzOiBvYmplY3QgPSB7XHJcbiAgMTogJ+aKseatie+8jOWHuueOsOS4gOS4qumUmeivrycsXHJcbiAgMTAwNTogJ2FwcGtleeaXoOaViO+8jOivt+WcqHd3dy53b3ZlcnQuY29t55Sz6K+3JyxcclxuICAzMDAwOiAn5pyf5YiK5LiN5a2Y5ZyoJ1xyXG59XHJcblxyXG5jbGFzcyBIdHRwIHtcclxuICByZXF1ZXN0KHt1cmwsIGRhdGEgPSB7fSwgbWV0aG9kID0nR0VUJ30pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlcXVlc3QodXJsLCByZXNvbHZlLCByZWplY3QsIGRhdGEsIG1ldGhvZClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBzaG93RXJyb3IoZXJyb3JDb2RlOiBudW1iZXIpIHtcclxuICAgIGVycm9yQ29kZSA9ICFlcnJvckNvZGUgPyAxIDogZXJyb3JDb2RlXHJcbiAgICBjb25zdCB0aXAgPSB0aXBzW2Vycm9yQ29kZV1cclxuICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgIHRpdGxlOiB0aXAgPyB0aXAgOiB0aXBzWzFdLFxyXG4gICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8g6Ieq5YqoIOaXoOaEn+efpemHjeaWsOWIt+aWsOS7pOeJjFxyXG4gIF9yZXF1ZXN0ICh1cmw6IHN0cmluZywgcmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSwgZGF0YTogb2JqZWN0ID0ge30sIG1ldGhvZDogc3RyaW5nID0nR0VUJywgbm9SZWZldGNoID0gZmFsc2UpIHtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGNvbmZpZy5hcGlfYmFzZV91cmwgKyB1cmwsXHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgZGF0YSxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAvLyAnYXBwa2V5JzogY29uZmlnLmFwcGtleSxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0aGlzLl9lbmNvZGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzITogKHJlcz86IG9iamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpXHJcbiAgICAgICAgaWYgKGNvZGUuc3RhcnRzV2l0aCgnMicpKSB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyByZWplY3QoKVxyXG4gICAgICAgICAgLy8gX3Nob3dfZXJyb3IocmVzLmRhdGEuZXJyb3JfY29kZSlcclxuICAgICAgICAgIGlmIChjb2RlID09ICc0MDMnKSB7XHJcbiAgICAgICAgICAgIGlmICghbm9SZWZldGNoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fcmVmZXRjaChcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICByZWplY3QsXHJcbiAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QoKVxyXG4gICAgICAgICAgICBjb25zdCBlcnJvcl9jb2RlID0gcmVzLmRhdGEuZXJyb3JfY29kZVxyXG4gICAgICAgICAgICB0aGlzLl9zaG93X2Vycm9yKGVycm9yX2NvZGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KClcclxuICAgICAgICB0aGlzLl9zaG93X2Vycm9yKDEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIF9zaG93X2Vycm9yKGVycm9yX2NvZGU6IGFueSkge1xyXG4gICAgaWYgKCFlcnJvcl9jb2RlKSB7XHJcbiAgICAgIGVycm9yX2NvZGUgPSAxXHJcbiAgICB9XHJcbiAgICBjb25zdCB0aXAgPSB0aXBzW2Vycm9yX2NvZGVdXHJcbiAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICB0aXRsZTogdGlwID8gdGlwIDogdGlwc1sxXSxcclxuICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgfSlcclxuICB9XHJcbiAgX3JlZmV0Y2goLi4ucGFyYW0pIHtcclxuICAgIGxldCB0b2tlbjogYW55ID0gbmV3IFRva2VuKClcclxuICAgIHRva2VuLmdldFRva2VuRnJvbVNlcnZlcigodG9rZW4pID0+IHtcclxuICAgICAgdGhpcy5fcmVxdWVzdCguLi5wYXJhbSwgdHJ1ZSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIF9lbmNvZGUoKSB7XHJcbiAgICBjb25zdCB0b2tlbjpzdHJpbmcgPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gICAgY29uc3QgYmFzZTY0ID0gbmV3IEJhc2U2NCgpXHJcbiAgICBjb25zdCByZXN1bHQgPSBiYXNlNjQuZW5jb2RlKHRva2VuICsgJzonKVxyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgcmV0dXJuICdCYXNpYyAnICsgcmVzdWx0XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge0h0dHB9Il19