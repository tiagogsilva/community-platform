import{j as t}from"./jsx-runtime-CexXSJP5.js";import{C as p}from"./CardButton-Nj67FTo7.js";import{C as c}from"./CardProfile-BrsZx-B8.js";import{I as m}from"./InternalLink-BRM7MvOa.js";import{a as u}from"./theme-ui-components.esm-BngKL4Rx.js";const d=e=>{const{item:i,onPinClick:a,isSelectedPin:n,viewport:r}=e,d="CardListItem"+(n?"-selected":""),s=t.jsx(p,{isSelected:n,children:t.jsx(c,{item:i})}),o={"data-cy":d,"data-testid":d,sx:{borderRadius:2,padding:2}};return"mobile"===r?t.jsx(m,{target:"_blank",to:`/u/${i._id}`,...o,children:s}):t.jsx(u,{"data-cy":d,"data-testid":d,onClick:()=>a(i),sx:{borderRadius:2,padding:2},children:s})};try{d.displayName="CardListItem",d.__docgenInfo={description:"",displayName:"CardListItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"IMapPin"}},isSelectedPin:{defaultValue:null,description:"",name:"isSelectedPin",required:!0,type:{name:"boolean"}},onPinClick:{defaultValue:null,description:"",name:"onPinClick",required:!0,type:{name:"(arg: IMapPin) => void"}},viewport:{defaultValue:null,description:"",name:"viewport",required:!0,type:{name:"string"}}}}}catch{}export{d as C};