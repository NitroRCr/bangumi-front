module.exports = {
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
    }
    /*
* 两个模式，GenerateSW（默认）和 InjectManifest
* GenerateSW 在我们build项目时候，每次都会新建一个service worker文件
* InjectManifest 可以让我们编辑一个自定义的service worker文件，实现更多的功能，并且可以
* 拿到预缓存列表
*/
  }
}
