import{d as Te,a as Be,b as Se,c as Pe,e as De,f as Oe,g as Ae,h as _e,i as Ve,j as $e,k as xe,l as je,m as He,n as Fe,o as Me,p as ze,q as Ne,r as We,s as Ge,t as Ue,u as Ke,v as Xe,w as qe,x as Ye,y as Je,z as Ze,A as Qe,B as et,C as tt,D as nt,E as ot,F as it,G as at,H as st,I as rt,J as ct,K as ut}from"./@ionic_components_1-CG1weR9z.js";import"./@stencil-pJInS8Bp.js";import{L as me,a as he,b as ge,c as be,i as lt,t as dt}from"./@ionic_components_2-DZGN-9Y0.js";import{r as ft,u as pt,m as mt,c as ht,a as gt,p as Q}from"./vue-router-DMBiYGXd.js";import{d as bt}from"./ionicons-vS9WG2d3.js";import{s as U,g as Z,d as D,h as S,i as _,c as vt,p as ee,r as W,w as te,o as yt,T as It,a as Ct,b as Et}from"./@vue-DSZqUJEn.js";import{L as G}from"./localforage-qzmIiYbH.js";const ne="update:modelValue",q="modelValue",Rt="routerLink",oe="navManager",wt="router",kt="aria",j=Symbol(),Y={default:j},ie=t=>(t==null?void 0:t.split(" "))||[],Lt=(t,e,o=[])=>{var n;return[...Array.from(((n=t.value)===null||n===void 0?void 0:n.classList)||[]),...o].filter((c,s,u)=>!e.has(c)&&u.indexOf(c)===s)},L=(t,e,o=[],n,c)=>{e!==void 0&&e();const s=D((u,{attrs:i,slots:k,emit:d})=>{var E;let R=u[n];const T=W(),P=new Set(ie(i.class)),O={created:I=>{(Array.isArray(c)?c:[c]).forEach(l=>{I.addEventListener(l.toLowerCase(),p=>{R=(p==null?void 0:p.target)[n],d(ne,R)})})}},m=Z(),r=((E=m==null?void 0:m.appContext)===null||E===void 0?void 0:E.provides[oe])?_(oe):void 0,b=I=>{const{routerLink:f}=u;if(f!==j)if(r!==void 0){let l={event:I};for(const p in u){const a=u[p];u.hasOwnProperty(p)&&p.startsWith(wt)&&a!==j&&(l[p]=a)}r.navigate(l)}else console.warn("Tried to navigate, but no router was found. Make sure you have mounted Vue Router.")};return()=>{R=u[n],ie(i.class).forEach(a=>{P.add(a)});const I=u.onClick,f=a=>{I!==void 0&&I(a),a.defaultPrevented||b(a)};let l={ref:T,class:Lt(T,P),onClick:f};for(const a in u){const g=u[a];(u.hasOwnProperty(a)&&g!==j||a.startsWith(kt))&&(l[a]=g)}n&&(u[q]!==j?l=Object.assign(Object.assign({},l),{[n]:u[q]}):R!==j&&(l=Object.assign(Object.assign({},l),{[n]:R})));const p=S(t,l,k.default&&k.default());return n===void 0?p:Ct(p,[[O]])}});return typeof s!="function"&&(s.name=t,s.props={[Rt]:Y},o.forEach(u=>{s.props[u]=Y}),n&&(s.props[q]=Y,s.emits=[ne])),s},Kt=L("ion-accordion",Ae,["value","disabled","readonly","toggleIcon","toggleIconSlot"]),Xt=L("ion-accordion-group",_e,["animated","multiple","value","disabled","readonly","expand","ionChange","ionValueChange"],"value","ion-change"),qt=L("ion-badge",Ve,["color"]),Yt=L("ion-button",$e,["color","buttonType","disabled","expand","fill","routerDirection","routerAnimation","download","href","rel","shape","size","strong","target","type","form","ionFocus","ionBlur"]),Jt=L("ion-buttons",xe,["collapse"]),Zt=L("ion-checkbox",je,["color","name","checked","indeterminate","disabled","value","labelPlacement","justify","alignment","ionChange","ionFocus","ionBlur"],"checked","ion-change"),Qt=L("ion-col",He,["offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","pull","pullXs","pullSm","pullMd","pullLg","pullXl","push","pushXs","pushSm","pushMd","pushLg","pushXl","size","sizeXs","sizeSm","sizeMd","sizeLg","sizeXl"]),en=L("ion-content",Fe,["color","fullscreen","fixedSlotPlacement","forceOverscroll","scrollX","scrollY","scrollEvents","ionScrollStart","ionScroll","ionScrollEnd"]),tn=L("ion-footer",Me,["collapse","translucent"]),nn=L("ion-grid",ze,["fixed"]),on=L("ion-header",Ne,["collapse","translucent"]),an=L("ion-img",We,["alt","src","ionImgWillLoad","ionImgDidLoad","ionError"]),sn=L("ion-input",Ge,["color","autocapitalize","autocomplete","autocorrect","autofocus","clearInput","clearInputIcon","clearOnEdit","counter","counterFormatter","debounce","disabled","enterkeyhint","errorText","fill","inputmode","helperText","label","labelPlacement","max","maxlength","min","minlength","multiple","name","pattern","placeholder","readonly","required","shape","spellcheck","step","type","value","ionInput","ionChange","ionBlur","ionFocus"],"value","ion-input"),rn=L("ion-input-password-toggle",Ue,["color","showIcon","hideIcon","type"]),cn=L("ion-item",Ke,["color","button","detail","detailIcon","disabled","download","href","rel","lines","routerAnimation","routerDirection","target","type"]),un=L("ion-label",Xe,["color","position","ionColor","ionStyle"]),ln=L("ion-list",qe,["lines","inset"]),dn=L("ion-progress-bar",Ye,["type","reversed","value","buffer","color"]),fn=L("ion-row",Je),pn=L("ion-searchbar",Ze,["color","animated","autocapitalize","autocomplete","autocorrect","cancelButtonIcon","cancelButtonText","clearIcon","debounce","disabled","inputmode","enterkeyhint","maxlength","minlength","name","placeholder","searchIcon","showCancelButton","showClearButton","spellcheck","type","value","ionInput","ionChange","ionCancel","ionClear","ionBlur","ionFocus","ionStyle"],"value","ion-input"),mn=L("ion-segment",Qe,["color","disabled","scrollable","swipeGesture","value","selectOnFocus","ionChange","ionSelect","ionStyle"],"value","ion-change"),hn=L("ion-segment-button",et,["disabled","layout","type","value"],"value","ion-change"),gn=L("ion-select",tt,["cancelText","color","compareWith","disabled","fill","interface","interfaceOptions","justify","label","labelPlacement","multiple","name","okText","placeholder","selectedText","toggleIcon","expandedIcon","shape","value","ionChange","ionCancel","ionDismiss","ionFocus","ionBlur","ionStyle"],"value","ion-change"),bn=L("ion-select-option",nt,["disabled","value"]),vn=L("ion-skeleton-text",ut,["animated","ionStyle"]),yn=L("ion-text",ot,["color"]),In=L("ion-title",it,["color","size","ionStyle"]),Cn=L("ion-toolbar",at,["color"]);var A;(function(t){t.WillEnter="onIonViewWillEnter",t.DidEnter="onIonViewDidEnter",t.WillLeave="onIonViewWillLeave",t.DidLeave="onIonViewDidLeave"})(A||(A={}));const Tt={[me]:A.WillEnter,[he]:A.DidEnter,[ge]:A.WillLeave,[be]:A.DidLeave},ae={main:0},Bt=(t="main")=>{var e;const o=((e=ae[t])!==null&&e!==void 0?e:0)+1;return ae[t]=o,o.toString()},z=(t,e,o)=>{t!=null&&t[o]&&t[o].bind(e==null?void 0:e.value)();const n=e==null?void 0:e.value;if(n!=null&&n[o]&&n[o](),n){const c=Tt[o],s=n[c];s&&s.forEach(u=>u())}},ve=()=>{if(typeof window<"u"){const t=window.Ionic;if(t&&t.config)return t.config}return null},St=(t,e,o)=>{if(o){const n=o,c=n.proxy[t]||(n.proxy[t]=[]);n.exposed&&(n.exposed[t]=c);const s=(...u)=>{if(!n.isUnmounted)return u?e(...u):e()};return c.push(s),s}else console.warn("[@ionic/vue]: Ionic Lifecycle Hooks can only be used during execution of setup().")},K=t=>(e,o=Z())=>St(t,e,o);K(A.WillEnter);K(A.DidEnter);K(A.WillLeave);K(A.DidLeave);const J=t=>t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),Pt=()=>({ael:(t,e,o,n)=>t.addEventListener(J(e),o,n),rel:(t,e,o,n)=>t.removeEventListener(J(e),o,n),ce:(t,e)=>new CustomEvent(J(t),e)}),En={async install(t,e={}){typeof document<"u"&&document.documentElement.classList.add("ion-ce");const{ael:o,rel:n,ce:c}=Pt();lt(Object.assign(Object.assign({},e),{_ael:o,_rel:n,_ce:c}))}},Dt=D((t,{attrs:e,slots:o})=>{Te();const n=_("navManager"),c=()=>{if(n===void 0)return;const s=e["default-href"]||e.defaultHref,u=e["router-animation"]||e.routerAnimation;n.handleNavigateBack(s,u)};return()=>S("ion-back-button",Object.assign({onClick:c},e),o.default&&o.default())});Dt.name="IonBackButton";const Rn=D({name:"IonPage",props:{registerIonPage:{type:Function,default:()=>{}}},mounted(){this.$props.registerIonPage(this.$refs.ionPage)},setup(t,{attrs:e,slots:o}){return()=>S("div",Object.assign(Object.assign({},e),{class:"ion-page",ref:"ionPage"}),o.default&&o.default())}}),se=t=>!t.classList.contains("ion-page-hidden")&&!t.classList.contains("ion-page-invisible"),re=Symbol(0),wn=D({name:"IonRouterOutlet",setup(){Pe();const t=_(ft),e=pt(),o=_(re,0),n=vt(()=>e.matched[o]);let c,s;ee(re,o+1),ee(mt,n);const u=W(),i=Bt("ion-router-outlet"),k=_("navManager"),d=_("viewStacks"),E=U([]);let R=!1,T;te(()=>[e,n.value],([f,l])=>{if(l!==void 0){const p=l!==c,a=f.matched[f.matched.length-1]===l&&f.path!==s;(p||a)&&b(n)}c=l,s=f.path},{deep:!0});const P=()=>{const f=ve();if(!(f&&f.get("swipeBackEnabled",u.value.mode==="ios")))return!1;const p=d.getViewStack(i);if(!p||p.length<=1)return!1;const a=k.getLeavingRouteInfo();return!!d.findViewItemByRouteInfo({pathname:a.pushedByRoute||""},i)},O=async()=>{const f=k.getLeavingRouteInfo(),{routerAnimation:l}=f,p=d.findViewItemByRouteInfo({pathname:f.pushedByRoute||""},i),a=d.findViewItemByRouteInfo(f,i);if(a){let g=l;const y=p.ionPageElement,w=a.ionPageElement,v=p.routerAnimation;g===void 0&&v!==void 0&&(g=v),a.routerAnimation=g,await h(y,w,"back",k.canGoBack(2),!0,g)}return Promise.resolve()},m=f=>{if(f)R=!0,k.handleNavigateBack();else{const l=k.getCurrentRouteInfo(),p=d.findViewItemByRouteInfo({pathname:l.pushedByRoute||""},i);p.ionPageElement.setAttribute("aria-hidden","true"),p.ionPageElement.classList.add("ion-page-hidden")}};te(u,()=>{u.value.swipeHandler={canStart:P,onStart:O,onEnd:m}});const h=async(f,l,p,a,g,y)=>{if(R)return R=!1,Promise.resolve(!1);if(f===l)return Promise.resolve(!1);f.classList.add("ion-page-invisible");const w=p===void 0||p==="root"||p==="none";return await u.value.commit(f,l,{duration:w&&y===void 0?0:void 0,direction:p,showGoBack:a,progressAnimation:g,animationBuilder:y})},r=async()=>{const f=k.getCurrentRouteInfo(),{routerDirection:l,routerAction:p,routerAnimation:a,prevRouteLastPathname:g,delta:y}=f,w=d.findViewItemByRouteInfo(f,i);let v=d.findLeavingViewItemByRouteInfo(f,i);const V=w.ionPageElement;if(V===void 0&&console.warn("[@ionic/vue Warning]: The view you are trying to render for path ".concat(f.pathname," does not have the required <ion-page> component. Transitions and lifecycle methods may not work as expected.\n\nSee https://ionicframework.com/docs/vue/navigation#ionpage for more information.")),w!==v&&(!v&&g&&(v=d.findViewItemByPathname(g,i)),!(se(V)&&(v==null?void 0:v.ionPageElement)!==void 0&&!se(v.ionPageElement)))){if(z(w.vueComponent,w.vueComponentRef,me),v!=null&&v.ionPageElement&&w!==v){let C=a;const $=v.ionPageElement;z(v.vueComponent,v.vueComponentRef,ge);const H=w.routerAnimation;C===void 0&&l==="back"&&H!==void 0&&(C=H),v.routerAnimation=C,await h(V,$,l,!!f.pushedByRoute,!1,C),$.classList.add("ion-page-hidden"),$.setAttribute("aria-hidden","true");const M=d.size()===1;p==="replace"?(v.mount=!1,v.ionPageElement=void 0,v.ionRoute=!1):p==="push"&&l==="forward"?M&&d.mountIntermediaryViews(i,v,y):l!=="none"&&v&&w!==v&&(v.mount=!1,v.ionPageElement=void 0,v.ionRoute=!1,M&&d.unmountLeavingViews(i,w,y)),z(v.vueComponent,v.vueComponentRef,be)}else requestAnimationFrame(()=>V.classList.remove("ion-page-invisible"));z(w.vueComponent,w.vueComponentRef,he),E.value=d.getChildrenToRender(i)}},b=f=>{const l=e.matched[0];if(T||(T=l.path),!f.value||f.value!==l&&l.path!==T)return;const p=k.getCurrentRouteInfo();let a=d.findViewItemByRouteInfo(p,i);a||(a=d.createViewItem(i,f.value.components.default,f.value,p),d.add(a)),a.mount?r():(a.mount=!0,a.registerCallback=()=>{r(),a.registerCallback=void 0}),E.value=d.getChildrenToRender(i)};return n.value&&b(n),yt(()=>d.clear(i)),{id:i,components:E,injectedRoute:t,ionRouterOutlet:u,registerIonPage:(f,l)=>{const p=f.ionPageElement;d.registerIonPage(f,l),f.registerCallback?(l.classList.add("ion-page-invisible"),f.registerCallback()):p&&!p.classList.contains("ion-page-invisible")&&l.classList.remove("ion-page-invisible")}}},render(){const{components:t,registerIonPage:e,injectedRoute:o}=this;return S("ion-router-outlet",{ref:"ionRouterOutlet"},t&&t.map(n=>{var c,s;let u={ref:n.vueComponentRef,key:n.pathname,registerIonPage:E=>e(n,E)};const i=(s=(c=n.matchedRoute)===null||c===void 0?void 0:c.props)===null||s===void 0?void 0:s.default,d=i?i===!0?n.params:typeof i=="function"?(()=>{var E;const R=(E=n.vueComponentData)===null||E===void 0?void 0:E.propsFunctionResult;if(R)return R;{const T=i(o);return n.vueComponentData=Object.assign(Object.assign({},n.vueComponentData),{propsFunctionResult:T}),T}})():i:null;return u=Object.assign(Object.assign({},u),d),S(n.vueComponent,u)}))}}),kn=D({name:"IonTabButton",props:{_getTabState:{type:Function,default:()=>({})},disabled:Boolean,download:String,href:String,rel:String,layout:String,selected:Boolean,tab:String,target:String},setup(t,{slots:e}){st();const o=_("navManager"),n=c=>{c.cancelable&&c.preventDefault();const{tab:s,href:u,_getTabState:i}=t,k=i(),d=k.tabs[s]||{},E=d.originalHref||u,R=d.currentHref||u;k.activeTab===s?E!==R&&o.resetTab(s):o.changeTab(s,R)};return()=>S("ion-tab-button",Object.assign({onClick:n},t),e.default&&e.default())}}),ce="ionTabsWillChange",ue="ionTabsDidChange",le=t=>t.type&&(t.type.name==="IonRouterOutlet"||t.type==="ion-router-outlet"),Ot=t=>t.type&&(t.type.name==="IonTabBar"||t.type==="ion-tab-bar"),Ln=D({name:"IonTabs",emits:[ce,ue],render(){var t;const{$slots:e,$emit:o}=this,n=e.default&&e.default();let c;if(n&&n.length>0&&(c=n.find(u=>le(u))),!c)throw new Error("IonTabs must contain an IonRouterOutlet. See https://ionicframework.com/docs/vue/navigation#working-with-tabs for more information.");let s=[S("div",{class:"tabs-inner",style:{position:"relative",flex:"1",contain:"layout size style"}},c)];if(n&&n.length>0){const u=n.filter(d=>!d.type||!le(d)),i=u.find(d=>Ot(d)),k=i&&((t=i.props)===null||t===void 0?void 0:t.slot)==="top";i&&(i.props||(i.props={}),i.props._tabsWillChange=d=>o(ce,{tab:d}),i.props._tabsDidChange=d=>o(ue,{tab:d})),k?s=[...u,...s]:s=[...s,...u]}return S("ion-tabs",{style:{display:"flex",position:"absolute",top:"0",left:"0",right:"0",bottom:"0","flex-direction":"column",width:"100%",height:"100%",contain:"layout size style","z-index":"0"}},s)}}),ye=t=>{var e;return((e=t.type)===null||e===void 0?void 0:e.name)==="IonTabButton"},Ie=t=>{let e=[];return t.forEach(o=>{if(ye(o))e.push(o);else if(Array.isArray(o.children)&&o.children.length>1){const n=Ie(o.children);e=[...e,...n]}}),e},Tn=D({name:"IonTabBar",props:{_tabsWillChange:{type:Function,default:()=>{}},_tabsDidChange:{type:Function,default:()=>{}}},data(){return{tabState:{activeTab:void 0,tabs:{}},tabVnodes:[]}},updated(){this.setupTabState(_("navManager"))},methods:{setupTabState(t){const e=this.$data.tabState,o=Z();(this.$data.tabVnodes=Ie(o.subTree.children||[])).forEach(c=>{e.tabs[c.props.tab]={originalHref:c.props.href,currentHref:c.props.href,ref:c},c.component.props._getTabState=()=>e}),this.checkActiveTab(t)},checkActiveTab(t){const e=t.getCurrentRouteInfo(),o=this.$data.tabVnodes,{tabs:n,activeTab:c}=this.$data.tabState,s=this.$data.tabState,i=Object.keys(n).find(R=>{const T=n[R].originalHref;return e.pathname.startsWith(T)});if(o.forEach(R=>{const T=n[R.props.tab];(!T||T.originalHref!==R.props.href)&&(n[R.props.tab]={originalHref:R.props.href,currentHref:R.props.href,ref:R})}),i&&c){const R=this.$data.tabState.tabs[c].currentHref;if(i!==c||R!==e.pathname){const T=e.search?"?".concat(e.search):"";n[i]=Object.assign(Object.assign({},n[i]),{currentHref:e.pathname+T})}e.routerAction==="pop"&&i!==c&&(n[c]=Object.assign(Object.assign({},n[c]),{currentHref:n[c].originalHref}))}const k=o.find(R=>{var T;return ye(R)&&((T=R.props)===null||T===void 0?void 0:T.tab)===i}),d=this.$refs.ionTabBar,E=i!==c;d&&(k?(E&&this.$props._tabsWillChange(i),t.handleSetCurrentTab(i),d.selectedTab=s.activeTab=i,E&&this.$props._tabsDidChange(i)):d.selectedTab=s.activeTab="")}},mounted(){const t=_("navManager");this.setupTabState(t),t.registerHistoryChangeListener(()=>this.checkActiveTab(t))},setup(t,{slots:e}){return De(),()=>S("ion-tab-bar",{ref:"ionTabBar"},e.default&&e.default())}}),F=U([]),At=D((t,{attrs:e,slots:o})=>(Be(),()=>S("ion-app",Object.assign({},e),[o.default&&o.default(),...F.value])));At.name="IonApp";const _t=t=>{F.value=[...F.value,t]},Vt=t=>{F.value=F.value.filter(e=>e!==t)},Ce=(t=_t,e=Vt)=>{const o=new WeakMap;return{attachViewToDom:(s,u,i={},k)=>{const d=document.createElement("div");k&&d.classList.add(...k),s.appendChild(d);const E=S(It,{to:d},S(u,Object.assign({},i)));return o.set(d,E),t(E),Promise.resolve(d)},removeViewFromDom:(s,u)=>{const i=o.get(u);return i&&e(i),Promise.resolve()}}},Ee=D(t=>{Se();const e=U([]),c=Ce(s=>e.value=[...e.value,s],s=>e.value=e.value.filter(u=>u!==s));return()=>S("ion-nav",Object.assign(Object.assign({},t),{delegate:c}),e.value)});Ee.name="IonNav";Ee.props={animated:{type:Boolean,default:!0},animation:{type:Function,default:void 0},root:{type:[Function,Object,String],default:void 0},rootParams:{type:Object,default:void 0},swipeGesture:{type:Boolean,default:void 0}};const Bn=D({name:"IonIcon",props:{color:String,flipRtl:Boolean,icon:String,ios:String,lazy:String,md:String,mode:String,name:String,size:String,src:String},setup(t,{slots:e}){return bt(),()=>{var o,n;const{icon:c,ios:s,md:u,mode:i}=t;let k;const d=ve(),E=i||(d==null?void 0:d.get("mode"));return s||u?E==="ios"?k=(o=s!=null?s:u)!==null&&o!==void 0?o:c:k=(n=u!=null?u:s)!==null&&n!==void 0?n:c:k=c,S("ion-icon",Object.assign(Object.assign({},t),{icon:k}),e)}}}),Re=Symbol(),de={default:Re},we=(t,e,o=[],n,c)=>{const u=D((i,{slots:k})=>{e!==void 0&&e();const d=W(!1),E=W();return Et(()=>{E.value.addEventListener("ion-mount",()=>d.value=!0),E.value.addEventListener("will-present",()=>d.value=!0),E.value.addEventListener("did-dismiss",()=>d.value=!1)}),()=>{let R={};for(const P in i){const O=i[P];i.hasOwnProperty(P)&&O!==Re&&(R[P]=O)}const T=()=>n?S("div",{className:"ion-delegate-host ion-page"},k):k;return S(t,Object.assign(Object.assign({},R),{ref:E}),d.value||R.keepContentsMounted||R.keepContentsMounted===""?T():void 0)}});return u.name=t,u.props={isOpen:de},o.forEach(i=>{u.props[i]=de}),u},Sn=we("ion-loading",rt,["animated","backdropDismiss","cssClass","duration","enterAnimation","htmlAttributes","isOpen","keyboardClose","leaveAnimation","message","mode","showBackdrop","spinner","translucent","trigger"]),Pn=we("ion-modal",ct,["animated","backdropBreakpoint","backdropDismiss","breakpoints","canDismiss","enterAnimation","focusTrap","handle","handleBehavior","htmlAttributes","initialBreakpoint","isOpen","keepContentsMounted","keyboardClose","leaveAnimation","mode","presentingElement","showBackdrop","trigger"],!0),$t=(t,e,o=!1)=>{const n=o?Ce():void 0,c=e.create.bind(e);return e.create=s=>(t(),c(Object.assign(Object.assign({},s),{delegate:n}))),e},Dn=$t(Oe,dt),xt=()=>{const t=[],e={},o=m=>{switch(m.routerAction){case"pop":c(m);break;default:s(m);break}m.routerDirection==="root"&&(u(),s(m))},n=m=>{const h=t.findIndex(b=>b.id===m.id);h>-1&&t.splice(h,1,m);const r=e[m.tab||""];if(r){const b=r.findIndex(I=>I.id===m.id);b>-1?r.splice(b,1,m):r.push(m)}else m.tab&&(e[m.tab]=[m])},c=m=>{const h=i(m.tab);let r;if(h){for(r=h[h.length-1];r&&r.id!==m.id;)h.pop(),r=h[h.length-1];h.pop(),h.push(m)}for(r=t[t.length-1];r&&r.id!==m.id;)t.pop(),r=t[t.length-1];t.pop(),t.push(m)},s=m=>{const h=i(m.tab);h&&(h[h.length-1]&&h[h.length-1].id===m.id&&h.pop(),h.push(m)),t.push(m)},u=m=>{if(m){const{position:h,tab:r}=m,b=t.findIndex(l=>l.position===h);if(b===-1)return;t.splice(b);const I=l=>{const p=e[l].findIndex(a=>a.position===h);p!==-1&&e[l].splice(p)},f=e[r];if(r&&f)I(r);else for(const l in e)I(l)}else{for(const h in e)e[h]=[];t.length=0}},i=m=>{let h;return m&&(h=e[m],h||(h=e[m]=[])),h},k=()=>t.length,d=(m,h)=>{const r=h-m;return t[r]||E()},E=()=>t[t.length-1];return{current:d,size:k,last:E,add:o,canGoBack:(m=1,h,r)=>r-m>=h,update:n,getFirstRouteInfoForTab:m=>{const h=i(m);if(h)return h[0]},getCurrentRouteInfoForTab:m=>{const h=i(m);if(h)return h[h.length-1]},findLastLocation:(m,h=-1)=>{const r=i(m.tab);if(r){if(h<-1)return r[r.length-1+h];for(let b=r.length-2;b>=0;b--){const I=r[b];if(I&&I.pathname===m.pushedByRoute)return I}}if(h<-1)return t[t.length-1+h];for(let b=t.length-2;b>=0;b--){const I=t[b];if(I&&I.pathname===m.pushedByRoute)return I}},clearHistory:u}},fe={main:0},ke=(t="main")=>{var e;const o=((e=fe[t])!==null&&e!==void 0?e:0)+1;return fe[t]=o,o.toString()},jt=(t,e)=>{let o={direction:void 0,action:void 0,delta:void 0};e.afterEach((a,g,y)=>{if(y)return;const{direction:w,action:v,delta:V}=o;s=t.history.state.position;const C=t.history.state.replaced?"replace":void 0;R(a,v||C,w,V),o={direction:void 0,action:void 0,delta:void 0}});const n=xt();let c=t.history.state.position,s=t.history.state.position,u,i;const k=[];typeof document<"u"&&document.addEventListener("ionBackButton",a=>{a.detail.register(0,g=>{t.history.go(-1),g()})}),t.history.listen((a,g,y)=>{o={delta:y.delta,action:y.type==="pop"&&y.delta>=1?"push":y.type,direction:y.direction===""?"forward":y.direction}});const d=(a,g)=>{const y=n.current(c,s);if(y&&y.pushedByRoute){const w=n.findLastLocation(y);w?(i=Object.assign(Object.assign({},w),{routerAction:"pop",routerDirection:"back",routerAnimation:g||y.routerAnimation}),y.lastPathname===y.pushedByRoute||w.pathname===y.pushedByRoute&&!y.tab&&!w.tab?e.back():e.go(w.position-y.position)):E(a,"pop","back",g)}else E(a,"pop","back",g)},E=(a,g,y,w,v)=>{I(g,y,w,v),g==="push"?e.push(a):e.replace(a)},R=(a,g,y,w)=>{let v;if(i)if(i.routerAction==="replace")v=n.current(c,s);else if(i.routerAction==="pop")v=n.current(c,s+1),g==="replace"&&n.clearHistory();else{const C=i.routerDirection==="root"?s:s-1;v=n.current(c,C)}else v=u;if(v||(v={pathname:"",search:""}),v.pathname+v.search!==a.fullPath){if(!i){if(g==="replace")i={routerAction:"replace",routerDirection:"none"};else if(g==="pop"){const x=n.current(c,s-w);if(x&&x.pushedByRoute){const B=n.findLastLocation(x,w);i=Object.assign(Object.assign({},B),{routerAction:"pop",routerDirection:"back"})}else i={routerAction:"pop",routerDirection:"none"}}i||(i={routerAction:"push",routerDirection:y||"forward"})}let C;if(i!=null&&i.id)C=Object.assign(Object.assign({},i),{lastPathname:v.pathname});else{const x=i.routerAction==="push"&&i.routerDirection==="forward";if(C=Object.assign(Object.assign({id:ke("routeInfo")},i),{lastPathname:v.pathname,pathname:a.path,search:a.fullPath&&a.fullPath.split("?")[1]||"",params:a.params&&a.params,prevRouteLastPathname:v.lastPathname}),x)C.pushedByRoute=v.pathname!==""?v.pathname:void 0;else if(C.routerAction==="pop"){const B=n.findLastLocation(C);C.pushedByRoute=B==null?void 0:B.pushedByRoute}else if(C.routerAction==="push"&&C.tab!==v.tab){const B=n.getCurrentRouteInfoForTab(C.tab);C.pushedByRoute=B==null?void 0:B.pushedByRoute}else if(C.routerAction==="replace"){const B=n.current(c,s),X=B==null?void 0:B.pushedByRoute,Le=X!==void 0&&X!==C.pathname?X:C.pushedByRoute;C.lastPathname=(B==null?void 0:B.pathname)||C.lastPathname,C.pushedByRoute=Le,C.routerDirection=(B==null?void 0:B.routerDirection)||C.routerDirection,C.routerAnimation=(B==null?void 0:B.routerAnimation)||C.routerAnimation,C.prevRouteLastPathname=B==null?void 0:B.lastPathname}}C.position=s,C.delta=w;const $=n.size(),H=s-c,M=$===H&&$>0&&g==="replace";$>H||M?(C.routerAction==="push"||C.routerAction==="replace")&&w===void 0&&(n.clearHistory(C),n.add(C)):n.add(C),n.size()===1&&(c=C.position),u=C}i=void 0,k.forEach(C=>C(u))},T=()=>u,P=(a=1)=>n.canGoBack(a,c,s),O=a=>{const{routerAnimation:g,routerDirection:y,routerLink:w}=a;I("push",y,g),e.push(w)},m=a=>{const g=n.getFirstRouteInfoForTab(a);g&&e.go(g.position-s)},h=(a,g)=>{if(!g)return;const y=n.getCurrentRouteInfoForTab(a),[w]=g.split("?");y?(i=Object.assign(Object.assign({},i),{routerAction:"push",routerDirection:"none",tab:a}),y.pathname===w?e.push({path:y.pathname,query:Q(y.search)}):e.push({path:w,query:Q(y.search)})):E(w,"push","none",void 0,a)},r=a=>{const g=Object.assign({},n.current(c,s));g.tab!==a&&(g.tab=a,n.update(g));const y=n.findLastLocation(g);g.pushedByRoute!==g.lastPathname&&(y==null?void 0:y.tab)!==a&&(g.pushedByRoute=void 0,n.update(g))},b=a=>{k.push(a)},I=(a="push",g="forward",y,w)=>{i={routerAction:a,routerDirection:g,routerAnimation:y,tab:w}};return{handleNavigate:E,getLeavingRouteInfo:()=>n.current(c,s),handleNavigateBack:d,handleSetCurrentTab:r,getCurrentRouteInfo:T,canGoBack:P,navigate:O,resetTab:m,changeTab:h,registerHistoryChangeListener:b,goBack:a=>{I("pop","back",a),e.back()},goForward:a=>{I("push","forward",a),e.forward()}}},Ht=t=>{const e={},o=()=>Object.keys(e).length,n=r=>{delete e[r]},c=r=>e[r],s=(r,b)=>{r.ionPageElement=b,r.ionRoute=!0,r.matchedRoute.instances={default:r.vueComponentRef.value}},u=(r,b)=>E(r.pathname,b,!1),i=(r,b,I=!0)=>E(r.lastPathname,b,I),k=(r,b)=>E(r,b,!1),d=(r,b)=>b.find(I=>{if(I.pathname===r)return I}),E=(r,b,I=!1)=>{const f=l=>{if(I&&!l.ionRoute||r==="")return!1;const a=t.resolve(r).matched.find(g=>g===l.matchedRoute);if(a)return a.path.includes(":")&&r!==l.pathname?!1:l};if(b){const l=e[b];if(!l)return;const p=t?l.find(f):d(r,l);if(p)return p}else for(const l in e){const p=e[l],a=d(r,p);if(a)return a}};return{unmountLeavingViews:(r,b,I=1)=>{const f=e[r];if(!f)return;const l=f.findIndex(p=>p===b);for(let p=l+1;p<l-I;p++){const a=f[p];a.mount=!1,a.ionPageElement=void 0,a.ionRoute=!1,a.matchedRoute.instances={}}},mountIntermediaryViews:(r,b,I=1)=>{const f=e[r];if(!f)return;const l=f.findIndex(p=>p===b);for(let p=l+1;p<l+I;p++)f[p].mount=!0},clear:n,findViewItemByRouteInfo:u,findLeavingViewItemByRouteInfo:i,findViewItemByPathname:k,createViewItem:(r,b,I,f,l)=>({id:ke("viewItem"),pathname:f.pathname,outletId:r,matchedRoute:I,ionPageElement:l,vueComponent:b,vueComponentRef:U(),ionRoute:!1,mount:!1,exact:f.pathname===I.path,params:f.params,vueComponentData:{}}),getChildrenToRender:r=>e[r]?e[r].filter(f=>f.mount):[],add:r=>{const{outletId:b}=r;e[b]?e[b].push(r):e[b]=[r]},remove:(r,b)=>{if(!b)throw Error("outletId required");const I=e[b];I&&(e[b]=I.filter(f=>f.id!==r.id))},registerIonPage:s,getViewStack:c,size:o}},On=t=>{const e=Object.assign({},t);delete e.tabsPrefix;const o=ht(e),n=jt(t,o),c=Ht(o),s=o.install.bind(o);o.install=i=>{i.provide("navManager",n),i.provide("viewStacks",c),s(i)};const u=o.isReady.bind(o);return o.isReady=()=>u(),o},An=t=>gt(t),N={SecureStorage:"ionicSecureStorage",IndexedDB:G.INDEXEDDB,LocalStorage:G.LOCALSTORAGE},pe={name:"_ionicstorage",storeName:"_ionickv",dbKey:"_ionickey",driverOrder:[N.SecureStorage,N.IndexedDB,N.LocalStorage]};class _n{constructor(e=pe){this._db=null,this._secureStorageDriver=null;const o=Object.assign({},pe,e||{});this._config=o}async create(){const e=G.createInstance(this._config);return this._db=e,await e.setDriver(this._config.driverOrder||[]),this}async defineDriver(e){return e._driver===N.SecureStorage&&(this._secureStorageDriver=e),G.defineDriver(e)}get driver(){var e;return((e=this._db)===null||e===void 0?void 0:e.driver())||null}assertDb(){if(!this._db)throw new Error("Database not created. Must call create() first");return this._db}get(e){return this.assertDb().getItem(e)}set(e,o){return this.assertDb().setItem(e,o)}remove(e){return this.assertDb().removeItem(e)}clear(){return this.assertDb().clear()}length(){return this.assertDb().length()}keys(){return this.assertDb().keys()}forEach(e){return this.assertDb().iterate(e)}setEncryptionKey(e){var o;if(this._secureStorageDriver)(o=this._secureStorageDriver)===null||o===void 0||o.setEncryptionKey(e);else throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available")}}export{cn as A,ln as B,vn as C,gn as D,bn as E,pn as F,mn as G,hn as H,on as I,sn as J,rn as K,Zt as L,qt as M,yn as N,tn as O,Pn as P,_n as S,nn as a,fn as b,Qt as c,an as d,Bn as e,Yt as f,wn as g,Tn as h,Ln as i,Rn as j,kn as k,un as l,Cn as m,en as n,Jt as o,Dt as p,In as q,dn as r,On as s,Dn as t,An as u,Sn as v,At as w,En as x,Xt as y,Kt as z};
