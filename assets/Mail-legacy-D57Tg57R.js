System.register(["./@vue-legacy-BTGNLlqW.js","./@ionic-legacy-BCXuxJR0.js","./ionicons-legacy-D1xXFoHn.js","./index-legacy-Cjm6cWs0.js","./pinia-legacy-BNyWqaqq.js","./NoData-legacy-CL7-OIx-.js","./@stencil-legacy-B3F1rWbF.js","./@capacitor-legacy-0yG8iurR.js","./vue-router-legacy-BIhpig1s.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./jsencrypt-legacy-DGJHbPQ6.js","./vue-i18n-legacy-3mSkocii.js","./@intlify-legacy-DDHA1rkh.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(e,a){"use strict";var l,i,s,n,o,c,r,u,d,m,g,f,h,p,y,v,w,b,j,_,L,k,x,C,z,D,S,I,M,E,T,U,A,P,N,O,V;return{setters:[e=>{l=e.r,i=e.c,s=e.I,n=e.J,o=e.E,c=e.H,r=e.a,u=e.U,d=e.C,m=e.O,g=e.P,f=e.Q,h=e.F,p=e.S,y=e.L,v=e.M,w=e.Y,b=e.N},e=>{j=e.K,_=e.H,L=e.J,k=e.E,x=e.o,C=e.k,z=e.D,D=e.m,S=e.b,I=e.d,M=e.g,E=e.f},e=>{T=e.g,U=e.h},e=>{A=e.r,P=e.u,N=e.b},e=>{O=e.d},e=>{V=e._},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".mail{background-color:var(--ion-background-color)}.mail ion-segment.ios{background-color:#323738;border-radius:12px}.mail .mail-item{position:relative;height:fit-content;margin-bottom:12px;border-radius:8px}.mail .mail-item .mail-content{position:relative;width:100%;height:fit-content;padding:12px 8px}.mail .mail-item .mail-content .mail-detail{color:#b3bec1;margin:8px 2px;text-align:justify;white-space:pre;overflow:hidden;max-height:4rem}.mail .mail-item .mail-content .mail-detail.show-all{max-height:fit-content}.mail .no-data{position:relative;top:10vh}.mail .btn-show-all{margin-left:auto}.mail .btn-show-all::part(native){padding:0}.mail .btn-view-more{--background: #464f50;--background-activated: #464f50;--border-radius: 8px;--color: rgb(36, 238, 137)}.mail .btn-del{font-size:1.4rem}\n",document.head.appendChild(a);const G=O("mail",(()=>{const e=l([]),a=l([]),t=i((()=>e.value.some((e=>!e.readStatus))));return{mailList:e,hasUnread:t,getMailList:async()=>{const a=await A({url:"/app/member/h5/siteMsg",method:"GET",params:t});var t;"00000"===a.code&&(e.value=a.data.list||[],e.value.forEach((e=>e.showDetail=!1)))},announceList:a,getAnnounceList:async()=>{const e=await A({url:"/app/member/h5/announce",method:"GET",params:t});var t;"00000"===e.code&&(a.value=e.data.list||[],a.value.forEach((e=>e.showDetail=!1)))}}}),{persistedState:{persist:!1}}),H={style:{"font-size":"0.8rem"}},J={style:{"font-size":"1rem","font-weight":"800"}},F={style:{"font-size":"0.8rem"}},K={style:{"font-size":"1rem","font-weight":"800"}};e("default",{__name:"Mail",setup(e){const a=P(),i=G(),{getPublicUrl:O}=N(),Q=l("system"),Y={system:"mailList",activities:"announceList"};j((async()=>{a.barLoading=!0,await i.getMailList(),a.barLoading=!1}));const $=async()=>{"system"==Q.value&&await i.getMailList(),"activities"==Q.value&&await i.getAnnounceList()},q=async e=>{var a;e.showDetail=!e.showDetail,mail.readStatus||("system"==Q.value&&(a={id:e.detailId},A({url:"/app/member/h5/siteMsg/read",method:"POST",data:a})),"activities"==Q.value&&readAnnounce({id:e.mainId}))},B=async e=>{a.barLoading=!0;const l=await function(e){return A({url:"/app/member/h5/siteMsg/del",method:"PUT",data:e})}({mailId:e.detailId});if("00000"===l.code){await i.getMailList(),a.barLoading=!1;const e=await toastController.create({message:t("mail.message.deleteSuccess"),duration:1500,position:"top",color:"success",translucent:!0});await e.present()}else{const e=await toastController.create({message:l.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present(),a.barLoading=!1}};return(e,t)=>(c(),s(o(C),{class:"mail"},{default:n((()=>[r(d(o(x),null,{default:n((()=>[d(o(_),{modelValue:Q.value,"onUpdate:modelValue":t[0]||(t[0]=e=>Q.value=e),mode:"ios",onIonChange:$},{default:n((()=>[d(o(L),{value:"system"},{default:n((()=>[m("System Notices")])),_:1}),d(o(L),{value:"activities"},{default:n((()=>[m("Activities")])),_:1})])),_:1},8,["modelValue"]),o(a).barLoading||0==o(i)[Y[Q.value]].length?(c(),s(V,{key:0,class:"no-data",desc:e.$t("mail.message.nodata")},null,8,["desc"])):(c(),s(o(k),{key:1,style:{"margin-top":"16px"}},{default:n((()=>["system"==Q.value?(c(!0),g(h,{key:0},f(o(i).mailList,(e=>(c(),s(o(z),{key:e.detailId,class:"mail-item",lines:"none"},{default:n((()=>[d(o(D),{class:"mail-content"},{default:n((()=>[y("div",H,v(e.gmtCreate||""),1),y("h4",J,v(e.msgTitle||""),1),y("div",{class:w(["mail-detail",{"show-all":e.showDetail}])},v(e.msgContent||""),3),d(o(S),{class:"ion-justify-content-end"},{default:n((()=>[d(o(I),{size:"auto"},{default:n((()=>[d(o(M),{class:"btn-show-all",color:"light",fill:"clear",size:"small",onClick:b((a=>q(e)),["stop"])},{default:n((()=>[y("span",null,v(e.showDetail?"hide":"Show all"),1),d(o(E),{icon:e.showDetail?o(T):o(U),style:{"margin-left":"4px"}},null,8,["icon"])])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),d(o(S),{class:"ion-align-items-center ion-justify-content-between"},{default:n((()=>[d(o(I),{size:"auto"},{default:n((()=>[p("",!0)])),_:1}),d(o(I),{size:"auto"},{default:n((()=>[d(o(E),{class:"btn-del",src:o(O)("/icon_userInfo/icon-delete.svg"),onClick:b((a=>B(e)),["stop"])},null,8,["src","onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128)):p("",!0),"activities"==Q.value?(c(!0),g(h,{key:1},f(o(i).announceList,(a=>(c(),s(o(z),{key:a.mainId,class:"mail-item",lines:"none"},{default:n((()=>[d(o(D),{class:"mail-content"},{default:n((()=>[y("div",F,v(a.startTime||""),1),y("h4",K,v(a.title||""),1),y("div",{class:w(["mail-detail",{"show-all":a.showDetail}])},v(a.content||""),3),d(o(S),{class:"ion-justify-content-end"},{default:n((()=>[d(o(I),{size:"auto"},{default:n((()=>[d(o(M),{class:"btn-show-all",color:"light",fill:"clear",size:"small",onClick:b((e=>q(a)),["stop"])},{default:n((()=>[y("span",null,v(a.showDetail?"hide":"Show all"),1),d(o(E),{icon:e.mail.showDetail?o(T):o(U),style:{"margin-left":"4px"}},null,8,["icon"])])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),d(o(S),{class:"ion-align-items-center ion-justify-content-between"},{default:n((()=>[d(o(I),{size:"auto"},{default:n((()=>[p("",!0)])),_:1}),d(o(I),{size:"auto"})])),_:1})])),_:2},1024)])),_:2},1024)))),128)):p("",!0)])),_:1}))])),_:1},512),[[u,!o(a).barLoading]])])),_:1}))}})}}}));