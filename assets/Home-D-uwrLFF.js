import{m as C,b as z,c as _,f as b,d as c,n as M,j as P}from"./@ionic-BzoWLFGj.js";import{g as N,u as L,a as U,b as j}from"./index-BJaUFss0.js";import{_ as F,a as O}from"./GameSlides-D4uDAxBw.js";import{_ as T}from"./GameItem-B0E-7sNN.js";import{ah as A}from"./@ionic_components_2-DUGZJZYA.js";import"./@stencil-C-gE1UvY.js";import{r as g,C as G,e as D,z as R,o as V,I as u,Q as I,D as t,K as n,M as a,F as $,R as x,J as B,G as e,c as q,i as E,N as f,P as H}from"./@vue-DQPB5ixA.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-CQQ818li.js";import"./ionicons-DKP7Q_k0.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-CYwfShO_.js";import"./jsencrypt-Ve0Y4aUG.js";import"./vue-i18n-D3aLYNeJ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";import"./swiper-1gcWHage.js";import"./useGameStore-3Pbtfpox.js";const W={class:"marquee"},X={__name:"Marquee",setup(S){const w=g(null),o=g(null),i=g(null),k=l=>new Promise(p=>setTimeout(p,l));let m;const v=async()=>{if(m&&clearInterval(m),o.value.offsetWidth==0||w.value.offsetWidth==0){await k(500),v();return}const l=3600*d.value.length;i.value=A().addElement(o.value).duration(l).fromTo("transform","translateX(0)","translateX(-100%)"),i.value.play(),m=setInterval(()=>{i.value.stop(),i.value.play()},l/2)},h=()=>{i.value.pause()},y=()=>{i.value.play()},d=g([]);G(async()=>{const l=await N({labelType:1,userDriver:1,pageNum:1,pageSize:300,lang:"en-US"});l.code==="00000"&&(d.value=l.data.list)});let s;return D(async()=>{s=new ResizeObserver(()=>v()),setTimeout(()=>s.observe(o.value.lastChild),500)}),R(()=>v()),V(()=>{m&&clearInterval(m),s&&s.disconnect()}),(l,p)=>(u(),I("div",W,[t(e(C),null,{default:n(()=>[a("div",{slot:"primary",ref_key:"rollBox",ref:w,class:"roll-box"},[a("div",{ref_key:"rollImg",ref:o,class:"roll-img",onMouseover:h,onMouseleave:y,onTouchstart:h,onTouchend:y,onTouchcancel:y},[a("div",null,[(u(!0),I($,null,x(d.value,r=>(u(),B(T,{key:"game_".concat(r.id),game:r},null,8,["game"]))),128))]),a("div",null,[(u(!0),I($,null,x(d.value,r=>(u(),B(T,{key:"game_".concat(r.id),game:r},null,8,["game"]))),128))])],544)],512)]),_:1})]))}},J=a("h6",{style:{display:"flex","align-items":"center"}},[a("span",{style:{position:"relative",width:"20px"}},[a("div",{class:"mark"}),a("div",{class:"mark glow"})]),H(" Hot Games ")],-1),K={class:"btn-title"},Q={class:"ion-text-uppercase"},Y={class:"btn-title"},Z={class:"ion-text-uppercase"},ee={class:"btn-inner"},te={class:"btn-title ion-text-uppercase"},ae={class:"btn-inner"},se={class:"btn-title ion-text-uppercase"},ne={class:"btn-inner"},oe={class:"btn-title ion-text-uppercase"},le={class:"btn-inner"},re={class:"btn-title ion-text-uppercase"},Ce={__name:"Home",setup(S){const w=L(),{getPublicUrl:o}=j(),i=["slot","live"],k=g([]),m=q(()=>{let s=[];for(const l of i){const p=k.value.filter(r=>r.name==l);p.length>0&&s.push(p[0])}return s}),v=async()=>{const s=await U();s.code==="00000"&&(k.value=s.data||[])};G(async()=>{await v(),w.startLoading=!1});const h=g(null),y=E("setBackgroundOpacity"),d=s=>{y(Math.round(s.detail.scrollTop/120*100)/100)};return(s,l)=>(u(),B(e(P),{class:"home"},{default:n(()=>[t(e(M),{"scroll-events":!0,onIonScroll:d},{default:n(()=>[a("div",{ref_key:"bannerBG",ref:h,class:"banner-bg"},[t(F,{bannerBG:h.value},null,8,["bannerBG"]),J,t(X)],512),t(e(z),{class:"btns-category ion-justify-content-between",style:{"margin-top":"8px"}},{default:n(()=>[t(e(_),{size:"5.95"},{default:n(()=>[t(e(b),{class:"btn-label-lg left","router-link":"/casino"},{default:n(()=>[t(e(c),{class:"btn-img",src:e(o)("/home/casino.webp")},null,8,["src"]),a("div",K,[t(e(c),{src:e(o)("/tabbar/icon-casino-normal.png")},null,8,["src"]),a("span",Q,f(s.$t("app.tabbar.casino")),1)])]),_:1})]),_:1}),t(e(_),{size:"5.95"},{default:n(()=>[t(e(b),{class:"btn-label-lg right","router-link":"/sports"},{default:n(()=>[t(e(c),{class:"btn-img",src:e(o)("/home/sports.webp")},null,8,["src"]),a("div",Y,[t(e(c),{src:e(o)("/tabbar/icon-sports-normal.png")},null,8,["src"]),a("span",Z,f(s.$t("app.tabbar.sports")),1)])]),_:1})]),_:1})]),_:1}),t(e(z),{class:"btns-category ion-justify-content-between"},{default:n(()=>[t(e(_),{size:"2.9"},{default:n(()=>[t(e(b),{class:"btn-label-sm left1"},{default:n(()=>[a("div",ee,[t(e(c),{class:"btn-img",src:e(o)("/home/lottery.webp")},null,8,["src"]),a("div",te,f(s.$t("home.label.lottery")),1)])]),_:1})]),_:1}),t(e(_),{size:"2.9"},{default:n(()=>[t(e(b),{class:"btn-label-sm left2"},{default:n(()=>[a("div",ae,[t(e(c),{class:"btn-img",src:e(o)("/home/racing.webp")},null,8,["src"]),a("div",se,f(s.$t("home.label.racing")),1)])]),_:1})]),_:1}),t(e(_),{size:"2.9"},{default:n(()=>[t(e(b),{class:"btn-label-sm right2"},{default:n(()=>[a("div",ne,[t(e(c),{class:"btn-img",src:e(o)("/home/updown.webp")},null,8,["src"]),a("div",oe,f(s.$t("home.label.updown")),1)])]),_:1})]),_:1}),t(e(_),{size:"2.9"},{default:n(()=>[t(e(b),{class:"btn-label-sm right1"},{default:n(()=>[a("div",le,[t(e(c),{class:"btn-img",src:e(o)("/home/bingo.webp")},null,8,["src"]),a("div",re,f(s.$t("home.label.bingo")),1)])]),_:1})]),_:1})]),_:1}),(u(!0),I($,null,x(m.value,(p,r)=>(u(),B(O,{key:"home_".concat(r),category:p},null,8,["category"]))),128))]),_:1})]),_:1}))}};export{Ce as default};
