System.register([],(function(t,e){"use strict";return{execute:function(){function e(t,e,n,r){return(e=e.split?e.split("."):e.slice(0)).slice(0,-1).reduce((function(t,e){return/^(__proto__|constructor|prototype)$/.test(e)?{}:t[e]=t[e]||{}}),t)[e.pop()]=n,t}function n(t,e){return null==t?e:t}function r(t,e,r,i){return n(n(r[e],i[e]),t)}t("R",(function(t){const n=t||{};return function(t){const i=function(){try{return t.options.persistedState||{}}catch{return{}}}();if(!1===r(!0,"persist",i,n))return;const o=r(t.store.$id,"key",i,{}),s=r(!1,"overwrite",i,n),c=r(function(){try{return window.localStorage}catch{return{getItem:function(){},setItem:function(){},removeItem:function(){}}}}(),"storage",i,n),u=r((function(){return!0}),"filter",i,n),f=r(JSON.stringify,"serialize",i,n),a=r(JSON.parse,"deserialize",i,n),l=r((function(t){return t}),"migrate",i,{}),d=r((function(t,e){return e}),"merge",i,{});function p(e){(i.beforeHydrate||function(){})(t.store.$state);const n=d(t.store.$state,e);s?t.store.$state=n:t.store.$patch(n),y()}function m(t){if(null!=t){const e=a(t),n=l(e);n instanceof Promise?n.then(p):p(n)}else y()}let y;r((function(t){const e=t.setItem("@@","1"),n=function(){t.removeItem("@@")};e instanceof Promise?e.then(n):n()}),"assertStorage",i,n);const h=new Promise((function(t){y=t}));let g=0;t.store.$persistedState={isReady:function(){return h},pending:!1};try{!function(){const t=c.getItem(o);t instanceof Promise?t.then(m):m(t)}()}catch($){y()}t.store.$subscribe((function(n,r){if(!1===u(n,r))return;Array.isArray(i.includePaths)&&(r=i.includePaths.reduce((function(t,n){return e(t,n,function(t,e,n){return void 0===(t=(e.split?e.split("."):e).reduce((function(t,e){return t&&t[e]}),t))?n:t}(r,n,void 0))}),{})),Array.isArray(i.excludePaths)&&(r=a(f(r)),i.excludePaths.forEach((function(t){return e(r,t,void 0)}),{}));const s=f(r),l=c.setItem(o,s);l instanceof Promise&&(++g,t.store.$persistedState.pending=0!==g,l.catch((function(){})).finally((function(){--g,t.store.$persistedState.pending=0!==g})))}))}}))}}}));
