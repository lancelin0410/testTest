import{g as i}from"./index-CBAZMc4h.js";import{_ as l}from"./GameItem-Bp3JiRJl.js";import{r as g,B as p,H as o,P as s,Q as u,C as d,F as _}from"./@vue-B0j_qcai.js";const v={__name:"GameCards",props:{category:{type:Object,require:!0}},setup(n){const a=n,t=g([]),c=async()=>{const e=await i({gameCategoryId:a.category.name=="hotGames"?"":a.category.id,labelType:a.category.name=="hotGames"?1:0,userDriver:1,pageNum:1,pageSize:300,lang:"en-US"});e.code==="00000"?t.value=e.data.list:await(await toastController.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()};return p(async()=>{await c()}),(e,m)=>(o(!0),s(_,null,u(t.value,r=>(o(),s("div",{class:"game-col",key:"game_".concat(r.id)},[d(l,{game:r},null,8,["game"])]))),128))}};export{v as _};