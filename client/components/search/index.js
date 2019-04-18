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
    methods: {
        loadMore: function () {
            var _this = this;
            if (!this.data.q) {
                return;
            }
            if (this.isLocked()) {
                return;
            }
            if (this.hasMore()) {
                this.locked();
                bookModel.search(this.getCurrentStart(), this.data.q)
                    .then(function (res) {
                    _this.setMoreData(res.books);
                    _this.unLocked();
                }, function () {
                    _this.unLocked();
                });
            }
        },
        onCancel: function (event) {
            this.triggerEvent('cancel', {}, {});
        },
        onDelete: function (event) {
            this.initialize();
            this._closeResult();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUVnQztBQUVoQyxnREFFNkI7QUFNN0IsSUFBTSxZQUFZLEdBQWlCLElBQUkseUJBQVksRUFBRSxDQUFBO0FBQ3JELElBQU0sU0FBUyxHQUFpQixJQUFJLG1CQUFTLEVBQUUsQ0FBQTtBQUUvQyxTQUFTLENBQUM7SUFLUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1NBRXJCO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsRUFBRTtRQUNoQixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLENBQUMsRUFBRSxFQUFFO1FBQ0wsT0FBTyxFQUFFLEtBQUs7UUFDZCxhQUFhLEVBQUUsS0FBSztLQUNyQjtJQWlCRCxPQUFPLEVBQUU7UUFDUCxRQUFRLEVBQVI7WUFBQSxpQkFrQkM7WUFqQkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNoQixPQUFNO2FBQ1A7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDbkIsT0FBTTthQUNQO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtnQkFDYixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztxQkFDbEQsSUFBSSxDQUFDLFVBQUMsR0FBUTtvQkFDYixLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtvQkFDM0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNqQixDQUFDLEVBQUU7b0JBQ0QsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUNqQixDQUFDLENBQUMsQ0FBQTthQUVMO1FBQ0gsQ0FBQztRQUVELFFBQVEsRUFBUixVQUFTLEtBQVU7WUFFakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3JDLENBQUM7UUFFRCxRQUFRLEVBQVIsVUFBUyxLQUFVO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDckIsQ0FBQztRQUVELFNBQVMsRUFBVCxVQUFVLEtBQVU7WUFJbEIsSUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7WUFFakQsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQWE5QixDQUFDO1FBRUQsa0JBQWtCO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsYUFBYSxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxXQUFXO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsWUFBWTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLENBQUMsRUFBRSxFQUFFO2FBQ04sQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQVFGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgS2V5d29yZE1vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscy9rZXl3b3JkLmpzJ1xuXG5pbXBvcnQge1xuICBCb29rTW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2suanMnXG5cbi8vIGltcG9ydCB7XG4vLyAgIHBhZ2luYXRpb25CZXZcbi8vIH0gZnJvbSAnLi4vYmVoYXZpb3JzL3BhZ2luYXRpb24uanMnXG5cbmNvbnN0IGtleXdvcmRNb2RlbDogS2V5d29yZE1vZGVsID0gbmV3IEtleXdvcmRNb2RlbCgpXG5jb25zdCBib29rTW9kZWw6IEtleXdvcmRNb2RlbCA9IG5ldyBCb29rTW9kZWwoKVxuXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICAvLyBiZWhhdmlvcnM6IFtwYWdpbmF0aW9uQmV2XSxcbiAgcHJvcGVydGllczoge1xuICAgIG1vcmU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIG9ic2VydmVyOiAnbG9hZE1vcmUnXG4gICAgICAvLyB0cnVlLCB0cnVlLCB0cnVlLFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaGlzdG9yeVdvcmRzOiBbXSwgLy8g5Y6G5Y+y5pCc57SiXG4gICAgaG90V29yZHM6IFtdLCAvLyDng63pl6jmkJzntKJcbiAgICBzZWFyY2hpbmc6IGZhbHNlLCAvLyDmmK/lkKbmmL7npLrmkJzntKLnu4Tku7ZcbiAgICBxOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZSwgLy8g5Yqg6L2954q25oCBXG4gICAgbG9hZGluZ0NlbnRlcjogZmFsc2VcbiAgfSxcblxuICAvLyBhdHRhY2hlZCgpIHtcbiAgLy8gICB0aGlzLnNldERhdGEoe1xuICAvLyAgICAgaGlzdG9yeVdvcmRzOiBrZXl3b3JkTW9kZWwuZ2V0SGlzdG9yeSgpXG4gIC8vICAgfSlcblxuICAvLyAgIGtleXdvcmRNb2RlbC5nZXRIb3QoKS50aGVuKChyZXM6IGFueSkgPT4ge1xuICAvLyAgICAgdGhpcy5zZXREYXRhKHtcbiAgLy8gICAgICAgaG90V29yZHM6IHJlcy5ob3RcbiAgLy8gICAgIH0pXG4gIC8vICAgfSlcbiAgLy8gfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgbG9hZE1vcmUoKSB7XG4gICAgICBpZiAoIXRoaXMuZGF0YS5xKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNMb2NrZWQoKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhhc01vcmUoKSkge1xuICAgICAgICB0aGlzLmxvY2tlZCgpXG4gICAgICAgIGJvb2tNb2RlbC5zZWFyY2godGhpcy5nZXRDdXJyZW50U3RhcnQoKSwgdGhpcy5kYXRhLnEpXG4gICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldE1vcmVEYXRhKHJlcy5ib29rcylcbiAgICAgICAgICAgIHRoaXMudW5Mb2NrZWQoKVxuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudW5Mb2NrZWQoKVxuICAgICAgICAgIH0pXG4gICAgICAgIC8vIOatu+mUgVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvbkNhbmNlbChldmVudDogYW55KSB7XG4gICAgICAvLyB0aGlzLmluaXRpYWxpemUoKVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NhbmNlbCcsIHt9LCB7fSlcbiAgICB9LFxuXG4gICAgb25EZWxldGUoZXZlbnQ6IGFueSkge1xuICAgICAgdGhpcy5pbml0aWFsaXplKClcbiAgICAgIHRoaXMuX2Nsb3NlUmVzdWx0KClcbiAgICB9LFxuXG4gICAgb25Db25maXJtKGV2ZW50OiBhbnkpIHtcbiAgICAgIC8vIHRoaXMuX3Nob3dSZXN1bHQoKVxuICAgICAgLy8gdGhpcy5fc2hvd0xvYWRpbmdDZW50ZXIoKVxuICAgICAgLy8gdGhpcy5pbml0aWFsaXplKCkgXG4gICAgICBjb25zdCBxID0gZXZlbnQuZGV0YWlsLnZhbHVlIHx8IGV2ZW50LmRldGFpbC50ZXh0XG4gICAgICAvLyDmtYvor5XpmJ/liJdcbiAgICAgIGtleXdvcmRNb2RlbC5hZGRUb0hpc3RvcnkocSlcblxuXG4gICAgICAvLyB0aGlzLnNldERhdGEoe1xuICAgICAgLy8gICBxXG4gICAgICAvLyB9KVxuICAgICAgLy8gYm9va01vZGVsLnNlYXJjaCgwLCBxKVxuICAgICAgLy8gICAudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIC8vICAgICB0aGlzLnNldE1vcmVEYXRhKHJlcy5ib29rcylcbiAgICAgIC8vICAgICB0aGlzLnNldFRvdGFsKHJlcy50b3RhbClcbiAgICAgIC8vICAgICBrZXl3b3JkTW9kZWwuYWRkVG9IaXN0b3J5KHEpXG4gICAgICAvLyAgICAgdGhpcy5faGlkZUxvYWRpbmdDZW50ZXIoKVxuICAgICAgLy8gICB9KVxuICAgIH0sXG5cbiAgICBfc2hvd0xvYWRpbmdDZW50ZXIoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsb2FkaW5nQ2VudGVyOiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBfaGlkZUxvYWRpbmdDZW50ZXIoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsb2FkaW5nQ2VudGVyOiBmYWxzZVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgX3Nob3dSZXN1bHQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIF9jbG9zZVJlc3VsdCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHNlYXJjaGluZzogZmFsc2UsXG4gICAgICAgIHE6ICcnXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIG9uUmVhY2hCb3R0b20oKXtcbiAgICAvLyAgIGNvbnNvbGUubG9nKDEyMzEyMylcbiAgICAvLyB9XG5cbiAgICAvLyBzY3JvbGwtdmlldyB8IFBhZ2Ugb25SZWFjaEJvdHRvbVxuXG4gIH1cbn0pIl19