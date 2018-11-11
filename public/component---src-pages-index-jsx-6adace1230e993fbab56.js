(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(e,t,n){"use strict";n.r(t);var i,o,r,a,c=n(7),l=n.n(c),s=n(0),d=n.n(s),u=n(143),p=n.n(u),m=n(136),h=(n(33),n(138)),g=n.n(h),f=n(140),y="borderColor",w="backgroundColor",b="color",x=Object(m.b)(["border:2px solid;"]),v=Object(m.b)(['font-family:"Source Sans Pro",sans-serif;']),M=Object(m.b)(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]),C=function(e){return function(t){return function(n){try{var i=n.theme[e];try{return i[t]}catch(e){console.error("No theme provided for this namespace.")}}catch(e){console.error("No theme provided.")}}}},L=C("button"),j=Object(m.b)(["display:block;"," "," line-height:24px;width:fit-content;max-width:100%;border-color:",";background-color:",";color:",";font-style:none;text-decoration:none;",""],x,(i=14,Object(m.b)(["box-sizing:border-box;border-radius:","px;height:","px;padding:0 ","px;"],i,2*i,i)),L(y),L(w),L(b),M),N=Object(m.c)(f.Link).withConfig({displayName:"Button__StyledInternalLink",componentId:"sc-16jiyye-0"})(["",""],j),I=m.c.a.withConfig({displayName:"Button__StyledLink",componentId:"sc-16jiyye-1"})(["",""],j),E=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.to,i=g()(e,["children","to"]);return/^\/(?!\/)/.test(n)?d.a.createElement(N,Object.assign({to:n},i),t):d.a.createElement(I,Object.assign({href:n},i),t)},t}(s.PureComponent),z=((o={})[y]="#FFFFFF",o[w]="transparent",o[b]="#FFFFFF",o),S="backgroundColor",F="color",k="textAlign",_=C("section"),D=m.c.section.withConfig({displayName:"Section",componentId:"sc-9irabb-0"})(["background-color:","};color:","};text-align:","};"],_(S),_(F),_(k)),O=((r={})[S]="#222222",r[F]="#000000",r[k]="inherit",r),P=((a={}).button=z,a.section=O,a),T=n(142),A=n.n(T),B=m.c.div.withConfig({displayName:"BackgroundVideo__Wrapper",componentId:"eoz5cd-0"})(["position:relative;overflow:hidden;"]),W=m.c.video.attrs({autoPlay:!0,loop:!0}).withConfig({displayName:"BackgroundVideo__Video",componentId:"eoz5cd-1"})(["position:absolute;left:0;top:50%;width:100%;min-height:100%;transform:translateY(-50%);object-fit:cover;"]),G=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.src,n=g()(e,["src"]);return d.a.createElement(B,n,d.a.createElement(W,{src:t}))},t}(s.PureComponent),R=Object(m.d)(["0%{border-radius:40% 60% 60% 40% / 70% 30% 70% 30%;}100%{border-radius:40% 60%;}"]),Z=Object(m.d)(["to{transform:rotate(1turn);}"]),Q=function(e,t,n){return m.c.div.withConfig({displayName:"createShadowComponent",componentId:"sc-1we8q7z-0"})(["position:absolute;width:100%;height:100%;border-radius:50%;animation-name:",",",";animation-delay:","s;animation-duration:","s;animation-timing-function:ease-in-out,linear;animation-direction:alternate;animation-iteration-count:infinite;animation-fill-mode:backwards;background-color:",";mix-blend-mode:multiply;"],Z,R,n,t,e)},Y=n(161),q=n.n(Y),J=m.c.div.withConfig({displayName:"Logo__Wrapper",componentId:"sc-1ti6iyi-0"})(["position:relative;"]),H=Q("#00FFFF",15,-3),V=Q("#FF00FF",12,6),U=Q("#FFFF00",20,-2),X=Q("#000000",12,0),K=m.c.div.withConfig({displayName:"Logo__LogoImage",componentId:"sc-1ti6iyi-1"})(["position:absolute;left:10%;top:10%;height:80%;width:80%;background-image:url(",");"],q.a),$=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props);return d.a.createElement(J,e,d.a.createElement(H,null),d.a.createElement(V,null),d.a.createElement(U,null),d.a.createElement(X,null),d.a.createElement(K,null))},t}(s.PureComponent),ee=Object(m.b)(["padding-left:calc(50vw - 480px);padding-right:calc(50vw - 480px);@media (max-width:1000px){padding-left:20px;padding-right:20px;}@media (max-width:480px){padding-left:10px;padding-right:10px;}"]),te=Object(m.c)(D).withConfig({displayName:"ResumeSection__PositionnedSection",componentId:"sc-1idehxp-0"})([""," padding-top:60px;padding-bottom:60px;"],ee),ne=m.c.div.withConfig({displayName:"ResumeSection__ButtonWrapper",componentId:"sc-1idehxp-1"})(["display:flex;justify-content:center;"]),ie=Object(m.c)(E).withConfig({displayName:"ResumeSection__PositionnedButton",componentId:"sc-1idehxp-2"})(["margin:40px 20px;"]),oe=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=Object.assign({},this.props);return d.a.createElement(m.a,{theme:this.theme},d.a.createElement(te,e,d.a.createElement("h1",null,"Welcome !"),"My name is Adrien Gautier, I am a Web developer living in Bordeaux. Have a look at some of my work on :",d.a.createElement(ne,null,d.a.createElement(ie,{to:"https://github.com/adrgautier"},"Github"),d.a.createElement(ie,{to:"https://codepen.io/adrgautier"},"Codepen"))))},A()(t,[{key:"theme",get:function(){var e,t,n=this.props.theme,i=void 0===n?{}:n,o=((t={}).section=((e={})[S]="#222222",e[F]="#FFFFFF",e[k]="center",e),t);return function(e){return Object.assign(e,o,i)}}}]),t}(s.PureComponent),re=Object(m.c)(D).withConfig({displayName:"WelcomeSection__PositionnedSection",componentId:"x99wt5-0"})(["position:relative;"]),ae=Object(m.c)($).withConfig({displayName:"WelcomeSection__PositionnedLogo",componentId:"x99wt5-1"})(["margin:20vh auto;max-height:256px;max-width:256px;width:80vw;height:80vw;"]),ce=Object(m.c)(G).withConfig({displayName:"WelcomeSection__PositionnedBackgroundVideo",componentId:"x99wt5-2"})(["position:absolute;margin-left:0;margin-top:0;margin-right:0;margin-bottom:0;width:100%;height:100%;"]),le=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.theme,t=g()(this,["theme"]);return d.a.createElement(m.a,{theme:e},d.a.createElement(re,t,d.a.createElement(ce,{src:"https://giant.gfycat.com/FarawayEvilGermanwirehairedpointer.mp4"}),d.a.createElement(ae,null)))},A()(t,[{key:"theme",get:function(){var e=this.props.theme,t=S;return function(n){var i,o;return Object.assign(((o={}).section=((i={})[t]="#222222",i),o),e)}}}]),t}(s.PureComponent),se=m.c.footer.withConfig({displayName:"Footer__Wrapper",componentId:"vdmq1q-0"})([""," background-color:",";color:",";text-align:center;padding-top:12px;padding-bottom:12px;"],ee,"#222222","#808080"),de=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return d.a.createElement(se,null,"©2018")},t}(s.PureComponent);n.d(t,"default",function(){return he});var ue=m.c.div.withConfig({displayName:"pages__Body",componentId:"zpoadl-0"})(["display:flex;flex-direction:column;height:100vh;",""],v),pe=m.c.main.withConfig({displayName:"pages__Wrapper",componentId:"zpoadl-1"})(["display:flex;flex-grow:1;flex-shrink:0;flex-direction:column;"]),me=Object(m.c)(oe).withConfig({displayName:"pages__PositionnedResumeSection",componentId:"zpoadl-2"})(["flex-grow:1;flex-shrink:0;"]),he=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,null,d.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.css"}),d.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"}),d.a.createElement("style",{type:"text/css"},"")),d.a.createElement(m.a,{theme:P},d.a.createElement(ue,null,d.a.createElement(pe,null,d.a.createElement(le,null),d.a.createElement(me,null)),d.a.createElement(de,null))))},t}(s.PureComponent)},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(137),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(141),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(46);n.d(t,"parsePath",function(){return u.a});var p=o.a.createContext({}),m=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},141:function(e,t,n){var i;e.exports=(i=n(153))&&i.default||i},153:function(e,t,n){"use strict";n.r(t);n(33);var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(70),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},161:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDQwIDQ0MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQwIDQ0MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTIzNC45LDczYy0wLjgtNi45LTcuNy0xMy0xNC45LTEzYy03LjgsMC0xMy43LDUuOS0xNC45LDEzLjRjLTExLjUsNzAuMi00NC44LDE1NS0xMDUuMSwyMjcuMg0KCWMtMi4xLDIuNS0zLjIsNS44LTMuMiw5LjNjMCw4LjMsNi43LDE1LDE1LDE1YzMsMCw1LjctMSw4LjEtMi40YzY1LjYtMzguOCwxMzkuNC00MS41LDE5NC0zMS4yYzAuNywwLjEsMS41LDAuMiwyLjMsMC4yDQoJYzguMywwLDE1LTYuNywxNS0xNWMwLTQuMS0xLjctNy44LTQuMy0xMC41QzI3OS4xLDIxNS44LDI0NC44LDE1NiwyMzQuOSw3M3ogTTIyMCwyNTBjLTE2LjYsMC0zMC0xMy40LTMwLTMwczEzLjQtMzAsMzAtMzANCglzMzAsMTMuNCwzMCwzMFMyMzYuNiwyNTAsMjIwLDI1MHoiLz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-6adace1230e993fbab56.js.map