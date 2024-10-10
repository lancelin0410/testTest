System.register([],(function(e,t){"use strict";return{execute:function(){e({A:I,B:function(e={}){const t=E(e.onWarn)?e.onWarn:k,n=d(e.version)?e.version:ve,r=d(e.locale)||E(e.locale)?e.locale:we,o=E(r)?we:r,s=_(e.fallbackLocale)||h(e.fallbackLocale)||d(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:o,l=h(e.messages)?e.messages:{[o]:{}},i=h(e.datetimeFormats)?e.datetimeFormats:{[o]:{}},u=h(e.numberFormats)?e.numberFormats:{[o]:{}},f=a({},e.modifiers||{},{upper:(e,t)=>"text"===t&&d(e)?e.toUpperCase():"vnode"===t&&p(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&d(e)?e.toLowerCase():"vnode"===t&&p(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&d(e)?Fe(e):"vnode"===t&&p(e)&&"__v_isVNode"in e?Fe(e.children):e}),N=e.pluralRules||{},L=E(e.missing)?e.missing:null,T=!m(e.missingWarn)&&!c(e.missingWarn)||e.missingWarn,I=!m(e.fallbackWarn)&&!c(e.fallbackWarn)||e.fallbackWarn,A=!!e.fallbackFormat,O=!!e.unresolving,C=E(e.postTranslation)?e.postTranslation:null,y=h(e.processor)?e.processor:null,g=!m(e.warnHtmlMessage)||e.warnHtmlMessage,S=!!e.escapeParameter,b=E(e.messageCompiler)?e.messageCompiler:Ye,P=E(e.messageResolver)?e.messageResolver:Xe||_e,D=E(e.localeFallbacker)?e.localeFallbacker:We||De,U=p(e.fallbackContext)?e.fallbackContext:void 0,R=e,M=p(R.__datetimeFormatters)?R.__datetimeFormatters:new Map,v=p(R.__numberFormatters)?R.__numberFormatters:new Map,x=p(R.__meta)?R.__meta:{};He++;const w={version:n,cid:He,locale:r,fallbackLocale:s,messages:l,modifiers:f,pluralRules:N,missing:L,missingWarn:T,fallbackWarn:I,fallbackFormat:A,unresolving:O,postTranslation:C,processor:y,warnHtmlMessage:g,escapeParameter:S,messageCompiler:b,messageResolver:P,localeFallbacker:D,fallbackContext:U,onWarn:t,__meta:x};return w.datetimeFormats=i,w.numberFormats=u,w.__datetimeFormatters=M,w.__numberFormatters=v,__INTLIFY_PROD_DEVTOOLS__&&function(e,t,n){Te&&Te.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}(w,n,x),w},E:function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}},F:function(e,t,n){const r=e;for(const o in n){const e=`${t}__${o}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}},J:ct,K:function(e,...t){const{fallbackFormat:n,postTranslation:o,unresolving:c,messageCompiler:s,fallbackLocale:l,messages:i}=e,[f,N]=ct(...t),L=(m(N.missingWarn)?N.missingWarn:e.missingWarn,m(N.fallbackWarn)?N.fallbackWarn:e.fallbackWarn,m(N.escapeParameter)?N.escapeParameter:e.escapeParameter),T=!!N.resolvedMessage,I=d(N.default)||m(N.default)?m(N.default)?s?f:()=>f:N.default:n?s?f:()=>f:"",k=n||""!==I,A=Se(e,N);L&&function(e){_(e.list)?e.list=e.list.map((e=>d(e)?u(e):e)):p(e.named)&&Object.keys(e.named).forEach((t=>{d(e.named[t])&&(e.named[t]=u(e.named[t]))}))}(N);let[O,C,y]=T?[f,A,i[A]||{}]:rt(e,f,A,l),g=O,S=f;if(T||d(g)||Ze(g)||nt(g)||k&&(g=I,S=g),!(T||(d(g)||Ze(g)||nt(g))&&d(C)))return c?xe:f;let b=!1;const P=nt(g)?g:ot(e,f,C,g,S,(()=>{b=!0}));if(b)return g;const D=function(e={}){const t=e.locale,n=function(e){const t=r(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(r(e.named.count)||r(e.named.n))?r(e.named.count)?e.named.count:r(e.named.n)?e.named.n:t:t}(e),o=p(e.pluralRules)&&d(t)&&E(e.pluralRules[t])?e.pluralRules[t]:Le,c=p(e.pluralRules)&&d(t)&&E(e.pluralRules[t])?Le:void 0,s=e=>e[o(n,e.length,c)],l=e.list||[],i=e=>l[e],u=e.named||{};r(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,u);const f=e=>u[e];function m(t){const n=E(e.messages)?e.messages(t):!!p(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):de)}const N=t=>e.modifiers?e.modifiers[t]:Ee,L=h(e.processor)&&E(e.processor.normalize)?e.processor.normalize:pe,T=h(e.processor)&&E(e.processor.interpolate)?e.processor.interpolate:Ne,I=h(e.processor)&&d(e.processor.type)?e.processor.type:me,k=(e,...t)=>{const[n,r]=t;let o="text",c="";1===t.length?p(n)?(c=n.modifier||c,o=n.type||o):d(n)&&(c=n||c):2===t.length&&(d(n)&&(c=n||c),d(r)&&(o=r||o));const s=m(e)(A),a="vnode"===o&&_(s)&&c?s[0]:s;return c?N(c)(a,o):a},A={list:i,named:f,plural:s,linked:k,message:m,type:I,interpolate:T,normalize:L,values:a({},l,u)};return A}(function(e,t,n,o){const{modifiers:c,pluralRules:s,messageResolver:a,fallbackLocale:l,fallbackWarn:i,missingWarn:u,fallbackContext:f}=e,_=r=>{let o=a(n,r);if(null==o&&f){const[,,e]=rt(f,r,t,l);o=a(e,r)}if(d(o)||Ze(o)){let n=!1;const c=ot(e,r,t,o,r,(()=>{n=!0}));return n?tt:c}return nt(o)?o:tt},E={locale:t,modifiers:c,pluralRules:s,messages:_};return e.processor&&(E.processor=e.processor),o.list&&(E.list=o.list),o.named&&(E.named=o.named),r(o.plural)&&(E.pluralIndex=o.plural),E}(e,C,y,N)),U=function(e,t,n){const r=t(n);return r}(0,P,D),R=o?o(U,f):U;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:d(f)?f:nt(g)?g.key:"",locale:C||(nt(g)?g.locale:""),format:d(g)?g:nt(g)?g.source:"",message:R};t.meta=a({},e.__meta,Ge()||{}),he(t)}return R},L:at,O:function(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:o,onWarn:c,localeFallbacker:l}=e,{__datetimeFormatters:i}=e,[u,f,_,E]=at(...t);m(_.missingWarn)?_.missingWarn:e.missingWarn;m(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn;const p=!!_.part,N=Se(e,_),L=l(e,o,N);if(!d(u)||""===u)return new Intl.DateTimeFormat(N,E).format(f);let T,I={},k=null;for(let s=0;s<L.length&&(T=L[s],I=n[T]||{},k=I[u],!h(k));s++)Ve(e,u,T,0,"datetime format");if(!h(k)||!d(T))return r?xe:u;let A=`${T}__${u}`;s(E)||(A=`${A}__${JSON.stringify(E)}`);let O=i.get(A);return O||(O=new Intl.DateTimeFormat(T,a({},k,E)),i.set(A,O)),p?O.formatToParts(f):O.format(f)},P:it,Q:function(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:o,onWarn:c,localeFallbacker:l}=e,{__numberFormatters:i}=e,[u,f,_,E]=it(...t);m(_.missingWarn)?_.missingWarn:e.missingWarn;m(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn;const p=!!_.part,N=Se(e,_),L=l(e,o,N);if(!d(u)||""===u)return new Intl.NumberFormat(N,E).format(f);let T,I={},k=null;for(let s=0;s<L.length&&(T=L[s],I=n[T]||{},k=I[u],!h(k));s++)Ve(e,u,T,0,"number format");if(!h(k)||!d(T))return r?xe:u;let A=`${T}__${u}`;s(E)||(A=`${A}__${JSON.stringify(E)}`);let O=i.get(A);return O||(O=new Intl.NumberFormat(T,a({},k,E)),i.set(A,O)),p?O.formatToParts(f):O.format(f)},k:function(e){Xe=e},l:function(e){We=e},n:v,p:function(e,t){if(A(e)||A(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:e,des:t}=n.pop();Object.keys(e).forEach((r=>{A(e[r])||A(t[r])?t[r]=e[r]:n.push({src:e[r],des:t[r]})}))}}
/*!
        * message-compiler v9.14.0
        * (c) 2024 kazuya kawaguchi
        * Released under the MIT License.
        */,q:function(e,t){return f.call(e,t)},r:function(e){Ye=e},s:function(e){Te=e},u:function(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)},w:function(e,t){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&d(e)){!m(t.warnHtmlMessage)||t.warnHtmlMessage;const n=(t.onCacheKey||Qe)(e),r=qe[n];if(r)return r;const{ast:o,detectError:c}=et(e,{...t,location:!1,jit:!0}),s=Be(o);return c?s:qe[n]=s}{const t=e.cacheKey;if(t){const n=qe[t];return n||(qe[t]=Be(e))}return Be(e)}},y:function(e,t){if(!p(e))return null;let n=fe.get(t);if(n||(n=function(e){const t=[];let n,r,o,c,s,a,l,i=-1,u=0,f=0;const _=[];function E(){const t=e[i+1];if(5===u&&"'"===t||6===u&&'"'===t)return i++,o="\\"+t,_[0](),!0}for(_[0]=()=>{void 0===r?r=o:r+=o},_[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},_[2]=()=>{_[0](),f++},_[3]=()=>{if(f>0)f--,u=4,_[0]();else{if(f=0,void 0===r)return!1;if(r=function(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,ie.test(n)?function(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t!==n||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}(r),!1===r)return!1;_[1]()}};null!==u;)if(i++,n=e[i],"\\"!==n||!E()){if(c=ue(n),l=le[u],s=l[c]||l.l||8,8===s)return;if(u=s[0],void 0!==s[1]&&(a=_[s[1]],a&&(o=n,!1===a())))return;if(7===u)return t}}(t),n&&fe.set(t,n)),!n)return null;const r=n.length;let o=e,c=0;for(;c<r;){const e=o[n[c]];if(void 0===e)return null;if(E(o))return null;o=e,c++}return o},z:function(e,t,n){const r=d(n)?n:we,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let c=o.__localeChainCache.get(r);if(!c){c=[];let e=[n];for(;_(e);)e=Ue(c,e,t);const s=_(t)||!h(t)?t:t.default?t.default:null;e=d(s)?[s]:s,_(e)&&Ue(c,e,!1),o.__localeChainCache.set(r,c)}return c}}),e("t","undefined"!=typeof window),e("o",((e,t=!1)=>t?Symbol.for(e):Symbol(e)));
/*!
        * shared v9.14.0
        * (c) 2024 kazuya kawaguchi
        * Released under the MIT License.
        */
const t=(e,t,r)=>n({l:e,k:t,s:r}),n=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),r=e("i",(e=>"number"==typeof e&&isFinite(e))),o=e=>"[object Date]"===T(e),c=e("h",(e=>"[object RegExp]"===T(e))),s=e("e",(e=>h(e)&&0===Object.keys(e).length)),a=e("a",Object.assign);let l;const i=e("m",(()=>l||(l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})));function u(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const f=Object.prototype.hasOwnProperty,_=e("f",Array.isArray),E=e("j",(e=>"function"==typeof e)),d=e("b",(e=>"string"==typeof e)),m=e("d",(e=>"boolean"==typeof e)),p=e("c",(e=>null!==e&&"object"==typeof e)),N=e=>p(e)&&E(e.then)&&E(e.catch),L=Object.prototype.toString,T=e=>L.call(e),h=e("g",(e=>{if(!p(e))return!1;const t=Object.getPrototypeOf(e);return null===t||t.constructor===Object}));function I(e){let t=e;return()=>++t}function k(e,t){"undefined"!=typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const A=e=>!p(e)||_(e);function O(e,t,n){return{start:e,end:t}}const C=/\{([0-9a-zA-Z]+)\}/g;function y(e,...t){return 1===t.length&&b(t[0])&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(C,((e,n)=>t.hasOwnProperty(n)?t[n]:""))}const g=Object.assign,S=e=>"string"==typeof e,b=e=>null!==e&&"object"==typeof e;function P(e,t=""){return e.reduce(((e,n,r)=>0===r?e+n:e+t+n),"")}const D={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},U={[D.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."},R={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},M={[R.EXPECTED_TOKEN]:"Expected token: '{0}'",[R.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[R.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[R.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[R.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[R.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[R.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[R.EMPTY_PLACEHOLDER]:"Empty placeholder",[R.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[R.INVALID_LINKED_FORMAT]:"Invalid linked format",[R.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[R.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[R.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[R.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[R.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[R.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function v(e,t,n={}){const{domain:r,messages:o,args:c}=n,s=y((o||M)[e]||"",...c||[]),a=new SyntaxError(String(s));return a.code=e,t&&(a.location=t),a.domain=r,a}function x(e){throw e}const w=" ",F="\r",Y="\n",X=String.fromCharCode(8232),W=String.fromCharCode(8233);function $(e){const t=e;let n=0,r=1,o=1,c=0;const s=e=>t[e]===F&&t[e+1]===Y,a=e=>t[e]===W,l=e=>t[e]===X,i=e=>s(e)||(e=>t[e]===Y)(e)||a(e)||l(e),u=e=>s(e)||a(e)||l(e)?Y:t[e];function f(){return c=0,i(n)&&(r++,o=0),s(n)&&n++,n++,o++,t[n]}return{index:()=>n,line:()=>r,column:()=>o,peekOffset:()=>c,charAt:u,currentChar:()=>u(n),currentPeek:()=>u(n+c),next:f,peek:function(){return s(n+c)&&c++,c++,t[n+c]},reset:function(){n=0,r=1,o=1,c=0},resetPeek:function(e=0){c=e},skipToPeek:function(){const e=n+c;for(;e!==n;)f();c=0}}}const G=void 0,K="'",H="tokenizer";function V(e,t={}){const n=!1!==t.location,r=$(e),o=()=>r.index(),c=()=>{return e=r.line(),t=r.column(),n=r.index(),{line:e,column:t,offset:n};var e,t,n},s=c(),a=o(),l={currentType:14,offset:a,startLoc:s,endLoc:s,lastType:14,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},i=()=>l,{onError:u}=t;function f(e,t,r,...o){const c=i();if(t.column+=r,t.offset+=r,u){const r=v(e,n?O(c.startLoc,t):null,{domain:H,args:o});u(r)}}function _(e,t,r){e.endLoc=c(),e.currentType=t;const o={type:t};return n&&(o.loc=O(e.startLoc,e.endLoc)),null!=r&&(o.value=r),o}const E=e=>_(e,14);function d(e,t){return e.currentChar()===t?(e.next(),t):(f(R.EXPECTED_TOKEN,c(),0,t),"")}function m(e){let t="";for(;e.currentPeek()===w||e.currentPeek()===Y;)t+=e.currentPeek(),e.peek();return t}function p(e){const t=m(e);return e.skipToPeek(),t}function N(e){if(e===G)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function L(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=function(e){if(e===G)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),r}function T(e){m(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function h(e,t=!0){const n=(t=!1,r="",o=!1)=>{const c=e.currentPeek();return"{"===c?"%"!==r&&t:"@"!==c&&c?"%"===c?(e.peek(),n(t,"%",!0)):"|"===c?!("%"!==r&&!o&&(r===w||r===Y)):c===w?(e.peek(),n(!0,w,o)):c!==Y||(e.peek(),n(!0,Y,o)):"%"===r||t},r=n();return t&&e.resetPeek(),r}function I(e,t){const n=e.currentChar();return n===G?G:t(n)?(e.next(),n):null}function k(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}function A(e){return I(e,k)}function C(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t||45===t}function y(e){return I(e,C)}function g(e){const t=e.charCodeAt(0);return t>=48&&t<=57}function S(e){return I(e,g)}function b(e){const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function P(e){return I(e,b)}function D(e){let t="",n="";for(;t=S(e);)n+=t;return n}function U(e){let t="";for(;;){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!h(e))break;t+=n,e.next()}else if(n===w||n===Y)if(h(e))t+=n,e.next();else{if(T(e))break;t+=n,e.next()}else t+=n,e.next()}return t}function M(e){return e!==K&&e!==Y}function x(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return F(e,t,4);case"U":return F(e,t,6);default:return f(R.UNKNOWN_ESCAPE_SEQUENCE,c(),0,t),""}}function F(e,t,n){d(e,t);let r="";for(let o=0;o<n;o++){const n=P(e);if(!n){f(R.INVALID_UNICODE_ESCAPE_SEQUENCE,c(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function X(e){return"{"!==e&&"}"!==e&&e!==w&&e!==Y}function W(e){p(e);const t=d(e,"|");return p(e),t}function V(e,t){let n=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&f(R.NOT_ALLOW_NEST_PLACEHOLDER,c(),0),e.next(),n=_(t,2,"{"),p(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&f(R.EMPTY_PLACEHOLDER,c(),0),e.next(),n=_(t,3,"}"),t.braceNest--,t.braceNest>0&&p(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&f(R.UNTERMINATED_CLOSING_BRACE,c(),0),n=j(e,t)||E(t),t.braceNest=0,n;default:{let r=!0,o=!0,s=!0;if(T(e))return t.braceNest>0&&f(R.UNTERMINATED_CLOSING_BRACE,c(),0),n=_(t,1,W(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(5===t.currentType||6===t.currentType||7===t.currentType))return f(R.UNTERMINATED_CLOSING_BRACE,c(),0),t.braceNest=0,B(e,t);if(r=function(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=N(e.currentPeek());return e.resetPeek(),r}(e,t))return n=_(t,5,function(e){p(e);let t="",n="";for(;t=y(e);)n+=t;return e.currentChar()===G&&f(R.UNTERMINATED_CLOSING_BRACE,c(),0),n}(e)),p(e),n;if(o=L(e,t))return n=_(t,6,function(e){p(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${D(e)}`):t+=D(e),e.currentChar()===G&&f(R.UNTERMINATED_CLOSING_BRACE,c(),0),t}(e)),p(e),n;if(s=function(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=e.currentPeek()===K;return e.resetPeek(),r}(e,t))return n=_(t,7,function(e){p(e),d(e,"'");let t="",n="";for(;t=I(e,M);)n+="\\"===t?x(e):t;const r=e.currentChar();return r===Y||r===G?(f(R.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,c(),0),r===Y&&(e.next(),d(e,"'")),n):(d(e,"'"),n)}(e)),p(e),n;if(!r&&!o&&!s)return n=_(t,13,function(e){p(e);let t="",n="";for(;t=I(e,X);)n+=t;return n}(e)),f(R.INVALID_TOKEN_IN_PLACEHOLDER,c(),0,n.value),p(e),n;break}}return n}function j(e,t){const{currentType:n}=t;let r=null;const o=e.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||o!==Y&&o!==w||f(R.INVALID_LINKED_FORMAT,c(),0),o){case"@":return e.next(),r=_(t,8,"@"),t.inLinked=!0,r;case".":return p(e),e.next(),_(t,9,".");case":":return p(e),e.next(),_(t,10,":");default:return T(e)?(r=_(t,1,W(e)),t.braceNest=0,t.inLinked=!1,r):function(e,t){const{currentType:n}=t;if(8!==n)return!1;m(e);const r="."===e.currentPeek();return e.resetPeek(),r}(e,t)||function(e,t){const{currentType:n}=t;if(8!==n&&12!==n)return!1;m(e);const r=":"===e.currentPeek();return e.resetPeek(),r}(e,t)?(p(e),j(e,t)):function(e,t){const{currentType:n}=t;if(9!==n)return!1;m(e);const r=N(e.currentPeek());return e.resetPeek(),r}(e,t)?(p(e),_(t,12,function(e){let t="",n="";for(;t=A(e);)n+=t;return n}(e))):function(e,t){const{currentType:n}=t;if(10!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?N(e.peek()):!("@"===t||"%"===t||"|"===t||":"===t||"."===t||t===w||!t)&&(t===Y?(e.peek(),r()):h(e,!1))},o=r();return e.resetPeek(),o}(e,t)?(p(e),"{"===o?V(e,t)||r:_(t,11,function(e){const t=n=>{const r=e.currentChar();return"{"!==r&&"%"!==r&&"@"!==r&&"|"!==r&&"("!==r&&")"!==r&&r?r===w?n:(n+=r,e.next(),t(n)):n};return t("")}(e))):(8===n&&f(R.INVALID_LINKED_FORMAT,c(),0),t.braceNest=0,t.inLinked=!1,B(e,t))}}function B(e,t){let n={type:14};if(t.braceNest>0)return V(e,t)||E(t);if(t.inLinked)return j(e,t)||E(t);switch(e.currentChar()){case"{":return V(e,t)||E(t);case"}":return f(R.UNBALANCED_CLOSING_BRACE,c(),0),e.next(),_(t,3,"}");case"@":return j(e,t)||E(t);default:{if(T(e))return n=_(t,1,W(e)),t.braceNest=0,t.inLinked=!1,n;const{isModulo:r,hasSpace:o}=function(e){const t=m(e),n="%"===e.currentPeek()&&"{"===e.peek();return e.resetPeek(),{isModulo:n,hasSpace:t.length>0}}(e);if(r)return o?_(t,0,U(e)):_(t,4,function(e){p(e);const t=e.currentChar();return"%"!==t&&f(R.EXPECTED_TOKEN,c(),0,t),e.next(),"%"}(e));if(h(e))return _(t,0,U(e));break}}return n}return{nextToken:function(){const{currentType:e,offset:t,startLoc:n,endLoc:s}=l;return l.lastType=e,l.lastOffset=t,l.lastStartLoc=n,l.lastEndLoc=s,l.offset=o(),l.startLoc=c(),r.currentChar()===G?_(l,14):B(r,l)},currentOffset:o,currentPosition:c,context:i}}const j="parser",B=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function z(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function J(e={}){const t=!1!==e.location,{onError:n,onWarn:r}=e;function o(e,r,o,c,...s){const a=e.currentPosition();if(a.offset+=c,a.column+=c,n){const e=v(r,t?O(o,a):null,{domain:j,args:s});n(e)}}function c(e,n,o,c,...s){const a=e.currentPosition();if(a.offset+=c,a.column+=c,r){const e=t?O(o,a):null;r(function(e,t,...n){const r=y(U[e],...n||[]),o={message:String(r),code:e};return t&&(o.location=t),o}(n,e,s))}}function s(e,n,r){const o={type:e};return t&&(o.start=n,o.end=n,o.loc={start:r,end:r}),o}function a(e,n,r,o){t&&(e.end=n,e.loc&&(e.loc.end=r))}function l(e,t){const n=e.context(),r=s(3,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}function i(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,c=s(5,r,o);return c.index=parseInt(t,10),e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function u(e,t,n){const r=e.context(),{lastOffset:o,lastStartLoc:c}=r,l=s(4,o,c);return l.key=t,!0===n&&(l.modulo=!0),e.nextToken(),a(l,e.currentOffset(),e.currentPosition()),l}function f(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,c=s(9,r,o);return c.value=t.replace(B,z),e.nextToken(),a(c,e.currentOffset(),e.currentPosition()),c}function _(e){const t=e.context(),n=s(6,t.offset,t.startLoc);let r=e.nextToken();if(9===r.type){const t=function(e){const t=e.nextToken(),n=e.context(),{lastOffset:r,lastStartLoc:c}=n,l=s(8,r,c);return 12!==t.type?(o(e,R.UNEXPECTED_EMPTY_LINKED_MODIFIER,n.lastStartLoc,0),l.value="",a(l,r,c),{nextConsumeToken:t,node:l}):(null==t.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,n.lastStartLoc,0,Q(t)),l.value=t.value||"",a(l,e.currentOffset(),e.currentPosition()),{node:l})}(e);n.modifier=t.node,r=t.nextConsumeToken||e.nextToken()}switch(10!==r.type&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(r)),r=e.nextToken(),2===r.type&&(r=e.nextToken()),r.type){case 11:null==r.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(r)),n.key=function(e,t){const n=e.context(),r=s(7,n.offset,n.startLoc);return r.value=t,a(r,e.currentOffset(),e.currentPosition()),r}(e,r.value||"");break;case 5:null==r.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(r)),n.key=u(e,r.value||"");break;case 6:null==r.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(r)),n.key=i(e,r.value||"");break;case 7:null==r.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(r)),n.key=f(e,r.value||"");break;default:{o(e,R.UNEXPECTED_EMPTY_LINKED_KEY,t.lastStartLoc,0);const c=e.context(),l=s(7,c.offset,c.startLoc);return l.value="",a(l,c.offset,c.startLoc),n.key=l,a(n,c.offset,c.startLoc),{nextConsumeToken:r,node:n}}}return a(n,e.currentOffset(),e.currentPosition()),{node:n}}function E(e){const t=e.context(),n=s(2,1===t.currentType?e.currentOffset():t.offset,1===t.currentType?t.endLoc:t.startLoc);n.items=[];let r=null,E=null;do{const s=r||e.nextToken();switch(r=null,s.type){case 0:null==s.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(s)),n.items.push(l(e,s.value||""));break;case 6:null==s.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(s)),n.items.push(i(e,s.value||""));break;case 4:E=!0;break;case 5:null==s.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(s)),n.items.push(u(e,s.value||"",!!E)),E&&(c(e,D.USE_MODULO_SYNTAX,t.lastStartLoc,0,Q(s)),E=null);break;case 7:null==s.value&&o(e,R.UNEXPECTED_LEXICAL_ANALYSIS,t.lastStartLoc,0,Q(s)),n.items.push(f(e,s.value||""));break;case 8:{const t=_(e);n.items.push(t.node),r=t.nextConsumeToken||null;break}}}while(14!==t.currentType&&1!==t.currentType);return a(n,1===t.currentType?t.lastOffset:e.currentOffset(),1===t.currentType?t.lastEndLoc:e.currentPosition()),n}function d(e){const t=e.context(),{offset:n,startLoc:r}=t,c=E(e);return 14===t.currentType?c:function(e,t,n,r){const c=e.context();let l=0===r.items.length;const i=s(1,t,n);i.cases=[],i.cases.push(r);do{const t=E(e);l||(l=0===t.items.length),i.cases.push(t)}while(14!==c.currentType);return l&&o(e,R.MUST_HAVE_MESSAGES_IN_PLURAL,n,0),a(i,e.currentOffset(),e.currentPosition()),i}(e,n,r,c)}return{parse:function(n){const r=V(n,g({},e)),c=r.context(),l=s(0,c.offset,c.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=d(r),e.onCacheKey&&(l.cacheKey=e.onCacheKey(n)),14!==c.currentType&&o(r,R.UNEXPECTED_LEXICAL_ANALYSIS,c.lastStartLoc,0,n[c.offset]||""),a(l,r.currentOffset(),r.currentPosition()),l}}}function Q(e){if(14===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function q(e,t){for(let n=0;n<e.length;n++)Z(e[n],t)}function Z(e,t){switch(e.type){case 1:q(e.cases,t),t.helper("plural");break;case 2:q(e.items,t);break;case 6:Z(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named")}}function ee(e,t={}){const n=function(e){const t={ast:e,helpers:new Set};return{context:()=>t,helper:e=>(t.helpers.add(e),e)}}(e);n.helper("normalize"),e.body&&Z(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function te(e){if(1===e.items.length){const t=e.items[0];3!==t.type&&9!==t.type||(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(3!==r.type&&9!==r.type)break;if(null==r.value)break;t.push(r.value)}if(t.length===e.items.length){e.static=P(t);for(let t=0;t<e.items.length;t++){const n=e.items[t];3!==n.type&&9!==n.type||delete n.value}}}}const ne="minifier";function re(e){switch(e.t=e.type,e.type){case 0:{const t=e;re(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let e=0;e<n.length;e++)re(n[e]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let e=0;e<n.length;e++)re(n[e]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;re(t.key),t.k=t.key,delete t.key,t.modifier&&(re(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}default:throw v(R.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:ne,args:[e.type]})}delete e.type}const oe="parser";function ce(e,t){const{helper:n}=e;switch(t.type){case 0:!function(e,t){t.body?ce(e,t.body):e.push("null")}(e,t);break;case 1:!function(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const o=t.cases.length;for(let n=0;n<o&&(ce(e,t.cases[n]),n!==o-1);n++)e.push(", ");e.deindent(r()),e.push("])")}}(e,t);break;case 2:!function(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const o=t.items.length;for(let c=0;c<o&&(ce(e,t.items[c]),c!==o-1);c++)e.push(", ");e.deindent(r()),e.push("])")}(e,t);break;case 6:!function(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),ce(e,t.key),t.modifier?(e.push(", "),ce(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}(e,t);break;case 8:case 7:case 9:case 3:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t);break;default:throw v(R.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:oe,args:[t.type]})}}const se=(e,t={})=>{const n=S(t.mode)?t.mode:"normal",r=S(t.filename)?t.filename:"message.intl",o=!!t.sourceMap,c=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",s=t.needIndent?t.needIndent:"arrow"!==n,a=e.helpers||[],l=function(e,t){const{sourceMap:n,filename:r,breakLineCode:o,needIndent:c}=t,s=!1!==t.location,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:c,indentLevel:0};function l(e,t){a.code+=e}function i(e,t=!0){const n=t?o:"";l(c?n+"  ".repeat(e):n)}return s&&e.loc&&(a.source=e.loc.source),{context:()=>a,push:l,indent:function(e=!0){const t=++a.indentLevel;e&&i(t)},deindent:function(e=!0){const t=--a.indentLevel;e&&i(t)},newline:function(){i(a.indentLevel)},helper:e=>`_${e}`,needIndent:()=>a.needIndent}}(e,{mode:n,filename:r,sourceMap:o,breakLineCode:c,needIndent:s});l.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(s),a.length>0&&(l.push(`const { ${P(a.map((e=>`${e}: _${e}`)),", ")} } = ctx`),l.newline()),l.push("return "),ce(l,e),l.deindent(s),l.push("}"),delete e.helpers;const{code:i,map:u}=l.context();return{ast:e,code:i,map:u?u.toJSON():void 0}};function ae(e,t={}){const n=g({},t),r=!!n.jit,o=!!n.minify,c=null==n.optimize||n.optimize,s=J(n).parse(e);return r?(c&&function(e){const t=e.body;2===t.type?te(t):t.cases.forEach((e=>te(e)))}(s),o&&re(s),{ast:s,code:""}):(ee(s,n),se(s,n))}
/*!
        * core-base v9.14.0
        * (c) 2024 kazuya kawaguchi
        * Released under the MIT License.
        */const le=[];le[0]={w:[0],i:[3,0],"[":[4],o:[7]},le[1]={w:[1],".":[2],"[":[4],o:[7]},le[2]={w:[2],i:[3,0],0:[3,0]},le[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},le[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},le[5]={"'":[4,0],o:8,l:[5,0]},le[6]={'"':[4,0],o:8,l:[6,0]};const ie=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ue(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}const fe=new Map;function _e(e,t){return p(e)?e[t]:null}const Ee=e=>e,de=e=>"",me="text",pe=e=>0===e.length?"":function(e,t=""){return e.reduce(((e,n,r)=>0===r?e+n:e+t+n),"")}(e),Ne=e=>null==e?"":_(e)||h(e)&&e.toString===L?JSON.stringify(e,null,2):String(e);function Le(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}let Te=null;const he=Ie("function:translate");function Ie(e){return t=>Te&&Te.emit(e,t)}const ke=D.__EXTEND_POINT__,Ae=I(ke),Oe=(e("T",{NOT_FOUND_KEY:ke,FALLBACK_TO_TRANSLATE:Ae(),CANNOT_FORMAT_NUMBER:Ae(),FALLBACK_TO_NUMBER_FORMAT:Ae(),CANNOT_FORMAT_DATE:Ae(),FALLBACK_TO_DATE_FORMAT:Ae(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Ae(),__EXTEND_POINT__:Ae()}),R.__EXTEND_POINT__),Ce=I(Oe),ye=e("C",{INVALID_ARGUMENT:Oe,INVALID_DATE_ARGUMENT:Ce(),INVALID_ISO_DATE_ARGUMENT:Ce(),NOT_SUPPORT_NON_STRING_MESSAGE:Ce(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Ce(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Ce(),NOT_SUPPORT_LOCALE_TYPE:Ce(),__EXTEND_POINT__:Ce()});function ge(e){return v(e,null,void 0)}function Se(e,t){return null!=t.locale?Pe(t.locale):Pe(e.locale)}let be;function Pe(e){if(d(e))return e;if(E(e)){if(e.resolvedOnce&&null!=be)return be;if("Function"===e.constructor.name){const t=e();if(N(t))throw ge(ye.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return be=t}throw ge(ye.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}throw ge(ye.NOT_SUPPORT_LOCALE_TYPE)}function De(e,t,n){return[...new Set([n,..._(t)?t:p(t)?Object.keys(t):d(t)?[t]:[n]])]}function Ue(e,t,n){let r=!0;for(let o=0;o<t.length&&m(r);o++){const c=t[o];d(c)&&(r=Re(e,t[o],n))}return r}function Re(e,t,n){let r;const o=t.split("-");do{r=Me(e,o.join("-"),n),o.splice(-1,1)}while(o.length&&!0===r);return r}function Me(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const o=t.replace(/!/g,"");e.push(o),(_(n)||h(n))&&n[o]&&(r=n[o])}return r}const ve="9.14.0",xe=e("I",-1),we=e("D","en-US"),Fe=(e("M",""),e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`);let Ye,Xe,We,$e=null;e("G",(e=>{$e=e}));const Ge=()=>$e;let Ke=null;e("U",(e=>{Ke=e})),e("H",(()=>Ke));let He=0;function Ve(e,t,n,r,o){const{missing:c,onWarn:s}=e;if(null!==c){const r=c(e,n,t,o);return d(r)?r:t}return t}function je(e,t){const n=t.indexOf(e);if(-1===n)return!1;for(let c=n+1;c<t.length;c++)if(r=e,o=t[c],r!==o&&r.split("-")[0]===o.split("-")[0])return!0;var r,o;return!1}function Be(e){return t=>function(e,t){const n=t.b||t.body;if(1===(n.t||n.type)){const t=n,r=t.c||t.cases;return e.plural(r.reduce(((t,n)=>[...t,ze(e,n)]),[]))}return ze(e,n)}(t,e)}function ze(e,t){const n=t.s||t.static;if(n)return"text"===e.type?n:e.normalize([n]);{const n=(t.i||t.items).reduce(((t,n)=>[...t,Je(e,n)]),[]);return e.normalize(n)}}function Je(e,t){const n=t.t||t.type;switch(n){case 3:{const e=t;return e.v||e.value}case 9:{const e=t;return e.v||e.value}case 4:{const n=t;return e.interpolate(e.named(n.k||n.key))}case 5:{const n=t;return e.interpolate(e.list(null!=n.i?n.i:n.index))}case 6:{const n=t,r=n.m||n.modifier;return e.linked(Je(e,n.k||n.key),r?Je(e,r):void 0,e.type)}case 7:{const e=t;return e.v||e.value}case 8:{const e=t;return e.v||e.value}default:throw new Error(`unhandled node type on format message part: ${n}`)}}const Qe=e=>e;let qe=Object.create(null);const Ze=e("R",(e=>p(e)&&(0===e.t||0===e.type)&&("b"in e||"body"in e)));function et(e,t={}){let n=!1;const r=t.onError||x;return t.onError=e=>{n=!0,r(e)},{...ae(e,t),detectError:n}}e("x",((e,t)=>{if(!d(e))throw ge(ye.NOT_SUPPORT_NON_STRING_MESSAGE);{!m(t.warnHtmlMessage)||t.warnHtmlMessage;const n=(t.onCacheKey||Qe)(e),r=qe[n];if(r)return r;const{code:o,detectError:c}=et(e,t),s=new Function(`return ${o}`)();return c?s:qe[n]=s}}));const tt=()=>"",nt=e("S",(e=>E(e)));function rt(e,t,n,r,o,c){const{messages:s,onWarn:a,messageResolver:l,localeFallbacker:i}=e,u=i(e,r,n);let f,_={},E=null;for(let m=0;m<u.length&&(f=u[m],_=s[f]||{},null===(E=l(_,t))&&(E=_[t]),!(d(E)||Ze(E)||nt(E)));m++)if(!je(f,u)){const n=Ve(e,t,f,0,"translate");n!==t&&(E=n)}return[E,f,_]}function ot(e,n,r,o,c,s){const{messageCompiler:a,warnHtmlMessage:l}=e;if(nt(o)){const e=o;return e.locale=e.locale||r,e.key=e.key||n,e}if(null==a){const e=()=>o;return e.locale=r,e.key=n,e}const i=a(o,function(e,n,r,o,c,s){return{locale:n,key:r,warnHtmlMessage:c,onError:e=>{throw s&&s(e),e},onCacheKey:e=>t(n,r,e)}}(0,r,c,0,l,s));return i.locale=r,i.key=n,i.source=o,i}function ct(...e){const[t,n,o]=e,c={};if(!(d(t)||r(t)||nt(t)||Ze(t)))throw ge(ye.INVALID_ARGUMENT);const l=r(t)?String(t):(nt(t),t);return r(n)?c.plural=n:d(n)?c.default=n:h(n)&&!s(n)?c.named=n:_(n)&&(c.list=n),r(o)?c.plural=o:d(o)?c.default=o:h(o)&&a(c,o),[l,c]}const st=e("v",["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"]);function at(...e){const[t,n,c,s]=e,a={};let l,i={};if(d(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw ge(ye.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();l=new Date(n);try{l.toISOString()}catch(u){throw ge(ye.INVALID_ISO_DATE_ARGUMENT)}}else if(o(t)){if(isNaN(t.getTime()))throw ge(ye.INVALID_DATE_ARGUMENT);l=t}else{if(!r(t))throw ge(ye.INVALID_ARGUMENT);l=t}return d(n)?a.key=n:h(n)&&Object.keys(n).forEach((e=>{st.includes(e)?i[e]=n[e]:a[e]=n[e]})),d(c)?a.locale=c:h(c)&&(i=c),h(s)&&(i=s),[a.key||"",l,a,i]}const lt=e("N",["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"]);function it(...e){const[t,n,o,c]=e,s={};let a={};if(!r(t))throw ge(ye.INVALID_ARGUMENT);const l=t;return d(n)?s.key=n:h(n)&&Object.keys(n).forEach((e=>{lt.includes(e)?a[e]=n[e]:s[e]=n[e]})),d(o)?s.locale=o:h(o)&&(a=o),h(c)&&(a=c),[s.key||"",l,s,a]}"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(i().__INTLIFY_PROD_DEVTOOLS__=!1),"boolean"!=typeof __INTLIFY_JIT_COMPILATION__&&(i().__INTLIFY_JIT_COMPILATION__=!1),"boolean"!=typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(i().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}}}));