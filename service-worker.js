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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "94e38a7e913ed1f757a892a422683310"
  },
  {
    "url": "assets/css/0.styles.c41bf696.css",
    "revision": "05bb9aee2d5fc0ad01f55a1249ca486e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.612f4d45.js",
    "revision": "37268c5ea657a9f1b5caaa2be223e3ac"
  },
  {
    "url": "assets/js/10.e9ee2f15.js",
    "revision": "e4ec7e277d9f1bbb00b85d41ed837307"
  },
  {
    "url": "assets/js/11.ce69e738.js",
    "revision": "ab39509a81c191c40053ec4c193373f5"
  },
  {
    "url": "assets/js/12.62872b37.js",
    "revision": "7c96b0ce8149b7225d861fdc6441393e"
  },
  {
    "url": "assets/js/13.6397465e.js",
    "revision": "68cfdab561ed1783ba05e37b8b5cc7e7"
  },
  {
    "url": "assets/js/14.2bf57a85.js",
    "revision": "b082560b12e77dd2e58d50dd2212e286"
  },
  {
    "url": "assets/js/15.701c73e7.js",
    "revision": "89c2aabb88e5b268314f48aba340130a"
  },
  {
    "url": "assets/js/16.070d6e67.js",
    "revision": "cb4f44eca0d5ed82fc992d1483868225"
  },
  {
    "url": "assets/js/17.ed1167c6.js",
    "revision": "2f4a531b57cdff8f06252391e90c0845"
  },
  {
    "url": "assets/js/18.b2b8d56e.js",
    "revision": "348847c1a564ab99f059c3af44d3e1d2"
  },
  {
    "url": "assets/js/19.c4678049.js",
    "revision": "c570f278e565c54d768558adaeb195ad"
  },
  {
    "url": "assets/js/20.6656d478.js",
    "revision": "f7e6f2e8f73edf5d8c6bd0a9e54b3189"
  },
  {
    "url": "assets/js/21.cf2f567e.js",
    "revision": "cb940fada57f5db950f1d40d091526b9"
  },
  {
    "url": "assets/js/22.f19813dd.js",
    "revision": "a7e530442f39dad30017e3c27272ad35"
  },
  {
    "url": "assets/js/23.3ade0257.js",
    "revision": "df4f93526eb1f4e1915e606154e0d3d3"
  },
  {
    "url": "assets/js/24.18f7bb42.js",
    "revision": "91c4b2902373f6f4157d8613ad95007d"
  },
  {
    "url": "assets/js/3.725facca.js",
    "revision": "bcafde833e54d296909da1fdfa8c074d"
  },
  {
    "url": "assets/js/4.552bf130.js",
    "revision": "a4aa1cbd2c6998b1c6320d21a76858e5"
  },
  {
    "url": "assets/js/5.c7db70e6.js",
    "revision": "0fc6f0c494569e640089b5eca6c6c2a5"
  },
  {
    "url": "assets/js/6.8e17a3c3.js",
    "revision": "caf7a3b7fd21ab5fe99f3d87c3fec6dc"
  },
  {
    "url": "assets/js/7.52e944a8.js",
    "revision": "0b195761acc88e2356e2e05fcab60a0f"
  },
  {
    "url": "assets/js/8.62134381.js",
    "revision": "566c730bbed60fc61b4cd843605908b9"
  },
  {
    "url": "assets/js/9.094b894c.js",
    "revision": "d95417701c63378a15025e7e8963a9e2"
  },
  {
    "url": "assets/js/app.8131afe4.js",
    "revision": "8d0b9e10b7da72904c85d92eb6be0d14"
  },
  {
    "url": "condots/condots.html",
    "revision": "360eec461388631de60160c9b5a60fe9"
  },
  {
    "url": "condots/index.html",
    "revision": "ca9fca0ef5fa1f76a994c5a8887ae6ab"
  },
  {
    "url": "icons/email.svg",
    "revision": "c0482baf06ff13dfee55383a0646f373"
  },
  {
    "url": "icons/facebook.svg",
    "revision": "a937dc2aa703eb4ab7ef54c334a0521d"
  },
  {
    "url": "icons/github.svg",
    "revision": "b53ff55e09a092f9f0cbbf74af01b715"
  },
  {
    "url": "icons/instagram.svg",
    "revision": "622e2947df6ed5a12b06a6ea7cb70777"
  },
  {
    "url": "icons/linkedin.svg",
    "revision": "c1eb27404bbc0d6052620ac79194ae19"
  },
  {
    "url": "icons/twitter.svg",
    "revision": "7a4d9f0fe157437d3258bbc3b785066d"
  },
  {
    "url": "icons/youtube.svg",
    "revision": "f4d46a74f2230eb4b0a079b6c764bac6"
  },
  {
    "url": "index.html",
    "revision": "d95310082e87a5f6b7b5090eb99b796e"
  },
  {
    "url": "poetry/advanced.html",
    "revision": "19e32c05e2fb28e7dfecaf0a2f4c8dc2"
  },
  {
    "url": "poetry/customize.html",
    "revision": "adead48f662a75d548811adf309b1526"
  },
  {
    "url": "poetry/getting-started.html",
    "revision": "d964273b54a3b6484b37b76e98301081"
  },
  {
    "url": "poetry/index.html",
    "revision": "b1f94a23d4832755bf78cd75277e5ec1"
  },
  {
    "url": "profile.jpg",
    "revision": "1a5dc94f9aec979e488cd8135b4891bb"
  },
  {
    "url": "projects/1.png",
    "revision": "c30417ef051fa16a432ea3c3339cdf01"
  },
  {
    "url": "technical/css/css.html",
    "revision": "fe35e61e12f19c3fc20a1c3941d7f32a"
  },
  {
    "url": "technical/html/html.html",
    "revision": "fc5b1c4349a146892f9cca00bdab3a83"
  },
  {
    "url": "technical/index.html",
    "revision": "e5e4749b34033a75e6bb29b5e3d893fa"
  },
  {
    "url": "technical/js/jsbasic1.html",
    "revision": "6d02de7e9402ad36667665a84ce1ae31"
  },
  {
    "url": "technical/new.html",
    "revision": "c0bb3f01263494d579808056ec6a2b0d"
  },
  {
    "url": "technical/node/node.html",
    "revision": "5847c969ae49846bea15be8f68f695af"
  },
  {
    "url": "technical/old.html",
    "revision": "72a9f0ab37646221b1e821a16f880bfc"
  },
  {
    "url": "technical/others/others.html",
    "revision": "7610b499d7237ab7eb7c2da6782bfffb"
  },
  {
    "url": "technical/vue/vue.html",
    "revision": "aed9c26d53996654c9725c84910f876d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
