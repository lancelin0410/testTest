System.register(["./index-legacy-BizqwEaK.js","./withdraw-legacy-CFPhkEqK.js"],(function(a,e){"use strict";var t,o,r,s,d,n,l,i,w,c,u,p,h,m,g,f,P,b,v,y,x,_,V,k,I,O,C,R,$,L,U;return{setters:[a=>{t=a.a9,o=a.l,r=a.ab,s=a.r,d=a.m,n=a.X,l=a.aH,i=a.j,w=a.w,c=a.u,u=a.D,p=a.d,h=a.z,m=a.f,g=a.H,f=a.ad,P=a.J,b=a.aJ,v=a.aK,y=a.a1,x=a.h,_=a.y,V=a.v,k=a.B,I=a.M,O=a.A,C=a.t,R=a.ae,$=a.aT},a=>{L=a.f,U=a.h}],execute:function(){var e=document.createElement("style");e.textContent=".withdraw-password{background-color:var(--ion-background-color)}.withdraw-password ion-list ion-item{--ion-item-background: transparent;margin-bottom:8px}.withdraw-password .btn-otp{--background: var(--ion-background-color);--background-activated: var(--ion-background-color);min-height:2rem}.withdraw-password .btn-otp::part(native){padding:2px 16px}.withdraw-password .btn-confirm{--background: linear-gradient(90deg, #24ee89, #9fe871);--background-activated: linear-gradient(40deg, #24ee89, #9fe871);--color: #000000;--box-shadow: 0 0 12px #23ee884d, 0 -2px #1dca6a inset;font-size:1.2rem;min-height:3rem;margin:16px}\n",document.head.appendChild(e);const j={slot:"start"},B=x("span",{slot:"start"},"OTP",-1);a("default",{__name:"WithdrawPassword",setup(a){const{t:e}=t(),T=u(),z=o(),H=r({withdrawPasswordOri:"",withdrawPassword:"",withdrawPasswordRepeat:"",mobile:"",code:"",sessionId:""});let J;const S=Number(z.appConfig.callPrefixes),A=s(0),D=s(e("account.button.otp")),E=s(!1);d((()=>Boolean(H.mobile))),n((async()=>{z.barLoading=!0;const a=await l();"00000"===a.code&&(E.value=Boolean(a.data.withdrawPasswordValid)),z.barLoading=!1}));const F=async()=>{if(0==A.value){if(!H.mobile||0==H.mobile.length){const a=await C.create({message:e("account.withdrawalPassword.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await a.present())}const a=await R({mobile:z.encrypt.encrypt(H.mobile),callPrefixes:S});"00000"===a.code&&(H.sessionId=a.data.sessionId,A.value=60,K())}},K=()=>{D.value=`${A.value}s`,J=setInterval((()=>{A.value>0?(A.value--,D.value=`${A.value}s`):(D.value=e("account.button.otp"),A.value=0,clearInterval(J))}),1e3)},M=async()=>{if(E.value&&(!H.withdrawPasswordOri||0==H.withdrawPasswordOri.length)){const a=await C.create({message:e("account.withdrawalPassword.toast.withdrawPasswdOri"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await a.present())}if(!H.withdrawPassword||0==H.withdrawPassword.length){const a=await C.create({message:e("account.withdrawalPassword.toast.withdrawPasswd"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await a.present())}if(H.withdrawPassword!==H.withdrawPasswordRepeat){const a=await C.create({message:e("account.withdrawalPassword.toast.withdrawPasswdRepeat"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await a.present())}if(!H.mobile||0==H.mobile.length){const a=await C.create({message:e("account.withdrawalPassword.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await a.present())}if(!H.code||0==H.code.length){const a=await C.create({message:e("account.withdrawalPassword.toast.verificationCode"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await a.present())}let a;if(z.fullLoading=!0,a=E.value?await L({oldPassword:z.encrypt.encrypt(H.withdrawPasswordOri),password:z.encrypt.encrypt(H.withdrawPassword),confirmPassword:z.encrypt.encrypt(H.withdrawPasswordRepeat),code:H.code,sessionId:H.sessionId}):await U({password:z.encrypt.encrypt(H.withdrawPassword),confirmPassword:z.encrypt.encrypt(H.withdrawPasswordRepeat),code:H.code,sessionId:H.sessionId}),"00000"===a.code){const a=await C.create({message:"Success",duration:1500,position:"top",translucent:!0,icon:$,color:"success"});await a.present(),setTimeout((()=>T.back()),1e3)}z.fullLoading=!1};return(a,e)=>(p(),i(c(O),{class:"withdraw-password"},{default:w((()=>[c(z).barLoading?y("",!0):(p(),i(c(h),{key:0},{default:w((()=>[m(c(I),{lines:"none"},{default:w((()=>[E.value?(p(),i(c(g),{key:0,style:{margin:"32px 0"}},{default:w((()=>[m(c(f),{modelValue:H.withdrawPasswordOri,"onUpdate:modelValue":e[0]||(e[0]=a=>H.withdrawPasswordOri=a),type:"password",fill:"outline",placeholder:a.$t("account.withdrawalPassword.label.originalPassword")},{default:w((()=>[m(c(P),{slot:"start",icon:c(b)},null,8,["icon"]),m(c(v),{slot:"end",color:"medium"})])),_:1},8,["modelValue","placeholder"])])),_:1})):y("",!0),m(c(g),{style:{margin:"8px 0"}},{default:w((()=>[m(c(f),{modelValue:H.withdrawPassword,"onUpdate:modelValue":e[1]||(e[1]=a=>H.withdrawPassword=a),type:"password",fill:"outline",placeholder:a.$t("account.withdrawalPassword.label.password")},{default:w((()=>[m(c(P),{slot:"start",icon:c(b)},null,8,["icon"]),m(c(v),{slot:"end",color:"medium"})])),_:1},8,["modelValue","placeholder"])])),_:1}),m(c(g),{style:{margin:"8px 0 16px 0"}},{default:w((()=>[m(c(f),{modelValue:H.withdrawPasswordRepeat,"onUpdate:modelValue":e[2]||(e[2]=a=>H.withdrawPasswordRepeat=a),type:"password",fill:"outline",placeholder:a.$t("account.withdrawalPassword.label.repeatPassword")},{default:w((()=>[m(c(P),{slot:"start",icon:c(b)},null,8,["icon"]),m(c(v),{slot:"end",color:"medium"})])),_:1},8,["modelValue","placeholder"])])),_:1}),m(c(g),{style:{margin:"16px 0 8px 0"}},{default:w((()=>[m(c(f),{modelValue:H.mobile,"onUpdate:modelValue":e[3]||(e[3]=a=>H.mobile=a),fill:"outline",placeholder:a.$t("account.withdrawalPassword.label.phone")},{default:w((()=>[x("span",j,"+"+_(c(S)),1)])),_:1},8,["modelValue","placeholder"])])),_:1}),m(c(g),{style:{margin:"8px 0"}},{default:w((()=>[m(c(f),{modelValue:H.code,"onUpdate:modelValue":e[4]||(e[4]=a=>H.code=a),fill:"outline",placeholder:a.$t("account.withdrawalPassword.label.otpPlaceholder")},{default:w((()=>[B,m(c(V),{slot:"end",class:"btn-otp",color:"medium",style:{color:"#00ff84"},onClick:F},{default:w((()=>[k(_(D.value),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1}),m(c(V),{class:"btn-confirm",expand:"block",shape:"round",onClick:M},{default:w((()=>[k("Confirm")])),_:1})])),_:1}))])),_:1}))}})}}}));
