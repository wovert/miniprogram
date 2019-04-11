"use strict";
Component({
    properties: {
        title: String,
        first: Boolean,
        latest: Boolean,
    },
    data: {
        disLeftSrc: 'images/triangle.dis@left.png',
        leftSrc: 'images/triangle@left.png',
        disRightSrc: 'images/triangle.dis@right.png',
        rightSrc: 'images/triangle@right.png',
    },
    methods: {
        onLeft: function () {
            if (!this.properties.latest) {
                this.triggerEvent('left', {}, {});
            }
        },
        onRight: function () {
            if (!this.properties.first) {
                this.triggerEvent('right', {}, {});
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLE1BQU07UUFDYixLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0lBRUQsSUFBSSxFQUFFO1FBQ0osVUFBVSxFQUFFLDhCQUE4QjtRQUMxQyxPQUFPLEVBQUUsMEJBQTBCO1FBQ25DLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsUUFBUSxFQUFFLDJCQUEyQjtLQUN0QztJQUVELE9BQU8sRUFBRTtRQUNQLE1BQU07WUFFSixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTthQUNsQztRQUNILENBQUM7UUFDRCxPQUFPO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7YUFDbkM7UUFDSCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICBmaXJzdDogQm9vbGVhbiwgLy8g5piv5ZCm5Li656ys5LiA5pyfXHJcbiAgICBsYXRlc3Q6IEJvb2xlYW4sICAvLyDmmK/lkKbkuLrmnIDlkI7kuIDmnJ9cclxuICB9LFxyXG5cclxuICBkYXRhOiB7XHJcbiAgICBkaXNMZWZ0U3JjOiAnaW1hZ2VzL3RyaWFuZ2xlLmRpc0BsZWZ0LnBuZycsXHJcbiAgICBsZWZ0U3JjOiAnaW1hZ2VzL3RyaWFuZ2xlQGxlZnQucG5nJyxcclxuICAgIGRpc1JpZ2h0U3JjOiAnaW1hZ2VzL3RyaWFuZ2xlLmRpc0ByaWdodC5wbmcnLFxyXG4gICAgcmlnaHRTcmM6ICdpbWFnZXMvdHJpYW5nbGVAcmlnaHQucG5nJyxcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkxlZnQgKCkge1xyXG4gICAgICAvLyDop6blj5Hoh6rlrprkuYnkuovku7ZcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMubGF0ZXN0KSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2xlZnQnLCB7fSwge30pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblJpZ2h0ICgpIHtcclxuICAgICAgaWYgKCF0aGlzLnByb3BlcnRpZXMuZmlyc3QpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgncmlnaHQnLCB7fSwge30pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdfQ==