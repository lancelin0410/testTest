import{r as h,j as J,B as M,I as C,J as c,E as t,H as u,C as e,P as m,Q as B,F as S,N as I,L as d,M as r,S as g,O as N,Z as $}from"./@vue-DSZqUJEn.js";import{u as P}from"./vue-i18n-DQsz-j5M.js";import{t as y,B as E,f as _,e as A,P as W,I as j,m as H,o as q,q as z,n as U,D as Q,J as v,d as b,j as Z,A as G,E as K}from"./@ionic-cajVy0nw.js";import{k as X,e as Y,g as tt,h as at,l as et}from"./ionicons-vS9WG2d3.js";import{a as ot,c as nt,g as lt,b as ct,e as st}from"./index-BOvGkc1M.js";import"./@intlify-BAcCFw_v.js";import"./@ionic_components_1-CG1weR9z.js";import"./@stencil-pJInS8Bp.js";import"./@ionic_components_2-DZGN-9Y0.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-DMBiYGXd.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-DXl0KkUU.js";import"./jsencrypt-Ve0Y4aUG.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const ut={style:{color:"#fdea5a"}},rt={style:{margin:"4px 0"}},it={class:"block-title"},dt={key:0,style:{margin:"4px 0"}},pt={class:"block-title"},mt={key:1,style:{margin:"4px 0"}},ft={class:"block-title"},wt={key:2,style:{margin:"4px 0"}},ht=d("div",{class:"block-title"},"CNIC",-1),Ct=d("span",{class:"input-prefix",slot:"start"},"CNIC",-1),It={key:3,style:{margin:"4px 0"}},gt={class:"block-title"},Mt={__name:"BankCardList",setup(vt){const{t:x}=P(),i=ot(),L=nt(),{getImgUrl:k}=ct(),f=h([]),V=h(!0),w=h(!1),s=h({}),l=J({accountName:null,accountNumber:null,CNIC:null,accountIfsc:null});M(async()=>{var n;i.barLoading=!0;const o=await lt({userId:L.userInfo.id});o.state==="200"?(f.value=((n=o.resultData.withdrawAccounts)==null?void 0:n.map(a=>{a.withdrawAccount=JSON.parse(a.withdrawAccount);const p=i.appConfig.withdrawTypes.filter(T=>a.withdrawTypeId==T.id);return p.length>0&&(a.iconUrl=p[0].iconUrl),a}))||[],V.value=!(i.appConfig.withdrawTypes.length==f.value.length&&f.value.length!=0),s.value=f.value[0]):await(await y.create({message:o.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),i.barLoading=!1});const R=()=>{s.value=i.appConfig.withdrawTypes[0],l.accountName=null,l.accountNumber=null,l.CNIC=null,l.accountIfsc=null,w.value=!0},O=o=>{w.value=!0},D=async()=>{if(console.log(s.value.withdrawAccountRule,l),s.value.withdrawAccountRule.includes("accountName")&&!l.accountName||s.value.withdrawAccountRule.includes("accountNumber")&&!l.accountNumber||s.value.withdrawAccountRule.includes("CNIC")&&!l.CNIC||s.value.withdrawAccountRule.includes("accountIfsc")&&!l.accountIfsc)return;if(l.accountIfsc.split("")[4]!="0"){await(await y.create({message:x("account.bankCard.tips.ifscTips"),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}i.fullLoading=!0,(await st({withdrawAccount:JSON.stringify(l),withdrawTypeId:s.value.id})).state=="200"&&(await(await y.create({message:"Success",duration:1500,position:"top",translucent:!0,icon:checkmarkOutline,color:"success"})).present(),w.value=!1),i.fullLoading=!1},F=(o,n)=>o&&n?o.id===n.id:o===n;return(o,n)=>(u(),C(t(Z),{class:"bank-card-list"},{default:c(()=>[e(t(U),null,{default:c(()=>[e(t(E),null,{default:c(()=>[(u(!0),m(S,null,B(f.value,(a,p)=>(u(),C(t(G),{key:p,class:$(["account-item",{select:!0}]),lines:"none"},{default:c(()=>[e(t(b),{slot:"start",src:a.iconUrl},null,8,["src"]),d("span",null,r(o.$t("account.bankCard.text.accNo"))+" "+r(a.withdrawAccount.accountNumber),1),e(t(A),{slot:"end",icon:t(et),onClick:I(T=>O(a.id),["stop"])},null,8,["icon","onClick"])]),_:2},1024))),128))]),_:1}),(V.value,u(),C(t(_),{key:0,fill:"clear",expand:"block",onClick:I(R,["stop"])},{default:c(()=>[e(t(A),{slot:"start",icon:t(X),style:{color:"#fdea5a"}},null,8,["icon"]),d("span",ut,r(o.$t("account.bankCard.text.addBankCardText")),1)]),_:1})),e(t(W),{class:"account-info","is-open":w.value},{default:c(()=>[e(t(j),null,{default:c(()=>[e(t(H),null,{default:c(()=>[e(t(q),{slot:"start"},{default:c(()=>[e(t(_),{onClick:n[0]||(n[0]=I(a=>w.value=!1,["stop"]))},{default:c(()=>[e(t(A),{slot:"icon-only",icon:t(Y),color:"light"},null,8,["icon"])]),_:1})]),_:1}),e(t(z),null,{default:c(()=>[N(r(o.$t("account.header.withdrawalBankTitle")),1)]),_:1})]),_:1})]),_:1}),e(t(U),{class:"ion-padding"},{default:c(()=>[d("div",rt,[d("div",it,r(o.$t("account.bankCard.labels.accountType")),1),e(t(Q),{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=a=>s.value=a),class:$(["account-type-select",{hide:t(i).appConfig.withdrawTypes.length<2}]),mode:"md",interface:"popover",fill:"outline",color:"danger","toggle-icon":t(tt),"expanded-icon":t(at),compareWith:F},{default:c(()=>[(u(!0),m(S,null,B(t(i).appConfig.withdrawTypes,(a,p)=>(u(),C(t(K),{key:p,value:a},{default:c(()=>[N(r(a.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","class","toggle-icon","expanded-icon"])]),s.value.withdrawAccountRule.includes("accountName")?(u(),m("div",dt,[d("div",pt,r(o.$t("account.bankCard.labels.accountName")),1),e(t(v),{modelValue:l.accountName,"onUpdate:modelValue":n[2]||(n[2]=a=>l.accountName=a),placeholder:o.$t("account.bankCard.placeholder.accountName")},{default:c(()=>[e(t(b),{class:"input-prefix",slot:"start",src:t(k)("/account/icon/user.png")},null,8,["src"])]),_:1},8,["modelValue","placeholder"])])):g("",!0),s.value.withdrawAccountRule.includes("accountNumber")?(u(),m("div",mt,[d("div",ft,r(o.$t("account.bankCard.labels.accountNumber")),1),e(t(v),{modelValue:l.accountNumber,"onUpdate:modelValue":n[3]||(n[3]=a=>l.accountNumber=a),placeholder:o.$t("account.bankCard.placeholder.accountNumber")},{default:c(()=>[e(t(b),{class:"input-prefix",slot:"start",src:t(k)("/account/icon/password.png")},null,8,["src"])]),_:1},8,["modelValue","placeholder"])])):g("",!0),s.value.withdrawAccountRule.includes("CNIC")?(u(),m("div",wt,[ht,e(t(v),{modelValue:l.CNIC,"onUpdate:modelValue":n[4]||(n[4]=a=>l.CNIC=a),placeholder:"CNIC"},{default:c(()=>[Ct]),_:1},8,["modelValue"])])):g("",!0),s.value.withdrawAccountRule.includes("accountIfsc")?(u(),m("div",It,[d("div",gt,r(o.$t("account.bankCard.labels.accountIfsc")),1),e(t(v),{modelValue:l.accountIfsc,"onUpdate:modelValue":n[5]||(n[5]=a=>l.accountIfsc=a),placeholder:o.$t("account.bankCard.placeholder.accountIfsc")},{default:c(()=>[e(t(b),{class:"input-prefix",slot:"start",src:t(k)("/account/icon/IFSC.png")},null,8,["src"])]),_:1},8,["modelValue","placeholder"])])):g("",!0),e(t(_),{class:"btn-confirm",expand:"block",shape:"round",onClick:I(D,["stop"])},{default:c(()=>[N(r(o.$t("account.button.confirmCapital")),1)]),_:1})]),_:1})]),_:1},8,["is-open"])]),_:1})]),_:1}))}};export{Mt as default};
