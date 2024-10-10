import{u as Q,d as M,f as O,M as W,b as N,c as L,G as T,J as X,K as Y,n as Z,t as R,o as ee,A as te,I as oe,j as ne,B as se}from"./@ionic-BzoWLFGj.js";import{r as v,I as i,J as d,K as n,M as l,D as r,G as e,N as a,O as B,P as $,c as ae,k as le,w as ie,Q as P,b as j,V as F,F as D,R as V,S as z,U as C,Z as re,X as de,Y as ue}from"./@vue-DQPB5ixA.js";import{u as ce}from"./vue-i18n-D3aLYNeJ.js";import{d as pe,s as me}from"./pinia-CYwfShO_.js";import{c as he,b as G,i as ge,d as fe,u as E}from"./index-BJaUFss0.js";import{g as _e,a as ve,r as Ie}from"./deposit-bMGY0lob.js";import"./@ionic_components_1-CAQXnsIn.js";import"./@stencil-C-gE1UvY.js";import"./@ionic_components_2-DUGZJZYA.js";import"./@capacitor-CHoHO2YB.js";import"./vue-router-CQQ818li.js";import"./ionicons-DKP7Q_k0.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./@intlify-BAcCFw_v.js";import"./jsencrypt-Ve0Y4aUG.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const K=pe("deposit",()=>{const S=v({}),I=v([]),h=v(!1);return{chargeInfo:S,onlinePaymentInfo:I,isTypeB:h,getChargeInfo:async()=>{const b=await _e();b.code==="00000"&&(console.log(b),S.value=b.data||{},I.value=S.value.rechargeTypes)}}},{persistedState:{persist:!1}}),be={class:"wrapper"},ye={class:"dialog-content"},we={__name:"DepositSuccessPopup",setup(S,{expose:I}){const h=Q(),g=he(),{getPublicUrl:b}=G(),{popupEnter:_,popupLeave:A}=ge(),u=v(!1),w=async()=>{u.value=!0},x=()=>{let y=1;const c=setInterval(async()=>{const f=await fe();f.code==="00000"&&(g.userInfo.balance=Number(f.data)),y<=5?y++:clearInterval(c)},5e4);u.value=!1,h.back()};return I({showDialog:w}),(y,c)=>(i(),d(e(W),{class:"Deposit-success-popup",isOpen:u.value,enterAnimation:e(_),leaveAnimation:e(A),onDidDismiss:c[1]||(c[1]=f=>u.value=!1)},{default:n(()=>[l("div",be,[r(e(M),{class:"btn-close",src:e(b)("/icon_wallet/icon-popup-close.png"),onClick:c[0]||(c[0]=f=>u.value=!1)},null,8,["src"]),l("div",ye,[l("div",null,a(y.$t("deposit.message.tips6")),1),l("div",null,a(y.$t("deposit.message.tips7")),1)]),r(e(O),{class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",expand:"block",onClick:B(x,["stop"])},{default:n(()=>[$(a(y.$t("deposit.button.confirm")),1)]),_:1})])]),_:1},8,["isOpen","enterAnimation","leaveAnimation"]))}},Ce={class:"method-bg"},Ae={class:"method-text"},ke={class:"method-fg"},Me=l("hr",null,null,-1),$e={class:"method-bg"},Se={class:"channel-text"},Le={class:"method-fg"},Pe=l("hr",null,null,-1),De={style:{margin:"4px 0"}},Ve={class:"block-title"},xe={class:"ion-margin-start",style:{"font-size":"0.9rem"}},Ne={class:"ion-margin-start",style:{"font-size":"0.9rem"}},Re=l("hr",null,null,-1),ze={class:"block-title"},Be={style:{margin:"4px 0"}},Oe={class:"block-title"},Te={style:{"font-size":"0.8rem"}},Ue={__name:"OnlinePayment",setup(S){const{t:I}=ce(),h=E(),g=K(),{isTypeB:b}=me(g),{getPublicUrl:_}=G(),A=v(null),u="₹",w=v([!0]),x=v([]),y=ae(()=>{const o=x.value.filter(p=>p.rechargeTypeId==t.depositMethod);return o.length>0?o[0]:[]}),c=v(0),f=v(0),t=le({depositAmount:0,depositMethodItem:{},depositMethod:"",depositChannelItem:{},depositChannelIdx:0,depositMethodList:[]});ie(()=>g.onlinePaymentInfo,async()=>{h.barLoading=!0,t.depositMethodItem=g.onlinePaymentInfo[0],t.depositMethod=g.onlinePaymentInfo[0].id;for(let p=3;p>=t.depositMethodItem.channel.length;p--)t.depositMethodItem.channel.push(t.depositMethodItem.channel[0]);t.depositChannelItem=t.depositMethodItem.channel[0],t.depositChannelIdx=0,c.value=t.depositChannelItem.minRechargeAmount,f.value=t.depositChannelItem.maxRechargeAmount,t.depositAmount=t.depositChannelItem.rechargeAmountList.length>0?t.depositChannelItem.rechargeAmountList[0]:c.value;const o=await ve();o.code==="00000"&&(x.value=o.data||[]),h.barLoading=!1});const J=o=>{t.depositAmount=Number(o)},q=o=>{t.depositMethodItem=o,t.depositMethod=o.id,w.value=[!0],U(t.depositMethodItem.channel[0])},U=(o,p)=>{t.depositChannelItem=o,t.depositChannelIdx=p,c.value=t.depositChannelItem.minRechargeAmount,f.value=t.depositChannelItem.maxRechargeAmount,t.depositAmount=t.depositChannelItem.rechargeAmountList.length>0?t.depositChannelItem.rechargeAmountList[0]:c.value},H=async()=>{if(!t.depositAmount){await(await R.create({message:I("deposit.toast.text1"),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}if(Number(t.depositAmount)<c.value||Number(t.depositAmount)>f.value){await(await R.create({message:"".concat(I("deposit.toast.text2")," ").concat(c.value," - ").concat(f.value),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}const o=y.value.rechargeAwards.filter((s,m)=>w.value[m]);if(o.length>1){await(await R.create({message:"Only one award!",duration:1500,position:"top",color:"warning",translucent:!0})).present();return}h.fullLoading=!0;const p=await Ie({amount:t.depositAmount,memberChannelId:t.depositChannelItem.id,rechargeAwardId:o.length>0?o[0].id:""});p.code==="00000"?p.data&&(A.value.showDialog(),window.open(p.data.payURL,"_blank")):await(await R.create({message:p.msg||p.code,duration:1500,position:"top",color:"danger",translucent:!0})).present(),h.fullLoading=!1};return(o,p)=>(i(),P(D,null,[j(r(e(Z),{class:"online-payment"},{default:n(()=>[r(e(N),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:n(()=>[(i(!0),P(D,null,V(e(g).onlinePaymentInfo,(s,m)=>(i(),d(e(L),{key:m,size:"3.4",class:"method-item",onClick:B(k=>q(s),["stop"])},{default:n(()=>[l("div",Ce,[r(z,{name:"fade"},{default:n(()=>[s.disable?(i(),d(e(M),{key:0,src:e(_)("/wallet/icon-btn-bg-disable.png")},null,8,["src"])):s.id==t.depositMethod?(i(),d(e(M),{key:1,src:e(_)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):C("",!0)]),_:2},1024)]),l("div",Ae,[l("span",null,a(o.$t(s.name)),1)]),s.isRecommend?(i(),d(e(T),{key:0,class:"recommend-badge",color:"danger"},{default:n(()=>[$(a(e(u))+" "+a(s.isRecommend)+"+",1)]),_:2},1024)):C("",!0),l("div",ke,[r(z,{name:"fade"},{default:n(()=>[s.id==t.depositMethod?(i(),d(e(M),{key:0,src:e(_)("/wallet/icon-btn-select-m.png")},null,8,["src"])):C("",!0)]),_:2},1024)])]),_:2},1032,["onClick"]))),128)),r(e(L),null,{default:n(()=>[t.depositMethodItem.isGuide?(i(),d(e(O),{key:0,class:"btn-guide",fill:"clear",href:t.depositMethodItem.isGuide,target:"_blank",size:"small"},{default:n(()=>[$(a(o.$t("deposit.howToUse")),1)]),_:1},8,["href"])):C("",!0)]),_:1})]),_:1}),Me,r(e(N),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:n(()=>[(i(!0),P(D,null,V(t.depositMethodItem.channel,(s,m)=>(i(),d(e(L),{key:m,size:"3.3",class:"method-item",onClick:B(k=>U(s,m),["stop"])},{default:n(()=>[l("div",$e,[r(z,{name:"fade"},{default:n(()=>[m==t.depositChannelIdx?(i(),d(e(M),{key:0,src:e(_)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):C("",!0)]),_:2},1024)]),l("div",Se,a(o.$t("deposit.channel"))+" "+a(m+1),1),l("div",Le,[r(z,{name:"fade"},{default:n(()=>[m==t.depositChannelIdx?(i(),d(e(M),{key:0,src:e(_)("/wallet/icon-btn-select-m.png")},null,8,["src"])):C("",!0)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:1}),Pe,l("div",De,[l("span",Ve,a(o.$t("deposit.depositAmount"))+": ",1),l("span",xe,"Min: "+a(c.value.toLocaleString()),1),l("span",Ne,"Max: "+a(f.value.toLocaleString()),1)]),r(e(N),{style:{margin:"8px 0"}},{default:n(()=>[(i(!0),P(D,null,V(t.depositChannelItem.rechargeAmountList,(s,m)=>(i(),d(e(L),{key:m,size:"2.8",class:re(["amount-item",{select:Number(s)==Number(t.depositAmount)}]),onClick:B(k=>J(s),["stop"])},{default:n(()=>[e(b)?(i(),d(e(T),{key:0,class:"amount-badge",color:"danger"},{default:n(()=>{var k;return[$("+"+a((k=e(g).onlinePaymentInfo)==null?void 0:k.giftList[m]),1)]}),_:2},1024)):C("",!0),l("div",null,a(e(u))+" "+a(s==null?void 0:s.toLocaleString()),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}),r(e(X),{modelValue:t.depositAmount,"onUpdate:modelValue":p[0]||(p[0]=s=>t.depositAmount=s),label:e(u),type:"number",placeholder:o.$t("deposit.depositAmount"),max:f.value,min:c.value,clearInput:!0},null,8,["modelValue","label","placeholder","max","min"]),Re,(i(!0),P(D,null,V(y.value.rechargeAwards,(s,m)=>(i(),d(e(N),{class:"award-item ion-align-items-center"},{default:n(()=>[r(e(L),{size:1.6},{default:n(()=>[r(e(M),{src:e(_)("/icon_wallet/icon-bonus.webp")},null,8,["src"])]),_:1}),r(e(L),{size:8,offset:.4},{default:n(()=>[l("div",ze,a(s.name),1),r(e(Y),{modelValue:w.value[m],"onUpdate:modelValue":k=>w.value[m]=k,"label-placement":"end"},{default:n(()=>[$(a("+".concat((s.rate||0)*100,"%"))+" "+a(o.$t("deposit.bonus"))+" (Max: "+a(e(u))+" "+a(s.maxAwardAmount)+")",1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024))),256)),l("div",Be,[l("div",Oe,a(o.$t("deposit.depositTips"))+": ",1),l("span",Te,[l("div",null,a(o.$t("deposit.message.tips1")),1),l("div",null,a(o.$t("deposit.message.tips2")),1)])]),j(r(e(O),{class:"btn-deposit",expand:"block",shape:"round",onClick:H},{default:n(()=>[$(a(o.$t("deposit.button.depositNow")),1)]),_:1},512),[[F,t.depositAmount]])]),_:1},512),[[F,!e(h).barLoading]]),r(we,{ref_key:"depositSuccessPopup",ref:A},null,512)],64))}},it={__name:"Deposit",setup(S){E();const I=K(),h=v("OnlinePayment"),g={1:{name:"deposit.onlinePayment",value:"OnlinePayment"}},b={OnlinePayment:Ue};return ee(async()=>{await I.getChargeInfo()}),(_,A)=>(i(),d(e(ne),{class:"deposit"},{default:n(()=>[r(e(oe),null,{default:n(()=>[Object.keys(g).length>1?(i(),d(e(te),{key:0,modelValue:h.value,"onUpdate:modelValue":A[0]||(A[0]=u=>h.value=u),mode:"md",scrollable:!0},{default:n(()=>[(i(),P(D,null,V(g,(u,w)=>r(e(se),{key:w,class:"ion-text-capitalize",value:u.value},{default:n(()=>[r(e(T),{class:"recharge-badge",color:"danger"},{default:n(()=>[$(a(u.badge),1)]),_:2},1024),l("div",null,a(_.$t(u.name)),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])):C("",!0)]),_:1}),(i(),d(de,null,[(i(),d(ue(b[h.value])))],1024))]),_:1}))}};export{it as default};
