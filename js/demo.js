(self.webpackChunksite=self.webpackChunksite||[]).push([[9577],{33306:function(e,t,n){"use strict";var r=n(34699),a=n(2784),o=n(72779),c=n.n(o),l=n(66835),i=n(30857),u=n(58454),s=n(24347),f=n(34610),m=n(72972),p=n(53152),d=n(37432),g=l.Z.createFromIconfont("//at.alicdn.com/t/font_1340918_uwg522sx17.js");t.Z=function(e){var t=(0,a.useState)(window.localStorage.locale||"zhCN"),n=(0,r.Z)(t,2),o=n[0],l=n[1],h=(0,a.useState)(window.localStorage.primaryColor||"#00bc70"),v=(0,r.Z)(h,2),y=v[0],E=v[1],b=(0,a.useState)(window.localStorage.theme||"light"),P=(0,r.Z)(b,2),Z=P[0],w=P[1],C=e.className,S=e.children,k=c()("app-container",C),O="enUS"===o?p.Z:d.Z;return(0,a.useEffect)((function(){window.scrollTo(0,0),m.Z.on(window,"message",(function(e){var t=e.data;t.locale&&l(t.locale)}))}),[y,Z]),a.createElement(i.Z,{theme:Z,primaryColor:y,locale:O},a.createElement("div",{className:k},a.createElement("nav",null,a.createElement(u.Z,{trigger:"click",content:a.createElement("div",{className:"setting-container"},a.createElement("ul",{className:"colors"},["#00bc70","#1890ff","#f5222d","#fa541b","#13c2c2","#2f54ec","#712fd1"].map((function(e,t){return a.createElement("li",{key:+t,style:{backgroundColor:e},onClick:function(){E(e),window.localStorage.primaryColor=e}})}))),a.createElement("div",{className:"themes"},a.createElement(s.Z.Group,{compact:!0,type:"button",value:Z,onChange:function(e){w(e),window.localStorage.theme=e}},a.createElement(s.Z,{value:"light"},"默认主题"),a.createElement(s.Z,{value:"dark"},"暗黑主题"))))},a.createElement("span",{className:"setting"})),window.frames.length===window.parent.frames.length&&a.createElement(a.Fragment,null,a.createElement("div",{className:"lang"},a.createElement(s.Z.Group,{compact:!0,type:"button",value:o,onChange:function(e){l(e),window.localStorage.locale=e}},a.createElement(s.Z,{value:"zhCN"},"中文"),a.createElement(s.Z,{value:"enUS"},"EN"))),a.createElement("a",{className:"github",href:"https://github.com/ZhongAnTech/zarm"},a.createElement(g,{type:"github",size:"lg"})))),a.createElement(f.Z.Provider,{value:{locale:o,primaryColor:y,theme:Z}},S)))}},90582:function(e,t,n){"use strict";var r=n(2784),a=n(37940),o=n(95740),c=n(34610),l=n(834);t.Z=function(){var e=(0,r.useContext)(c.Z).locale;return r.createElement(a.Z,{locale:"zh-CN",messages:l.Z[e]},r.createElement("footer",null,r.createElement("div",{className:"copyright"},r.createElement(o.Z,{id:"app.demo.footer.copyright"}))))}},62733:function(e,t,n){"use strict";n(21926);var r=n(2784),a=n(89760),o=n(95074),c=n(87329),l=n(22122),i=n(14170),u=n(89028),s=n.n(u),f=n(44597),m=n(29220),p=n(29282),d=n(33306),g=n(90582),h=n(6610),v=n(5991),y=n(10379),E=n(53724),b=n(77608),P=n(71150),Z=n(83497);P.S1({dsn:"https://94149d955af0480aaef1edd42fa6c17e@ets.zhongan.io/8",release:"0.0.3",environment:"prd"});var w=function(e){(0,y.Z)(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,b.Z)(t);if(n){var a=(0,b.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,E.Z)(this,e)});function o(e){var t;return(0,h.Z)(this,o),(t=a.call(this,e)).state={error:null,eventId:null},t}return(0,v.Z)(o,[{key:"componentDidCatch",value:function(e,t){var n=this;this.setState({error:e}),Z.$e((function(r){r.setExtras(t);var a=Z.Tb(e);n.setState({eventId:a})}))}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=t.error,a=t.eventId;return n?r.createElement("button",{onClick:function(){return P.jp({eventId:a})}},"Report feedback"):e}}]),o}(r.Component),C=n(96156),S=n(34699),k=n(13917),O=n.n(k),x=n(34610),T=n(13894),N=n(51220),I=n(95149),A=n(21141),D=n(53152),M=n(37432),j=(n(4164),function(e){var t=e.location,o=e.globalContext,l=e.children,i="".concat(parseInt(1e9*Math.random(),10).toString(36)),u=l.match(/([^]*)\n?(```[^]+```)/),s=String(u[1]),f=(0,r.useRef)(),m=(0,r.useCallback)((function(){var e=u[2].match(/```(.*)\n?([^]+)```/);Promise.all([n.e(422),n.e(9398)]).then(n.bind(n,79398)).then((function(e){var t={en_US:D.Z,zh_CN:M.Z};return{args:["context","React","ReactDOM","Zarm","GlobalContext","Locale","ZarmDesignIcons"],argv:[void 0,r,a,e,o,t,A]}})).then((function(t){var n=t.args,r=t.argv,a=e[2].replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'react';/,"const { $1 } = React;").replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'zarm';/,"const { $1 } = Zarm;").replace(/import\s+\{\s+(.*)\s+\}\s+from\s+'@zarm-design\/icons';/,"const { $1 } = ZarmDesignIcons;").replace(/import\s+(.*)\s+from\s+'zarm\/lib\/config-provider\/locale\/(.*)';/g,"const $1 = Locale['$2'];").replace(/ReactDOM.render\(\s?([^]+?)(,\s?mountNode\s?\))/g,"ReactDOM.render($1, document.getElementById('".concat(i,"'))")).replace(/ReactDOM.render\(\s?([^]+?)(,([\r\n])(\s)*mountNode,(\s)*\))/g,"ReactDOM.render($1, document.getElementById('".concat(i,"'))")),o=(0,N.transform)(a,{presets:["es2015","react"],plugins:["proposal-class-properties"]}).code;n.push(o),(0,T.Z)(Function,(0,c.Z)(n)).apply(void 0,(0,c.Z)(r))})).catch((function(e){}))}),[i,u,o]);return(0,r.useEffect)((function(){var e=f.current;return m(),function(){e&&a.unmountComponentAtNode(e)}}),[m]),"/panel"===t.pathname?r.createElement("div",{id:i,ref:f}):r.createElement(I.Z,{title:s},r.createElement("div",{id:i,ref:f}))});function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,C.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $=function(e){var t=(0,r.useContext)(x.Z),n=e.content,o=new Map,c=[];if("string"!=typeof n)return null;(0,r.useEffect)((function(){return function(){var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}(o);try{for(t.s();!(e=t.n()).done;){var n=(0,S.Z)(e.value,2),r=n[0],l=n[1],i=document.getElementById(r);c.push(i),i instanceof HTMLElement&&a.render(l,i)}}catch(e){t.e(e)}finally{t.f()}}(),function(){c.forEach((function(e){a.unmountComponentAtNode(e)}))}}));var l=O()(n.replace(/## 自定义 Iconfont 图标\s?([^]+)/g,"").replace(/## API\s?([^]+)/g,"").replace(/##\s?([^]+?)((?=##)|$)/g,(function(n,a){var c=parseInt(1e9*Math.random(),10).toString(36);return o.set(c,r.createElement(j,z(z({},e),{},{globalContext:t,location:(0,i.TH)()}),a)),"<div id=".concat(c,"></div>")})),{renderer:new(O().Renderer)});return r.createElement("main",{dangerouslySetInnerHTML:{__html:l}})},U=function(e){var t={page:e.module},a=(0,m.Ho)(e.key);return e.style&&(t.style=function(){return n(75343)("./"+a+"Page")}),s().Map({loader:t,render:function(t,n){return r.createElement(d.Z,{className:"".concat(e.key,"-page")},r.createElement($,(0,l.Z)({content:t.page.default,component:e},n)),r.createElement(g.Z,null))},loading:function(){return r.createElement(f.Z,{visible:!0})}})},_=function(){var e=p.components.general,t=p.components.form,a=p.components.feedback,o=p.components.view,l=p.components.navigation,u=p.components.other;return r.createElement(w,null,r.createElement(r.Suspense,{fallback:r.createElement(f.Z,{visible:!0})},r.createElement(i.rs,null,r.createElement(i.AW,{exact:!0,path:"/",component:(0,r.lazy)((function(){return n.e(830).then(n.bind(n,20830))}))}),[].concat((0,c.Z)(e),(0,c.Z)(t),(0,c.Z)(a),(0,c.Z)(o),(0,c.Z)(l),(0,c.Z)(u)).map((function(e,t){return r.createElement(i.AW,{key:+t,path:"/".concat(e.key),component:U(e)})})),r.createElement(i.AW,{component:(0,r.lazy)((function(){return n.e(4828).then(n.bind(n,24828))}))}))))};a.render(r.createElement(o.UT,null,r.createElement(_,null)),document.getElementById("app"))},53152:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r={locale:"en-US",ActionSheet:{cancelText:"Cancel"},Alert:{cancelText:"Close"},Calendar:{weeks:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],yearText:""},Confirm:{cancelText:"Cancel",okText:"OK"},DatePicker:{cancelText:"Cancel",okText:"OK",title:"please select"},DatePickerView:{year:"",month:"",day:"",hour:"",minute:""},DateSelect:{placeholder:"please select"},Picker:{cancelText:"Cancel",okText:"OK",title:"please select"},StackPicker:{cancelText:"Cancel",okText:"OK"},Pull:{pullText:"pull down to refresh",dropText:"release to refresh",loadingText:"loading",successText:"loaded successfully",failureText:"failed to load",completeText:"loading completed"},SearchBar:{placeholder:"Search",cancelText:"Cancel"},Select:{placeholder:"please select"},Keyboard:{okText:"OK"},ImagePreview:{loadBefore:"load origin",loadStart:"loading",loadEnd:"loading completed"}}},75343:function(e,t,n){var r={"./AffixPage":[81683,1683],"./BadgePage":[91943,1943],"./ButtonPage":[97454,2389],"./CalendarPage":[59251,9251],"./CarouselPage":[81404,1404],"./CellPage":[16530,6530],"./CheckboxPage":[93518,3518],"./ConfigProviderPage":[52669,2669],"./FilePickerPage":[53511,3511],"./IconPage":[96661,6661],"./ImagePreviewPage":[19167,9167],"./MessagePage":[29163,9163],"./ModalPage":[61614,1614],"./NoticeBarPage":[31914,1914],"./PanelPage":[25277,5277],"./PickerPage":[11413,1413],"./PopperPage":[51531,1531],"./PopupPage":[51574,1574],"./ProgressPage":[82103,2103],"./PullPage":[95928,5928],"./RadioPage":[73952,3952],"./SearchBarPage":[67174,7174],"./TabsPage":[92194,2194],"./ToastPage":[85767,5767],"./TooltipPage":[89130,9130]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=75343,e.exports=a}},function(e){"use strict";var t=function(t){return e(e.s=t)};e.O(0,[1487,8002,4940],(function(){return t(54961),t(62733)})),e.O()}]);