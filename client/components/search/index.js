"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_js_1 = require("../../models/book.js");
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
            var _this = this;
            this._showResult();
            this._showLoadingCenter();
            var q = event.detail.value || event.detail.text;
            this.setData({
                q: q
            });
            bookModel.search(0, q)
                .then(function (res) {
                _this.setMoreData(res.books);
                _this.setTotal(res.total);
                keywordModel.addToHistory(q);
                _this._hideLoadingCenter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLGdEQUU2QjtBQU83QixJQUFNLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQTtBQUVqQyxTQUFTLENBQUM7SUFLUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxVQUFVO1NBRXJCO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsRUFBRTtRQUNoQixRQUFRLEVBQUUsRUFBRTtRQUNaLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLENBQUMsRUFBRSxFQUFFO1FBQ0wsT0FBTyxFQUFFLEtBQUs7UUFDZCxhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUVELFFBQVE7SUFVUixDQUFDO0lBS0QsT0FBTyxFQUFFO1FBQ1AsUUFBUTtZQUFSLGlCQWtCQztZQWpCQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU07YUFDUDtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNuQixPQUFNO2FBQ1A7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUNiLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNsRCxJQUFJLENBQUMsVUFBQSxHQUFHO29CQUNQLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUMzQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2pCLENBQUMsRUFBRTtvQkFDRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFBO2FBRUw7UUFDSCxDQUFDO1FBR0QsUUFBUSxFQUFSLFVBQVMsS0FBVTtZQUVqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckMsQ0FBQztRQUVELFFBQVEsRUFBUixVQUFTLEtBQVU7WUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNyQixDQUFDO1FBRUQsU0FBUyxFQUFULFVBQVUsS0FBVTtZQUFwQixpQkFlQztZQWRDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtZQUV6QixJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtZQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLENBQUMsR0FBQTthQUNGLENBQUMsQ0FBQTtZQUNGLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDbkIsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDUCxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDM0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3hCLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzVCLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1lBQzNCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxrQkFBa0I7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsV0FBVztZQUNULElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELFlBQVk7WUFDVixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixDQUFDLEVBQUUsRUFBRTthQUNOLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FRRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7XG4vLyAgIEtleXdvcmRNb2RlbFxuLy8gfSBmcm9tICcuLi8uLi9tb2RlbHMva2V5d29yZC5qcydcblxuaW1wb3J0IHtcbiAgQm9va01vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscy9ib29rLmpzJ1xuXG4vLyBpbXBvcnQge1xuLy8gICBwYWdpbmF0aW9uQmV2XG4vLyB9IGZyb20gJy4uL2JlaGF2aW9ycy9wYWdpbmF0aW9uLmpzJ1xuXG4vLyBjb25zdCBrZXl3b3JkTW9kZWwgPSBuZXcgS2V5d29yZE1vZGVsKClcbmNvbnN0IGJvb2tNb2RlbCA9IG5ldyBCb29rTW9kZWwoKVxuXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICAvLyBiZWhhdmlvcnM6IFtwYWdpbmF0aW9uQmV2XSxcbiAgcHJvcGVydGllczoge1xuICAgIG1vcmU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIG9ic2VydmVyOiAnbG9hZE1vcmUnXG4gICAgICAvLyB0cnVlLCB0cnVlLCB0cnVlLFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaGlzdG9yeVdvcmRzOiBbXSxcbiAgICBob3RXb3JkczogW10sXG4gICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICBxOiAnJyxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBsb2FkaW5nQ2VudGVyOiBmYWxzZVxuICB9LFxuXG4gIGF0dGFjaGVkKCkge1xuICAgIC8vIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICBoaXN0b3J5V29yZHM6IGtleXdvcmRNb2RlbC5nZXRIaXN0b3J5KClcbiAgICAvLyB9KVxuXG4gICAgLy8ga2V5d29yZE1vZGVsLmdldEhvdCgpLnRoZW4ocmVzID0+IHtcbiAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICAgIGhvdFdvcmRzOiByZXMuaG90XG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGxvYWRNb3JlKCkge1xuICAgICAgaWYgKCF0aGlzLmRhdGEucSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzTG9ja2VkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYXNNb3JlKCkpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQoKVxuICAgICAgICBib29rTW9kZWwuc2VhcmNoKHRoaXMuZ2V0Q3VycmVudFN0YXJ0KCksIHRoaXMuZGF0YS5xKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldE1vcmVEYXRhKHJlcy5ib29rcylcbiAgICAgICAgICAgIHRoaXMudW5Mb2NrZWQoKVxuICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudW5Mb2NrZWQoKVxuICAgICAgICAgIH0pXG4gICAgICAgIC8vIOatu+mUgVxuICAgICAgfVxuICAgIH0sXG5cblxuICAgIG9uQ2FuY2VsKGV2ZW50OiBhbnkpIHtcbiAgICAgIC8vIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnY2FuY2VsJywge30sIHt9KVxuICAgIH0sXG5cbiAgICBvbkRlbGV0ZShldmVudDogYW55KSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgICAgdGhpcy5fY2xvc2VSZXN1bHQoKVxuICAgIH0sXG5cbiAgICBvbkNvbmZpcm0oZXZlbnQ6IGFueSkge1xuICAgICAgdGhpcy5fc2hvd1Jlc3VsdCgpXG4gICAgICB0aGlzLl9zaG93TG9hZGluZ0NlbnRlcigpXG4gICAgICAvLyB0aGlzLmluaXRpYWxpemUoKSBcbiAgICAgIGNvbnN0IHEgPSBldmVudC5kZXRhaWwudmFsdWUgfHwgZXZlbnQuZGV0YWlsLnRleHRcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHFcbiAgICAgIH0pXG4gICAgICBib29rTW9kZWwuc2VhcmNoKDAsIHEpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRNb3JlRGF0YShyZXMuYm9va3MpXG4gICAgICAgICAgdGhpcy5zZXRUb3RhbChyZXMudG90YWwpXG4gICAgICAgICAga2V5d29yZE1vZGVsLmFkZFRvSGlzdG9yeShxKVxuICAgICAgICAgIHRoaXMuX2hpZGVMb2FkaW5nQ2VudGVyKClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgX3Nob3dMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgX2hpZGVMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIF9zaG93UmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBfY2xvc2VSZXN1bHQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICBxOiAnJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBvblJlYWNoQm90dG9tKCl7XG4gICAgLy8gICBjb25zb2xlLmxvZygxMjMxMjMpXG4gICAgLy8gfVxuXG4gICAgLy8gc2Nyb2xsLXZpZXcgfCBQYWdlIG9uUmVhY2hCb3R0b21cblxuICB9XG59KSJdfQ==