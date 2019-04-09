"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../utils/http");
var app = getApp();
Page({
    data: {
        test: 1
    },
    onLoad: function () {
        http_1.Http.request({
            url: 'classic/latest',
            success: function (res) {
                console.log(res);
            },
            fail: function (err) {
            }
        });
    },
    onReady: function () {
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx5Q0FBdUM7QUFFdkMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFFNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLENBQUM7S0FDUjtJQUtELE1BQU0sRUFBTjtRQVlFLFdBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLE9BQU8sRUFBRSxVQUFDLEdBQVc7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQVc7WUFFbEIsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFLRCxPQUFPO0lBQ1AsQ0FBQztJQUNELFdBQVcsRUFBWCxVQUFZLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnXG5cbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICB0ZXN0OiAxXG4gIH0sXG5cbiAgLyoqXG4gICAqIOebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkICgpIHtcbiAgICAvLyDlvILmraXosIPnlKhcbiAgICAvLyB3eC5yZXF1ZXN0KHtcbiAgICAvLyAgIHVybDogJ2h0dHA6Ly9ibC43eXVlLnByby92MS9jbGFzc2ljL2xhdGVzdCcsXG4gICAgLy8gICBoZWFkZXI6IHtcbiAgICAvLyAgICAgYXBwa2V5OiAnUmRzaHlkakJ2Y1laaE1aQydcbiAgICAvLyAgIH0sXG4gICAgLy8gICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5kYXRhKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgLy8gICB9XG4gICAgLy8gfSlcbiAgICBIdHRwLnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnY2xhc3NpYy9sYXRlc3QnLFxuICAgICAgc3VjY2VzczogKHJlczogT2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgIH0sXG4gICAgICBmYWlsOiAoZXJyOiBPYmplY3QpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfSxcblxuICAvKiogXG4gICAqIOmhtemdoua4suafk+WujOaIkCBcbiAgICovXG4gIG9uUmVhZHkgKCkge1xuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHVzZXJJbmZvOiBlLmRldGFpbC51c2VySW5mbyxcbiAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==