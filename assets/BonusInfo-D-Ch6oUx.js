import{r as y,c as R,J as f,K as a,G as e,I as r,D as s,P as b,Q as g,R as N,F as z,M as p,N as u,O as P,L as T}from"./@vue-DQPB5ixA.js";import{o as F,A as G,B as L,e as w,l as h,C as A,n as D,j as E,D as j,b as O,c as U,d as M,f as $,t as q}from"./@ionic-BzoWLFGj.js";import{r as k,u as J,c as K,b as Q,d as W}from"./index-BakalulC.js";import{_ as H}from"./NoData-Ds8GGPzO.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@stencil-C-gE1UvY.js";import"./@ionic_components_2-DUGZJZYA.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-CQQ818li.js";import"./ionicons-DKP7Q_k0.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-CYwfShO_.js";import"./jsencrypt-Ve0Y4aUG.js";import"./vue-i18n-D3aLYNeJ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";function X(d){return k({url:"/app/member/h5/gift/level/up",method:"GET",params:d})}function Y(d){return k({url:"/app/member/h5/gift/level/up",method:"POST",data:d})}const Z=p("div",{class:"bonus-title"},"Level up rewards",-1),ee={class:"bonus-desc"},te={class:"bonus-exp"},ae={class:"bonus-gift"},se={key:0},le={key:1,style:{color:"#ffdf3f"}},ke={__name:"BonusInfo",setup(d){const n=J(),c=K(),{getPublicUrl:v}=Q(),x="₹",_=y("vip"),i=y([]),C=R(()=>{let l=0;const o=i.value.filter((t,m)=>(t.state!=2&&(l=m),t.state!=2));return o.length==0?i.value[0]?[i.value[0]]:[]:l+1>=i.value.length?o:[...o,i.value[l+1]]});F(async()=>{c.isLogin?(n.fullLoading=!0,await c.getUserTotalInfo(),await I(),n.fullLoading=!1):ionRouter.navigate("/","back","replace",headerAnimation)});const I=async()=>{n.fullLoading=!0;const l=await X();l.code==="00000"&&(i.value=l.data||[],i.value.forEach(o=>{const t=c.vipInfo.filter(m=>m.id==o.vipId);t.length>0&&(o=Object.assign(o,t[0]))})),n.fullLoading=!1},S=async()=>{await I()},B=async l=>{n.fullLoading=!0,(await Y({vipId:l})).code==="00000"&&(V(),await(await q.create({message:"Claim success",duration:1500,position:"top",color:"success",translucent:!0})).present(),await I()),n.fullLoading=!1},V=async()=>{n.fullLoading=!0;const l=await W();l.code==="00000"&&(c.userInfo.balance=Number(l.data)),n.fullLoading=!1};return(l,o)=>(r(),f(e(E),{class:"bonus"},{default:a(()=>[s(e(D),null,{default:a(()=>[s(e(G),{modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=t=>_.value=t),mode:"md",onIonChange:S},{default:a(()=>[s(e(L),{class:"ion-text-capitalize",layout:"icon-start",value:"vip"},{default:a(()=>[s(e(w),{src:e(v)("/bonus/icon_vip.svg"),style:{height:"18px"}},null,8,["src"]),s(e(h),null,{default:a(()=>[b("VIP")]),_:1})]),_:1}),s(e(L),{class:"ion-text-capitalize",layout:"icon-start",value:"general"},{default:a(()=>[s(e(w),{src:e(v)("/bonus/icon_general.svg"),style:{height:"18px"}},null,8,["src"]),s(e(h),null,{default:a(()=>[b("General")]),_:1})]),_:1})]),_:1},8,["modelValue"]),_.value=="general"?(r(),f(H,{key:0,class:"no-data",desc:"Coming Soon"})):(r(),f(e(A),{key:1,style:{"margin-top":"16px"}},{default:a(()=>[(r(!0),g(z,null,N(C.value,t=>(r(),f(e(j),{key:t.vipId,class:"bonus-item",lines:"none"},{default:a(()=>[s(e(h),{class:"bonus-content"},{default:a(()=>[s(e(O),{class:"ion-justify-content-between"},{default:a(()=>[s(e(U),{size:"4"},{default:a(()=>[s(e(M),{src:e(v)("/bonus/levelup.png")},null,8,["src"])]),_:1}),s(e(U),{size:"8"},{default:a(()=>[Z,p("div",ee,[b("to "+u(t.vipName||"VIP1")+": ",1),p("span",te,u(t.levelUpRecharge>=e(c).currRecharge?e(c).currRecharge:t.levelUpRecharge),1),p("span",null," / "+u(t.levelUpRecharge),1)]),p("div",ae,u(e(x))+" "+u(t.levelUpGift),1),s(e($),{class:"btn-claim ion-text-capitalize",disabled:t.state!=0,onClick:P(m=>B(t.vipId),["stop"])},{default:a(()=>[t.state==2?(r(),g("span",se,"Not yet eligible")):t.state==1?(r(),g("span",le,"Claimed")):(r(),g("span",{key:2,style:T(t.state==0?"color: var(--ion-tab-bar-color-selected)":"")},"Claim",4))]),_:2},1032,["disabled","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1})]),_:1}))}};export{ke as default};
