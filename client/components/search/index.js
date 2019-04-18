"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keyword_js_1 = require("../../models/keyword.js");
var book_js_1 = require("../../models/book.js");
var keywordModel = new keyword_js_1.KeywordModel();
var bookModel = new book_js_1.BookModel();
Component({
    properties: {
        more: {
            type: String,
            observer: 'loadMore'
        }
    },
    data: {
        historyWords: [],
        hotWords: [],
        searching: false,
        q: '',
        loading: false,
        loadingCenter: false
    },
    attached: function () {
        var _this = this;
        this.setData({
            historyWords: keywordModel.getHistory()
        });
        keywordModel.getHot().then(function (res) {
            _this.setData({
                hotWords: res.hot
            });
        });
    },
    methods: {
        onCancel: function (event) {
            this.triggerEvent('cancel', {}, {});
        },
        onConfirm: function (event) {
            var q = event.detail.value || event.detail.text;
            keywordModel.addToHistory(q);
        },
        _showLoadingCenter: function () {
            this.setData({
                loadingCenter: true
            });
        },
        _hideLoadingCenter: function () {
            this.setData({
                loadingCenter: false
            });
        },
        _showResult: function () {
            this.setData({
                searching: true
            });
        },
        _closeResult: function () {
            this.setData({
                searching: false,
                q: ''
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUVnQztBQUVoQyxnREFFNkI7QUFNN0IsSUFBTSxZQUFZLEdBQWlCLElBQUkseUJBQVksRUFBRSxDQUFBO0FBQ3JELElBQU0sU0FBUyxHQUFjLElBQUksbUJBQVMsRUFBRSxDQUFBO0FBRTVDLFNBQVMsQ0FBQztJQUtSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7U0FFckI7S0FDRjtJQUlELElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEtBQUs7UUFDaEIsQ0FBQyxFQUFFLEVBQUU7UUFDTCxPQUFPLEVBQUUsS0FBSztRQUNkLGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBRUQsUUFBUSxFQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsWUFBWSxFQUFFLFlBQVksQ0FBQyxVQUFVLEVBQUU7U0FDeEMsQ0FBQyxDQUFBO1FBQ0YsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7WUFDbEMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLEdBQUc7YUFDbEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTyxFQUFFO1FBcUJQLFFBQVEsRUFBUixVQUFTLEtBQVU7WUFFakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3JDLENBQUM7UUFPRCxTQUFTLEVBQVQsVUFBVSxLQUFVO1lBSWxCLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1lBRWpELFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFhOUIsQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxrQkFBa0I7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsV0FBVztZQUNULElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELFlBQVk7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixDQUFDLEVBQUUsRUFBRTthQUNOLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FRRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEtleXdvcmRNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMva2V5d29yZC5qcydcblxuaW1wb3J0IHtcbiAgQm9va01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscy9ib29rLmpzJ1xuXG4vLyBpbXBvcnQge1xuLy8gICBwYWdpbmF0aW9uQmV2XG4vLyB9IGZyb20gJy4uL2JlaGF2aW9ycy9wYWdpbmF0aW9uLmpzJ1xuXG5jb25zdCBrZXl3b3JkTW9kZWw6IEtleXdvcmRNb2RlbCA9IG5ldyBLZXl3b3JkTW9kZWwoKVxuY29uc3QgYm9va01vZGVsOiBCb29rTW9kZWwgPSBuZXcgQm9va01vZGVsKClcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgLy8gYmVoYXZpb3JzOiBbcGFnaW5hdGlvbkJldl0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBtb3JlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBvYnNlcnZlcjogJ2xvYWRNb3JlJ1xuICAgICAgLy8gdHJ1ZSwgdHJ1ZSwgdHJ1ZSxcbiAgICB9XG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBoaXN0b3J5V29yZHM6IFtdLCAvLyDljoblj7LmkJzntKJcbiAgICBob3RXb3JkczogW10sIC8vIOeDremXqOaQnOe0olxuICAgIHNlYXJjaGluZzogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuaQnOe0oue7hOS7tlxuICAgIHE6ICcnLFxuICAgIGxvYWRpbmc6IGZhbHNlLCAvLyDliqDovb3nirbmgIFcbiAgICBsb2FkaW5nQ2VudGVyOiBmYWxzZVxuICB9LFxuXG4gIGF0dGFjaGVkICgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaGlzdG9yeVdvcmRzOiBrZXl3b3JkTW9kZWwuZ2V0SGlzdG9yeSgpXG4gICAgfSlcbiAgICBrZXl3b3JkTW9kZWwuZ2V0SG90KCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGhvdFdvcmRzOiByZXMuaG90XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIC8vIGxvYWRNb3JlICgpIHtcbiAgICAvLyAgIGlmICghdGhpcy5kYXRhLnEpIHtcbiAgICAvLyAgICAgcmV0dXJuXG4gICAgLy8gICB9XG4gICAgLy8gICBpZiAodGhpcy5pc0xvY2tlZCgpKSB7XG4gICAgLy8gICAgIHJldHVyblxuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKHRoaXMuaGFzTW9yZSgpKSB7XG4gICAgLy8gICAgIHRoaXMubG9ja2VkKClcbiAgICAvLyAgICAgYm9va01vZGVsLnNlYXJjaCh0aGlzLmdldEN1cnJlbnRTdGFydCgpLCB0aGlzLmRhdGEucSlcbiAgICAvLyAgICAgICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuc2V0TW9yZURhdGEocmVzLmJvb2tzKVxuICAgIC8vICAgICAgICAgdGhpcy51bkxvY2tlZCgpXG4gICAgLy8gICAgICAgfSwgKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy51bkxvY2tlZCgpXG4gICAgLy8gICAgICAgfSlcbiAgICAvLyAgICAgLy8g5q276ZSBXG4gICAgLy8gICB9XG4gICAgLy8gfSxcblxuICAgIG9uQ2FuY2VsKGV2ZW50OiBhbnkpIHtcbiAgICAgIC8vIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2FuY2VsJywge30sIHt9KVxuICAgIH0sXG5cbiAgICAvLyBvbkRlbGV0ZShldmVudDogYW55KSB7XG4gICAgLy8gICB0aGlzLmluaXRpYWxpemUoKVxuICAgIC8vICAgdGhpcy5fY2xvc2VSZXN1bHQoKVxuICAgIC8vIH0sXG5cbiAgICBvbkNvbmZpcm0oZXZlbnQ6IGFueSkge1xuICAgICAgLy8gdGhpcy5fc2hvd1Jlc3VsdCgpXG4gICAgICAvLyB0aGlzLl9zaG93TG9hZGluZ0NlbnRlcigpXG4gICAgICAvLyB0aGlzLmluaXRpYWxpemUoKSBcbiAgICAgIGNvbnN0IHEgPSBldmVudC5kZXRhaWwudmFsdWUgfHwgZXZlbnQuZGV0YWlsLnRleHRcbiAgICAgIC8vIOa1i+ivlemYn+WIl1xuICAgICAga2V5d29yZE1vZGVsLmFkZFRvSGlzdG9yeShxKVxuXG5cbiAgICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgICAvLyAgIHFcbiAgICAgIC8vIH0pXG4gICAgICAvLyBib29rTW9kZWwuc2VhcmNoKDAsIHEpXG4gICAgICAvLyAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgLy8gICAgIHRoaXMuc2V0TW9yZURhdGEocmVzLmJvb2tzKVxuICAgICAgLy8gICAgIHRoaXMuc2V0VG90YWwocmVzLnRvdGFsKVxuICAgICAgLy8gICAgIGtleXdvcmRNb2RlbC5hZGRUb0hpc3RvcnkocSlcbiAgICAgIC8vICAgICB0aGlzLl9oaWRlTG9hZGluZ0NlbnRlcigpXG4gICAgICAvLyAgIH0pXG4gICAgfSxcblxuICAgIF9zaG93TG9hZGluZ0NlbnRlcigpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxvYWRpbmdDZW50ZXI6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIF9oaWRlTG9hZGluZ0NlbnRlcigpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxvYWRpbmdDZW50ZXI6IGZhbHNlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBfc2hvd1Jlc3VsdCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNlYXJjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgX2Nsb3NlUmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgcTogJydcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gb25SZWFjaEJvdHRvbSgpe1xuICAgIC8vICAgY29uc29sZS5sb2coMTIzMTIzKVxuICAgIC8vIH1cblxuICAgIC8vIHNjcm9sbC12aWV3IHwgUGFnZSBvblJlYWNoQm90dG9tXG5cbiAgfVxufSkiXX0=