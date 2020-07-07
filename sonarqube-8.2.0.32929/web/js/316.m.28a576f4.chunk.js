(window.webpackJsonp=window.webpackJsonp||[]).push([[316,23,362],{1635:function(e,t,n){"use strict";n.r(t),t.default="This organization is subscribed to a paid plan, allowing private projects. Its private projects, members, Quality Profiles and Quality Gates are visible to members only.\n\n---\n\nSee also: [Organization Visibility](/organizations/organization-visibility/)\n"},1785:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(327),i=n(316),o=n(330),s=n(418),c=n(423),l=n(318),m=n(791),u=n.n(m),g=n(331),p=n(324),d=n.n(p),h=n(28),f=n(322),b=n.n(f),v=n(314),E=n.n(v),y=n(329),O=n.n(y),z=n(5),k=n(335),j=n(659),N=n(860),x=n(416);function C(e){let t=e.currentUser,n=e.organization;const r=e.organizations.filter(e=>e.key!==n.key),i=n.actions&&n.actions.admin;let o,s,c;return n.alm?(o=Object(x.g)(n.alm.key),s=a.createElement(a.Fragment,null,a.createElement("p",null,Object(z.translateWithParameters)("organization.bound_to_x",Object(z.translate)(o))),a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement("a",{href:n.alm.url,rel:"noopener noreferrer",target:"_blank"},Object(z.translateWithParameters)("organization.see_on_x",Object(z.translate)(o)))),c="".concat(Object(k.getBaseUrl)(),"/images/sonarcloud/").concat(o,".svg")):Object(x.c)(t)&&(o=Object(x.b)(t)||"",s=a.createElement(a.Fragment,null,a.createElement("p",null,Object(z.translateWithParameters)("organization.not_bound_to_x",Object(z.translate)(o))),i&&a.createElement(a.Fragment,null,a.createElement("hr",{className:"spacer-top spacer-bottom"}),a.createElement(h.Link,{to:"/organizations/".concat(n.key,"/edit")},Object(z.translate)("organization.go_to_settings_to_bind")))),c="".concat(Object(k.getBaseUrl)(),"/images/sonarcloud/").concat(o,"-unbound.svg")),a.createElement("header",{className:"navbar-context-header"},a.createElement(j.a,{organization:n}),r.length?a.createElement(b.a,{className:"display-inline-block",overlay:a.createElement("ul",{className:"menu"},d()(r,e=>e.name.toLowerCase()).map(e=>a.createElement(N.a,{key:e.key,organization:e})))},a.createElement("a",{className:"display-inline-flex-center spacer-left link-base-color link-no-underline",href:"#"},n.name,a.createElement(O.a,{className:"little-spacer-left"}))):a.createElement("span",{className:"spacer-left"},n.name),o&&a.createElement(E.a,{mouseLeaveDelay:.25,overlay:s},a.createElement("img",{alt:Object(z.translate)(o),className:"text-middle spacer-left",height:16,src:c,width:16})),null!=n.description&&a.createElement("div",{className:"navbar-context-description"},a.createElement("p",{className:"text-limited text-top",title:n.description},n.description)))}var L=n(687),_=n.n(L),w=n(502),P=n(319),U=n(309);const S=["edit","groups","permissions","permission_templates","projects_management","webhooks"];function M(e){let t=e.location,n=e.organization;const r=n.adminPages,i=void 0===r?[]:r,o=i.map(e=>"extension/".concat(e.key)).concat(S).some(e=>t.pathname.endsWith("organizations/".concat(n.key,"/").concat(e)));return a.createElement(b.a,{overlay:a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/edit")},Object(z.translate)("organization.settings"))),i.map(e=>a.createElement("li",{key:e.key},a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/extension/").concat(e.key)},e.name))),a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/groups")},Object(z.translate)("user_groups.page"))),a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/permissions")},Object(z.translate)("permissions.page"))),a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/permission_templates")},Object(z.translate)("permission_templates"))),a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/projects_management")},Object(z.translate)("projects_management"))),a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/webhooks")},Object(z.translate)("webhooks.page")))),tagName:"li"},a.createElement("a",{className:U("dropdown-toggle",{active:o}),href:"#",id:"organization-navigation-admin"},Object(z.translate)("layout.settings"),a.createElement(O.a,{className:"little-spacer-left"})))}function W(e){let t=e.location,n=e.organization;const r=n.pages||[];if(0===r.length)return null;const i=r.some(e=>t.pathname==="/organizations/".concat(n.key,"/extension/").concat(e.key));return a.createElement(b.a,{overlay:a.createElement("ul",{className:"menu"},r.map(e=>a.createElement("li",{key:e.key},a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(n.key,"/extension/").concat(e.key)},e.name)))),tagName:"li"},a.createElement("a",{className:U("dropdown-toggle",{active:i}),href:"#",id:"organization-navigation-more"},Object(z.translate)("more"),a.createElement(O.a,{className:"little-spacer-left"})))}var D=Object(i.connect)(e=>({currentUser:Object(l.getCurrentUser)(e),userOrganizations:Object(l.getMyOrganizations)(e)}))(function(e){let t=e.currentUser,n=e.location,r=e.organization,i=e.userOrganizations;const o=Object(w.a)(t,r,i),s=r.actions,c=void 0===s?{}:s;return a.createElement(_.a,{className:"navbar-context-tabs"},a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(r.key,"/projects")},Object(z.translate)("projects.page"))),a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:{pathname:"/organizations/".concat(r.key,"/issues"),query:{resolved:"false"}}},Object(z.translate)("issues.page"))),o&&a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(r.key,"/quality_profiles")},Object(z.translate)("quality_profiles.page"))),a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(r.key,"/rules")},Object(z.translate)("coding_rules.page"))),o&&a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:Object(P.w)(r.key)},Object(z.translate)("quality_gates.page"))),Object(w.b)(t,r,i)&&a.createElement("li",null,a.createElement(h.Link,{activeClassName:"active",to:"/organizations/".concat(r.key,"/members")},Object(z.translate)("organization.members.page"))),a.createElement(W,{location:n,organization:r}),c.admin&&a.createElement(M,{location:n,organization:r}))}),T=n(550),q=n(346),B=n(22);function F(e){let t=e.currentUser,r=e.organization,i=e.userOrganizations;const o=Object(B.isSonarCloud)();return a.createElement("div",{className:"navbar-context-meta"},null!=r.url&&a.createElement("a",{className:"spacer-right text-limited",href:r.url,rel:"nofollow",title:r.url},r.url),o&&Object(w.c)(r)&&Object(w.a)(t,r,i)&&a.createElement(q.a,{className:"spacer-right",doc:Promise.resolve().then(n.bind(null,1635))},a.createElement("div",{className:"badge"},Object(z.translate)("organization.paid_plan.badge"))),a.createElement("div",{className:"text-muted"},a.createElement("strong",null,Object(z.translate)("organization.key"),":")," ",r.key),o&&a.createElement("div",{className:"navbar-context-meta-secondary"},a.createElement(T.a,{currentPage:{type:"ORGANIZATION",organization:r.key}})))}function I(e){let t=e.currentUser,n=e.location,r=e.organization,i=e.userOrganizations;return a.createElement(u.a,{height:g.rawSizes.contextNavHeightRaw,id:"context-navigation"},a.createElement("div",{className:"navbar-context-justified"},a.createElement(C,{currentUser:t,organization:r,organizations:i}),a.createElement(F,{currentUser:t,organization:r,userOrganizations:i})),a.createElement(D,{location:n,organization:r}))}n.d(t,"OrganizationPage",function(){return K});class K extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.updateOrganization=e=>{this.setState({loading:!0}),this.props.fetchOrganization(e).then(this.stopLoading,this.stopLoading)}}componentDidMount(){this.mounted=!0,this.updateOrganization(this.props.params.organizationKey)}componentWillReceiveProps(e){e.params.organizationKey!==this.props.params.organizationKey&&this.updateOrganization(e.params.organizationKey)}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.organization;return e&&e.actions&&null!=e.actions.admin?a.createElement("div",null,a.createElement(r.a,{defaultTitle:e.name,defer:!1,titleTemplate:"%s - ".concat(e.name)}),a.createElement(o.a,{suggestions:"organization_space"}),a.createElement(I,{currentUser:this.props.currentUser,location:this.props.location,organization:e,userOrganizations:this.props.userOrganizations}),this.props.children):this.state.loading?null:a.createElement(s.default,{withContainer:!1})}}const R={fetchOrganization:c.f};t.default=Object(i.connect)((e,t)=>({currentUser:Object(l.getCurrentUser)(e),organization:Object(l.getOrganizationByKey)(e,t.params.organizationKey),userOrganizations:Object(l.getMyOrganizations)(e)}),R)(K)},321:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(309),r=n(2),i=n(367),o=n(334);n(336);var s=n(314);t.default=function(e){var t=e.tagName,n=void 0===t?"div":t;return r.createElement(n,{className:a("help-tooltip",e.className)},r.createElement(s.default,{mouseLeaveDelay:.25,onShow:e.onShow,overlay:e.overlay,placement:e.placement},r.createElement("span",{className:"display-inline-flex-center"},e.children||r.createElement(o.ThemeConsumer,null,function(e){return r.createElement(i.default,{fill:e.colors.gray71,size:12})}))))}},330:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(2),r=n(355);function i(e){let t=e.suggestions;return a.createElement(r.a.Consumer,null,e=>{let n=e.addSuggestions,r=e.removeSuggestions;return a.createElement(o,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}class o extends a.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},336:function(e,t,n){var a=n(337);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(312)(a,r);a.locals&&(e.exports=a.locals)},337:function(e,t,n){(e.exports=n(311)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""])},346:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(2),r=n(321),i=n.n(r),o=n(325),s=n(368);const c=Object(o.lazyLoad)(()=>Promise.all([n.e(5),n.e(20)]).then(n.bind(null,458)));class l extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={open:!1},this.close=()=>{this.mounted&&this.setState({open:!1})}}componentDidMount(){this.mounted=!0,this.props.doc.then(e=>{let t=e.default;this.mounted&&this.setState({content:t})},()=>{}),document.addEventListener("scroll",this.close,!0)}componentWillUnmount(){this.mounted=!1,document.removeEventListener("scroll",this.close,!0)}render(){return this.state.content?a.createElement(i.a,{className:this.props.className,overlay:a.createElement("div",{className:"abs-width-300"},a.createElement(c,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(s.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null}}},368:function(e,t,n){"use strict";function a(e){let t,n;for(let a=0;a<e.length;a++){if("---"===e[a].trim()){if(void 0!==t){n=a;break}t=a}}return void 0!==n?{firstLine:t,lastLine:n}:void 0}function r(e){const t={};for(let n=0;n<e.length;n++){const a=e[n].split(":").map(e=>e.trim());2===a.length&&(t[a[0]]=a[1])}return t}function i(e,t){const n="\x3c!-- ".concat(t," --\x3e"),a="\x3c!-- /".concat(t," --\x3e");let r=e,i=r.indexOf(n),o=r.indexOf(a);for(;-1!==i&&-1!==o;)i<o?r=r.substring(0,i)+r.substring(o+a.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'.concat(r.substring(o,i+n.length),'"'))),r=r.substring(0,o)+r.substring(o+a.length,i)+r.substring(i+n.length)),i=r.indexOf(n),o=r.indexOf(a);return r}e.exports={getFrontMatter:function(e){const t=e.split("\n"),n=a(t);return n?r(t.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(e){const t=e.split("\n"),n=a(t);if(n){const e=r(t.slice(n.firstLine+1,n.lastLine)),a=t.slice(n.lastLine+1).join("\n");return{frontmatter:e,content:a}}return{frontmatter:{},content:e}},filterContent:function(e){const t="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",a=n(22),r=a.isSonarCloud,o=a.getInstance,s=i(e.replace(/{instance}/gi,o()),"static");return(r()?i(s,"sonarqube"):i(s,"sonarcloud")).replace(new RegExp("^".concat(t,"(\n|\r|\r\n|$)"),"gm"),"").replace(new RegExp("".concat(t),"g"),"")}}},401:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(2),r=n(476),i=n.n(r),o=n(331),s=n(496);function c(e){let t=e.children;return a.createElement("div",{className:"global-container"},a.createElement("div",{className:"page-wrapper",id:"container"},a.createElement(i.a,{className:"navbar-global",height:o.rawSizes.globalNavHeightRaw}),t),a.createElement(s.a,null))}},416:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return m});var a=n(332);function r(e,t){return t.endsWith("/")||(t+="/"),c(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function i(e){return Object(a.b)(e)&&e.externalProvider?m(e.externalProvider):void 0}function o(e){return Object(a.b)(e)&&(s(e.externalProvider)||c(e.externalProvider))}function s(e){return!!e&&e.startsWith("bitbucket")}function c(e){return"github"===e}function l(e){return"microsoft"===e}function m(e){return s(e)?"bitbucket":e}},418:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var a=n(2),r=n(327),i=n(28),o=n(5),s=n(401);function c(e){let t=e.withContainer;const n=void 0===t||t?s.default:a.Fragment;return a.createElement(n,null,a.createElement(r.a,{defaultTitle:Object(o.translate)("404_not_found"),defer:!1}),a.createElement("div",{className:"page-wrapper-simple",id:"bd"},a.createElement("div",{className:"page-simple",id:"nonav"},a.createElement("h2",{className:"big-spacer-bottom"},Object(o.translate)("page_not_found")),a.createElement("p",{className:"spacer-bottom"},Object(o.translate)("address_mistyped_or_page_moved")),a.createElement("p",null,a.createElement(i.Link,{to:"/"},Object(o.translate)("go_back_to_homepage"))))))}},502:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n(332);function r(e){return Boolean(e&&"PAID"===e.subscription)}function i(e,t,n){return!r(t)||o(e,t,n)}function o(e,t,n){return Boolean(t&&Object(a.b)(e)&&(t.actions&&t.actions.admin||n.some(e=>e.key===t.key)))}},550:function(e,t,n){"use strict";var a=n(309),r=n(2),i=n(316),o=n(310),s=n(314),c=n.n(s),l=n(551),m=n.n(l),u=n(5),g=n(332),p=n(318);const d={setHomePage:n(500).f};t.a=Object(i.connect)(e=>({currentUser:Object(p.getCurrentUser)(e)}),d)(class extends r.PureComponent{constructor(){super(...arguments),this.handleClick=()=>{this.props.setHomePage(this.props.currentPage)}}render(){const e=this.props,t=e.currentPage,n=e.currentUser;if(!Object(g.b)(n))return null;const i=n.homepage,s=void 0!==i&&(p=t,(l=i).type===p.type&&l.branch===p.branch&&l.component===p.component&&l.organization===p.organization);var l,p;const d=s?Object(u.translate)("homepage.current"):Object(u.translate)("homepage.check");return r.createElement(c.a,{overlay:d},s?r.createElement("span",{"aria-label":d,className:a("display-inline-block",this.props.className)},r.createElement(m.a,{filled:s})):r.createElement(o.ButtonLink,{"aria-label":d,className:a("link-no-underline","set-homepage-link",this.props.className),onClick:this.handleClick},r.createElement(m.a,{filled:s})))}})},551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(309),r=n(2),i=n(334),o=n(313);t.default=function(e){var t=e.className,n=e.fill,s=e.filled,c=void 0!==s&&s,l=e.size;return r.createElement(i.ThemeConsumer,null,function(e){return r.createElement(o.default,{className:a(t,"icon-outline",{"is-filled":c}),size:l,style:{color:n||e.colors.orange}},r.createElement("g",{transform:"matrix(0.870918,0,0,0.870918,0.978227,0.978227)"},r.createElement("path",{d:"M15.9,7.8L8.2,0.1C8.1,0 7.9,0 7.8,0.1L0.1,7.8C0,7.9 0,8.1 0.1,8.2C0.2,8.3 0.2,8.3 0.3,8.3L2.2,8.3L2.2,15.8C2.2,15.9 2.2,15.9 2.3,16C2.3,16 2.4,16.1 2.5,16.1L6.2,16.1C6.3,16.1 6.5,16 6.5,15.8L6.5,10.5L9.7,10.5L9.7,15.8C9.7,15.9 9.8,16.1 10,16.1L13.7,16.1C13.8,16.1 14,16 14,15.8L14,8.2L15.9,8.2C16,8.2 16,8.2 16.1,8.1C16,8 16.1,7.9 15.9,7.8Z"})))})}}}]);
//# sourceMappingURL=316.m.28a576f4.chunk.js.map