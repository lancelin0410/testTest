System.register(["./index-legacy-BizqwEaK.js","./GameItem-legacy-C-wr3Fq3.js"],(function(e,a){"use strict";var t,r,s,n,o,c,i,g,l;return{setters:[e=>{t=e.r,r=e.o,s=e.d,n=e.e,o=e.i,c=e.f,i=e.F,g=e.g},e=>{l=e._}],execute:function(){e("_",{__name:"GameCards",props:{category:{type:Object,require:!0}},setup(e){const a=e,m=t([]);return r((async()=>{await(async()=>{const e=await g({gameCategoryId:"hotGames"==a.category.name?"":a.category.id,labelType:"hotGames"==a.category.name?1:0,userDriver:1,pageNum:1,pageSize:300,lang:"en-US"});if("00000"===e.code)m.value=e.data.list;else{const a=await toastController.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await a.present()}})()})),(e,a)=>(s(!0),n(i,null,o(m.value,(e=>(s(),n("div",{class:"game-col",key:`game_${e.id}`},[c(l,{game:e},null,8,["game"])])))),128))}})}}}));
