exports.ids = [6];
exports.modules = {

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _VBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);


/* harmony default export */ __webpack_exports__["a"] = (_VBtn__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(236);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5db1c400", content, true)

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:\"\";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:\"\";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:\"\";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VAlert/VAlert.sass
var VAlert = __webpack_require__(235);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/index.js
var VSheet = __webpack_require__(55);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/index.js
var VBtn = __webpack_require__(153);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(7);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/transitionable/index.js

/* harmony default export */ var transitionable = (external_vue_default.a.extend({
  name: 'transitionable',
  props: {
    mode: String,
    origin: String,
    transition: String
  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js
// Styles
 // Extensions

 // Components


 // Mixins



 // Utilities



/* @vue/component */

/* harmony default export */ var VAlert_VAlert = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(VSheet["a" /* default */], toggleable["a" /* default */], transitionable).extend({
  name: 'v-alert',
  props: {
    border: {
      type: String,

      validator(val) {
        return ['top', 'right', 'bottom', 'left'].includes(val);
      }

    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    coloredBorder: Boolean,
    dense: Boolean,
    dismissible: Boolean,
    closeIcon: {
      type: String,
      default: '$cancel'
    },
    icon: {
      default: '',
      type: [Boolean, String],

      validator(val) {
        return typeof val === 'string' || val === false;
      }

    },
    outlined: Boolean,
    prominent: Boolean,
    text: Boolean,
    type: {
      type: String,

      validator(val) {
        return ['info', 'error', 'success', 'warning'].includes(val);
      }

    },
    value: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    __cachedBorder() {
      if (!this.border) return null;
      let data = {
        staticClass: 'v-alert__border',
        class: {
          [`v-alert__border--${this.border}`]: true
        }
      };

      if (this.coloredBorder) {
        data = this.setBackgroundColor(this.computedColor, data);
        data.class['v-alert__border--has-color'] = true;
      }

      return this.$createElement('div', data);
    },

    __cachedDismissible() {
      if (!this.dismissible) return null;
      const color = this.iconColor;
      return this.$createElement(VBtn["a" /* default */], {
        staticClass: 'v-alert__dismissible',
        props: {
          color,
          icon: true,
          small: true
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: () => this.isActive = false
        }
      }, [this.$createElement(VIcon["a" /* default */], {
        props: {
          color
        }
      }, this.closeIcon)]);
    },

    __cachedIcon() {
      if (!this.computedIcon) return null;
      return this.$createElement(VIcon["a" /* default */], {
        staticClass: 'v-alert__icon',
        props: {
          color: this.iconColor
        }
      }, this.computedIcon);
    },

    classes() {
      const classes = { ...VSheet["a" /* default */].options.computed.classes.call(this),
        'v-alert--border': Boolean(this.border),
        'v-alert--dense': this.dense,
        'v-alert--outlined': this.outlined,
        'v-alert--prominent': this.prominent,
        'v-alert--text': this.text
      };

      if (this.border) {
        classes[`v-alert--border-${this.border}`] = true;
      }

      return classes;
    },

    computedColor() {
      return this.color || this.type;
    },

    computedIcon() {
      if (this.icon === false) return false;
      if (typeof this.icon === 'string' && this.icon) return this.icon;
      if (!['error', 'info', 'success', 'warning'].includes(this.type)) return false;
      return `$${this.type}`;
    },

    hasColoredIcon() {
      return this.hasText || Boolean(this.border) && this.coloredBorder;
    },

    hasText() {
      return this.text || this.outlined;
    },

    iconColor() {
      return this.hasColoredIcon ? this.computedColor : undefined;
    },

    isDark() {
      if (this.type && !this.coloredBorder && !this.outlined) return true;
      return themeable["a" /* default */].options.computed.isDark.call(this);
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('outline')) {
      Object(console["a" /* breaking */])('outline', 'outlined', this);
    }
  },

  methods: {
    genWrapper() {
      const children = [this.$slots.prepend || this.__cachedIcon, this.genContent(), this.__cachedBorder, this.$slots.append, this.$scopedSlots.close ? this.$scopedSlots.close({
        toggle: this.toggle
      }) : this.__cachedDismissible];
      const data = {
        staticClass: 'v-alert__wrapper'
      };
      return this.$createElement('div', data, children);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-alert__content'
      }, this.$slots.default);
    },

    genAlert() {
      let data = {
        staticClass: 'v-alert',
        attrs: {
          role: 'alert'
        },
        on: this.listeners$,
        class: this.classes,
        style: this.styles,
        directives: [{
          name: 'show',
          value: this.isActive
        }]
      };

      if (!this.coloredBorder) {
        const setColor = this.hasText ? this.setTextColor : this.setBackgroundColor;
        data = setColor(this.computedColor, data);
      }

      return this.$createElement('div', data, [this.genWrapper()]);
    },

    /** @public */
    toggle() {
      this.isActive = !this.isActive;
    }

  },

  render(h) {
    const render = this.genAlert();
    if (!this.transition) return render;
    return h('transition', {
      props: {
        name: this.transition,
        origin: this.origin,
        mode: this.mode
      }
    }, [render]);
  }

}));

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification.vue?vue&type=template&id=35851136&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"notification is-danger"},[_c('v-alert',{attrs:{"border":"bottom","color":"pink darken-1","dark":""}},[_vm._v("\n  "+_vm._s(_vm.message)+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Notification.vue?vue&type=template&id=35851136&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Notification.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Notificationvue_type_script_lang_js_ = ({
  name: 'Notification',
  props: ['message']
});
// CONCATENATED MODULE: ./components/Notification.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Notificationvue_type_script_lang_js_ = (Notificationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(30);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAlert/VAlert.js + 1 modules
var VAlert = __webpack_require__(261);

// CONCATENATED MODULE: ./components/Notification.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Notificationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1cd118c5"
  
)

/* harmony default export */ var Notification = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VAlert: VAlert["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=notification.js.map