import{r as _,J as m,K as r,G as e,I as u,b as f,V as h,D as i,M as a,N as c,P as g,U as v}from"./@vue-DQPB5ixA.js";import{u as I}from"./vue-router-CQQ818li.js";import{o as w,u as b,t as L,d as k,n as x,L as D,f as T,j as V}from"./@ionic-BzoWLFGj.js";import{u as y,k as C}from"./index-BakalulC.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@stencil-C-gE1UvY.js";import"./@ionic_components_2-DUGZJZYA.js";import"./@capacitor-CHoHO2YB.js";import"./ionicons-DKP7Q_k0.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-CYwfShO_.js";import"./jsencrypt-Ve0Y4aUG.js";import"./vue-i18n-D3aLYNeJ.js";import"./@intlify-BAcCFw_v.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const M={class:"detail-header"},N={class:"time-text"},B={style:{"font-size":"1rem","font-weight":"800"}},H=["innerHTML"],P=["innerHTML"],ot={__name:"PromotionDetail",setup(S){const n=I(),p=b(),s=y(),t=_({}),d=async l=>{const o=await await C(l);o.code==="00000"?t.value=o.data||[]:await(await L.create({message:o.msg||o.code,duration:1500,position:"top",color:"danger",translucent:!0})).present()};return w(async()=>{s.barLoading=!0,n.params.promoId?await d(n.params.promoId):p.back(),s.barLoading=!1}),(l,o)=>(u(),m(e(V),{class:"promotion-detail"},{default:r(()=>[f(i(e(x),null,{default:r(()=>[a("div",M,[i(e(k),{src:t.value.h5Image},null,8,["src"]),a("div",N,c(t.value.timeText||""),1)]),a("h4",B,c(t.value.title||""),1),a("div",{innerHTML:t.value.detail},null,8,H),a("div",{innerHTML:t.value.rule},null,8,P)]),_:1},512),[[h,!e(s).barLoading]]),t.value.url?(u(),m(e(D),{key:0},{default:r(()=>[i(e(T),{class:"btn-detail",expand:"block",shape:"round",href:t.value.url,target:"_blank"},{default:r(()=>[g("Detail")]),_:1},8,["href"])]),_:1})):v("",!0)]),_:1}))}};export{ot as default};
