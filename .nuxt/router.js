import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _77f384d6 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _14068224 = () => interopDefault(import('../pages/automotive/index.vue' /* webpackChunkName: "pages/automotive/index" */))
const _2d6af967 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _14aa7b02 = () => interopDefault(import('../pages/Full_new/index.vue' /* webpackChunkName: "pages/Full_new/index" */))
const _2f18b42e = () => interopDefault(import('../pages/Heavy/index.vue' /* webpackChunkName: "pages/Heavy/index" */))
const _3fc552a4 = () => interopDefault(import('../pages/Home/index.vue' /* webpackChunkName: "pages/Home/index" */))
const _4d14b6ee = () => interopDefault(import('../pages/home-appliance/index.vue' /* webpackChunkName: "pages/home-appliance/index" */))
const _0c9ba07a = () => interopDefault(import('../pages/how_we_work/index.vue' /* webpackChunkName: "pages/how_we_work/index" */))
const _1172cf9e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _71d69870 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _56fe1c80 = () => interopDefault(import('../pages/motorcycle/index.vue' /* webpackChunkName: "pages/motorcycle/index" */))
const _f14580fc = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _7f8d910a = () => interopDefault(import('../pages/technology/index.vue' /* webpackChunkName: "pages/technology/index" */))
const _2177c895 = () => interopDefault(import('../pages/About/Achievements/index.vue' /* webpackChunkName: "pages/About/Achievements/index" */))
const _e26074cc = () => interopDefault(import('../pages/About/Customers/index.vue' /* webpackChunkName: "pages/About/Customers/index" */))
const _5d95c93e = () => interopDefault(import('../pages/About/ESG/index.vue' /* webpackChunkName: "pages/About/ESG/index" */))
const _d9e1bd0c = () => interopDefault(import('../pages/About/Global-Partners/index.vue' /* webpackChunkName: "pages/About/Global-Partners/index" */))
const _94b2dc8e = () => interopDefault(import('../pages/About/Our-story/index.vue' /* webpackChunkName: "pages/About/Our-story/index" */))
const _3a8de4e0 = () => interopDefault(import('../pages/admin/Add_News/index.vue' /* webpackChunkName: "pages/admin/Add_News/index" */))
const _00929c5a = () => interopDefault(import('../pages/About/Our-story/Read-More/Diversified.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Diversified" */))
const _c28ca7f6 = () => interopDefault(import('../pages/About/Our-story/Read-More/Expanded.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Expanded" */))
const _238f03f6 = () => interopDefault(import('../pages/About/Our-story/Read-More/Founded.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Founded" */))
const _fdc5de22 = () => interopDefault(import('../pages/About/Our-story/Read-More/Grew-up.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Grew-up" */))
const _6f34c72c = () => interopDefault(import('../pages/About/Our-story/Read-More/Leap-forward.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Leap-forward" */))
const _bbc4b6d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _77f384d6,
    name: "admin"
  }, {
    path: "/automotive",
    component: _14068224,
    name: "automotive"
  }, {
    path: "/contact",
    component: _2d6af967,
    name: "contact"
  }, {
    path: "/Full_new",
    component: _14aa7b02,
    name: "Full_new"
  }, {
    path: "/Heavy",
    component: _2f18b42e,
    name: "Heavy"
  }, {
    path: "/Home",
    component: _3fc552a4,
    name: "Home"
  }, {
    path: "/home-appliance",
    component: _4d14b6ee,
    name: "home-appliance"
  }, {
    path: "/how_we_work",
    component: _0c9ba07a,
    name: "how_we_work"
  }, {
    path: "/inspire",
    component: _1172cf9e,
    name: "inspire"
  }, {
    path: "/login",
    component: _71d69870,
    name: "login"
  }, {
    path: "/motorcycle",
    component: _56fe1c80,
    name: "motorcycle"
  }, {
    path: "/news",
    component: _f14580fc,
    name: "news"
  }, {
    path: "/technology",
    component: _7f8d910a,
    name: "technology"
  }, {
    path: "/About/Achievements",
    component: _2177c895,
    name: "About-Achievements"
  }, {
    path: "/About/Customers",
    component: _e26074cc,
    name: "About-Customers"
  }, {
    path: "/About/ESG",
    component: _5d95c93e,
    name: "About-ESG"
  }, {
    path: "/About/Global-Partners",
    component: _d9e1bd0c,
    name: "About-Global-Partners"
  }, {
    path: "/About/Our-story",
    component: _94b2dc8e,
    name: "About-Our-story"
  }, {
    path: "/admin/Add_News",
    component: _3a8de4e0,
    name: "admin-Add_News"
  }, {
    path: "/About/Our-story/Read-More/Diversified",
    component: _00929c5a,
    name: "About-Our-story-Read-More-Diversified"
  }, {
    path: "/About/Our-story/Read-More/Expanded",
    component: _c28ca7f6,
    name: "About-Our-story-Read-More-Expanded"
  }, {
    path: "/About/Our-story/Read-More/Founded",
    component: _238f03f6,
    name: "About-Our-story-Read-More-Founded"
  }, {
    path: "/About/Our-story/Read-More/Grew-up",
    component: _fdc5de22,
    name: "About-Our-story-Read-More-Grew-up"
  }, {
    path: "/About/Our-story/Read-More/Leap-forward",
    component: _6f34c72c,
    name: "About-Our-story-Read-More-Leap-forward"
  }, {
    path: "/",
    component: _bbc4b6d4,
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
