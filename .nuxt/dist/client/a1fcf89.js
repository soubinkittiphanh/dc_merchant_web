(window.webpackJsonp=window.webpackJsonp||[]).push([[52,19,21,26],{559:function(t,e,r){"use strict";r.r(e);var n=r(246),o=r(139),c=r(243),l=r(75),component=Object(l.a)({},(function(){var t=this._self._c;return t(n.a,{attrs:{color:"primary",dark:""}},[t(o.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),t(c.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},563:function(t,e,r){"use strict";r.r(e);var n=r(541),o=r(246),c=r(139),l=r(244),d=r(554),f={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},m=r(75),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,[e(c.d,{staticClass:"text-h5 grey lighten-2"},[t._v(" ຂໍ້ຄວາມ ")]),t._v(" "),e(c.c,[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e(l.a),t._v(" "),e(c.a,[e(d.a),t._v(" "),e(n.a,{attrs:{color:"primary",text:""},on:{click:t.toggleDialog}},[t._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},569:function(t,e,r){"use strict";var n=r(2),o=(r(40),r(57),r(257),r(10),r(4),r(8),r(48),r(109),r(9),r(11),r(13),r(14),r(5)),c=r(94),l=r(112);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},573:function(t,e,r){r(577)},577:function(t,e,r){"use strict";var n=r(6),o=r(27),c=r(18),l=r(59),d=r(22),f=r(81),m=r(209),h=r(31),v=r(103),_=r(262),x=r(357),w=r(25),O=r(49),D=w("replace"),y=TypeError,k=c("".indexOf),S=c("".replace),I=c("".slice),F=Math.max,C=function(t,e,r){return r>t.length?-1:""===e?r:k(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,c,w,j,E,N,$,T,B=l(this),L=0,P=0,R="";if(!f(t)){if((r=m(t))&&(n=h(l(_(t))),!~k(n,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(c=v(t,D))return o(c,t,B,e);if(O&&r)return S(h(B),t,e)}for(w=h(B),j=h(t),(E=d(e))||(e=h(e)),N=j.length,$=F(1,N),L=C(w,j,0);-1!==L;)T=E?h(e(j,L,w)):x(j,w,L,[],void 0,e),R+=I(w,P,L)+T,P=L+N,L=C(w,j,L+$);return P<w.length&&(R+=I(w,P)),R}})},587:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));r(24),r(26),r(576),r(208);var n=function(t,title,e){t({icon:"error",title:title,text:e,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})},o=function(t,title,text){t({icon:"success",title:title,text:text,showConfirmButton:!0,allowEscapeKey:!1,allowOutsideClick:!1,allowEnterKey:!1})};new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},592:function(t,e,r){"use strict";r(263);var n=r(265);e.a=Object(n.a)("layout")},594:function(t,e,r){"use strict";r.r(e);var n=r(541),o=r(246),c=r(139),l=r(709),d=r(554),f=(r(29),r(256),r(38)),m=(r(47),r(140),{props:{orderId:{type:String,default:""}},created:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()},methods:{getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},toggleDialog:function(){this.$emit("close-dialog","false")},fetchData:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/findOrderById/?orderId="+t.orderId).then((function(e){t.orderList=e.data.row.map((function(e){return{id:e.id,order_id:e.order_id,user_id:e.user_id,product_id:e.product_id+" "+e.pro_name,product_amount:e.product_amount,product_price:t.getFormatNum(e.product_price),order_price_total:t.getFormatNum(e.order_price_total),product_discount:e.product_discount,locking_session_id:e.locking_session_id,cod_fee:e.cod_fee,rider_fee:e.rider_fee,record_status:e.record_status,cancel_reason:e.cancel_reason,txn_date:e.txn_date.split("T")[0],recordStatusText:1===e.record_status?"Effeced":2===e.record_status?"Cancel":"Return"}}))})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()}},data:function(){return{search:"",orderList:[],headers:[{text:"ວັນທີ",align:"center",value:"txn_date",sortable:!0},{text:"ລະຫັດສິນຄ້າ",align:"center",value:"product_id"},{text:"ຈຳນວນ",align:"center",value:"product_amount"},{text:"ລາຄາ",align:"end",value:"product_price",sortable:!0},{text:"ລວມ",align:"end",value:"order_price_total",sortable:!1},{text:"ສະຖານະ",align:"end",value:"recordStatusText",sortable:!1}]}}}),h=r(75),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e(o.a,[e(c.b,[e("span",{staticClass:"text-h5"},[t._v("Order item")])]),t._v(" "),t.orderList?e(l.a,{attrs:{headers:t.headers,search:t.search,items:t.orderList},scopedSlots:t._u([{key:"item.function",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.editItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-wallet"})])]}}],null,!0)}):t._e(),t._v(" "),e(c.a,[e(d.a),t._v(" "),e(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:t.toggleDialog}},[t._v("\n                Close\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},595:function(t,e,r){"use strict";r.r(e);var n=r(246),o=r(139),c=r(580),l=r(244),d=r(578),f={props:{orderDetail:{type:Object,default:""}}},m=r(75),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"ml-4"},[e(o.d,[t._v(t._s(this.orderDetail.title))]),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຈຳນວນ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.amount)+" ອໍເດີ")])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຍອດຂາຍ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.sale))])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ສ່ວນຫລຸດ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.discount))])],1),t._v(" "),e(l.a),t._v(" "),e(d.a,[e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v("ຍອດເຫລືອ")]),t._v(" "),e(c.a,{attrs:{cols:"6",lg:"6"}},[t._v(t._s(this.orderDetail.gross))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},603:function(t,e,r){"use strict";r.r(e);var n,o=r(555),c=r(541),l=r(246),d=r(139),f=r(568),m=r(569),h=r(554),v=r(86),_=r(2),x=r(38),w=(r(140),r(21),r(29),r(587)),O=(n={props:{isEdit:{type:Boolean,default:!1},id:{type:Number,require:!1}},data:function(){return{isSubmitting:!1,form:{orderId:this.id,status:2,userId:"",reason:""},cancelList:[{id:2,name:"cancel"},{id:3,name:"return"}]}},computed:{codeRule:function(){return[function(t){return!!t||"ກະລຸນາ ໃສ່ຕົວຫຍໍ້ ສາຂາ "},function(t){return t&&t.length>=2||"ຕົວຫຍໍ້ສາຂາຕ້ອງ 3 ຕົວຂື້ນໄປ"}]},nameRule:function(){return[function(t){return!!t||"ກະລຸນາ ຊື່ ສາຂາ "}]},numberRule:function(){return[function(t){return/^[0-9]*$/.test(t)||!t||"ໃສ່ໄດ້ສະເພາະ ຕົວເລກ"}]}},mounted:function(){this.loadBranch()}},Object(_.a)(n,"computed",{user:function(){return this.$auth.user||""}}),Object(_.a)(n,"methods",{submitForm:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.myform.validate()||t.isSubmitting){e.next=13;break}if(t.isSubmitting=!0,!t.isEdit){e.next=7;break}return e.next=5,t.$axios.put("branch/update/".concat(t.id),t.form).then((function(e){200==e.status?(Object(w.b)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(w.a)(t.$swal,"Error",e.data)})).catch((function(e){Object(w.a)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 5:e.next=11;break;case 7:return t.form.userId=t.user.id,console.log("Form: ",t.form),e.next=11,t.$axios.put("/api/changeOrderStatus",t.form).then((function(e){200==e.status?(Object(w.b)(t.$swal,"Succeed","ດຳເນີນການສຳເລັດ"),t.refreshData()):Object(w.a)(t.$swal,"Error",e.data)})).catch((function(e){Object(w.a)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 11:e.next=14;break;case 13:return e.abrupt("return");case 14:t.isSubmitting=!1;case 15:case"end":return e.stop()}}),e)})))()},loadBranch:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id||!t.isEdit){e.next=5;break}return t.isSubmitting=!0,e.next=4,t.$axios.get("branch/find/".concat(t.id)).then((function(e){t.form=e.data})).catch((function(e){Object(w.a)(t.$swal,"Error",e.response.data.errors[0].msg)}));case 4:t.isSubmitting=!1;case 5:case"end":return e.stop()}}),e)})))()},refreshData:function(){this.$emit("refresh")}}),n),D=r(75),component=Object(D.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e(f.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isSubmitting,callback:function(e){t.isSubmitting=e},expression:"isSubmitting"}},[e("loading-indicator")],1),t._v(" "),e(l.a,{staticClass:"pa-4"},[t._v("\n        ຍົກເລີກບິນ\n        "),e(m.a,{ref:"myform",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e(v.a,{attrs:{disabled:"",label:"ເລກທີອໍເດີ ",required:""},model:{value:t.form.orderId,callback:function(e){t.$set(t.form,"orderId",e)},expression:"form.orderId"}}),t._v(" "),e(o.a,{attrs:{"item-text":"name","item-value":"id",items:t.cancelList,label:"ເລືອກການຍົກເລີກ *"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}}),t._v(" "),e(v.a,{attrs:{label:"ເຫດຜົນການຍົກເລີກ"},model:{value:t.form.reason,callback:function(e){t.$set(t.form,"reason",e)},expression:"form.reason"}})],1),t._v(" "),e(d.a,[e(h.a),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close-dialog")}}},[t._v("\n                ຍົກເລີກ\n            ")]),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:function(e){return t.submitForm(!0)}}},[t._v("\n                ບັນທຶກ\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LoadingIndicator:r(559).default})},625:function(t,e,r){var content=r(683);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3b621b55",content,!0,{sourceMap:!1})},682:function(t,e,r){"use strict";r(625)},683:function(t,e,r){var n=r(15)((function(i){return i[1]}));n.push([t.i,'.grey[data-v-55dab2c1],.text-h5[data-v-55dab2c1]{font-family:"Noto Sans Lao"}table[data-v-55dab2c1]{border:1px solid #000}',""]),n.locals={},t.exports=n},723:function(t,e,r){"use strict";r.r(e);var n=r(541),o=r(246),c=r(139),l=r(580),d=r(709),f=r(708),m=r(568),h=r(244),v=r(592),_=r(247),x=r(578),w=r(86),O=(r(29),r(256),r(76),r(573),r(24)),D=r(70),y=r(38),k=(r(4),r(8),r(40),r(57),r(69),r(26),r(65),r(47),r(30),r(576),r(140),{components:{OrderDetail:r(594).default},middleware:"auths",data:function(){return{whatsappContactLink:"",componentKey:0,dialogOrderDetail:!1,selectedOrderId:"",wallet:!1,isedit:!1,dialog:!1,isloading:!1,dialogForm:!1,message:"",valid:!0,name:"",search:"",userId:null,orderHeaderList:[],loadDataNoCancelOrder:[],codPaid:[],componentCancelFormKey:1,cancelForm:!1,OrderIdSelected:"",headers:[{text:"ວັນທີ",align:"center",value:"bookingDate",sortable:!0},{text:"ຊື່ລູກຄ້າ",align:"center",value:"cusName"},{text:"ເບີໂທ",align:"center",value:"cusTel"},{text:"ບ່ອນສົ່ງ",align:"center",value:"cusAddress"},{text:"ສ່ວນຫລຸດ",align:"end",value:"discount",sortable:!0},{text:"ລວມ",align:"end",value:"cartTotal",sortable:!1},{text:"ຂົນສົ່ງ",align:"end",value:"shippingCompany",sortable:!1},{text:"ການຊຳລະ",align:"end",value:"payment",sortable:!1},{text:"ຮ້ານ",align:"end",value:"shopName",sortable:!1},{text:"ລາຍລະອຽດ",align:"end",value:"function",sortable:!1},{text:"ຍົກເລີກບິນ",align:"end",value:"cancel",sortable:!1}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dateFormatted2:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menu1:!1,menu2:!1}},created:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadData();case 2:case"end":return e.stop()}}),e)})))()},watch:{message:function(t){this.dialog=null!=t},isedit:function(t){t||(this.form_data.cus_id="1XXX")},date:function(t){this.dateFormatted=this.formatDate(this.date),this.loadData()},date2:function(t){this.dateFormatted2=this.formatDate(this.date2),this.loadData()}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)},totalSale:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.cartTotal),t+=parseInt(e.cartTotal)})),console.log("Price total: "+t),this.getFormatNum(t)},totalSaleOriginal:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.cartTotal),t+=parseInt(e.cartTotal)})),console.log("Price total: "+t),this.getFormatNum(t)},totalDiscount:function(){var t=0;return this.noCancelData.forEach((function(e){console.log("====>",e.discount),t+=parseInt(e.discount)})),console.log("Price total: "+t),this.getFormatNum(t)},noCancelData:function(){var t=this;return this.loadDataNoCancelOrder=[],this.orderHeaderList.forEach((function(element){console.log(element.recordStatus),1===element.recordStatus&&(console.log("Concept applied"),t.loadDataNoCancelOrder.push(element))})),this.loadDataNoCancelOrder},unpaidCodOrder:function(){var t=[],e={};this.orderHeaderList.forEach((function(element){console.log(element.recordStatus),"PENDING"===element.paymentStatus&&element.payment.includes("COD")&&(console.log("Concept applied"),t.push(element))}));var r=t.reduce((function(t,e){return t+e.cartTotal}),0),n=t.reduce((function(t,e){return t+e.discount}),0);return e.amount=t.length,e.sale=this.getFormatNum(r),e.discount=this.getFormatNum(n),e.gross=this.getFormatNum(r-n),e.title="ຍອດບິນ COD",e}},methods:{whatsappLink:function(t){var e=t.cusTel.trim(),r=e.substring(e.length-8);this.whatsappContactLink="https://api.whatsapp.com/send?phone=+85620".concat(r,"&text=").concat(encodeURIComponent("ສະບາຍດີ ລູກຄ້າ "))},getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},editItem:function(t){this.componentKey+=1,this.selectedOrderId=t.orderId.toString(),this.dialogOrderDetail=!this.dialogOrderDetail},cancelItem:function(t){console.log("Order id",t.orderId),this.componentCancelFormKey+=1,this.OrderIdSelected=t.orderId,this.cancelForm=!0},handleEvent:function(){this.dialogOrderDetail=!1},loadData:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("api/dynamicCustomer/findDymCustomerByBookingDate/?fdate="+t.date+"&tdate="+t.date2).then((function(e){var r;t.orderHeaderList=[],t.orderHeaderList=e.data.allOrder.map((function(t){return{cartTotal:t.cart_total,codFee:t.cod_fee,cusAddress:t.dest_delivery_branch,discount:t.discount,id:t.id,lockingSessionId:t.locking_session_id,cusName:t.name,payment:t.payment_code,riderFee:t.rider_fee,shippingFeeBy:t.shipping_fee_by,shopName:t.outlet_name,shippingCompany:t.source_delivery_branch,cusTel:t.tel,bookingDate:t.txn_date.split("T")[0],recordStatus:t.record_status,orderId:t.order_id,paymentStatus:"PENDING"}})),t.codPaid=e.data.codPaid.map((function(t){return{cartTotal:t.cart_total,codFee:t.cod_fee,cusAddress:t.dest_delivery_branch,discount:t.discount,id:t.id,lockingSessionId:t.locking_session_id,cusName:t.name,payment:t.payment_code+" [PAID]",riderFee:t.rider_fee,shippingFeeBy:t.shipping_fee_by,shopName:t.outlet_name,shippingCompany:t.source_delivery_branch,cusTel:t.tel,bookingDate:t.txn_date.split("T")[0],recordStatus:t.record_status,orderId:t.order_id,paymentStatus:"PAID"}})),(r=t.orderHeaderList).push.apply(r,Object(D.a)(t.codPaid)),console.log(t.orderHeaderList.length)})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){if(!t)return null;var e=t.split("-"),r=Object(O.a)(e,3),n=r[0],o=r[1],c=r[2];return"".concat(o,"/").concat(c,"/").concat(n)},parseDate:function(t){if(!t)return null;var e=t.split("/"),r=Object(O.a)(e,3),n=r[0],o=r[1],c=r[2];return"".concat(c,"-").concat(n.padStart(2,"0"),"-").concat(o.padStart(2,"0"))}}}),S=(r(682),r(75)),component=Object(S.a)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(m.a,{attrs:{"max-width":"300px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(m.a,{attrs:{"max-width":"1024",persistent:""},model:{value:t.dialogOrderDetail,callback:function(e){t.dialogOrderDetail=e},expression:"dialogOrderDetail"}},[e("order-detail",{key:t.componentKey,attrs:{"order-id":t.selectedOrderId},on:{"close-dialog":t.handleEvent}})],1),t._v(" "),e(m.a,{attrs:{"max-width":"1024"},model:{value:t.cancelForm,callback:function(e){t.cancelForm=e},expression:"cancelForm"}},[e("cancel-ticket-form",{key:t.componentCancelFormKey,attrs:{id:t.OrderIdSelected},on:{"close-dialog":function(e){t.cancelForm=!1},reload:function(e){t.cancelForm=!1,t.loadData()}}})],1),t._v(" "),e(o.a,[e(c.d,[e(v.a,{attrs:{row:"",wrap:""}},[e(l.a,{attrs:{cols:"6"}},[e(_.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(w.a,t._g(t._b({attrs:{label:"ຈາກວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),e(_.a,{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[e(w.a,t._g(t._b({attrs:{label:"ຫາວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date2=t.parseDate(t.dateFormatted2)}},model:{value:t.dateFormatted2,callback:function(e){t.dateFormatted2=e},expression:"dateFormatted2"}},"v-text-field",o,!1),n))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e(w.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(w.a,{attrs:{"append-icon":"mdi-magnify",label:"ລະຫັດຜູ້ຂາຍ","single-line":"","hide-detailsx":""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),t._v(" "),e(n.a,{on:{click:t.loadData}},[t._v(" ດຶງລາຍງານ ")])],1)],1)],1),t._v(" "),e(h.a),t._v(" "),e(c.c,[e(v.a,{attrs:{row:"",wrap:""}},[e(x.a,[e(l.a,{attrs:{cols:"6",lg:"6"}},[e("order-sumary-card",{attrs:{orderDetail:{title:"ຍອດບິນ",amount:t.getFormatNum(t.noCancelData.length),sale:t.totalSale,discount:t.totalDiscount,gross:t.getFormatNum(t.totalSale.replaceAll(",","")-t.totalDiscount.replaceAll(",",""))}}})],1),t._v(" "),e(l.a,{attrs:{cols:"6",lg:"6"}},[e("order-sumary-card",{attrs:{orderDetail:this.unpaidCodOrder}})],1)],1)],1)],1),t._v(" "),t.orderHeaderList?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.orderHeaderList},scopedSlots:t._u([{key:"item.function",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.editItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-eye"})])]}},{key:"item.cancel",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.cancelItem(o),t.wallet=!0}}},[e("i",{staticClass:"fas fa-sync"})])]}},{key:"item.cusTel",fn:function(r){var o=r.item;return[e(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.whatsappLink(o)}}},[t._v("\n          "+t._s(o.cusTel)+"\n          "),e("a",{attrs:{href:t.whatsappContactLink,target:"_blank"}},[t._v("Whatsapp")])])]}}],null,!0)}):t._e()],1)],1)}),[],!1,null,"55dab2c1",null);e.default=component.exports;installComponents(component,{DialogClassicMessage:r(563).default,LoadingIndicator:r(559).default,OrderDetail:r(594).default,CancelTicketForm:r(603).default,OrderSumaryCard:r(595).default})}}]);