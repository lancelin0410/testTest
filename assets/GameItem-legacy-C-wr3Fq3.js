System.register(["./index-legacy-BizqwEaK.js","./useGameStore-legacy-eckc7vxz.js"],(function(e,a){"use strict";var t,m,o,i,g,r,n,s,c,d,l,p,u,I,f,h;return{setters:[e=>{t=e.D,m=e.l,o=e.m,i=e.d,g=e.e,r=e.f,n=e.u,s=e.x,c=e.j,d=e.a1,l=e.K,p=e.C,u=e.a6,I=e.a7,f=e.t},e=>{h=e.u}],execute:function(){var a=document.createElement("style");a.textContent=".game-item{position:relative;max-width:30vw;border-radius:8px;overflow:hidden}.game-item ion-img.game-image{height:100%}.game-item ion-img.game-tag{position:absolute;top:6px;left:0;width:38px;z-index:1}.game-item .game-collect{position:absolute;top:6px;right:6px;z-index:1}\n",document.head.appendChild(a),e("_",{__name:"GameItem",props:{game:{type:Object,require:!0}},setup(e){const{getPublicUrl:a}=p(),x=e,y=t(),C=m(),v=h(),w=async()=>{C.fullLoading=!0,await u({gameCategoryId:x.game.gameCategoryId,routeId:x.game.routeId});const e=await I({platformGameId:x.game.tpgId,gameId:x.game.id,platformCode:x.game.platformCode,device:0});if("00000"===e.code){const a=Capacitor.convertFileSrc(e.data);y.push({name:"GameWeb",query:{gameId:x.game.id,url:encodeURIComponent(a)}})}else{const a=await f.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await a.present()}C.fullLoading=!1};return o((()=>v.favoriteGameList.filter((e=>e.gameId==x.game.gameId||e.gameId==x.game.id)).length>0)),(t,m)=>(i(),g("div",{class:"game-item",onClick:l(w,["stop"])},[r(n(s),{class:"game-image",src:e.game.gameImage},null,8,["src"]),1==e.game.cornerMark?(i(),c(n(s),{key:0,class:"game-tag",src:n(a)("/home/icon-new.png")},null,8,["src"])):d("",!0),2==e.game.cornerMark?(i(),c(n(s),{key:1,class:"game-tag",src:n(a)("/home/icon-best.png")},null,8,["src"])):d("",!0)]))}})}}}));
