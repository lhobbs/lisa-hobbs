import { Component } from '@angular/core';
const Typed = require('node_modules/typed.js/lib/typed.js');
// import Typed from './../../../node_modules/typed.js-master/lib/typed';

@Component({
  selector: 'chat-bot',
  templateUrl: 'app/components/chat-bot/chat-bot.component.html',
})
export class ChatBotComponent  {
  showTextBox: boolean;
  showQ1Buttons: boolean;
  showQ1: boolean;
  name: string;

    constructor () { 
      this.showTextBox = false   
      this.showQ1Buttons = false;  
      this.showQ1 = false
    }

    ngOnInit() {
      this.hello()
    }

    hello() {
      var options = {
        strings: ["<i>Hi</i> there.", "My name is Lisa.", "What is your name?"],
        typeSpeed: 40,
        showCursor: false,
        onComplete: (self) => {
          this.showTextBox = true
        },
      }
      var typed = new Typed("#hello", options);
    }
    btnSubmit() {
      this.showQ1 = true;

      setTimeout (() => {
        this.q1text()
      }, 100)
      
    }
    q1text() {

      var options = {
        strings: [`Hello, ${this.name}.`, "What would you like to know about me?"],
        typeSpeed: 40,
        showCursor: false,
        onComplete: (self) => {
          this.showQ1Buttons = true
        },
      }
      var typed = new Typed("#q1", options);
    }
 }