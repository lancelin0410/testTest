import{aB as K,r as b,D as W,aa as H,d as l,j as r,w as o,h as s,f as d,u as t,x as M,y as a,v as z,K as R,B as $,a5 as X,C as j,S as Y,av as J,a9 as Q,l as G,aD as Z,ab as ee,ac as te,e as L,ak as O,al as E,q as N,F as P,i as B,s as D,aE as x,a1 as y,P as T,aC as se,ad as ne,z as oe,t as V,X as ae,T as le,a2 as ie,V as de,W as re,A as ue,U as ce}from"./index-BWYPlUKf.js";import{g as pe,r as me}from"./deposit-BncNkyO7.js";const q=K("deposit",()=>{const w=b({}),g=b([]),c=b(!1);return{chargeInfo:w,onlinePaymentInfo:g,isTypeB:c,getChargeInfo:async()=>{const f=await pe();f.code==="00000"&&(console.log(f),w.value=f.data||{},g.value=w.value.rechargeTypes)}}},{persistedState:{persist:!1}}),he={class:"wrapper"},ge={class:"dialog-content"},fe={__name:"DepositSuccessPopup",setup(w,{expose:g}){const c=W(),p=H(),{getPublicUrl:f}=j(),{popupEnter:_,popupLeave:C}=Y(),u=b(!1),m=async()=>{u.value=!0},v=()=>{let e=1;const I=setInterval(async()=>{const A=await J();A.code==="00000"&&(p.userInfo.balance=Number(A.data)),e<=5?e++:clearInterval(I)},5e4);u.value=!1,c.back()};return g({showDialog:m}),(e,I)=>(l(),r(t(X),{class:"Deposit-success-popup",isOpen:u.value,enterAnimation:t(_),leaveAnimation:t(C),onDidDismiss:I[1]||(I[1]=A=>u.value=!1)},{default:o(()=>[s("div",he,[d(t(M),{class:"btn-close",src:t(f)("/icon_wallet/icon-popup-close.png"),onClick:I[0]||(I[0]=A=>u.value=!1)},null,8,["src"]),s("div",ge,[s("div",null,a(e.$t("deposit.message.tips6")),1),s("div",null,a(e.$t("deposit.message.tips7")),1)]),d(t(z),{class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",expand:"block",onClick:R(v,["stop"])},{default:o(()=>[$(a(e.$t("deposit.button.confirm")),1)]),_:1})])]),_:1},8,["isOpen","enterAnimation","leaveAnimation"]))}},_e={class:"method-bg"},ve={class:"method-text"},Ie={class:"method-fg"},ye=s("hr",null,null,-1),be={class:"method-bg"},Ce={class:"channel-text"},ke={class:"method-fg"},we=s("hr",null,null,-1),Ae={style:{margin:"4px 0"}},Me={class:"block-title"},$e={class:"ion-margin-start",style:{"font-size":"0.9rem"}},Se={class:"ion-margin-start",style:{"font-size":"0.9rem"}},Le=s("hr",null,null,-1),Pe={style:{margin:"4px 0"}},De={class:"block-title"},xe={style:{"font-size":"0.8rem"}},Re={__name:"OnlinePayment",setup(w){const{t:g}=Q(),c=G(),p=q(),{isTypeB:f}=Z(p),{getPublicUrl:_}=j(),C=b(null),u=CURRENCY_SIGN,m=b(0),v=b(0),e=ee({depositAmount:0,depositMethodItem:{},depositMethod:"",depositChannelItem:{},depositChannelIdx:0,depositMethodList:[]});te(()=>p.onlinePaymentInfo,()=>{c.barLoading=!0,e.depositMethodItem=p.onlinePaymentInfo[0],e.depositMethod=p.onlinePaymentInfo[0].id;for(let n=3;n>=e.depositMethodItem.channel.length;n--)e.depositMethodItem.channel.push(e.depositMethodItem.channel[0]);e.depositChannelItem=e.depositMethodItem.channel[0],e.depositChannelIdx=0,m.value=e.depositChannelItem.minRechargeAmount,v.value=e.depositChannelItem.maxRechargeAmount,e.depositAmount=e.depositChannelItem.rechargeAmountList.length>0?e.depositChannelItem.rechargeAmountList[0]:m.value,c.barLoading=!1});const I=n=>{e.depositAmount=Number(n)},A=n=>{e.depositMethodItem=n,e.depositMethod=n.id,U(e.depositMethodItem.channel[0])},U=(n,k)=>{e.depositChannelItem=n,e.depositChannelIdx=k,m.value=e.depositChannelItem.minRechargeAmount,v.value=e.depositChannelItem.maxRechargeAmount,e.depositAmount=e.depositChannelItem.rechargeAmountList.length>0?e.depositChannelItem.rechargeAmountList[0]:m.value},F=async()=>{if(!e.depositAmount){await(await V.create({message:g("deposit.toast.text1"),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}if(Number(e.depositAmount)<m.value||Number(e.depositAmount)>v.value){await(await V.create({message:"".concat(g("deposit.toast.text2")," ").concat(m.value," - ").concat(v.value),duration:1500,position:"top",color:"warning",translucent:!0})).present();return}c.fullLoading=!0;const n=await me({amount:e.depositAmount,memberChannelId:e.depositChannelItem.id});n.code==="00000"?n.data&&(C.value.showDialog(),window.open(n.data.payURL,"_blank")):await(await V.create({message:n.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present(),c.fullLoading=!1};return(n,k)=>(l(),L(P,null,[O(d(t(oe),{class:"online-payment"},{default:o(()=>[d(t(N),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:o(()=>[(l(!0),L(P,null,B(t(p).onlinePaymentInfo,(i,h)=>(l(),r(t(D),{key:h,size:"3.4",class:"method-item",onClick:R(S=>A(i),["stop"])},{default:o(()=>[s("div",_e,[d(x,{name:"fade"},{default:o(()=>[i.disable?(l(),r(t(M),{key:0,src:t(_)("/wallet/icon-btn-bg-disable.png")},null,8,["src"])):i.id==e.depositMethod?(l(),r(t(M),{key:1,src:t(_)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):y("",!0)]),_:2},1024)]),s("div",ve,[s("span",null,a(n.$t(i.name)),1)]),i.isRecommend?(l(),r(t(T),{key:0,class:"recommend-badge",color:"danger"},{default:o(()=>[$(a(t(u))+" "+a(i.isRecommend)+"+",1)]),_:2},1024)):y("",!0),s("div",Ie,[d(x,{name:"fade"},{default:o(()=>[i.id==e.depositMethod?(l(),r(t(M),{key:0,src:t(_)("/wallet/icon-btn-select-m.png")},null,8,["src"])):y("",!0)]),_:2},1024)])]),_:2},1032,["onClick"]))),128)),d(t(D),null,{default:o(()=>[e.depositMethodItem.isGuide?(l(),r(t(z),{key:0,class:"btn-guide",fill:"clear",href:e.depositMethodItem.isGuide,target:"_blank",size:"small"},{default:o(()=>[$(a(n.$t("deposit.howToUse")),1)]),_:1},8,["href"])):y("",!0)]),_:1})]),_:1}),ye,d(t(N),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:o(()=>[(l(!0),L(P,null,B(e.depositMethodItem.channel,(i,h)=>(l(),r(t(D),{key:h,size:"3.3",class:"method-item",onClick:R(S=>U(i,h),["stop"])},{default:o(()=>[s("div",be,[d(x,{name:"fade"},{default:o(()=>[h==e.depositChannelIdx?(l(),r(t(M),{key:0,src:t(_)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):y("",!0)]),_:2},1024)]),s("div",Ce,a(n.$t("deposit.channel"))+" "+a(h+1),1),s("div",ke,[d(x,{name:"fade"},{default:o(()=>[h==e.depositChannelIdx?(l(),r(t(M),{key:0,src:t(_)("/wallet/icon-btn-select-m.png")},null,8,["src"])):y("",!0)]),_:2},1024)])]),_:2},1032,["onClick"]))),128))]),_:1}),we,s("div",Ae,[s("span",Me,a(n.$t("deposit.depositAmount"))+": ",1),s("span",$e,"Min: "+a(m.value.toLocaleString()),1),s("span",Se,"Max: "+a(v.value.toLocaleString()),1)]),d(t(N),{style:{margin:"8px 0"}},{default:o(()=>[(l(!0),L(P,null,B(e.depositChannelItem.rechargeAmountList,(i,h)=>(l(),r(t(D),{key:h,size:"2.8",class:se(["amount-item",{select:Number(i)==Number(e.depositAmount)}]),onClick:R(S=>I(i),["stop"])},{default:o(()=>[t(f)?(l(),r(t(T),{key:0,class:"amount-badge",color:"danger"},{default:o(()=>{var S;return[$("+"+a((S=t(p).onlinePaymentInfo)==null?void 0:S.giftList[h]),1)]}),_:2},1024)):y("",!0),s("div",null,a(t(u))+" "+a(i==null?void 0:i.toLocaleString()),1)]),_:2},1032,["class","onClick"]))),128))]),_:1}),d(t(ne),{modelValue:e.depositAmount,"onUpdate:modelValue":k[0]||(k[0]=i=>e.depositAmount=i),label:t(u),type:"number",placeholder:n.$t("deposit.depositAmount"),max:v.value,min:m.value,clearInput:!0},null,8,["modelValue","label","placeholder","max","min"]),Le,s("div",Pe,[s("div",De,a(n.$t("deposit.depositTips"))+": ",1),s("span",xe,[s("div",null,a(n.$t("deposit.message.tips1")),1),s("div",null,a(n.$t("deposit.message.tips2")),1)])]),O(d(t(z),{class:"btn-deposit",expand:"block",shape:"round",onClick:F},{default:o(()=>[$(a(n.$t("deposit.button.depositNow")),1)]),_:1},512),[[E,e.depositAmount]])]),_:1},512),[[E,!t(c).barLoading]]),d(fe,{ref_key:"depositSuccessPopup",ref:C},null,512)],64))}},Ve={__name:"Deposit",setup(w){G();const g=q(),c=b("OnlinePayment"),p={1:{name:"deposit.onlinePayment",value:"OnlinePayment"}},f={OnlinePayment:Re};return ae(async()=>{await g.getChargeInfo()}),(_,C)=>(l(),r(t(ue),{class:"deposit"},{default:o(()=>[d(t(ie),null,{default:o(()=>[Object.keys(p).length>1?(l(),r(t(le),{key:0,modelValue:c.value,"onUpdate:modelValue":C[0]||(C[0]=u=>c.value=u),mode:"md",scrollable:!0},{default:o(()=>[(l(),L(P,null,B(p,(u,m)=>d(t(ce),{key:m,class:"ion-text-capitalize",value:u.value},{default:o(()=>[d(t(T),{class:"recharge-badge",color:"danger"},{default:o(()=>[$(a(u.badge),1)]),_:2},1024),s("div",null,a(_.$t(u.name)),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])):y("",!0)]),_:1}),(l(),r(de,null,[(l(),r(re(f[c.value])))],1024))]),_:1}))}};export{Ve as default};
