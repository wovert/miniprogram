"use strict";
Component({
    properties: {
        like: {
            type: Boolean,
            value: false,
            observer: function () {
            }
        },
        count: {
            type: Number,
            value: 0
        }
    },
    data: {
        yesSrc: 'images/like.png',
        noSrc: 'images/like@dis.png'
    },
    methods: {
        onLike: function () {
            var like = !this.properties.like;
            var count = this.properties.count;
            count = like ? count + 1 : count - 1;
            this.setData({
                count: count,
                like: like
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVE7WUFDUixDQUFDO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUtELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsS0FBSyxFQUFFLHFCQUFxQjtLQUM3QjtJQUtELE9BQU8sRUFBRTtRQUNQLE1BQU07WUFDSixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1lBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO1lBQ2pDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLE9BQUE7Z0JBQ0wsSUFBSSxNQUFBO2FBQ0wsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGxpa2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvYnNlcnZlciAoKSB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb3VudDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDBcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHllc1NyYzogJ2ltYWdlcy9saWtlLnBuZycsXG4gICAgbm9TcmM6ICdpbWFnZXMvbGlrZUBkaXMucG5nJ1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvbkxpa2UgKCkge1xuICAgICAgbGV0IGxpa2UgPSAhdGhpcy5wcm9wZXJ0aWVzLmxpa2VcbiAgICAgIGxldCBjb3VudCA9IHRoaXMucHJvcGVydGllcy5jb3VudFxuICAgICAgY291bnQgPSBsaWtlID8gY291bnQrMSA6IGNvdW50LTFcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGNvdW50LFxuICAgICAgICBsaWtlXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==