"use strict";var precacheConfig=[["index.html","d0a520fe13cd46239586fd6c27d18726"],["static/css/app.194179730da9c14aaf901a87cf5c7a0e.css","abafc90575851ec4913a7b15b5e515cb"],["static/js/account.798dfafc51b757bd41c0.js","e65008bd1a510d6f13f810120e94c6fb"],["static/js/app.c523df4f45c2e942a75b.js","0e0925f06fff741567de38e9b906f5fd"],["static/js/contacts.791d064807bb22129f89.js","fad995098dce05250d6164498263b5f7"],["static/js/entrance.c24ac466e589b8a3a5dc.js","2ed7f4bb0c37e45948095daafd725efe"],["static/js/lounge.041dc43232aa878b8be5.js","09a562c6dd873b5f4251e8a50e2fb37c"],["static/js/manifest.2f4e627f86a297fbdb5a.js","37473ba644d092742aa11194350393f6"],["static/js/messages.646466ca0208e0e0b90c.js","2d18a1807df857061218c4903254f29d"],["static/js/porch.c7c24b495168c14a5b2f.js","f5a19f7a1a2f0f06a92b757337e939af"],["static/js/profile.278edd8d40f376a66366.js","0d986dbdcebc7247136a78e822b90776"],["static/js/support.4f229f5aac654935e1b1.js","b4608c4be0f53884eabd949183f54292"],["static/js/vendor.78eec2ea458256adb5d7.js","535494d639cd874d8c463d8b04ad5106"],["static/mdi.css","66472a6d535b6a80595d82c91802738e"]],cacheName="sw-precache-v3-vue-amazeinn-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});