"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[76],{3887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=t(4848),o=t(8453);const s={id:"environmental-impact",title:"Overview"},a="Environmental Impact",r={id:"Environmental Impact/environmental-impact",title:"Overview",description:"Understanding website weight",source:"@site/docs/Environmental Impact/environmental-impact.md",sourceDirName:"Environmental Impact",slug:"/Environmental Impact/environmental-impact",permalink:"/Environmental Impact/environmental-impact",draft:!1,unlisted:!1,editUrl:"https://github.com/ONEARMY/community-platform/edit/master/packages/documentation/docs/Environmental Impact/environmental-impact.md",tags:[],version:"current",frontMatter:{id:"environmental-impact",title:"Overview"},sidebar:"mainSidebar",previous:{title:"Manual Backups",permalink:"/Server Maintenance/manualBackups"},next:{title:"Security",permalink:"/Security"}},l={},c=[{value:"Understanding website weight",id:"understanding-website-weight",level:2},{value:"Monitoring webpage weight",id:"monitoring-webpage-weight",level:3},{value:"Plans to reduce",id:"plans-to-reduce",level:2},{value:"Legacy Docs",id:"legacy-docs",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"environmental-impact",children:"Environmental Impact"})}),"\n",(0,i.jsx)(n.h2,{id:"understanding-website-weight",children:"Understanding website weight"}),"\n",(0,i.jsx)(n.p,{children:"The amount of bandwidth the platform uses depends on 2 main factors:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Have you visited it before?"}),"\n",(0,i.jsx)(n.li,{children:"Have you visited it recently?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The bandwidth transfer consists of"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Core platform"}),"\n",(0,i.jsx)(n.li,{children:"Database sync"}),"\n",(0,i.jsx)(n.li,{children:"Rendered content"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tools in place to reduce bandwidth"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"locally cached database (only syncs with server when new info available)"}),"\n",(0,i.jsx)(n.li,{children:"server-compressed images (resizes all images to have max 1200px width ~ 50kb)"}),"\n",(0,i.jsx)(n.li,{children:"core platform pre-cache via service worker (only downloaded on new release ~ monthly)"}),"\n",(0,i.jsx)(n.li,{children:"on-the-fly image caching via service worker (all images cached locally, purged yearly)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As a worst-case scenario, a new user visiting the site automatically lands on the howto page and downloads:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- Full platform (for all pages) ~ 1MB\n- Full database (for all pages) ~ 1KB\n- Full list of rendered howtos ~ 9MB\n  Total ~ 10MB\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.ibb.co/G3NFsDQ/Picture1.png",alt:"Example first visit page weight"})}),"\n",(0,i.jsx)(n.p,{children:"Whilst browsing the site the user will download the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- Profile content on demand (images cached on the fly)\n- Howto rendered content on first open  (cached on the fly)\n- Map tiles on first open (cached on the fly)\n- Academy pages on every open (not cached, is an iframe)\nTotal ~1MB\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.ibb.co/nb2MVtg/Picture2.png",alt:"Page weight on revisit"})}),"\n",(0,i.jsx)(n.p,{children:"Returning to the site some days/weeks later the user will download:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"- Core platform updates (released monthly, full 1MB again)\n- New howtos\n- New content for pages visited (if not previously visited)\nTotal ~2MB\n"})}),"\n",(0,i.jsx)(n.h3,{id:"monitoring-webpage-weight",children:"Monitoring webpage weight"}),"\n",(0,i.jsxs)(n.p,{children:["The easiest way to do this is open devtools (F12) and swap to the network tab. As you browse you will see the number of MBs ",(0,i.jsx)(n.strong,{children:"transferred"}),". Do not confuse this with the resources size, as that includes cached resources also."]}),"\n",(0,i.jsx)(n.h2,{id:"plans-to-reduce",children:"Plans to reduce"}),"\n",(0,i.jsxs)(n.p,{children:["There are various issues and places this has been discussed, the most up-to-date information can likely be found within issues tagged ",(0,i.jsx)(n.code,{children:"global good"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/ONEARMY/community-platform/labels/Global%20Good%20%F0%9F%8C%8D",children:"https://github.com/ONEARMY/community-platform/labels/Global%20Good%20%F0%9F%8C%8D"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"legacy-docs",children:"Legacy Docs"}),"\n",(0,i.jsx)(n.p,{children:"Most of this is covered in the 'Big Corporations' discussion, however a few points for the site we are building are:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We want to be advanced in terms of lessening the environmental impact of the platform we produce."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Many of the biggest wins don't come from intense optimisation, but limiting replication/duplication and the constant redownload of the same files"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"We have image compression in place for all uploaded images, and a service worker to cache both core platform and content"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["loading the core platform along with docs page, including all current tutorials and cover images has a total of 12.5kb\n",(0,i.jsx)(n.img,{src:"https://i.ibb.co/3BZQ8g1/Picture1.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This discussion took place on slack v4-website-dev on January 17th 2019"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);