import{u as J,e as M,g as z,M as K,b as B,d as D,F as O,N as W,o as q,t as V,K as Q,H as X,I as Y,k as Z,J as ee}from"./@ionic-18nICBu3.js";import{r as y,H as l,I as d,J as n,L as o,C as r,E as t,M as a,N,O as $,j as te,w as oe,P as L,a as U,U as j,F as P,Q as R,R as x,S as b,Y as se,W as ne,X as ae}from"./@vue-B0j_qcai.js";import{u as le}from"./vue-i18n-DzMZFiEd.js";import{d as ie,s as re}from"./pinia-Ds326xZN.js";import{h as de,b as E,c as ue,l as ce,u as F}from"./index-CBAZMc4h.js";import{g as pe,r as me}from"./deposit-01Cbm5gp.js";import"./@stencil-DBaMOtEh.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-BLYQmdkJ.js";import"./ionicons-CdrslGsx.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./@intlify-BAcCFw_v.js";import"./jsencrypt-Ve0Y4aUG.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const H=ie("deposit",()=>{const w=y({}),g=y([]),c=y(!1);return{chargeInfo:w,onlinePaymentInfo:g,isTypeB:c,getChargeInfo:async()=>{const f=await pe();f.code==="00000"&&(console.log(f),w.value=f.data||{},g.value=w.value.rechargeTypes)}}},{persistedState:{persist:!1}}),he={class:"wrapper"},ge={class:"dialog-content"},fe={__name:"DepositSuccessPopup",setup(w,{expose:g}){const c=J(),p=de(),{getPublicUrl:f}=E(),{popupEnter:_,popupLeave:C}=ue(),u=y(!1),m=async()=>{u.value=!0},I=()=>{let e=1;const v=setInterval(async()=>{const A=await ce();A.code==="00000"&&(p.userInfo.balance=Number(A.data)),e<=5?e++:clearInterval(v)},5e4);u.value=!1,c.back()};return g({showDialog:m}),(e,v)=>(l(),d(t(K),{class:"Deposit-success-popup",isOpen:u.value,enterAnimation:t(_),leaveAnimation:t(C),onDidDismiss:v[1]||(v[1]=A=>u.value=!1)},{default:n(()=>[o("div",he,[r(t(M),{class:"btn-close",src:t(f)("/icon_wallet/icon-popup-close.png"),onClick:v[0]||(v[0]=A=>u.value=!1)},null,8,["src"]),o("div",ge,[o("div",null,a(e.$t("deposit.message.tips6")),1),o("div",null,a(e.$t("deposit.message.tips7")),1)]),r(t(z),{class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",expand:"block",onClick:N(I,["stop"])},{default:n(()=>[$(a(e.$t("deposit.button.confirm")),1)]),_:1})])]),_:1},8,["isOpen","enterAnimation","leaveAnimation"]))}},_e={class:"method-bg"},Ie={class:"method-text"},ve={class:"method-fg"},be=o("hr",null,null,-1),ye={class:"method-bg"},Ce={class:"channel-text"},ke={class:"method-fg"},we=o("hr",null,null,-1),Ae={style:{margin:"4px 0"}},Me={class:"block-title"},$e={class:"ion-margin-start",style:{"font-size":"0.9rem"}},Se={class:"ion-margin-start",style:{"font-size":"0.9rem"}},Le=o("hr",null,null,-1),Pe={style:{margin:"4px 0"}},De={class:"block-title"},xe={style:{"font-size":"0.8rem"}},Ne={__name:"OnlinePayment",setup(w){const{t:g}=le(),c=F(),p=H(),{isTypeB:f}=re(p),{getPublicUrl:_}=E(),C=y(null),u="₹",m=y(0),I=y(0),e=te({depositAmount:0,depositMethodItem:{},depositMethod:"",depositChannelItem:{},depositChannelIdx:0,depositMethodList:[]});oe(()=>p.onlinePaymentInfo,()=>{c.barLoading=!0,e.depositMethodItem=p.onlinePaymentInfo[0],e.depositMethod=p.onlinePaymentInfo[0].id;for(let s=3;s>=e.depositMethodItem.channel.length;s--)e.depositMethodItem.channel.push(e.depositMethodItem.channel[0]);e.depositChannelItem=e.depositMethodItem.channel[0],e.depositChannelIdx=0,m.value=e.depositChannelItem.minRechargeAmount,I.value=e.depositChannelItem.maxRechargeAmount,e.depositAmount=e.depositChannelItem.rechargeAmountList.length>0?e.depositChannelItem.rechargeAmountList[0]:m.value,c.barLoading=!1});const v=s=>{e.depositAmount=Number(s)},A=s=>{e.depositMethodItem=s,e.depositMethod=s.id,T(e.depositMethodItem.channel[0])},T=(s,k)=>{e.depositChannelItem=s,e.depositChannelIdx=k,m.value=e.depositChannelItem.minRechargeAmount,I.value=e.depositChannelItem.maxRechargeAmount,e.depositAmount=e.depositChannelItem.rechargeAmountList.length>0?e.depositChannelItem.rechargeAmountList[0]:m.value},G=async()=>{if(!e.depositAmount){await(await V.create({message:g("deposit.toast.text1"),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}if(Number(e.depositAmount)<m.value||Number(e.depositAmount)>I.value){await(await V.create({message:"".concat(g("deposit.toast.text2")," ").concat(m.value," - ").concat(I.value),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}c.fullLoading=!0;const s=await me({amount:e.depositAmount,memberChannelId:e.depositChannelItem.id});s.code==="00000"?s.data&&(C.value.showDialog(),window.open(s.data.payURL,"_blank")):await(await V.create({message:s.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),c.fullLoading=!1};return(s,k)=>(l(),L(P,null,[U(r(t(q),{class:"online-payment"},{default:n(()=>[r(t(B),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:n(()=>[(l(!0),L(P,null,R(t(p).onlinePaymentInfo,(i,h)=>(l(),d(t(D),{key:h,size:"3.4",class:"method-item",onClick:N(S=>A(i),["stop"])},{default:n(()=>[o("div",_e,[r(x,{name:"fade"},{default:n(()=>[i.disable?(l(),d(t(M),{key:0,src:t(_)("/wallet/icon-btn-bg-disable.png")},null,8,["src"])):i.id==e.depositMethod?(l(),d(t(M),{key:1,src:t(_)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):b("",!0)]),_:2},1024)]),o("div",Ie,[o("span",null,a(s.$t(i.name)),1)]),i.isRecommend?(l(),d(t(O),{key:0,class:"recommend-badge",color:"danger"},{default:n(()=>[$(a(t(u))+" "+a(i.isRecommend)+"+",1)]),_:2},1024)):b("",!0),o("div",ve,[r(x,{name:"fade"},{default:n(()=>[i.id==e.depositMethod?(l(),d(t(M),{key:0,src:t(_)("/wallet/icon-btn-select-m.png")},null,8,["src"])):b("",!0)]),_:2},1024)])]),_:2},1032,["onClick"]))),128)),r(t(D),null,{default:n(()=>[e.depositMethodItem.isGuide?(l(),d(t(z),{key:0,class:"btn-guide",fill:"clear",href:e.depositMethodItem.isGuide,target:"_blank",size:"small"},{default:n(()=>[$(a(s.$t("deposit.howToUse")),1)]),_:1},8,["href"])):b("",!0)]),_:1})]),_:1}),be,r(t(B),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:n(()=>[(l(!0),L(P,null,R(e.depositMethodItem.channel,(i,h)=>(l(),d(t(D),{key:h,size:"3.3",class:"method-item",onClick:N(S=>T(i,h),["stop"])},{default:n(()=>[o("div",ye,[r(x,{name:"fade"},{default:n(()=>[h==e.depositChannelIdx?(l(),d(t(M),{key:0,src:t(_)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):b("",!0)]),_:2},1024)]),o("div",Ce,a(s.$t("deposit.channel"))+" "+a(h+1),1),o("div",ke,[r(x,{name:"fade"},{default:n(()=>[h==e.depositChannelIdx?(l(),d(t(M),{key:0,src:t(_)("/wallet/icon-btn-select-m.png")},null,8,["src"])):b("",!0)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:1}),we,o("div",Ae,[o("span",Me,a(s.$t("deposit.depositAmount"))+": ",1),o("span",$e,"Min: "+a(m.value.toLocaleString()),1),o("span",Se,"Max: "+a(I.value.toLocaleString()),1)]),r(t(B),{style:{margin:"8px 0"}},{default:n(()=>[(l(!0),L(P,null,R(e.depositChannelItem.rechargeAmountList,(i,h)=>(l(),d(t(D),{key:h,size:"2.8",class:se(["amount-item",{select:Number(i)==Number(e.depositAmount)}]),onClick:N(S=>v(i),["stop"])},{default:n(()=>[t(f)?(l(),d(t(O),{key:0,class:"amount-badge",color:"danger"},{default:n(()=>{var S;return[$("+"+a((S=t(p).onlinePaymentInfo)==null?void 0:S.giftList[h]),1)]}),_:2},1024)):b("",!0),o("div",null,a(t(u))+" "+a(i==null?void 0:i.toLocaleString()),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}),r(t(W),{modelValue:e.depositAmount,"onUpdate:modelValue":k[0]||(k[0]=i=>e.depositAmount=i),label:t(u),type:"number",placeholder:s.$t("deposit.depositAmount"),max:I.value,min:m.value,clearInput:!0},null,8,["modelValue","label","placeholder","max","min"]),Le,o("div",Pe,[o("div",De,a(s.$t("deposit.depositTips"))+": ",1),o("span",xe,[o("div",null,a(s.$t("deposit.message.tips1")),1),o("div",null,a(s.$t("deposit.message.tips2")),1)])]),U(r(t(z),{class:"btn-deposit",expand:"block",shape:"round",onClick:G},{default:n(()=>[$(a(s.$t("deposit.button.depositNow")),1)]),_:1},512),[[j,e.depositAmount]])]),_:1},512),[[j,!t(c).barLoading]]),r(fe,{ref_key:"depositSuccessPopup",ref:C},null,512)],64))}},Ye={__name:"Deposit",setup(w){F();const g=H(),c=y("OnlinePayment"),p={1:{name:"deposit.onlinePayment",value:"OnlinePayment"}},f={OnlinePayment:Ne};return Q(async()=>{await g.getChargeInfo()}),(_,C)=>(l(),d(t(Z),{class:"deposit"},{default:n(()=>[r(t(Y),null,{default:n(()=>[Object.keys(p).length>1?(l(),d(t(X),{key:0,modelValue:c.value,"onUpdate:modelValue":C[0]||(C[0]=u=>c.value=u),mode:"md",scrollable:!0},{default:n(()=>[(l(),L(P,null,R(p,(u,m)=>r(t(ee),{key:m,class:"ion-text-capitalize",value:u.value},{default:n(()=>[r(t(O),{class:"recharge-badge",color:"danger"},{default:n(()=>[$(a(u.badge),1)]),_:2},1024),o("div",null,a(_.$t(u.name)),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])):b("",!0)]),_:1}),(l(),d(ne,null,[(l(),d(ae(f[c.value])))],1024))]),_:1}))}};export{Ye as default};