(()=>{"use strict";function e(i,a){var b;if("undefined"==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=f(i))||a&&i&&"number"==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var j,k=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return k=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{k||null==b["return"]||b["return"]()}finally{if(g)throw a}}}}function f(e,f){if(e){if("string"==typeof e)return d(e,f);var b=Object.prototype.toString.call(e).slice(8,-1);return"Object"===b&&e.constructor&&(b=e.constructor.name),"Map"===b||"Set"===b?Array.from(e):"Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?d(e,f):void 0}}function d(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function b(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function g(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function c(d,a,b){return a&&g(d.prototype,a),b&&g(d,b),d}function h(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}var a={};(()=>{a.d=(b,c)=>{for(var d in c)a.o(c,d)&&!a.o(b,d)&&Object.defineProperty(b,d,{enumerable:!0,get:c[d]})}})(),(()=>{a.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b)})();a.d({},{L:()=>n});var i=function(){function d(){b(this,d),this.todos=[]}return c(d,[{key:"nuevoTodo",value:function(b){this.todos.push(b)}},{key:"eliminarTodo",value:function(){}},{key:"marcarCompletado",value:function(f){var a,b=e(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(c.id==f){c.completado=!c.completado;break}}}catch(c){b.e(c)}finally{b.f()}}},{key:"borrarCompletados",value:function(){}}]),d}();var j=function c(a){h(this,c),this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date};var k=document.querySelector(".todo-list"),l=document.querySelector(".new-todo"),m=function(d){var a="\n    <li class=\"".concat(d.completado?completed:"","\" data-id=\"").concat(d.id,"\">\n    <div class=\"view\">\n    <input class=\"toggle\" type=\"checkbox\" ").concat(d.completado?"checked":"",">\n    <label>").concat(d.tarea,"</label>\n    <button class=\"destroy\"></button>\n    </div>\n    <input class=\"edit\" value=\"Create a TodoMVC template\">\n    </li>\n    "),b=document.createElement("div");return b.innerHTML=a,k.append(b.firstElementChild),b.firstElementChild};l.addEventListener("keyup",function(c){if(13===c.keyCode&&0<l.value.length){var a=new j(l.value);n.nuevoTodo(a),m(a),l.value=""}}),k.addEventListener("click",function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute("data-id");a.includes("input")&&(n.marcarCompletado(c),b.classList.toggle("completed"))});var n=new i})();