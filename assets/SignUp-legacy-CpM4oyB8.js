System.register(["./@vue-legacy-D643Ih6I.js","./vue-i18n-legacy-C8AAcyDP.js","./@ionic-legacy-DJIsya6n.js","./ionicons-legacy-BylianOU.js","./index-legacy-bZKtyn7e.js","./@intlify-legacy-DDHA1rkh.js","./@ionic_components_1-legacy-C2GjtunC.js","./@stencil-legacy-Dkr4NQJU.js","./@ionic_components_2-legacy-DV709hm9.js","./@capacitor-legacy-0yG8iurR.js","./vue-router-legacy-tg1qdIBO.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-DURUUAUq.js","./jsencrypt-legacy-DGJHbPQ6.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-Bb45XN-u.js","./rxjs-legacy-CA8OYncU.js","./tslib-legacy-BRpw1qYg.js"],(function(e,l){"use strict";var n,t,o,a,i,s,r,c,u,d,g,p,f,m,b,v,y,h,w,j,k,x,_,C,I,P,U,V,L,$,z,A;return{setters:[e=>{n=e.r,t=e.k,o=e.w,a=e.J,i=e.K,s=e.G,r=e.I,c=e.D,u=e.M,d=e.N,g=e.P,p=e.O,f=e.U},e=>{m=e.u},e=>{b=e.u,v=e.d,y=e.C,h=e.D,w=e.J,j=e.f,k=e.l,x=e.e,_=e.K,C=e.n,I=e.j},e=>{P=e.g,U=e.h},e=>{V=e.u,L=e.c,$=e.b,z=e.j,A=e.i},null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=".sign-up{background-color:var(--ion-background-color)}.sign-up ion-list ion-item{--ion-item-background: transparent;margin-bottom:8px}.sign-up .btn-forget{margin-left:50%;color:#b3bec1;font-size:.8rem;font-weight:1000}.sign-up .btn-sign-up{--background: linear-gradient(90deg, #24ee89, #9fe871);--background-activated: linear-gradient(40deg, #24ee89, #9fe871);--border-radius: 8px;--color: #000000;--box-shadow: 0 0 12px #23ee884d, 0 -2px #1dca6a inset;margin:auto}.sign-up .note{font-size:.8rem;font-weight:800;display:flex;align-items:center}.sign-up .note .btn-sing-in{font-size:.9rem;font-weight:800;color:#24ee89}.sign-up .sign-up-divider{position:relative;height:fit-content;width:100%}.sign-up .sign-up-divider .divider-text{position:absolute;top:0;left:50%;transform:translate(-50%,-50%);font-size:.8rem;color:#b3bec1;padding:10px;background-color:var(--ion-background-color)}\n",document.head.appendChild(l);const O={style:{"font-weight":"1000"}},R={class:"input-prefix",slot:"start"},E=u("span",{class:"input-prefix",slot:"start"},"OTP",-1),N={class:"note"},S=u("div",{class:"sign-up-divider"},[u("hr"),u("div",{class:"divider-text"},"OR")],-1);e("default",{__name:"SignUp",setup(e){const{t:l}=m(),D=b(),G=V(),J=L(),{getPublicUrl:K}=$(),{headerAnimation:M}=A(),B=n(!1),T=t({promotionCode:G.inviteCode,device:"h5",mobile:"",sessionId:"",code:""});let q;const F=Number(G.appConfig.callPrefixes),H=n(l("account.button.otp")),Q=n(0),W=async()=>{if(0==Q.value){if(!T.mobile||0==T.mobile.length){const e=await toastController.create({message:l("account.resister.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await e.present())}const e=await z({mobile:G.encrypt.encrypt(T.mobile),callPrefixes:F});"00000"===e.code&&(T.sessionId=e.data.sessionId,Q.value=60,X())}},X=()=>{H.value=`${Q.value}s`,q=setInterval((()=>{Q.value>0?(Q.value--,H.value=`${Q.value}s`):(H.value=l("account.button.otp"),Q.value=0,clearInterval(q))}),1e3)},Y=async()=>{if(T.mobile&&0!=T.mobile.length)if(T.code&&0!=T.code.length)G.fullLoading=!0,await J.mobileRegister(T),G.fullLoading=!1;else{const e=await toastController.create({message:l("account.resister.toast.verificationCode"),duration:1500,position:"top",color:"warning",translucent:!0});await e.present()}else{const e=await toastController.create({message:l("account.resister.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});await e.present()}},Z=async()=>{G.fullLoading=!0,await J.anonymousRegister(T),G.fullLoading=!1};return o((()=>J.isLogin),(()=>{J.isLogin&&D.navigate("/","back","replace",M)})),(e,l)=>(r(),a(s(I),{class:"sign-up"},{default:i((()=>[c(s(v),{src:s(K)("/banner.webp")},null,8,["src"]),c(s(C),null,{default:i((()=>[c(s(y),{lines:"none"},{default:i((()=>[u("h5",O,d(e.$t("login.header.signUp")),1),c(s(h),null,{default:i((()=>[c(s(w),{modelValue:T.mobile,"onUpdate:modelValue":l[0]||(l[0]=e=>T.mobile=e),fill:"outline",placeholder:"Phone Number"},{default:i((()=>[u("span",R,"+"+d(s(F)),1)])),_:1},8,["modelValue"])])),_:1}),c(s(h),null,{default:i((()=>[c(s(w),{modelValue:T.code,"onUpdate:modelValue":l[1]||(l[1]=e=>T.code=e),placeholder:e.$t("account.withdrawalPassword.label.otpPlaceholder")},{default:i((()=>[E,c(s(j),{slot:"end",class:"btn-otp",color:"medium",style:{color:"#00ff84"},onClick:W},{default:i((()=>[g(d(H.value),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),c(s(h),null,{default:i((()=>[c(s(k),null,{default:i((()=>[u("div",{style:{"font-size":"0.8rem","font-weight":"1000","margin-bottom":"8px",display:"flex","align-items":"center"},onClick:l[2]||(l[2]=p((e=>B.value=!B.value),["stop"]))},[g(" Enter Referral / Promo Code "),c(s(x),{icon:B.value?s(P):s(U),style:{"margin-left":"4px"}},null,8,["icon"])]),B.value?(r(),a(s(w),{key:0,modelValue:T.promotionCode,"onUpdate:modelValue":l[3]||(l[3]=e=>T.promotionCode=e),fill:"outline"},null,8,["modelValue"])):f("",!0)])),_:1})])),_:1})])),_:1}),c(s(_),{checked:!0,"label-placement":"end"},{default:i((()=>[g(" I agree to the "),u("a",{href:"#",style:{color:"#fff","font-weight":"800","text-decoration":"none"},onClick:l[4]||(l[4]=e=>e.stopPropagation())},"User Agreement"),g(" & confirm I am at least 18 years old ")])),_:1}),c(s(_),{checked:!0,"label-placement":"end"},{default:i((()=>[g(" I agree to receive marketing promotions from BC.GAME. ")])),_:1}),c(s(j),{class:"btn-sign-up",expand:"block",onClick:p(Y,["stop"])},{default:i((()=>[g(d(e.$t("login.header.signUp")),1)])),_:1}),u("div",N,[g(" Already have an account? "),c(s(j),{class:"btn-sing-in",fill:"clear","router-link":"/login/signIn"},{default:i((()=>[g("Sign In")])),_:1})]),S,c(s(j),{class:"btn-sign-up",expand:"block",onClick:p(Z,["stop"])},{default:i((()=>[g(d(e.$t("login.header.signUpOneClick")),1)])),_:1})])),_:1})])),_:1}))}})}}}));