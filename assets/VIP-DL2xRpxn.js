import{r as u,J as x,K as v,G as s,i as y,I as w,b as P,V as S,D as e,M as t,N as o,P as l,L as h}from"./@vue-DQPB5ixA.js";import{o as k,u as B,d as _,e as g,f as U,n as L,j as A}from"./@ionic-BzoWLFGj.js";import{b as D}from"./ionicons-DKP7Q_k0.js";import{u as M,c as R,i as N,b as $}from"./index-BJaUFss0.js";import{_ as C}from"./VIPSystem-CrAH7Vt6.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@stencil-C-gE1UvY.js";import"./@ionic_components_2-DUGZJZYA.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-CQQ818li.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-CYwfShO_.js";import"./jsencrypt-Ve0Y4aUG.js";import"./vue-i18n-D3aLYNeJ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";import"./swiper-1gcWHage.js";const T={class:"vip-bg"},W={class:"vip-info"},j={class:"vip-title"},z={class:"vip-sub-title"},E={style:{"font-weight":"800"}},G={class:"vip-exp"},O={class:"vip-note"},X={style:{"font-weight":"800"}},F={class:"vip-card"},H={class:"vip-label"},J=t("div",null,"VIP Host",-1),K=t("div",{class:"vip-desc"},"Uncover the VIP host personalized support with wagering and depositing consistently and actively!",-1),q={class:"vip-tips"},Q=t("div",null,"Wager $1.00 = 1 XP; Sports Wager $1.00 = 2 XP",-1),Y=t("div",null,"All wagers are converted to USD at the current rate",-1),Z={class:"btn-vip-level"},ys={__name:"VIP",setup(ss){const f=B(),c=M(),i=R(),{getPublicUrl:n}=$(),{headerAnimation:I}=N(),p="₹",d=u(""),a=u(0),r=u(1);k(async()=>{i.isLogin?(c.barLoading=!0,await i.getUserTotalInfo(),a.value=i.currRecharge,r.value=i.nextVipInfo.levelUpRecharge,d.value="".concat(Math.round(a.value/r.value*1e4)/100,"%"),c.barLoading=!1):f.navigate("/","back","replace",I)});const b=y("setBackgroundOpacity"),V=m=>{b(Math.round(m.detail.scrollTop/120*100)/100)};return(m,ts)=>(w(),x(s(A),{class:"vip"},{default:v(()=>[P(e(s(L),{"scroll-events":!0,onIonScroll:V},{default:v(()=>[t("div",T,[t("div",W,[e(s(_),{class:"info-bg",src:s(n)("/VIP/bg-none.png")},null,8,["src"]),e(s(_),{class:"vip-badge",src:s(n)("/VIP/badge-none.png")},null,8,["src"]),t("div",j,o(s(i).currVipInfo.name),1),t("div",z,[t("span",E,o(s(p))+" "+o(a.value),1),l(" / "+o(s(p))+" "+o(r.value),1)]),t("div",G,[t("div",{class:"vip-current-exp",style:h({width:d.value})},null,4),t("div",{class:"vip-current-point",style:h({left:d.value})},null,4)]),t("div",O,[t("span",X,o(s(p))+" "+o(r.value-a.value),1),l(" until "+o(s(i).nextVipInfo.name),1)]),t("div",F,[t("div",H,[e(s(g),{src:s(n)("/VIP/icon-badge.svg")},null,8,["src"]),J]),e(s(_),{class:"vip-host",src:s(n)("/VIP/host-unlock.png")},null,8,["src"]),K]),t("div",q,[Q,Y,t("div",Z,[l(" View level up details "),e(s(g),{icon:s(D)},null,8,["icon"])])])])]),e(C,{style:{margin:"16px 0"}}),e(s(U),{class:"btn-link",expand:"block","router-link":"/account/vipDetail"},{default:v(()=>[l(" Learn more about BC.GAME's VIP system ")]),_:1})]),_:1},512),[[S,!s(c).barLoading]])]),_:1}))}};export{ys as default};
