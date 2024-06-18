(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[76933],{29656:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>l.z,ErrorBoundaryError:()=>A.aG,ErrorBoundaryTryAgainButton:()=>A.Cw,ErrorCauseBoundary:()=>A.QW,HtmlClassNameProvider:()=>p.FG,NavbarSecondaryMenuFiller:()=>m.Zo,PageMetadata:()=>p.d,ReactContextError:()=>d.i6,SkipToContentFallbackId:()=>M.u,SkipToContentLink:()=>M.l,ThemeClassNames:()=>u.k,composeProviders:()=>d.Qc,createStorageSlot:()=>n.WA,duplicates:()=>k.l,filterDocCardListItems:()=>s.MN,isMultiColumnFooterLinks:()=>y.a,isRegexpStringMatch:()=>_.F,listStorageKeys:()=>n._f,listTagsByLetters:()=>b,prefersReducedMotion:()=>c.n,processAdmonitionProps:()=>x,translateTagsPageTitle:()=>g,uniq:()=>k.j,useCollapsible:()=>l.u,useColorMode:()=>f.I,useContextualSearchFilters:()=>a._q,useCurrentSidebarCategory:()=>s.jA,useDocsPreferredVersion:()=>C.J,useEvent:()=>d.zX,useIsomorphicLayoutEffect:()=>d.LI,usePluralForm:()=>i.c,usePrevious:()=>d.D9,usePrismTheme:()=>E.p,useSearchLinkCreator:()=>w.M,useSearchQueryString:()=>w.K,useStorageSlot:()=>n.Nk,useThemeConfig:()=>r.L,useWindowSize:()=>v.i});var r=o(86668),n=o(50012),a=o(43320),s=o(53438),i=o(88824),l=o(86043),u=o(35281),c=o(91442),d=o(902),p=o(10833),f=o(92949),m=o(13102),v=o(87524),h=o(95999);const g=()=>(0,h.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function b(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[r]=t;return o.localeCompare(r)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}var w=o(66177),y=o(42489),_=o(98022),k=o(67392),E=o(66412),C=o(60373),T=o(67294);function x(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=T.Children.toArray(e),o=t.find((e=>T.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=T.createElement(T.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:r}}(e.children),r=e.title??t;return{...e,...r&&{title:r},children:o}}var M=o(55225),A=o(69690)},88824:(e,t,o)=>{"use strict";o.d(t,{c:()=>c});var r=o(67294),n=o(52263),a=o(25108);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.default)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const r=e.split("|");if(1===r.length)return r[0];r.length>o.pluralForms.length&&a.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=o.select(t),s=o.pluralForms.indexOf(n);return r[Math.min(s,r.length-1)]}(o,t,e)}}},3158:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(o(67294)),a=r(o(93162));t.default=function(e){let{url:t,proxy:o}=e;return n.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},n.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),n.default.createElement("ul",{className:"export-dropdown dropdown__menu"},n.default.createElement("li",null,n.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},39620:function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(o(67294)),a=o(29656),s=r(o(44996)),i=r(o(50941));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:r}=e,l=()=>"dark"===t?r?.altText??o?.altText:o?.altText,u=(0,s.default)(o?.url),c=(0,s.default)(r?.url);return o&&r?n.default.createElement(i.default,{alt:l(),sources:{light:u,dark:c},className:"openapi__logo"}):o||r?n.default.createElement(i.default,{alt:l(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},71705:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));o(39620),o(9472),o(85162),o(3158);const a={id:"harvester-apis",title:"Harvester APIs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},s=void 0,i={unversionedId:"api/harvester-apis",id:"version-v1.2/api/harvester-apis",title:"Harvester APIs",description:"",source:"@site/versioned_docs/version-v1.2/api/harvester-apis.info.mdx",sourceDirName:"api",slug:"/api/harvester-apis",permalink:"/v1.2/api/harvester-apis",draft:!1,editUrl:null,tags:[],version:"v1.2",sidebarPosition:0,frontMatter:{id:"harvester-apis",title:"Harvester APIs",description:"",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"api",previous:{title:"FAQ",permalink:"/v1.2/faq"},next:{title:"Create a Cluster Network",permalink:"/v1.2/api/create-namespaced-cluster-network"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: v1beta1"),(0,n.kt)("h1",{className:"openapi__heading"},"Harvester APIs"))}p.isMDXComponent=!0},93162:function(e,t,o){var r,n,a,s=o(25108);n=[],void 0===(a="function"==typeof(r=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function r(e,t,o){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){u(r.response,t,o)},r.onerror=function(){s.error("could not download file")},r.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(r){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,o){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):n(l.href)?r(e,t,o):a(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,s){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),o);else if(n(e))r(e,o,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,o,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof e)return r(e,t,o);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=e:location=e,n=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=u.saveAs=u,e.exports=u})?r.apply(t,n):r)||(e.exports=a)}}]);