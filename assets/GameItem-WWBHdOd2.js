import{D as p,l as f,m as I,d as s,e as C,f as G,u as o,x as m,j as l,a1 as g,K as k,C as y,a6 as h,a7 as v,t as w}from"./index-BWYPlUKf.js";import{u as B}from"./useGameStore-gExPs-hN.js";const U={__name:"GameItem",props:{game:{type:Object,require:!0}},setup(r){const{getPublicUrl:c}=y(),e=r,i=p(),n=f(),u=B(),d=async()=>{n.fullLoading=!0,await h({gameCategoryId:e.game.gameCategoryId,routeId:e.game.routeId});const t=await v({platformGameId:e.game.tpgId,gameId:e.game.id,platformCode:e.game.platformCode,device:0});if(t.code==="00000"){const a=Capacitor.convertFileSrc(t.data);i.push({name:"GameWeb",query:{gameId:e.game.id,url:encodeURIComponent(a)}})}else await(await w.create({message:t.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present();n.fullLoading=!1};return I(()=>u.favoriteGameList.filter(a=>a.gameId==e.game.gameId||a.gameId==e.game.id).length>0),(t,a)=>(s(),C("div",{class:"game-item",onClick:k(d,["stop"])},[G(o(m),{class:"game-image",src:r.game.gameImage},null,8,["src"]),r.game.cornerMark==1?(s(),l(o(m),{key:0,class:"game-tag",src:o(c)("/home/icon-new.png")},null,8,["src"])):g("",!0),r.game.cornerMark==2?(s(),l(o(m),{key:1,class:"game-tag",src:o(c)("/home/icon-best.png")},null,8,["src"])):g("",!0)]))}};export{U as _};
