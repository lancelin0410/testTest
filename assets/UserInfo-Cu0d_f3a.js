import{r as b,J as M,K as l,G as t,i as N,I as U,D as e,M as r,N as d,P as n,O as g,L as R,v as P}from"./@vue-DQPB5ixA.js";import{o as $,u as G,d as k,b as y,c as o,e as s,G as W,H as f,f as p,C as h,D as m,l as v,n as T,I as F,m as q,p as J,M as K,j as Q,t as X}from"./@ionic-BzoWLFGj.js";import{i as Y,b as Z,r as tt,j as et,k as lt,t as nt,c as st,l as ot}from"./ionicons-DKP7Q_k0.js";import{b as at}from"./qrcode-dM57D9kh.js";import{u as it,c as rt,i as ct,b as ut,d as dt}from"./index-BakalulC.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@stencil-C-gE1UvY.js";import"./@ionic_components_2-DUGZJZYA.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-CQQ818li.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./dijkstrajs-D_NXgYpA.js";import"./pinia-CYwfShO_.js";import"./jsencrypt-Ve0Y4aUG.js";import"./vue-i18n-D3aLYNeJ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const ft={class:"user-name"},pt={class:"user-id"},_t={style:{"font-size":"0.8rem",height:"100%","text-align":"right"}},gt={class:"vip-text"},mt={class:"btn-inner"},vt={class:"btn-inner"},It={class:"btn-inner"},bt=r("div",null,"Referral & get commission",-1),kt={class:"refer-link"},yt=r("div",{style:{color:"rgb(179, 190, 193)","font-size":"0.8rem","font-weight":"800"}},"referral link",-1),ht={class:"refer-link"},Wt={__name:"UserInfo",setup(xt){const L=G(),c=it(),a=rt(),{getPublicUrl:i}=ut(),{headerAnimation:D}=ct(),S="₹",x=b(""),w=b(0),z=b(1),B=b(!1);$(async()=>{a.isLogin?(c.fullLoading=!0,await a.getUserTotalInfo(),w.value=a.currRecharge,z.value=a.nextVipInfo.levelUpRecharge,x.value="".concat(Math.round(w.value/z.value*1e4)/100,"%"),c.fullLoading=!1):L.navigate("/","back","replace",D)});const C=async _=>{navigator.clipboard.writeText(_),await(await X.create({message:"Copy Success",icon:ot,duration:1500,position:"top",color:"success",translucent:!0})).present()},H=async()=>{c.fullLoading=!0;const _=await dt();_.code==="00000"&&(a.userInfo.balance=Number(_.data)),c.fullLoading=!1},E=b(""),O=async()=>{E.value=await at.toDataURL(c.inviteLink,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.8,margin:1}),P(()=>B.value=!0)},j=N("setBackgroundOpacity"),V=_=>{j(Math.round(_.detail.scrollTop/120*100)/100)},A=()=>{a.accessToken="",a.anonymousLoginInfo["jti-u"]="",a.anonymousLoginInfo["jti-e"]="",L.navigate("/","back","replace")};return(_,u)=>(U(),M(t(Q),{class:"user-info"},{default:l(()=>[e(t(k),{class:"top-bg",src:t(i)("/icon_userInfo/top-bg.png")},null,8,["src"]),e(t(T),{"scroll-events":!0,onIonScroll:V},{default:l(()=>[e(t(y),{class:"ion-align-items-center"},{default:l(()=>[e(t(o),{size:"2"},{default:l(()=>[e(t(k),{src:t(i)(t(a).userInfo.avatar)},null,8,["src"])]),_:1}),e(t(o),{size:"9"},{default:l(()=>[r("div",ft,d(t(a).userInfo.userName),1),r("div",pt,[n(" ID: "+d(t(a).userInfo.id)+" ",1),e(t(s),{class:"btn-copy",icon:t(Y),onClick:u[0]||(u[0]=g(I=>C(t(a).userInfo.id),["stop"]))},null,8,["icon"])])]),_:1}),e(t(o),{size:"1"})]),_:1}),e(t(y),{class:"vip-info"},{default:l(()=>[e(t(W),{class:"vip-badge","router-link":"/account/vip"},{default:l(()=>[n(" VIP club "),e(t(s),{icon:t(Z)},null,8,["icon"])]),_:1}),e(t(o),{size:"12"},{default:l(()=>[n(d(t(a).currVipInfo.name),1)]),_:1}),e(t(o),{size:"8.4",class:"vip-exp"},{default:l(()=>[r("div",{class:"vip-current-exp",style:R({width:x.value})},null,4),r("div",{class:"vip-current-point",style:R({left:x.value})},null,4)]),_:1}),e(t(o),{size:"3.6"},{default:l(()=>[r("div",_t,[r("span",gt,d(t(S))+" "+d(z.value-w.value),1),n(" to VIP1 ")])]),_:1})]),_:1}),e(t(y),{class:"amount-info ion-align-items-center ion-justify-content-between"},{default:l(()=>[e(t(o),{size:"6",class:"amount-title"},{default:l(()=>[e(t(k),{src:t(i)("/icon_userInfo/balance.webp")},null,8,["src"]),e(t(f),null,{default:l(()=>[n("Total Balance")]),_:1})]),_:1}),e(t(o),{size:"4",class:"amount"},{default:l(()=>{var I;return[n(d(t(S))+d(((I=t(a).userInfo)==null?void 0:I.balance)||0)+" ",1),e(t(s),{class:"icon-refresh",icon:t(tt),onClick:g(H,["stop"])},null,8,["icon"])]}),_:1})]),_:1}),e(t(y),{class:"amount-action ion-align-items-center ion-justify-content-center"},{default:l(()=>[e(t(o),{size:"6"},{default:l(()=>[e(t(p),{class:"btn-deposit ion-text-capitalize",expand:"block",size:"small","router-link":"/account/deposit"},{default:l(()=>[e(t(s),{slot:"start",size:"large",src:t(i)("/icon_userInfo/icon-deposit.svg")},null,8,["src"]),e(t(f),null,{default:l(()=>[n("Deposit")]),_:1})]),_:1})]),_:1}),e(t(o),{size:"6"},{default:l(()=>[e(t(p),{class:"btn-withdraw ion-text-capitalize",expand:"block",size:"small","router-link":"/account/withdraw"},{default:l(()=>[e(t(s),{slot:"start",size:"large",src:t(i)("/icon_userInfo/icon-withdraw.svg")},null,8,["src"]),e(t(f),null,{default:l(()=>[n("Withdraw")]),_:1})]),_:1})]),_:1}),e(t(o),{size:"3"},{default:l(()=>[e(t(p),{class:"btn-history ion-text-capitalize",fill:"clear",color:"light","router-link":"/account/depositHistory"},{default:l(()=>[r("div",mt,[e(t(s),{icon:t(et)},null,8,["icon"]),e(t(f),null,{default:l(()=>[n("Deposit History")]),_:1})])]),_:1})]),_:1}),e(t(o),{size:"3"},{default:l(()=>[e(t(p),{class:"btn-history ion-text-capitalize",fill:"clear",color:"light","router-link":"/account/withdrawHistory"},{default:l(()=>[r("div",vt,[e(t(s),{icon:t(lt)},null,8,["icon"]),e(t(f),null,{default:l(()=>[n("Withdraw History")]),_:1})])]),_:1})]),_:1}),e(t(o),{size:"3"},{default:l(()=>[e(t(p),{class:"btn-history ion-text-capitalize",fill:"clear",color:"light","router-link":"/account/betHistory"},{default:l(()=>[r("div",It,[e(t(s),{icon:t(nt)},null,8,["icon"]),e(t(f),null,{default:l(()=>[n("Bet History")]),_:1})])]),_:1})]),_:1}),e(t(o),{size:"3"})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"","router-link":"/account/mail"},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-notification.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[n("Notification")]),_:1})]),_:1}),e(t(m),{detail:"",onClick:g(O,["stop"])},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-referAndEarn.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[n("Refer And Earn")]),_:1})]),_:1}),e(t(m),{detail:""},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-affiliate.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[n("Affiliate")]),_:1})]),_:1})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"","router-link":"/account/globalSetting"},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-globalSetting.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[n("Global Setting")]),_:1})]),_:1}),e(t(m),{detail:""},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-language.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[n("Language")]),_:1}),e(t(f),null,{default:l(()=>[n("English")]),_:1})]),_:1})]),_:1}),e(t(y),{class:"refer-info"},{default:l(()=>[e(t(o),{size:"2"},{default:l(()=>[e(t(k),{src:t(i)("/icon_userInfo/refer.png")},null,8,["src"])]),_:1}),e(t(o),{size:"10"},{default:l(()=>[bt,r("div",kt,[e(t(f),null,{default:l(()=>[n(d(t(c).inviteLink),1)]),_:1}),e(t(p),{size:"small",onClick:u[1]||(u[1]=g(I=>C(t(c).inviteLink),["stop"]))},{default:l(()=>[n("Copy")]),_:1})])]),_:1})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"","router-link":"/chats"},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-liveSupport.svg")},null,8,["src"]),e(t(v),null,{default:l(()=>[n("Live Support")]),_:1})]),_:1})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"",href:"https://www.google.com/",target:"_blank"},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-feedBack.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[n("Leave Feedback")]),_:1})]),_:1})]),_:1}),e(t(p),{class:"btn-sign-out",fill:"clear",expand:"block",color:"light",onClick:g(A,["stop"])},{default:l(()=>[e(t(s),{slot:"start",src:t(i)("/icon_userInfo/icon-signOut.svg")},null,8,["src"]),n(" Sign Out ")]),_:1})]),_:1}),e(t(K),{class:"refer-link-info","is-open":B.value,"initial-breakpoint":1,breakpoints:[0,1]},{default:l(()=>[e(t(F),null,{default:l(()=>[e(t(q),null,{default:l(()=>[e(t(J),{style:{position:"absolute",top:"0",right:"16px"}},{default:l(()=>[e(t(p),{onClick:u[2]||(u[2]=g(I=>B.value=!1,["stop"]))},{default:l(()=>[e(t(s),{slot:"icon-only",icon:t(st),color:"light"},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(t(T),{class:"ion-padding"},{default:l(()=>[e(t(k),{src:E.value,style:{height:"200px"}},null,8,["src"]),yt,r("div",ht,[e(t(f),null,{default:l(()=>[n(d(t(c).inviteLink),1)]),_:1})]),e(t(p),{class:"btn-copy",expand:"block",onClick:u[3]||(u[3]=g(I=>C(t(c).inviteLink),["stop"]))},{default:l(()=>[n("Copy link")]),_:1})]),_:1})]),_:1},8,["is-open"])]),_:1}))}};export{Wt as default};
