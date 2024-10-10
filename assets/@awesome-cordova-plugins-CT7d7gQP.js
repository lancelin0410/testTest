import{O as C,f as S}from"./rxjs-C3tg6S9t.js";function P(){if(typeof process>"u"){var t=typeof window<"u"?window:{},e=5e3,n=Date.now(),r=!1;t.document.addEventListener("deviceready",function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-n)+" ms"),r=!0}),setTimeout(function(){!r&&t.cordova&&console.warn("Ionic Native: deviceready did not fire within "+e+"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")},e)}}var w={error:"cordova_not_available"},A={error:"plugin_not_installed"};function k(t){var e=function(){if(Promise)return new Promise(function(o,s){t(o,s)});console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")};if(typeof window<"u"&&window.angular){var n=window.document,r=window.angular.element(n.querySelector("[ng-app]")||n.body).injector();if(r){var i=r.get("$q");return i(function(o,s){t(o,s)})}console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return e()}function T(t,e,n,r){r===void 0&&(r={});var i,o,s=k(function(u,d){r.destruct?i=c(t,e,n,r,function(){for(var p=[],l=0;l<arguments.length;l++)p[l]=arguments[l];return u(p)},function(){for(var p=[],l=0;l<arguments.length;l++)p[l]=arguments[l];return d(p)}):i=c(t,e,n,r,u,d),o=d});return i&&i.error&&(s.catch(function(){}),typeof o=="function"&&o(i.error)),s}function I(t,e,n,r){return r===void 0&&(r={}),k(function(i,o){var s=c(t,e,n,r);s?s.error?o(s.error):s.then&&s.then(i).catch(o):o({error:"unexpected_error"})})}function E(t,e,n,r){return r===void 0&&(r={}),new C(function(i){var o;return r.destruct?o=c(t,e,n,r,function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return i.next(s)},function(){for(var s=[],u=0;u<arguments.length;u++)s[u]=arguments[u];return i.error(s)}):o=c(t,e,n,r,i.next.bind(i),i.error.bind(i)),o&&o.error&&(i.error(o.error),i.complete()),function(){try{if(r.clearFunction)return r.clearWithArgs?c(t,r.clearFunction,n,r,i.next.bind(i),i.error.bind(i)):c(t,r.clearFunction,[])}catch(s){console.warn("Unable to clear the previous observable watch for",t.constructor.getPluginName(),e),console.warn(s)}}})}function R(t,e){return e=typeof window<"u"&&e?m(window,e):e||(typeof window<"u"?window:{}),S(e,t)}function v(t,e,n){var r,i;typeof t=="string"?r=t:(r=t.constructor.getPluginRef(),n=t.constructor.getPluginName(),i=t.constructor.getPluginInstallName());var o=b(r);return!o||e&&typeof o[e]>"u"?typeof window>"u"||!window.cordova?(x(n,e),w):(F(n,i,e),A):!0}function D(t,e,n,r){if(e===void 0&&(e={}),e.sync)return t;if(e.callbackOrder==="reverse")t.unshift(r),t.unshift(n);else if(e.callbackStyle==="node")t.push(function(u,d){u?r(u):n(d)});else if(e.callbackStyle==="object"&&e.successName&&e.errorName){var i={};i[e.successName]=n,i[e.errorName]=r,t.push(i)}else if(typeof e.successIndex<"u"||typeof e.errorIndex<"u"){var o=function(){e.successIndex>t.length?t[e.successIndex]=n:t.splice(e.successIndex,0,n)},s=function(){e.errorIndex>t.length?t[e.errorIndex]=r:t.splice(e.errorIndex,0,r)};e.successIndex>e.errorIndex?(s(),o()):(o(),s())}else t.push(n),t.push(r);return t}function c(t,e,n,r,i,o){r===void 0&&(r={}),n=D(n,r,i,o);var s=v(t,e);if(s===!0){var u=b(t.constructor.getPluginRef());return u[e].apply(u,n)}else return s}function b(t){return typeof window<"u"?m(window,t):null}function m(t,e){for(var n=e.split("."),r=t,i=0;i<n.length;i++){if(!r)return null;r=r[n[i]]}return r}function F(t,e,n){console.warn(n?"Native: tried calling "+t+"."+n+", but the "+t+" plugin is not installed.":"Native: tried accessing the "+t+" plugin but it's not installed."),e&&console.warn("Install the "+t+" plugin: 'ionic cordova plugin add "+e+"'")}function x(t,e){typeof process>"u"&&console.warn(e?"Native: tried calling "+t+"."+e+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator":"Native: tried accessing the "+t+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator")}var L=function(t,e,n){return n===void 0&&(n={}),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return n.sync?c(t,e,r,n):n.observable?E(t,e,r,n):n.eventObservable&&n.event?R(n.event,n.element):n.otherPromise?I(t,e,r,n):T(t,e,r,n)}};function O(t,e){for(var n=e.split("."),r=t,i=0;i<n.length;i++){if(!r)return null;r=r[n[i]]}return r}var V=function(){function t(){}return t.installed=function(){var e=v(this.pluginRef)===!0;return e},t.getPlugin=function(){return typeof window<"u"?O(window,this.pluginRef):null},t.getPluginName=function(){var e=this.pluginName;return e},t.getPluginRef=function(){var e=this.pluginRef;return e},t.getPluginInstallName=function(){var e=this.plugin;return e},t.getSupportedPlatforms=function(){var e=this.platforms;return e},t.pluginName="",t.pluginRef="",t.plugin="",t.repo="",t.platforms=[],t.install="",t}();function a(t,e,n,r){return L(t,e,n).apply(this,r)}P();var N=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),M=function(){function t(e){this.callbackParameters=[],this.partnerParameters=[],this.eventToken=e}return t.prototype.setRevenue=function(e,n){this.revenue=e,this.currency=n},t.prototype.addCallbackParameter=function(e,n){this.callbackParameters.push(e),this.callbackParameters.push(n)},t.prototype.addPartnerParameter=function(e,n){this.partnerParameters.push(e),this.partnerParameters.push(n)},t.prototype.setTransactionId=function(e){this.transactionId=e},t.prototype.setCallbackId=function(e){this.callbackId=e},t.prototype.setReceipt=function(e){this.receipt=e},t.prototype.setProductId=function(e){this.productId=e},t.prototype.setPurchaseToken=function(e){this.purchaseToken=e},t}(),W=function(){function t(e,n){this.delayStart=0,this.logLevel=null,this.defaultTracker=null,this.urlStrategy=null,this.externalDeviceId=null,this.sendInBackground=null,this.shouldLaunchDeeplink=null,this.eventBufferingEnabled=null,this.userAgent=null,this.isDeviceKnown=null,this.needsCost=null,this.secretId=null,this.info1=null,this.info2=null,this.info3=null,this.info4=null,this.processName=null,this.preinstallTrackingEnabled=null,this.preinstallFilePath=null,this.fbAppId=null,this.oaidReadingEnabled=null,this.allowiAdInfoReading=null,this.allowIdfaReading=null,this.allowAdServicesInfoReading=null,this.coppaCompliantEnabled=null,this.readDeviceInfoOnceEnabled=null,this.playStoreKidsAppEnabled=null,this.linkMeEnabled=null,this.finalAndroidAttributionEnabled=null,this.attConsentWaitingInterval=null,this.attributionCallback=null,this.eventTrackingSucceededCallback=null,this.eventTrackingFailedCallback=null,this.sessionTrackingSucceededCallback=null,this.sessionTrackingFailedCallback=null,this.deferredDeeplinkCallback=null,this.conversionValueUpdatedCallback=null,this.skad4ConversionValueUpdatedCallback=null,this.appToken=e,this.environment=n}return t.prototype.setAppSecret=function(e,n,r,i,o){this.secretId=e,this.info1=n,this.info2=r,this.info3=i,this.info4=o},t.prototype.setDelayStart=function(e){this.delayStart=e},t.prototype.setLogLevel=function(e){this.logLevel=e},t.prototype.setDefaultTracker=function(e){this.defaultTracker=e},t.prototype.setExternalDeviceId=function(e){this.externalDeviceId=e},t.prototype.setUrlStrategy=function(e){this.urlStrategy=e},t.prototype.setSendInBackground=function(e){this.sendInBackground=e},t.prototype.setShouldLaunchDeeplink=function(e){this.shouldLaunchDeeplink=e},t.prototype.setEventBufferingEnabled=function(e){this.eventBufferingEnabled=e},t.prototype.setCoppaCompliantEnabled=function(e){this.coppaCompliantEnabled=e},t.prototype.setReadDeviceInfoOnceEnabled=function(e){this.readDeviceInfoOnceEnabled=e},t.prototype.setPlayStoreKidsAppEnabled=function(e){this.playStoreKidsAppEnabled=e},t.prototype.setUserAgent=function(e){this.userAgent=e},t.prototype.setDeviceKnown=function(e){this.isDeviceKnown=e},t.prototype.setNeedsCost=function(e){this.needsCost=e},t.prototype.setProcessName=function(e){this.processName=e},t.prototype.setPreinstallTrackingEnabled=function(e){this.preinstallTrackingEnabled=e},t.prototype.setPreinstallFilePath=function(e){this.preinstallFilePath=e},t.prototype.setFbAppId=function(e){this.fbAppId=e},t.prototype.setOaidReadingEnabled=function(e){this.oaidReadingEnabled=e},t.prototype.setAllowiAdInfoReading=function(e){this.allowiAdInfoReading=e},t.prototype.setAllowIdfaReading=function(e){this.allowIdfaReading=e},t.prototype.setAllowAdServicesInfoReading=function(e){this.allowAdServicesInfoReading=e},t.prototype.setLinkMeEnabled=function(e){this.linkMeEnabled=e},t.prototype.setFinalAndroidAttributionEnabled=function(e){this.finalAndroidAttributionEnabled=e},t.prototype.setAttConsentWaitingInterval=function(e){this.attConsentWaitingInterval=e},t.prototype.setAttributionCallbackListener=function(e){this.attributionCallback=e},t.prototype.setEventTrackingSucceededCallbackListener=function(e){this.eventTrackingSucceededCallback=e},t.prototype.setEventTrackingFailedCallbackListener=function(e){this.eventTrackingFailedCallback=e},t.prototype.setSessionTrackingSucceededCallbackListener=function(e){this.sessionTrackingSucceededCallback=e},t.prototype.setSessionTrackingFailedCallbackListener=function(e){this.sessionTrackingFailedCallback=e},t.prototype.setDeferredDeeplinkCallbackListener=function(e){this.deferredDeeplinkCallback=e},t.prototype.setConversionValueUpdatedCallbackListener=function(e){this.conversionValueUpdatedCallback=e},t.prototype.setSkad4ConversionValueUpdatedCallbackListener=function(e){this.skad4ConversionValueUpdatedCallback=e},t.prototype.getAttributionCallback=function(){return this.attributionCallback},t.prototype.getEventTrackingSucceededCallback=function(){return this.eventTrackingSucceededCallback},t.prototype.getEventTrackingFailedCallback=function(){return this.eventTrackingFailedCallback},t.prototype.getSessionTrackingSucceededCallback=function(){return this.sessionTrackingSucceededCallback},t.prototype.getSessionTrackingFailedCallback=function(){return this.sessionTrackingFailedCallback},t.prototype.getDeferredDeeplinkCallback=function(){return this.deferredDeeplinkCallback},t.prototype.getConversionValueUpdatedCallback=function(){return this.conversionValueUpdatedCallback},t.prototype.getSkad4ConversionValueUpdatedCallback=function(){return this.skad4ConversionValueUpdatedCallback},t.prototype.hasAttributionListener=function(){return this.attributionCallback!==null},t.prototype.hasEventTrackingSucceededListener=function(){return this.eventTrackingSucceededCallback!==null},t.prototype.hasEventTrackingFailedListener=function(){return this.eventTrackingFailedCallback!==null},t.prototype.hasSessionTrackingSucceededListener=function(){return this.sessionTrackingSucceededCallback!==null},t.prototype.hasSessionTrackingFailedListener=function(){return this.sessionTrackingFailedCallback!==null},t.prototype.hasDeferredDeeplinkCallbackListener=function(){return this.deferredDeeplinkCallback!==null},t.prototype.hasConversionValueUpdatedCallbackListener=function(){return this.conversionValueUpdatedCallback!==null},t.prototype.hasSkad4ConversionValueUpdatedCallbackListener=function(){return this.skad4ConversionValueUpdatedCallback!==null},t}(),f;(function(t){t.Sandbox="sandbox",t.Production="production"})(f||(f={}));var h;(function(t){t.Verbose="VERBOSE",t.Debug="DEBUG",t.Info="INFO",t.Warn="WARN",t.Error="ERROR",t.Assert="ASSERT",t.Suppress="SUPPRESS"})(h||(h={}));var g;(function(t){t.India="india",t.China="china",t.Cn="cn",t.CnOnly="cn-only",t.DataResidencyEU="data-residency-eu",t.DataResidencyTR="data-residency-tr",t.DataResidencyUS="data-residency-us"})(g||(g={}));var y;(function(t){t.AdRevenueSourceAppLovinMAX="applovin_max_sdk",t.AdRevenueSourceMopub="mopub",t.AdRevenueSourceAdMob="admob_sdk",t.AdRevenueSourceIronSource="ironsource_sdk",t.AdRevenueSourceAdMost="admost_sdk",t.AdRevenueSourceUnity="unity_sdk",t.AdRevenueSourceHeliumChartboost="helium_chartboost_sdk",t.AdRevenueSourcePublisher="publisher_sdk",t.AdRevenueSourceTopOn="topon_sdk",t.AdRevenueSourceAdx="adx_sdk"})(y||(y={}));var U=function(t){N(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.create=function(n){return a(this,"create",{sync:!0},arguments)},e.prototype.trackEvent=function(n){return a(this,"trackEvent",{sync:!0},arguments)},e.prototype.trackAppStoreSubscription=function(n){return a(this,"trackAppStoreSubscription",{sync:!0},arguments)},e.prototype.trackPlayStoreSubscription=function(n){return a(this,"trackPlayStoreSubscription",{sync:!0},arguments)},e.prototype.trackThirdPartySharing=function(n){return a(this,"trackThirdPartySharing",{sync:!0},arguments)},e.prototype.trackAdRevenue=function(n,r){return a(this,"trackAdRevenue",{sync:!0},arguments)},e.prototype.trackMeasurementConsent=function(n){return a(this,"trackMeasurementConsent",{sync:!0},arguments)},e.prototype.setOfflineMode=function(n){return a(this,"setOfflineMode",{sync:!0},arguments)},e.prototype.appWillOpenUrl=function(n){return a(this,"appWillOpenUrl",{sync:!0},arguments)},e.prototype.setEnabled=function(n){return a(this,"setEnabled",{sync:!0},arguments)},e.prototype.setPushToken=function(n){return a(this,"setPushToken",{sync:!0},arguments)},e.prototype.isEnabled=function(){return a(this,"isEnabled",{},arguments)},e.prototype.gdprForgetMe=function(){return a(this,"gdprForgetMe",{sync:!0},arguments)},e.prototype.disableThirdPartySharing=function(){return a(this,"disableThirdPartySharing",{sync:!0},arguments)},e.prototype.getGoogleAdId=function(){return a(this,"getGoogleAdId",{},arguments)},e.prototype.getAmazonAdId=function(){return a(this,"getAmazonAdId",{},arguments)},e.prototype.getIdfa=function(){return a(this,"getIdfa",{},arguments)},e.prototype.getAdid=function(){return a(this,"getAdid",{},arguments)},e.prototype.checkForNewAttStatus=function(){return a(this,"checkForNewAttStatus",{sync:!0},arguments)},e.prototype.getAttribution=function(){return a(this,"getAttribution",{},arguments)},e.prototype.getSdkVersion=function(){return a(this,"getSdkVersion",{},arguments)},e.prototype.addSessionCallbackParameter=function(n,r){return a(this,"addSessionCallbackParameter",{sync:!0},arguments)},e.prototype.removeSessionCallbackParameter=function(n){return a(this,"removeSessionCallbackParameter",{sync:!0},arguments)},e.prototype.resetSessionCallbackParameters=function(){return a(this,"resetSessionCallbackParameters",{sync:!0},arguments)},e.prototype.addSessionPartnerParameter=function(n,r){return a(this,"addSessionPartnerParameter",{sync:!0},arguments)},e.prototype.removeSessionPartnerParameter=function(n){return a(this,"removeSessionPartnerParameter",{sync:!0},arguments)},e.prototype.resetSessionPartnerParameters=function(){return a(this,"resetSessionPartnerParameters",{sync:!0},arguments)},e.prototype.sendFirstPackages=function(){return a(this,"sendFirstPackages",{sync:!0},arguments)},e.prototype.requestTrackingAuthorizationWithCompletionHandler=function(){return a(this,"requestTrackingAuthorizationWithCompletionHandler",{},arguments)},e.prototype.updateConversionValue=function(n){return a(this,"updateConversionValue",{sync:!0},arguments)},e.prototype.getAppTrackingAuthorizationStatus=function(){return a(this,"getAppTrackingAuthorizationStatus",{},arguments)},e.prototype.getLastDeeplink=function(){return a(this,"getLastDeeplink",{},arguments)},e.prototype.verifyAppStorePurchase=function(n){return a(this,"verifyAppStorePurchase",{},arguments)},e.prototype.verifyPlayStorePurchase=function(n){return a(this,"verifyPlayStorePurchase",{},arguments)},e.prototype.processDeeplink=function(n){return a(this,"processDeeplink",{},arguments)},e.pluginName="Adjust",e.plugin="com.adjust.sdk",e.pluginRef="Adjust",e.repo="https://github.com/adjust/cordova_sdk",e.platforms=["Android","iOS"],e}(V),B=new U;export{W as A,f as a,h as b,B as c,M as d};