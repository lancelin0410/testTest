System.register(["./index-legacy-Bi1pgoCS.js","./GameItem-legacy-DZjlzK5k.js","./@vue-legacy-D643Ih6I.js"],(function(e,a){"use strict";var t,r,s,c,g,n,l,m,u;return{setters:[e=>{t=e.g},e=>{r=e._},e=>{s=e.r,c=e.C,g=e.I,n=e.Q,l=e.R,m=e.D,u=e.F}],execute:function(){e("_",{__name:"GameCards",props:{category:{type:Object,require:!0}},setup(e){const a=e,i=s([]);return c((async()=>{await(async()=>{const e=await t({gameCategoryId:"hotGames"==a.category.name?"":a.category.id,labelType:"hotGames"==a.category.name?1:0,userDriver:1,pageNum:1,pageSize:300,lang:"en-US"});"00000"===e.code&&(i.value=e.data.list)})()})),(e,a)=>(g(!0),n(u,null,l(i.value,(e=>(g(),n("div",{class:"game-col",key:`game_${e.id}`},[m(r,{game:e},null,8,["game"])])))),128))}})}}}));
