import{g as P,r as g}from"./index-BP8_t0zE.js";import{u as b,p as v}from"./VideoPlayer-BC_eojf_.js";function O(e,t){for(var r=0;r<t.length;r++){const o=t[r];if("string"!=typeof o&&!Array.isArray(o))for(const t in o)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(o,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>o[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var S=Object.create,l=Object.defineProperty,w=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,C=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,D=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,L=(e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})},d=(e,t,r,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of j(t))!E.call(e,s)&&s!==r&&l(e,s,{get:()=>t[s],enumerable:!(o=w(t,s))||o.enumerable});return e},M=(e,t,r)=>(r=null!=e?S(C(e)):{},d(e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)),R=e=>d(l({},"__esModule",{value:!0}),e),a=(e,t,r)=>(D(e,"symbol"!=typeof t?t+"":t,r),r),h={};L(h,{default:()=>u});var f=R(h),p=M(g),c=b,T=v;const N="https://w.soundcloud.com/player/api.js",x="SC";class u extends p.Component{constructor(){super(...arguments),a(this,"callPlayer",c.callPlayer),a(this,"duration",null),a(this,"currentTime",null),a(this,"fractionLoaded",null),a(this,"mute",(()=>{this.setVolume(0)})),a(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),a(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){(0,c.getSDK)(N,x).then((r=>{if(!this.iframe)return;const{PLAY:o,PLAY_PROGRESS:s,PAUSE:a,FINISH:i,ERROR:l}=r.Widget.Events;t||(this.player=r.Widget(this.iframe),this.player.bind(o,this.props.onPlay),this.player.bind(a,(()=>{this.duration-this.currentTime<.05||this.props.onPause()})),this.player.bind(s,(e=>{this.currentTime=e.currentPosition/1e3,this.fractionLoaded=e.loadedProgress})),this.player.bind(i,(()=>this.props.onEnded())),this.player.bind(l,(e=>this.props.onError(e)))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration((e=>{this.duration=e/1e3,this.props.onReady()}))}})}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seekTo",1e3*e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return p.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:t,frameBorder:0,allow:"autoplay"})}}a(u,"displayName","SoundCloud"),a(u,"canPlay",T.canPlay.soundcloud),a(u,"loopOnEnded",!0);const A=P(f),I=O({__proto__:null,default:A},[f]);export{I as S};