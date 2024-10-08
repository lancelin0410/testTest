import{c as x,p as k,H as b,h as c,b as M}from"./@stencil-DBaMOtEh.js";let d;const z=()=>{if(typeof window>"u")return new Map;if(!d){const o=window;o.Ionicons=o.Ionicons||{},d=o.Ionicons.map=o.Ionicons.map||new Map}return d},C=o=>{let t=h(o.src);return t||(t=u(o.name,o.icon,o.mode,o.ios,o.md),t?L(t,o):o.icon&&(t=h(o.icon),t||(t=h(o.icon[o.mode]),t))?t:null)},L=(o,t)=>{const n=z().get(o);if(n)return n;try{return x("svg/".concat(o,".svg"))}catch(s){console.warn('[Ionicons Warning]: Could not load icon with name "'.concat(o,'". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.'),t)}},u=(o,t,n,s,i)=>(n=(n&&r(n))==="ios"?"ios":"md",s&&n==="ios"?o=r(s):i&&n==="md"?o=r(i):(!o&&t&&!f(t)&&(o=t),l(o)&&(o=r(o))),!l(o)||o.trim()===""||o.replace(/[a-z]|-|\d/gi,"")!==""?null:o),h=o=>l(o)&&(o=o.trim(),f(o))?o:null,f=o=>o.length>0&&/(\/|\.)/.test(o),l=o=>typeof o=="string",r=o=>o.toLowerCase(),y=(o,t=[])=>{const n={};return t.forEach(s=>{o.hasAttribute(s)&&(o.getAttribute(s)!==null&&(n[s]=o.getAttribute(s)),o.removeAttribute(s))}),n},A=o=>o&&o.dir!==""?o.dir.toLowerCase()==="rtl":(document==null?void 0:document.dir.toLowerCase())==="rtl",B=o=>{const t=document.createElement("div");t.innerHTML=o;for(let s=t.childNodes.length-1;s>=0;s--)t.childNodes[s].nodeName.toLowerCase()!=="svg"&&t.removeChild(t.childNodes[s]);const n=t.firstElementChild;if(n&&n.nodeName.toLowerCase()==="svg"){const s=n.getAttribute("class")||"";if(n.setAttribute("class",(s+" s-ion-icon").trim()),m(n))return t.innerHTML}return""},m=o=>{if(o.nodeType===1){if(o.nodeName.toLowerCase()==="script")return!1;for(let t=0;t<o.attributes.length;t++){const n=o.attributes[t].name;if(l(n)&&n.toLowerCase().indexOf("on")===0)return!1}for(let t=0;t<o.childNodes.length;t++)if(!m(o.childNodes[t]))return!1}return!0},H=o=>o.startsWith("data:image/svg+xml"),I=o=>o.indexOf(";utf8,")!==-1,e=new Map,w=new Map;let g;const V=(o,t)=>{let n=w.get(o);if(!n)if(typeof fetch<"u"&&typeof document<"u")if(H(o)&&I(o)){g||(g=new DOMParser);const i=g.parseFromString(o,"text/html").querySelector("svg");return i&&e.set(o,i.outerHTML),Promise.resolve()}else n=fetch(o).then(s=>{if(s.ok)return s.text().then(i=>{i&&t!==!1&&(i=B(i)),e.set(o,i||"")});e.set(o,"")}),w.set(o,n);else return e.set(o,""),Promise.resolve();return n},j=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}",O=k(class extends b{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.iconName=null,this.inheritedAttributes={},this.didLoadIcon=!1,this.svgContent=void 0,this.isVisible=!1,this.mode=E(),this.color=void 0,this.ios=void 0,this.md=void 0,this.flipRtl=void 0,this.name=void 0,this.src=void 0,this.icon=void 0,this.size=void 0,this.lazy=!1,this.sanitize=!0}componentWillLoad(){this.inheritedAttributes=y(this.el,["aria-label"])}connectedCallback(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidLoad(){this.didLoadIcon||this.loadIcon()}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,n,s){if(this.lazy&&typeof window<"u"&&window.IntersectionObserver){const i=this.io=new window.IntersectionObserver(a=>{a[0].isIntersecting&&(i.disconnect(),this.io=void 0,s())},{rootMargin:n});i.observe(t)}else s()}loadIcon(){if(this.isVisible){const t=C(this);t&&(e.has(t)?this.svgContent=e.get(t):V(t,this.sanitize).then(()=>this.svgContent=e.get(t)),this.didLoadIcon=!0)}this.iconName=u(this.name,this.icon,this.mode,this.ios,this.md)}render(){const{flipRtl:t,iconName:n,inheritedAttributes:s,el:i}=this,a=this.mode||"md",p=n?(n.includes("arrow")||n.includes("chevron"))&&t!==!1:!1,v=t||p;return c(M,Object.assign({role:"img",class:Object.assign(Object.assign({[a]:!0},S(this.color)),{["icon-".concat(this.size)]:!!this.size,"flip-rtl":v,"icon-rtl":v&&A(i)})},s),this.svgContent?c("div",{class:"icon-inner",innerHTML:this.svgContent}):c("div",{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return this}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"],ios:["loadIcon"],md:["loadIcon"]}}static get style(){return j}},[1,"ion-icon",{mode:[1025],color:[1],ios:[1],md:[1],flipRtl:[4,"flip-rtl"],name:[513],src:[1],icon:[8],size:[1],lazy:[4],sanitize:[4],svgContent:[32],isVisible:[32]}]),E=()=>typeof document<"u"&&document.documentElement.getAttribute("mode")||"md",S=o=>o?{"ion-color":!0,["ion-color-".concat(o)]:!0}:null;function X(){if(typeof customElements>"u")return;["ion-icon"].forEach(t=>{switch(t){case"ion-icon":customElements.get(t)||customElements.define(t,O);break}})}const P=X,T="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M256 112v288M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z'/></svg>",$="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M32 376a56 56 0 0056 56h336a56 56 0 0056-56V222H32zm66-76a30 30 0 0130-30h48a30 30 0 0130 30v20a30 30 0 01-30 30h-48a30 30 0 01-30-30zM424 80H88a56 56 0 00-56 56v26h448v-26a56 56 0 00-56-56z'/></svg>",q="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='56' ry='56' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' stroke-width='60' d='M48 192h416M128 300h48v20h-48z' class='ionicon-fill-none'/></svg>",F="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='32' y='80' width='448' height='256' rx='16' ry='16' transform='rotate(180 256 208)' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M64 384h384M96 432h320' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='208' r='80' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",R="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M464 128L240 384l-96-96M144 384l-96-96M368 128L232 284' class='ionicon-fill-none ionicon-stroke-width'/></svg>",W="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",G="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",J="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",K="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",Q="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 328l144-144 144 144' class='ionicon-fill-none'/></svg>",Y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",Z="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M408 480H184a72 72 0 01-72-72V184a72 72 0 0172-72h224a72 72 0 0172 72v224a72 72 0 01-72 72z'/><path d='M160 80h235.88A72.12 72.12 0 00328 32H104a72 72 0 00-72 72v224a72.12 72.12 0 0048 67.88V160a80 80 0 0180-80z'/></svg>",N="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z'/></svg>",oo="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M496 152a56 56 0 00-56-56H220.11a23.89 23.89 0 01-13.31-4L179 73.41A55.77 55.77 0 00147.89 64H72a56 56 0 00-56 56v48a8 8 0 008 8h464a8 8 0 008-8zM16 392a56 56 0 0056 56h368a56 56 0 0056-56V216a8 8 0 00-8-8H24a8 8 0 00-8 8z'/></svg>",to="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm143 304h-45.22a8 8 0 01-6.91-4l-16.14-27.68a8 8 0 01-.86-6l14.86-59.92a8 8 0 014.65-5.45l28.1-11.9a8 8 0 018.34 1.3l41.63 35.82a8 8 0 012.69 7.26 174.75 174.75 0 01-24.28 66.68A8 8 0 01399 352zM134.52 237.13l28.1 11.9a8 8 0 014.65 5.45l14.86 59.92a8 8 0 01-.86 6L165.13 348a8 8 0 01-6.91 4H113a8 8 0 01-6.82-3.81 174.75 174.75 0 01-24.28-66.68 8 8 0 012.69-7.26l41.63-35.82a8 8 0 018.3-1.3zm256.94-87.24l-18.07 51.38A8 8 0 01369 206l-29.58 12.53a8 8 0 01-8.26-1.24L274.9 170.1a8 8 0 01-2.9-6.1v-33.58a8 8 0 013.56-6.65l42.83-28.54a8 8 0 017.66-.67A176.92 176.92 0 01390 142a8 8 0 011.46 7.89zM193.6 95.23l42.84 28.54a8 8 0 013.56 6.65V164a8 8 0 01-2.86 6.13l-56.26 47.19a8 8 0 01-8.26 1.24L143 206a8 8 0 01-4.43-4.72L120.5 149.9a8 8 0 011.5-7.9 176.92 176.92 0 0164-47.48 8 8 0 017.6.71zm17.31 327.46L191.18 373a8 8 0 01.52-7l15.17-26a8 8 0 016.91-4h84.44a8 8 0 016.91 4l15.18 26a8 8 0 01.53 7l-19.59 49.67a8 8 0 01-5.69 4.87 176.58 176.58 0 01-79 0 8 8 0 01-5.65-4.85z'/></svg>",no="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z'/></svg>",so="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z'/></svg>",io="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M382 0H130a18 18 0 00-18 18v476a18 18 0 0018 18h252a18 18 0 0018-18V18a18 18 0 00-18-18zM148 448V64h216v384z'/></svg>",eo="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z'/></svg>",ao="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/></svg>",ro="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M256 128v144h96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",lo="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z' class='ionicon-fill-none'/><path d='M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z'/></svg>";export{T as a,K as b,Y as c,P as d,G as e,to as f,Q as g,J as h,Z as i,F as j,q as k,R as l,_ as m,no as n,$ as o,io as p,so as q,eo as r,ao as s,ro as t,oo as u,N as v,lo as w,W as x};
