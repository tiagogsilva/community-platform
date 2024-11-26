import{j as s}from"./jsx-runtime-CexXSJP5.js";import{I as r}from"./ImageGallery-js8fUlIT.js";import"./index-BP8_t0zE.js";import"./iframe-QR2RpBv3.js";import"../sb-preview/runtime.js";import"./emotion-styled.browser.esm-Dz2BNYeh.js";import"./extends-CF3RwP-h.js";import"./parseProps-780b287c.browser.esm-DiCerVr_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-UWD3gXM2.js";import"./Icon-BoVZOGVD.js";import"./supporter-D7hp958O.js";import"./icon-arrow-down-CJeToCJe.js";import"./icon-star-active-ClN6U5FF.js";import"./theme-ui-core-jsx-runtime.browser.esm-CH0qhC10.js";import"./hoist-non-react-statics.cjs-CQI8syxn.js";import"./theme-ui-components.esm-BngKL4Rx.js";const O=[{full:"https://picsum.photos/id/29/1500/1000",thumb:"https://picsum.photos/id/29/150/150"},{full:"https://picsum.photos/id/50/4000/3000",thumb:"https://picsum.photos/id/50/150/150"},{full:"https://picsum.photos/id/110/800/1200",thumb:"https://picsum.photos/id/110/150/150"},{full:"https://picsum.photos/id/2/1500/1500",thumb:"https://picsum.photos/id/2/150/150"}],t=O.map(((e,s)=>({downloadUrl:e.full,contentType:"image/jpeg",fullPath:"cat.jpg",name:"cat"+s,type:"image/jpeg",size:115e3,thumbnailUrl:e.thumb,timeCreated:(new Date).toISOString(),updated:(new Date).toISOString()}))),K={title:"Layout/ImageGallery",component:r},a=e=>s.jsx(r,{images:t,...e}),o=e=>s.jsx(r,{images:t,...e,hideThumbnails:!0}),m=e=>s.jsx(r,{images:[t[0]],...e}),p=e=>s.jsx(r,{images:t,...e,hideThumbnails:!0,showNextPrevButton:!0}),i=e=>s.jsx(r,{images:[t[0]],...e,hideThumbnails:!0,showNextPrevButton:!0});var n,u,l,g,c,h,d,I,S,b,y,x,P,w,f,j,G,N;t.parameters={...t.parameters,docs:{...null==(n=t.parameters)?void 0:n.docs,source:{originalSource:"imageUrls.map((elt, i) => {\n  return {\n    downloadUrl: elt.full,\n    contentType: 'image/jpeg',\n    fullPath: 'cat.jpg',\n    name: 'cat' + i,\n    type: 'image/jpeg',\n    size: 115000,\n    thumbnailUrl: elt.thumb,\n    timeCreated: new Date().toISOString(),\n    updated: new Date().toISOString()\n  };\n})",...null==(l=null==(u=t.parameters)?void 0:u.docs)?void 0:l.source}}},a.parameters={...a.parameters,docs:{...null==(g=a.parameters)?void 0:g.docs,source:{originalSource:"(props: Omit<ImageGalleryProps, 'images'>) => {\n  return <ImageGallery images={testImages} {...props} />;\n}",...null==(h=null==(c=a.parameters)?void 0:c.docs)?void 0:h.source}}},o.parameters={...o.parameters,docs:{...null==(d=o.parameters)?void 0:d.docs,source:{originalSource:"(props: Omit<ImageGalleryProps, 'images'>) => {\n  return <ImageGallery images={testImages} {...props} hideThumbnails />;\n}",...null==(S=null==(I=o.parameters)?void 0:I.docs)?void 0:S.source}}},m.parameters={...m.parameters,docs:{...null==(b=m.parameters)?void 0:b.docs,source:{originalSource:"(props: Omit<ImageGalleryProps, 'images'>) => {\n  return <ImageGallery images={[testImages[0]]} {...props} />;\n}",...null==(x=null==(y=m.parameters)?void 0:y.docs)?void 0:x.source}}},p.parameters={...p.parameters,docs:{...null==(P=p.parameters)?void 0:P.docs,source:{originalSource:"(props: Omit<ImageGalleryProps, 'images'>) => {\n  return <ImageGallery images={testImages} {...props} hideThumbnails showNextPrevButton={true} />;\n}",...null==(f=null==(w=p.parameters)?void 0:w.docs)?void 0:f.source}}},i.parameters={...i.parameters,docs:{...null==(j=i.parameters)?void 0:j.docs,source:{originalSource:"(props: Omit<ImageGalleryProps, 'images'>) => {\n  return <ImageGallery images={[testImages[0]]} {...props} hideThumbnails showNextPrevButton={true} />;\n}",...null==(N=null==(G=i.parameters)?void 0:G.docs)?void 0:N.source}}};const M=["testImages","Default","NoThumbnails","HideThumbnailForSingleImage","ShowNextPrevButtons","DoNotShowNextPrevButtons"];export{a as Default,i as DoNotShowNextPrevButtons,m as HideThumbnailForSingleImage,o as NoThumbnails,p as ShowNextPrevButtons,M as __namedExportsOrder,K as default,t as testImages};