import{g as b,r as _}from"./index-BP8_t0zE.js";import{u as O,p as A}from"./VideoPlayer-BC_eojf_.js";function R(e,t){for(var s=0;s<t.length;s++){const r=t[s];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const s=Object.getOwnPropertyDescriptor(r,t);s&&Object.defineProperty(e,t,s.get?s:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var I=Object.create,u=Object.defineProperty,D=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,M=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,U=(e,t,s)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,N=(e,t)=>{for(var s in t)u(e,s,{get:t[s],enumerable:!0})},E=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of w(t))!k.call(e,i)&&i!==s&&u(e,i,{get:()=>t[i],enumerable:!(r=D(t,i))||r.enumerable});return e},j=(e,t,s)=>(s=null!=e?I(M(e)):{},E(e&&e.__esModule?s:u(s,"default",{value:e,enumerable:!0}),e)),H=e=>E(u({},"__esModule",{value:!0}),e),r=(e,t,s)=>(U(e,"symbol"!=typeof t?t+"":t,s),s),m={};N(m,{default:()=>P});var g=H(m),d=j(_),a=O,c=A;const y=typeof navigator<"u",F=y&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,v=y&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||F)&&!window.MSStream,V=y&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,T="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",C="Hls",B="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",x="dashjs",K="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",G="flvjs",X=/www\.dropbox\.com\/.+/,f=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,W="https://videodelivery.net/{id}/manifest/video.m3u8";class P extends d.Component{constructor(){super(...arguments),r(this,"onReady",((...e)=>this.props.onReady(...e))),r(this,"onPlay",((...e)=>this.props.onPlay(...e))),r(this,"onBuffer",((...e)=>this.props.onBuffer(...e))),r(this,"onBufferEnd",((...e)=>this.props.onBufferEnd(...e))),r(this,"onPause",((...e)=>this.props.onPause(...e))),r(this,"onEnded",((...e)=>this.props.onEnded(...e))),r(this,"onError",((...e)=>this.props.onError(...e))),r(this,"onPlayBackRateChange",(e=>this.props.onPlaybackRateChange(e.target.playbackRate))),r(this,"onEnablePIP",((...e)=>this.props.onEnablePIP(...e))),r(this,"onDisablePIP",(e=>{const{onDisablePIP:t,playing:s}=this.props;t(e),s&&this.play()})),r(this,"onPresentationModeChange",(e=>{if(this.player&&(0,a.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}})),r(this,"onSeek",(e=>{this.props.onSeek(e.target.currentTime)})),r(this,"mute",(()=>{this.player.muted=!0})),r(this,"unmute",(()=>{this.player.muted=!1})),r(this,"renderSourceElement",((e,t)=>"string"==typeof e?d.default.createElement("source",{key:t,src:e}):d.default.createElement("source",{key:t,...e}))),r(this,"renderTrack",((e,t)=>d.default.createElement("track",{key:t,...e}))),r(this,"ref",(e=>{this.player&&(this.prevPlayer=this.player),this.player=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(v||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url!==e.url&&!(0,a.isMediaStream)(this.props.url)&&!(this.props.url instanceof Array)&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:s}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),s&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&!e.config.attributes.poster&&(c.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio)}shouldUseHLS(e){return!!(V&&this.props.config.forceSafariHLS||this.props.config.forceHLS)||!v&&!this.props.config.forceDisableHls&&(c.HLS_EXTENSIONS.test(e)||f.test(e))}shouldUseDASH(e){return c.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return c.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:s,dashVersion:r,flvVersion:i}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,a.getSDK)(T.replace("VERSION",t),C).then((t=>{if(this.hls=new t(s),this.hls.on(t.Events.MANIFEST_PARSED,(()=>{this.props.onReady()})),this.hls.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.hls,t)})),f.test(e)){const t=e.match(f)[1];this.hls.loadSource(W.replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()})),this.shouldUseDASH(e)&&(0,a.getSDK)(B.replace("VERSION",r),x).then((t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(r)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()})),this.shouldUseFLV(e)&&(0,a.getSDK)(K.replace("VERSION",i),G).then((t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,((e,s)=>{this.props.onError(e,s,this.flv,t)})),this.flv.load(),this.props.onLoaded()})),e instanceof Array)this.player.load();else if((0,a.isMediaStream)(e))try{this.player.srcObject=e}catch{this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,a.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,a.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(0===e.length)return 0;const t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getSource(e){const t=this.shouldUseHLS(e),s=this.shouldUseDASH(e),r=this.shouldUseFLV(e);if(!(e instanceof Array||(0,a.isMediaStream)(e)||t||s||r))return X.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:s,controls:r,muted:i,config:n,width:o,height:a}=this.props,h=this.shouldUseAudio(this.props)?"audio":"video",l={width:"auto"===o?o:"100%",height:"auto"===a?a:"100%"};return d.default.createElement(h,{ref:this.ref,src:this.getSource(e),style:l,preload:"auto",autoPlay:t||void 0,controls:r,muted:i,loop:s,...n.attributes},e instanceof Array&&e.map(this.renderSourceElement),n.tracks.map(this.renderTrack))}}r(P,"displayName","FilePlayer"),r(P,"canPlay",c.canPlay.file);const z=b(g),Q=R({__proto__:null,default:z},[g]);export{Q as F};