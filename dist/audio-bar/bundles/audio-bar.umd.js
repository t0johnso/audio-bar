(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('audio-bar', ['exports', '@angular/core'], factory) :
    (factory((global['audio-bar'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AudioBarComponent = /** @class */ (function () {
        function AudioBarComponent() {
        }
        AudioBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aud-audio-bar',
                        template: "<div class=\"soundbar-panel\">\r\n  <div class=\"soundwave-bar\" [class.animated]=\"recording || playing\" [class.recorded]=\"recorded\">\r\n    <div class=\"freq-bar bar-1\"></div>\r\n    <div class=\"freq-bar bar-2\"></div>\r\n    <div class=\"freq-bar bar-3\"></div>\r\n    <div class=\"freq-bar bar-4\"></div>\r\n    <div class=\"freq-bar bar-5\"></div>\r\n    <div class=\"freq-bar bar-6\"></div>\r\n    <div class=\"freq-bar bar-7\"></div>\r\n  </div>\r\n</div>\r\n",
                        styles: ["@-webkit-keyframes grow{0%,100%,50%{-webkit-transform:scaleY(0);transform:scaleY(0)}25%{-webkit-transform:scaleY(1);transform:scaleY(1)}75%{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}@keyframes grow{0%,100%,50%{-webkit-transform:scaleY(0);transform:scaleY(0)}25%{-webkit-transform:scaleY(1);transform:scaleY(1)}75%{-webkit-transform:scaleY(.5);transform:scaleY(.5)}}.soundbar-panel{width:100%;min-width:250px;border-radius:50px;background-color:rgba(0,0,0,.9)}.soundwave-bar{background-size:14px;background-position:center;background-repeat:repeat-x;height:50px;width:210px;display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;margin:0 auto}.soundwave-bar .freq-bar{visibility:hidden}.soundwave-bar.animated,.soundwave-bar.recorded{background-image:url(/assets/img/circle.svg)}.soundwave-bar.animated .freq-bar,.soundwave-bar.recorded .freq-bar{visibility:visible}.freq-bar{flex-shrink:1;margin:0 3px;width:8px;background:#fff;display:inline-block;-webkit-transform-origin:center;transform-origin:center;border-radius:5px;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.bar-1,.bar-7{height:10px}.bar-2,.bar-6{height:20px}.bar-3,.bar-5{height:30px}.bar-4{height:40px}.animated .bar-1,.animated .bar-7{-webkit-animation:1.5s ease-out .1s infinite grow;animation:1.5s ease-out .1s infinite grow}.animated .bar-2,.animated .bar-6{-webkit-animation:1.5s ease-in-out .2s infinite grow;animation:1.5s ease-in-out .2s infinite grow}.animated .bar-3,.animated .bar-5{-webkit-animation:1.5s ease-in-out .1s infinite grow;animation:1.5s ease-in-out .1s infinite grow}.animated .bar-4{-webkit-animation:1.5s ease-in-out infinite grow;animation:1.5s ease-in-out infinite grow}"]
                    }] }
        ];
        /** @nocollapse */
        AudioBarComponent.ctorParameters = function () { return []; };
        AudioBarComponent.propDecorators = {
            recording: [{ type: core.Input }],
            recorded: [{ type: core.Input }],
            playing: [{ type: core.Input }]
        };
        return AudioBarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AudioBarModule = /** @class */ (function () {
        function AudioBarModule() {
        }
        AudioBarModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [AudioBarComponent],
                        imports: [],
                        exports: [AudioBarComponent]
                    },] }
        ];
        return AudioBarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AudioBarComponent = AudioBarComponent;
    exports.AudioBarModule = AudioBarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=audio-bar.umd.js.map