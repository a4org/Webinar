# "JavaScript. The Core" Notes

##### Jiawei Wang (Angold-4) Nov 2021

* **Paper : [JavaScript. The Core](http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/)** 
* **Author : [Dmitry Soshnikov](http://dmitrysoshnikov.com/)**

## 1. ECMAScript

> **Mocha -> LiveScript -> JavaScript -> ECMA-262 -> ECMAScript -> JavaScript (ECMAScript + DOM + BOM)**


To start from the beginning, **JavaScript** derived its name from **Java** and initially **[Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)** (the Co-founder of Mozilla) was asked to develop a language that resembled Java for the web for his company Netscape.<br>
But Eich decided that Java was too complicated and not suitable for web development, **and set out to create a simple language that even a beginner could code in.**<br>

After the language was complete **(Eich "wrote JavaScript in ten days" in 1995)**, the marketing team of Netscape requested Sun to allow them to name it JavaScript as a marketing stunt and hence why most people who have never used JavaScript think it's related to Java.

About a year or two after JavaScript's release in the browser, Microsoft's IE took the language and started making its own implementations such as JScript. At the same time, IE was dominating the market and not long after Netscape had to shut its project.

Before Netscape went down, they decided to start a **standard** that would guide the path of JavaScript, named **ECMAScript**.

### JavaScript is the most popular implementation of the ECMAScript Standard!

After that Microsoft dominated the scenes but at the same time they weren't improving their product(IE) and hence **Firefox** was born (led by **Eich**) and a whole heap of other browsers such as Chrome, Opera, and they use **JavaScript** as their web scripting language (follow the ECMA Standard).

### Notable JS Engines:
<img src="Sources/V8.png" align="right" weight="90" height="90"/>
#### V8
* From **[Google](https://v8.dev/)**
* Most Used JS Engine
* Used in Chromium-based browsers (Chrome)

<img src="Sources/SpiderMonkey.png" align="right" weight="90" height="90"/>
#### SpiderMonkey
* From **[Mozilla Foundation](https://spidermonkey.dev/)**
* The First JS Engine
* Used in FireFox

<img src="Sources/WebKit.png" align="right" weight="80" height="80">
#### JavaScriptCore From WebKit
* From **[Apple](https://developer.apple.com/documentation/javascriptcore)**
* Used in Safari


## 2. Prototype
