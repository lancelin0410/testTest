System.register(["./vue-router-legacy-tg1qdIBO.js","./@ionic-legacy-DJIsya6n.js","./index-legacy-bZKtyn7e.js","./@vue-legacy-D643Ih6I.js","./@ionic_components_1-legacy-C2GjtunC.js","./@stencil-legacy-Dkr4NQJU.js","./@ionic_components_2-legacy-DV709hm9.js","./@capacitor-legacy-0yG8iurR.js","./ionicons-legacy-BylianOU.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-DURUUAUq.js","./jsencrypt-legacy-DGJHbPQ6.js","./vue-i18n-legacy-C8AAcyDP.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-Bb45XN-u.js","./rxjs-legacy-CA8OYncU.js","./tslib-legacy-BRpw1qYg.js"],(function(e,l){"use strict";var t,n,a,i,o,r,s,c,u,d,g,m,p,y,b,f,h,j,v,w,x,_,k,I,q;return{setters:[e=>{t=e.u},e=>{n=e.U,a=e.m,i=e.p,o=e.q,r=e.f,s=e.I,c=e.d,u=e.n,d=e.j},e=>{g=e.c,m=e.b},e=>{p=e.r,y=e.k,b=e.C,f=e.w,h=e.e,j=e.J,v=e.K,w=e.G,x=e.I,_=e.D,k=e.P,I=e.Q,q=e.U},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".game-web{background-color:var(--ion-background-color)}.game-web ion-header{position:relative;height:54px;display:flex;align-items:center}.game-web ion-header ion-back-button::part(native){padding:0}.game-web ion-header .btn-deposit{--background: linear-gradient(90deg, #24ee89, #9fe871);--background-activated: linear-gradient(40deg, #24ee89, #9fe871);--border-radius: 8px;--color: #000000;--box-shadow: 0 0 12px #23ee884d, 0 -2px #1dca6a inset;height:40px;margin-right:12px}.game-web ion-header .btn-deposit::part(native){font-weight:800}.game-web ion-content{overflow:hidden}.game-web ion-content ion-img.loading-img{position:absolute;width:100vw;height:100vh;top:50%;left:50%;transform:translate(-50%,-50%)}.game-web ion-content ion-img.loading-img::part(image){object-fit:cover}\n",document.head.appendChild(l);const U=["src","srcdoc"];e("default",{__name:"GameWeb",setup(e){const l=t(),C=g(),{getPublicUrl:D}=m(),E=p(null),G=p(!0),P=y({id:0,url:""}),T=()=>{l.query.gameId&&(P.id=l.query.gameId),l.query.url&&(P.url=decodeURIComponent(l.query.url))};return b((()=>T())),f((()=>l.query.gameId),(()=>T())),h((()=>{E.value.addEventListener("load",(()=>{setTimeout((()=>G.value=!1),1e3)}),{once:!0})})),n((()=>{C.getUserTotalInfo()})),(e,l)=>(x(),j(w(d),{class:"game-web"},{default:v((()=>[_(w(s),null,{default:v((()=>[_(w(a),{style:{padding:"0 4px"}},{default:v((()=>[_(w(i),{slot:"start"},{default:v((()=>[_(w(o),{mode:"ios",text:"","default-href":"/",color:"light"})])),_:1}),_(w(r),{slot:"end",class:"btn-deposit",size:"small","router-link":"/account/deposit"},{default:v((()=>[k("Deposit")])),_:1})])),_:1})])),_:1}),_(w(u),null,{default:v((()=>[(x(),I("iframe",{ref_key:"iframe",ref:E,key:P.id,src:/^http/.test(P.url)?P.url:null,srcdoc:/^http/.test(P.url)?null:P.url,style:{width:"100%",height:"100%",border:"none"}},null,8,U)),G.value?(x(),j(w(c),{key:0,class:"loading-img",src:w(D)("/home/img-game-loading.png")},null,8,["src"])):q("",!0)])),_:1})])),_:1}))}})}}}));
