"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Typed = require('node_modules/typed.js/lib/typed.js');
// import Typed from './../../../node_modules/typed.js-master/lib/typed';
var ChatBotComponent = (function () {
    function ChatBotComponent() {
        this.showTextBox = false;
        this.showQ1Buttons = false;
        this.showQ1 = false;
    }
    ChatBotComponent.prototype.ngOnInit = function () {
        this.hello();
    };
    ChatBotComponent.prototype.hello = function () {
        var _this = this;
        var options = {
            strings: ["<i>Hi</i> there.", "My name is Lisa.", "What is your name?"],
            typeSpeed: 40,
            showCursor: false,
            onComplete: function (self) {
                _this.showTextBox = true;
            },
        };
        var typed = new Typed("#hello", options);
    };
    ChatBotComponent.prototype.btnSubmit = function () {
        var _this = this;
        this.showQ1 = true;
        setTimeout(function () {
            _this.q1text();
        }, 100);
    };
    ChatBotComponent.prototype.q1text = function () {
        var _this = this;
        var options = {
            strings: [("Hello, " + this.name + "."), "What would you like to know about me?"],
            typeSpeed: 40,
            showCursor: false,
            onComplete: function (self) {
                _this.showQ1Buttons = true;
            },
        };
        var typed = new Typed("#q1", options);
    };
    ChatBotComponent = __decorate([
        core_1.Component({
            selector: 'chat-bot',
            templateUrl: 'app/components/chat-bot/chat-bot.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ChatBotComponent);
    return ChatBotComponent;
}());
exports.ChatBotComponent = ChatBotComponent;
//# sourceMappingURL=chat-bot.component.js.map