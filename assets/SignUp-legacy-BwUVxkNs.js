System.register(["./index-legacy-BizqwEaK.js"],(function(e,t){"use strict";var o,n,a,l,i,s,r,c,d,u,p,g,f,m,b,v,h,w,x,k,y,C,_,I,P,U,V,L,z,$,A;return{setters:[e=>{o=e.a9,n=e.l,a=e.aa,l=e.r,i=e.ab,s=e.ac,r=e.j,c=e.w,d=e.u,u=e.D,p=e.d,g=e.f,f=e.x,m=e.M,b=e.h,v=e.y,h=e.H,w=e.ad,x=e.v,k=e.B,y=e.L,C=e.J,_=e.af,I=e.ag,P=e.K,U=e.a1,V=e.ah,L=e.z,z=e.A,$=e.C,A=e.ai}],execute:function(){var t=document.createElement("style");t.textContent=".sign-up{background-color:var(--ion-background-color)}.sign-up ion-list ion-item{--ion-item-background: transparent;margin-bottom:8px}.sign-up .btn-forget{margin-left:50%;color:#b3bec1;font-size:.8rem;font-weight:1000}.sign-up .btn-sign-up{--background: linear-gradient(90deg, #24ee89, #9fe871);--background-activated: linear-gradient(40deg, #24ee89, #9fe871);--border-radius: 8px;--color: #000000;--box-shadow: 0 0 12px #23ee884d, 0 -2px #1dca6a inset;margin:auto}.sign-up .note{font-size:.8rem;font-weight:800;display:flex;align-items:center}.sign-up .note .btn-sing-in{font-size:.9rem;font-weight:800;color:#24ee89}.sign-up .sign-up-divider{position:relative;height:fit-content;width:100%}.sign-up .sign-up-divider .divider-text{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);font-size:.8rem;color:#b3bec1;padding:10px;background-color:var(--ion-background-color)}\n",document.head.appendChild(t);const R={style:{"font-weight":"1000"}},E={class:"input-prefix",slot:"start"},O=b("span",{class:"input-prefix",slot:"start"},"OTP",-1),S={class:"note"},j=b("div",{class:"sign-up-divider"},[b("hr"),b("div",{class:"divider-text"},"OR")],-1);e("default",{__name:"SignUp",setup(e){const{t:t}=o(),B=u(),M=n(),N=a(),{getPublicUrl:D}=$(),G=l(!1),H=i({promotionCode:M.inviteCode,device:"h5",mobile:"",sessionId:"",code:""});let J;const K=Number(M.appConfig.callPrefixes),T=l(t("account.button.otp")),q=l(0),F=async()=>{if(0==q.value){if(!H.mobile||0==H.mobile.length){const e=await toastController.create({message:t("account.resister.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await e.present())}const e=await A({mobile:M.encrypt.encrypt(H.mobile),callPrefixes:K});"00000"===e.code&&(H.sessionId=e.data.sessionId,q.value=60,Q())}},Q=()=>{T.value=`${q.value}s`,J=setInterval((()=>{q.value>0?(q.value--,T.value=`${q.value}s`):(T.value=t("account.button.otp"),q.value=0,clearInterval(J))}),1e3)},W=async()=>{if(H.mobile&&0!=H.mobile.length)if(H.code&&0!=H.code.length)M.fullLoading=!0,await N.mobileRegister(H),M.fullLoading=!1;else{const e=await toastController.create({message:t("account.resister.toast.verificationCode"),duration:1500,position:"top",color:"warning",translucent:!0});await e.present()}else{const e=await toastController.create({message:t("account.resister.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});await e.present()}},X=async()=>{M.fullLoading=!0,await N.anonymousRegister(H),M.fullLoading=!1};return s((()=>N.isLogin),(()=>{N.isLogin&&B.replace("/")})),(e,t)=>(p(),r(d(z),{class:"sign-up"},{default:c((()=>[g(d(f),{src:d(D)("/banner.webp")},null,8,["src"]),g(d(L),null,{default:c((()=>[g(d(m),{lines:"none"},{default:c((()=>[b("h5",R,v(e.$t("login.header.signUp")),1),g(d(h),null,{default:c((()=>[g(d(w),{modelValue:H.mobile,"onUpdate:modelValue":t[0]||(t[0]=e=>H.mobile=e),fill:"outline",placeholder:"Phone Number"},{default:c((()=>[b("span",E,"+"+v(d(K)),1)])),_:1},8,["modelValue"])])),_:1}),g(d(h),null,{default:c((()=>[g(d(w),{modelValue:H.code,"onUpdate:modelValue":t[1]||(t[1]=e=>H.code=e),placeholder:e.$t("account.withdrawalPassword.label.otpPlaceholder")},{default:c((()=>[O,g(d(x),{slot:"end",class:"btn-otp",color:"medium",style:{color:"#00ff84"},onClick:F},{default:c((()=>[k(v(T.value),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),g(d(h),null,{default:c((()=>[g(d(y),null,{default:c((()=>[b("div",{style:{"font-size":"0.8rem","font-weight":"1000","margin-bottom":"8px",display:"flex","align-items":"center"},onClick:t[2]||(t[2]=P((e=>G.value=!G.value),["stop"]))},[k(" Enter Referral / Promo Code "),g(d(C),{icon:G.value?d(_):d(I),style:{"margin-left":"4px"}},null,8,["icon"])]),G.value?(p(),r(d(w),{key:0,modelValue:H.promotionCode,"onUpdate:modelValue":t[3]||(t[3]=e=>H.promotionCode=e),fill:"outline"},null,8,["modelValue"])):U("",!0)])),_:1})])),_:1})])),_:1}),g(d(V),{checked:!0,"label-placement":"end"},{default:c((()=>[k(" I agree to the "),b("a",{href:"#",style:{color:"#fff","font-weight":"800","text-decoration":"none"},onClick:t[4]||(t[4]=e=>e.stopPropagation())},"User Agreement"),k(" & confirm I am at least 18 years old ")])),_:1}),g(d(V),{checked:!0,"label-placement":"end"},{default:c((()=>[k(" I agree to receive marketing promotions from BC.GAME. ")])),_:1}),g(d(x),{class:"btn-sign-up",expand:"block",onClick:P(W,["stop"])},{default:c((()=>[k(v(e.$t("login.header.signUp")),1)])),_:1}),b("div",S,[k(" Already have an account? "),g(d(x),{class:"btn-sing-in",fill:"clear","router-link":"/login/signIn"},{default:c((()=>[k("Sign In")])),_:1})]),j,g(d(x),{class:"btn-sign-up",expand:"block",onClick:P(X,["stop"])},{default:c((()=>[k(v(e.$t("login.header.signUpOneClick")),1)])),_:1})])),_:1})])),_:1}))}})}}}));