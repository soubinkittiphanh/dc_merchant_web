import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d7608eca = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _3f1a81fb = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _0ba6d11a = () => interopDefault(import('../pages/admin/advertise/index.vue' /* webpackChunkName: "pages/admin/advertise/index" */))
const _5faa968e = () => interopDefault(import('../pages/admin/ap/index.vue' /* webpackChunkName: "pages/admin/ap/index" */))
const _0c17cb8a = () => interopDefault(import('../pages/admin/ar/index.vue' /* webpackChunkName: "pages/admin/ar/index" */))
const _1109f2c6 = () => interopDefault(import('../pages/admin/bank/index.vue' /* webpackChunkName: "pages/admin/bank/index" */))
const _0cc4a51a = () => interopDefault(import('../pages/admin/campaign/index.vue' /* webpackChunkName: "pages/admin/campaign/index" */))
const _2b143693 = () => interopDefault(import('../pages/admin/cancel_order/index.vue' /* webpackChunkName: "pages/admin/cancel_order/index" */))
const _0fe260f0 = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _871b4dda = () => interopDefault(import('../pages/admin/cod_order/index.vue' /* webpackChunkName: "pages/admin/cod_order/index" */))
const _633f7a68 = () => interopDefault(import('../pages/admin/customer/index.vue' /* webpackChunkName: "pages/admin/customer/index" */))
const _8f85da90 = () => interopDefault(import('../pages/admin/customer_request/index.vue' /* webpackChunkName: "pages/admin/customer_request/index" */))
const _7ba8d4b5 = () => interopDefault(import('../pages/admin/login/index.vue' /* webpackChunkName: "pages/admin/login/index" */))
const _677558d4 = () => interopDefault(import('../pages/admin/logout/index.vue' /* webpackChunkName: "pages/admin/logout/index" */))
const _501cb9e4 = () => interopDefault(import('../pages/admin/member/index.vue' /* webpackChunkName: "pages/admin/member/index" */))
const _770bf06f = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _a2a29aee = () => interopDefault(import('../pages/admin/po/index.vue' /* webpackChunkName: "pages/admin/po/index" */))
const _b19f2b0a = () => interopDefault(import('../pages/admin/product/index.vue' /* webpackChunkName: "pages/admin/product/index" */))
const _5e68474c = () => interopDefault(import('../pages/admin/productInuse.vue' /* webpackChunkName: "pages/admin/productInuse" */))
const _08058bfe = () => interopDefault(import('../pages/admin/report/index.vue' /* webpackChunkName: "pages/admin/report/index" */))
const _25772d47 = () => interopDefault(import('../pages/admin/report_card/index.vue' /* webpackChunkName: "pages/admin/report_card/index" */))
const _96448af4 = () => interopDefault(import('../pages/admin/rider/index.vue' /* webpackChunkName: "pages/admin/rider/index" */))
const _4a2c42b6 = () => interopDefault(import('../pages/admin/txn/index.vue' /* webpackChunkName: "pages/admin/txn/index" */))
const _0edb5d8e = () => interopDefault(import('../pages/admin/txn_type/index.vue' /* webpackChunkName: "pages/admin/txn_type/index" */))
const _14b2fd30 = () => interopDefault(import('../pages/admin/walletin/index.vue' /* webpackChunkName: "pages/admin/walletin/index" */))
const _2d2d4281 = () => interopDefault(import('../pages/admin/walletout/index.vue' /* webpackChunkName: "pages/admin/walletout/index" */))
const _14b69996 = () => interopDefault(import('../pages/admin/customer_request/topup.vue' /* webpackChunkName: "pages/admin/customer_request/topup" */))
const _5b88ad94 = () => interopDefault(import('../pages/admin/customer_request/withdraw.vue' /* webpackChunkName: "pages/admin/customer_request/withdraw" */))
const _17bdcabd = () => interopDefault(import('../pages/admin/login/index-copy.vue' /* webpackChunkName: "pages/admin/login/index-copy" */))
const _1a208976 = () => interopDefault(import('../pages/admin/product/productlist.vue' /* webpackChunkName: "pages/admin/product/productlist" */))
const _79bf3d26 = () => interopDefault(import('../pages/admin/advertise/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/advertise/mixins/ImagePreviewMixin" */))
const _5ec985c4 = () => interopDefault(import('../pages/admin/product/mixins/ImagePreviewMixin.vue' /* webpackChunkName: "pages/admin/product/mixins/ImagePreviewMixin" */))
const _3aec6034 = () => interopDefault(import('../pages/admin/product/_id/index.vue' /* webpackChunkName: "pages/admin/product/_id/index" */))
const _38c2220d = () => interopDefault(import('../pages/admin/stock/_id/index.vue' /* webpackChunkName: "pages/admin/stock/_id/index" */))
const _7ec7b134 = () => interopDefault(import('../pages/product/_id/index.vue' /* webpackChunkName: "pages/product/_id/index" */))
const _14ed5fca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _d7608eca,
    name: "admin"
  }, {
    path: "/product",
    component: _3f1a81fb,
    name: "product"
  }, {
    path: "/admin/advertise",
    component: _0ba6d11a,
    name: "admin-advertise"
  }, {
    path: "/admin/ap",
    component: _5faa968e,
    name: "admin-ap"
  }, {
    path: "/admin/ar",
    component: _0c17cb8a,
    name: "admin-ar"
  }, {
    path: "/admin/bank",
    component: _1109f2c6,
    name: "admin-bank"
  }, {
    path: "/admin/campaign",
    component: _0cc4a51a,
    name: "admin-campaign"
  }, {
    path: "/admin/cancel_order",
    component: _2b143693,
    name: "admin-cancel_order"
  }, {
    path: "/admin/category",
    component: _0fe260f0,
    name: "admin-category"
  }, {
    path: "/admin/cod_order",
    component: _871b4dda,
    name: "admin-cod_order"
  }, {
    path: "/admin/customer",
    component: _633f7a68,
    name: "admin-customer"
  }, {
    path: "/admin/customer_request",
    component: _8f85da90,
    name: "admin-customer_request"
  }, {
    path: "/admin/login",
    component: _7ba8d4b5,
    name: "admin-login"
  }, {
    path: "/admin/logout",
    component: _677558d4,
    name: "admin-logout"
  }, {
    path: "/admin/member",
    component: _501cb9e4,
    name: "admin-member"
  }, {
    path: "/admin/orders",
    component: _770bf06f,
    name: "admin-orders"
  }, {
    path: "/admin/po",
    component: _a2a29aee,
    name: "admin-po"
  }, {
    path: "/admin/product",
    component: _b19f2b0a,
    name: "admin-product"
  }, {
    path: "/admin/productInuse",
    component: _5e68474c,
    name: "admin-productInuse"
  }, {
    path: "/admin/report",
    component: _08058bfe,
    name: "admin-report"
  }, {
    path: "/admin/report_card",
    component: _25772d47,
    name: "admin-report_card"
  }, {
    path: "/admin/rider",
    component: _96448af4,
    name: "admin-rider"
  }, {
    path: "/admin/txn",
    component: _4a2c42b6,
    name: "admin-txn"
  }, {
    path: "/admin/txn_type",
    component: _0edb5d8e,
    name: "admin-txn_type"
  }, {
    path: "/admin/walletin",
    component: _14b2fd30,
    name: "admin-walletin"
  }, {
    path: "/admin/walletout",
    component: _2d2d4281,
    name: "admin-walletout"
  }, {
    path: "/admin/customer_request/topup",
    component: _14b69996,
    name: "admin-customer_request-topup"
  }, {
    path: "/admin/customer_request/withdraw",
    component: _5b88ad94,
    name: "admin-customer_request-withdraw"
  }, {
    path: "/admin/login/index-copy",
    component: _17bdcabd,
    name: "admin-login-index-copy"
  }, {
    path: "/admin/product/productlist",
    component: _1a208976,
    name: "admin-product-productlist"
  }, {
    path: "/admin/advertise/mixins/ImagePreviewMixin",
    component: _79bf3d26,
    name: "admin-advertise-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/mixins/ImagePreviewMixin",
    component: _5ec985c4,
    name: "admin-product-mixins-ImagePreviewMixin"
  }, {
    path: "/admin/product/:id",
    component: _3aec6034,
    name: "admin-product-id"
  }, {
    path: "/admin/stock/:id",
    component: _38c2220d,
    name: "admin-stock-id"
  }, {
    path: "/product/:id",
    component: _7ec7b134,
    name: "product-id"
  }, {
    path: "/",
    component: _14ed5fca,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
