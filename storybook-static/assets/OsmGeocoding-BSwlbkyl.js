import{j as y}from"./jsx-runtime-CexXSJP5.js";import{r as e}from"./index-BP8_t0zE.js";import{S as T}from"./SearchField-D-_Sbl66.js";import{a as j,T as F}from"./theme-ui-components.esm-BngKL4Rx.js";import{j as E}from"./theme-ui-core-jsx-runtime.browser.esm-CH0qhC10.js";function B(n,r,t){var a=this,u=e.useRef(null),i=e.useRef(0),o=e.useRef(null),c=e.useRef([]),l=e.useRef(),s=e.useRef(),d=e.useRef(n),m=e.useRef(!0);e.useEffect((function(){d.current=n}),[n]);var p=!r&&0!==r&&typeof window<"u";if("function"!=typeof n)throw new TypeError("Expected a function");r=+r||0;var f=!!(t=t||{}).leading,g=!("trailing"in t)||!!t.trailing,h="maxWait"in t,y=h?Math.max(+t.maxWait||0,r):null;e.useEffect((function(){return m.current=!0,function(){m.current=!1}}),[]);var b=e.useMemo((function(){var e=function(e){var n=c.current,r=l.current;return c.current=l.current=null,i.current=e,s.current=d.current.apply(r,n)},n=function(e,n){p&&cancelAnimationFrame(o.current),o.current=p?requestAnimationFrame(e):setTimeout(e,n)},t=function(e){if(!m.current)return!1;var n=e-u.current;return!u.current||n>=r||n<0||h&&e-i.current>=y},b=function(n){return o.current=null,g&&c.current?e(n):(c.current=l.current=null,s.current)},x=function e(){var a=Date.now();if(t(a))return b(a);if(m.current){var o=r-(a-u.current),c=h?Math.min(o,y-(a-i.current)):o;n(e,c)}},v=function(){var d=Date.now(),p=t(d);if(c.current=[].slice.call(arguments),l.current=a,u.current=d,p){if(!o.current&&m.current)return i.current=u.current,n(x,r),f?e(u.current):s.current;if(h)return n(x,r),e(u.current)}return o.current||n(x,r),s.current};return v.cancel=function(){o.current&&(p?cancelAnimationFrame(o.current):clearTimeout(o.current)),i.current=0,c.current=u.current=l.current=o.current=null},v.isPending=function(){return!!o.current},v.flush=function(){return o.current?b(Date.now()):s.current},v}),[f,h,r,y,g,p]);return b}const I=()=>y.jsx(y.Fragment,{children:y.jsx(j,{sx:{background:"white",position:"relative",zIndex:1,marginTop:"-2px",paddingX:2,paddingY:1,border:"2px solid",borderColor:"black",borderTopWidth:"1px",lineHeight:1.5,borderBottomLeftRadius:1,borderBottomRightRadius:1},children:y.jsx(F,{sx:{fontSize:1},children:"Fetching results from Open Street Map"})})}),C=e=>{const{results:n,callback:r,setShowResults:t}=e;return E(j,{"data-cy":"osm-geocoding-results",as:"ul",sx:{background:"white",padding:0,position:"relative",zIndex:1,margin:"-2px 0 0",border:"2px solid black",borderTopWidth:"1px",listStyle:"none",borderRadius:0,borderBottomLeftRadius:1,borderBottomRightRadius:1},children:n.map(((e,n)=>E(j,{as:"li",sx:{paddingY:1,paddingX:2,lineHeight:1.5,"&:hover":{background:"softblue",cursor:"pointer"}},onClick:()=>{t(!1),r&&r(e)},children:null==e?void 0:e.display_name},n)))})};try{C.displayName="OsmGeocodingResultsList",C.__docgenInfo={description:"",displayName:"OsmGeocodingResultsList",props:{results:{defaultValue:null,description:"",name:"results",required:!0,type:{name:"Result[]"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"any"}},setShowResults:{defaultValue:null,description:"",name:"setShowResults",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}}}catch{}const O=({placeholder:n="Search for an address",debounceMs:r=800,callback:t,acceptLanguage:a="en",viewbox:u="",loading:i=!1})=>{const[o,c]=e.useState(""),[l,s]=e.useState([]),[d,m]=e.useState(!1),[p,f]=e.useState(i),[g,h]=e.useState(!1),b=e.useRef(null);document.addEventListener("click",(function(e){var n;(null==(n=null==b?void 0:b.current)?void 0:n.contains(e.target))||m(!1)})),document.onkeyup=function(e){"Escape"===e.key&&m(!1)};const x=!!l.length&&d&&!p,v=B((e=>function(e=""){if(0===e.length)return;f(!0);let n=`https://nominatim.openstreetmap.org/search?format=json&q=${e}&accept-language=${a}`;u.length&&(n=`${n}&viewbox=${u}&bounded=1`),fetch(n,{headers:new Headers({"User-Agent":"onearmy.earth Community Platform (https://platform.onearmy.earth)"})}).then((e=>e.json())).then((e=>{s(e),m(!0)})).catch(null).finally((()=>f(!1)))}(e)),r);return e.useEffect((()=>{g&&v(o)}),[o,g,v]),y.jsxs("div",{"data-cy":"osm-geocoding",ref:b,style:{width:"100%"},children:[y.jsx(T,{autoComplete:"off",name:"geocoding",id:"geocoding",dataCy:"osm-geocoding-input",placeHolder:n,value:o,onChange:e=>{h(!0),c(e)},onClickDelete:()=>{c(""),h(!1)},onClickSearch:()=>{h(!0),c(o)},additionalStyle:{background:"white",fontFamily:"Varela Round",fontSize:"14px",border:"2px solid black",height:"44px",display:"flex",borderRadius:x||p?"5px 5px 0 0":"5px",marginBottom:0}}),p&&y.jsx(I,{}),x&&y.jsx(C,{results:l,callback:e=>{e&&(h(!1),c(e.display_name)),t(e)},setShowResults:m})]})};try{O.displayName="OsmGeocoding",O.__docgenInfo={description:"",displayName:"OsmGeocoding",props:{placeholder:{defaultValue:{value:"Search for an address"},description:"",name:"placeholder",required:!1,type:{name:"string"}},debounceMs:{defaultValue:{value:"800"},description:"",name:"debounceMs",required:!1,type:{name:"number"}},iconUrl:{defaultValue:null,description:"",name:"iconUrl",required:!1,type:{name:"string"}},callback:{defaultValue:null,description:"",name:"callback",required:!1,type:{name:"any"}},city:{defaultValue:null,description:"",name:"city",required:!1,type:{name:"string"}},countrycodes:{defaultValue:null,description:"",name:"countrycodes",required:!1,type:{name:"string"}},acceptLanguage:{defaultValue:{value:"en"},description:"",name:"acceptLanguage",required:!1,type:{name:"string"}},viewbox:{defaultValue:{value:""},description:"",name:"viewbox",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}export{O,C as a};