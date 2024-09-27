import{d as b,p as x,H as k,h as c,a as C}from"./@stencil-pJInS8Bp.js";let d;const L=()=>{if(typeof window>"u")return new Map;if(!d){const t=window;t.Ionicons=t.Ionicons||{},d=t.Ionicons.map=t.Ionicons.map||new Map}return d},M=t=>{let o=h(t.src);return o||(o=m(t.name,t.icon,t.mode,t.ios,t.md),o?z(o,t):t.icon&&(o=h(t.icon),o||(o=h(t.icon[t.mode]),o))?o:null)},z=(t,o)=>{const n=L().get(t);if(n)return n;try{return b("svg/".concat(t,".svg"))}catch(s){console.warn('[Ionicons Warning]: Could not load icon with name "'.concat(t,'". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.'),o)}},m=(t,o,n,s,i)=>(n=(n&&a(n))==="ios"?"ios":"md",s&&n==="ios"?t=a(s):i&&n==="md"?t=a(i):(!t&&o&&!v(o)&&(t=o),l(t)&&(t=a(t))),!l(t)||t.trim()===""||t.replace(/[a-z]|-|\d/gi,"")!==""?null:t),h=t=>l(t)&&(t=t.trim(),v(t))?t:null,v=t=>t.length>0&&/(\/|\.)/.test(t),l=t=>typeof t=="string",a=t=>t.toLowerCase(),y=(t,o=[])=>{const n={};return o.forEach(s=>{t.hasAttribute(s)&&(t.getAttribute(s)!==null&&(n[s]=t.getAttribute(s)),t.removeAttribute(s))}),n},I=t=>t&&t.dir!==""?t.dir.toLowerCase()==="rtl":(document==null?void 0:document.dir.toLowerCase())==="rtl",A=t=>{const o=document.createElement("div");o.innerHTML=t;for(let s=o.childNodes.length-1;s>=0;s--)o.childNodes[s].nodeName.toLowerCase()!=="svg"&&o.removeChild(o.childNodes[s]);const n=o.firstElementChild;if(n&&n.nodeName.toLowerCase()==="svg"){const s=n.getAttribute("class")||"";if(n.setAttribute("class",(s+" s-ion-icon").trim()),w(n))return o.innerHTML}return""},w=t=>{if(t.nodeType===1){if(t.nodeName.toLowerCase()==="script")return!1;for(let o=0;o<t.attributes.length;o++){const n=t.attributes[o].name;if(l(n)&&n.toLowerCase().indexOf("on")===0)return!1}for(let o=0;o<t.childNodes.length;o++)if(!w(t.childNodes[o]))return!1}return!0},B=t=>t.startsWith("data:image/svg+xml"),H=t=>t.indexOf(";utf8,")!==-1,e=new Map,u=new Map;let f;const E=(t,o)=>{let n=u.get(t);if(!n)if(typeof fetch<"u"&&typeof document<"u")if(B(t)&&H(t)){f||(f=new DOMParser);const i=f.parseFromString(t,"text/html").querySelector("svg");return i&&e.set(t,i.outerHTML),Promise.resolve()}else n=fetch(t).then(s=>{if(s.ok)return s.text().then(i=>{i&&o!==!1&&(i=A(i)),e.set(t,i||"")});e.set(t,"")}),u.set(t,n);else return e.set(t,""),Promise.resolve();return n},V=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",j=x(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.iconName=null,this.inheritedAttributes={},this.didLoadIcon=!1,this.svgContent=void 0,this.isVisible=!1,this.mode=S(),this.color=void 0,this.ios=void 0,this.md=void 0,this.flipRtl=void 0,this.name=void 0,this.src=void 0,this.icon=void 0,this.size=void 0,this.lazy=!1,this.sanitize=!0}componentWillLoad(){this.inheritedAttributes=y(this.el,["aria-label"])}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidLoad(){this.didLoadIcon||this.loadIcon()}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(o,n,s){if(this.lazy&&typeof window<"u"&&window.IntersectionObserver){const i=this.io=new window.IntersectionObserver(r=>{r[0].isIntersecting&&(i.disconnect(),this.io=void 0,s())},{rootMargin:n});i.observe(o)}else s()}loadIcon(){if(this.isVisible){const o=M(this);o&&(e.has(o)?this.svgContent=e.get(o):E(o,this.sanitize).then(()=>this.svgContent=e.get(o)),this.didLoadIcon=!0)}this.iconName=m(this.name,this.icon,this.mode,this.ios,this.md)}render(){const{flipRtl:o,iconName:n,inheritedAttributes:s,el:i}=this,r=this.mode||"md",p=n?(n.includes("arrow")||n.includes("chevron"))&&o!==!1:!1,g=o||p;return c(C,Object.assign({role:"img",class:Object.assign(Object.assign({[r]:!0},O(this.color)),{["icon-".concat(this.size)]:!!this.size,"flip-rtl":g,"icon-rtl":g&&I(i)})},s),this.svgContent?c("div",{class:"icon-inner",innerHTML:this.svgContent}):c("div",{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return this}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}}static get style(){return V}},[1,"ion-icon",{mode:[1025],color:[1],ios:[1],md:[1],flipRtl:[4,"flip-rtl"],name:[513],src:[1],icon:[8],size:[1],lazy:[4],sanitize:[4],svgContent:[32],isVisible:[32]}]),S=()=>typeof document<"u"&&document.documentElement.getAttribute("mode")||"md",O=t=>t?{"ion-color":!0,["ion-color-".concat(t)]:!0}:null;function X(){if(typeof customElements>"u")return;["ion-icon"].forEach(o=>{switch(o){case"ion-icon":customElements.get(o)||customElements.define(o,j);break}})}const T=X,P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M256 112v288M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z'/></svg>",$="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284' class='ionicon-fill-none ionicon-stroke-width'/></svg>",F="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",R="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",q="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",W="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 328l144-144 144 144' class='ionicon-fill-none'/></svg>",G="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",J="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M408 480H184a72 72 0 01-72-72V184a72 72 0 0172-72h224a72 72 0 0172 72v224a72 72 0 01-72 72z'/><path d='M160 80h235.88A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z'/></svg>",K="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z'/></svg>",Q="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm143 304h-45.22a8 8 0 01-6.91-4l-16.14-27.68a8 8 0 01-.86-6l14.86-59.92a8 8 0 014.65-5.45l28.1-11.9a8 8 0 018.34 1.3l41.63 35.82a8 8 0 012.69 7.26 174.75 174.75 0 01-24.28 66.68A8 8 0 01399 352zM134.52 237.13l28.1 11.9a8 8 0 014.65 5.45l14.86 59.92a8 8 0 01-.86 6L165.13 348a8 8 0 01-6.91 4H113a8 8 0 01-6.82-3.81 174.75 174.75 0 01-24.28-66.68 8 8 0 012.69-7.26l41.63-35.82a8 8 0 018.3-1.3zm256.94-87.24l-18.07 51.38A8 8 0 01369 206l-29.58 12.53a8 8 0 01-8.26-1.24L274.9 170.1a8 8 0 01-2.9-6.1v-33.58a8 8 0 013.56-6.65l42.83-28.54a8 8 0 017.66-.67A176.92 176.92 0 01390 142a8 8 0 011.46 7.89zM193.6 95.23l42.84 28.54a8 8 0 013.56 6.65V164a8 8 0 01-2.86 6.13l-56.26 47.19a8 8 0 01-8.26 1.24L143 206a8 8 0 01-4.43-4.72L120.5 149.9a8 8 0 011.5-7.9 176.92 176.92 0 0164-47.48 8 8 0 017.6.71zm17.31 327.46L191.18 373a8 8 0 01.52-7l15.17-26a8 8 0 016.91-4h84.44a8 8 0 016.91 4l15.18 26a8 8 0 01.53 7l-19.59 49.67a8 8 0 01-5.69 4.87 176.58 176.58 0 01-79 0 8 8 0 01-5.65-4.85z'/></svg>",Y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z'/></svg>",Z="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/></svg>";export{P as a,q as b,G as c,T as d,F as e,Q as f,W as g,R as h,J as i,$ as j,_ as k,K as l,Y as r,Z as s};
