System.register(["./vue-i18n-legacy-WETM5xmZ.js","./@ionic-legacy-C_EMZ1mY.js","./index-legacy-DlSlFHB4.js","./withdraw-legacy-D7iXtV2C.js","./@vue-legacy-B-urbumr.js","./@intlify-legacy-DDHA1rkh.js","./@ionic_components_1-legacy-JpBorfOj.js","./@stencil-legacy-CMekSw7s.js","./@ionic_components_2-legacy-Qqv6OEPb.js","./@capacitor-legacy-0yG8iurR.js","./vue-router-legacy-e5j_sQem.js","./ionicons-legacy-DzPLRO0r.js","./localforage-legacy-D0pVUvDl.js","./@adjustcom-legacy-QP0zxLxB.js","./pinia-legacy-oPS7AB0O.js","./jsencrypt-legacy-DGJHbPQ6.js","./pinia-plugin-persistedstate-2-legacy-CtlOhiZd.js","./@awesome-cordova-plugins-legacy-CuOL20OL.js","./rxjs-legacy-C12cs3ed.js","./tslib-legacy-BRpw1qYg.js"],(function(a,e){"use strict";var t,l,s,o,i,n,r,d,c,w,u,p,h,g,m,f,b,v,P,y,x,j,k,_,C;return{setters:[a=>{t=a.u},a=>{l=a.u,s=a.K,o=a.d,i=a.L,n=a.f,r=a.n,d=a.P,c=a.j,w=a.t},a=>{u=a.a,p=a.c,h=a.b,g=a.f},a=>{m=a.s},a=>{f=a.j,b=a.r,v=a.I,P=a.J,y=a.E,x=a.H,j=a.C,k=a.L,_=a.M,C=a.O},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var e=document.createElement("style");e.textContent=".withdraw-password ion-input{border-radius:10px!important;border:3px solid #c5000f}.withdraw-password ion-input label.input-wrapper{padding:4px 8px;height:48px}.withdraw-password ion-input .input-prefix{color:#c5000f;width:48px;height:35px;border-right:2px solid #c5000f;padding-right:8px;line-height:35px;text-align:center}.withdraw-password .block-title{font-size:1rem;margin:12px 0}.withdraw-password .btn-otp{--background: var(--ion-background-color);--background-activated: var(--ion-background-color);min-height:2rem}.withdraw-password .btn-otp::part(native){padding:2px 16px}.withdraw-password .btn-confirm{--background: linear-gradient(90deg, #f78d22, #e34e04);--background-activated: linear-gradient(45deg, #f78d22, #e34e04);font-size:1.2rem;min-height:3rem}\n",document.head.appendChild(e);const V={style:{margin:"4px 0"}},$={class:"block-title"},I={style:{margin:"4px 0"}},R={class:"block-title"},U={style:{margin:"4px 0"}},L={class:"block-title"},M={class:"input-prefix",slot:"start"},O=k("br",null,null,-1),z=k("span",{class:"input-prefix",slot:"start"},"OTP",-1);a("default",{__name:"WithdrawPassword",setup(a){const{t:e}=t(),D=l(),E=u(),S=p(),{getImgUrl:T}=h(),H=f({withdrawPasswd:"",withdrawPasswdRepeat:"",mobile:S.userInfo.mobile?S.userInfo.mobile.substring(2):"",verificationCode:"",canModifyPwd:!S.userInfo.mobile});let J;const K=b(0),W=b(e("account.button.otp")),q=async()=>{if(0==K.value){if(!H.mobile||0==H.mobile.length){const a=await w.create({message:e("account.withdrawalPassword.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});return void(await a.present())}const a=await g({tel:H.mobile});"200"==a.state&&(K.value=a.resultData,A())}},A=()=>{W.value=`${K.value}s`,J=setInterval((()=>{K.value>0?(K.value--,W.value=`${K.value}s`):(W.value=e("account.button.otp"),K.value=0,clearInterval(J))}),1e3)},B=async()=>{if(H.withdrawPasswd&&0!=H.withdrawPasswd.length)if(H.withdrawPasswd===H.withdrawPasswdRepeat)if(H.mobile&&0!=H.mobile.length)if(H.verificationCode&&0!=H.verificationCode.length){if(E.fullLoading=!0,"200"==(await m({withdrawPasswd:H.withdrawPasswd,withdrawPasswdRepeat:H.withdrawPasswdRepeat,mobile:H.canModifyPwd?H.mobile:null,verificationCode:H.verificationCode})).state){const a=await w.create({message:"Success",duration:1500,position:"top",translucent:!0,icon:checkmarkOutline,color:"success"});await a.present(),setTimeout((()=>D.back()),1e3)}E.fullLoading=!1}else{const a=await w.create({message:e("account.withdrawalPassword.toast.verificationCode"),duration:1500,position:"top",color:"warning",translucent:!0});await a.present()}else{const a=await w.create({message:e("account.withdrawalPassword.toast.phone"),duration:1500,position:"top",color:"warning",translucent:!0});await a.present()}else{const a=await w.create({message:e("account.withdrawalPassword.toast.withdrawPasswdRepeat"),duration:1500,position:"top",color:"warning",translucent:!0});await a.present()}else{const a=await w.create({message:e("account.withdrawalPassword.toast.withdrawPasswd"),duration:1500,position:"top",color:"warning",translucent:!0});await a.present()}};return(a,e)=>(x(),v(y(c),{class:"withdraw-password"},{default:P((()=>[j(y(r),null,{default:P((()=>[k("div",V,[k("div",$,_(a.$t("account.withdrawalPassword.label.password")),1),j(y(s),{modelValue:H.withdrawPasswd,"onUpdate:modelValue":e[0]||(e[0]=a=>H.withdrawPasswd=a),type:"password",placeholder:a.$t("account.withdrawalPassword.label.password")},{default:P((()=>[j(y(o),{class:"input-prefix",slot:"start",src:y(T)("/account/w-password.png")},null,8,["src"]),j(y(i),{slot:"end",color:"medium"})])),_:1},8,["modelValue","placeholder"])]),k("div",I,[k("div",R,_(a.$t("account.withdrawalPassword.label.repeatPassword")),1),j(y(s),{modelValue:H.withdrawPasswdRepeat,"onUpdate:modelValue":e[1]||(e[1]=a=>H.withdrawPasswdRepeat=a),type:"password",placeholder:a.$t("account.withdrawalPassword.label.repeatPassword")},{default:P((()=>[j(y(o),{class:"input-prefix",slot:"start",src:y(T)("/account/w-password.png")},null,8,["src"]),j(y(i),{slot:"end",color:"medium"})])),_:1},8,["modelValue","placeholder"])]),k("div",U,[k("div",L,_(a.$t("account.withdrawalPassword.label.phone")),1),j(y(s),{modelValue:H.mobile,"onUpdate:modelValue":e[2]||(e[2]=a=>H.mobile=a),placeholder:a.$t("account.withdrawalPassword.label.phone")},{default:P((()=>[k("span",M,_(y("+91")),1)])),_:1},8,["modelValue","placeholder"]),O,j(y(s),{modelValue:H.verificationCode,"onUpdate:modelValue":e[3]||(e[3]=a=>H.verificationCode=a),placeholder:a.$t("account.withdrawalPassword.label.otpPlaceholder")},{default:P((()=>[z,j(y(n),{slot:"end",class:"btn-otp",style:{color:"#c5000f"},onClick:q},{default:P((()=>[C(_(W.value),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])])),_:1}),j(y(d),null,{default:P((()=>[j(y(n),{class:"btn-confirm",expand:"block",shape:"round",onClick:B},{default:P((()=>[C(_(a.$t("account.button.confirm")),1)])),_:1})])),_:1})])),_:1}))}})}}}));