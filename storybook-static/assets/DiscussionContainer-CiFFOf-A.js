import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as u}from"./index-BP8_t0zE.js";import{C as I}from"./CommentList-iT7z3myc.js";import{C as _}from"./CreateComment-CZspd8Fu.js";import{D}from"./DiscussionTitle-BShaVqYD.js";import{F as d}from"./theme-ui-components.esm-BngKL4Rx.js";const S=e=>{const n=[],t={};for(const i of e)if(t[i._id]=i,i.parentCommentId){const e=t[i.parentCommentId];if(!e)continue;e.replies||(e.replies=[]),e.replies.push(i)}for(const i of e)i.parentCommentId||n.push(i);return n},p=e=>{const{comment:n,comments:t,handleDelete:i,handleEdit:m,handleEditRequest:s,onSubmitReply:l,highlightedCommentId:r,maxLength:a,onChange:p,onMoreComments:c,onSubmit:g,isLoggedIn:h,isSubmitting:f,supportReplies:C=!1}=e,[y,q]=u.useState(null),x=u.useMemo((()=>S(t)),[t]);return o.jsxs(d,{sx:{flexDirection:"column",gap:2},children:[o.jsx(D,{comments:t}),o.jsx(I,{supportReplies:C,comments:x,handleDelete:i,handleEdit:m,handleEditRequest:s,highlightedCommentId:r,isLoggedIn:h,isReplies:!1,maxLength:a,onMoreComments:c,onSubmitReply:l,setCommentBeingRepliedTo:e=>{q(e!==y?e:null)}}),o.jsx(d,{sx:{alignItems:"stretch",background:"softblue",borderRadius:2,flexDirection:"column",padding:3},children:o.jsx(_,{isLoading:f,maxLength:a,comment:n,onChange:p,onSubmit:g,isLoggedIn:h})})]})};try{p.displayName="DiscussionContainer",p.__docgenInfo={description:"",displayName:"DiscussionContainer",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"string"}},comments:{defaultValue:null,description:"",name:"comments",required:!0,type:{name:"IComment[]"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!0,type:{name:"(_id: string) => Promise<void>"}},handleEdit:{defaultValue:null,description:"",name:"handleEdit",required:!0,type:{name:"(_id: string, comment: string) => Promise<void>"}},handleEditRequest:{defaultValue:null,description:"",name:"handleEditRequest",required:!0,type:{name:"() => Promise<void>"}},highlightedCommentId:{defaultValue:null,description:"",name:"highlightedCommentId",required:!1,type:{name:"string"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(comment: string) => void"}},onMoreComments:{defaultValue:null,description:"",name:"onMoreComments",required:!0,type:{name:"() => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(comment: string) => void"}},onSubmitReply:{defaultValue:null,description:"",name:"onSubmitReply",required:!0,type:{name:"(_id: string, reply: string) => Promise<void>"}},isSubmitting:{defaultValue:null,description:"",name:"isSubmitting",required:!0,type:{name:"boolean"}},supportReplies:{defaultValue:null,description:"",name:"supportReplies",required:!1,type:{name:"boolean"}}}}}catch{}export{p as D};