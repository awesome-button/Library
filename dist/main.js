!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=document.getElementById("container");function o(){let e=document.getElementById("form");"block"===e.style.display?e.style.display="none":e.style.display="block"}function l(e){const t=document.createElement("div");t.setAttribute("class","books"),t.item=e,t.innerText=`${t.item.title}\n\n    ${t.item.author}\n\n    ${t.item.year}\n`;const n=document.createElement("button");n.setAttribute("class","delete"),t.appendChild(n),r.appendChild(t)}class i{constructor(e,t,n){this.title=e,this.author=t,this.year=n}}class a{constructor(){this.library=[]}add(e){this.library.push(e)}delete(e){let t=this.library.indexOf(e);-1!==t&&this.library.splice(t,1)}static from(e){let t=new a;for(let n=0;n<e.length;n++)t.add(e[n]);return t}}const u=[{title:"The Hobbit",author:"Tolkien",year:1937},{title:"Anna Karenina",author:"Tolstoy",year:1877},{title:"The Catcher In The Rye",author:"Salinger",year:1941},{title:"Martin Iden",author:"London",year:1909},{title:"Герой нашего времени",author:"Лермонтов",year:1840}];function c(){const e=document.getElementsByClassName("title")[0],t=document.getElementsByClassName("author")[0],n=document.getElementsByClassName("year")[0],c=document.getElementById("showFormButton"),s=document.getElementById("addButton");let d=document.getElementsByClassName("delete");
//! We rely on the fact that indices of delete buttons, of the cards that hold our books and
const y=a.from(u);function m(e){e.addEventListener("click",e=>{let t=e.target.parentElement;!function(e){y.delete(y.library[e]),t=e,r.removeChild(r.childNodes[t]);var t}(Array.from(document.getElementById("container").childNodes).indexOf(t))})}!function(){for(let e=0;e<y.library.length;e++){l(y.library[e]),m(d[e])}}(),c.addEventListener("click",o),s.addEventListener("click",()=>{!function(){const r=new i(e.value,t.value,n.value);y.add(r),l(r)}(),e.value="",t.value="",n.value="",m(d[d.length-1])})}c()}]);