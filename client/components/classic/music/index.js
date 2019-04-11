"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classic_beh_1 = require("../classic-beh");
var wxAudio = wx.getBackgroundAudioManager();
Component({
    behaviors: [classic_beh_1.classicBeh],
    properties: {
        src: String,
        title: String
    },
    data: {
        playing: false,
        pauseSrc: 'images/player@pause.png',
        playSrc: 'images/player@play.png',
        tag: 'images/music@tag.png'
    },
    attached: function () {
        this._monitorSwitch();
    },
    methods: {
        onPlay: function () {
            if (!this.data.playing) {
                this.setData({
                    playing: true
                });
                wxAudio.src = this.properties.src;
                wxAudio.title = this.properties.title;
            }
            else {
                this.setData({
                    playing: false
                });
                wxAudio.pause();
            }
        },
        _recoverStatus: function () {
            if (wxAudio.paused) {
                this.setData({
                    playing: false
                });
                return;
            }
            if (wxAudio.src === this.properties.src) {
                this.setData({
                    playing: true
                });
            }
        },
        _monitorSwitch: function () {
            var _this = this;
            wxAudio.onPlay(function () {
                _this._recoverStatus();
            });
            wxAudio.onPause(function () {
                _this._recoverStatus();
            });
            wxAudio.onStop(function () {
                _this._recoverStatus();
            });
            wxAudio.onEnded(function () {
                _this._recoverStatus();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUV1QjtBQUV2QixJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUUsQ0FBQTtBQUU5QyxTQUFTLENBQUM7SUFDUixTQUFTLEVBQUMsQ0FBQyx3QkFBVSxDQUFDO0lBQ3RCLFVBQVUsRUFBRTtRQUNWLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLE1BQU07S0FDZDtJQUVELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxPQUFPLEVBQUUsd0JBQXdCO1FBQ2pDLEdBQUcsRUFBRSxzQkFBc0I7S0FDNUI7SUFHRCxRQUFRO1FBRU4sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxPQUFPLEVBQUU7UUFDUCxNQUFNO1lBRUosSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLE9BQU8sRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQTtnQkFDRixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFBO2dCQUNqQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO2FBQ3RDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQyxDQUFBO2dCQUNGLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTthQUNoQjtRQUNILENBQUM7UUFDRCxjQUFjO1lBQ1osSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUMsQ0FBQTtnQkFDRixPQUFNO2FBQ1A7WUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDO1FBQ0QsY0FBYztZQUFkLGlCQWNDO1lBYkMsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDYixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDdkIsQ0FBQyxDQUFDLENBQUE7WUFDRixPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNkLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUN2QixDQUFDLENBQUMsQ0FBQTtZQUNGLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxDQUFDLE9BQU8sQ0FBQztnQkFDZCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFFSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNsYXNzaWNCZWhcclxufSBmcm9tICcuLi9jbGFzc2ljLWJlaCdcclxuXHJcbmNvbnN0IHd4QXVkaW8gPSB3eC5nZXRCYWNrZ3JvdW5kQXVkaW9NYW5hZ2VyKClcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgYmVoYXZpb3JzOltjbGFzc2ljQmVoXSxcclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBzcmM6IFN0cmluZyxcclxuICAgIHRpdGxlOiBTdHJpbmdcclxuICB9LFxyXG5cclxuICBkYXRhOiB7XHJcbiAgICBwbGF5aW5nOiBmYWxzZSxcclxuICAgIHBhdXNlU3JjOiAnaW1hZ2VzL3BsYXllckBwYXVzZS5wbmcnLFxyXG4gICAgcGxheVNyYzogJ2ltYWdlcy9wbGF5ZXJAcGxheS5wbmcnLFxyXG4gICAgdGFnOiAnaW1hZ2VzL211c2ljQHRhZy5wbmcnXHJcbiAgfSxcclxuXHJcbiAgLy8gaGlkZGVu5bGe5oCn5LiN6Kem5Y+RZGV0YWNoZWQsIOWPquaciXd4Omlm5omN5Lya6Kem5Y+RZGV0YWNoZWRcclxuICBhdHRhY2hlZCAoKSB7XHJcbiAgICAvLyB0aGlzLl9yZWNvdmVyU3RhdHVzKClcclxuICAgIHRoaXMuX21vbml0b3JTd2l0Y2goKVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uUGxheSAoKSB7XHJcbiAgICAgIC8vIOWbvueJh+WIh+aNolxyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5wbGF5aW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHBsYXlpbmc6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHd4QXVkaW8uc3JjID0gdGhpcy5wcm9wZXJ0aWVzLnNyY1xyXG4gICAgICAgIHd4QXVkaW8udGl0bGUgPSB0aGlzLnByb3BlcnRpZXMudGl0bGVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGxheWluZzogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHd4QXVkaW8ucGF1c2UoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgX3JlY292ZXJTdGF0dXMgKCkge1xyXG4gICAgICBpZiAod3hBdWRpby5wYXVzZWQpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGxheWluZzogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGlmICh3eEF1ZGlvLnNyYyA9PT0gdGhpcy5wcm9wZXJ0aWVzLnNyYykge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwbGF5aW5nOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIF9tb25pdG9yU3dpdGNoICgpIHtcclxuICAgICAgd3hBdWRpby5vblBsYXkoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlY292ZXJTdGF0dXMoKVxyXG4gICAgICB9KVxyXG4gICAgICB3eEF1ZGlvLm9uUGF1c2UoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlY292ZXJTdGF0dXMoKVxyXG4gICAgICB9KVxyXG4gICAgICB3eEF1ZGlvLm9uU3RvcCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclN0YXR1cygpXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4QXVkaW8ub25FbmRlZCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcmVjb3ZlclN0YXR1cygpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl19