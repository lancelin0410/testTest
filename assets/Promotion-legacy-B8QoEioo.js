System.register(["./index-legacy-BizqwEaK.js","./NoData-legacy-B8VsJvGd.js"],(function(t,o){"use strict";var e,n,a,i,r,l,s,d,p,u,m,c,g,v,f,b,x,h,y,_,w,k,C,z,L,j,I,P,D,V;return{setters:[t=>{e=t.l,n=t.r,a=t.X,i=t.j,r=t.w,l=t.u,s=t.D,d=t.a8,p=t.t,u=t.d,m=t.f,c=t.T,g=t.U,v=t.B,f=t.M,b=t.e,x=t.i,h=t.F,y=t.z,_=t.A,w=t.H,k=t.K,C=t.L,z=t.x,L=t.q,j=t.s,I=t.h,P=t.y,D=t.v},t=>{V=t._}],execute:function(){var o=document.createElement("style");o.textContent=".promotion ion-content{position:relative;--padding-top: 68px;--padding-bottom: 8px;--padding-start: 8px;--padding-end: 8px}.promotion ion-content ion-segment.ios{background-color:#323738;border-radius:12px;margin-top:12px}.promotion ion-content .promo-item{position:relative;height:fit-content;margin-bottom:12px;border-radius:8px}.promotion ion-content .promo-item::part(native){padding:0;--ion-safe-area-right: 0}.promotion ion-content .promo-item ion-label{position:relative;margin:0}.promotion ion-content .promo-item ion-label ion-img{border-radius:8px;overflow:hidden}.promotion ion-content .promo-item ion-label .promo-content{margin:12px}.promotion ion-content .no-data{position:relative;top:10vh}.promotion ion-content .btn-in-progress{--background: #464f50;--background-activated: #464f50;--border-radius: 8px;--color: rgb(36, 238, 137);font-weight:800}.promotion ion-content .btn-in-progress::part(native){padding:12px 16px}\n",document.head.appendChild(o);const q={style:{"font-size":"1rem","font-weight":"800"}},A={style:{"font-size":"0.8rem"}};t("default",{__name:"Promotion",setup(t){const o=s(),T=e(),U=n("latest"),B=n({latest:[],archive:[]}),E=async()=>{const t=await await d(0);if("00000"===t.code)B.value[U.value]=t.data.list||[];else{const o=await p.create({message:t.msg,duration:1500,position:"top",color:"danger",translucent:!0});await o.present()}};a((async()=>{T.barLoading=!0,await E(),T.barLoading=!1}));const F=async()=>{"latest"==U.value&&await E(),U.value};return(t,e)=>(u(),i(l(_),{class:"promotion"},{default:r((()=>[m(l(y),null,{default:r((()=>[m(l(c),{modelValue:U.value,"onUpdate:modelValue":e[0]||(e[0]=t=>U.value=t),mode:"ios",onIonChange:F},{default:r((()=>[m(l(g),{value:"latest"},{default:r((()=>[v("Latest Promotion")])),_:1}),m(l(g),{value:"archive"},{default:r((()=>[v("Archived")])),_:1})])),_:1},8,["modelValue"]),l(T).barLoading||0==B.value[U.value].length?(u(),i(V,{key:0,class:"no-data",desc:t.$t("mail.message.nodata")},null,8,["desc"])):(u(),i(l(f),{style:{"margin-top":"16px"},key:U.value},{default:r((()=>[(u(!0),b(h,null,x(B.value[U.value],(t=>(u(),i(l(w),{key:t.id,class:"promo-item",lines:"none",onClick:k((e=>(async t=>{o.push({name:"PromotionDetail",params:{promoId:t.id},query:{title:t.title}})})(t)),["stop"])},{default:r((()=>[m(l(C),null,{default:r((()=>[m(l(z),{src:t.h5Image},null,8,["src"]),m(l(L),{class:"promo-content ion-justify-content-between"},{default:r((()=>[m(l(j),{size:"auto"},{default:r((()=>[I("h4",q,P(t.title||""),1),I("div",A,P(t.timeText||""),1)])),_:2},1024),m(l(j),{size:"auto"},{default:r((()=>[m(l(D),{class:"btn-in-progress"},{default:r((()=>[v("In Progress")])),_:1})])),_:1})])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}))])),_:1})])),_:1}))}})}}}));