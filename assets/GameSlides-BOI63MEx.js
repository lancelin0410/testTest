import{Z as fe,l as ge,r as X,o as pe,d as A,j as G,w,e as H,F as Y,i as J,u as n,f as b,x as Q,C as de,_ as ye,t as ve,k as be,m as he,h as j,y as se,B as ne,J as V,$ as le,v as U,a0 as ie,K,a1 as re,a2 as Ce,I as Le,a3 as xe,a4 as $e,z as Ie,a5 as we,S as Se,g as Te}from"./index-BWYPlUKf.js";import{e as Be,c as Ae,m as P,a as Ee,b as oe,d as Me,g as Z,S as W,I as ee,f as ae}from"./ionic-swiper-B8t8k5kq.js";import{_ as ue}from"./GameItem-WWBHdOd2.js";const ke=m=>fe({url:"/app/member/h5/advertisement",method:"GET",params:m});function _e(m,e,E,u){return m.params.createElements&&Object.keys(u).forEach(i=>{if(!E[i]&&E.auto===!0){let l=Be(m.el,".".concat(u[i]))[0];l||(l=Ae("div",u[i]),l.className=u[i],m.el.append(l)),E[i]=l,e[i]=l}}),E}function R(m){return m===void 0&&(m=""),".".concat(m.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,"."))}function De(m){let{swiper:e,extendParams:E,on:u,emit:i}=m;const l="swiper-pagination";E({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:"".concat(l,"-bullet"),bulletActiveClass:"".concat(l,"-bullet-active"),modifierClass:"".concat(l,"-"),currentClass:"".concat(l,"-current"),totalClass:"".concat(l,"-total"),hiddenClass:"".concat(l,"-hidden"),progressbarFillClass:"".concat(l,"-progressbar-fill"),progressbarOppositeClass:"".concat(l,"-progressbar-opposite"),clickableClass:"".concat(l,"-clickable"),lockClass:"".concat(l,"-lock"),horizontalClass:"".concat(l,"-horizontal"),verticalClass:"".concat(l,"-vertical"),paginationDisabledClass:"".concat(l,"-disabled")}}),e.pagination={el:null,bullets:[]};let h,v=0;function $(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function B(a,t){const{bulletActiveClass:s}=e.params.pagination;a&&(a=a["".concat(t==="prev"?"previous":"next","ElementSibling")],a&&(a.classList.add("".concat(s,"-").concat(t)),a=a["".concat(t==="prev"?"previous":"next","ElementSibling")],a&&a.classList.add("".concat(s,"-").concat(t,"-").concat(t))))}function c(a){const t=a.target.closest(R(e.params.pagination.bulletClass));if(!t)return;a.preventDefault();const s=oe(t)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===s)return;e.slideToLoop(s)}else e.slideTo(s)}function p(){const a=e.rtl,t=e.params.pagination;if($())return;let s=e.pagination.el;s=P(s);let r,I;const _=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,N=e.params.loop?Math.ceil(_/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(I=e.previousRealIndex||0,r=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(r=e.snapIndex,I=e.previousSnapIndex):(I=e.previousIndex||0,r=e.activeIndex||0),t.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const d=e.pagination.bullets;let L,f,O;if(t.dynamicBullets&&(h=Ee(d[0],e.isHorizontal()?"width":"height"),s.forEach(g=>{g.style[e.isHorizontal()?"width":"height"]="".concat(h*(t.dynamicMainBullets+4),"px")}),t.dynamicMainBullets>1&&I!==void 0&&(v+=r-(I||0),v>t.dynamicMainBullets-1?v=t.dynamicMainBullets-1:v<0&&(v=0)),L=Math.max(r-v,0),f=L+(Math.min(d.length,t.dynamicMainBullets)-1),O=(f+L)/2),d.forEach(g=>{const y=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(x=>"".concat(t.bulletActiveClass).concat(x))].map(x=>typeof x=="string"&&x.includes(" ")?x.split(" "):x).flat();g.classList.remove(...y)}),s.length>1)d.forEach(g=>{const y=oe(g);y===r?g.classList.add(...t.bulletActiveClass.split(" ")):e.isElement&&g.setAttribute("part","bullet"),t.dynamicBullets&&(y>=L&&y<=f&&g.classList.add(..."".concat(t.bulletActiveClass,"-main").split(" ")),y===L&&B(g,"prev"),y===f&&B(g,"next"))});else{const g=d[r];if(g&&g.classList.add(...t.bulletActiveClass.split(" ")),e.isElement&&d.forEach((y,x)=>{y.setAttribute("part",x===r?"bullet-active":"bullet")}),t.dynamicBullets){const y=d[L],x=d[f];for(let F=L;F<=f;F+=1)d[F]&&d[F].classList.add(..."".concat(t.bulletActiveClass,"-main").split(" "));B(y,"prev"),B(x,"next")}}if(t.dynamicBullets){const g=Math.min(d.length,t.dynamicMainBullets+4),y=(h*g-h)/2-O*h,x=a?"right":"left";d.forEach(F=>{F.style[e.isHorizontal()?x:"top"]="".concat(y,"px")})}}s.forEach((d,L)=>{if(t.type==="fraction"&&(d.querySelectorAll(R(t.currentClass)).forEach(f=>{f.textContent=t.formatFractionCurrent(r+1)}),d.querySelectorAll(R(t.totalClass)).forEach(f=>{f.textContent=t.formatFractionTotal(N)})),t.type==="progressbar"){let f;t.progressbarOpposite?f=e.isHorizontal()?"vertical":"horizontal":f=e.isHorizontal()?"horizontal":"vertical";const O=(r+1)/N;let g=1,y=1;f==="horizontal"?g=O:y=O,d.querySelectorAll(R(t.progressbarFillClass)).forEach(x=>{x.style.transform="translate3d(0,0,0) scaleX(".concat(g,") scaleY(").concat(y,")"),x.style.transitionDuration="".concat(e.params.speed,"ms")})}t.type==="custom"&&t.renderCustom?(d.innerHTML=t.renderCustom(e,r+1,N),L===0&&i("paginationRender",d)):(L===0&&i("paginationRender",d),i("paginationUpdate",d)),e.params.watchOverflow&&e.enabled&&d.classList[e.isLocked?"add":"remove"](t.lockClass)})}function T(){const a=e.params.pagination;if($())return;const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let s=e.pagination.el;s=P(s);let r="";if(a.type==="bullets"){let I=e.params.loop?Math.ceil(t/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&I>t&&(I=t);for(let _=0;_<I;_+=1)a.renderBullet?r+=a.renderBullet.call(e,_,a.bulletClass):r+="<".concat(a.bulletElement," ").concat(e.isElement?'part="bullet"':"",' class="').concat(a.bulletClass,'"></').concat(a.bulletElement,">")}a.type==="fraction"&&(a.renderFraction?r=a.renderFraction.call(e,a.currentClass,a.totalClass):r='<span class="'.concat(a.currentClass,'"></span>')+" / "+'<span class="'.concat(a.totalClass,'"></span>')),a.type==="progressbar"&&(a.renderProgressbar?r=a.renderProgressbar.call(e,a.progressbarFillClass):r='<span class="'.concat(a.progressbarFillClass,'"></span>')),e.pagination.bullets=[],s.forEach(I=>{a.type!=="custom"&&(I.innerHTML=r||""),a.type==="bullets"&&e.pagination.bullets.push(...I.querySelectorAll(R(a.bulletClass)))}),a.type!=="custom"&&i("paginationRender",s[0])}function M(){e.params.pagination=_e(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let t;typeof a.el=="string"&&e.isElement&&(t=e.el.querySelector(a.el)),!t&&typeof a.el=="string"&&(t=[...document.querySelectorAll(a.el)]),t||(t=a.el),!(!t||t.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(t)&&t.length>1&&(t=[...e.el.querySelectorAll(a.el)],t.length>1&&(t=t.filter(s=>Me(s,".swiper")[0]===e.el)[0])),Array.isArray(t)&&t.length===1&&(t=t[0]),Object.assign(e.pagination,{el:t}),t=P(t),t.forEach(s=>{a.type==="bullets"&&a.clickable&&s.classList.add(...(a.clickableClass||"").split(" ")),s.classList.add(a.modifierClass+a.type),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(s.classList.add("".concat(a.modifierClass).concat(a.type,"-dynamic")),v=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&s.classList.add(a.progressbarOppositeClass),a.clickable&&s.addEventListener("click",c),e.enabled||s.classList.add(a.lockClass)}))}function k(){const a=e.params.pagination;if($())return;let t=e.pagination.el;t&&(t=P(t),t.forEach(s=>{s.classList.remove(a.hiddenClass),s.classList.remove(a.modifierClass+a.type),s.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(s.classList.remove(...(a.clickableClass||"").split(" ")),s.removeEventListener("click",c))})),e.pagination.bullets&&e.pagination.bullets.forEach(s=>s.classList.remove(...a.bulletActiveClass.split(" ")))}u("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:t}=e.pagination;t=P(t),t.forEach(s=>{s.classList.remove(a.horizontalClass,a.verticalClass),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),u("init",()=>{e.params.pagination.enabled===!1?C():(M(),T(),p())}),u("activeIndexChange",()=>{typeof e.snapIndex>"u"&&p()}),u("snapIndexChange",()=>{p()}),u("snapGridLengthChange",()=>{T(),p()}),u("destroy",()=>{k()}),u("enable disable",()=>{let{el:a}=e.pagination;a&&(a=P(a),a.forEach(t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),u("lock unlock",()=>{p()}),u("click",(a,t)=>{const s=t.target,r=P(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!s.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const I=r[0].classList.contains(e.params.pagination.hiddenClass);i(I===!0?"paginationShow":"paginationHide"),r.forEach(_=>_.classList.toggle(e.params.pagination.hiddenClass))}});const S=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=P(a),a.forEach(t=>t.classList.remove(e.params.pagination.paginationDisabledClass))),M(),T(),p()},C=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=P(a),a.forEach(t=>t.classList.add(e.params.pagination.paginationDisabledClass))),k()};Object.assign(e.pagination,{enable:S,disable:C,render:T,update:p,init:M,destroy:k})}function ze(m){let{swiper:e,extendParams:E,on:u,emit:i,params:l}=m;e.autoplay={running:!1,paused:!1,timeLeft:0},E({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let h,v,$=l&&l.autoplay?l.autoplay.delay:3e3,B=l&&l.autoplay?l.autoplay.delay:3e3,c,p=new Date().getTime(),T,M,k,S,C,a,t;function s(o){!e||e.destroyed||!e.wrapperEl||o.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",s),!(t||o.detail&&o.detail.bySwiperTouchMove)&&f())}const r=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?T=!0:T&&(B=c,T=!1);const o=e.autoplay.paused?c:p+B-new Date().getTime();e.autoplay.timeLeft=o,i("autoplayTimeLeft",o,o/$),v=requestAnimationFrame(()=>{r()})},I=()=>{let o;return e.virtual&&e.params.virtual.enabled?o=e.slides.filter(D=>D.classList.contains("swiper-slide-active"))[0]:o=e.slides[e.activeIndex],o?parseInt(o.getAttribute("data-swiper-autoplay"),10):void 0},_=o=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(v),r();let z=typeof o>"u"?e.params.autoplay.delay:o;$=e.params.autoplay.delay,B=e.params.autoplay.delay;const D=I();!Number.isNaN(D)&&D>0&&typeof o>"u"&&(z=D,$=D,B=D),c=z;const q=e.params.speed,te=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(q,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,q,!0,!0),i("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(q,!0,!0),i("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,q,!0,!0),i("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{_()})))};return z>0?(clearTimeout(h),h=setTimeout(()=>{te()},z)):requestAnimationFrame(()=>{te()}),z},N=()=>{p=new Date().getTime(),e.autoplay.running=!0,_(),i("autoplayStart")},d=()=>{e.autoplay.running=!1,clearTimeout(h),cancelAnimationFrame(v),i("autoplayStop")},L=(o,z)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(h),o||(a=!0);const D=()=>{i("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",s):f()};if(e.autoplay.paused=!0,z){C&&(c=e.params.autoplay.delay),C=!1,D();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),D())},f=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),a?(a=!1,_(c)):_(),e.autoplay.paused=!1,i("autoplayResume"))},O=()=>{if(e.destroyed||!e.autoplay.running)return;const o=Z();o.visibilityState==="hidden"&&(a=!0,L(!0)),o.visibilityState==="visible"&&f()},g=o=>{o.pointerType==="mouse"&&(a=!0,t=!0,!(e.animating||e.autoplay.paused)&&L(!0))},y=o=>{o.pointerType==="mouse"&&(t=!1,e.autoplay.paused&&f())},x=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",g),e.el.addEventListener("pointerleave",y))},F=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",g),e.el.removeEventListener("pointerleave",y))},ce=()=>{Z().addEventListener("visibilitychange",O)},me=()=>{Z().removeEventListener("visibilitychange",O)};u("init",()=>{e.params.autoplay.enabled&&(x(),ce(),N())}),u("destroy",()=>{F(),me(),e.autoplay.running&&d()}),u("_freeModeStaticRelease",()=>{(k||a)&&f()}),u("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?d():L(!0,!0)}),u("beforeTransitionStart",(o,z,D)=>{e.destroyed||!e.autoplay.running||(D||!e.params.autoplay.disableOnInteraction?L(!0,!0):d())}),u("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){d();return}M=!0,k=!1,a=!1,S=setTimeout(()=>{a=!0,k=!0,L(!0)},200)}}),u("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!M)){if(clearTimeout(S),clearTimeout(h),e.params.autoplay.disableOnInteraction){k=!1,M=!1;return}k&&e.params.cssMode&&f(),k=!1,M=!1}}),u("slideChange",()=>{e.destroyed||!e.autoplay.running||(C=!0)}),Object.assign(e.autoplay,{start:N,stop:d,pause:L,resume:f})}const je={__name:"Banner",props:{bannerBG:{type:Object,default:null}},setup(m){const e=ge(),{getPublicUrl:E}=de(),{preLoadImg:u}=ye(),i=m,l=X([]),h=async()=>{const c=await ke();c.code==="00000"?l.value=c.data.ads||[]:await(await ve.create({message:c.msg,duration:1500,position:"top",color:"danger",translucent:!0})).present()};pe(async()=>{await h();for(const[c,p]of l.value.entries())c<=1&&await u(p.h5Image);e.startLoading=!1});let v=0;const $=["rgb(79, 70, 53)","rgb(88, 163, 129)","rgb(101, 107, 163)","rgb(125, 104, 165)","rgb(108, 110, 156)","rgb(176, 99, 71)","rgb(110, 142, 115)","rgb(153, 119, 159)","rgb(107, 141, 92)","rgb(121, 125, 187)","rgb(130, 97, 193)","rgb(155, 109, 84)","rgb(154, 110, 73)","rgb(116, 149, 85)","rgb(98, 101, 154)","rgb(158, 119, 69)","rgb(107, 108, 115)","rgb(112, 111, 168)","rgb(162, 119, 93)","rgb(128, 125, 167)","rgb(122, 144, 99)"],B=()=>{i.bannerBG&&be().addElement(i.bannerBG).easing("ease-out").duration(1e3).delay(-300).fromTo("backgroundColor",$[v%22],$[(v+1)%22]).onFinish(()=>v++).play()};return(c,p)=>l.value.length>0?(A(),G(n(ae),{key:0,class:"banner",modules:[n(ze),n(De),n(ee)],centeredSlides:!0,pagination:{clickable:!0},autoplay:!0,loop:!0,lazyPreloadPrevNext:1,onSlideChange:p[0]||(p[0]=T=>B())},{default:w(()=>[(A(!0),H(Y,null,J(l.value,(T,M)=>(A(),G(n(W),{key:"banner_".concat(M)},{default:w(()=>[b(n(Q),{src:T.h5Image,loading:"lazy"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["modules"])):(A(),G(n(Q),{key:1,src:n(E)("/home/banner.webp")},null,8,["src"]))}},Pe={class:"game-slides"},Oe={class:"top-bar"},Fe={class:"ion-text-capitalize"},Ge={class:"btn-group"},Ne={class:"game-row"},Ve={__name:"GameSlides",props:{category:{type:Object,require:!0},itemType:{type:String,default:"image"}},setup(m){const{getPublicUrl:e}=de(),{leftAnimation:E,leftAnimationLeave:u}=Se(),i=m,l={hotGames:"Hot Games",live:"Live Casino"},h=X(!1);let v=0;const $=X([]),B=he(()=>$.value.filter((S,C)=>C<10)),c=async()=>{const S=await Te({gameCategoryId:i.category.name=="hotGames"?"":i.category.id,labelType:i.category.name=="hotGames"?1:0,userDriver:1,pageNum:1,pageSize:300,lang:"en-US"});S.code==="00000"&&($.value=S.data.list)};pe(async()=>{v=Math.round(Math.random()*52),await c()});const p=X(null),T=S=>{p.value=S},M=()=>{const S=p.value.realIndex;p.value.slideTo(S-3,500)},k=()=>{const S=p.value.realIndex;p.value.slideTo(S+3,500)};return(S,C)=>{var a,t;return A(),H("div",Pe,[j("div",Oe,[j("h6",Fe,se(l[m.category.name]||m.category.name),1),j("span",Ge,[b(n(U),{class:"btn-all",size:"small",onClick:C[0]||(C[0]=s=>h.value=!0)},{default:w(()=>[ne(" All "),b(n(V),{slot:"end",icon:n(le)},null,8,["icon"])]),_:1}),b(n(U),{size:"small",disabled:((a=p.value)==null?void 0:a.realIndex)==0,onClick:C[1]||(C[1]=K(s=>M(),["stop"]))},{default:w(()=>[b(n(V),{icon:n(ie)},null,8,["icon"])]),_:1},8,["disabled"]),b(n(U),{size:"small",disabled:$.value.length>=3?((t=p.value)==null?void 0:t.realIndex)==$.value.length-3:!0,onClick:C[2]||(C[2]=K(s=>k(),["stop"]))},{default:w(()=>[b(n(V),{icon:n(le)},null,8,["icon"])]),_:1},8,["disabled"])])]),m.itemType=="image"?(A(),G(n(ae),{key:0,class:"image",modules:[n(ee)],slidesPerView:3.2,spaceBetween:6,pagination:{clickable:!0},lazyPreloadPrevNext:4,onSwiper:T},{default:w(()=>[(A(!0),H(Y,null,J(B.value,s=>(A(),G(n(W),{key:"game_".concat(s.id)},{default:w(()=>[b(ue,{game:s},null,8,["game"])]),_:2},1024))),128))]),_:1},8,["modules"])):re("",!0),m.itemType=="button"?(A(),G(n(ae),{key:1,class:"button",modules:[n(ee)],slidesPerView:3.2,spaceBetween:6,pagination:{clickable:!0},lazyPreloadPrevNext:4,onSwiper:T},{default:w(()=>[(A(!0),H(Y,null,J(Array.from({length:10},(s,r)=>r+1),s=>(A(),G(n(W),{key:"game_".concat(s)},{default:w(()=>[b(n(Q),{src:n(e)("/provider_demo/provider_".concat((n(v)+s)%75+1,".png"))},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["modules"])):re("",!0),b(n(we),{class:"game-modal","is-open":h.value,enterAnimation:n(E),leaveAnimation:n(u)},{default:w(()=>[b(n(Ce),null,{default:w(()=>[b(n(Le),null,{default:w(()=>[b(n(xe),{slot:"start"},{default:w(()=>[b(n(U),{onClick:C[3]||(C[3]=K(s=>h.value=!1,["stop"]))},{default:w(()=>[b(n(V),{slot:"icon-only",icon:n(ie),color:"light"},null,8,["icon"])]),_:1})]),_:1}),b(n($e),{class:"ion-text-capitalize"},{default:w(()=>[ne(se(m.category.name),1)]),_:1})]),_:1})]),_:1}),b(n(Ie),{class:"ion-padding"},{default:w(()=>[j("div",Ne,[(A(!0),H(Y,null,J($.value,s=>(A(),H("div",{class:"game-col",key:"game_".concat(s.id)},[b(ue,{game:s},null,8,["game"])]))),128))])]),_:1})]),_:1},8,["is-open","enterAnimation","leaveAnimation"])])}}};export{je as _,Ve as a};