/* eslint-disable no-undef */
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

workbox.core.setCacheNameDetails({ prefix: 'anime-back' })

workbox.core.skipWaiting() // 强制等待中的 Service Worker 被激活
workbox.core.clientsClaim() // Service Worker 被激活后使其立即获得页面控制权

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
const list = self.__precacheManifest
for (const i of list) {
  if (i.url === '/redirects') {
    list.pop(i)
    break
  }
}
workbox.precaching.precacheAndRoute(list)
