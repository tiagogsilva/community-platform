import{g as _,r as g}from"./index-BP8_t0zE.js";import{u as P,p as m}from"./VideoPlayer-BC_eojf_.js";function v(e,t){for(var r=0;r<t.length;r++){const s=t[r];if("string"!=typeof s&&!Array.isArray(s))for(const t in s)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(s,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>s[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var O=Object.create,i=Object.defineProperty,D=Object.getOwnPropertyDescriptor,E=Object.getOwnPropertyNames,S=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,I=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})},h=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of E(t))!j.call(e,o)&&o!==r&&i(e,o,{get:()=>t[o],enumerable:!(s=D(t,o))||s.enumerable});return e},w=(e,t,r)=>(r=null!=e?O(S(e)):{},h(e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)),F=e=>h(i({},"__esModule",{value:!0}),e),o=(e,t,r)=>(I(e,"symbol"!=typeof t?t+"":t,r),r),b={};k(b,{default:()=>l});var d=F(b),u=w(g),n=P,x=m;const c="https://connect.facebook.net/en_US/sdk.js",f="FB",y="fbAsyncInit",L="facebook-player-";class l extends u.Component{constructor(){super(...arguments),o(this,"callPlayer",n.callPlayer),o(this,"playerID",this.props.config.playerId||`${L}${(0,n.randomString)()}`),o(this,"mute",(()=>{this.callPlayer("mute")})),o(this,"unmute",(()=>{this.callPlayer("unmute")}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){t?(0,n.getSDK)(c,f,y).then((e=>e.XFBML.parse())):(0,n.getSDK)(c,f,y).then((e=>{e.init({appId:this.props.config.appId,xfbml:!0,version:this.props.config.version}),e.Event.subscribe("xfbml.render",(e=>{this.props.onLoaded()})),e.Event.subscribe("xfbml.ready",(e=>{"video"===e.type&&e.id===this.playerID&&(this.player=e.instance,this.player.subscribe("startedPlaying",this.props.onPlay),this.player.subscribe("paused",this.props.onPause),this.player.subscribe("finishedPlaying",this.props.onEnded),this.player.subscribe("startedBuffering",this.props.onBuffer),this.player.subscribe("finishedBuffering",this.props.onBufferEnd),this.player.subscribe("error",this.props.onError),this.props.muted?this.callPlayer("mute"):this.callPlayer("unmute"),this.props.onReady(),document.getElementById(this.playerID).querySelector("iframe").style.visibility="visible")}))}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentPosition")}getSecondsLoaded(){return null}render(){const{attributes:e}=this.props.config;return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID,className:"fb-video","data-href":this.props.url,"data-autoplay":this.props.playing?"true":"false","data-allowfullscreen":"true","data-controls":this.props.controls?"true":"false",...e})}}o(l,"displayName","Facebook"),o(l,"canPlay",x.canPlay.facebook),o(l,"loopOnEnded",!0);const M=_(d),N=v({__proto__:null,default:M},[d]);export{N as F};