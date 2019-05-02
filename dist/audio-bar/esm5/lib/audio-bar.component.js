/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var AudioBarComponent = /** @class */ (function () {
    function AudioBarComponent() {
    }
    AudioBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aud-audio-bar',
                    template: "<div class=\"soundbar-panel\">\r\n  <div class=\"soundwave-bar\" [class.animated]=\"recording || playing\" [class.recorded]=\"recorded\">\r\n    <div class=\"freq-bar bar-1\"></div>\r\n    <div class=\"freq-bar bar-2\"></div>\r\n    <div class=\"freq-bar bar-3\"></div>\r\n    <div class=\"freq-bar bar-4\"></div>\r\n    <div class=\"freq-bar bar-5\"></div>\r\n    <div class=\"freq-bar bar-6\"></div>\r\n    <div class=\"freq-bar bar-7\"></div>\r\n  </div>\r\n</div>\r\n",
                    styles: ["@-webkit-keyframes grow{0%,100%,50%{-webkit-transform:scaleY(0);transform:scaleY(0)}25%{-webkit-transform:scaleY(1);transform:scaleY(1)}75%{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@keyframes grow{0%,100%,50%{-webkit-transform:scaleY(0);transform:scaleY(0)}25%{-webkit-transform:scaleY(1);transform:scaleY(1)}75%{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}.soundbar-panel{width:100%;min-width:250px;border-radius:50px;background-color:rgba(0,0,0,.9)}.soundwave-bar{background-size:14px;background-position:center;background-repeat:repeat-x;height:50px;width:210px;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;margin:0 auto}.soundwave-bar .freq-bar{visibility:hidden}.soundwave-bar.animated,.soundwave-bar.recorded{background-image:url(/assets/img/circle.svg)}.soundwave-bar.animated .freq-bar,.soundwave-bar.recorded .freq-bar{visibility:visible}.freq-bar{flex-shrink:1;margin:0 3px;width:8px;background:#fff;display:inline-block;-webkit-transform-origin:center;transform-origin:center;border-radius:5px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.bar-1,.bar-7{height:10px}.bar-2,.bar-6{height:20px}.bar-3,.bar-5{height:30px}.bar-4{height:40px}.animated .bar-1,.animated .bar-7{-webkit-animation:1.5s ease-out .1s infinite grow;animation:1.5s ease-out .1s infinite grow}.animated .bar-2,.animated .bar-6{-webkit-animation:1.5s ease-in-out .2s infinite grow;animation:1.5s ease-in-out .2s infinite grow}.animated .bar-3,.animated .bar-5{-webkit-animation:1.5s ease-in-out .1s infinite grow;animation:1.5s ease-in-out .1s infinite grow}.animated .bar-4{-webkit-animation:1.5s ease-in-out infinite grow;animation:1.5s ease-in-out infinite grow}"]
                }] }
    ];
    /** @nocollapse */
    AudioBarComponent.ctorParameters = function () { return []; };
    AudioBarComponent.propDecorators = {
        recording: [{ type: Input }],
        recorded: [{ type: Input }],
        playing: [{ type: Input }]
    };
    return AudioBarComponent;
}());
export { AudioBarComponent };
if (false) {
    /** @type {?} */
    AudioBarComponent.prototype.recording;
    /** @type {?} */
    AudioBarComponent.prototype.recorded;
    /** @type {?} */
    AudioBarComponent.prototype.playing;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8tYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F1ZGlvLWJhci8iLCJzb3VyY2VzIjpbImxpYi9hdWRpby1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRDtJQVNFO0lBQWdCLENBQUM7O2dCQVRsQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG1lQUF5Qzs7aUJBRTFDOzs7Ozs0QkFFRSxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFFUix3QkFBQztDQUFBLEFBVkQsSUFVQztTQUxZLGlCQUFpQjs7O0lBQzVCLHNDQUE0Qjs7SUFDNUIscUNBQTJCOztJQUMzQixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1ZC1hdWRpby1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYXVkaW8tYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXVkaW8tYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXVkaW9CYXJDb21wb25lbnQge1xuICBASW5wdXQoKSByZWNvcmRpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlY29yZGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGF5aW5nOiBib29sZWFuO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19