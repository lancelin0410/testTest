System.register(["./index-legacy-BizqwEaK.js","./GameCards-legacy-Cff0775I.js","./GameItem-legacy-C-wr3Fq3.js","./useGameStore-legacy-eckc7vxz.js"],(function(a,e){"use strict";var s,t,l,o,n,i,c,r,g,u,m,p,d,w,x,y,f,v,b,_,h,z,G;return{setters:[a=>{s=a.r,t=a.o,l=a.d,o=a.e,n=a.h,i=a.F,c=a.i,r=a.j,g=a.n,u=a.f,m=a.w,p=a.u,d=a.T,w=a.U,x=a.J,y=a.B,f=a.y,v=a.V,b=a.W,_=a.z,h=a.A,z=a.C},a=>{G=a._},null,null],execute:function(){var e=document.createElement("style");e.textContent=".all-game .game-row{display:flex;flex-wrap:wrap}.all-game .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}.hot-games .game-row{display:flex;flex-wrap:wrap}.hot-games .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}.slots .game-row{display:flex;flex-wrap:wrap}.slots .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}.live .game-row{display:flex;flex-wrap:wrap}.live .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}.sport .game-row{display:flex;flex-wrap:wrap}.sport .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}.chess .game-row{display:flex;flex-wrap:wrap}.chess .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}.instant-win .game-row{display:flex;flex-wrap:wrap}.instant-win .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}.fishing .game-row{display:flex;flex-wrap:wrap}.fishing .game-col{flex:1 1 calc(33.333% - 10px);margin:5px;box-sizing:border-box}\n",document.head.appendChild(e);const C={class:"all-game"},$={class:"game-row"},S={__name:"AllGames",setup(a){const e=s([]);return t((async()=>{await(async()=>{const a=await g();if("00000"===a.code)e.value=a.data||[];else{const e=await toastController.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}})()})),(a,s)=>(l(),o("div",C,[n("div",$,[(l(!0),o(i,null,c(e.value,((a,e)=>(l(),r(G,{key:`AllGames_${e}`,category:a},null,8,["category"])))),128))])]))}},k={class:"hot-games"},L={class:"game-row"},j={__name:"HotGames",setup:a=>(a,e)=>(l(),o("div",k,[n("div",L,[u(G,{category:{name:"hotGames"}})])]))},A={class:"slots"},V={class:"game-row"},I={__name:"Slots",setup(a){const e=s([]);return t((async()=>{await(async()=>{const a=await g();if("00000"===a.code)e.value=a.data.filter((a=>"slot"===a.code));else{const e=await toastController.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}})()})),(a,s)=>(l(),o("div",A,[n("div",V,[(l(!0),o(i,null,c(e.value,((a,e)=>(l(),r(G,{key:`Slots_${e}`,category:a},null,8,["category"])))),128))])]))}},U={class:"live"},W={class:"game-row"},B={__name:"Live",setup(a){const e=s([]);return t((async()=>{await(async()=>{const a=await g();if("00000"===a.code)e.value=a.data.filter((a=>"live"===a.code));else{const e=await toastController.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}})()})),(a,s)=>(l(),o("div",U,[n("div",W,[(l(!0),o(i,null,c(e.value,((a,e)=>(l(),r(G,{key:`Slots_${e}`,category:a},null,8,["category"])))),128))])]))}},E={class:"sport"},F={class:"game-row"},H={__name:"Sport",setup(a){const e=s([]);return t((async()=>{await(async()=>{const a=await g();if("00000"===a.code)e.value=a.data.filter((a=>"sport"===a.code));else{const e=await toastController.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}})()})),(a,s)=>(l(),o("div",E,[n("div",F,[(l(!0),o(i,null,c(e.value,((a,e)=>(l(),r(G,{key:`Sport_${e}`,category:a},null,8,["category"])))),128))])]))}},J={class:"chess"},P={class:"game-row"},T={__name:"Chess",setup(a){const e=s([]);return t((async()=>{await(async()=>{const a=await g();if("00000"===a.code)e.value=a.data.filter((a=>"chess"===a.code));else{const e=await toastController.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}})()})),(a,s)=>(l(),o("div",J,[n("div",P,[(l(!0),o(i,null,c(e.value,((a,e)=>(l(),r(G,{key:`Chess_${e}`,category:a},null,8,["category"])))),128))])]))}},q={class:"instant-win"},D={class:"game-row"},K={__name:"InstantWin",setup(a){const e=s([]);return t((async()=>{await(async()=>{const a=await g();if("00000"===a.code)console.log(a),e.value=a.data.filter((a=>"instantwin"===a.code));else{const e=await toastController.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}})()})),(a,s)=>(l(),o("div",q,[n("div",D,[(l(!0),o(i,null,c(e.value,((a,e)=>(l(),r(G,{key:`InstantWin_${e}`,category:a},null,8,["category"])))),128))])]))}},M={class:"fishing"},N={class:"game-row"},O={__name:"Fishing",setup(a){const e=s([]);return t((async()=>{await(async()=>{const a=await g();if("00000"===a.code)e.value=a.data.filter((a=>"fishing"===a.code));else{const e=await toastController.create({message:a.msg,duration:1500,position:"top",color:"danger",translucent:!0});await e.present()}})()})),(a,s)=>(l(),o("div",M,[n("div",N,[(l(!0),o(i,null,c(e.value,((a,e)=>(l(),r(G,{key:`Sport_${e}`,category:a},null,8,["category"])))),128))])]))}};a("default",{__name:"Explore",setup(a){const{getPublicUrl:e}=z(),t=s("casino.tabs.allGames"),o={"casino.tabs.allGames":S,"casino.tabs.hotGames":j,"casino.tabs.slots":I,"casino.tabs.live":B,"casino.tabs.sport":H,"casino.tabs.chess":T,"casino.tabs.instantwin":K,"casino.tabs.fishing":O};return(a,s)=>(l(),r(p(h),{class:"explore"},{default:m((()=>[u(p(_),null,{default:m((()=>[u(p(d),{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),mode:"ios",scrollable:!0},{default:m((()=>[u(p(w),{class:"ion-text-capitalize",value:"casino.tabs.allGames",layout:"icon-start"},{default:m((()=>[u(p(x),{size:"small",src:p(e)("/icon_gameLabel/icon-lobby.svg")},null,8,["src"]),y(" "+f(a.$t("casino.tabs.allGames")),1)])),_:1}),u(p(w),{class:"ion-text-capitalize",value:"casino.tabs.hotGames",layout:"icon-start"},{default:m((()=>[u(p(x),{size:"small",src:p(e)("/icon_gameLabel/icon-hotGames.svg")},null,8,["src"]),y(" "+f(a.$t("casino.tabs.hotGames")),1)])),_:1}),u(p(w),{class:"ion-text-capitalize",value:"casino.tabs.slots",layout:"icon-start"},{default:m((()=>[u(p(x),{size:"small",src:p(e)("/icon_gameLabel/icon-slots.svg")},null,8,["src"]),y(" "+f(a.$t("casino.tabs.slots")),1)])),_:1}),u(p(w),{class:"ion-text-capitalize",value:"casino.tabs.live",layout:"icon-start"},{default:m((()=>[u(p(x),{size:"small",src:p(e)("/icon_gameLabel/icon-liveCasino.svg")},null,8,["src"]),y(" "+f(a.$t("casino.tabs.live")),1)])),_:1}),u(p(w),{class:"ion-text-capitalize",value:"casino.tabs.sport",layout:"icon-start"},{default:m((()=>[u(p(x),{size:"small",src:p(e)("/icon_gameLabel/icon-sport.svg")},null,8,["src"]),y(" "+f(a.$t("casino.tabs.sport")),1)])),_:1})])),_:1},8,["modelValue"]),(l(),r(v,null,[(l(),r(b(o[t.value])))],1024))])),_:1})])),_:1}))}})}}}));
