(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{642:function(e,n,t){"use strict";t.r(n);t(4),t(44),t(58),t(597),t(358),t(30);var l={data:function(){return{imagesPreviewURL:[],files:null,IMG_URL:"",NAME:""}},methods:{onFilesChange:function(e){var n=e;this.files=e,n?(this.IMG_URL=URL.createObjectURL(n),this.NAME=n.name,URL.revokeObjectURL(n)):(this.imagesPreviewURL=null,this.files=null)},deleteFile:function(e){this.files=null},sizeValidate:function(e){console.log("SIZE"+e);var n=2e5;if(e>n)return"Max size is ".concat(200,"Kb")}}},o=t(75),component=Object(o.a)(l,undefined,undefined,!1,null,null,null);n.default=component.exports}}]);