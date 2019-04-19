"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keyword_js_1 = require("../../models/keyword.js");
var book_js_1 = require("../../models/book.js");
var pagination_js_1 = require("../behaviors/pagination.js");
var keywordModel = new keyword_js_1.KeywordModel();
var bookModel = new book_js_1.BookModel();
Component({
    behaviors: [pagination_js_1.paginationBev],
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
        loadMore: function () {
            var _this = this;
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
            this.initialize();
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
            this.initialize();
            var q = event.detail.value || event.detail.text;
            this.setData({ q: q });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNEQUVnQztBQUVoQyxnREFFNkI7QUFFN0IsNERBQTBEO0FBRTFELElBQU0sWUFBWSxHQUFpQixJQUFJLHlCQUFZLEVBQUUsQ0FBQTtBQUNyRCxJQUFNLFNBQVMsR0FBYyxJQUFJLG1CQUFTLEVBQUUsQ0FBQTtBQUU1QyxTQUFTLENBQUM7SUFDUixTQUFTLEVBQUUsQ0FBQyw2QkFBYSxDQUFDO0lBQzFCLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osUUFBUSxFQUFFLFVBQVU7U0FDckI7S0FDRjtJQUlELElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLEtBQUs7UUFDaEIsQ0FBQyxFQUFFLEVBQUU7UUFDTCxhQUFhLEVBQUUsS0FBSztLQUNyQjtJQUVELFFBQVEsRUFBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFO1NBQ3hDLENBQUMsQ0FBQTtRQUNGLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHO2FBQ2xCLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE9BQU8sRUFBRTtRQUNQLFFBQVEsRUFBUjtZQUFBLGlCQWlDQztZQWRDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNuQixPQUFNO2FBQ1A7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUNiLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3FCQUNsRCxJQUFJLENBQUMsVUFBQyxHQUFRO29CQUNiLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUMzQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2pCLENBQUMsRUFBRTtvQkFDRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFBO2FBRUw7UUFDSCxDQUFDO1FBRUQsUUFBUSxFQUFSLFVBQVMsS0FBVTtZQUNqQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3JDLENBQUM7UUFFRCxRQUFRLEVBQVIsVUFBUyxLQUFVO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNqQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDckIsQ0FBQztRQUVELFNBQVMsRUFBVCxVQUFVLEtBQVU7WUFBcEIsaUJBYUM7WUFaQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1lBQ2pCLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1lBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLEdBQUEsRUFBQyxDQUFDLENBQUE7WUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNuQixJQUFJLENBQUMsVUFBQyxHQUFRO2dCQUNiLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDeEIsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDNUIsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7WUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBRUQsa0JBQWtCO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsYUFBYSxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELGtCQUFrQjtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxXQUFXO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsWUFBWTtZQUNWLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLENBQUMsRUFBRSxFQUFFO2FBQ04sQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQVFGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgS2V5d29yZE1vZGVsXG59IGZyb20gJy4uLy4uL21vZGVscy9rZXl3b3JkLmpzJ1xuXG5pbXBvcnQge1xuICBCb29rTW9kZWxcbn0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jvb2suanMnXG5cbmltcG9ydCB7IHBhZ2luYXRpb25CZXYgfSBmcm9tICcuLi9iZWhhdmlvcnMvcGFnaW5hdGlvbi5qcydcblxuY29uc3Qga2V5d29yZE1vZGVsOiBLZXl3b3JkTW9kZWwgPSBuZXcgS2V5d29yZE1vZGVsKClcbmNvbnN0IGJvb2tNb2RlbDogQm9va01vZGVsID0gbmV3IEJvb2tNb2RlbCgpXG5cbkNvbXBvbmVudCh7XG4gIGJlaGF2aW9yczogW3BhZ2luYXRpb25CZXZdLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgbW9yZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgb2JzZXJ2ZXI6ICdsb2FkTW9yZScgLy8g55uR5ZCs5Ye95pWwXG4gICAgfVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgaGlzdG9yeVdvcmRzOiBbXSwgLy8g5Y6G5Y+y5pCc57SiXG4gICAgaG90V29yZHM6IFtdLCAvLyDng63pl6jmkJzntKJcbiAgICBzZWFyY2hpbmc6IGZhbHNlLCAvLyDmmK/lkKbmmL7npLrmkJzntKLnu4Tku7ZcbiAgICBxOiAnJyxcbiAgICBsb2FkaW5nQ2VudGVyOiBmYWxzZVxuICB9LFxuXG4gIGF0dGFjaGVkICgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaGlzdG9yeVdvcmRzOiBrZXl3b3JkTW9kZWwuZ2V0SGlzdG9yeSgpXG4gICAgfSlcbiAgICBrZXl3b3JkTW9kZWwuZ2V0SG90KCkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGhvdFdvcmRzOiByZXMuaG90XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGxvYWRNb3JlICgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKDEyMzEyMylcbiAgICAgIC8vIGlmICghdGhpcy5kYXRhLnEpIHtcbiAgICAgIC8vICAgcmV0dXJuXG4gICAgICAvLyB9XG4gICAgICAvLyBpZiAodGhpcy5kYXRhLmxvYWRpbmcpIHsgLy8g5aaC5p6c5pyJ6ZSB77yM5YiZ6L+U5ZueXG4gICAgICAvLyAgIHJldHVyblxuICAgICAgLy8gfVxuICAgICAgLy8gY29uc3QgbGVuID0gdGhpcy5kYXRhLmRhdGFBcnJheS5sZW5ndGhcbiAgICAgIC8vIHRoaXMuZGF0YS5sb2FkaW5nID0gdHJ1ZSAvLyDplIFcbiAgICAgIC8vIGJvb2tNb2RlbC5zZWFyY2gobGVuLCB0aGlzLmRhdGEucSkudGhlbigocmVzOiBhbnkpID0+IHtcbiAgICAgIC8vICAgY29uc3QgdGVtcEFyciA9IHRoaXMuZGF0YS5kYXRhQXJyYXkuY29uY2F0KHJlcy5ib29rcylcbiAgICAgIC8vICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIC8vICAgICBkYXRhQXJyYXk6IHRlbXBBcnIsXG4gICAgICAvLyAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIC8vICAgfSlcbiAgICBcbiAgICAgIC8vIH0pXG5cbiAgICAgIGlmICh0aGlzLmlzTG9ja2VkKCkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5oYXNNb3JlKCkpIHtcbiAgICAgICAgdGhpcy5sb2NrZWQoKSAvLyDmraPlnKjor7fmsYIg6ZSB5a6aXG4gICAgICAgIGJvb2tNb2RlbC5zZWFyY2godGhpcy5nZXRDdXJyZW50U3RhcnQoKSwgdGhpcy5kYXRhLnEpXG4gICAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldE1vcmVEYXRhKHJlcy5ib29rcylcbiAgICAgICAgICAgIHRoaXMudW5Mb2NrZWQoKSAvLyDor7fmsYLmiJDlip8g6Kej6ZSBXG4gICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bkxvY2tlZCgpIC8vIOivt+axguWksei0pSDop6PplIFcbiAgICAgICAgICB9KVxuICAgICAgICAvLyDmrbvplIFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25DYW5jZWwoZXZlbnQ6IGFueSkge1xuICAgICAgdGhpcy5pbml0aWFsaXplKClcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjYW5jZWwnLCB7fSwge30pXG4gICAgfSxcblxuICAgIG9uRGVsZXRlKGV2ZW50OiBhbnkpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgICB0aGlzLl9jbG9zZVJlc3VsdCgpXG4gICAgfSxcblxuICAgIG9uQ29uZmlybShldmVudDogYW55KSB7XG4gICAgICB0aGlzLl9zaG93UmVzdWx0KClcbiAgICAgIHRoaXMuX3Nob3dMb2FkaW5nQ2VudGVyKClcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpIFxuICAgICAgY29uc3QgcSA9IGV2ZW50LmRldGFpbC52YWx1ZSB8fCBldmVudC5kZXRhaWwudGV4dFxuICAgICAgdGhpcy5zZXREYXRhKHtxfSlcbiAgICAgIGJvb2tNb2RlbC5zZWFyY2goMCwgcSlcbiAgICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRNb3JlRGF0YShyZXMuYm9va3MpXG4gICAgICAgICAgdGhpcy5zZXRUb3RhbChyZXMudG90YWwpXG4gICAgICAgICAga2V5d29yZE1vZGVsLmFkZFRvSGlzdG9yeShxKVxuICAgICAgICAgIHRoaXMuX2hpZGVMb2FkaW5nQ2VudGVyKClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgX3Nob3dMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogdHJ1ZVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgX2hpZGVMb2FkaW5nQ2VudGVyKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbG9hZGluZ0NlbnRlcjogZmFsc2VcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIF9zaG93UmVzdWx0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VhcmNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBfY2xvc2VSZXN1bHQoKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICBxOiAnJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBvblJlYWNoQm90dG9tKCl7XG4gICAgLy8gICBjb25zb2xlLmxvZygxMjMxMjMpXG4gICAgLy8gfVxuXG4gICAgLy8gc2Nyb2xsLXZpZXcgfCBQYWdlIG9uUmVhY2hCb3R0b21cblxuICB9XG59KSJdfQ==