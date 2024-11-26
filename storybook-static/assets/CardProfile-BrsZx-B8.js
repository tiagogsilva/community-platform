import{j as e}from"./jsx-runtime-CexXSJP5.js";import{C as g}from"./Category-CVnjFQdi.js";import{M as c}from"./MemberBadge-DLRkb6w9.js";import{U as f}from"./Username-CNsNRGy2.js";import{F as i,a as _,g as C,I as b,T as I}from"./theme-ui-components.esm-BngKL4Rx.js";import{P as j}from"./ProfileTagsList-CnWLcFtJ.js";const p=({item:r,isLink:s})=>{const{_id:t,subType:a,type:n}=r;return e.jsxs(i,{sx:{padding:2,gap:2},children:[e.jsx(c,{profileType:n,size:50}),e.jsxs(i,{sx:{flexDirection:"column",gap:2},children:[e.jsx(f,{user:{userName:t},sx:{alignSelf:"flex-start"},isLink:s,target:"_blank"}),a&&e.jsx(g,{category:{label:a},sx:{border:"1px solid #0087B6",backgroundColor:"#ECFAFF",color:"#0087B6"}}),"member"===n&&e.jsx(g,{category:{label:"Wants to get started"},sx:{border:"1px solid #A72E5A",backgroundColor:"#F7C7D9",color:"#A72E5A"}})]})]})};try{p.displayName="CardDetailsFallback",p.__docgenInfo={description:"",displayName:"CardDetailsFallback",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"IMapPin"}},isLink:{defaultValue:null,description:"",name:"isLink",required:!0,type:{name:"boolean"}}}}}catch{}const x=({creator:r,isLink:s})=>{const{_id:t,badges:a,countryCode:n,profileType:o,tags:l,userImage:d}=r;return e.jsxs(i,{sx:{gap:2,justifyContent:"center",alignItems:"center",padding:2,alignContent:"stretch"},children:[d&&e.jsx(_,{sx:{aspectRatio:1,width:"60px",height:"60px"},children:e.jsxs(i,{sx:{alignContent:"flex-start",justifyContent:"flex-end",flexWrap:"wrap"},children:[e.jsx(C,{src:d,sx:{width:"60px",height:"60px",objectFit:"cover"},loading:"lazy"}),e.jsx(c,{profileType:o,size:22,sx:{transform:"translateY(-22px)"}})]})}),!d&&e.jsx(c,{profileType:o,size:50}),e.jsxs(i,{sx:{flexDirection:"column",gap:1,flex:1},children:[e.jsx(f,{user:{userName:t,countryCode:n,isSupporter:(null==a?void 0:a.supporter)||!1,isVerified:(null==a?void 0:a.verified)||!1},sx:{alignSelf:"flex-start"},isLink:s,target:"_blank"}),l&&e.jsx(j,{tags:l})]})]})};try{x.displayName="CardDetailsMemberProfile",x.__docgenInfo={description:"",displayName:"CardDetailsMemberProfile",props:{creator:{defaultValue:null,description:"",name:"creator",required:!0,type:{name:"IProfileCreator"}},isLink:{defaultValue:null,description:"",name:"isLink",required:!0,type:{name:"boolean"}}}}}catch{}const u=({creator:r,isLink:s})=>{const{_id:t,about:a,badges:n,countryCode:o,coverImage:l,profileType:d,tags:p}=r,x=!!(a&&a.length>80)&&a.slice(0,78)+"...";return e.jsxs(i,{sx:{flexDirection:"column",width:"100%"},children:[l&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sx:{aspectRatio:16/6,overflow:"hidden"},children:e.jsx(b,{src:l,sx:{aspectRatio:16/6,alignSelf:"stretch",objectFit:"cover"},loading:"lazy"})}),e.jsx(_,{sx:{position:"relative",height:0,top:"-20px",width:"100%"},children:e.jsx(c,{profileType:d,size:40,sx:{float:"right",marginX:2}})})]}),e.jsxs(i,{sx:{alignItems:"flex-start",flexDirection:"column",gap:1,padding:2},children:[e.jsxs(i,{sx:{gap:2},children:[!l&&e.jsx(c,{profileType:d,size:30}),e.jsx(f,{user:{userName:t,countryCode:o,isVerified:(null==n?void 0:n.verified)||!1,isSupporter:(null==n?void 0:n.supporter)||!1},sx:{alignSelf:"flex-start"},isLink:s,target:"_blank"})]}),p&&e.jsx(j,{tags:p}),a&&e.jsx(I,{variant:"quiet",sx:{fontSize:2},children:x||a})]})]})};try{u.displayName="CardDetailsSpaceProfile",u.__docgenInfo={description:"",displayName:"CardDetailsSpaceProfile",props:{creator:{defaultValue:null,description:"",name:"creator",required:!0,type:{name:"IProfileCreator"}},isLink:{defaultValue:null,description:"",name:"isLink",required:!0,type:{name:"boolean"}}}}}catch{}const y=({item:r,isLink:s=!1})=>{const{creator:t}=r,a="member"===(null==t?void 0:t.profileType);return e.jsxs(i,{sx:{alignItems:"stretch",alignContent:"stretch"},children:[a&&e.jsx(x,{creator:t,isLink:s}),!a&&t&&e.jsx(u,{creator:t,isLink:s}),!t&&e.jsx(p,{item:r,isLink:s})]})};try{y.displayName="CardProfile",y.__docgenInfo={description:"",displayName:"CardProfile",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"IMapPin"}},isLink:{defaultValue:{value:"false"},description:"",name:"isLink",required:!1,type:{name:"boolean"}}}}}catch{}export{y as C};