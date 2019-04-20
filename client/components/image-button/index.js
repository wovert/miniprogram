"use strict";
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        openType: {
            type: String
        }
    },
    data: {},
    methods: {
        onGetUserInfo: function (event) {
            this.triggerEvent('getuserinfo', event.detail, {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsU0FBUyxDQUFDO0lBSVIsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFFLElBQUk7S0FDcEI7SUFDRCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtTQUNiO0tBQ0Y7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBYixVQUFjLEtBQVU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNwRCxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL2ltYWdlLWJ1dHRvbi9pbmRleC5qc1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIG11bHRpcGxlU2xvdHM6IHRydWUgXG4gIH0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBvcGVuVHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvbkdldFVzZXJJbmZvKGV2ZW50OiBuYXkpe1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2dldHVzZXJpbmZvJywgZXZlbnQuZGV0YWlsLCB7fSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=