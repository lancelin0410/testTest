System.register(["./index-legacy-BizqwEaK.js","./deposit-legacy-DrqaKM1T.js"],(function(e,t){"use strict";var n,o,a,i,l,s,d,p,r,m,c,u,h,g,b,f,x,y,v,w,k,I,C,_,A,z,M,L,P,$,D,N,R,S,j,U,O,V,T,E,B,G,q,F,K,W,X;return{setters:[e=>{n=e.aB,o=e.r,a=e.D,i=e.aa,l=e.d,s=e.j,d=e.w,p=e.h,r=e.f,m=e.u,c=e.x,u=e.y,h=e.v,g=e.K,b=e.B,f=e.a5,x=e.C,y=e.S,v=e.av,w=e.a9,k=e.l,I=e.aD,C=e.ab,_=e.ac,A=e.e,z=e.ak,M=e.al,L=e.q,P=e.F,$=e.i,D=e.s,N=e.aE,R=e.a1,S=e.P,j=e.aC,U=e.ad,O=e.z,V=e.t,T=e.X,E=e.T,B=e.a2,G=e.V,q=e.W,F=e.A,K=e.U},e=>{W=e.g,X=e.r}],execute:function(){var t=document.createElement("style");t.textContent='.Deposit-success-popup{--background: var(--ion-background-light-color);--width: 88vw;--height: fit-content;--box-shadow: 0 28px 48px rgba(0, 0, 0, .4);--border-radius: 6px}.Deposit-success-popup .wrapper{margin:16px 8px;padding:0 12px;height:fit-content}.Deposit-success-popup .wrapper ion-img.btn-close{width:32px;height:32px;position:absolute;top:0;right:0}.Deposit-success-popup .wrapper .dialog-content{font-size:.9rem;color:#fff;padding:8px 4px;margin-bottom:8px}.Deposit-success-popup .wrapper ion-button.btn-confirm{--background: linear-gradient(90deg, #f78d22, #e34e04);--background-activated: linear-gradient(45deg, #f78d22, #e34e04);position:relative;color:#fff}.online-payment .block-title{margin-bottom:12px}.online-payment .amount-item{box-sizing:border-box;white-space:nowrap;width:100%;height:2.4rem;line-height:2rem;border-radius:20px;background-color:var(--ion-background-light-color);text-align:center;margin:8px 2px;padding:.1rem}.online-payment .amount-item.select{border:1px solid #00ff84}.online-payment .amount-item .amount-badge{position:absolute;top:-6px;right:0;min-width:32px;padding:2px 4px;border-radius:10px;font-size:.7rem}.online-payment .method-item{position:relative;height:4rem;line-height:3.8rem;text-align:center;margin:4px 8px;padding:2px}.online-payment .method-item .method-bg{background-color:var(--ion-background-light-color)}.online-payment .method-item .method-bg,.online-payment .method-item .method-fg{position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);aspect-ratio:2.22}.online-payment .method-item .method-bg ion-img,.online-payment .method-item .method-bg::part(image),.online-payment .method-item .method-fg ion-img,.online-payment .method-item .method-fg::part(image){position:absolute;height:100%;width:100%;object-fit:cover}.online-payment .method-item .method-text,.online-payment .method-item .channel-text{position:relative;display:flex;align-items:center;font-size:.9rem}.online-payment .method-item .method-text ion-img,.online-payment .method-item .channel-text ion-img{width:24px;height:24px;flex:1}.online-payment .method-item .method-text span,.online-payment .method-item .channel-text span{flex:2}.online-payment .method-item .recommend-badge{position:absolute;top:6px;left:0;min-width:32px;padding:2px 4px;border-radius:0;font-size:.7rem;z-index:2}.online-payment .method-item .channel-text{justify-content:center}.online-payment .btn-guide{height:100%;font-size:1rem;margin:auto;color:#00ff84;text-decoration-line:underline}.deposit{background-color:var(--ion-background-color)}.deposit .recharge-badge{position:absolute;top:-.4px;padding:.6px 4px;border-radius:10px;font-size:.7rem}.deposit .recharge-badge:before{display:block;content:"";width:0px;height:0px;border-width:4px;border-style:solid;border-color:#00ff84 transparent transparent transparent;position:absolute;left:4px;bottom:-6px}.deposit ion-content{padding:16px 8px 0}.deposit .btn-deposit{--background: linear-gradient(90deg, #24ee89, #9fe871);--background-activated: linear-gradient(40deg, #24ee89, #9fe871);--color: #000000;--box-shadow: 0 0 12px #23ee884d, 0 -2px #1dca6a inset;font-size:1.2rem;min-height:3rem}\n',document.head.appendChild(t);const Y=n("deposit",(()=>{const e=o({}),t=o([]),n=o(!1);return{chargeInfo:e,onlinePaymentInfo:t,isTypeB:n,getChargeInfo:async()=>{const n=await W();"00000"===n.code&&(console.log(n),e.value=n.data||{},t.value=e.value.rechargeTypes)}}}),{persistedState:{persist:!1}}),H={class:"wrapper"},J={class:"dialog-content"},Q={__name:"DepositSuccessPopup",setup(e,{expose:t}){const n=a(),w=i(),{getPublicUrl:k}=x(),{popupEnter:I,popupLeave:C}=y(),_=o(!1),A=()=>{let e=1;const t=setInterval((async()=>{const n=await v();"00000"===n.code&&(w.userInfo.balance=Number(n.data)),e<=5?e++:clearInterval(t)}),5e4);_.value=!1,n.back()};return t({showDialog:async()=>{_.value=!0}}),(e,t)=>(l(),s(m(f),{class:"Deposit-success-popup",isOpen:_.value,enterAnimation:m(I),leaveAnimation:m(C),onDidDismiss:t[1]||(t[1]=e=>_.value=!1)},{default:d((()=>[p("div",H,[r(m(c),{class:"btn-close",src:m(k)("/icon_wallet/icon-popup-close.png"),onClick:t[0]||(t[0]=e=>_.value=!1)},null,8,["src"]),p("div",J,[p("div",null,u(e.$t("deposit.message.tips6")),1),p("div",null,u(e.$t("deposit.message.tips7")),1)]),r(m(h),{class:"btn-confirm ion-text-capitalize",fill:"solid",shape:"round",expand:"block",onClick:g(A,["stop"])},{default:d((()=>[b(u(e.$t("deposit.button.confirm")),1)])),_:1})])])),_:1},8,["isOpen","enterAnimation","leaveAnimation"]))}},Z={class:"method-bg"},ee={class:"method-text"},te={class:"method-fg"},ne=p("hr",null,null,-1),oe={class:"method-bg"},ae={class:"channel-text"},ie={class:"method-fg"},le=p("hr",null,null,-1),se={style:{margin:"4px 0"}},de={class:"block-title"},pe={class:"ion-margin-start",style:{"font-size":"0.9rem"}},re={class:"ion-margin-start",style:{"font-size":"0.9rem"}},me=p("hr",null,null,-1),ce={style:{margin:"4px 0"}},ue={class:"block-title"},he={style:{"font-size":"0.8rem"}},ge={__name:"OnlinePayment",setup(e){const{t:t}=w(),n=k(),a=Y(),{isTypeB:i}=I(a),{getPublicUrl:f}=x(),y=o(null),v=CURRENCY_SIGN,T=o(0),E=o(0),B=C({depositAmount:0,depositMethodItem:{},depositMethod:"",depositChannelItem:{},depositChannelIdx:0,depositMethodList:[]});_((()=>a.onlinePaymentInfo),(()=>{n.barLoading=!0,B.depositMethodItem=a.onlinePaymentInfo[0],B.depositMethod=a.onlinePaymentInfo[0].id;for(let e=3;e>=B.depositMethodItem.channel.length;e--)B.depositMethodItem.channel.push(B.depositMethodItem.channel[0]);B.depositChannelItem=B.depositMethodItem.channel[0],B.depositChannelIdx=0,T.value=B.depositChannelItem.minRechargeAmount,E.value=B.depositChannelItem.maxRechargeAmount,B.depositAmount=B.depositChannelItem.rechargeAmountList.length>0?B.depositChannelItem.rechargeAmountList[0]:T.value,n.barLoading=!1}));const G=(e,t)=>{B.depositChannelItem=e,B.depositChannelIdx=t,T.value=B.depositChannelItem.minRechargeAmount,E.value=B.depositChannelItem.maxRechargeAmount,B.depositAmount=B.depositChannelItem.rechargeAmountList.length>0?B.depositChannelItem.rechargeAmountList[0]:T.value},q=async()=>{if(!B.depositAmount){const e=await V.create({message:t("deposit.toast.text1"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await e.present())}if(Number(B.depositAmount)<T.value||Number(B.depositAmount)>E.value){const e=await V.create({message:`${t("deposit.toast.text2")} ${T.value} - ${E.value}`,duration:1500,position:"top",color:"warning",translucent:!0});return void(await e.present())}n.fullLoading=!0;const e=await X({amount:B.depositAmount,memberChannelId:B.depositChannelItem.id});if("00000"===e.code)e.data&&(y.value.showDialog(),window.open(e.data.payURL,"_blank"));else{const t=await V.create({message:e.msg,duration:1500,position:"top",color:"danger",translucent:!0});await t.present()}n.fullLoading=!1};return(e,t)=>(l(),A(P,null,[z(r(m(O),{class:"online-payment"},{default:d((()=>[r(m(L),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:d((()=>[(l(!0),A(P,null,$(m(a).onlinePaymentInfo,((t,n)=>(l(),s(m(D),{key:n,size:"3.4",class:"method-item",onClick:g((e=>(e=>{B.depositMethodItem=e,B.depositMethod=e.id,G(B.depositMethodItem.channel[0])})(t)),["stop"])},{default:d((()=>[p("div",Z,[r(N,{name:"fade"},{default:d((()=>[t.disable?(l(),s(m(c),{key:0,src:m(f)("/wallet/icon-btn-bg-disable.png")},null,8,["src"])):t.id==B.depositMethod?(l(),s(m(c),{key:1,src:m(f)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):R("",!0)])),_:2},1024)]),p("div",ee,[p("span",null,u(e.$t(t.name)),1)]),t.isRecommend?(l(),s(m(S),{key:0,class:"recommend-badge",color:"danger"},{default:d((()=>[b(u(m(v))+" "+u(t.isRecommend)+"+",1)])),_:2},1024)):R("",!0),p("div",te,[r(N,{name:"fade"},{default:d((()=>[t.id==B.depositMethod?(l(),s(m(c),{key:0,src:m(f)("/wallet/icon-btn-select-m.png")},null,8,["src"])):R("",!0)])),_:2},1024)])])),_:2},1032,["onClick"])))),128)),r(m(D),null,{default:d((()=>[B.depositMethodItem.isGuide?(l(),s(m(h),{key:0,class:"btn-guide",fill:"clear",href:B.depositMethodItem.isGuide,target:"_blank",size:"small"},{default:d((()=>[b(u(e.$t("deposit.howToUse")),1)])),_:1},8,["href"])):R("",!0)])),_:1})])),_:1}),ne,r(m(L),{class:"ion-justify-content-between",style:{margin:"8px 0"}},{default:d((()=>[(l(!0),A(P,null,$(B.depositMethodItem.channel,((t,n)=>(l(),s(m(D),{key:n,size:"3.3",class:"method-item",onClick:g((e=>G(t,n)),["stop"])},{default:d((()=>[p("div",oe,[r(N,{name:"fade"},{default:d((()=>[n==B.depositChannelIdx?(l(),s(m(c),{key:0,src:m(f)("/wallet/icon-btn-bg-select.png")},null,8,["src"])):R("",!0)])),_:2},1024)]),p("div",ae,u(e.$t("deposit.channel"))+" "+u(n+1),1),p("div",ie,[r(N,{name:"fade"},{default:d((()=>[n==B.depositChannelIdx?(l(),s(m(c),{key:0,src:m(f)("/wallet/icon-btn-select-m.png")},null,8,["src"])):R("",!0)])),_:2},1024)])])),_:2},1032,["onClick"])))),128))])),_:1}),le,p("div",se,[p("span",de,u(e.$t("deposit.depositAmount"))+": ",1),p("span",pe,"Min: "+u(T.value.toLocaleString()),1),p("span",re,"Max: "+u(E.value.toLocaleString()),1)]),r(m(L),{style:{margin:"8px 0"}},{default:d((()=>[(l(!0),A(P,null,$(B.depositChannelItem.rechargeAmountList,((e,t)=>(l(),s(m(D),{key:t,size:"2.8",class:j(["amount-item",{select:Number(e)==Number(B.depositAmount)}]),onClick:g((t=>{return n=e,void(B.depositAmount=Number(n));var n}),["stop"])},{default:d((()=>[m(i)?(l(),s(m(S),{key:0,class:"amount-badge",color:"danger"},{default:d((()=>{var e;return[b("+"+u(null===(e=m(a).onlinePaymentInfo)||void 0===e?void 0:e.giftList[t]),1)]})),_:2},1024)):R("",!0),p("div",null,u(m(v))+" "+u(null==e?void 0:e.toLocaleString()),1)])),_:2},1032,["class","onClick"])))),128))])),_:1}),r(m(U),{modelValue:B.depositAmount,"onUpdate:modelValue":t[0]||(t[0]=e=>B.depositAmount=e),label:m(v),type:"number",placeholder:e.$t("deposit.depositAmount"),max:E.value,min:T.value,clearInput:!0},null,8,["modelValue","label","placeholder","max","min"]),me,p("div",ce,[p("div",ue,u(e.$t("deposit.depositTips"))+": ",1),p("span",he,[p("div",null,u(e.$t("deposit.message.tips1")),1),p("div",null,u(e.$t("deposit.message.tips2")),1)])]),z(r(m(h),{class:"btn-deposit",expand:"block",shape:"round",onClick:q},{default:d((()=>[b(u(e.$t("deposit.button.depositNow")),1)])),_:1},512),[[M,B.depositAmount]])])),_:1},512),[[M,!m(n).barLoading]]),r(Q,{ref_key:"depositSuccessPopup",ref:y},null,512)],64))}};e("default",{__name:"Deposit",setup(e){k();const t=Y(),n=o("OnlinePayment"),a={1:{name:"deposit.onlinePayment",value:"OnlinePayment"}},i={OnlinePayment:ge};return T((async()=>{await t.getChargeInfo()})),(e,t)=>(l(),s(m(F),{class:"deposit"},{default:d((()=>[r(m(B),null,{default:d((()=>[Object.keys(a).length>1?(l(),s(m(E),{key:0,modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),mode:"md",scrollable:!0},{default:d((()=>[(l(),A(P,null,$(a,((t,n)=>r(m(K),{key:n,class:"ion-text-capitalize",value:t.value},{default:d((()=>[r(m(S),{class:"recharge-badge",color:"danger"},{default:d((()=>[b(u(t.badge),1)])),_:2},1024),p("div",null,u(e.$t(t.name)),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue"])):R("",!0)])),_:1}),(l(),s(G,null,[(l(),s(q(i[n.value])))],1024))])),_:1}))}})}}}));