import{r as v,c as _,B as S,I as c,J as t,E as e,H as l,C as a,O as g,P as L,Q as M,F as B,L as u,M as d,Y as b,N as k,S as C}from"./@vue-BnNAOHbh.js";import{H as D,J as w,C as T,n as V,j as U,B as x,l as z,b as I,c as p,f as N,e as y}from"./@ionic-Ci9irSPF.js";import{g as R,h as $}from"./ionicons-vS9WG2d3.js";import{r as j,c as E,a as P,u as A}from"./index-CvJSsnnw.js";import{d as F}from"./pinia-CIp5G_9Q.js";import"./@capacitor-CHoHO2YB.js";import"./jsencrypt-Ve0Y4aUG.js";import{_ as H}from"./NoData-BivHOEd5.js";import"./@ionic_components_1-CG1weR9z.js";import"./@stencil-pJInS8Bp.js";import"./@ionic_components_2-DZGN-9Y0.js";import"./vue-router-WMmcqR98.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./vue-i18n-DJaGXZoQ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";function J(r,o){return j({url:"/app/h5/siteMsg/".concat(r),method:"GET",param:o})}const q=F("mail",()=>{const r=E(),o=v([]),i=_(()=>o.value.length>0),m=_(()=>o.value.some(n=>!n.isRead));return{mailList:o,hasMail:i,hasUnread:m,getMailList:async()=>{const n=await J(r.userInfo.id);n.state==="200"&&(o.value=n.resultData||[])}}},{persistedState:{persist:!1}}),G={style:{"font-size":"0.8rem"}},O={style:{"font-size":"1rem","font-weight":"800"}},he={__name:"Mail",setup(r){const o=P(),i=q(),{getPublicUrl:m}=A(),f=v("system");return S(async()=>{o.barLoading=!0,await i.getMailList(),window.location.hostname.includes("github.io")&&(i.mailList=[{id:43461,fromUserId:0,userId:3506,appId:"101",type:101,title:"测试",content:"测试\n测试\n测试\n测试\n测试\n测试",attaches:null,attachesStatus:0,isRead:0,createTime:"2024-09-29 18:52:19",receiveTime:null,showDetail:!1},{id:43460,fromUserId:0,userId:3506,appId:"101",type:101,title:"测试",content:"测试",attaches:null,attachesStatus:0,isRead:0,createTime:"2024-09-29 18:36:33",receiveTime:null,showDetail:!1}]),o.barLoading=!1}),(n,h)=>(l(),c(e(U),{class:"mail"},{default:t(()=>[a(e(V),{fullscreen:""},{default:t(()=>[a(e(D),{modelValue:f.value,"onUpdate:modelValue":h[0]||(h[0]=s=>f.value=s),mode:"ios"},{default:t(()=>[a(e(w),{value:"system"},{default:t(()=>[g("System Notices")]),_:1}),a(e(w),{value:"activities"},{default:t(()=>[g("Activities")]),_:1})]),_:1},8,["modelValue"]),e(o).barLoading||!e(i).hasMail?(l(),c(H,{key:0,class:"no-data",desc:n.$t("mail.message.nodata")},null,8,["desc"])):(l(),c(e(T),{key:1,style:{"margin-top":"16px"}},{default:t(()=>[(l(!0),L(B,null,M(e(i).mailList,s=>(l(),c(e(x),{key:s.id,class:"mail-item",lines:"none"},{default:t(()=>[a(e(z),{class:"mail-content"},{default:t(()=>[u("div",G,d(s.createTime||""),1),u("h4",O,d(s.title||""),1),u("div",{class:b(["mail-detail",{"show-all":s.showDetail}])},d(s.content||""),3),a(e(I),{class:"ion-justify-content-end"},{default:t(()=>[a(e(p),{size:"auto"},{default:t(()=>[a(e(N),{class:"btn-show-all",color:"light",fill:"clear",size:"small",onClick:k(Q=>s.showDetail=!s.showDetail,["stop"])},{default:t(()=>[u("span",null,d(s.showDetail?"hide":"Show all"),1),a(e(y),{icon:s.showDetail?e(R):e($),style:{"margin-left":"4px"}},null,8,["icon"])]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),a(e(I),{class:"ion-align-items-center ion-justify-content-between"},{default:t(()=>[a(e(p),{size:"auto"},{default:t(()=>[C("",!0)]),_:1}),a(e(p),{size:"auto"},{default:t(()=>[a(e(y),{class:"btn-del",src:e(m)("/icon_userInfo/icon-delete.svg")},null,8,["src"])]),_:1})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1}))]),_:1})]),_:1}))}};export{he as default};
