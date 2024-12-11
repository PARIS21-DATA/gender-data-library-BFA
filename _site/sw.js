const version = '20241211095229';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/gender-data-library-BFA/general/2016/08/29/example-post-three/","/gender-data-library-BFA/history/external%20sources/2016/08/28/example-post-two/","/gender-data-library-BFA/general/external%20sources/2016/08/27/example-post-one/","/gender-data-library-BFA/en/about-us/","/gender-data-library-BFA/fr/about-us/","/gender-data-library-BFA/fr/csos/","/gender-data-library-BFA/en/csos/","/gender-data-library-BFA/blog/","/gender-data-library-BFA/en/","/gender-data-library-BFA/fr/","/gender-data-library-BFA/en/library/","/gender-data-library-BFA/fr/library/","/gender-data-library-BFA/manifest.json","/gender-data-library-BFA/fr/methodology/","/gender-data-library-BFA/en/methodology/","/gender-data-library-BFA/offline/","/gender-data-library-BFA/assets/search.json","/gender-data-library-BFA/assets/styles.css","/gender-data-library-BFA/redirects.json","/gender-data-library-BFA/blog/page2/","/gender-data-library-BFA/feed.xml","/gender-data-library-BFA/sitemap.xml","/gender-data-library-BFA/robots.txt","/gender-data-library-BFA/assets/styles.css.map","/gender-data-library-BFA/assets/logos/P21_insd_site.svg", "/gender-data-library-BFA/assets/default-offline-image.png", "/gender-data-library-BFA/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/gender-data-library-BFA/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
