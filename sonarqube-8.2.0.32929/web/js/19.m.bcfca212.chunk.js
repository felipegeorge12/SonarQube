(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1768:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s(316),i=s(5),a=s(474),o=s(330),l=s(948),c=s(318),p=(s(742),s(324)),m=s.n(p);function u(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){d(e,t,s[t])})}return e}function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const h=["user","codeviewer","issueadmin","securityhotspotadmin","admin","scan"];var g=s(327),f=s(310),b=s(354),E=s(333),j=s.n(E),y=s(315),O=s.n(y);class v extends n.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleSubmit=()=>this.props.onSubmit({description:this.state.description,name:this.state.name,projectKeyPattern:this.state.projectKeyPattern}).then(this.props.onClose),this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleDescriptionChange=e=>{this.setState({description:e.currentTarget.value})},this.handleProjectKeyPatternChange=e=>{this.setState({projectKeyPattern:e.currentTarget.value})},this.state={description:e.permissionTemplate&&e.permissionTemplate.description||"",name:e.permissionTemplate&&e.permissionTemplate.name||"",projectKeyPattern:e.permissionTemplate&&e.permissionTemplate.projectKeyPattern||""}}render(){return n.createElement(j.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},e=>{let t=e.onCloseClick,s=e.onFormSubmit,r=e.submitting;return n.createElement("form",{id:"permission-template-form",onSubmit:s},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,this.props.header)),n.createElement("div",{className:"modal-body"},n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"permission-template-name"},Object(i.translate)("name"),n.createElement("em",{className:"mandatory"},"*")),n.createElement("input",{autoFocus:!0,id:"permission-template-name",maxLength:256,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name}),n.createElement("div",{className:"modal-field-description"},Object(i.translate)("should_be_unique"))),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"permission-template-description"},Object(i.translate)("description")),n.createElement("textarea",{id:"permission-template-description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description})),n.createElement("div",{className:"modal-field"},n.createElement("label",{htmlFor:"permission-template-project-key-pattern"},Object(i.translate)("permission_template.key_pattern")),n.createElement("input",{id:"permission-template-project-key-pattern",maxLength:500,name:"projectKeyPattern",onChange:this.handleProjectKeyPatternChange,type:"text",value:this.state.projectKeyPattern}),n.createElement("div",{className:"modal-field-description"},Object(i.translate)("permission_template.key_pattern.description")))),n.createElement("footer",{className:"modal-foot"},n.createElement(O.a,{className:"spacer-right",loading:r}),n.createElement(f.SubmitButton,{disabled:r,id:"permission-template-submit"},this.props.confirmButtonText),n.createElement(f.ResetButtonLink,{disabled:r,id:"permission-template-cancel",onClick:t},Object(i.translate)("cancel"))))})}}function _(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var P=Object(b.a)(class extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={createModal:!1},this.handleCreateClick=()=>{this.setState({createModal:!0})},this.handleCreateModalClose=()=>{this.mounted&&this.setState({createModal:!1})},this.handleCreateModalSubmit=e=>{const t=this.props.organization&&this.props.organization.key;return Object(a.f)(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){_(e,t,s[t])})}return e}({},e,{organization:t})).then(e=>{this.props.refresh().then(()=>{const s=t?"/organizations/".concat(t,"/permission_templates"):"/permission_templates";this.props.router.push({pathname:s,query:{id:e.permissionTemplate.id}})})})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return n.createElement("header",{className:"page-header",id:"project-permissions-header"},n.createElement("h1",{className:"page-title"},Object(i.translate)("permission_templates.page")),!this.props.ready&&n.createElement("i",{className:"spinner"}),n.createElement("div",{className:"page-actions"},n.createElement(f.Button,{onClick:this.handleCreateClick},Object(i.translate)("create")),this.state.createModal&&n.createElement(v,{confirmButtonText:Object(i.translate)("create"),header:Object(i.translate)("permission_template.new_template"),onClose:this.handleCreateModalClose,onSubmit:this.handleCreateModalSubmit})),n.createElement("p",{className:"page-description"},Object(i.translate)("permission_templates.page.description")))}}),k=s(321),C=s.n(k),S=s(323),N=s(409);class T extends n.PureComponent{renderTooltip(e){return"user"===e.key||"codeviewer"===e.key?n.createElement("div",null,n.createElement(N.a,{message:Object(i.translate)("projects_role",e.key,"desc")}),n.createElement(S.Alert,{className:"spacer-top",variant:"warning"},Object(i.translate)("projects_role.public_projects_warning"))):n.createElement(N.a,{message:Object(i.translate)("projects_role",e.key,"desc")})}render(){const e=this.props.permissions.map(e=>n.createElement("th",{className:"permission-column little-padded-left little-padded-right",key:e.key},n.createElement("div",{className:"permission-column-inner"},n.createElement("span",{className:"text-middle"},Object(i.translate)("projects_role",e.key)),n.createElement(C.a,{className:"spacer-left",overlay:this.renderTooltip(e)}))));return n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"little-padded-left little-padded-right"}," "),e,n.createElement("th",{className:"thin nowrap text-right little-padded-left little-padded-right"}," ")))}}var x=s(385),w=s.n(x),z=s(377),D=s.n(z),q=s(347),I=s.n(q);function F(e){let t=e.onClose,s=e.onSubmit,r=e.permissionTemplate;const a=Object(i.translate)("permission_template.delete_confirm_title");return n.createElement(j.a,{header:a,onClose:t,onSubmit:s},e=>{let t=e.onCloseClick,s=e.onFormSubmit,o=e.submitting;return n.createElement("form",{onSubmit:s},n.createElement("header",{className:"modal-head"},n.createElement("h2",null,a)),n.createElement("div",{className:"modal-body"},Object(i.translateWithParameters)("permission_template.do_you_want_to_delete_template_xxx",r.name)),n.createElement("footer",{className:"modal-foot"},n.createElement(O.a,{className:"spacer-right",loading:o}),n.createElement(f.SubmitButton,{className:"button-red",disabled:o},Object(i.translate)("delete")),n.createElement(f.ResetButtonLink,{disabled:o,onClick:t},Object(i.translate)("cancel"))))})}function M(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var U=Object(b.a)(class extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteForm:!1,updateModal:!1},this.handleUpdateClick=()=>{this.setState({updateModal:!0})},this.handleCloseUpdateModal=()=>{this.mounted&&this.setState({updateModal:!1})},this.handleSubmitUpdateModal=e=>Object(a.y)(function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){M(e,t,s[t])})}return e}({id:this.props.permissionTemplate.id},e)).then(this.props.refresh),this.handleDeleteClick=()=>{this.setState({deleteForm:!0})},this.handleCloseDeleteForm=()=>{this.mounted&&this.setState({deleteForm:!1})},this.handleDeleteSubmit=()=>Object(a.g)({templateId:this.props.permissionTemplate.id}).then(()=>{const e=this.props.organization?"/organizations/".concat(this.props.organization.key,"/permission_templates"):"/permission_templates";this.props.router.replace(e),this.props.refresh()}),this.setDefault=e=>()=>{Object(a.x)(this.props.permissionTemplate.id,e).then(this.props.refresh,()=>{})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}getAvailableQualifiers(){const e=this.props.organization&&!this.props.organization.isDefault?["TRK"]:this.props.topQualifiers;return w()(e,this.props.permissionTemplate.defaultFor)}renderSetDefaultsControl(){const e=this.getAvailableQualifiers();return 0===e.length?null:1===this.props.topQualifiers.length?this.renderIfSingleTopQualifier(e):this.renderIfMultipleTopQualifiers(e)}renderSetDefaultLink(e,t){return n.createElement(z.ActionsDropdownItem,{className:"js-set-default","data-qualifier":e,key:e,onClick:this.setDefault(e)},t)}renderIfSingleTopQualifier(e){return e.map(e=>this.renderSetDefaultLink(e,n.createElement("span",null,Object(i.translate)("permission_templates.set_default"))))}renderIfMultipleTopQualifiers(e){return e.map(e=>this.renderSetDefaultLink(e,n.createElement("span",null,Object(i.translate)("permission_templates.set_default_for")," ",n.createElement(I.a,{qualifier:e})," ",Object(i.translate)("qualifiers",e))))}render(){const e=this.props,t=e.permissionTemplate,s=e.organization,r=s?"/organizations/".concat(s.key,"/permission_templates"):"/permission_templates";return n.createElement(n.Fragment,null,n.createElement(D.a,null,this.renderSetDefaultsControl(),!this.props.fromDetails&&n.createElement(z.ActionsDropdownItem,{to:{pathname:r,query:{id:t.id}}},Object(i.translate)("edit_permissions")),n.createElement(z.ActionsDropdownItem,{className:"js-update",onClick:this.handleUpdateClick},Object(i.translate)("update_details")),0===t.defaultFor.length&&n.createElement(z.ActionsDropdownItem,{className:"js-delete",destructive:!0,onClick:this.handleDeleteClick},Object(i.translate)("delete"))),this.state.updateModal&&n.createElement(v,{confirmButtonText:Object(i.translate)("update_verb"),header:Object(i.translate)("permission_template.edit_template"),onClose:this.handleCloseUpdateModal,onSubmit:this.handleSubmitUpdateModal,permissionTemplate:t}),this.state.deleteForm&&n.createElement(F,{onClose:this.handleCloseDeleteForm,onSubmit:this.handleDeleteSubmit,permissionTemplate:t}))}}),Q=s(28);function L(e){let t=e.organization,s=e.template;const r=t&&!t.isDefault?["TRK"]:s.defaultFor,a=m()(r).map(e=>Object(i.translate)("qualifiers",e)).join(", ");return n.createElement("div",null,n.createElement("span",{className:"badge spacer-right"},Object(i.translateWithParameters)("permission_template.default_for",a)))}function K(e){let t=e.template,s=e.organization;const r=s?"/organizations/".concat(s.key,"/permission_templates"):"/permission_templates";return n.createElement("td",{className:"little-padded-left little-padded-right"},n.createElement(Q.Link,{to:{pathname:r,query:{id:t.id}}},n.createElement("strong",{className:"js-name"},t.name)),t.defaultFor.length>0&&n.createElement("div",{className:"spacer-top js-defaults"},n.createElement(L,{organization:s,template:t})),!!t.description&&n.createElement("div",{className:"spacer-top js-description"},t.description),!!t.projectKeyPattern&&n.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",n.createElement("code",null,t.projectKeyPattern)))}var W=s(22);function A(e){let t=e.permission;return n.createElement("td",{className:"permission-column little-padded-left little-padded-right"},n.createElement("div",{className:"permission-column-inner"},n.createElement("ul",null,t.withProjectCreator&&n.createElement("li",{className:"little-spacer-bottom display-flex-center"},Object(i.translate)("permission_templates.project_creators"),n.createElement(C.a,{className:"little-spacer-left",overlay:Object(i.translate)(Object(W.isSonarCloud)()?"permission_templates.project_creators.explanation.sonarcloud":"permission_templates.project_creators.explanation")})),n.createElement("li",{className:"little-spacer-bottom"},n.createElement("strong",null,t.usersCount),"  user(s)"),n.createElement("li",null,n.createElement("strong",null,t.groupsCount)," group(s)"))))}function H(e){const t=e.template.permissions.map(e=>n.createElement(A,{key:e.key,permission:e}));return n.createElement("tr",{"data-id":e.template.id,"data-name":e.template.name},n.createElement(K,{organization:e.organization,template:e.template}),t,n.createElement("td",{className:"nowrap thin text-right text-top little-padded-left little-padded-right"},n.createElement(U,{organization:e.organization,permissionTemplate:e.template,refresh:e.refresh,topQualifiers:e.topQualifiers})))}function J(e){const t=e.permissionTemplates.map(t=>n.createElement(H,{key:t.id,organization:e.organization,refresh:e.refresh,template:t,topQualifiers:e.topQualifiers}));return n.createElement("div",{className:"boxed-group boxed-group-inner"},n.createElement("table",{className:"data zebra permissions-table",id:"permission-templates"},n.createElement(T,{organization:e.organization,permissions:e.permissions}),n.createElement("tbody",null,t)))}function B(e){return n.createElement("div",{className:"page page-limited"},n.createElement(g.a,{defer:!1,title:Object(i.translate)("permission_templates.page")}),n.createElement(P,{organization:e.organization,ready:e.ready,refresh:e.refresh}),n.createElement(J,{organization:e.organization,permissionTemplates:e.permissionTemplates,permissions:e.permissions,refresh:e.refresh,topQualifiers:e.topQualifiers}))}var G=s(787),R=s(744),V=s(405);function X(e){let t=e.organization,s=e.template;return n.createElement("div",{className:"big-spacer-bottom"},s.defaultFor.length>0&&n.createElement("div",{className:"spacer-top js-defaults"},n.createElement(L,{organization:t,template:s})),!!s.description&&n.createElement("div",{className:"spacer-top js-description"},s.description),!!s.projectKeyPattern&&n.createElement("div",{className:"spacer-top js-project-key-pattern"},"Project Key Pattern: ",n.createElement("code",null,s.projectKeyPattern)))}function Y(e){const t=e.template,s=e.organization,r=s?"/organizations/".concat(s.key,"/permission_templates"):"/permission_templates";return n.createElement("header",{className:"page-header",id:"project-permissions-header"},n.createElement("div",{className:"note spacer-bottom"},n.createElement(Q.Link,{className:"text-muted",to:r},Object(i.translate)("permission_templates.page"))),n.createElement("h1",{className:"page-title"},t.name),e.loading&&n.createElement("i",{className:"spinner"}),n.createElement("div",{className:"pull-right"},n.createElement(U,{fromDetails:!0,organization:s,permissionTemplate:t,refresh:e.refresh,topQualifiers:e.topQualifiers})))}class Z extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={filter:"all",groups:[],loading:!1,query:"",users:[]},this.requestHolders=e=>{this.setState({loading:!0});const t=this.props.template,s=this.state,n=s.query,r=s.filter,i=s.selectedPermission,o=[],l=null!=e?e:n;return"groups"!==r?o.push(a.k(t.id,l,i)):o.push(Promise.resolve([])),"users"!==r?o.push(a.j(t.id,l,i)):o.push(Promise.resolve([])),Promise.all(o).then(e=>{this.mounted&&this.setState({users:e[0],groups:e[1],loading:!1})})},this.handleToggleUser=(e,t)=>{if("<creator>"===e.login)return this.handleToggleProjectCreator(e,t);const s=this.props,n=s.template,r=s.organization,i=e.permissions.includes(t),o={templateId:n.id,login:e.login,permission:t};return r&&(o.organization=r.key),(i?a.w(o):a.r(o)).then(()=>this.requestHolders()).then(this.props.refresh)},this.handleToggleProjectCreator=(e,t)=>{const s=this.props.template;return(e.permissions.includes(t)?a.s(s.id,t):a.a(s.id,t)).then(()=>this.requestHolders()).then(this.props.refresh)},this.handleToggleGroup=(e,t)=>{const s=this.props,n=s.template,r=s.organization,i=e.permissions.includes(t),o={templateId:n.id,groupName:e.name,permission:t};return r&&Object.assign(o,{organization:r.key}),(i?a.v(o):a.q(o)).then(()=>this.requestHolders()).then(this.props.refresh)},this.handleSearch=e=>{this.setState({query:e}),this.requestHolders(e)},this.handleFilter=e=>{this.setState({filter:e},this.requestHolders)},this.handleSelectPermission=e=>{e===this.state.selectedPermission?this.setState({selectedPermission:void 0},this.requestHolders):this.setState({selectedPermission:e},this.requestHolders)},this.shouldDisplayCreator=e=>{const t=this.state,s=t.filter,n=t.query,r=t.selectedPermission,a=Object(i.translate)("permission_templates.project_creators"),o="all"!==s,l=!n||a.toLocaleLowerCase().includes(n.toLowerCase()),c=void 0===r||e.includes(r);return!o&&l&&c}}componentDidMount(){this.mounted=!0,this.requestHolders()}componentWillUnmount(){this.mounted=!1}render(){const e=Object(V.e)(V.b,"projects_role"),t=[...this.state.users],s=this.props.template.permissions.filter(e=>e.withProjectCreator).map(e=>e.key);if(this.shouldDisplayCreator(s)){const e={login:"<creator>",name:Object(i.translate)("permission_templates.project_creators"),permissions:s};t.unshift(e)}return n.createElement("div",{className:"page page-limited"},n.createElement(g.a,{defer:!1,title:this.props.template.name}),n.createElement(Y,{loading:this.state.loading,organization:this.props.organization,refresh:this.props.refresh,template:this.props.template,topQualifiers:this.props.topQualifiers}),n.createElement(X,{organization:this.props.organization,template:this.props.template}),n.createElement(G.a,{groups:this.state.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:e,selectedPermission:this.state.selectedPermission,showPublicProjectsWarning:!0,users:t},n.createElement(R.a,{filter:this.state.filter,onFilter:this.handleFilter,onSearch:this.handleSearch,query:this.state.query})))}}s.d(t,"App",function(){return $});class $ extends n.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={ready:!1,permissions:[],permissionTemplates:[]},this.requestPermissions=()=>{const e=this.props.organization;return(e?Object(a.l)(e.key):Object(a.l)()).then(e=>{if(this.mounted){const t=function(e){return m()(e,e=>h.indexOf(e.key))}(e.permissions),s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map(e=>{const s=[];return t.forEach(t=>{t.templateId===e.id&&s.push(t.qualifier)}),u({},e,{defaultFor:s})})}(function(e,t){return e.map(e=>{const s=t.map(t=>{const s=e.permissions.find(e=>e.key===t.key);return u({usersCount:0,groupsCount:0},t,s)});return u({},e,{permissions:s})})}(e.permissionTemplates,t),e.defaultTemplates);this.setState({ready:!0,permissionTemplates:s,permissions:t})}})}}componentDidMount(){this.mounted=!0,this.requestPermissions()}componentWillUnmount(){this.mounted=!1}renderTemplate(e){if(!this.state.ready)return null;const t=this.state.permissionTemplates.find(t=>t.id===e);return t?n.createElement(Z,{organization:this.props.organization,refresh:this.requestPermissions,template:t,topQualifiers:this.props.topQualifiers}):null}renderHome(){return n.createElement(B,{organization:this.props.organization,permissionTemplates:this.state.permissionTemplates,permissions:this.state.permissions,ready:this.state.ready,refresh:this.requestPermissions,topQualifiers:this.props.topQualifiers})}render(){const e=this.props.location.query.id;return n.createElement("div",null,n.createElement(o.a,{suggestions:"permission_templates"}),n.createElement(l.a,{organization:this.props.organization,title:Object(i.translate)("permission_templates.page")}),e&&this.renderTemplate(e),!e&&this.renderHome())}}t.default=Object(r.connect)(e=>({topQualifiers:Object(c.getAppState)(e).qualifiers}))($)},330:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var n=s(2),r=s(355);function i(e){let t=e.suggestions;return n.createElement(r.a.Consumer,null,e=>{let s=e.addSuggestions,r=e.removeSuggestions;return n.createElement(a,{addSuggestions:s,removeSuggestions:r,suggestions:t})})}class a extends n.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},405:function(e,t,s){"use strict";s.d(t,"b",function(){return i}),s.d(t,"c",function(){return a}),s.d(t,"d",function(){return o}),s.d(t,"a",function(){return c}),s.d(t,"e",function(){return m}),s.d(t,"f",function(){return u});var n=s(5),r=s(22);const i=["user","codeviewer","issueadmin","securityhotspotadmin","admin","scan"],a=["admin",{category:"administer",permissions:["gateadmin","profileadmin"]},"scan",{category:"creator",permissions:["provisioning"]}],o=["admin",{category:"administer",permissions:["gateadmin","profileadmin"]},"scan",{category:"creator",permissions:["provisioning","applicationcreator","portfoliocreator"]}],l=["user","admin"],c={TRK:i,VW:l,SVW:l,APP:l,DEV:["user","admin"]};function p(e,t){const s=e=>{const t="".concat(e,".sonarcloud");return Object(r.isSonarCloud)()&&Object(n.hasMessage)(t)?Object(n.translate)(t):Object(n.translate)(e)};return{key:e,name:s("".concat(t,".").concat(e)),description:s("".concat(t,".").concat(e,".desc"))}}function m(e,t){return e.map(e=>"object"==typeof e?{category:e.category,permissions:e.permissions.map(e=>p(e,t))}:p(e,t))}function u(e){return Boolean(e&&e.category)}},474:function(e,t,s){"use strict";s.d(t,"p",function(){return a}),s.d(t,"u",function(){return o}),s.d(t,"o",function(){return l}),s.d(t,"t",function(){return c}),s.d(t,"l",function(){return p}),s.d(t,"f",function(){return m}),s.d(t,"y",function(){return u}),s.d(t,"g",function(){return d}),s.d(t,"x",function(){return h}),s.d(t,"b",function(){return g}),s.d(t,"c",function(){return f}),s.d(t,"r",function(){return b}),s.d(t,"w",function(){return E}),s.d(t,"q",function(){return j}),s.d(t,"v",function(){return y}),s.d(t,"a",function(){return O}),s.d(t,"s",function(){return v}),s.d(t,"n",function(){return _}),s.d(t,"m",function(){return P}),s.d(t,"i",function(){return k}),s.d(t,"h",function(){return C}),s.d(t,"k",function(){return S}),s.d(t,"j",function(){return N}),s.d(t,"e",function(){return T}),s.d(t,"d",function(){return x});var n=s(8),r=s(320);const i=100;function a(e){return Object(n.post)("/api/permissions/add_user",e).catch(r.a)}function o(e){return Object(n.post)("/api/permissions/remove_user",e).catch(r.a)}function l(e){return Object(n.post)("/api/permissions/add_group",e).catch(r.a)}function c(e){return Object(n.post)("/api/permissions/remove_group",e).catch(r.a)}function p(e){const t="/api/permissions/search_templates";return e?Object(n.getJSON)(t,{organization:e}):Object(n.getJSON)(t)}function m(e){return Object(n.postJSON)("/api/permissions/create_template",e)}function u(e){return Object(n.post)("/api/permissions/update_template",e)}function d(e){return Object(n.post)("/api/permissions/delete_template",e).catch(r.a)}function h(e,t){return Object(n.post)("/api/permissions/set_default_template",{templateId:e,qualifier:t})}function g(e){return Object(n.post)("/api/permissions/apply_template",e).catch(r.a)}function f(e){return Object(n.post)("/api/permissions/bulk_apply_template",e)}function b(e){return Object(n.post)("/api/permissions/add_user_to_template",e)}function E(e){return Object(n.post)("/api/permissions/remove_user_from_template",e)}function j(e){return Object(n.post)("/api/permissions/add_group_to_template",e)}function y(e){return Object(n.post)("/api/permissions/remove_group_from_template",e)}function O(e,t){return Object(n.post)("/api/permissions/add_project_creator_to_template",{templateId:e,permission:t})}function v(e,t){return Object(n.post)("/api/permissions/remove_project_creator_from_template",{templateId:e,permission:t})}function _(e){return e.ps||(e.ps=i),Object(n.getJSON)("/api/permissions/users",e).catch(r.a)}function P(e){return e.ps||(e.ps=i),Object(n.getJSON)("/api/permissions/groups",e).catch(r.a)}function k(e){return e.ps||(e.ps=i),Object(n.getJSON)("/api/permissions/users",e)}function C(e){return e.ps||(e.ps=i),Object(n.getJSON)("/api/permissions/groups",e)}function S(e,t,s,r){const a={templateId:e,ps:i};return t&&(a.q=t),s&&(a.permission=s),r&&Object.assign(a,{organization:r}),Object(n.getJSON)("/api/permissions/template_users",a).then(e=>e.users)}function N(e,t,s,r){const a={templateId:e,ps:i};return t&&(a.q=t),s&&(a.permission=s),r&&Object.assign(a,{organization:r}),Object(n.getJSON)("/api/permissions/template_groups",a).then(e=>e.groups)}function T(e,t){return Object(n.post)("/api/projects/update_visibility",{project:e,visibility:t}).catch(r.a)}function x(e,t){return Object(n.post)("/api/projects/update_default_visibility",{organization:e,projectVisibility:t}).catch(r.a)}},742:function(e,t,s){var n=s(743);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};s(312)(n,r);n.locals&&(e.exports=n.locals)},743:function(e,t,s){(e.exports=s(311)(!1)).push([e.i,'.permissions-table .permission-column.selected{background-color:#d9edf7}.permissions-table .permission-column-inner{width:100px}.permissions-table .divider{background:#fff;padding:16px 0}.permissions-table .divider:after{display:block;content:"";background:#e6e6e6;height:1px;width:100%}',""])},744:function(e,t,s){"use strict";s.d(t,"a",function(){return c});var n=s(2),r=s(444),i=s.n(r),a=s(350),o=s.n(a),l=s(5);function c(e){const t=[{value:"all",label:Object(l.translate)("all")},{value:"users",label:Object(l.translate)("users.page")},{value:"groups",label:Object(l.translate)("user_groups.page")}];return n.createElement("div",{className:"display-flex-row"},n.createElement(i.a,{name:"users-or-groups",onCheck:e.onFilter,options:t,value:e.filter}),n.createElement("div",{className:"flex-1 spacer-left"},n.createElement(o.a,{minLength:3,onChange:e.onSearch,placeholder:Object(l.translate)("search.search_for_users_or_groups"),value:e.query})))}},787:function(e,t,s){"use strict";var n=s(324),r=s.n(n),i=s(441),a=s.n(i),o=s(2),l=s(5),c=s(405),p=s(353),m=s.n(p),u=s(591),d=s.n(u),h=s(309),g=s(340),f=s.n(g);class b extends o.PureComponent{render(){const e=this.props,t=e.loading,s=e.onCheck,n=e.permission,r=e.permissionItem,i=e.selectedPermission;return Object(c.f)(n)?o.createElement("td",{className:"text-middle"},n.permissions.map(e=>o.createElement("div",{key:e.key},o.createElement(f.a,{checked:r.permissions.includes(e.key),disabled:t.includes(e.key),id:e.key,onCheck:s},o.createElement("span",{className:"little-spacer-left"},e.name))))):o.createElement("td",{className:h("permission-column text-center text-middle",{selected:n.key===i})},o.createElement(f.a,{checked:r.permissions.includes(n.key),disabled:t.includes(n.key),id:n.key,onCheck:s}))}}class E extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:[]},this.stopLoading=e=>{this.mounted&&this.setState(t=>({loading:m()(t.loading,e)}))},this.handleCheck=(e,t)=>{void 0!==t&&(this.setState(e=>({loading:[...e.loading,t]})),this.props.onToggle(this.props.group,t).then(()=>this.stopLoading(t),()=>this.stopLoading(t)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.group;return o.createElement("tr",null,o.createElement("td",{className:"nowrap text-middle"},o.createElement("div",{className:"display-inline-block text-middle big-spacer-right"},o.createElement(d.a,null)),o.createElement("div",{className:"display-inline-block text-middle"},o.createElement("div",null,o.createElement("strong",null,e.name)),o.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},e.description))),this.props.permissions.map(t=>o.createElement(b,{key:Object(c.f)(t)?t.category:t.key,loading:this.state.loading,onCheck:this.handleCheck,permission:t,permissionItem:e,selectedPermission:this.props.selectedPermission})))}}var j=s(321),y=s.n(j),O=s(314),v=s.n(O),_=s(323),P=s(409);class k extends o.PureComponent{constructor(){super(...arguments),this.handlePermissionClick=e=>{e.preventDefault(),e.currentTarget.blur();const t=this.props.permission;this.props.onSelectPermission&&!Object(c.f)(t)&&this.props.onSelectPermission(t.key)},this.getTooltipOverlay=()=>{const e=this.props.permission;return Object(c.f)(e)?e.permissions.map(e=>o.createElement(o.Fragment,{key:e.key},o.createElement("b",{className:"little-spacer-right"},e.name,":"),o.createElement(P.a,{key:e.key,message:e.description}),o.createElement("br",null))):this.props.showPublicProjectsWarning&&["user","codeviewer"].includes(e.key)?o.createElement("div",null,o.createElement(P.a,{message:e.description}),o.createElement(_.Alert,{className:"spacer-top",variant:"warning"},Object(l.translate)("projects_role.public_projects_warning"))):o.createElement(P.a,{message:e.description})}}render(){const e=this.props,t=e.onSelectPermission,s=e.permission;let n;return n=Object(c.f)(s)?Object(l.translate)("global_permissions",s.category):t?o.createElement(v.a,{overlay:Object(l.translateWithParameters)("global_permissions.filter_by_x_permission",s.name)},o.createElement("a",{href:"#",onClick:this.handlePermissionClick},s.name)):s.name,o.createElement("th",{className:h("permission-column text-center text-middle",{selected:!Object(c.f)(s)&&s.key===this.props.selectedPermission})},o.createElement("div",{className:"permission-column-inner"},n,o.createElement(y.a,{className:"spacer-left",overlay:this.getTooltipOverlay()})))}}var C=s(363),S=s(22);class N extends o.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:[]},this.stopLoading=e=>{this.mounted&&this.setState(t=>({loading:m()(t.loading,e)}))},this.handleCheck=(e,t)=>{void 0!==t&&(this.setState(e=>({loading:[...e.loading,t]})),this.props.onToggle(this.props.user,t).then(()=>this.stopLoading(t),()=>this.stopLoading(t)))}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props.user,t=this.props.permissions.map(t=>o.createElement(b,{key:Object(c.f)(t)?t.category:t.key,loading:this.state.loading,onCheck:this.handleCheck,permission:t,permissionItem:e,selectedPermission:this.props.selectedPermission}));return"<creator>"===e.login?o.createElement("tr",null,o.createElement("td",{className:"nowrap text-middle"},o.createElement("div",{className:"display-inline-block text-middle"},o.createElement("div",null,o.createElement("strong",null,e.name)),o.createElement("div",{className:"little-spacer-top",style:{whiteSpace:"normal"}},Object(l.translate)(Object(S.isSonarCloud)()?"permission_templates.project_creators.explanation.sonarcloud":"permission_templates.project_creators.explanation")))),t):o.createElement("tr",null,o.createElement("td",{className:"nowrap text-middle"},o.createElement(C.a,{className:"text-middle big-spacer-right",hash:e.avatar,name:e.name,size:36}),o.createElement("div",{className:"display-inline-block text-middle"},Object(S.isSonarCloud)()?o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement("strong",null,e.name)),o.createElement("div",{className:"note little-spacer-top"},e.login)):o.createElement(o.Fragment,null,o.createElement("div",null,o.createElement("strong",null,e.name),o.createElement("span",{className:"note spacer-left"},e.login)),o.createElement("div",{className:"little-spacer-top"},e.email)))),t)}}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var s=[],n=!0,r=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(s.push(a.value),!t||s.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return s}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){w(e,t,s[t])})}return e}function w(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}s.d(t,"a",function(){return z});class z extends o.PureComponent{constructor(){super(...arguments),this.state={initialPermissionsCount:{}},this.handleGroupToggle=(e,t)=>{const s=e.id||e.name;return void 0===this.state.initialPermissionsCount[s]&&this.setState(t=>({initialPermissionsCount:x({},t.initialPermissionsCount,{[s]:e.permissions.length})})),this.props.onToggleGroup(e,t)},this.handleUserToggle=(e,t)=>(void 0===this.state.initialPermissionsCount[e.login]&&this.setState(t=>({initialPermissionsCount:x({},t.initialPermissionsCount,{[e.login]:e.permissions.length})})),this.props.onToggleUser(e,t)),this.getItemInitialPermissionsCount=e=>{const t=this.isPermissionUser(e)?e.login:e.id||e.name;return void 0!==this.state.initialPermissionsCount[t]?this.state.initialPermissionsCount[t]:e.permissions.length}}componentDidUpdate(e){this.props.filter===e.filter&&this.props.query===e.query||this.setState({initialPermissionsCount:{}})}isPermissionUser(e){return void 0!==e.login}renderEmpty(){const e=this.props.permissions.length+1;return o.createElement("tr",null,o.createElement("td",{colSpan:e},Object(l.translate)("no_results_search")))}renderItem(e,t){return this.isPermissionUser(e)?o.createElement(N,{key:"user-".concat(e.login),onToggle:this.handleUserToggle,permissions:t,selectedPermission:this.props.selectedPermission,user:e}):o.createElement(E,{group:e,key:"group-".concat(e.id||e.name),onToggle:this.handleGroupToggle,permissions:t,selectedPermission:this.props.selectedPermission})}render(){const e=this.props.permissions,t=r()([...this.props.users,...this.props.groups],e=>this.isPermissionUser(e)&&"<creator>"===e.login?0:e.name),s=T(a()(t,e=>this.getItemInitialPermissionsCount(e)),2),n=s[0],i=s[1];return o.createElement("div",{className:"boxed-group boxed-group-inner"},o.createElement("table",{className:"data zebra permissions-table"},o.createElement("thead",null,o.createElement("tr",null,o.createElement("td",{className:"nowrap bordered-bottom"},this.props.children),e.map(e=>o.createElement(k,{key:Object(c.f)(e)?e.category:e.key,onSelectPermission:this.props.onSelectPermission,permission:e,selectedPermission:this.props.selectedPermission,showPublicProjectsWarning:this.props.showPublicProjectsWarning})))),o.createElement("tbody",null,0===t.length&&!this.props.loading&&this.renderEmpty(),n.map(t=>this.renderItem(t,e)),n.length>0&&i.length>0&&o.createElement(o.Fragment,null,o.createElement("tr",null,o.createElement("td",{className:"divider",colSpan:20})),o.createElement("tr",null)),i.map(t=>this.renderItem(t,e)))))}}},948:function(e,t,s){"use strict";s.d(t,"a",function(){return i});var n=s(2),r=s(327);function i(e){let t=e.title,s=e.organization;const i=t+(s?" - "+s.name:"");return n.createElement(r.a,{defaultTitle:i,defer:!1,titleTemplate:"%s - ".concat(i)})}}}]);
//# sourceMappingURL=19.m.bcfca212.chunk.js.map