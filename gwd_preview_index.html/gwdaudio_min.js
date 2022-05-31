(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d,e="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function h(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var k=h(this),l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=l;var r="abort canplay canplaythrough durationchange emptied ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");function t(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")}function u(a){if(t(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&t(a))return a;return null};function v(a,b,c){c=void 0===c?null:c;var g=document.createEvent("CustomEvent");g.initCustomEvent(a,!0,!0,c);b.dispatchEvent(g)};var w=Object.keys(HTMLMediaElement.prototype).concat(["sources"]);function x(){var a=HTMLElement.call(this)||this;a.g=a.ownerDocument.createElement("audio");a.h=function(b){v(b.type,a,b.detail)};a.j=!1;a.i=!1;return a}var y=HTMLElement;x.prototype=e(y.prototype);x.prototype.constructor=x;if(q)q(x,y);else for(var z in y)if("prototype"!=z)if(Object.defineProperties){var A=Object.getOwnPropertyDescriptor(y,z);A&&Object.defineProperty(x,z,A)}else x[z]=y[z];d=x.prototype;
d.connectedCallback=function(){if(!this.i){for(;this.firstChild;)this.removeChild(this.firstChild);var a=this.ownerDocument.createElement("div");a.classList.add("intermediate-element");a.appendChild(this.g);this.appendChild(a);this.i=!0}for(a=0;a<r.length;a++)this.g.addEventListener(r[a],this.h,!1);this.gwdIsLoaded()||((a=u(this))?a.gwdIsLoaded()&&this.gwdLoad():this.gwdLoad());this.autoplay&&this.paused&&this.play()};
d.disconnectedCallback=function(){for(var a=0;a<r.length;a++)this.g.removeEventListener(r[a],this.h,!1)};d.attributeChangedCallback=function(a){"sources"==a&&B(this);"muted"==a&&(this.g.muted=this.muted);var b=this.g;if(this.hasAttribute(a)){var c=this.getAttribute(a);b.setAttribute(a,c)}else b.removeAttribute(a)};d.gwdLoad=function(){B(this);this.j=!0;v("ready",this)};d.gwdIsLoaded=function(){return this.j};
function B(a){var b=a.getAttribute("sources");b=b?b.split(","):[];for(var c;c=a.g.firstChild;)a.g.removeChild(c);for(c=0;c<b.length;c++){var g=a.ownerDocument.createElement("source");var f=b[c];f=f.trim();f=window.Enabler?window.Enabler.getUrl(f):f;g.src=f;a.g.appendChild(g)}}d.mute=function(){this.muted=!this.muted};d.replay=function(){this.seek(0);this.play()};d.seek=function(a){this.currentTime!=a&&(this.currentTime=a)};d.play=function(){this.g.play()};d.pause=function(){this.g.pause()};
k.Object.defineProperties(x.prototype,{nativeElement:{configurable:!0,enumerable:!0,get:function(){return this.g}},autoplay:{configurable:!0,enumerable:!0,get:function(){return this.g.autoplay},set:function(a){a?this.setAttribute("autoplay",""):this.removeAttribute("autoplay")}},controls:{configurable:!0,enumerable:!0,get:function(){return this.g.controls},set:function(a){a?this.setAttribute("controls",""):this.removeAttribute("controls")}},currentTime:{configurable:!0,enumerable:!0,get:function(){return this.g.currentTime},
set:function(a){this.g.currentTime=a}},duration:{configurable:!0,enumerable:!0,get:function(){return this.g.duration}},loop:{configurable:!0,enumerable:!0,get:function(){return this.g.loop},set:function(a){a?this.setAttribute("loop",""):this.removeAttribute("loop")}},muted:{configurable:!0,enumerable:!0,get:function(){return this.hasAttribute("muted")},set:function(a){a?this.setAttribute("muted",""):this.removeAttribute("muted")}},paused:{configurable:!0,enumerable:!0,get:function(){return this.g.paused}},
volume:{configurable:!0,enumerable:!0,get:function(){return this.g.volume},set:function(a){this.g.volume=a}}});k.Object.defineProperties(x,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return w}}});customElements.define("gwd-audio",x);}).call(this);
