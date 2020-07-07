(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1796:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(327),l=a(5),c=a(358),o=a(356),s=a.n(o),i=a(28),u=a(321),d=a.n(u),p=a(314),m=a.n(p),f=a(369),h=a.n(f),v=a(359),y=a(342),b=a(865),g=a(578);function E(e){let t=e.project;const a=t.links,r=Object(g.c)(a.map((e,t)=>{const a=e.href,n=e.name,r=e.type;return{id:"link-".concat(t),name:n,type:r,url:a}})),c=t.lastAnalysisDate;return n.createElement("div",{className:"account-project-card clearfix"},n.createElement("aside",{className:"account-project-side"},void 0!==c?n.createElement("div",{className:"account-project-analysis"},n.createElement(v.a,{date:c},e=>n.createElement(m.a,{overlay:n.createElement(y.a,{date:c})},n.createElement("span",null,Object(l.translateWithParameters)("my_account.projects.analyzed_x",e))))):n.createElement("div",{className:"account-project-analysis"},Object(l.translate)("my_account.projects.never_analyzed")),void 0!==t.qualityGate&&n.createElement("div",{className:"account-project-quality-gate"},"WARN"===t.qualityGate&&n.createElement(d.a,{className:"little-spacer-right",overlay:Object(l.translate)("quality_gates.conditions.warning.tooltip")}),n.createElement(h.a,{"aria-label":Object(l.translate)("quality_gates.status"),level:t.qualityGate}))),n.createElement("h3",{className:"account-project-name"},n.createElement(i.Link,{to:{pathname:"/dashboard",query:{id:t.key}}},t.name)),r.length>0&&n.createElement("div",{className:"account-project-links"},n.createElement("ul",{className:"list-inline"},r.map(e=>n.createElement(b.a,{iconOnly:!0,key:e.id,link:e})))),n.createElement("div",{className:"account-project-key"},t.key),!!t.description&&n.createElement("div",{className:"account-project-description"},t.description))}function j(e){const t=e.projects;return n.createElement("div",{id:"account-projects"},0===t.length?n.createElement("div",{className:"js-no-results"},Object(l.translate)("my_account.projects.no_results")):n.createElement("p",null,Object(l.translate)("my_account.projects.description")),t.length>0&&n.createElement("ul",{className:"account-projects-list"},t.map(e=>n.createElement("li",{key:e.key},n.createElement(E,{project:e})))),t.length>0&&n.createElement(s.a,{count:t.length,loadMore:e.loadMore,ready:!e.loading,total:e.total||0}))}a.d(t,"default",function(){return x});class x extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0,page:1},this.loadMore=()=>{this.loadProjects(this.state.page+1)}}componentDidMount(){this.mounted=!0,this.loadProjects()}componentWillUnmount(){this.mounted=!1}loadProjects(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.page;this.setState({loading:!0});const t={p:e,ps:100};return Object(c.s)(t).then(t=>{let a=t.paging,n=t.projects;this.setState(t=>({projects:e>1?[...t.projects||[],...n]:n,loading:!1,page:a.pageIndex,total:a.total}))})}render(){const e=n.createElement(r.a,{title:Object(l.translate)("my_account.projects")});return null==this.state.projects?n.createElement("div",{className:"text-center"},e,n.createElement("i",{className:"spinner spacer"})):n.createElement("div",{className:"account-body account-container"},e,n.createElement(j,{loadMore:this.loadMore,loading:this.state.loading,projects:this.state.projects,total:this.state.total}))}}},321:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(309),r=a(2),l=a(367),c=a(334);a(336);var o=a(314);t.default=function(e){var t=e.tagName,a=void 0===t?"div":t;return r.createElement(a,{className:n("help-tooltip",e.className)},r.createElement(o.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},e.children||r.createElement(c.ThemeConsumer,null,function(e){return r.createElement(l.default,{fill:e.colors.gray71,size:12})}))))}},336:function(e,t,a){var n=a(337);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(312)(n,r);n.locals&&(e.exports=n.locals)},337:function(e,t,a){(e.exports=a(311)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},342:function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return o});var n=a(2),r=a(304),l=a(29);const c={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};function o(e){let t=e.children,a=e.date;return n.createElement(r.FormattedDate,Object.assign({value:Object(l.parseDate)(a)},c),t)}},356:function(e,t,a){"use strict";var n=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var r=a(309),l=a(2),c=a(5),o=a(317),s=a(315);t.default=function(e){var t,a=e.ready,i=void 0===a||a,u=n(e,["ready"]),d=u.total&&u.total>u.count,p=l.createElement("a",{className:"spacer-left","data-test":"show-more",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),u.loadMore&&u.loadMore()}},c.translate("show_more")),m=l.createElement("a",{className:"spacer-left","data-test":"reload",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),u.reload&&u.reload()}},c.translate("reload")),f=r("spacer-top note text-center",{"new-loading":!i},u.className);return u.needReload&&u.reload?t=m:d&&u.loadMore&&(t=p),l.createElement("footer",{className:f},c.translateWithParameters("x_of_y_shown",o.formatMeasure(u.count,"INT",null),o.formatMeasure(u.total,"INT",null)),t,u.loading&&l.createElement(s.default,{className:"text-bottom spacer-left position-absolute"}))}},359:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(2),r=a(304),l=a(29);function c(e){let t=e.children,a=e.date;return n.createElement(r.FormattedRelative,{value:Object(l.parseDate)(a)},t)}},369:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(309),r=a(2),l=a(317);a(393),t.default=function(e){var t=l.formatMeasure(e.level,"LEVEL"),a=n(e.className,"level","level-"+e.level,{"level-small":e.small,"level-muted":e.muted});return r.createElement("span",{"aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"],className:a},t)}},393:function(e,t,a){var n=a(394);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(312)(n,r);n.locals&&(e.exports=n.locals)},394:function(e,t,a){(e.exports=a(311)(!1)).push([e.i,".level{display:inline-block;min-width:80px;height:24px;line-height:24px;border-radius:24px;box-sizing:border-box;color:#fff;letter-spacing:.02em;font-size:13px;font-weight:400;text-align:center;text-shadow:0 0 1px rgba(0,0,0,.35)}.level,.level-small{width:auto;padding-left:9px;padding-right:9px}.level-small{min-width:64px;margin-top:-1px;margin-bottom:-1px;height:20px;line-height:20px;font-size:12px}.level-muted{background-color:#bdbdbd!important}a>.level{margin-bottom:-1px;border-bottom:1px solid;transition:all .2s ease}a>.level:hover{opacity:.8}.level-OK{background-color:#0a0}.level-WARN{background-color:#ed7d20}.level-ERROR{background-color:#d4333f}.level-NONE{background-color:#b4b4b4}",""])},441:function(e,t,a){var n=a(392)(function(e,t,a){e[a?0:1].push(t)},function(){return[[],[]]});e.exports=n},464:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a(313);t.default=function(e){var t=e.className,a=e.fill,l=void 0===a?"currentColor":a,c=e.size;return n.createElement(r.default,{className:t,size:c},n.createElement("path",{d:"M12 9.25v2.5A2.25 2.25 0 0 1 9.75 14h-6.5A2.25 2.25 0 0 1 1 11.75v-6.5A2.25 2.25 0 0 1 3.25 3h5.5c.14 0 .25.11.25.25v.5c0 .14-.11.25-.25.25h-5.5C2.562 4 2 4.563 2 5.25v6.5c0 .688.563 1.25 1.25 1.25h6.5c.688 0 1.25-.563 1.25-1.25v-2.5c0-.14.11-.25.25-.25h.5c.14 0 .25.11.25.25zm3-6.75v4c0 .273-.227.5-.5.5a.497.497 0 0 1-.352-.148l-1.375-1.375L7.68 10.57a.27.27 0 0 1-.18.078.27.27 0 0 1-.18-.078l-.89-.89a.27.27 0 0 1-.078-.18.27.27 0 0 1 .078-.18l5.093-5.093-1.375-1.375A.497.497 0 0 1 10 2.5c0-.273.227-.5.5-.5h4c.273 0 .5.227.5.5z",style:{fill:l}}))}},578:function(e,t,a){"use strict";a.d(t,"b",function(){return u}),a.d(t,"c",function(){return d}),a.d(t,"a",function(){return p});var n=a(324),r=a.n(n),l=a(441),c=a.n(l),o=a(5);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const i=["homepage","ci","issue","scm","scm_dev"];function u(e){return i.includes(e.type)}function d(e){const t=s(c()(e,u),2),a=t[0],n=t[1];return[...r()(a,e=>i.indexOf(e.type)),...r()(n,e=>e.name&&e.name.toLowerCase())]}function p(e){return u(e)?Object(o.translate)("project_links",e.type):e.name}},604:function(e,t,a){(function(e){!function(e){"use strict";e.exports.is_uri=a,e.exports.is_http_uri=n,e.exports.is_https_uri=r,e.exports.is_web_uri=l,e.exports.isUri=a,e.exports.isHttpUri=n,e.exports.isHttpsUri=r,e.exports.isWebUri=l;var t=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function a(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var a,n,r,l,c,o="",s="";if(o=(a=t(e))[1],n=a[2],r=a[3],l=a[4],c=a[5],o&&o.length&&r.length>=0){if(n&&n.length){if(0!==r.length&&!/^\//.test(r))return}else if(/^\/\//.test(r))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(o.toLowerCase()))return s+=o+":",n&&n.length&&(s+="//"+n),s+=r,l&&l.length&&(s+="?"+l),c&&c.length&&(s+="#"+c),s}}}function n(e,n){if(a(e)){var r,l,c,o,s="",i="",u="",d="";if(s=(r=t(e))[1],i=r[2],l=r[3],c=r[4],o=r[5],s){if(n){if("https"!=s.toLowerCase())return}else if("http"!=s.toLowerCase())return;if(i)return/:(\d+)$/.test(i)&&(u=i.match(/:(\d+)$/)[0],i=i.replace(/:\d+$/,"")),d+=s+":",d+="//"+i,u&&(d+=u),d+=l,c&&c.length&&(d+="?"+c),o&&o.length&&(d+="#"+o),d}}}function r(e){return n(e,!0)}function l(e){return n(e)||r(e)}}(e)}).call(this,a(32)(e))},704:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),c=a(705),o=a(706),s=a(464),i=a(707),u=a(708);t.default=function(e){var t=e.type,a=r(e,["type"]);switch(t){case"issue":return l.createElement(c.default,n({},a));case"homepage":return l.createElement(i.default,n({},a));case"ci":return l.createElement(o.default,n({},a));case"scm":return l.createElement(u.default,n({},a));default:return l.createElement(s.default,n({},a))}}},705:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a(313);t.default=function(e){var t=e.className,a=e.fill,l=void 0===a?"currentColor":a,c=e.size;return n.createElement(r.default,{className:t,size:c},n.createElement("path",{d:"M13.5 9.5c1.003.033 1.466 1.952 0 2h-2.618L9.685 9.107 8 14.162 6.096 8.45l-.832 3.05-2.829-.002c-.984-.097-1.369-1.951.065-1.998h1.236l2.168-7.95L8 7.838l1.315-3.945L12.118 9.5H13.5z",style:{fill:l}}))}},706:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a(313);t.default=function(e){var t=e.className,a=e.fill,l=void 0===a?"currentColor":a,c=e.size;return n.createElement(r.default,{className:t,size:c},n.createElement("path",{d:"M13.805 9.25c0 .016 0 .04-.008.055C13.133 12.07 10.852 14 7.969 14c-1.524 0-3-.602-4.11-1.656l-1.007 1.008a.497.497 0 0 1-.352.148.504.504 0 0 1-.5-.5V9.5c0-.273.227-.5.5-.5H6c.273 0 .5.227.5.5a.497.497 0 0 1-.148.352l-1.07 1.07a3.988 3.988 0 0 0 6.125-.828c.187-.305.28-.602.413-.914.04-.11.117-.18.235-.18h1.5c.14 0 .25.117.25.25zM14 3v3.5c0 .273-.227.5-.5.5H10a.504.504 0 0 1-.5-.5c0-.133.055-.258.148-.352l1.079-1.078A4.019 4.019 0 0 0 8 4c-1.39 0-2.68.719-3.406 1.906-.188.305-.282.602-.414.914-.04.11-.117.18-.235.18H2.391a.252.252 0 0 1-.25-.25v-.055C2.812 3.922 5.117 2 8 2c1.531 0 3.023.61 4.133 1.656l1.015-1.008A.497.497 0 0 1 13.5 2.5c.273 0 .5.227.5.5z",style:{fill:l}}))}},707:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a(313);t.default=function(e){var t=e.className,a=e.fill,l=void 0===a?"currentColor":a,c=e.size;return n.createElement(r.default,{className:t,size:c},n.createElement("path",{d:"M13.002 8.848v4.168a.56.56 0 0 1-.556.555H9.11v-3.334H6.89v3.334H3.554a.56.56 0 0 1-.556-.555V8.848c0-.018.01-.035.01-.052L8 4.68l4.993 4.116c.009.017.009.034.009.052zm1.936-.6l-.538.643a.289.289 0 0 1-.183.096h-.026a.273.273 0 0 1-.182-.061L8 3.916l-6.009 5.01a.297.297 0 0 1-.208.06.289.289 0 0 1-.183-.095l-.538-.642a.285.285 0 0 1 .035-.391L7.34 2.656a1.07 1.07 0 0 1 1.32 0l2.119 1.772V2.735c0-.157.121-.278.278-.278h1.667c.156 0 .278.121.278.278v3.542l1.901 1.58c.113.096.13.279.035.392z",style:{fill:l}}))}},708:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),r=a(313);t.default=function(e){var t=e.className,a=e.fill,l=void 0===a?"currentColor":a,c=e.size;return n.createElement(r.default,{className:t,size:c},n.createElement("path",{d:"M12.557 4.545c.241.247.443.743.443 1.098v7.714c0 .355-.28.643-.625.643h-8.75A.634.634 0 0 1 3 13.357V2.643C3 2.288 3.28 2 3.625 2h5.833c.345 0 .827.208 1.068.455l2.031 2.09zM9.667 2.91v2.518h2.448a.86.86 0 0 0-.144-.275L9.934 3.058a.823.823 0 0 0-.267-.147zm2.5 10.232V6.286H9.458a.634.634 0 0 1-.625-.643V2.857h-5v10.286h8.334z",style:{fill:l}}))}},709:function(e,t,a){"use strict";var n=a(604);t.a=function(e){return/^(\/|scm:)/.test(e)||!!Object(n.isWebUri)(e)}},865:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(2),r=a(310),l=a(704),c=a.n(l),o=a(578),s=a(709);class i extends n.PureComponent{constructor(){super(...arguments),this.state={expanded:!1},this.handleClick=e=>{e.preventDefault(),this.setState(e=>{return{expanded:!e.expanded}})},this.handleCollapse=()=>{this.setState({expanded:!1})},this.handleSelect=e=>{e.currentTarget.select()}}render(){const e=this.props,t=e.iconOnly,a=e.link,l=Object(o.a)(a);return n.createElement("li",null,n.createElement("a",{className:"link-with-icon",href:a.url,onClick:Object(s.a)(a.url)?void 0:this.handleClick,rel:"nofollow noreferrer noopener",target:"_blank",title:l},n.createElement(c.a,{className:"little-spacer-right",type:a.type}),!t&&l),this.state.expanded&&n.createElement("div",{className:"little-spacer-top display-flex-center"},n.createElement("input",{className:"overview-key width-80",onClick:this.handleSelect,readOnly:!0,type:"text",value:a.url}),n.createElement(r.ClearButton,{className:"little-spacer-left",onClick:this.handleCollapse})))}}}}]);
//# sourceMappingURL=302.m.68ce8a83.chunk.js.map