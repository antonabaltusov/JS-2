(()=>{var t={880:()=>{Vue.component("cart",{template:'<div>\n      <button class="cart-button" @click="openCartHandler" type="button">Корзина</button>\n      <div v-if="isVisibleCart" v-on:click="removeHandler">\n        <slot></slot>\n      </div>\n    </div>',data:()=>({isVisibleCart:!1}),methods:{openCartHandler(){this.isVisibleCart=!this.isVisibleCart},removeHandler(t){this.$emit("remove",t)}}})},561:()=>{Vue.component("goods-item",{template:'<div :data-id="id" class="goods-item"><h3>{{ title }}</h3><p>{{ price }}</p></div>',props:["title","price","id"]})},840:()=>{Vue.component("search",{template:'<div><input id="search" v-model="search"><button v-on:click="searchHandler">SEARCH</button></div>',data:()=>({search:""}),methods:{searchHandler(){this.$emit("search",this.search)}}})}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(561),o(880),o(840),new Vue({el:"#app",data:{cart:[],goods:[],filtredGoods:[],search:"",isLoaded:!1},methods:{addStats(t){fetch("/stats",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})},addToCartHandler(t){const e=t.target.closest(".goods-item").dataset.id,o=this.goods.find((t=>t.id==e));fetch("/cart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),this.addStats({move:"add",name:o.title,time:t.timeStamp}),this.cart.push(o)},removeFromCartHandler(t){const e=t.target.closest(".goods-item").dataset.id,o=this.cart.findIndex((t=>t.id==e)),i=this.goods.find((t=>t.id==e));fetch("/cart",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}),this.addStats({move:"remove",name:i.title,time:t.timeStamp}),this.cart.splice(o,1)},searchHandler(t){""===t&&(this.filtredGoods=this.goods);const e=new RegExp(t,"gi");this.filtredGoods=this.goods.filter((t=>e.test(t.title)))}},mounted(){fetch("/data").then((t=>t.json())).then((t=>{this.goods=t,this.filtredGoods=t,this.isLoaded=!0})).catch((t=>{console.log(t)})),fetch("/cart").then((t=>t.json())).then((t=>{this.cart=t})).catch((t=>{console.log(t)}))}})})()})();