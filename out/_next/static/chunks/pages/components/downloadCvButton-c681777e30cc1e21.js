(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{8945:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/downloadCvButton",function(){return n(8528)}])},8528:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),o=n(7294),i=n(5204),l=n(406),s=n(4960),c=n(6014),f=n(8868),u=n(72),a=n(7367),d=n(6917),g=n(6224),h=n(7166),p=n.n(h);function v(){let{scrollYProgress:e}=(0,i.v)();return!function(e,t={}){let{isStatic:n}=(0,o.useContext)(c._),r=(0,o.useRef)(null),i=(0,s.c)((0,l.i)(e)?e.get():e),g=()=>{r.current&&r.current.stop()};(0,o.useInsertionEffect)(()=>i.attach((e,o)=>{if(n)return o(e);if(g(),r.current=(0,u.y)({keyframes:[i.get(),e],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o}),!a.w.isProcessing){let e=performance.now()-a.w.timestamp;e<30&&(r.current.time=(0,d.X)(e))}return i.get()},g),[JSON.stringify(t)]),(0,f.L)(()=>{if((0,l.i)(e))return e.on("change",e=>i.set(parseFloat(e)))},[i])}(e,{stiffness:100,damping:30,restDelta:.001}),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(g.E.a,{className:p().downloadCvButton,href:"/cv/cv_albin_cousson.pdf",download:!0,initial:{opacity:0},animate:{opacity:1},children:[(0,r.jsx)("p",{children:"DL: CV"}),(0,r.jsx)("img",{src:"/images/menuIcons/downloadBlack.png",alt:""})]})})}},7166:function(e){e.exports={downloadCvButton:"downloadCvButton_downloadCvButton__Tl8VN"}},7301:function(e,t,n){"use strict";n.d(t,{I:function(){return o}});var r=n(5487);function o(e,t,n){var o;if("string"==typeof e){let i=document;t&&((0,r.k)(Boolean(t.current),"Scope provided, but no element detected."),i=t.current),n?(null!==(o=n[e])&&void 0!==o||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},4960:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(7294),o=n(3234),i=n(6014),l=n(6681);function s(e){let t=(0,l.h)(()=>(0,o.B)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},5204:function(e,t,n){"use strict";let r,o;n.d(t,{v:function(){return T}});var i=n(3234),l=n(6681),s=n(7294),c=n(5487),f=n(6405),u=n(7367),a=n(7301);let d=new WeakMap;function g({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=d.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function h(e){e.forEach(g)}let p=new Set;var v=n(3967),m=n(3038);let w=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),y=()=>({time:0,x:w(),y:w()}),E={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function x(e,t,n,r){let o=n[t],{length:i,position:l}=E[t],s=o.current,c=n.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,v.Y)(0,o.scrollLength,o.current);let f=r-c;o.velocity=f>50?0:(0,m.R)(o.current-s,f)}let L={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},W={start:0,center:.5,end:1};function B(e,t,n=0){let r=0;if(void 0!==W[e]&&(e=W[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let _=[0,0];var b=n(4606),S=n(533);let O={x:0,y:0},k=new WeakMap,z=new WeakMap,H=new WeakMap,C=e=>e===document.documentElement?window:e;var N=n(8868);function P(e,t){(0,c.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let A=()=>({scrollX:(0,i.B)(0),scrollY:(0,i.B)(0),scrollXProgress:(0,i.B)(0),scrollYProgress:(0,i.B)(0)});function T({container:e,target:t,layoutEffect:n=!0,...i}={}){let c=(0,l.h)(A),g=n?N.L:s.useEffect;return g(()=>(P("target",t),P("container",e),function(e,{container:t=document.documentElement,...n}={}){let i=H.get(t);i||(i=new Set,H.set(t,i));let l=y(),s=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{var o;x(e,"x",o=n,t),x(e,"y",o,t),o.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=L.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):O,c=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},f={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:_,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,W[e]?e:"0"]),B(o[0],n,r)-B(o[1],t)}(r[e],f[l],c[l],s[i]);u||n===t[i].interpolatorOffsets[e]||(u=!0),t[i].offset[e]=n}u&&(t[i].interpolate=(0,b.s)(t[i].offset,(0,S.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,l,n);if(i.add(s),!k.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(u.w.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{f.Wi.read(e,!1,!0),f.Wi.update(n,!1,!0),f.Wi.update(l,!1,!0)};k.set(t,s);let c=C(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&z.set(t,"function"==typeof t?(p.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};p.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{p.delete(t),!p.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(h));let n=(0,a.I)(e);return n.forEach(e=>{let n=d.get(e);n||(n=new Set,d.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=d.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),c.addEventListener("scroll",s,{passive:!0})}let c=k.get(t);return f.Wi.read(c,!1,!0),()=>{var e;(0,f.Pn)(c);let n=H.get(t);if(!n||(n.delete(s),n.size))return;let r=k.get(t);k.delete(t),r&&(C(t).removeEventListener("scroll",r),null===(e=z.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{c.scrollX.set(e.current),c.scrollXProgress.set(e.progress),c.scrollY.set(t.current),c.scrollYProgress.set(t.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),c}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8945)}),_N_E=e.O()}]);