System.register(["./@ionic-legacy-B1eyMRq9.js","./index-legacy--Yzacnui.js","./@vue-legacy-6TVRAZls.js","./@stencil-legacy-B3F1rWbF.js","./swiper-legacy-BReLWcx3.js","./@capacitor-legacy-0yG8iurR.js","./vue-router-legacy-B4HtFwOH.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-DCUGDJ2q.js","./vue-i18n-legacy-DIA3POTx.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(e,t){"use strict";var n,a,l,i,r,o,s,c,d,b,p,g,u,m,h,f,v,x,w,y,_,k,j,z,q,$,A,P,I,S,L,U,C;return{setters:[e=>{n=e.e,a=e.r,l=e.c,i=e.t,r=e.s,o=e.b,s=e.d,c=e.u,d=e.v,b=e.i},e=>{p=e.u,g=e.a,u=e.b,m=e.g},e=>{h=e.r,f=e.b,v=e.x,x=e.o,w=e.G,y=e.K,_=e.B,k=e.I,j=e.M,z=e.F,q=e.L,$=e.H,A=e.D,P=e.A,I=e.P},null,e=>{S=e.S,L=e.A,U=e.P,C=e.a},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".marquee{position:relative;margin:8px 4px}.marquee ion-toolbar{--min-height: 10vh;--padding-start: 0px;--padding-end: 0px;--padding-top: 0px;--padding-bottom: 0px;position:relative}.marquee .roll-box{position:relative;transition:all .2s ease-in-out;margin:0 8px 0 4px}.marquee .roll-box .roll-img,.marquee .roll-box .roll-img div{position:relative;width:fit-content;display:flex}.marquee .roll-box .roll-img div ion-img::part(image){width:100px;aspect-ratio:440/533;border-radius:12px;overflow:hidden}.home{padding:4px!important}.home ion-content{position:relative}.home ion-content .swiper{position:relative;width:100%;height:fit-content}.home ion-content .swiper .swiper-wrapper{display:flex}.home ion-content .swiper .swiper-wrapper .swiper-slide{max-height:34vh;overflow:hidden;transition:max-height .5s ease}.home ion-content .swiper .swiper-wrapper .swiper-slide ion-img{width:94vw;border-radius:12px;overflow:hidden}.home ion-content .swiper .swiper-pagination-bullet{--bullet-background: #fff;--bullet-background-active: #fff;--swiper-pagination-bullet-inactive-opacity: .5;border:1px solid #333}.home ion-content .marquee{max-width:100vw;margin:0 4px 8px}.home ion-content .btn-label-lg{border-radius:10px;background-color:#323738;height:14vh;transition:.5s}.home ion-content .btn-label-lg .btn-title{position:absolute;display:flex;align-items:center;top:-8px;left:-4px;font-weight:800;font-size:.8rem}.home ion-content .btn-label-lg .btn-title ion-img{width:28px}.home ion-content .btn-label-lg .btn-img{position:relative;right:-8px;bottom:-8px}.home ion-content .btn-label-lg.left{--background: linear-gradient(to left, rgb(44, 80, 64), transparent 75%);--background-activated: linear-gradient(to top, rgb(44, 80, 64), transparent 75%)}.home ion-content .btn-label-lg.right{--background: linear-gradient(to left, rgb(88, 46, 89), transparent 75%);--background-activated: linear-gradient(to left, rgb(88, 46, 89), transparent 75%)}.home ion-content .btn-label-sm{border-radius:10px;background-color:#323738;height:10vh;transition:.5s}.home ion-content .btn-label-sm::part(native){margin:0 2px;padding:12px}.home ion-content .btn-label-sm .btn-inner{display:flex;flex-direction:column}.home ion-content .btn-label-sm .btn-img::part(image){width:16vw}.home ion-content .btn-label-sm .btn-title{font-weight:800;font-size:.8rem}.home ion-content .btn-label-sm.left1{--background: linear-gradient(to left, rgb(66, 83, 48), transparent 75%);--background-activated: linear-gradient(to top, rgb(66, 83, 48), transparent 75%)}.home ion-content .btn-label-sm.left2{--background: linear-gradient(to left, rgb(80, 65, 48), transparent 75%);--background-activated: linear-gradient(to top, rgb(80, 65, 48), transparent 75%)}.home ion-content .btn-label-sm.right2{--background: linear-gradient(to left, rgb(45, 79, 49), transparent 75%);--background-activated: linear-gradient(to top, rgb(45, 79, 49), transparent 75%)}.home ion-content .btn-label-sm.right1{--background: linear-gradient(to left, rgb(71, 56, 111), transparent 75%);--background-activated: linear-gradient(to top, rgb(71, 56, 111), transparent 75%)}\n",document.head.appendChild(t);const H={class:"marquee"},B={__name:"Marquee",setup(e){const{getPublicUrl:t}=p(),i=h(null),r=h(null);let o;const s=async()=>{if(o&&clearInterval(o),0==r.value.offsetWidth||0==i.value.offsetWidth)return await(e=500,new Promise((t=>setTimeout(t,e)))),void s();var e;const t=1e5,n=l().addElement(r.value).duration(t).fromTo("transform","translateX(0)","translateX(-100%)");n.play(),o=setInterval((()=>{n.stop(),n.play()}),5e4)};let c;return f((()=>{c=new ResizeObserver((()=>s())),c.observe(r.value.lastChild)})),v((()=>s())),x((()=>{o&&clearInterval(o),c&&c.disconnect()})),(e,l)=>(w(),y("div",H,[_(A(a),null,{default:k((()=>[j("div",{slot:"primary",ref_key:"rollBox",ref:i,class:"roll-box"},[j("div",{ref_key:"rollImg",ref:r,class:"roll-img",onAnimationstart:l[0]||(l[0]=(...t)=>e.handleAnimationStar&&e.handleAnimationStar(...t))},[j("div",null,[(w(!0),y(z,null,q(Array.from({length:52},((e,t)=>t+1)),(e=>(w(),$(A(n),{src:A(t)(`/game_demo/game_${e}.png`)},null,8,["src"])))),256))]),j("div",null,[(w(!0),y(z,null,q(Array.from({length:52},((e,t)=>t+1)),(e=>(w(),$(A(n),{src:A(t)(`/game_demo/game_${e}.png`)},null,8,["src"])))),256))])],544)],512)])),_:1})]))}},D=j("h4",null,"Hot Games",-1),E={class:"btn-title"},G={class:"ion-text-uppercase"},M={class:"btn-title"},T={class:"ion-text-uppercase"},W={class:"btn-inner"},X={class:"btn-title ion-text-uppercase"},F={class:"btn-inner"},K={class:"btn-title ion-text-uppercase"},N={class:"btn-inner"},O={class:"btn-title ion-text-uppercase"},R={class:"btn-inner"},J={class:"btn-title ion-text-uppercase"};e("default",{__name:"Home",setup(e){const t=g(),{preLoadImg:a}=u(),{getPublicUrl:l}=p(),f=h([]);return P((async()=>{await(async()=>{const e=await m();if("200"===e.state)f.value=e.resultData.bannerList||[];else{const t=await i.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await t.present()}})();for(const[e,t]of f.value.entries())e<=1&&await a(t.imageUrl);t.startLoading=!1})),(e,t)=>(w(),$(A(b),{class:"home"},{default:k((()=>[_(A(d),null,{default:k((()=>[_(A(S),{modules:[A(L),A(U),A(r)],centeredSlides:!0,pagination:{clickable:!0},autoplay:!0,loop:!0,lazyPreloadPrevNext:1},{default:k((()=>[(w(!0),y(z,null,q(f.value,((e,t)=>(w(),$(A(C),{key:`banner_${t}`},{default:k((()=>[_(A(n),{src:e.imageUrl,loading:"lazy"},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["modules"]),D,_(B),_(A(o),null,{default:k((()=>[_(A(s),{size:"6"},{default:k((()=>[_(A(c),{class:"btn-label-lg left","router-link":"/casino"},{default:k((()=>[_(A(n),{class:"btn-img",src:A(l)("/home/casino.webp")},null,8,["src"]),j("div",E,[_(A(n),{src:A(l)("/tabbar/icon-tabbar-3-normal.png")},null,8,["src"]),j("span",G,I(e.$t("app.tabbar.casino")),1)])])),_:1})])),_:1}),_(A(s),{size:"6"},{default:k((()=>[_(A(c),{class:"btn-label-lg right","router-link":"/sports"},{default:k((()=>[_(A(n),{class:"btn-img",src:A(l)("/home/sports.webp")},null,8,["src"]),j("div",M,[_(A(n),{src:A(l)("/tabbar/icon-tabbar-4-normal.png")},null,8,["src"]),j("span",T,I(e.$t("app.tabbar.sports")),1)])])),_:1})])),_:1})])),_:1}),_(A(o),null,{default:k((()=>[_(A(s),{size:"3"},{default:k((()=>[_(A(c),{class:"btn-label-sm left1"},{default:k((()=>[j("div",W,[_(A(n),{class:"btn-img",src:A(l)("/home/lottery.webp")},null,8,["src"]),j("div",X,I(e.$t("home.label.lottery")),1)])])),_:1})])),_:1}),_(A(s),{size:"3"},{default:k((()=>[_(A(c),{class:"btn-label-sm left2"},{default:k((()=>[j("div",F,[_(A(n),{class:"btn-img",src:A(l)("/home/racing.webp")},null,8,["src"]),j("div",K,I(e.$t("home.label.racing")),1)])])),_:1})])),_:1}),_(A(s),{size:"3"},{default:k((()=>[_(A(c),{class:"btn-label-sm right2"},{default:k((()=>[j("div",N,[_(A(n),{class:"btn-img",src:A(l)("/home/updown.webp")},null,8,["src"]),j("div",O,I(e.$t("home.label.updown")),1)])])),_:1})])),_:1}),_(A(s),{size:"3"},{default:k((()=>[_(A(c),{class:"btn-label-sm right1"},{default:k((()=>[j("div",R,[_(A(n),{class:"btn-img",src:A(l)("/home/bingo.webp")},null,8,["src"]),j("div",J,I(e.$t("home.label.bingo")),1)])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}))}})}}}));
