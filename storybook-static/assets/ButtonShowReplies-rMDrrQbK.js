import{j as p}from"./jsx-runtime-CexXSJP5.js";import{B as a}from"./Button-D4nxT_g_.js";import{n as u}from"./DiscussionTitle-BShaVqYD.js";const s=e=>{const{isShowReplies:s,replies:i,setIsShowReplies:l}=e,t=u(i),o=s?"chevron-up":"chevron-down",n=t?s?`Hide ${t} ${1===t?"reply":"replies"}`:`Show ${t} ${1===t?"reply":"replies"}`:s?"Hide":"Reply";return p.jsx(a,{type:"button","data-cy":"show-replies","data-testid":"show-replies",icon:o,onClick:l,sx:{alignSelf:"flex-start"},variant:"subtle",small:!0,children:n})};try{s.displayName="ButtonShowReplies",s.__docgenInfo={description:"",displayName:"ButtonShowReplies",props:{isShowReplies:{defaultValue:null,description:"",name:"isShowReplies",required:!0,type:{name:"boolean"}},replies:{defaultValue:null,description:"",name:"replies",required:!0,type:{name:"IComment[]"}},setIsShowReplies:{defaultValue:null,description:"",name:"setIsShowReplies",required:!0,type:{name:"() => void"}}}}}catch{}export{s as B};