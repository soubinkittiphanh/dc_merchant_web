(window.webpackJsonp=window.webpackJsonp||[]).push([[50,14,18,23],{559:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(139),c=n(243),l=n(75),component=Object(l.a)({},(function(){var t=this._self._c;return t(r.a,{attrs:{color:"primary",dark:""}},[t(o.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),t(c.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},560:function(t,e,n){var content=n(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("52d9b218",content,!0,{sourceMap:!1})},561:function(t,e,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,".v-dialog{border-radius:4px;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);margin:24px;outline:none;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;height:100%;left:0;margin:0;overflow-y:auto;position:fixed;top:0}.v-dialog--fullscreen>.v-card{margin:0!important;min-height:100%;min-width:100%;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),r.locals={},t.exports=r},568:function(t,e,n){"use strict";var r=n(70),o=n(2),c=(n(21),n(69),n(48),n(40),n(57),n(4),n(109),n(9),n(11),n(10),n(13),n(8),n(14),n(560),n(556)),l=n(141),d=n(110),f=n(259),h=n(260),v=n(257),m=n(258),y=n(111),x=n(5),O=n(7),w=n(0);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(x.a)(d.a,f.a,h.a,v.a,m.a,l.a);e.a=_.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===w.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:S({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=S(S({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},569:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return l}));n(26),n(208);var r=function(t,e,n){t({icon:e,title:"ທ່ານແນ່ໃຈທີ່ຈະລົບບໍ່ ?",text:"ລາຍການນີ້ຈະຖືກລົບ ອອກຈາກຖານຂໍ້ມູນ!",confirmButtonText:"ຢືນຢັນ",confirmButtonColor:"#d33",showCancelButton:!0,cancelButtonText:"ອອກ",cancelButtonColor:"#3085d6"}).then((function(t){t.isConfirmed&&n()}))},o=function(t,title,e){t({icon:"error",title:title,text:e,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},c=function(t,title,text){t({icon:"success",title:title,text:text,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},l=function(t){return(new Intl.NumberFormat).format(t)}},574:function(t,e,n){"use strict";n(11),n(10),n(13),n(14);var r=n(2),o=(n(4),n(40),n(57),n(26),n(9),n(29),n(76),n(343),n(44),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(58),n(8),n(342),n(1)),c=n(39),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(n,r){return n[t+Object(l.G)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},S=m("alignContent",(function(){return{type:String,default:null,validator:j}})),_={align:Object.keys(x),justify:Object.keys(w),alignContent:Object.keys(S)},C={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=C[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var A=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},x),{},{justify:{type:String,default:null,validator:O}},w),{},{alignContent:{type:String,default:null,validator:j}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=A.get(l);if(!f){var h,v;for(v in f=[],_)_[v].forEach((function(t){var e=n[t],r=k(v,t,e);r&&f.push(r)}));f.push((h={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(h,"align-".concat(n.align),n.align),Object(r.a)(h,"justify-".concat(n.justify),n.justify),Object(r.a)(h,"align-content-".concat(n.alignContent),n.alignContent),h)),A.set(l,f)}return t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},577:function(t,e,n){"use strict";n(11),n(10),n(13),n(14);var r=n(2),o=(n(4),n(21),n(9),n(29),n(76),n(343),n(44),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(58),n(40),n(8),n(80),n(342),n(1)),c=n(39),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=w.get(l);if(!f){var h,v;for(v in f=[],x)x[v].forEach((function(t){var e=n[t],r=O(v,t,e);r&&f.push(r)}));var m=f.some((function(t){return t.startsWith("col-")}));f.push((h={col:!m||!n.cols},Object(r.a)(h,"col-".concat(n.cols),n.cols),Object(r.a)(h,"offset-".concat(n.offset),n.offset),Object(r.a)(h,"order-".concat(n.order),n.order),Object(r.a)(h,"align-self-".concat(n.alignSelf),n.alignSelf),h)),w.set(l,f)}return t(n.tag,Object(c.a)(data,{class:f}),o)}})},594:function(t,e,n){"use strict";n(262);var r=n(263);e.a=Object(r.a)("layout")},636:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(139),c=n(577),l=n(574),d={props:{title:{type:String,default:""},value:{type:String,default:0},color:{type:String,default:"#26c6da"}},data:function(){return{expand:!1}}},f=n(75),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mx-auto",attrs:{"max-width":"368","min-height":"100",color:t.color}},[e(o.c,{staticClass:"py-0"},[e(l.a,{attrs:{align:"center","no-gutters":""}},[e(c.a,{staticClass:"text-h7",attrs:{cols:"6","text-color":"white"}},[t._v("\n                "+t._s(t.title)+" ")]),t._v(" "),e(c.a,{staticClass:"text-right text-h7",attrs:{cols:"6","text-color":"white"}},[t._v("\n                "+t._s(t.value)+"\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},637:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(139),c=n(712),l=(n(29),n(256),n(38));n(47),n(41),n(4),n(30),n(60),n(44),n(11),n(71),n(82),n(58),n(140);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h={data:function(){return{campaignList:[],search:"",headers:[{text:"ຊື່ Campaign",align:"center",value:"title",sortable:!0},{text:"ສິນຄ້າ",align:"center",value:"pro_name"},{text:"ວັນທີເລີ່ມ",align:"center",value:"start"},{text:"ວັນທີສິ້ນສຸດ",align:"center",value:"end"},{text:"ເຂົ້າເຖິງ",align:"center",value:"reach"},{text:"ຄອມເມັ້ນ",align:"center",value:"comments"},{text:"Result",align:"center",value:"results"},{text:"ປິດການຂາຍ",align:"center",value:"closed"},{text:"ຍອດທີ່ຈ່າຍໄປ",align:"center",value:"budgetSpend"}]}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadCampaignData();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadCampaignData:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("/api/campaign/find_summary").then((function(e){t.campaignList=e.data.rows.map((function(t){return t}));var n,r=d(t.campaignList);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.start=o.start.split("T")[0],o.end=o.end.split("T")[0]}}catch(t){r.e(t)}finally{r.f()}t.headers.length=0})).catch((function(t){console.log("Error ",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()}}},v=n(75),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,[e(o.d,[t._v("\n            Campaign\n        ")]),t._v(" "),e(o.c,[t.campaignList?e(c.a,{attrs:{headers:t.headers,search:t.search,items:t.campaignList}}):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},713:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(139),c=n(577),l=n(568),d=n(594),f=n(574),h=n(38),v=(n(140),n(365),n(47),n(41),n(4),n(30),n(60),n(44),n(29),n(11),n(71),n(82),n(58),n(569)),m=n(636),y=n(637);function x(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var w={components:{CardOnTop:m.default,CampaignCard:y.default},data:function(){return{saleValue:0,isloading:!1,dailyState:!1,series:[0,0],options:{chart:{type:"donut"},responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}],labels:["CASH","COD"],title:{text:"ອໍເດີ ປະເພດ"},annotations:{points:[]}},peeair:{series:[],options:{colors:["#FF4560","#775DD0"]}},barSeries:[],barOptions:{title:{text:"ສິນຄ້າຂາຍດີ",align:"center",style:{fontSize:"16px"}},labels:[],chart:{type:"pie",width:"100%",height:"400px"}},barSeriesForDailyStat:[{data:[]}],barOptionsForDailyStat:{colors:[],chart:{type:"line"},plotOptions:{bar:{borderRadius:4,horizontal:!0},dataLabels:{style:{fontSize:"12px"},formatter:function(t){return t.toFixed(2)}}},dataLabels:{enabled:!0},xaxis:{categories:[]},yaxis:{title:{text:"Sales (in thousands)"}},title:{text:"ສະຖິຕິການຂາຍໃນເດືອນ"}}}},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadDailySaleStatistic();case 2:t.init();case 3:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadTopSale();case 2:return e.next=4,t.paymentGroup();case 4:case"end":return e.stop()}}),e)})))()},methods:{numberFormatter:function(t){return Object(v.b)(t)},getRandomColor:function(){for(var t="#",i=0;i<6;i++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},loadTopSale:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/topsale/?top=5").then((function(e){console.log("Data ",e.data[0]),e.data.map((function(e){t.barSeries.push(+e.sale_count),t.barOptions.labels.push(e.pro_name+" "+Object(v.b)(e.total_sale))}))})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},loadDailySaleStatistic:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/dailySaleReport").then((function(e){console.log("Data ",e.data[0]);var n,r=x(e.data);try{for(r.s();!(n=r.n()).done;){var o=n.value;t.barOptionsForDailyStat.colors.push(t.getRandomColor),t.barSeriesForDailyStat[0].data.push(o.total_sale),t.barOptionsForDailyStat.xaxis.categories.push(o.txn_date_short)}}catch(t){r.e(t)}finally{r.f()}})).catch((function(t){console.log("error",t)}));case 3:t.dailyState=!0,t.isloading=!1;case 5:case"end":return e.stop()}}),e)})))()},paymentGroup:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/cod_n_cash_report").then((function(e){t.series=e.data.series,t.options.labels=e.data.labels})).catch((function(t){console.log("error",t)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},init:function(){console.log("Init function");var t=[66,33];this.peeair.options={title:{text:"GreenWood",align:"center",style:{fontSize:"16px"}},labels:[" COD ".concat(t[0]," ບິນ ")," ORDER ".concat(t[1]," ບິນ")],chart:{type:"pie",width:"100%",height:"400px"}},this.peeair.series=t}}},j=n(75),component=Object(j.a)(w,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e("h1",[t._v("Dash board")]),t._v(" "),e(r.a,{staticClass:"mb-3"},[e(o.c,[e(d.a,{attrs:{row:"",wrap:""}},[e(f.a,[e(c.a,{attrs:{cols:"3",sm:"3"}},[e("card-on-top",{attrs:{title:t.options.labels[0],value:t.numberFormatter(t.series[0])}})],1),t._v(" "),e(c.a,{attrs:{cols:"3",sm:"3"}},[e("card-on-top",{attrs:{title:t.options.labels[1],value:t.numberFormatter(t.series[1])}})],1),t._v(" "),e(c.a,{attrs:{cols:"3",sm:"3"}},[e("card-on-top",{attrs:{title:t.options.labels[2],value:t.numberFormatter(t.series[2])}})],1),t._v(" "),e(c.a,{attrs:{cols:"3",sm:"3"}},[e("card-on-top",{attrs:{title:t.options.labels[3],value:t.numberFormatter(t.series[3])}})],1)],1)],1)],1)],1),t._v(" "),e(r.a,{staticClass:"mb-3"},[e(o.c,[e(d.a,{attrs:{row:"",wrap:""}},[e(f.a,[e(c.a,{attrs:{cols:"4",sm:"6"}},[e("apexchart",{attrs:{options:t.barOptions,series:t.barSeries}})],1),t._v(" "),t.dailyState?e(c.a,{attrs:{cols:"4",sm:"6"}},[e("apexchart",{attrs:{options:t.barOptionsForDailyStat,series:t.barSeriesForDailyStat}})],1):t._e()],1)],1)],1)],1),t._v(" "),e("campaignCard")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:n(559).default})}}]);