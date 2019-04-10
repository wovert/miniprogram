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
            var behavior = this.properties.like ? 'like' : 'cancle';
            this.triggerEvent('like', {
                behavior: behavior
            }, {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVE7WUFDUixDQUFDO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUtELElBQUksRUFBRTtRQUNKLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsS0FBSyxFQUFFLHFCQUFxQjtLQUM3QjtJQUtELE9BQU8sRUFBRTtRQUNQLE1BQU07WUFDSixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1lBQ2hDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO1lBQ2pDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUE7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxLQUFLLE9BQUE7Z0JBQ0wsSUFBSSxNQUFBO2FBQ0wsQ0FBQyxDQUFBO1lBRUYsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUMsUUFBUSxDQUFBO1lBRXRELElBQUksQ0FBQyxZQUFZLENBQ2YsTUFBTSxFQUNOO2dCQUNFLFFBQVEsVUFBQTthQUNULEVBQ0QsRUFBRSxDQUNILENBQUE7UUFDSCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgbGlrZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyICgpIHtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvdW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgeWVzU3JjOiAnaW1hZ2VzL2xpa2UucG5nJyxcbiAgICBub1NyYzogJ2ltYWdlcy9saWtlQGRpcy5wbmcnXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIG9uTGlrZSAoKSB7XG4gICAgICBsZXQgbGlrZSA9ICF0aGlzLnByb3BlcnRpZXMubGlrZVxuICAgICAgbGV0IGNvdW50ID0gdGhpcy5wcm9wZXJ0aWVzLmNvdW50XG4gICAgICBjb3VudCA9IGxpa2UgPyBjb3VudCsxIDogY291bnQtMVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgY291bnQsXG4gICAgICAgIGxpa2VcbiAgICAgIH0pXG4gICAgICAvLyDmv4DmtLtcbiAgICAgIGxldCBiZWhhdmlvciA9IHRoaXMucHJvcGVydGllcy5saWtlID8gJ2xpa2UnOiAnY2FuY2xlJ1xuICAgICAgLy8g6Ieq5a6a5LmJ5LqL5Lu25ZCN56ewXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudChcbiAgICAgICAgJ2xpa2UnLCBcbiAgICAgICAge1xuICAgICAgICAgIGJlaGF2aW9yXG4gICAgICAgIH0sIFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiJdfQ==