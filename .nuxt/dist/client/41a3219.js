(window.webpackJsonp=window.webpackJsonp||[]).push([[55,17,19],{554:function(t,e,n){"use strict";n.r(e);var o=n(243),r=n(138),l=n(240),c=n(74),component=Object(c.a)({},(function(){var t=this._self._c;return t(o.a,{attrs:{color:"primary",dark:""}},[t(r.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),t(l.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},557:function(t,e,n){"use strict";n.r(e);var o=n(536),r=n(243),l=n(138),c=n(241),d=n(549),f={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},m=n(74),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(r.a,[e(l.d,{staticClass:"text-h5 grey lighten-2"},[t._v(" ຂໍ້ຄວາມ ")]),t._v(" "),e(l.c,[t._v("\n    "+t._s(t.message)+"\n  ")]),t._v(" "),e(c.a),t._v(" "),e(l.a,[e(d.a),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:t.toggleDialog}},[t._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},568:function(t,e,n){n(571)},571:function(t,e,n){"use strict";var o=n(6),r=n(27),l=n(18),c=n(59),d=n(22),f=n(80),m=n(206),h=n(31),v=n(102),x=n(258),_=n(354),D=n(25),w=n(49),I=D("replace"),k=TypeError,F=l("".indexOf),O=l("".replace),S=l("".slice),y=Math.max,N=function(t,e,n){return n>t.length?-1:""===e?n:F(t,e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,l,D,M,Y,j,C,A,E=c(this),T=0,z=0,R="";if(!f(t)){if((n=m(t))&&(o=h(c(x(t))),!~F(o,"g")))throw k("`.replaceAll` does not allow non-global regexes");if(l=v(t,I))return r(l,t,E,e);if(w&&n)return O(h(E),t,e)}for(D=h(E),M=h(t),(Y=d(e))||(e=h(e)),j=M.length,C=y(1,j),T=N(D,M,0);-1!==T;)A=Y?h(e(M,T,D)):_(M,D,T,[],void 0,e),R+=S(D,z,T)+A,z=T+j,T=N(D,M,T+C);return z<D.length&&(R+=S(D,z)),R}})},618:function(t,e,n){var content=n(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("70f77ae3",content,!0,{sourceMap:!1})},679:function(t,e,n){"use strict";n(618)},680:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,'.grey[data-v-75a96967],.text-h5[data-v-75a96967]{font-family:"Noto Sans Lao"}',""]),o.locals={},t.exports=o},717:function(t,e,n){"use strict";n.r(e);var o=n(536),r=n(243),l=n(138),c=n(574),d=n(701),f=n(700),m=n(563),h=n(244),v=n(572),x=n(85),_=(n(29),n(252),n(24)),D=n(38),w=(n(4),n(8),n(75),n(568),n(47),n(26),n(578),n(139),{middleware:"auths",data:function(){return{wallet:!1,isedit:!1,dialog:!1,isloading:!1,dialogForm:!1,message:"",valid:!0,name:"",search:"",userId:"",loaddata:[],headers:[{text:"ລະຫັດ",align:"center",value:"txnHisId"},{text:"ລະຫັດລູກຄ້າ",align:"center",value:"userId"},{text:"ລະຫັດແອັດມິນ",align:"center",value:"inputter"},{text:"ວັນທີ",align:"center",value:"txnDate"},{text:"ທຸລະກຳ",align:"center",value:"txnName"},{text:"ຈຳນວນ",align:"end",value:"amount",sortable:!0}],date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),date2:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateFormatted:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),dateFormatted2:this.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),menu1:!1,menu2:!1}},created:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchData();case 2:case"end":return e.stop()}}),e)})))()},watch:{message:function(t){this.dialog=null!=t},isedit:function(t){t||(this.form_data.cus_id="1XXX")},date:function(t){this.dateFormatted=this.formatDate(this.date),this.fetchData()},date2:function(t){this.dateFormatted2=this.formatDate(this.date2),this.fetchData()}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)},totalSale:function(){var t=0;return this.loaddata.forEach((function(e){t+=parseInt(e.amount.replaceAll(",",""))})),console.log("Price total: "+t),this.getFormatNum(t)},totalDebit:function(){var t=0;return this.loaddata.forEach((function(e){1e3===e.txnId&&(t+=parseInt(e.amount.replaceAll(",","")))})),console.log("Price total: "+t),this.getFormatNum(t)},totalCredit:function(){var t=0;return this.loaddata.forEach((function(e){1006===e.txnId&&(t+=parseInt(e.amount.replaceAll(",","")))})),console.log("Price total: "+t),this.getFormatNum(t)}},methods:{getFormatNum:function(t){return(new Intl.NumberFormat).format(t)},fetchData:function(){var t=this;return Object(D.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isloading=!0,e.next=3,t.$axios.get("report_txn/?fromDate="+t.date+"&toDate="+t.date2+"&userId="+t.userId).then((function(e){t.loaddata=e.data.map((function(e){return console.log(e.cus_id),{txnHisId:e.txn_his_id,amount:t.getFormatNum(e.txn_his_amount),userId:e.user_id+" "+e.cus_name,inputter:e.txn_his_inputter+" "+e.user_name,txnDate:e.txn_his_date,txnName:e.txn_name,txnId:e.txn_id}}))})).catch((function(e){t.message=e,console.log("Error: "+e)}));case 3:t.isloading=!1;case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){if(!t)return null;var e=t.split("-"),n=Object(_.a)(e,3),o=n[0],r=n[1],l=n[2];return"".concat(r,"/").concat(l,"/").concat(o)},parseDate:function(t){if(!t)return null;var e=t.split("/"),n=Object(_.a)(e,3),o=n[0],r=n[1],l=n[2];return"".concat(l,"-").concat(o.padStart(2,"0"),"-").concat(r.padStart(2,"0"))}}}),I=(n(679),n(74)),component=Object(I.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e(m.a,{attrs:{"max-width":"300px",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("dialog-classic-message",{attrs:{message:t.message},on:{closedialog:function(e){t.message=null}}})],1),t._v(" "),e(m.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.isloading,callback:function(e){t.isloading=e},expression:"isloading"}},[e("loading-indicator")],1),t._v(" "),e(r.a,[e(l.d,[e(v.a,[e(c.a,{attrs:{cols:"12",lg:"5"}},[e(h.a,{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(x.a,t._g(t._b({attrs:{label:"ຈາກວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date=t.parseDate(t.dateFormatted)}},model:{value:t.dateFormatted,callback:function(e){t.dateFormatted=e},expression:"dateFormatted"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu1=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),e(h.a,{ref:"menu2",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(x.a,t._g(t._b({attrs:{label:"ຫາວັນທີ:",hint:"MM/DD/YYYY format","persistent-hint":"","prepend-icon":"mdi-calendar"},on:{blur:function(e){t.date2=t.parseDate(t.dateFormatted2)}},model:{value:t.dateFormatted2,callback:function(e){t.dateFormatted2=e},expression:"dateFormatted2"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[t._v(" "),e(f.a,{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1),t._v(" "),e("div",[t._v(" ເຕີມ: "+t._s(t.totalDebit))]),t._v(" "),e("div",[t._v(" ຖອນ: "+t._s(t.totalCredit))])],1),t._v(" "),e(c.a,{attrs:{cols:"12",lg:"5"}},[e(x.a,{attrs:{"append-icon":"mdi-magnify",label:"ຊອກຫາ","single-line":"","hide-detailsx":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(x.a,{attrs:{"append-icon":"mdi-magnify",label:"ລະຫັດແອັດມິນ","single-line":"","hide-detailsx":""},model:{value:t.userId,callback:function(e){t.userId=e},expression:"userId"}}),t._v(" "),e(o.a,{on:{click:t.fetchData}},[t._v(" ດຶງລາຍງານ ")])],1)],1)],1),t._v(" "),t.loaddata?e(d.a,{attrs:{headers:t.headers,search:t.search,items:t.loaddata}}):t._e()],1)],1)}),[],!1,null,"75a96967",null);e.default=component.exports;installComponents(component,{DialogClassicMessage:n(557).default,LoadingIndicator:n(554).default})}}]);