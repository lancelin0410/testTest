import{r as I,j as q,I as y,J as o,E as a,H as m,a as z,U as H,C as e,P as B,Q as L,F as x,N as u,L as w,M as i,O as g,Y as T}from"./@vue-B0j_qcai.js";import{u as P}from"./vue-i18n-DzMZFiEd.js";import{K as Q,t as N,u as j,E as $,g as h,f as r,M as G,I as J,n as K,p as Y,r as X,o as S,D as f,Q as Z,N as _,G as aa,k as ta,U as ea,V as na,W as oa,R as la}from"./@ionic-18nICBu3.js";import{m as sa,e as ca,g as ra,h as ua,o as ia,q as da,u as pa,v as ma,w as fa,x as M}from"./ionicons-CdrslGsx.js";import{u as ka}from"./index-CBAZMc4h.js";import{b as ba,g as Ia,d as ga,s as Na,e as Ca}from"./withdraw-k7JEOECy.js";import"./@intlify-BAcCFw_v.js";import"./@stencil-DBaMOtEh.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-BLYQmdkJ.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-Ds326xZN.js";import"./jsencrypt-Ve0Y4aUG.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const va={slot:"end"},ya={style:{color:"#fdea5a"}},qa={__name:"BankCardList",setup(wa){const{t:D}=P(),O=j(),c=ka(),k=I([]),b=I({}),d=I(!1),p=I([]),t=q({id:0,bank:null,accountName:null,accountNumber:null,CNIC:null,accountIfsc:null});Q(async()=>{c.barLoading=!0,await C(),c.barLoading=!1});const C=async()=>{const n=await ba();n.code==="00000"&&(p.value=n.data);const l=await Ia();l.code==="00000"?(k.value=l.data,b.value=k.value.length>0?k.value[0]:{}):await(await N.create({message:n.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()},U=()=>{t.id=0,t.bank=p.value[0],t.accountName=null,t.accountNumber=null,t.CNIC=null,t.accountIfsc=t.bank.code,d.value=!0},W=n=>{t.id=n.id;const l=p.value.filter(s=>s.id==n.bankId);t.bank=l.length>0?l[0]:{},t.accountName=n.realName,t.accountNumber=n.cardNo,t.accountIfsc=n.ifsc,d.value=!0},A=async n=>{c.fullLoading=!0,console.log(n),(await ga(n)).code==="00000"&&(await(await N.create({message:"Success",duration:1500,position:"top",translucent:!0,icon:M,color:"success"})).present(),await C(),c.fullLoading=!1),c.fullLoading=!1},E=async()=>{if(!t.bank||!t.accountName||!t.accountNumber||!t.accountIfsc)return;if(t.accountIfsc.split("")[4]!="0"){await(await N.create({message:D("account.bankCard.tips.ifscTips"),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}c.fullLoading=!0;let n;t.id==0?n=await Na({bankId:t.bank.id,bankType:t.bank.bankType,realName:c.encrypt.encrypt(t.accountName),cardNo:c.encrypt.encrypt(t.accountNumber),ifsc:t.accountIfsc}):n=await Ca({id:t.id,bankId:t.bank.id,bankType:t.bank.bankType,realName:c.encrypt.encrypt(t.accountName),cardNo:c.encrypt.encrypt(t.accountNumber),ifsc:t.accountIfsc}),n.code==="00000"&&(await(await N.create({message:"Success",duration:1500,position:"top",translucent:!0,icon:M,color:"success"})).present(),await C(),d.value=!1),c.fullLoading=!1},F=(n,l)=>n&&l?n.id===l.id:n===l,R=n=>{b.value=n,O.replace({name:"Withdraw",query:{cardId:b.value.id}})};return(n,l)=>(m(),y(a(ta),{class:"bank-card-list"},{default:o(()=>[z(e(a(S),null,{default:o(()=>[e(a($),null,{default:o(()=>[(m(!0),B(x,null,L(k.value,(s,v)=>(m(),y(a(ea),{key:v},{default:o(()=>[e(a(f),{lines:"none",class:T(["account-item",{select:b.value.id==s.id}]),onClick:u(V=>R(s),["stop"])},{default:o(()=>[w("span",null,i(n.$t("account.bankCard.text.accNo"))+" "+i(s.cardNo),1),w("span",va,[e(a(r),{icon:a(ma),color:"warning",size:"large",onClick:u(V=>W(s),["stop"])},null,8,["icon","onClick"])])]),_:2},1032,["class","onClick"]),e(a(na),{slot:"end"},{default:o(()=>[e(a(oa),{color:"danger"},{default:o(()=>[e(a(r),{slot:"icon-only",icon:a(fa),onClick:u(V=>A(s.id),["stop"])},null,8,["icon","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(a(h),{fill:"clear",expand:"block",onClick:u(U,["stop"])},{default:o(()=>[e(a(r),{slot:"start",icon:a(sa),style:{color:"#fdea5a"}},null,8,["icon"]),w("span",ya,i(n.$t("account.bankCard.text.addBankCardText")),1)]),_:1}),e(a(G),{class:"account-info","is-open":d.value},{default:o(()=>[e(a(J),null,{default:o(()=>[e(a(K),null,{default:o(()=>[e(a(Y),{slot:"start"},{default:o(()=>[e(a(h),{onClick:l[0]||(l[0]=u(s=>d.value=!1,["stop"]))},{default:o(()=>[e(a(r),{slot:"icon-only",icon:a(ca),color:"light"},null,8,["icon"])]),_:1})]),_:1}),e(a(X),null,{default:o(()=>[g(i(n.$t("account.header.withdrawalBankTitle")),1)]),_:1})]),_:1})]),_:1}),e(a(S),{class:"ion-padding"},{default:o(()=>[e(a($),{lines:"none"},{default:o(()=>[e(a(f),{style:{margin:"4px 0"}},{default:o(()=>[e(a(Z),{modelValue:t.bank,"onUpdate:modelValue":l[1]||(l[1]=s=>t.bank=s),class:T(["account-type-select",{hide:p.value.length<2}]),mode:"md",interface:"action-sheet",fill:"outline",color:"danger","toggle-icon":a(ra),"expanded-icon":a(ua),compareWith:F,onIonChange:l[2]||(l[2]=()=>t.accountIfsc=t.bank.code)},{default:o(()=>[e(a(r),{slot:"start",icon:a(ia)},null,8,["icon"]),(m(!0),B(x,null,L(p.value,(s,v)=>(m(),y(a(la),{key:v,value:s},{default:o(()=>[g(i(s.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","class","toggle-icon","expanded-icon"])]),_:1}),e(a(f),{style:{margin:"4px 0"}},{default:o(()=>[e(a(_),{modelValue:t.accountName,"onUpdate:modelValue":l[3]||(l[3]=s=>t.accountName=s),placeholder:n.$t("account.bankCard.labels.accountName")},{default:o(()=>[e(a(r),{slot:"start",icon:a(da)},null,8,["icon"])]),_:1},8,["modelValue","placeholder"])]),_:1}),e(a(f),{style:{margin:"4px 0"}},{default:o(()=>[e(a(_),{modelValue:t.accountNumber,"onUpdate:modelValue":l[4]||(l[4]=s=>t.accountNumber=s),placeholder:n.$t("account.bankCard.labels.accountNumber")},{default:o(()=>[e(a(r),{slot:"start",icon:a(pa)},null,8,["icon"])]),_:1},8,["modelValue","placeholder"])]),_:1}),e(a(f),{style:{margin:"4px 0"}},{default:o(()=>[e(a(_),{modelValue:t.accountIfsc,"onUpdate:modelValue":l[5]||(l[5]=s=>t.accountIfsc=s),placeholder:n.$t("account.bankCard.labels.accountIfsc")},{default:o(()=>[e(a(aa),{slot:"start"},{default:o(()=>[g("ISFC")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1})]),_:1}),e(a(h),{class:"btn-confirm",expand:"block",shape:"round",style:{margin:"16px 0"},onClick:u(E,["stop"])},{default:o(()=>[g(i(n.$t("account.button.confirmCapital")),1)]),_:1})]),_:1})]),_:1},8,["is-open"])]),_:1},512),[[H,!a(c).barLoading]])]),_:1}))}};export{qa as default};