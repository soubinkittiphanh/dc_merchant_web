(window.webpackJsonp=window.webpackJsonp||[]).push([[55,20,21,23,56],{559:function(e,t,r){"use strict";r.r(t);var n=r(246),o=r(139),l=r(243),c=r(75),component=Object(c.a)({},(function(){var e=this._self._c;return e(n.a,{attrs:{color:"primary",dark:""}},[e(o.c,[this._v("\n    ກະລຸນາລໍຖ້າ...\n    "),e(l.a,{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},564:function(e,t,r){"use strict";r.r(t);var n=r(541),o=r(246),l=r(139),c=r(244),f=r(554),d={props:{message:{type:String,default:""}},methods:{toggleDialog:function(){this.$emit("closedialog")}}},m=r(75),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t(o.a,[t(l.d,{staticClass:"text-h5 grey lighten-2"},[e._v(" ຂໍ້ຄວາມ ")]),e._v(" "),t(l.c,[e._v("\n    "+e._s(e.message)+"\n  ")]),e._v(" "),t(c.a),e._v(" "),t(l.a,[t(f.a),e._v(" "),t(n.a,{attrs:{color:"primary",text:""},on:{click:e.toggleDialog}},[e._v(" ຕົກລົງ ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},591:function(e,t,r){"use strict";r.r(t);var n=r(541),o=r(246),l=r(139),c=r(200),f=r(554),d={props:["iUrl"]},m=r(75),component=Object(m.a)(d,(function(){var e=this,t=e._self._c;return t(o.a,[t(l.d,[e._v(" Image preview ")]),e._v(" "),t(c.a,{attrs:{src:e.iUrl||"No image"}}),e._v(" "),t(l.a,[t(f.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.$emit("closeDia")}}},[e._v("\n      ປິດ\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports},603:function(e,t,r){var content=r(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("2d48012f",content,!0,{sourceMap:!1})},605:function(e,t,r){"use strict";r.r(t);r(4),r(44),r(58),r(599),r(358),r(30),r(166);var n={data:function(){return{imagesPreviewURL:[],files:[]}},methods:{onFilesChange:function(e){var t=e;if(this.files=e,t){console.log("FILE LEN: "+t.length);for(var i=0;i<t.length;i++)this.imagesPreviewURL.push({IMG_URL:URL.createObjectURL(t[i]),NAME:t[i].name,isvalid:this.sizeValidate(t[i].size)})}else this.imagesPreviewURL=null},deleteFile:function(e){this.imagesPreviewURL.splice(e,1),this.files.splice(e,1)},sizeValidate:function(e){console.log("SIZE"+e);var t=2e7;if(e>t)return"Max size is ".concat(2e4,"Kb")}}},o=r(75),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);t.default=component.exports},613:function(e,t,r){"use strict";r(603)},614:function(e,t,r){var n=r(15)((function(i){return i[1]}));n.push([e.i,'.grey[data-v-451f5e72],.text-h5[data-v-451f5e72]{font-family:"Noto Sans Lao"}',""]),n.locals={},e.exports=n},635:function(e,t,r){"use strict";r.r(t);var n=r(541),o=r(568),l=r(244),c=r(706),f=r(570),d=r(200),m=r(239),v=r(157),_=r(241),h=r(77),x=r(56),D=r(554),w=r(86),k=r(595),y=r(38),R=(r(140),r(29),r(4),r(8),r(47),r(30),{middleware:"auths",mixins:[r(605).default],data:function(){return{preview:!1,previewSrc:null,dialog:!1,dialogMessage:!1,message:"",isloading:!1,valid:!0,name:"",rules:{nameRule:[function(e){return!!e||"ກະລຸນາ ໃສ່ຊື່ສິນຄ້າ "},function(e){return e&&e.length<=150||"ຊື່ສິນຄ້າ ຍາວເກີນໄປ ກຳນົດ 150 ຕົວ"}],priceRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ລາຄາ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ລາຄາ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],costPrice:[function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],retailRule:[function(e){return+e>=0||"ກະລຸນ ໃສ່ເປີເຊັນ > 0"},function(e){return!!/^\d+$/.test(e)||"ກະລຸນສາໃສ່ ເປັນຕົວເລກ ເທົ່ານັ້ນ"}],imageRule:[function(e){var t=0,r=0;return e?(e.forEach((function(e){t+=e.size,console.log("Size: "+e.size)})),r=t/e.length,console.log("File size: aaa"+e.length+" Each: "+r||!1)):console.log("File: "+e),console.log("Total: "+r),r<2e6||"ຂະຫນາດເກີນ"}]},category:[],formData:{pro_category:1001,pro_id:null,pro_name:"",pro_price:0,pro_retail_price:0,pro_desc:"",pro_status:!1,pro_outlet:1,pro_cost_price:0},outlet:[]}},mounted:function(){this.fetchCategory(),this.fetchOutlet()},watch:{message:function(e){this.dialogMessage=null!=e},formData:function(e){console.log("Watch fromData"+e)}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},fetchCategory:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("category_f").then((function(t){console.log("=>category"+t.data),e.category=t.data.map((function(e){return{categ_id:e.categ_id,categ_name:e.categ_name,categ_desc:e.categ_desc}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},fetchOutlet:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isloading=!0,t.next=3,e.$axios.get("outlet").then((function(t){console.log("=>outlet"+t.data),e.outlet=t.data.map((function(e){return{outlet_id:e.id,outlet_name:e.name,outlet_tel:e.tel}}))})).catch((function(e){console.log("error: "+e.response.data)}));case 3:e.isloading=!1;case 4:case"end":return t.stop()}}),t)})))()},uploadFiles:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.form.validate()){t.next=2;break}return t.abrupt("return");case 2:return console.log("Outlet: "+e.formData.outlet),e.isloading=!0,(r=new FormData).append("FORM",JSON.stringify(e.formData)),e.files.forEach((function(element){r.append("files",element)})),t.next=9,e.$axios.post("uploadmulti",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.isloading=!1,e.message=t.data})).catch((function(t){e.isloading=!1,e.message=t.response.data}));case 9:case"end":return t.stop()}}),t)})))()},previewImg:function(e){this.previewSrc=e,this.preview=!0}}}),$=(r(613),r(75)),component=Object($.a)(R,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center"},[t(o.a,{attrs:{"max-width":"300px",persistent:""},model:{value:e.dialogMessage,callback:function(t){e.dialogMessage=t},expression:"dialogMessage"}},[t("dialog-classic-message",{attrs:{message:e.message},on:{closedialog:function(t){e.message=null}}})],1),e._v(" "),t(o.a,{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isloading,callback:function(t){e.isloading=t},expression:"isloading"}},[t("loading-indicator")],1),e._v(" "),t(o.a,{attrs:{"hide-overlay":"",width:"400px"},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}},[t("dia-image",{attrs:{"i-url":e.previewSrc},on:{closeDia:function(t){e.preview=!1}}})],1),e._v("\n  SELECTED OUTLET "+e._s(e.formData.outlet)+"\n  "),t(f.a,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(x.a,{attrs:{items:e.outlet,"item-value":function(e){return e.outlet_id},"item-text":function(e){return e.outlet_id+" - "+e.outlet_name},rules:[function(e){return!!e||"ກະລຸນາເລືອກຮ້ານ"}],label:"ຮ້ານ",required:""},model:{value:e.formData.outlet,callback:function(t){e.$set(e.formData,"outlet",t)},expression:"formData.outlet"}}),e._v(" "),t(x.a,{attrs:{items:e.category,"item-value":function(e){return e.categ_id},"item-text":function(e){return e.categ_id+" - "+e.categ_name},rules:[function(e){return!!e||"ກະລຸນາເລືອກປະເພດສິນຄ້າ"}],label:"ປະເພດສິນຄ້າ",required:""},model:{value:e.formData.pro_category,callback:function(t){e.$set(e.formData,"pro_category",t)},expression:"formData.pro_category"}}),e._v(" "),t(w.a,{attrs:{value:e.formData.pro_id||"1XXX",counter:10,label:"ໄອດີສິນຄ້າ",disabled:"",required:""}}),e._v(" "),t(w.a,{attrs:{counter:10,rules:e.rules.nameRule,label:"ຊື້ສິນຄ້າ",required:""},model:{value:e.formData.pro_name,callback:function(t){e.$set(e.formData,"pro_name",t)},expression:"formData.pro_name"}}),e._v(" "),t(w.a,{attrs:{counter:10,type:"number",rules:e.rules.priceRule,label:"ລາຄາ",required:""},model:{value:e.formData.pro_price,callback:function(t){e.$set(e.formData,"pro_price",t)},expression:"formData.pro_price"}}),e._v(" "),t(w.a,{attrs:{counter:10,rules:e.rules.costPrice,type:"number",label:"ຕົ້ນທືນ",required:""},model:{value:e.formData.pro_cost_price,callback:function(t){e.$set(e.formData,"pro_cost_price",t)},expression:"formData.pro_cost_price"}}),e._v(" "),t(w.a,{attrs:{counter:10,rules:e.rules.retailRule,type:"number",label:"ລາຄາສົ່ງ %",required:""},model:{value:e.formData.pro_retail_price,callback:function(t){e.$set(e.formData,"pro_retail_price",t)},expression:"formData.pro_retail_price"}}),e._v(" "),t(k.a,{attrs:{outlined:"",name:"input-7-4",counter:"5",label:"ຄຳອະທິບາຍ",value:"abc"},model:{value:e.formData.pro_desc,callback:function(t){e.$set(e.formData,"pro_desc",t)},expression:"formData.pro_desc"}}),e._v(" "),t(c.a,{ref:"filesfield",attrs:{rules:e.rules.imageRule,multiple:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera",label:"ຮູບພາບຫລາຍພາບ"},on:{change:e.onFilesChange}}),e._v(" "),e._e(),e._v(" "),t("div",[t(m.a,{attrs:{"three-line":""}},[e._l(e.imagesPreviewURL,(function(r,o){return[t(v.a,{key:o},[t(_.a,{on:{click:function(t){return t.preventDefault(),e.previewImg(r.IMG_URL)}}},[t(d.a,{attrs:{src:r.IMG_URL}})],1),e._v(" "),t(h.a,[t(h.c,{domProps:{innerHTML:e._s(r.NAME)}}),e._v(" "),t(h.b,{domProps:{innerHTML:e._s(r.isvalid)}})],1),e._v(" "),t(D.a),e._v(" "),t(n.a,{attrs:{text:"",color:"blue darken-1"},on:{click:function(t){return t.preventDefault(),e.deleteFile(o)}}},[t("i",{staticClass:"fas fa-trash-alt"})])],1),e._v(" "),t(l.a,{key:o+r.NAME})]}))],2)],1),e._v(" "),t(n.a,{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.validate}},[e._v("\n      ກວດສອບຂໍ້ມູນ\n    ")]),e._v(" "),t(n.a,{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" ລ້າງຂໍ້ມູນ ")]),e._v(" "),t(n.a,{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:e.uploadFiles}},[e._v("\n      ບັນທຶກ\n    ")])],1),e._v(" "),t("nuxt-child")],1)}),[],!1,null,"451f5e72",null);t.default=component.exports;installComponents(component,{DialogClassicMessage:r(564).default,LoadingIndicator:r(559).default,DiaImage:r(591).default})}}]);