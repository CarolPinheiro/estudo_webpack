!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(t){return e[t]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist",t(t.s=0)}({0:function(e,t,o){"use strict";function n(e){return function(e){return e instanceof v||Object.getPrototypeOf(e)instanceof v}(e)?e.message:(console.log(e),"Não foi possível realizar a operação.")}function r(e=500){return function(t,o,n){const r=n.value;let a=0;return n.value=function(...t){event&&event.preventDefault(),clearInterval(a),a=setTimeout(()=>r.apply(this,t),e)},n}}function a(e){throw new Error(e+" é um parâmetro obrigatório")}function i(e=a("event"),t=a("selector"),o=!0){return function(n,r,a){return Reflect.defineMetadata("bindEvent",{event:e,selector:t,prevent:o,propertyKey:r},Object.getPrototypeOf(n),r),a}}function s(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,o){return function n(r,a){try{var i=t[r](a),s=i.value}catch(e){return void o(e)}return i.done?void e(s):Promise.resolve(s).then((function(e){n("next",e)}),(function(e){n("throw",e)}))}("next")}))}}function c(e,t,o,n,r){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=o.slice().reverse().reduce((function(o,n){return n(e,t,o)||o}),a),r&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(r):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}o.r(t);let u=class e{static create(t,o,n){return new Proxy(t,{get:(t,r)=>e._ehFuncao(t[r])&&o.includes(r)?function(){console.log(`"${r}" disparou a armadilha`),t[r].apply(t,arguments),n(t)}:t[r],set(e,t,r){const a=Reflect.set(e,t,r);return o.includes(t)&&n(e),a}})}static _ehFuncao(e){return typeof e==typeof Function}},l=class{constructor(e,t,...o){const n=u.create(e,o,e=>{t.update(e)});return t.update(e),n}};const d=["negociacoes"];let p=null,h=null,f=class e{constructor(){throw new Error("Não é possível criar instâncias dessa classe")}static getConnection(){return new Promise((t,o)=>{if(p)return t(p);const n=indexedDB.open("jscangaceiro",2);n.onupgradeneeded=t=>{e._createStores(t.target.result)},n.onsuccess=e=>{p=e.target.result,h=p.close.bind(p),p.close=()=>{throw new Error("Você não pode fechar diretamente a conexão")},t(e.target.result)},n.onerror=e=>{console.log(e.target.error),o(e.target.error.name)}})}static _createStores(e){d.forEach(t=>{e.objectStoreNames.contains(t)&&e.deleteObjectStore(t),e.createObjectStore(t,{autoIncrement:!0})})}static closeConnection(){p&&h()}},g=(()=>{var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,o){return function n(r,a){try{var i=t[r](a),s=i.value}catch(e){return void o(e)}return i.done?void e(s):Promise.resolve(s).then((function(e){n("next",e)}),(function(e){n("throw",e)}))}("next")}))}}((function*(){let e=yield f.getConnection();return new class{constructor(e){this._connection=e,this._store="negociacoes"}adiciona(e){return new Promise((t,o)=>{const n=this._connection.transaction([this._store],"readwrite").objectStore(this._store).add(e);n.onsuccess=()=>t(),n.onerror=e=>{console.log(e.target.error),o("Não foi possível salvar a negociação")}})}listaTodos(){return new Promise((e,t)=>{const o=[],n=this._connection.transaction([this._store],"readwrite").objectStore(this._store).openCursor();n.onsuccess=t=>{const n=t.target.result;if(n){const e=new _(n.value._data,n.value._quantidade,n.value._valor);o.push(e),n.continue()}else e(o)},n.onerror=e=>{console.log(e.target.error),t("Não foi possível listar nas negociações")}})}apagaTodos(){return new Promise((e,t)=>{const o=this._connection.transaction([this._store],"readwrite").objectStore(this._store).clear();o.onsuccess=()=>e(),o.onerror=e=>{console.log(e.target.error),t("Não foi possível apagar as negociações")}})}}(e)}));return function(){return e.apply(this,arguments)}})(),m=class extends Error{constructor(e=""){super(e),this.name=this.constructor.name}};const v=m;let _=class{constructor(e=a("data"),t=a("quantidade"),o=a("valor")){Object.assign(this,{_quantidade:t,_valor:o}),this._data=new Date(e.getTime()),Object.freeze(this)}get volume(){return this._quantidade*this._valor}get data(){return new Date(this._data.getTime())}get quantidade(){return this._quantidade}get valor(){return this._valor}equals(e){return JSON.stringify(this)==JSON.stringify(e)}},y=class{constructor(e){this._elemento=document.querySelector(e)}update(e){this._elemento.innerHTML=this.template(e)}template(){throw new Error("Você precisa implementar o método template")}},w=class extends y{template(e){return e.texto?`<p class="alert alert-info">${e.texto}</p>`:"<p></p>"}},b=class extends m{constructor(){super("A data deve estar no formato dd/mm/aaaa")}},x=class{constructor(){throw new Error("Esta classe não pode ser instanciada")}static paraTexto(e){return`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`}static paraData(e){if(!/\d{2}\/\d{2}\/\d{4}/.test(e))throw new b;return new Date(...e.split("/").reverse().map((e,t)=>e-t%2))}},O=class extends y{template(e){return`\n        <table class="table table-hover table-bordered">\n            <thead>\n                <tr>\n                    <th>DATA</th>\n                    <th>QUANTIDADE</th>\n                    <th>VALOR</th>\n                    <th>VOLUME</th>\n                </tr>\n            </thead>\n            \n            <tbody>\n                ${e.paraArray().map(e=>`\n                    <tr>\n                        <td>${x.paraTexto(e.data)}</td>\n                        <td>${e.quantidade}</td>\n                        <td>${e.valor}</td>\n                        <td>${e.volume}</td>\n                    </tr>                        \n                `).join("")}\n            </tbody>\n            \n            <tfoot>\n                <tr>\n                    <td colspan="3"></td>\n                    <td>${e.volumeTotal}</td>            \n                </tr>\n            </tfoot>\n            \n        </table>               \n        `}};var D,N,j,P,S,E,T,q;let z=(D=function(...e){const t=["#data","#quantidade","#valor"].map(e=>document.querySelector(e));return function(e){const o=e,n=function(){const e=new o(...t);Object.getOwnPropertyNames(o.prototype).forEach(t=>{Reflect.hasMetadata("bindEvent",e,t)&&function(e,t){document.querySelector(t.selector).addEventListener(t.event,o=>{t.prevent&&o.preventDefault(),e[t.propertyKey](o)})}(e,Reflect.getMetadata("bindEvent",e,t))})};return n.prototype=o.prototype,n}}(),N=i("submit",".form"),j=r(),P=i("click","#botao-importa"),S=r(),E=i("click","#botao-apaga"),D((c((q=class{constructor(e,t,o){Object.assign(this,{_inputData:e,_inputQuantidade:t,_inputValor:o}),this._negociacoes=new l(new class{constructor(){this._negociacoes=[],Object.freeze(this)}adiciona(e){this._negociacoes.push(e)}paraArray(){return[].concat(this._negociacoes)}get volumeTotal(){return this._negociacoes.reduce((e,t)=>e+t.volume,0)}esvazia(){this._negociacoes.length=0}},new O("#negociacoes"),"adiciona","esvazia"),this._mensagem=new l(new class{constructor(e=""){this._texto=e}get texto(){return this._texto}set texto(e){this._texto=e}},new w("#mensagemView"),"texto"),this._service=new class{constructor(){this._http=new class{_handleErrors(e){if(!e.ok)throw new Error(e.statusText);return e}get(e){return fetch(e).then(e=>this._handleErrors(e)).then(e=>e.json())}}}obtemNegociacoesDaSemana(){return this._http.get("http://localhost:3000/negociacoes/semana").then(e=>e.map(e=>new _(new Date(e.data),e.quantidade,e.valor)),()=>{throw new m("Não foi possível obter as negociações da semana")})}obtemNegociacoesDaSemanaAnterior(){return this._http.get("http://localhost:3000/negociacoes/anterior").then(e=>e.map(e=>new _(new Date(e.data),e.quantidade,e.valor)),()=>{throw new m("Não foi possível obter as negociações da semana anterior")})}obtemNegociacoesDaSemanaRetrasada(){return this._http.get("http://localhost:3000/negociacoes/retrasada").then(e=>e.map(e=>new _(new Date(e.data),e.quantidade,e.valor)),()=>{throw new m("Não foi possível obter as negociações da semana retrasada")})}obtemNegociacoesDoPeriodo(){var e=this;return function(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,o){return function n(r,a){try{var i=t[r](a),s=i.value}catch(e){return void o(e)}return i.done?void e(s):Promise.resolve(s).then((function(e){n("next",e)}),(function(e){n("throw",e)}))}("next")}))}}((function*(){try{return(yield Promise.all([e.obtemNegociacoesDaSemana(),e.obtemNegociacoesDaSemanaAnterior(),e.obtemNegociacoesDaSemanaRetrasada()])).reduce((function(e,t){return e.concat(t)}),[]).sort((function(e,t){return t.data.getTime()-e.data.getTime()}))}catch(e){throw console.log(e),new m("Não foi possível obter as negociações do período")}}))()}},this._init()}_init(){var e=this;return s((function*(){try{const t=yield g();(yield t.listaTodos()).forEach((function(t){return e._negociacoes.adiciona(t)}))}catch(t){e._mensagem.texto=n(t)}}))()}adiciona(){var e=this;return s((function*(){try{const t=e._criaNegociacao(),o=yield g();yield o.adiciona(t),e._negociacoes.adiciona(t),e._mensagem.texto="Negociação adicionada com sucesso",e._limpaFormulario()}catch(t){e._mensagem.texto=n(t)}}))()}_limpaFormulario(){this._inputData.value="",this._inputQuantidade.value=1,this._inputValor.value=0,this._inputData.focus()}_criaNegociacao(){return new _(x.paraData(this._inputData.value),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))}importaNegociacoes(){var e=this;return s((function*(){try{const t=yield e._service.obtemNegociacoesDoPeriodo();console.log(t),t.filter((function(t){return!e._negociacoes.paraArray().some((function(e){return t.equals(e)}))})).forEach((function(t){return e._negociacoes.adiciona(t)})),e._mensagem.texto="Negociações do período importadas com sucesso"}catch(t){e._mensagem.texto=n(t)}}))()}apaga(){var e=this;return s((function*(){try{const t=yield g();yield t.apagaTodos(),e._negociacoes.esvazia(),e._mensagem.texto="Negociações apagadas com sucesso"}catch(t){e._mensagem.texto=n(t)}}))()}}).prototype,"adiciona",[N,j],Object.getOwnPropertyDescriptor(q.prototype,"adiciona"),q.prototype),c(q.prototype,"importaNegociacoes",[P,S],Object.getOwnPropertyDescriptor(q.prototype,"importaNegociacoes"),q.prototype),c(q.prototype,"apaga",[E],Object.getOwnPropertyDescriptor(q.prototype,"apaga"),q.prototype),T=q))||T);o(1),o(11),o(13);new z;const A=new _(new Date,1,200),$=new Headers;$.set("Content-Type","application/json");const M=JSON.stringify(A);fetch("http://localhost:3000/negociacoes",{method:"POST",headers:$,body:M}).then(()=>console.log("Dado enviado com sucesso"))},1:function(){},11:function(){},13:function(){}});