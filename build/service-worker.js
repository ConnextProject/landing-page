"use strict";var precacheConfig=[["/index.html","a1313ddd2a017e9eaf8aaf7236832a6b"],["/static/css/main.0904a29f.css","42a26cd92bfda158025eebe075bd7a05"],["/static/js/main.f87ad233.js","24352b729668dcd298193f85d89f9a77"],["/static/media/arjun.a708280a.png","a708280a744256abfda3a0cc5dd88079"],["/static/media/background_all.9bdad2b9.svg","9bdad2b9e2f93a49365900649b3f670d"],["/static/media/bullet.779e2cac.svg","779e2cac6222a18a9461d1e96f65403f"],["/static/media/computer_header.26eb657b.svg","26eb657b7fab9b61c5bc5df2043bed48"],["/static/media/developer.cfd2aea8.svg","cfd2aea8d137640631dc62e626630815"],["/static/media/hunter.57bd0468.png","57bd0468d2a277aa56c175dbab959b55"],["/static/media/icon1.84e37163.svg","84e37163f5dd6d076ad118bd4bc99bbb"],["/static/media/icon2.17f0a259.svg","17f0a259e5580e0940b353f71d745201"],["/static/media/icon3.47da7750.svg","47da7750d1c0498e1ec616e9d3e73d04"],["/static/media/icon4.b5229f3e.svg","b5229f3e903c1364887f1db1abf34d84"],["/static/media/layer.0d460a04.svg","0d460a04985d6cb09a3e7108fb6693f8"],["/static/media/layne.731954de.jpeg","731954defc949f0b8b3df93375096e66"],["/static/media/logoHorizontal.3251cc60.png","3251cc6049d6fd27c68ca92290661820"],["/static/media/payments.3df8083d.svg","3df8083df591db2b8bcbc98c425f0320"],["/static/media/proxima-nova-light.2674a720.ttf","2674a720ecb4a274add69fb109fed474"],["/static/media/proxima-nova-semibold.6a386899.otf","6a386899746222073dd64c5f74d1a69d"],["/static/media/rahul.cdd10ca1.png","cdd10ca132bf1becae760ffcc631b3be"],["/static/media/spinner.a2dd54ec.gif","a2dd54ecf97f0b20ecfebcb224106c26"],["/static/media/step1.8c97dfee.svg","8c97dfee58c4bd780877259f5f3dc9b9"],["/static/media/step2.60414b20.svg","60414b20c101f92a40efe1f04cf24870"],["/static/media/step3.bb9f227c.svg","bb9f227c8cccc53f899140208fba57ae"],["/static/media/step4B.f7072118.svg","f707211830976d3be9d81348147d0503"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});