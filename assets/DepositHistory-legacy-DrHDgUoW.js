System.register(["./@vue-legacy-D643Ih6I.js","./@ionic-legacy-DJIsya6n.js","./ionicons-legacy-BylianOU.js","./index-legacy-bZKtyn7e.js","./NoData-legacy-B-Q9SzKO.js","./deposit-legacy-D7bdSfPl.js","./@ionic_components_1-legacy-C2GjtunC.js","./@stencil-legacy-Dkr4NQJU.js","./@ionic_components_2-legacy-DV709hm9.js","./@capacitor-legacy-0yG8iurR.js","./vue-router-legacy-tg1qdIBO.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-DURUUAUq.js","./jsencrypt-legacy-DGJHbPQ6.js","./vue-i18n-legacy-C8AAcyDP.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-Bb45XN-u.js","./rxjs-legacy-CA8OYncU.js","./tslib-legacy-BRpw1qYg.js"],(function(e,t){"use strict";var l,a,o,s,n,i,c,u,d,r,g,y,p,m,f,h,_,v,j,b,w,k,C,x,T,N,P,V,I,L,S,U,z;return{setters:[e=>{l=e.k,a=e.r,o=e.J,s=e.K,n=e.G,i=e.I,c=e.D,u=e.P,d=e.Q,r=e.R,g=e.F,y=e.M,p=e.N,m=e.O},e=>{f=e.o,h=e.t,_=e.b,v=e.c,j=e.N,b=e.O,w=e.C,k=e.n,C=e.j,x=e.D,T=e.d,N=e.l,P=e.e},e=>{V=e.i,I=e.l},e=>{L=e.u,S=e.b},e=>{U=e._},e=>{z=e.b},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".deposit-history{background-color:var(--ion-background-color)}.deposit-history .no-data{position:relative;top:10vh}.deposit-history ion-item{margin:8px 0;border-radius:14px}.deposit-history ion-item ion-img{width:30px}.deposit-history ion-item .record-time{font-size:.7rem;line-height:1rem}.deposit-history ion-item .record-order{font-size:.8rem;line-height:1rem}.deposit-history ion-item .record-method{font-size:.7rem;line-height:1rem;color:#b3bec1}.deposit-history ion-item .record-amount{font-weight:1000;color:#ffdf3f}\n",document.head.appendChild(t);const D={slot:"start"},O={class:"record-time"},F={class:"record-order"},M={class:"record-method"},R={slot:"end",class:"record-amount"};e("default",{__name:"DepositHistory",setup(e){const t=L(),{getPublicUrl:A}=S(),E=l({status:0,timeType:1,pageNum:1,pageSize:10,order:0,lang:"en-US"}),G=a([]);f((async()=>{t.barLoading=!0,await H(),t.barLoading=!1}));const H=async()=>{t.fullLoading=!0;const e=await z({status:E.status,timeType:E.timeType});if("00000"===e.code)G.value=e.data.list;else{const t=await h.create({message:e.msg||e.code,duration:1500,position:"top",color:"danger",translucent:!0});await t.present()}t.fullLoading=!1};return(e,l)=>(i(),o(n(C),{class:"deposit-history"},{default:s((()=>[c(n(k),null,{default:s((()=>[c(n(_),null,{default:s((()=>[c(n(v),null,{default:s((()=>[c(n(j),{modelValue:E.timeType,"onUpdate:modelValue":l[0]||(l[0]=e=>E.timeType=e),interface:"action-sheet",onIonChange:H},{default:s((()=>[c(n(b),{value:1},{default:s((()=>[u("Today")])),_:1}),c(n(b),{value:2},{default:s((()=>[u("Past 1 day")])),_:1}),c(n(b),{value:3},{default:s((()=>[u("Past 7 days")])),_:1}),c(n(b),{value:4},{default:s((()=>[u("Past 30 days")])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(n(v),null,{default:s((()=>[c(n(j),{modelValue:E.status,"onUpdate:modelValue":l[1]||(l[1]=e=>E.status=e),interface:"action-sheet",onIonChange:H},{default:s((()=>[c(n(b),{value:0},{default:s((()=>[u("All status")])),_:1}),c(n(b),{value:1},{default:s((()=>[u("Success")])),_:1}),c(n(b),{value:2},{default:s((()=>[u("Fail")])),_:1}),c(n(b),{value:3},{default:s((()=>[u("Pending")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),n(t).barLoading||0==G.value.length?(i(),o(U,{key:0,class:"no-data",desc:e.$t("deposit.message.nodata")},null,8,["desc"])):(i(),o(n(w),{key:1,lines:"none"},{default:s((()=>[(i(!0),d(g,null,r(G.value,((e,t)=>(i(),o(n(x),{key:t},{default:s((()=>[y("div",D,[1==e.status?(i(),o(n(T),{key:0,src:n(A)("/icon_wallet/icon-succeed.png")},null,8,["src"])):[0,3].includes(e.status)?(i(),o(n(T),{key:1,src:n(A)("/icon_wallet/icon-pending.png")},null,8,["src"])):(i(),o(n(T),{key:2,src:n(A)("/icon_wallet/icon-fail.png")},null,8,["src"]))]),c(n(N),null,{default:s((()=>[y("div",O,p(e.gmtCreate),1),y("div",F,[u(" OrderId: "+p(e.tradeNo)+" ",1),c(n(P),{class:"btn-copy",icon:n(V),onClick:m((t=>(async e=>{navigator.clipboard.writeText(e);const t=await h.create({message:"Copy Success",icon:I,duration:1500,position:"top",color:"success",translucent:!0});await t.present()})(e.tradeNo)),["stop"])},null,8,["icon","onClick"])]),y("div",M,"Method: "+p(e.rechargeTypeI18N),1)])),_:2},1024),y("div",R,p(e.amount),1)])),_:2},1024)))),128))])),_:1}))])),_:1})])),_:1}))}})}}}));
