import{j as I,w as _,H as h,I as t,D as o,G as N,B as e,K as p,L as m,N as r,M as b}from"./@vue-DTz7U7Qz.js";import{b as V}from"./vue-router-DOZNrN4o.js";import{d as k,B,C as d,D as c,E as C,f as u,o as P,k as U,t as y}from"./@ionic-CzwVdRzf.js";import{c as E,u as L}from"./index-Dl69SvmX.js";import"./@stencil-pJInS8Bp.js";import"./@ionic_components_2-B7avanbD.js";import"./@capacitor-CHoHO2YB.js";import"./@ionic_components_1-DvAo80W9.js";import"./ionicons-CQ86uuwl.js";import"./localforage-qzmIiYbH.js";import"./@adjustcom-Dev-Q0DI.js";import"./pinia-CPOmtiCh.js";import"./vue-i18n-D1b3Hhsl.js";import"./@intlify-BAcCFw_v.js";import"./jsencrypt-Ve0Y4aUG.js";import"./pinia-plugin-persistedstate-2-DcGv4gw_.js";import"./@awesome-cordova-plugins-CT7d7gQP.js";import"./rxjs-C3tg6S9t.js";import"./tslib-BHBn2Msb.js";const S={style:{"font-weight":"1000"}},x={class:"note"},Z={__name:"SignIn",setup(D){const g=V(),n=E(),{getPublicUrl:f}=L(),s=I({userName:"",password:""}),w=async()=>{s.userName.length>0&&s.password.length>0?await n.login(s):await(await y.create({message:"Error",duration:1500,position:"top",color:"warning",translucent:!0})).present()};return _(()=>n.isLogin,()=>{n.isLogin&&g.push("/")}),(l,a)=>(N(),h(o(U),{class:"sign-in"},{default:t(()=>[e(o(k),{src:o(f)("/banner.webp")},null,8,["src"]),e(o(P),null,{default:t(()=>[e(o(B),null,{default:t(()=>[p("h5",S,m(l.$t("login.header.signIn")),1),e(o(d),{lines:"none"},{default:t(()=>[e(o(c),{modelValue:s.userName,"onUpdate:modelValue":a[0]||(a[0]=i=>s.userName=i),fill:"outline",placeholder:"Email / Phone Number"},null,8,["modelValue"])]),_:1}),e(o(d),{lines:"none"},{default:t(()=>[e(o(c),{modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=i=>s.password=i),type:"password",fill:"outline",placeholder:"Password"},{default:t(()=>[e(o(C),{slot:"end",color:"medium",size:"small"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(o(u),{class:"btn-forget",fill:"clear","router-link":"/login/forgetPW"},{default:t(()=>[r("Forget your password?")]),_:1}),e(o(u),{class:"btn-sign-in",expand:"block",onClick:b(w,["stop"])},{default:t(()=>[r(m(l.$t("login.header.signIn")),1)]),_:1}),p("div",x,[r(" New to BC.GAME? "),e(o(u),{class:"btn-sing-up",fill:"clear","router-link":"/login/signUp"},{default:t(()=>[r("Create account")]),_:1})])]),_:1})]),_:1}))}};export{Z as default};
