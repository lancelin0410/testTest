import{k as C,r as L,J as r,K as e,G as t,I as i,D as a,P as s,Q as V,R as b,F as S,M as p,N as g,O as T}from"./@vue-DQPB5ixA.js";import{o as N,t as y,b as P,c as v,N as I,O as l,C as x,n as U,j as B,D,d as w,l as O,e as W}from"./@ionic-BzoWLFGj.js";import{i as F,l as R}from"./ionicons-DKP7Q_k0.js";import{u as $,b as j}from"./index-BakalulC.js";import{_ as A}from"./NoData-Ds8GGPzO.js";import{r as E}from"./withdraw-DaNfble3.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@stencil-C-gE1UvY.js";import"./@ionic_components_2-DUGZJZYA.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-CQQ818li.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-CYwfShO_.js";import"./jsencrypt-Ve0Y4aUG.js";import"./vue-i18n-D3aLYNeJ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const H={slot:"start"},M={class:"record-time"},Q={class:"record-order"},q={slot:"end",class:"record-amount"},gt={__name:"WithdrawHistory",setup(z){const c=$(),{getPublicUrl:m}=j(),u=C({status:0,timeType:1,pageNum:1,pageSize:10,order:0,lang:"en-US"}),f=L([]);N(async()=>{c.barLoading=!0,await _(),c.barLoading=!1});const _=async()=>{c.fullLoading=!0;const n=await E({status:u.status,timeType:u.timeType});n.code==="00000"?f.value=n.data.list:await(await y.create({message:n.msg||n.code,duration:1500,position:"top",color:"danger",translucent:!0})).present(),c.fullLoading=!1},h=async n=>{navigator.clipboard.writeText(n),await(await y.create({message:"Copy Success",icon:R,duration:1500,position:"top",color:"success",translucent:!0})).present()};return(n,d)=>(i(),r(t(B),{class:"withdraw-history"},{default:e(()=>[a(t(U),null,{default:e(()=>[a(t(P),null,{default:e(()=>[a(t(v),null,{default:e(()=>[a(t(I),{modelValue:u.timeType,"onUpdate:modelValue":d[0]||(d[0]=o=>u.timeType=o),interface:"action-sheet",onIonChange:_},{default:e(()=>[a(t(l),{value:1},{default:e(()=>[s("Today")]),_:1}),a(t(l),{value:2},{default:e(()=>[s("Past 1 day")]),_:1}),a(t(l),{value:3},{default:e(()=>[s("Past 7 days")]),_:1}),a(t(l),{value:4},{default:e(()=>[s("Past 30 days")]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(t(v),null,{default:e(()=>[a(t(I),{modelValue:u.status,"onUpdate:modelValue":d[1]||(d[1]=o=>u.status=o),interface:"action-sheet",onIonChange:_},{default:e(()=>[a(t(l),{value:0},{default:e(()=>[s("All status")]),_:1}),a(t(l),{value:1},{default:e(()=>[s("Pending")]),_:1}),a(t(l),{value:2},{default:e(()=>[s("Rejected")]),_:1}),a(t(l),{value:3},{default:e(()=>[s("Withdrawing")]),_:1}),a(t(l),{value:4},{default:e(()=>[s("Success")]),_:1}),a(t(l),{value:5},{default:e(()=>[s("Fail")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(c).barLoading||f.value.length==0?(i(),r(A,{key:0,class:"no-data",desc:n.$t("withdraw.message.nodata")},null,8,["desc"])):(i(),r(t(x),{key:1,lines:"none"},{default:e(()=>[(i(!0),V(S,null,b(f.value,(o,k)=>(i(),r(t(D),{key:k},{default:e(()=>[p("div",H,[o.status==4?(i(),r(t(w),{key:0,src:t(m)("/icon_wallet/icon-succeed.png")},null,8,["src"])):[0,1,3].includes(o.status)?(i(),r(t(w),{key:1,src:t(m)("/icon_wallet/icon-pending.png")},null,8,["src"])):(i(),r(t(w),{key:2,src:t(m)("/icon_wallet/icon-fail.png")},null,8,["src"]))]),a(t(O),null,{default:e(()=>[p("div",M,g(o.gmtCreate),1),p("div",Q,[s(" OrderId: "+g(o.withdrawNo)+" ",1),a(t(W),{class:"btn-copy",icon:t(F),onClick:T(G=>h(o.withdrawNo),["stop"])},null,8,["icon","onClick"])])]),_:2},1024),p("div",q,g(o.amount),1)]),_:2},1024))),128))]),_:1}))]),_:1})]),_:1}))}};export{gt as default};
