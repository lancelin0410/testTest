System.register([],(function(e,t){"use strict";return{execute:function(){const t=e("_",(function(e,t,n){let i=Promise.resolve();return i.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))})),n=(e=>e.CapacitorPlatforms=(e=>{const t=new Map;t.set("web",{name:"web"});const n=e.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:t};return n.addPlatform=(e,t)=>{n.platforms.set(e,t)},n.setPlatform=e=>{n.platforms.has(e)&&(n.currentPlatform=n.platforms.get(e))},n})(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});var i;n.addPlatform,n.setPlatform,function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"}(i||(i={}));class r extends Error{constructor(e,t,n){super(e),this.message=e,this.code=t,this.data=n}}const o=e=>{var t,n,o,s,a;const l=e.CapacitorCustomPlatform||null,d=e.Capacitor||{},c=d.Plugins=d.Plugins||{},u=e.CapacitorPlatforms,p=(null===(t=null==u?void 0:u.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==l?l.name:(e=>{var t,n;return(null==e?void 0:e.androidBridge)?"android":(null===(n=null===(t=null==e?void 0:e.webkit)||void 0===t?void 0:t.messageHandlers)||void 0===n?void 0:n.bridge)?"ios":"web"})(e)),g=(null===(n=null==u?void 0:u.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==p()),m=(null===(o=null==u?void 0:u.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(e=>{const t=w.get(e);return!!(null==t?void 0:t.platforms.has(p()))||!!f(e)}),f=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(e=>{var t;return null===(t=d.PluginHeaders)||void 0===t?void 0:t.find((t=>t.name===e))}),w=new Map,h=(null===(a=null==u?void 0:u.currentPlatform)||void 0===a?void 0:a.registerPlugin)||((e,t={})=>{const n=w.get(e);if(n)return console.warn(`Capacitor plugin "${e}" already registered. Cannot register plugins twice.`),n.proxy;const o=p(),s=f(e);let a;const u=n=>{let c;const u=(...u)=>{const p=(async()=>(!a&&o in t?a=a="function"==typeof t[o]?await t[o]():t[o]:null!==l&&!a&&"web"in t&&(a=a="function"==typeof t.web?await t.web():t.web),a))().then((t=>{const a=((t,n)=>{var a,l;if(!s){if(t)return null===(l=t[n])||void 0===l?void 0:l.bind(t);throw new r(`"${e}" plugin is not implemented on ${o}`,i.Unimplemented)}{const i=null==s?void 0:s.methods.find((e=>n===e.name));if(i)return"promise"===i.rtype?t=>d.nativePromise(e,n.toString(),t):(t,i)=>d.nativeCallback(e,n.toString(),t,i);if(t)return null===(a=t[n])||void 0===a?void 0:a.bind(t)}})(t,n);if(a){const e=a(...u);return c=null==e?void 0:e.remove,e}throw new r(`"${e}.${n}()" is not implemented on ${o}`,i.Unimplemented)}));return"addListener"===n&&(p.remove=async()=>c()),p};return u.toString=()=>`${n.toString()}() { [capacitor code] }`,Object.defineProperty(u,"name",{value:n,writable:!1,configurable:!1}),u},g=u("addListener"),m=u("removeListener"),h=(e,t)=>{const n=g({eventName:e},t),i=async()=>{const i=await n;m({eventName:e,callbackId:i},t)},r=new Promise((e=>n.then((()=>e({remove:i})))));return r.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await i()},r},v=new Proxy({},{get(e,t){switch(t){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return s?h:g;case"removeListener":return m;default:return u(t)}}});return c[e]=v,w.set(e,{name:e,proxy:v,platforms:new Set([...Object.keys(t),...s?[o]:[]])}),v});return d.convertFileSrc||(d.convertFileSrc=e=>e),d.getPlatform=p,d.handleError=t=>e.console.error(t),d.isNativePlatform=g,d.isPluginAvailable=m,d.pluginMethodNoop=(e,t,n)=>Promise.reject(`${n} does not have an implementation of "${t}".`),d.registerPlugin=h,d.Exception=r,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d},s=(e=>e.Capacitor=o(e))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),a=s.registerPlugin;s.Plugins;class l{constructor(e){this.listeners={},this.retainedEventArguments={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){let n=!1;this.listeners[e]||(this.listeners[e]=[],n=!0),this.listeners[e].push(t);const i=this.windowListeners[e];return i&&!i.registered&&this.addWindowListener(i),n&&this.sendRetainedArgumentsForEvent(e),Promise.resolve({remove:async()=>this.removeListener(e,t)})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,n){const i=this.listeners[e];if(i)i.forEach((e=>e(t)));else if(n){let n=this.retainedEventArguments[e];n||(n=[]),n.push(t),this.retainedEventArguments[e]=n}}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:e=>{this.notifyListeners(t,e)}}}unimplemented(e="not implemented"){return new s.Exception(e,i.Unimplemented)}unavailable(e="not available"){return new s.Exception(e,i.Unavailable)}async removeListener(e,t){const n=this.listeners[e];if(!n)return;const i=n.indexOf(t);this.listeners[e].splice(i,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach((t=>{this.notifyListeners(e,t)})))}}const d=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),c=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class u extends l{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach((e=>{if(e.length<=0)return;let[n,i]=e.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");n=c(n).trim(),i=c(i).trim(),t[n]=i})),t}async setCookie(e){try{const t=d(e.key),n=d(e.value),i=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),o=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${n||""}${i}; path=${r}; ${o};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}a("CapacitorCookies",{web:()=>new u});const p=(e,t={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},t),i=((e={})=>{const t=Object.keys(e);return Object.keys(e).map((e=>e.toLocaleLowerCase())).reduce(((n,i,r)=>(n[i]=e[t[r]],n)),{})})(e.headers)["content-type"]||"";if("string"==typeof e.data)n.body=e.data;else if(i.includes("application/x-www-form-urlencoded")){const t=new URLSearchParams;for(const[n,i]of Object.entries(e.data||{}))t.set(n,i);n.body=t.toString()}else if(i.includes("multipart/form-data")||e.data instanceof FormData){const t=new FormData;if(e.data instanceof FormData)e.data.forEach(((e,n)=>{t.append(n,e)}));else for(const n of Object.keys(e.data))t.append(n,e.data[n]);n.body=t;const i=new Headers(n.headers);i.delete("content-type"),n.headers=i}else(i.includes("application/json")||"object"==typeof e.data)&&(n.body=JSON.stringify(e.data));return n};class g extends l{async request(e){const t=p(e,e.webFetchExtra),n=((e,t=!0)=>e?Object.entries(e).reduce(((e,n)=>{const[i,r]=n;let o,s;return Array.isArray(r)?(s="",r.forEach((e=>{o=t?encodeURIComponent(e):e,s+=`${i}=${o}&`})),s.slice(0,-1)):(o=t?encodeURIComponent(r):r,s=`${i}=${o}`),`${e}&${s}`}),"").substr(1):null)(e.params,e.shouldEncodeUrlParams),i=n?`${e.url}?${n}`:e.url,r=await fetch(i,t),o=r.headers.get("content-type")||"";let s,a,{responseType:l="text"}=r.ok?e:{};switch(o.includes("application/json")&&(l="json"),l){case"arraybuffer":case"blob":a=await r.blob(),s=await(async e=>new Promise(((t,n)=>{const i=new FileReader;i.onload=()=>{const e=i.result;t(e.indexOf(",")>=0?e.split(",")[1]:e)},i.onerror=e=>n(e),i.readAsDataURL(e)})))(a);break;case"json":s=await r.json();break;default:s=await r.text()}const d={};return r.headers.forEach(((e,t)=>{d[t]=e})),{data:s,headers:d,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}var m,f;e("C",a("CapacitorHttp",{web:()=>new g})),e("D",a("Device",{web:()=>t((()=>Promise.resolve().then((()=>w))),void 0).then((e=>new e.DeviceWeb))})),function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"}(m||(m={})),function(e){e.None="NONE",e.Slide="SLIDE",e.Fade="FADE"}(f||(f={})),e("S",a("StatusBar"));const w=Object.freeze(Object.defineProperty({__proto__:null,DeviceWeb:class extends l{async getId(){return{identifier:this.getUid()}}async getInfo(){if("undefined"==typeof navigator||!navigator.userAgent)throw this.unavailable("Device API not available in this browser");const e=navigator.userAgent,t=this.parseUa(e);return{model:t.model,platform:"web",operatingSystem:t.operatingSystem,osVersion:t.osVersion,manufacturer:navigator.vendor,isVirtual:!1,webViewVersion:t.browserVersion}}async getBatteryInfo(){if("undefined"==typeof navigator||!navigator.getBattery)throw this.unavailable("Device API not available in this browser");let e={};try{e=await navigator.getBattery()}catch(t){}return{batteryLevel:e.level,isCharging:e.charging}}async getLanguageCode(){return{value:navigator.language.split("-")[0].toLowerCase()}}async getLanguageTag(){return{value:navigator.language}}parseUa(e){const t={},n=e.indexOf("(")+1;let i=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(i=e.indexOf(") Gecko"));const r=e.substring(n,i);if(-1!==e.indexOf("Android")){const e=r.replace("; wv","").split("; ").pop();e&&(t.model=e.split(" Build")[0]),t.osVersion=r.split("; ")[1]}else if(t.model=r.split("; ")[0],"undefined"!=typeof navigator&&navigator.oscpu)t.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))t.osVersion=r;else{const e=r.split("; ").pop();if(e){const n=e.replace(" like Mac OS X","").split(" ");t.osVersion=n[n.length-1].replace(/_/g,".")}}/android/i.test(e)?t.operatingSystem="android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?t.operatingSystem="ios":/Win/.test(e)?t.operatingSystem="windows":/Mac/i.test(e)?t.operatingSystem="mac":t.operatingSystem="unknown";const o=!!window.ApplePaySession,s=!!window.chrome,a=/Firefox/.test(e),l=/Edg/.test(e),d=/FxiOS/.test(e),c=/CriOS/.test(e),u=/EdgiOS/.test(e);if(o||s&&!l||d||c||u){let n;n=d?"FxiOS":c?"CriOS":u?"EdgiOS":o?"Version":"Chrome";const i=e.split(" ");for(const e of i)if(e.includes(n)){const n=e.split("/")[1];t.browserVersion=n}}else if(a||l){const n=e.split("").reverse().join("").split("/")[0].split("").reverse().join("");t.browserVersion=n}return t}getUid(){if("undefined"!=typeof window&&window.localStorage){let e=window.localStorage.getItem("_capuid");return e||(e=this.uuid4(),window.localStorage.setItem("_capuid",e),e)}return this.uuid4()}uuid4(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}}},Symbol.toStringTag,{value:"Module"}))}}}));
