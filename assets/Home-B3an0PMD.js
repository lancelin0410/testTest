import{d as r,m as M,b as x,c as f,f as h,n as A,j as L}from"./@ionic-Ci9irSPF.js";import{S as O,A as j,P as E,a as N}from"./swiper-CK7O3PWl.js";import{u as P,a as F,b as G}from"./index-CvJSsnnw.js";import{af as z,aR as H}from"./@ionic_components_2-DZGN-9Y0.js";import"./@stencil-pJInS8Bp.js";import{r as I,b as R,y as V,o as q,H as c,P as k,C as t,J as n,L as a,F as B,Q as S,I as y,E as e,B as W,i as X,M as w,O as D}from"./@vue-BnNAOHbh.js";import{_ as T}from"./GameSlides-Cmgu2nlv.js";import"./@capacitor-CHoHO2YB.js";import"./jsencrypt-Ve0Y4aUG.js";import"./@ionic_components_1-CG1weR9z.js";import"./vue-router-WMmcqR98.js";import"./ionicons-vS9WG2d3.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-CIp5G_9Q.js";import"./vue-i18n-DJaGXZoQ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const J={class:"marquee"},Q={__name:"Marquee",setup(C){const{getPublicUrl:U}=P(),l=I(null),p=I(null),o=I(null),$=g=>new Promise(s=>setTimeout(s,g));let u;const v=async()=>{if(u&&clearInterval(u),p.value.offsetWidth==0||l.value.offsetWidth==0){await $(500),v();return}const g=1e5;o.value=z().addElement(p.value).duration(g).fromTo("transform","translateX(0)","translateX(-100%)"),o.value.play(),u=setInterval(()=>{o.value.stop(),o.value.play()},g/2)},d=()=>{o.value.pause()},m=()=>{o.value.play()};let b;return R(()=>{b=new ResizeObserver(()=>v()),b.observe(p.value.lastChild)}),V(()=>v()),q(()=>{u&&clearInterval(u),b&&b.disconnect()}),(g,s)=>(c(),k("div",J,[t(e(M),null,{default:n(()=>[a("div",{slot:"primary",ref_key:"rollBox",ref:l,class:"roll-box"},[a("div",{ref_key:"rollImg",ref:p,class:"roll-img",onMouseover:d,onMouseleave:m,onTouchstart:d,onTouchend:m,onTouchcancel:m},[a("div",null,[(c(!0),k(B,null,S(Array.from({length:52},(i,_)=>_+1),i=>(c(),y(e(r),{src:e(U)("/game_demo/game_".concat(i,".png"))},null,8,["src"]))),256))]),a("div",null,[(c(!0),k(B,null,S(Array.from({length:52},(i,_)=>_+1),i=>(c(),y(e(r),{src:e(U)("/game_demo/game_".concat(i,".png"))},null,8,["src"]))),256))])],544)],512)]),_:1})]))}},Y=a("h6",{style:{display:"flex","align-items":"center"}},[a("span",{style:{position:"relative",width:"20px"}},[a("div",{class:"mark"}),a("div",{class:"mark glow"})]),D(" Hot Games ")],-1),Z={class:"btn-title"},ee={class:"ion-text-uppercase"},te={class:"btn-title"},ae={class:"ion-text-uppercase"},ne={class:"btn-inner"},se={class:"btn-title ion-text-uppercase"},le={class:"btn-inner"},re={class:"btn-title ion-text-uppercase"},oe={class:"btn-inner"},ie={class:"btn-title ion-text-uppercase"},ce={class:"btn-inner"},ue={class:"btn-title ion-text-uppercase"},Ce={__name:"Home",setup(C){const U=F(),{getPublicUrl:l}=P(),{preLoadImg:p}=G(),o=I([]),$=async()=>{window.location.hostname.includes("github.io")&&(o.value=[{imageUrl:"https://www.teenteen123.com/images/banner/banner_cashback.png",type:1,pageKey:9,webUrl:null,gameId:null},{imageUrl:"https://www.teenteen123.com/images/banner/banner_rebate.png",type:1,pageKey:7,webUrl:null,gameId:null},{imageUrl:"https://www.teenteen123.com/images/banner/banner1.png",type:1,pageKey:1,webUrl:null,gameId:null},{imageUrl:"https://www.teenteen123.com/images/banner/banner2.png",type:1,pageKey:7,webUrl:"",gameId:null},{imageUrl:"https://www.teenteen123.com/images/banner/banner1.png",type:1,pageKey:1,webUrl:null,gameId:null},{imageUrl:"https://www.teenteen123.com/images/banner/banner_cashback.png",type:1,pageKey:8,webUrl:null,gameId:null},{imageUrl:"https://www.teenteen123.com/images/banner/banner4.png",type:1,pageKey:2,webUrl:null,gameId:null}])};W(async()=>{await $();for(const[s,i]of o.value.entries())s<=1&&await p(i.imageUrl);U.startLoading=!1});const u=X("setBackgroundOpacity"),v=s=>{u(Math.round(s.detail.scrollTop/120*100)/100)};let d=0;const m=I(null),b=["rgb(79, 70, 53)","rgb(88, 163, 129)","rgb(101, 107, 163)","rgb(125, 104, 165)","rgb(108, 110, 156)","rgb(176, 99, 71)","rgb(110, 142, 115)","rgb(153, 119, 159)","rgb(107, 141, 92)","rgb(121, 125, 187)","rgb(130, 97, 193)","rgb(155, 109, 84)","rgb(154, 110, 73)","rgb(116, 149, 85)","rgb(98, 101, 154)","rgb(158, 119, 69)","rgb(107, 108, 115)","rgb(112, 111, 168)","rgb(162, 119, 93)","rgb(128, 125, 167)","rgb(122, 144, 99)"],g=()=>{m.value&&z().addElement(m.value).easing("ease-out").duration(1e3).delay(-300).fromTo("backgroundColor",b[d%22],b[(d+1)%22]).onFinish(()=>d++).play()};return(s,i)=>(c(),y(e(L),{class:"home"},{default:n(()=>[t(e(A),{"scroll-events":!0,onIonScroll:v},{default:n(()=>[a("div",{ref_key:"bannerBG",ref:m,class:"banner-bg"},[o.value.length>0?(c(),y(e(O),{key:0,class:"banner",modules:[e(j),e(E),e(H)],centeredSlides:!0,pagination:{clickable:!0},autoplay:!0,loop:!0,lazyPreloadPrevNext:1,onSlideChange:i[0]||(i[0]=_=>g())},{default:n(()=>[(c(!0),k(B,null,S(o.value,(_,K)=>(c(),y(e(N),{key:"banner_".concat(K)},{default:n(()=>[t(e(r),{src:_.imageUrl,loading:"lazy"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["modules"])):(c(),y(e(r),{key:1,src:e(l)("/home/banner.webp")},null,8,["src"])),Y,t(Q)],512),t(e(x),{class:"btns-category ion-justify-content-between",style:{"margin-top":"8px"}},{default:n(()=>[t(e(f),{size:"5.95"},{default:n(()=>[t(e(h),{class:"btn-label-lg left","router-link":"/casino"},{default:n(()=>[t(e(r),{class:"btn-img",src:e(l)("/home/casino.webp")},null,8,["src"]),a("div",Z,[t(e(r),{src:e(l)("/tabbar/icon-casino-normal.png")},null,8,["src"]),a("span",ee,w(s.$t("app.tabbar.casino")),1)])]),_:1})]),_:1}),t(e(f),{size:"5.95"},{default:n(()=>[t(e(h),{class:"btn-label-lg right","router-link":"/sports"},{default:n(()=>[t(e(r),{class:"btn-img",src:e(l)("/home/sports.webp")},null,8,["src"]),a("div",te,[t(e(r),{src:e(l)("/tabbar/icon-sports-normal.png")},null,8,["src"]),a("span",ae,w(s.$t("app.tabbar.sports")),1)])]),_:1})]),_:1})]),_:1}),t(e(x),{class:"btns-category ion-justify-content-between"},{default:n(()=>[t(e(f),{size:"2.9"},{default:n(()=>[t(e(h),{class:"btn-label-sm left1"},{default:n(()=>[a("div",ne,[t(e(r),{class:"btn-img",src:e(l)("/home/lottery.webp")},null,8,["src"]),a("div",se,w(s.$t("home.label.lottery")),1)])]),_:1})]),_:1}),t(e(f),{size:"2.9"},{default:n(()=>[t(e(h),{class:"btn-label-sm left2"},{default:n(()=>[a("div",le,[t(e(r),{class:"btn-img",src:e(l)("/home/racing.webp")},null,8,["src"]),a("div",re,w(s.$t("home.label.racing")),1)])]),_:1})]),_:1}),t(e(f),{size:"2.9"},{default:n(()=>[t(e(h),{class:"btn-label-sm right2"},{default:n(()=>[a("div",oe,[t(e(r),{class:"btn-img",src:e(l)("/home/updown.webp")},null,8,["src"]),a("div",ie,w(s.$t("home.label.updown")),1)])]),_:1})]),_:1}),t(e(f),{size:"2.9"},{default:n(()=>[t(e(h),{class:"btn-label-sm right1"},{default:n(()=>[a("div",ce,[t(e(r),{class:"btn-img",src:e(l)("/home/bingo.webp")},null,8,["src"]),a("div",ue,w(s.$t("home.label.bingo")),1)])]),_:1})]),_:1})]),_:1}),t(T,{gameTitle:s.$t("casino.tabs.originals")},null,8,["gameTitle"]),t(T,{gameTitle:s.$t("casino.tabs.slots")},null,8,["gameTitle"]),t(T,{gameTitle:s.$t("casino.tabs.liveCasino")},null,8,["gameTitle"])]),_:1})]),_:1}))}};export{Ce as default};
