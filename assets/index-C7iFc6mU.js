import{aS as b,ax as M,aX as T,aK as u,s as O,bH as c,I as p,v,b9 as g,u as y,H as C,F as x,aV as B,r as P}from"./@vue-Dkad1Scs.js";import{V as A,a as H,b as k,c as q,d as D,e as E,f as J,g as U,h as $}from"./vuetify-BVcx-I6O.js";/* empty css             */import{V as F}from"./vue3-beautiful-chat-DLJUIo1Z.js";import"./vue-BghDAyl9.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function f(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=f(a);fetch(a.href,r)}})();async function S({url:l,method:n,data:f}){console.log(l);const i="https://www.teenteen123.com",a=101,r=new AbortController;setTimeout(()=>r.abort(),3e4);const d={appId:a,languageType:"EN",sign:"9310a4024d28e726",uid:"e15f5aadb3c3470ebda51c53486f40e1"};let _;return await fetch(`${i}${l}`,{method:n,body:JSON.stringify({...d,...f}),headers:{"Content-Type":"application/json"},signal:r.signal}).then(s=>s.json()).catch(s=>console.error("Error:",s)).then(s=>{s.state=="200"?_=s.resultData:console.error("Error:",s.msg)}),_}function j(l){return S({url:"/customer/index",method:"POST",data:l})}function K(l){return S({url:"/customer/get",method:"POST",data:l})}function W(l){return S({url:"/customer/success",method:"POST",data:l})}function G(l){return S({url:"/customer/fail",method:"POST",data:l})}const X={class:"customer-info"},Y={class:"msg_text"},z=["innerHTML"],Q={class:"msg_text"},R={key:3},Z={key:4},tt={class:"msg_text"},et="https://storage.googleapis.com/baowang-admin",at={__name:"App",setup(l){const n=b([]),f=b([]),i=b(0),a=b(!0),r={header:{bg:"#4e8cff",text:"#ffffff"},launcher:{bg:"#4e8cff"},messageList:{bg:"#ffffff"},sentMessage:{bg:"#4e8cff",text:"#ffffff"},receivedMessage:{bg:"#eaeaea",text:"#222222"},userInput:{bg:"#f4f7f9",text:"#565867"}},d=(e=!1)=>{e&&(f.value=[]),j().then(t=>{n.value=[t.customerAccount].map(m=>(m.imageUrl=et+m.imageUrl,m)),console.log(JSON.parse(t.data)),f.value.push({type:"text",author:n.value[0].id,data:{type:t.type,text:t.reply||"Hello Sir is there any thing I can help you with?",list:JSON.parse(t.data)}})}).catch(t=>console.log(t))};M(()=>d(!0));const _=async e=>{e.display&&e.display.length>0&&(i.value=a.value?i.value:i.value+1,s({author:"me",type:"text",data:{text:e.display}})),e.type==-1?s({author:n.value[0].id,type:"text",data:{type:e.type,text:"Please click the button below to contact Senior Customer Service",btnText:"Senior Customer Service",link:e.link}}):e.type==0?d():e.type==1?s({author:n.value[0].id,type:"text",data:{type:e.type,text:e.text}}):K({questionId:e.id}).then(t=>{console.log(t),!t||!t.data&&!t.reply?s({author:n.value[0].id,type:"text",data:{type:0,text:"No record Data"}}):(console.log(JSON.parse(t.data||"[]")),s({author:n.value[0].id,type:"text",data:{type:t.type,text:t.reply||"",list:JSON.parse(t.data||"[]")}}))}).catch(t=>console.log(t))},s=e=>{f.value.push(e)},w=e=>{s({author:"me",type:"text",data:{text:"Solve issue"}}),W({questionId:e.id}).then(t=>{console.log(t),s({author:n.value[0].id,type:"text",data:{text:e.list.solve_reply}})})},L=e=>{s({author:"me",type:"text",data:{text:"Unsolve issue"}}),G({questionId:e.id}).then(t=>{console.log(t),s({author:n.value[0].id,type:"text",data:{type:2,text:e.list.unsolve_reply,list:[{type:0,display:e.list.unsolve_select_text},{type:-1,display:e.list.unsolve_customer_text,link:e.list.customer_link}]}})})},V=()=>{a.value=!0,i.value=0,d()},N=()=>{a.value=!1};return(e,t)=>{const m=T("beautiful-chat");return u(),O(U,null,{default:c(()=>[p(J,null,{default:c(()=>[p(m,{participants:n.value,onMessageWasSent:s,messageList:f.value,newMessagesCount:i.value,isOpen:a.value,open:V,close:N,showHeader:!0,showCloseButton:!0,showLauncher:!0,colors:r,alwaysScrollToBottom:!0},{header:c(()=>{var o;return[t[0]||(t[0]=v("div",{class:"header-text"},"Customer Service Center",-1)),v("div",X,[p(A,{color:"surface-variant"},{default:c(()=>{var h;return[p(H,{src:(h=n.value[0])==null?void 0:h.imageUrl},null,8,["src"])]}),_:1}),v("span",null,g((o=n.value[0])==null?void 0:o.name)+" is serving",1)])]}),"text-message-body":c(({message:o})=>[o.data.type==-1?(u(),y(x,{key:0},[v("div",Y,g(o.data.text),1),p(k,{density:"compact",flat:"",block:"",href:o.data.link,target:"_blank"},{default:c(()=>[C(g(o.data.btnText),1)]),_:2},1032,["href"])],64)):o.data.type==1?(u(),y("div",{key:1,innerHTML:o.data.text},null,8,z)):o.data.type==2?(u(),y(x,{key:2},[v("div",Q,g(o.data.text),1),p(q,{density:"compact",lines:"one"},{default:c(()=>[(u(!0),y(x,null,B(o.data.list,(h,I)=>(u(),O(D,{key:I,title:h.display,"min-height":"1rem",onClick:nt=>_(h)},null,8,["title","onClick"]))),128))]),_:2},1024)],64)):o.data.type==3?(u(),y("div",R,"充值列表")):o.data.type==4?(u(),y("div",Z,"提現列表")):o.data.type==5?(u(),y(x,{key:5},[v("div",tt,g(o.data.text),1),p(E,{density:"compact",flat:""},{default:c(()=>[p(k,{onClick:h=>w(o.data)},{default:c(()=>t[1]||(t[1]=[C("Yes")])),_:2},1032,["onClick"]),p(k,{onClick:h=>L(o.data)},{default:c(()=>t[2]||(t[2]=[C("No")])),_:2},1032,["onClick"])]),_:2},1024)],64)):(u(),y(x,{key:6},[C(g(o.data.text),1)],64))]),_:1},8,["participants","messageList","newMessagesCount","isOpen"])]),_:1})]),_:1})}}},ot=$(),st=P(at);st.use(ot).use(F).mount("#app");
