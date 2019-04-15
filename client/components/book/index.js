"use strict";
Component({
    properties: {
        book: Object
    },
    data: {},
    methods: {
        onTap: function (event) {
            var bid = this.properties.book.id;
            wx.navigateTo({
                url: "/pages/book-detail/book-detail?bid=" + bid
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUVELElBQUksRUFBRSxFQUVMO0lBRUQsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFMLFVBQU8sS0FBVTtZQUNmLElBQU0sR0FBRyxHQUFXLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtZQUMzQyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSx3Q0FBc0MsR0FBSzthQUNqRCxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJDb21wb25lbnQoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgYm9vazogT2JqZWN0XG4gIH0sXG5cbiAgZGF0YToge1xuXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uVGFwIChldmVudDogYW55KSB7XG4gICAgICBjb25zdCBiaWQ6IG51bWJlciA9IHRoaXMucHJvcGVydGllcy5ib29rLmlkXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2Jvb2stZGV0YWlsL2Jvb2stZGV0YWlsP2JpZD0ke2JpZH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==