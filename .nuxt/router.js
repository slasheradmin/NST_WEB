import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _662aae14 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _5fdcea9c = () => interopDefault(import('..\\pages\\automotive\\index.vue' /* webpackChunkName: "pages/automotive/index" */))
const _15f47e63 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _dddd3f3e = () => interopDefault(import('..\\pages\\Full_new\\index.vue' /* webpackChunkName: "pages/Full_new/index" */))
const _d8a92c88 = () => interopDefault(import('..\\pages\\Heavy\\index.vue' /* webpackChunkName: "pages/Heavy/index" */))
const _9c7c90dc = () => interopDefault(import('..\\pages\\Home\\index.vue' /* webpackChunkName: "pages/Home/index" */))
const _1f470992 = () => interopDefault(import('..\\pages\\home-appliance\\index.vue' /* webpackChunkName: "pages/home-appliance/index" */))
const _c4f5e1a0 = () => interopDefault(import('..\\pages\\how_we_work\\index.vue' /* webpackChunkName: "pages/how_we_work/index" */))
const _920fba0e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _aeabe48c = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _a29f2300 = () => interopDefault(import('..\\pages\\motorcycle\\index.vue' /* webpackChunkName: "pages/motorcycle/index" */))
const _1b022d84 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _3a00e025 = () => interopDefault(import('..\\pages\\technology\\index.vue' /* webpackChunkName: "pages/technology/index" */))
const _712ad0f2 = () => interopDefault(import('..\\pages\\About\\Achievements\\index.vue' /* webpackChunkName: "pages/About/Achievements/index" */))
const _237cb349 = () => interopDefault(import('..\\pages\\About\\Customers\\index.vue' /* webpackChunkName: "pages/About/Customers/index" */))
const _11b28ab6 = () => interopDefault(import('..\\pages\\About\\ESG\\index.vue' /* webpackChunkName: "pages/About/ESG/index" */))
const _7a37c62e = () => interopDefault(import('..\\pages\\About\\Global-Partners\\index.vue' /* webpackChunkName: "pages/About/Global-Partners/index" */))
const _510129ec = () => interopDefault(import('..\\pages\\About\\Our-story\\index.vue' /* webpackChunkName: "pages/About/Our-story/index" */))
const _3937f583 = () => interopDefault(import('..\\pages\\admin\\Add_News\\index.vue' /* webpackChunkName: "pages/admin/Add_News/index" */))
const _5a448a22 = () => interopDefault(import('..\\pages\\About\\Our-story\\Read-More\\Diversified.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Diversified" */))
const _d8c85986 = () => interopDefault(import('..\\pages\\About\\Our-story\\Read-More\\Expanded.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Expanded" */))
const _454ee066 = () => interopDefault(import('..\\pages\\About\\Our-story\\Read-More\\Founded.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Founded" */))
const _703d22b7 = () => interopDefault(import('..\\pages\\About\\Our-story\\Read-More\\Grew-up.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Grew-up" */))
const _4bc09264 = () => interopDefault(import('..\\pages\\About\\Our-story\\Read-More\\Leap-forward.vue' /* webpackChunkName: "pages/About/Our-story/Read-More/Leap-forward" */))
const _200612b1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _662aae14,
    name: "admin"
  }, {
    path: "/automotive",
    component: _5fdcea9c,
    name: "automotive"
  }, {
    path: "/contact",
    component: _15f47e63,
    name: "contact"
  }, {
    path: "/Full_new",
    component: _dddd3f3e,
    name: "Full_new"
  }, {
    path: "/Heavy",
    component: _d8a92c88,
    name: "Heavy"
  }, {
    path: "/Home",
    component: _9c7c90dc,
    name: "Home"
  }, {
    path: "/home-appliance",
    component: _1f470992,
    name: "home-appliance"
  }, {
    path: "/how_we_work",
    component: _c4f5e1a0,
    name: "how_we_work"
  }, {
    path: "/inspire",
    component: _920fba0e,
    name: "inspire"
  }, {
    path: "/login",
    component: _aeabe48c,
    name: "login"
  }, {
    path: "/motorcycle",
    component: _a29f2300,
    name: "motorcycle"
  }, {
    path: "/news",
    component: _1b022d84,
    name: "news"
  }, {
    path: "/technology",
    component: _3a00e025,
    name: "technology"
  }, {
    path: "/About/Achievements",
    component: _712ad0f2,
    name: "About-Achievements"
  }, {
    path: "/About/Customers",
    component: _237cb349,
    name: "About-Customers"
  }, {
    path: "/About/ESG",
    component: _11b28ab6,
    name: "About-ESG"
  }, {
    path: "/About/Global-Partners",
    component: _7a37c62e,
    name: "About-Global-Partners"
  }, {
    path: "/About/Our-story",
    component: _510129ec,
    name: "About-Our-story"
  }, {
    path: "/admin/Add_News",
    component: _3937f583,
    name: "admin-Add_News"
  }, {
    path: "/About/Our-story/Read-More/Diversified",
    component: _5a448a22,
    name: "About-Our-story-Read-More-Diversified"
  }, {
    path: "/About/Our-story/Read-More/Expanded",
    component: _d8c85986,
    name: "About-Our-story-Read-More-Expanded"
  }, {
    path: "/About/Our-story/Read-More/Founded",
    component: _454ee066,
    name: "About-Our-story-Read-More-Founded"
  }, {
    path: "/About/Our-story/Read-More/Grew-up",
    component: _703d22b7,
    name: "About-Our-story-Read-More-Grew-up"
  }, {
    path: "/About/Our-story/Read-More/Leap-forward",
    component: _4bc09264,
    name: "About-Our-story-Read-More-Leap-forward"
  }, {
    path: "/",
    component: _200612b1,
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
