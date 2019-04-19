"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginationBev = Behavior({
    data: {
        dataArray: [],
        total: null,
        noneResult: false,
        loading: false
    },
    methods: {
        setMoreData: function (dataArray) {
            var tempArray = this.data.dataArray.concat(dataArray);
            this.setData({
                dataArray: tempArray
            });
        },
        getCurrentStart: function () {
            return this.data.dataArray.length;
        },
        setTotal: function (total) {
            this.data.total = total;
            if (total === 0) {
                this.setData({
                    noneResult: true
                });
            }
        },
        hasMore: function () {
            if (this.data.dataArray.length >= this.data.total) {
                return false;
            }
            else {
                return true;
            }
        },
        initialize: function () {
            this.setData({
                dataArray: [],
                noneResult: false,
                loading: false
            });
            this.data.total = null;
        },
        isLocked: function () {
            return this.data.loading ? true : false;
        },
        locked: function () {
            this.setData({
                loading: true
            });
        },
        unLocked: function () {
            this.setData({
                loading: false
            });
        }
    }
});
exports.paginationBev = paginationBev;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2luYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLGFBQWEsR0FBUSxRQUFRLENBQUM7SUFDbEMsSUFBSSxFQUFFO1FBQ0osU0FBUyxFQUFFLEVBQUU7UUFDYixLQUFLLEVBQUUsSUFBSTtRQUNYLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBQyxLQUFLO0tBQ2Q7SUFFRCxPQUFPLEVBQUU7UUFDUCxXQUFXLEVBQVgsVUFBYSxTQUFjO1lBQ3pCLElBQU0sU0FBUyxHQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFRCxlQUFlO1lBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUE7UUFDbkMsQ0FBQztRQUVELFFBQVEsRUFBUixVQUFVLEtBQWE7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1lBQ3ZCLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNYLFVBQVUsRUFBRSxJQUFJO2lCQUNqQixDQUFDLENBQUE7YUFDSDtRQUNILENBQUM7UUFFRCxPQUFPO1lBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pELE9BQU8sS0FBSyxDQUFBO2FBQ2I7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUE7YUFDWjtRQUNILENBQUM7UUFFRCxVQUFVO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsRUFBRTtnQkFDYixVQUFVLEVBQUUsS0FBSztnQkFDakIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDeEIsQ0FBQztRQUVELFFBQVE7WUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUN6QyxDQUFDO1FBRUQsTUFBTTtZQUNKLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsUUFBUTtZQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUE7QUFHQSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2luYXRpb25CZXY6IGFueSA9IEJlaGF2aW9yKHtcclxuICBkYXRhOiB7XHJcbiAgICBkYXRhQXJyYXk6IFtdLFxyXG4gICAgdG90YWw6IG51bGwsXHJcbiAgICBub25lUmVzdWx0OiBmYWxzZSxcclxuICAgIGxvYWRpbmc6ZmFsc2VcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBzZXRNb3JlRGF0YSAoZGF0YUFycmF5OiBhbnkpIHtcclxuICAgICAgY29uc3QgdGVtcEFycmF5OiBhbnkgPVxyXG4gICAgICAgIHRoaXMuZGF0YS5kYXRhQXJyYXkuY29uY2F0KGRhdGFBcnJheSlcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRhQXJyYXk6IHRlbXBBcnJheVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRDdXJyZW50U3RhcnQgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmRhdGFBcnJheS5sZW5ndGhcclxuICAgIH0sXHJcblxyXG4gICAgc2V0VG90YWwgKHRvdGFsOiBudW1iZXIpIHtcclxuICAgICAgdGhpcy5kYXRhLnRvdGFsID0gdG90YWxcclxuICAgICAgaWYgKHRvdGFsID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIG5vbmVSZXN1bHQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhhc01vcmUgKCkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmRhdGFBcnJheS5sZW5ndGggPj0gdGhpcy5kYXRhLnRvdGFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplICgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRhQXJyYXk6IFtdLFxyXG4gICAgICAgIG5vbmVSZXN1bHQ6IGZhbHNlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZGF0YS50b3RhbCA9IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgaXNMb2NrZWQgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmxvYWRpbmcgPyB0cnVlIDogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgbG9ja2VkICgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIHVuTG9ja2VkICgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCB7XHJcbiAgcGFnaW5hdGlvbkJldlxyXG59Il19