(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{7140:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/footer",function(){return n(2208)}])},2208:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(5893);n(7294);var r=n(2933),c=n.n(r),s=n(6893);function i(e){let{refForNavigate:t}=e,n=(0,s.Y)(t);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:t,className:c().sectionFooterSpacer}),(0,o.jsx)("div",{className:c().footer,style:{zIndex:n?"3":"1"},children:(0,o.jsxs)("div",{className:c().footerContent,children:[(0,o.jsxs)("h2",{className:c().footerHeading,children:["✺ Let’s ",(0,o.jsx)("br",{}),"collaborate"]}),(0,o.jsxs)("div",{className:c().footerContact,children:[(0,o.jsx)("a",{href:"mailto:albincousson@icloud.com",children:"albincousson@icloud.com"}),(0,o.jsx)("p",{children:"06.15.06.98.37"})]})]})})]})}},2933:function(e){e.exports={footer:"footer_footer__CKQ67",footerContent:"footer_footerContent__eTLF0",footerHeading:"footer_footerHeading___vWsw",footerContact:"footer_footerContact__SkVYT"}},7301:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});var o=n(5487);function r(e,t,n){var r;if("string"==typeof e){let c=document;t&&((0,o.k)(Boolean(t.current),"Scope provided, but no element detected."),c=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=c.querySelectorAll(e)),e=n[e]):e=c.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},6893:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var o=n(7294),r=n(7301);let c={any:0,all:1};function s(e,{root:t,margin:n,amount:s,once:i=!1}={}){let[u,a]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(!e.current||i&&u)return;let o=()=>(a(!0),i?void 0:()=>a(!1)),f={root:t&&t.current||void 0,margin:n,amount:"some"===s?"any":s};return function(e,t,{root:n,margin:o,amount:s="any"}={}){let i=(0,r.I)(e),u=new WeakMap,a=e=>{e.forEach(e=>{let n=u.get(e.target);if(e.isIntersecting!==Boolean(n)){if(e.isIntersecting){let n=t(e);"function"==typeof n?u.set(e.target,n):f.unobserve(e.target)}else n&&(n(e),u.delete(e.target))}})},f=new IntersectionObserver(a,{root:n,rootMargin:o,threshold:"number"==typeof s?s:c[s]});return i.forEach(e=>f.observe(e)),()=>f.disconnect()}(e.current,o,f)},[t,e,n,i]),u}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7140)}),_N_E=e.O()}]);