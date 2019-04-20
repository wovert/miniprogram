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
        },
        readOnly: {
            type: Boolean
        }
    },
    data: {
        yesSrc: 'images/like.png',
        noSrc: 'images/like@dis.png'
    },
    methods: {
        onLike: function () {
            if (this.properties.readOnly) {
                return;
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBSVIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVE7WUFDUixDQUFDO1NBQ0Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1NBQ1Q7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztTQUNkO0tBQ0Y7SUFLRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLEtBQUssRUFBRSxxQkFBcUI7S0FDN0I7SUFLRCxPQUFPLEVBQUU7UUFDUCxNQUFNO1lBQ0osSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDNUIsT0FBTTthQUNQO1lBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQTtZQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQTtZQUNqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsS0FBSyxPQUFBO2dCQUNMLElBQUksTUFBQTthQUNMLENBQUMsQ0FBQTtZQUVGLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtZQUV0RCxJQUFJLENBQUMsWUFBWSxDQUNmLE1BQU0sRUFDTjtnQkFDRSxRQUFRLFVBQUE7YUFDVCxFQUNELEVBQUUsQ0FDSCxDQUFBO1FBQ0gsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGxpa2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvYnNlcnZlciAoKSB7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb3VudDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDBcbiAgICB9LFxuICAgIHJlYWRPbmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB5ZXNTcmM6ICdpbWFnZXMvbGlrZS5wbmcnLFxuICAgIG5vU3JjOiAnaW1hZ2VzL2xpa2VAZGlzLnBuZydcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb25MaWtlICgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BlcnRpZXMucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgbGlrZSA9ICF0aGlzLnByb3BlcnRpZXMubGlrZVxuICAgICAgbGV0IGNvdW50ID0gdGhpcy5wcm9wZXJ0aWVzLmNvdW50XG4gICAgICBjb3VudCA9IGxpa2UgPyBjb3VudCArIDEgOiBjb3VudCAtIDFcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGNvdW50LFxuICAgICAgICBsaWtlXG4gICAgICB9KVxuICAgICAgLy8g5r+A5rS7XG4gICAgICBsZXQgYmVoYXZpb3IgPSB0aGlzLnByb3BlcnRpZXMubGlrZSA/ICdsaWtlJzogJ2NhbmNsZSdcbiAgICAgIC8vIOiHquWumuS5ieS6i+S7tuWQjeensFxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoXG4gICAgICAgICdsaWtlJywgXG4gICAgICAgIHtcbiAgICAgICAgICBiZWhhdmlvclxuICAgICAgICB9LCBcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iXX0=