System.register(["./@ionic-legacy-DiCoN9eI.js","./@capacitor-legacy-0yG8iurR.js","./index-legacy-BX8v6GJM.js","./jsencrypt-legacy-DGJHbPQ6.js","./swiper-legacy-D9xoXYTJ.js","./GameSlides-legacy-9UbYzOZ0.js","./@vue-legacy-D17mWR1H.js","./@ionic_components_2-legacy-Qqv6OEPb.js","./@ionic_components_1-legacy-JpBorfOj.js","./@stencil-legacy-CMekSw7s.js","./vue-router-legacy-DS4jc74i.js","./ionicons-legacy-DzPLRO0r.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-itWYr5gS.js","./vue-i18n-legacy-BfYInfwk.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(a,e){"use strict";var l,s,t,i,n,o,c,u,r,d,m,g,b,p,v,y,f,_,h,w,j,x,z,T,$,L,G,P,k,C,B,I,A,S,R,U,Z;return{setters:[a=>{l=a.b,s=a.c,t=a.C,i=a.a,n=a.D,o=a.E,c=a.d,u=a.F,r=a.G,d=a.H,m=a.e,g=a.n,b=a.j},null,a=>{p=a.a,v=a.b,y=a.u},null,a=>{f=a.S,_=a.A,h=a.P,w=a.a},a=>{j=a._},a=>{x=a.H,z=a.P,T=a.C,$=a.J,L=a.E,G=a.F,P=a.Q,k=a.I,C=a.O,B=a.r,I=a.B,A=a.i,S=a.M,R=a.X,U=a.Y},a=>{Z=a.aR},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".casino ion-content{position:relative;--padding-top: 68px;--padding-bottom: 8px;--padding-start: 8px;--padding-end: 8px}.casino ion-content .marquee{visibility:visible;max-width:100vw;max-height:10vh;opacity:1;margin:0 4px 8px}.casino ion-content .swiper{position:relative;width:100%;height:fit-content}.casino ion-content .swiper .swiper-wrapper{display:flex}.casino ion-content .swiper .swiper-wrapper .swiper-slide{max-height:34vh;overflow:hidden;transition:max-height .5s ease}.casino ion-content .swiper .swiper-wrapper .swiper-slide ion-img{width:94vw;border-radius:12px;overflow:hidden}.casino ion-content .swiper .swiper-pagination-bullet{--bullet-background: #fff;--bullet-background-active: #fff;--swiper-pagination-bullet-inactive-opacity: .5;border:1px solid #333}\n",document.head.appendChild(e);const E={class:"lobby"},F={__name:"Lobby",setup:a=>(a,e)=>(x(),z("div",E,[T(j,{gameTitle:a.$t("casino.tabs.originals")},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.hotGames")},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.newReleases")},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.slots")},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.liveCasino")},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.providers"),itemType:"button"},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.featureBuyIn")},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.themes"),itemType:"button"},null,8,["gameTitle"]),T(j,{gameTitle:a.$t("casino.tabs.tableGame")},null,8,["gameTitle"])]))},M={class:"game-list"},N={__name:"GameList",setup:a=>(a,e)=>(x(),z("div",M,[T(L(i),null,{default:$((()=>[T(L(l),{class:"ion-justify-content-start"},{default:$((()=>[(x(!0),z(G,null,P(Array.from({length:20},((a,e)=>e)),(a=>(x(),k(L(s),{size:"4"},{default:$((()=>[T(L(t),{animated:!0,class:"demo",style:{height:"20vh"}})])),_:1})))),256))])),_:1})])),_:1})]))},V={class:"game-list-filter"},H={__name:"GameListFilter",setup:a=>(a,e)=>(x(),z("div",V,[T(L(i),null,{default:$((()=>[T(L(l),null,{default:$((()=>[T(L(s),null,{default:$((()=>[T(L(n),{label:"Sort By:",interface:"action-sheet"},{default:$((()=>[T(L(o),{value:"popular"},{default:$((()=>[C("Popular")])),_:1}),T(L(o),{value:"asc"},{default:$((()=>[C("A-Z")])),_:1}),T(L(o),{value:"desc"},{default:$((()=>[C("Z-A")])),_:1}),T(L(o),{value:"new"},{default:$((()=>[C("New")])),_:1})])),_:1})])),_:1}),T(L(s),null,{default:$((()=>[T(L(n),{label:"Providers:",interface:"action-sheet",multiple:!0},{default:$((()=>[T(L(o),{value:"popular"},{default:$((()=>[C("Popular")])),_:1}),T(L(o),{value:"asc"},{default:$((()=>[C("A-Z")])),_:1}),T(L(o),{value:"desc"},{default:$((()=>[C("Z-A")])),_:1}),T(L(o),{value:"desc"},{default:$((()=>[C("New")])),_:1})])),_:1})])),_:1})])),_:1}),T(L(l),{class:"ion-justify-content-start"},{default:$((()=>[(x(!0),z(G,null,P(Array.from({length:20},((a,e)=>e)),(a=>(x(),k(L(s),{size:"4"},{default:$((()=>[T(L(t),{animated:!0,class:"demo",style:{height:"20vh"}})])),_:1})))),256))])),_:1})])),_:1})]))},O={class:"menu-item"},q={__name:"MenuItem",setup:a=>(a,e)=>(x(),z("div",O,[T(L(i),null,{default:$((()=>[T(L(l),{class:"ion-justify-content-start"},{default:$((()=>[(x(!0),z(G,null,P(Array.from({length:20},((a,e)=>e)),(a=>(x(),k(L(s),{size:"6"},{default:$((()=>[T(L(t),{animated:!0,class:"demo",style:{height:"7vh"}})])),_:1})))),256))])),_:1})])),_:1})]))};a("default",{__name:"Casino",setup(a){const e=p(),{getPublicUrl:l}=y(),{preLoadImg:s}=v(),t=B("casino.tabs.lobby"),i={"casino.tabs.lobby":F,"casino.tabs.originals":N,"casino.tabs.topPicks":N,"casino.tabs.hotGames":N,"casino.tabs.newReleases":N,"casino.tabs.slots":H,"casino.tabs.liveCasino":H,"casino.tabs.featureBuyIn":H,"casino.tabs.providers":q,"casino.tabs.tableGame":H,"casino.tabs.themes":q},n=B([]);I((async()=>{await(async()=>{})();for(const[a,e]of n.value.entries())a<=1&&await s(e.imageUrl);e.startLoading=!1}));const o=A("setBackgroundOpacity"),j=a=>{o(Math.round(a.detail.scrollTop/120*100)/100)};return(a,e)=>(x(),k(L(b),{class:"casino"},{default:$((()=>[T(L(g),{"scroll-events":!0,onIonScroll:j},{default:$((()=>[n.value.length>0?(x(),k(L(f),{key:0,modules:[L(_),L(h),L(Z)],centeredSlides:!0,pagination:{clickable:!0},autoplay:!0,loop:!0,lazyPreloadPrevNext:1},{default:$((()=>[(x(!0),z(G,null,P(n.value,((a,e)=>(x(),k(L(w),{key:`banner_${e}`},{default:$((()=>[T(L(c),{src:a.imageUrl,loading:"lazy"},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["modules"])):(x(),k(L(c),{key:1,src:L(l)("/home/banner.webp")},null,8,["src"])),T(L(u),{placeholder:"Search games"}),T(L(r),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a),mode:"ios",scrollable:!0},{default:$((()=>[T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.lobby",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-lobby.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.lobby")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.originals",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-originals.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.originals")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.topPicks",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-topPicks.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.topPicks")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.hotGames",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-hotGames.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.hotGames")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.newReleases",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-newReleases.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.newReleases")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.slots",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-slots.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.slots")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.liveCasino",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-liveCasino.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.liveCasino")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.featureBuyIn",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-featureBuyIn.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.featureBuyIn")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.providers",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-providers.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.providers")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.tableGame",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-tableGame.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.tableGame")),1)])),_:1}),T(L(d),{class:"ion-text-capitalize",value:"casino.tabs.themes",layout:"icon-start"},{default:$((()=>[T(L(m),{size:"small",src:L(l)("/icon_gameLabel/icon-themes.svg")},null,8,["src"]),C(" "+S(a.$t("casino.tabs.themes")),1)])),_:1})])),_:1},8,["modelValue"]),(x(),k(R,null,[(x(),k(U(i[t.value])))],1024))])),_:1})])),_:1}))}})}}}));
