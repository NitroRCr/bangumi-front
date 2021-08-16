module.exports = {
  productionSourceMap: true,
  pwa: {
    // 一些基础配置
    name: 'AnimePure',
    themeColor: '#673AB7',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: './favicon.png',
      favicon16: './favicon.png',
      appleTouchIcon: './favicon.png',
      maskIcon: './favicon.png',
      msTileImage: './favicon.png'
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      importWorkboxFrom: 'disabled',
      importScripts: 'https://cdn.jsdelivr.net/npm/workbox-sw@6.1.5/build/workbox-sw.min.js'
      // ...other Workbox options...
    }
  }
}
