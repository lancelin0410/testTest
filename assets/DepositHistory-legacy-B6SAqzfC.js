System.register(["./index-legacy-BizqwEaK.js","./NoData-legacy-B8VsJvGd.js","./deposit-legacy-DrqaKM1T.js"],(function(e,t){"use strict";var a,o,s,i,l,n,d,r,u,c,p,m,g,y,f,h,_,v,w,b,k,C,x,T,L,V,z,N,P,S,j,I,U;return{setters:[e=>{a=e.l,o=e.ab,s=e.r,i=e.X,l=e.t,n=e.j,d=e.w,r=e.u,u=e.d,c=e.f,p=e.q,m=e.s,g=e.aF,y=e.aG,f=e.B,h=e.M,_=e.e,v=e.i,w=e.F,b=e.z,k=e.A,C=e.H,x=e.h,T=e.x,L=e.L,V=e.y,z=e.J,N=e.an,P=e.K,S=e.C,j=e.au},e=>{I=e._},e=>{U=e.a}],execute:function(){var t=document.createElement("style");t.textContent=".deposit-history{background-color:var(--ion-background-color)}.deposit-history .no-data{position:relative;top:10vh}.deposit-history ion-item{margin:8px 0;border-radius:14px}.deposit-history ion-item ion-img{width:30px}.deposit-history ion-item .record-time{font-size:.7rem;line-height:1rem}.deposit-history ion-item .record-order{font-size:.8rem;line-height:1rem}.deposit-history ion-item .record-method{font-size:.7rem;line-height:1rem;color:#b3bec1}.deposit-history ion-item .record-amount{font-weight:1000;color:#ffdf3f}\n",document.head.appendChild(t);const F={slot:"start"},A={class:"record-time"},D={class:"record-order"},E={class:"record-method"},H={slot:"end",class:"record-amount"};e("default",{__name:"DepositHistory",setup(e){const t=a(),{getPublicUrl:M}=S(),q=o({status:0,timeType:1,pageNum:1,pageSize:10,order:0,lang:"en-US"}),B=s([]);i((async()=>{t.barLoading=!0,await G(),t.barLoading=!1}));const G=async()=>{t.fullLoading=!0;const e=await U({status:q.status,timeType:q.timeType});if("00000"===e.code)B.value=e.data.list;else{const t=await l.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await t.present()}t.fullLoading=!1};return(e,a)=>(u(),n(r(k),{class:"deposit-history"},{default:d((()=>[c(r(b),null,{default:d((()=>[c(r(p),null,{default:d((()=>[c(r(m),null,{default:d((()=>[c(r(g),{modelValue:q.timeType,"onUpdate:modelValue":a[0]||(a[0]=e=>q.timeType=e),interface:"action-sheet",onIonChange:G},{default:d((()=>[c(r(y),{value:1},{default:d((()=>[f("Today")])),_:1}),c(r(y),{value:2},{default:d((()=>[f("Past 1 day")])),_:1}),c(r(y),{value:3},{default:d((()=>[f("Past 7 days")])),_:1}),c(r(y),{value:4},{default:d((()=>[f("Past 30 days")])),_:1})])),_:1},8,["modelValue"])])),_:1}),c(r(m),null,{default:d((()=>[c(r(g),{modelValue:q.status,"onUpdate:modelValue":a[1]||(a[1]=e=>q.status=e),interface:"action-sheet",onIonChange:G},{default:d((()=>[c(r(y),{value:0},{default:d((()=>[f("All status")])),_:1}),c(r(y),{value:1},{default:d((()=>[f("Success")])),_:1}),c(r(y),{value:2},{default:d((()=>[f("Fail")])),_:1}),c(r(y),{value:3},{default:d((()=>[f("Pending")])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),r(t).barLoading||0==B.value.length?(u(),n(I,{key:0,class:"no-data",desc:e.$t("deposit.message.nodata")},null,8,["desc"])):(u(),n(r(h),{key:1,lines:"none"},{default:d((()=>[(u(!0),_(w,null,v(B.value,((e,t)=>(u(),n(r(C),{key:t},{default:d((()=>[x("div",F,[1==e.status?(u(),n(r(T),{key:0,src:r(M)("/icon_wallet/icon-succeed.png")},null,8,["src"])):3==e.status?(u(),n(r(T),{key:1,src:r(M)("/icon_wallet/icon-pending.png")},null,8,["src"])):(u(),n(r(T),{key:2,src:r(M)("/icon_wallet/icon-fail.png")},null,8,["src"]))]),c(r(L),null,{default:d((()=>[x("div",A,V(e.gmtCreate),1),x("div",D,[f(" OrderId: "+V(e.tradeNo)+" ",1),c(r(z),{class:"btn-copy",icon:r(N),onClick:P((t=>(async e=>{navigator.clipboard.writeText(e);const t=await l.create({message:"Copy Success",icon:j,duration:1500,position:"top",color:"success",translucent:!0});await t.present()})(e.tradeNo)),["stop"])},null,8,["icon","onClick"])]),x("div",E,"Method: "+V(e.rechargeTypeI18N),1)])),_:2},1024),x("div",H,V(e.amount),1)])),_:2},1024)))),128))])),_:1}))])),_:1})])),_:1}))}})}}}));
