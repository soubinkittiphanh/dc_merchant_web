(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{600:function(e,t,r){"use strict";r.r(t);var n=r(542),o=r(246),c=r(139),d=r(722),l=r(554),_=(r(29),r(256),r(38)),f=(r(47),r(140),{props:{orderId:{type:String,default:""}},created:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:case"end":return t.stop()}}),t)})))()},methods:{getFormatNum:function(e){return(new Intl.NumberFormat).format(e)},toggleDialog:function(){this.$emit("close-dialog","false")},fetchData:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("api/findOrderById/?orderId="+e.orderId).then((function(t){e.orderList=t.data.row.map((function(t){return{id:t.id,order_id:t.order_id,user_id:t.user_id,product_id:t.product_id+" "+t.pro_name,product_amount:t.product_amount,product_price:e.getFormatNum(t.product_price),order_price_total:e.getFormatNum(t.order_price_total),product_discount:t.product_discount,locking_session_id:t.locking_session_id,cod_fee:t.cod_fee,rider_fee:t.rider_fee,record_status:t.record_status,cancel_reason:t.cancel_reason,txn_date:t.txn_date.split("T")[0],recordStatusText:1===t.record_status?"Effeced":2===t.record_status?"Cancel":"Return"}}))})).catch((function(t){e.message=t,console.log("Error: "+t)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()}},data:function(){return{search:"",orderList:[],headers:[{text:"ວັນທີ",align:"center",value:"txn_date",sortable:!0},{text:"ລະຫັດສິນຄ້າ",align:"center",value:"product_id"},{text:"ຈຳນວນ",align:"center",value:"product_amount"},{text:"ລາຄາ",align:"end",value:"product_price",sortable:!0},{text:"ລວມ",align:"end",value:"order_price_total",sortable:!1},{text:"ສະຖານະ",align:"end",value:"recordStatusText",sortable:!1}]}}}),m=r(75),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",[t(o.a,[t(c.b,[t("span",{staticClass:"text-h5"},[e._v("Order item")])]),e._v(" "),e.orderList?t(d.a,{attrs:{headers:e.headers,search:e.search,items:e.orderList},scopedSlots:e._u([{key:"item.function",fn:function(r){var o=r.item;return[t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.editItem(o),e.wallet=!0}}},[t("i",{staticClass:"fas fa-wallet"})])]}}],null,!0)}):e._e(),e._v(" "),t(c.a,[t(l.a),e._v(" "),t(n.a,{attrs:{color:"blue-darken-1",variant:"text"},on:{click:e.toggleDialog}},[e._v("\n                Close\n            ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);