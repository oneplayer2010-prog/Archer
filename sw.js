const CACHE="archer-web-v1";
const SHELL=["/","/style.css","/app.js","/manifest.webmanifest","/icon.svg"];
self.addEventListener("install",event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(SHELL);await self.skipWaiting()})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key!==CACHE)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener("fetch",event=>{const req=event.request;if(req.method!=="GET"||new URL(req.url).origin!==location.origin||new URL(req.url).pathname.startsWith("/api/"))return;event.respondWith((async()=>{const cached=await caches.match(req);if(cached)return cached;try{const response=await fetch(req);if(response.ok)(await caches.open(CACHE)).put(req,response.clone());return response}catch(error){if(req.mode==="navigate")return caches.match("/");throw error}})())});
