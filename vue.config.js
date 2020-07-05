module.exports = {
  // lintOnSave: false
  pwa: {
    name: 'histocom',
    short_name: 'histocom',
    themeColor: '#C15A1A',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'default',
    icons: [
      {
        src: 'assets/icons/icon-72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    manifestOptions: {
      display: 'fullscreen',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
    },
  },
};
