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
        dataArray: [],
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
        onDelete: function (event) {
            this._closeResult();
        },
        onConfirm: function (event) {
            var _this = this;
            this._showResult();
            var q = event.detail.value || event.detail.text;
            this.setData({
                q: q
            });
            bookModel.search(0, q)
                .then(function (res) {
                _this.setData({
                    dataArray: res.books
                });
                keywordModel.addToHistory(q);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUVnQztBQUVoQyxnREFFNkI7QUFNN0IsSUFBTSxZQUFZLEdBQWlCLElBQUkseUJBQVksRUFBRSxDQUFBO0FBQ3JELElBQU0sU0FBUyxHQUFjLElBQUksbUJBQVMsRUFBRSxDQUFBO0FBRTVDLFNBQVMsQ0FBQztJQUtSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7U0FFckI7S0FDRjtJQUlELElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEtBQUs7UUFDaEIsQ0FBQyxFQUFFLEVBQUU7UUFDTCxPQUFPLEVBQUUsS0FBSztRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsYUFBYSxFQUFFLEtBQUs7S0FDckI7SUFFRCxRQUFRLEVBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxZQUFZLEVBQUUsWUFBWSxDQUFDLFVBQVUsRUFBRTtTQUN4QyxDQUFDLENBQUE7UUFDRixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtZQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRzthQUNsQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPLEVBQUU7UUFxQlAsUUFBUSxFQUFSLFVBQVMsS0FBVTtZQUVqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckMsQ0FBQztRQUVELFFBQVEsRUFBUixVQUFTLEtBQVU7WUFFakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ3JCLENBQUM7UUFFRCxTQUFTLEVBQVQsVUFBVSxLQUFVO1lBQXBCLGlCQW1CQztZQWxCQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7WUFHbEIsSUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7WUFFakQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxDQUFDLEdBQUE7YUFDRixDQUFDLENBQUE7WUFDRixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ25CLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUs7aUJBQ3JCLENBQUMsQ0FBQTtnQkFHRixZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRTlCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxrQkFBa0I7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsV0FBVztZQUNULElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELFlBQVk7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixDQUFDLEVBQUUsRUFBRTthQUNOLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FRRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEtleXdvcmRNb2RlbFxufSBmcm9tICcuLi8uLi9tb2RlbHMva2V5d29yZC5qcydcblxuaW1wb3J0IHtcbiAgQm9va01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscy9ib29rLmpzJ1xuXG4vLyBpbXBvcnQge1xuLy8gICBwYWdpbmF0aW9uQmV2XG4vLyB9IGZyb20gJy4uL2JlaGF2aW9ycy9wYWdpbmF0aW9uLmpzJ1xuXG5jb25zdCBrZXl3b3JkTW9kZWw6IEtleXdvcmRNb2RlbCA9IG5ldyBLZXl3b3JkTW9kZWwoKVxuY29uc3QgYm9va01vZGVsOiBCb29rTW9kZWwgPSBuZXcgQm9va01vZGVsKClcblxuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgLy8gYmVoYXZpb3JzOiBbcGFnaW5hdGlvbkJldl0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBtb3JlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBvYnNlcnZlcjogJ2xvYWRNb3JlJ1xuICAgICAgLy8gdHJ1ZSwgdHJ1ZSwgdHJ1ZSxcbiAgICB9XG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBoaXN0b3J5V29yZHM6IFtdLCAvLyDljoblj7LmkJzntKJcbiAgICBob3RXb3JkczogW10sIC8vIOeDremXqOaQnOe0olxuICAgIHNlYXJjaGluZzogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuaQnOe0oue7hOS7tlxuICAgIHE6ICcnLFxuICAgIGxvYWRpbmc6IGZhbHNlLCAvLyDliqDovb3nirbmgIFcbiAgICBkYXRhQXJyYXk6IFtdLCAvLy8g5pCc57Si5pWw5o2uXG4gICAgbG9hZGluZ0NlbnRlcjogZmFsc2VcbiAgfSxcblxuICBhdHRhY2hlZCAoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGhpc3RvcnlXb3Jkczoga2V5d29yZE1vZGVsLmdldEhpc3RvcnkoKVxuICAgIH0pXG4gICAga2V5d29yZE1vZGVsLmdldEhvdCgpLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBob3RXb3JkczogcmVzLmhvdFxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICAvLyBsb2FkTW9yZSAoKSB7XG4gICAgLy8gICBpZiAoIXRoaXMuZGF0YS5xKSB7XG4gICAgLy8gICAgIHJldHVyblxuICAgIC8vICAgfVxuICAgIC8vICAgaWYgKHRoaXMuaXNMb2NrZWQoKSkge1xuICAgIC8vICAgICByZXR1cm5cbiAgICAvLyAgIH1cbiAgICAvLyAgIGlmICh0aGlzLmhhc01vcmUoKSkge1xuICAgIC8vICAgICB0aGlzLmxvY2tlZCgpXG4gICAgLy8gICAgIGJvb2tNb2RlbC5zZWFyY2godGhpcy5nZXRDdXJyZW50U3RhcnQoKSwgdGhpcy5kYXRhLnEpXG4gICAgLy8gICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnNldE1vcmVEYXRhKHJlcy5ib29rcylcbiAgICAvLyAgICAgICAgIHRoaXMudW5Mb2NrZWQoKVxuICAgIC8vICAgICAgIH0sICgpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMudW5Mb2NrZWQoKVxuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIC8vIOatu+mUgVxuICAgIC8vICAgfVxuICAgIC8vIH0sXG5cbiAgICBvbkNhbmNlbChldmVudDogYW55KSB7XG4gICAgICAvLyB0aGlzLmluaXRpYWxpemUoKVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcsIHt9LCB7fSlcbiAgICB9LFxuXG4gICAgb25EZWxldGUoZXZlbnQ6IGFueSkge1xuICAgICAgLy8gdGhpcy5pbml0aWFsaXplKClcbiAgICAgIHRoaXMuX2Nsb3NlUmVzdWx0KClcbiAgICB9LFxuXG4gICAgb25Db25maXJtKGV2ZW50OiBhbnkpIHtcbiAgICAgIHRoaXMuX3Nob3dSZXN1bHQoKVxuICAgICAgLy8gdGhpcy5fc2hvd0xvYWRpbmdDZW50ZXIoKVxuICAgICAgLy8gdGhpcy5pbml0aWFsaXplKCkgXG4gICAgICBjb25zdCBxID0gZXZlbnQuZGV0YWlsLnZhbHVlIHx8IGV2ZW50LmRldGFpbC50ZXh0XG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHFcbiAgICAgIH0pXG4gICAgICBib29rTW9kZWwuc2VhcmNoKDAsIHEpXG4gICAgICAgIC50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBkYXRhQXJyYXk6IHJlcy5ib29rc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gdGhpcy5zZXRNb3JlRGF0YShyZXMuYm9va3MpXG4gICAgICAgICAgLy8gdGhpcy5zZXRUb3RhbChyZXMudG90YWwpXG4gICAgICAgICAga2V5d29yZE1vZGVsLmFkZFRvSGlzdG9yeShxKVxuICAgICAgICAgIC8vIHRoaXMuX2hpZGVMb2FkaW5nQ2VudGVyKClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgX3Nob3dMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgX2hpZGVMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIF9zaG93UmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBfY2xvc2VSZXN1bHQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICBxOiAnJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBvblJlYWNoQm90dG9tKCl7XG4gICAgLy8gICBjb25zb2xlLmxvZygxMjMxMjMpXG4gICAgLy8gfVxuXG4gICAgLy8gc2Nyb2xsLXZpZXcgfCBQYWdlIG9uUmVhY2hCb3R0b21cblxuICB9XG59KSJdfQ==