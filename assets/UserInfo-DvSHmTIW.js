import{r as b,I as M,J as l,G as t,i as U,K as N,D as e,M as r,P as d,R as s,Q as g,O as E,v as P}from"./@vue-3Wdfxk3_.js";import{o as $,u as G,j as k,h as y,i as o,k as n,C as W,D as f,l as p,y as h,z as m,r as v,v as T,f as F,s as Q,G as q,M as J,p as K,t as X}from"./@ionic-ChxHNRcu.js";import{i as Y,c as Z,r as tt,j as et,k as lt,t as st,e as nt,l as ot}from"./ionicons-DCtDYcIg.js";import{b as at}from"./qrcode-dM57D9kh.js";import{u as it,a as rt,b as ct,r as ut}from"./index-BtfuBToB.js";import{u as dt}from"./common-icPcROaw.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@stencil-C-gE1UvY.js";import"./@ionic_components_2-DUGZJZYA.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-CvOicv45.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./dijkstrajs-D_NXgYpA.js";import"./pinia-i8UTD9O9.js";import"./jsencrypt-Ve0Y4aUG.js";import"./vue-i18n-BmGSZPWT.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const ft={class:"user-name"},pt={class:"user-id"},_t={style:{"font-size":"0.8rem",height:"100%","text-align":"right"}},gt={class:"vip-text"},mt={class:"btn-inner"},vt={class:"btn-inner"},It={class:"btn-inner"},bt=r("div",null,"Referral & get commission",-1),kt={class:"refer-link"},yt=r("div",{style:{color:"rgb(179, 190, 193)","font-size":"0.8rem","font-weight":"800"}},"referral link",-1),ht={class:"refer-link"},Ft={__name:"UserInfo",setup(xt){const L=G(),c=it(),a=rt(),{getPublicUrl:i}=dt(),{headerAnimation:D}=ct(),S="₹",x=b(""),z=b(0),w=b(1),B=b(!1);$(async()=>{a.isLogin?(c.fullLoading=!0,await a.getUserTotalInfo(),z.value=a.currRecharge,w.value=a.nextVipInfo.levelUpRecharge,x.value="".concat(Math.round(z.value/w.value*1e4)/100,"%"),c.fullLoading=!1):L.navigate("/","back","replace",D)});const C=async _=>{navigator.clipboard.writeText(_),await(await X.create({message:"Copy Success",icon:ot,duration:1500,position:"top",color:"success",translucent:!0})).present()},O=async()=>{c.fullLoading=!0;const _=await ut();_.code==="00000"&&(a.userInfo.balance=Number(_.data)),c.fullLoading=!1},R=b(""),j=async()=>{R.value=await at.toDataURL(c.inviteLink,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.8,margin:1}),P(()=>B.value=!0)},H=U("setBackgroundOpacity"),V=_=>{H(Math.round(_.detail.scrollTop/120*100)/100)},A=()=>{a.accessToken="",a.anonymousLoginInfo["jti-u"]="",a.anonymousLoginInfo["jti-e"]="",L.navigate("/","back","replace")};return(_,u)=>(N(),M(t(K),{class:"user-info"},{default:l(()=>[e(t(k),{class:"top-bg",src:t(i)("/icon_userInfo/top-bg.png")},null,8,["src"]),e(t(T),{"scroll-events":!0,onIonScroll:V},{default:l(()=>[e(t(y),{class:"ion-align-items-center"},{default:l(()=>[e(t(o),{size:"2"},{default:l(()=>[e(t(k),{src:t(i)(t(a).userInfo.avatar)},null,8,["src"])]),_:1}),e(t(o),{size:"9"},{default:l(()=>[r("div",ft,d(t(a).userInfo.userName),1),r("div",pt,[s(" ID: "+d(t(a).userInfo.id)+" ",1),e(t(n),{class:"btn-copy",icon:t(Y),onClick:u[0]||(u[0]=g(I=>C(t(a).userInfo.id),["stop"]))},null,8,["icon"])])]),_:1}),e(t(o),{size:"1"})]),_:1}),e(t(y),{class:"vip-info"},{default:l(()=>[e(t(W),{class:"vip-badge","router-link":"/account/vip"},{default:l(()=>[s(" VIP club "),e(t(n),{icon:t(Z)},null,8,["icon"])]),_:1}),e(t(o),{size:"12"},{default:l(()=>[s(d(t(a).currVipInfo.name),1)]),_:1}),e(t(o),{size:"8.4",class:"vip-exp"},{default:l(()=>[r("div",{class:"vip-current-exp",style:E({width:x.value})},null,4),r("div",{class:"vip-current-point",style:E({left:x.value})},null,4)]),_:1}),e(t(o),{size:"3.6"},{default:l(()=>[r("div",_t,[r("span",gt,d(t(S))+" "+d(w.value-z.value),1),s(" to VIP1 ")])]),_:1})]),_:1}),e(t(y),{class:"amount-info ion-align-items-center ion-justify-content-between"},{default:l(()=>[e(t(o),{size:"6",class:"amount-title"},{default:l(()=>[e(t(k),{src:t(i)("/icon_userInfo/balance.webp")},null,8,["src"]),e(t(f),null,{default:l(()=>[s("Total Balance")]),_:1})]),_:1}),e(t(o),{size:"4",class:"amount"},{default:l(()=>{var I;return[s(d(t(S))+d(((I=t(a).userInfo)==null?void 0:I.balance)||0)+" ",1),e(t(n),{class:"icon-refresh",icon:t(tt),onClick:g(O,["stop"])},null,8,["icon"])]}),_:1})]),_:1}),e(t(y),{class:"amount-action ion-align-items-center ion-justify-content-center"},{default:l(()=>[e(t(o),{size:"6"},{default:l(()=>[e(t(p),{class:"btn-deposit ion-text-capitalize",expand:"block",size:"small","router-link":"/account/deposit"},{default:l(()=>[e(t(n),{slot:"start",size:"large",src:t(i)("/icon_userInfo/icon-deposit.svg")},null,8,["src"]),e(t(f),null,{default:l(()=>[s("Deposit")]),_:1})]),_:1})]),_:1}),e(t(o),{size:"6"},{default:l(()=>[e(t(p),{class:"btn-withdraw ion-text-capitalize",expand:"block",size:"small","router-link":"/account/withdraw"},{default:l(()=>[e(t(n),{slot:"start",size:"large",src:t(i)("/icon_userInfo/icon-withdraw.svg")},null,8,["src"]),e(t(f),null,{default:l(()=>[s("Withdraw")]),_:1})]),_:1})]),_:1}),e(t(o),{size:"3"},{default:l(()=>[e(t(p),{class:"btn-history ion-text-capitalize",fill:"clear",color:"light","router-link":"/account/depositHistory"},{default:l(()=>[r("div",mt,[e(t(n),{icon:t(et)},null,8,["icon"]),e(t(f),null,{default:l(()=>[s("Deposit History")]),_:1})])]),_:1})]),_:1}),e(t(o),{size:"3"},{default:l(()=>[e(t(p),{class:"btn-history ion-text-capitalize",fill:"clear",color:"light","router-link":"/account/withdrawHistory"},{default:l(()=>[r("div",vt,[e(t(n),{icon:t(lt)},null,8,["icon"]),e(t(f),null,{default:l(()=>[s("Withdraw History")]),_:1})])]),_:1})]),_:1}),e(t(o),{size:"3"},{default:l(()=>[e(t(p),{class:"btn-history ion-text-capitalize",fill:"clear",color:"light","router-link":"/account/betHistory"},{default:l(()=>[r("div",It,[e(t(n),{icon:t(st)},null,8,["icon"]),e(t(f),null,{default:l(()=>[s("Bet History")]),_:1})])]),_:1})]),_:1}),e(t(o),{size:"3"})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"","router-link":"/account/mail"},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-notification.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[s("Notification")]),_:1})]),_:1}),e(t(m),{detail:"",onClick:g(j,["stop"])},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-referAndEarn.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[s("Refer And Earn")]),_:1})]),_:1}),e(t(m),{detail:""},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-affiliate.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[s("Affiliate")]),_:1})]),_:1})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"","router-link":"/account/globalSetting"},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-globalSetting.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[s("Global Setting")]),_:1})]),_:1}),e(t(m),{detail:""},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-language.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[s("Language")]),_:1}),e(t(f),null,{default:l(()=>[s("English")]),_:1})]),_:1})]),_:1}),e(t(y),{class:"refer-info"},{default:l(()=>[e(t(o),{size:"2"},{default:l(()=>[e(t(k),{src:t(i)("/icon_userInfo/refer.png")},null,8,["src"])]),_:1}),e(t(o),{size:"10"},{default:l(()=>[bt,r("div",kt,[e(t(f),null,{default:l(()=>[s(d(t(c).inviteLink),1)]),_:1}),e(t(p),{size:"small",onClick:u[1]||(u[1]=g(I=>C(t(c).inviteLink),["stop"]))},{default:l(()=>[s("Copy")]),_:1})])]),_:1})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"","router-link":"/chats"},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-liveSupport.svg")},null,8,["src"]),e(t(v),null,{default:l(()=>[s("Live Support")]),_:1})]),_:1})]),_:1}),e(t(h),{lines:"none",style:{"border-radius":"8px",margin:"12px 0"}},{default:l(()=>[e(t(m),{detail:"",href:"https://www.google.com/",target:"_blank"},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-feedBack.svg"),style:{fill:"#B3BEC1"}},null,8,["src"]),e(t(v),null,{default:l(()=>[s("Leave Feedback")]),_:1})]),_:1})]),_:1}),e(t(p),{class:"btn-sign-out",fill:"clear",expand:"block",color:"light",onClick:g(A,["stop"])},{default:l(()=>[e(t(n),{slot:"start",src:t(i)("/icon_userInfo/icon-signOut.svg")},null,8,["src"]),s(" Sign Out ")]),_:1})]),_:1}),e(t(J),{class:"refer-link-info","is-open":B.value,"initial-breakpoint":1,breakpoints:[0,1]},{default:l(()=>[e(t(F),null,{default:l(()=>[e(t(Q),null,{default:l(()=>[e(t(q),{style:{position:"absolute",top:"0",right:"16px"}},{default:l(()=>[e(t(p),{onClick:u[2]||(u[2]=g(I=>B.value=!1,["stop"]))},{default:l(()=>[e(t(n),{slot:"icon-only",icon:t(nt),color:"light"},null,8,["icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(t(T),{class:"ion-padding"},{default:l(()=>[e(t(k),{src:R.value,style:{height:"200px"}},null,8,["src"]),yt,r("div",ht,[e(t(f),null,{default:l(()=>[s(d(t(c).inviteLink),1)]),_:1})]),e(t(p),{class:"btn-copy",expand:"block",onClick:u[3]||(u[3]=g(I=>C(t(c).inviteLink),["stop"]))},{default:l(()=>[s("Copy link")]),_:1})]),_:1})]),_:1},8,["is-open"])]),_:1}))}};export{Ft as default};
