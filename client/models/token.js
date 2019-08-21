"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var Token = (function () {
    function Token() {
        this.verifyUrl = config_1.config.api_base_url + 'token/verify';
        this.tokenUrl = config_1.config.api_base_url + 'token';
    }
    Token.prototype.verify = function () {
        var token = wx.getStorageSync('token');
        if (!token) {
            this.getTokenFromServer();
        }
        else {
            this._veirfyFromServer(token);
        }
    };
    Token.prototype._veirfyFromServer = function (token) {
        var that = this;
        wx.request({
            url: that.verifyUrl,
            method: 'POST',
            data: {
                token: token
            },
            success: function (res) {
                var valid = res.data.isValid;
                if (!valid) {
                    that.getTokenFromServer();
                }
            }
        });
    };
    Token.prototype.getTokenFromServer = function (callBack) {
        var that = this;
        wx.login({
            success: function (res) {
                wx.request({
                    url: that.tokenUrl,
                    method: 'POST',
                    data: {
                        account: res.code,
                        type: 100
                    },
                    success: function (res) {
                        wx.setStorageSync('token', res.data.token);
                        callBack && callBack(res.data.token);
                    }
                });
            }
        });
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLG9DQUdrQjtBQUVsQjtJQUNFO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFNLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQTtRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQU0sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFBO0lBQy9DLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0UsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM5QjtJQUNILENBQUM7SUFFRCxpQ0FBaUIsR0FBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUztZQUNuQixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsS0FBSzthQUNiO1lBQ0QsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7aUJBQzFCO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxrQ0FBa0IsR0FBbEIsVUFBbUIsUUFBYTtRQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQVMsR0FBRztnQkFDbkIsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRTt3QkFDSixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUk7d0JBQ2pCLElBQUksRUFBQyxHQUFHO3FCQUNUO29CQUNELE9BQU8sRUFBRSxVQUFTLEdBQUc7d0JBQ25CLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBQzFDLFFBQVEsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDdEMsQ0FBQztpQkFDRixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDLEFBbkRELElBbURDO0FBR0Msc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlvJXnlKjkvb/nlKhlczbnmoRtb2R1bGXlvJXlhaXlkozlrprkuYlcclxuLy8g5YWo5bGA5Y+Y6YeP5LulZ1/lvIDlpLRcclxuLy8g56eB5pyJ5Ye95pWw5LulX+W8gOWktFxyXG5pbXBvcnQge1xyXG4gIGNvbmZpZ1xyXG59XHJcbiAgZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuY2xhc3MgVG9rZW4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy52ZXJpZnlVcmwgPSBjb25maWcuYXBpX2Jhc2VfdXJsICsgJ3Rva2VuL3ZlcmlmeSdcclxuICAgIHRoaXMudG9rZW5VcmwgPSBjb25maWcuYXBpX2Jhc2VfdXJsICsgJ3Rva2VuJ1xyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KCkge1xyXG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgdGhpcy5nZXRUb2tlbkZyb21TZXJ2ZXIoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdmVpcmZ5RnJvbVNlcnZlcih0b2tlbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF92ZWlyZnlGcm9tU2VydmVyKHRva2VuOiBzdHJpbmcpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IHRoYXQudmVyaWZ5VXJsLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBsZXQgdmFsaWQgPSByZXMuZGF0YS5pc1ZhbGlkXHJcbiAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgdGhhdC5nZXRUb2tlbkZyb21TZXJ2ZXIoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldFRva2VuRnJvbVNlcnZlcihjYWxsQmFjazogYW55KSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoYXQudG9rZW5VcmwsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgYWNjb3VudDogcmVzLmNvZGUsXHJcbiAgICAgICAgICAgIHR5cGU6MTAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIHJlcy5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjayhyZXMuZGF0YS50b2tlbilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBUb2tlblxyXG59Il19