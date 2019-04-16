"use strict";
Component({
    options: {
        multipleSlots: true
    },
    externalClasses: ['tag-class'],
    properties: {
        text: String
    },
    data: {},
    methods: {
        onTap: function (event) {
            this.triggerEvent('tapping', {
                text: this.properties.text
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBQ1IsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxlQUFlLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDOUIsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUtELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsS0FBSyxFQUFMLFVBQU8sS0FBVTtZQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO2dCQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJO2FBQzNCLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvdGFnL2luZGV4LmpzXG5Db21wb25lbnQoe1xuICBvcHRpb25zOiB7XG4gICAgbXVsdGlwbGVTbG90czogdHJ1ZSAvLyDnu4Tku7bkvb/nlKjmj5Lmp71cbiAgfSxcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ3RhZy1jbGFzcyddLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdGV4dDogU3RyaW5nXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIG9uVGFwIChldmVudDogYW55KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgndGFwcGluZycsIHtcbiAgICAgICAgdGV4dDogdGhpcy5wcm9wZXJ0aWVzLnRleHRcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19