System.register(["./@ionic-legacy-DiCoN9eI.js","./index-legacy-BX8v6GJM.js","./useDepositStore-legacy-BH_XExCV.js","./@vue-legacy-D17mWR1H.js","./@ionic_components_1-legacy-JpBorfOj.js","./@stencil-legacy-CMekSw7s.js","./@ionic_components_2-legacy-Qqv6OEPb.js","./@capacitor-legacy-0yG8iurR.js","./vue-router-legacy-DS4jc74i.js","./ionicons-legacy-DzPLRO0r.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-itWYr5gS.js","./vue-i18n-legacy-BfYInfwk.js","./@intlify-legacy-DDHA1rkh.js","./jsencrypt-legacy-DGJHbPQ6.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(e,a){"use strict";var l,s,n,t,c,i,o,u,d,r,g,y,p,j,m,h,_;return{setters:[e=>{l=e.d,s=e.N,n=e.j},e=>{t=e.b,c=e.a},e=>{i=e.u},e=>{o=e.H,u=e.P,d=e.C,r=e.E,g=e.J,y=e.O,p=e.M,j=e.B,m=e.I,h=e.i,_=e.S},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".no-data{width:100%;margin:auto}.no-data ion-img{width:50%;margin:0 auto}.no-data .desc{display:block;width:100%;text-align:center}.deposit-history ion-content{padding:16px 8px 0}\n",document.head.appendChild(a);const f={class:"no-data"},v={__name:"NoData",props:{desc:{type:String,default:"No records!"}},setup(e){const{getImgUrl:a}=t();return(n,t)=>(o(),u("div",f,[d(r(l),{src:r(a)("/app/no-data-search.png")},null,8,["src"]),d(r(s),{class:"desc"},{default:g((()=>[y(p(e.desc),1)])),_:1})]))}};e("default",{__name:"DepositHistory",setup(e){const a=c();return i(),h("pageType"),j((async()=>{a.barLoading=!0})),(e,l)=>(o(),m(r(n),{class:"deposit-history"},{default:g((()=>[r(a).barLoading||!e.mailStore.hasMail?(o(),m(v,{key:0,class:"no-data",desc:e.$t("deposit.message.nodata")},null,8,["desc"])):_("",!0)])),_:1}))}})}}}));
