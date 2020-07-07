(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{1004:function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return l}),n.d(t,"b",function(){return i}),n.d(t,"g",function(){return u}),n.d(t,"c",function(){return p});var r=n(48),o=n(650);function a(e){return Object(r.getJSON)("/api/user_groups/search",e).catch(o.a)}function s(e){return Object(r.getJSON)("/api/user_groups/users",e).catch(o.a)}function c(e){return Object(r.post)("/api/user_groups/add_user",e).catch(o.a)}function l(e){return Object(r.post)("/api/user_groups/remove_user",e).catch(o.a)}function i(e){return Object(r.postJSON)("/api/user_groups/create",e).then(function(e){return e.group},o.a)}function u(e){return Object(r.post)("/api/user_groups/update",e).catch(o.a)}function p(e){return Object(r.post)("/api/user_groups/delete",e).catch(o.a)}},2096:function(e,t,n){"use strict";n.r(t);var r,o=n(646),a=n(648),s=n(12),c=n(657),l=n(685),i=n.n(l),u=n(34),p=n(761),m=n(660),d=n(683),h=n(640),f=n(645),g=n.n(f),v=n(751),y=n.n(v),E=n(663),C=n.n(E),b=n(654),_=n(48),O=n(650),w=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChange=function(e){return t.props.onChange(t.props.idx,e.currentTarget.value)},t.handleRemove=function(){return t.props.onRemove(t.props.idx)},t}return w(t,e),t.prototype.render=function(){return s.createElement("div",{className:"js-scm-account display-flex-row spacer-bottom"},s.createElement("input",{maxLength:255,onChange:this.handleChange,type:"text",value:this.props.scmAccount}),s.createElement(h.DeleteButton,{onClick:this.handleRemove}))},t}(s.PureComponent),N=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),P=function(e){function t(t){var n=e.call(this,t)||this;n.mounted=!1,n.handleError=function(e){return n.mounted&&[400,500].includes(e.status)?Object(_.parseError)(e).then(function(e){return n.setState({error:e})},O.a):Object(O.a)(e)},n.handleEmailChange=function(e){return n.setState({email:e.currentTarget.value})},n.handleLoginChange=function(e){return n.setState({login:e.currentTarget.value})},n.handleNameChange=function(e){return n.setState({name:e.currentTarget.value})},n.handlePasswordChange=function(e){return n.setState({password:e.currentTarget.value})},n.handleCreateUser=function(){return Object(p.b)({email:n.state.email||void 0,login:n.state.login,name:n.state.name,password:n.state.password,scmAccount:y()(n.state.scmAccounts)}).then(function(){n.props.onUpdateUsers(),n.props.onClose()},n.handleError)},n.handleUpdateUser=function(){var e=n.props.user;return Object(p.j)({email:e.local?n.state.email:void 0,login:n.state.login,name:e.local?n.state.name:void 0,scmAccount:y()(n.state.scmAccounts)}).then(function(){n.props.onUpdateUsers(),n.props.onClose()},n.handleError)},n.handleAddScmAccount=function(){n.setState(function(e){return{scmAccounts:e.scmAccounts.concat("")}})},n.handleUpdateScmAccount=function(e,t){return n.setState(function(n){var r=n.scmAccounts.slice();return r[e]=t,{scmAccounts:r}})},n.handleRemoveScmAccount=function(e){return n.setState(function(t){var n=t.scmAccounts;return{scmAccounts:n.slice(0,e).concat(n.slice(e+1))}})};var r=t.user;return n.state=r?{email:r.email||"",login:r.login,name:r.name||"",password:"",scmAccounts:r.scmAccounts||[]}:{email:"",login:"",name:"",password:"",scmAccounts:[]},n}return N(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=this.props.user,n=this.state.error,r=t?Object(u.translate)("users.update_user"):Object(u.translate)("users.create_user");return s.createElement(C.a,{header:r,onClose:this.props.onClose,onSubmit:t?this.handleUpdateUser:this.handleCreateUser,size:"small"},function(o){var a=o.onCloseClick,c=o.onFormSubmit,l=o.submitting;return s.createElement("form",{autoComplete:"off",id:"user-form",onSubmit:c},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,r)),s.createElement("div",{className:"modal-body modal-container"},n&&s.createElement(b.Alert,{variant:"error"},n),!n&&t&&!t.local&&s.createElement(b.Alert,{variant:"warning"},Object(u.translate)("users.cannot_update_delegated_user")),!t&&s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-user-login"},Object(u.translate)("login"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{className:"hidden",name:"login-fake",type:"text"}),s.createElement("input",{autoFocus:!0,id:"create-user-login",maxLength:255,minLength:3,name:"login",onChange:e.handleLoginChange,required:!0,type:"text",value:e.state.login}),s.createElement("p",{className:"note"},Object(u.translateWithParameters)("users.minimum_x_characters",3))),s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-user-name"},Object(u.translate)("name"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{className:"hidden",name:"name-fake",type:"text"}),s.createElement("input",{autoFocus:!!t,disabled:t&&!t.local,id:"create-user-name",maxLength:200,name:"name",onChange:e.handleNameChange,required:!0,type:"text",value:e.state.name})),s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-user-email"},Object(u.translate)("users.email")),s.createElement("input",{className:"hidden",name:"email-fake",type:"email"}),s.createElement("input",{disabled:t&&!t.local,id:"create-user-email",maxLength:100,name:"email",onChange:e.handleEmailChange,type:"email",value:e.state.email})),!t&&s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"create-user-password"},Object(u.translate)("password"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{className:"hidden",name:"password-fake",type:"password"}),s.createElement("input",{id:"create-user-password",maxLength:50,name:"password",onChange:e.handlePasswordChange,required:!0,type:"password",value:e.state.password})),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(u.translate)("my_profile.scm_accounts")),e.state.scmAccounts.map(function(t,n){return s.createElement(j,{idx:n,key:n,onChange:e.handleUpdateScmAccount,onRemove:e.handleRemoveScmAccount,scmAccount:t})}),s.createElement("div",{className:"spacer-bottom"},s.createElement(h.Button,{className:"js-scm-account-add",onClick:e.handleAddScmAccount},Object(u.translate)("add_verb"))),s.createElement("p",{className:"note"},Object(u.translate)("user.login_or_email_used_as_scm_account")))),s.createElement("footer",{className:"modal-foot"},l&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(h.SubmitButton,{disabled:l},t?Object(u.translate)("update_verb"):Object(u.translate)("create")),s.createElement(h.ResetButtonLink,{onClick:a},Object(u.translate)("cancel"))))})},t}(s.PureComponent),U=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={openUserForm:!1},t.handleOpenUserForm=function(){t.setState({openUserForm:!0})},t.handleCloseUserForm=function(){t.setState({openUserForm:!1})},t}return U(t,e),t.prototype.render=function(){return s.createElement("header",{className:"page-header",id:"users-header"},s.createElement("h1",{className:"page-title"},Object(u.translate)("users.page")),s.createElement(g.a,{loading:this.props.loading}),s.createElement("div",{className:"page-actions"},s.createElement(h.Button,{id:"users-create",onClick:this.handleOpenUserForm},Object(u.translate)("users.create_user"))),s.createElement("p",{className:"page-description"},Object(u.translate)("users.page.description")),this.state.openUserForm&&s.createElement(P,{onClose:this.handleCloseUserForm,onUpdateUsers:this.props.onUpdateUsers}))},t}(s.PureComponent),k=n(682),q=n.n(k),A=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),F=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSearch=function(e){t.props.updateQuery({search:e})},t}return A(t,e),t.prototype.render=function(){var e=this.props.query;return s.createElement("div",{className:"panel panel-vertical bordered-bottom spacer-bottom",id:"users-search"},s.createElement(q.a,{minLength:2,onChange:this.handleSearch,placeholder:Object(u.translate)("search.search_by_login_or_name"),value:e.search}))},t}(s.PureComponent),x=n(906),L=n.n(x),M=n(1458),T=n(702),D=n(634),z=n(656),R=n.n(z),B=n(1525);function I(e){return s.createElement(R.a,{contentLabel:Object(u.translate)("users.tokens"),onRequestClose:e.onClose},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,s.createElement(D.FormattedMessage,{defaultMessage:Object(u.translate)("users.user_X_tokens"),id:"users.user_X_tokens",values:{user:s.createElement("em",null,e.user.name)}}))),s.createElement("div",{className:"modal-body modal-container"},s.createElement(B.a,{deleteConfirmation:"inline",login:e.user.login,updateTokensCount:e.updateTokensCount})),s.createElement("footer",{className:"modal-foot"},s.createElement(h.ResetButtonLink,{onClick:e.onClose},Object(u.translate)("Done"))))}var W=n(704),G=n.n(W),J=n(662),Q=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.handleDeactivate=function(e){e.preventDefault(),t.setState({submitting:!0}),Object(p.c)({login:t.props.user.login}).then(function(){t.props.onUpdateUsers(),t.props.onClose()},function(){t.mounted&&t.setState({submitting:!1})})},t}return Q(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.user,t=this.state.submitting,n=Object(u.translate)("users.deactivate_user");return s.createElement(R.a,{contentLabel:n,onRequestClose:this.props.onClose},s.createElement("form",{autoComplete:"off",id:"deactivate-user-form",onSubmit:this.handleDeactivate},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,n)),s.createElement("div",{className:"modal-body"},Object(u.translateWithParameters)("users.deactivate_user.confirmation",e.name,e.login)),s.createElement("footer",{className:"modal-foot"},t&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(h.SubmitButton,{className:"js-confirm button-red",disabled:t},Object(u.translate)("users.deactivate")),s.createElement(h.ResetButtonLink,{className:"js-modal-close",onClick:this.props.onClose},Object(u.translate)("cancel")))))},t}(s.PureComponent),X=n(746),Z=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),H=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={confirmPassword:"",newPassword:"",oldPassword:"",submitting:!1},t.handleError=function(e){return t.mounted&&400===e.status?Object(_.parseError)(e).then(function(e){return t.setState({error:e,submitting:!1})},O.a):Object(O.a)(e)},t.handleConfirmPasswordChange=function(e){return t.setState({confirmPassword:e.currentTarget.value})},t.handleNewPasswordChange=function(e){return t.setState({newPassword:e.currentTarget.value})},t.handleOldPasswordChange=function(e){return t.setState({oldPassword:e.currentTarget.value})},t.handleChangePassword=function(e){e.preventDefault(),t.state.newPassword.length>0&&t.state.newPassword===t.state.confirmPassword&&(t.setState({submitting:!0}),Object(p.a)({login:t.props.user.login,password:t.state.newPassword,previousPassword:t.state.oldPassword}).then(function(){Object(X.a)(Object(u.translate)("my_profile.password.changed")),t.props.onClose()},t.handleError))},t}return Z(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.state,t=e.error,n=e.submitting,r=e.newPassword,o=e.confirmPassword,a=Object(u.translate)("my_profile.password.title");return s.createElement(R.a,{contentLabel:a,onRequestClose:this.props.onClose,size:"small"},s.createElement("form",{autoComplete:"off",id:"user-password-form",onSubmit:this.handleChangePassword},s.createElement("header",{className:"modal-head"},s.createElement("h2",null,a)),s.createElement("div",{className:"modal-body"},t&&s.createElement(b.Alert,{variant:"error"},t),this.props.isCurrentUser&&s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"old-user-password"},Object(u.translate)("my_profile.password.old"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{className:"hidden",name:"old-password-fake",type:"password"}),s.createElement("input",{id:"old-user-password",maxLength:50,name:"old-password",onChange:this.handleOldPasswordChange,required:!0,type:"password",value:this.state.oldPassword})),s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"user-password"},Object(u.translate)("my_profile.password.new"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{className:"hidden",name:"password-fake",type:"password"}),s.createElement("input",{id:"user-password",maxLength:50,name:"password",onChange:this.handleNewPasswordChange,required:!0,type:"password",value:this.state.newPassword})),s.createElement("div",{className:"modal-field"},s.createElement("label",{htmlFor:"confirm-user-password"},Object(u.translate)("my_profile.password.confirm"),s.createElement("em",{className:"mandatory"},"*")),s.createElement("input",{className:"hidden",name:"confirm-password-fake",type:"password"}),s.createElement("input",{id:"confirm-user-password",maxLength:50,name:"confirm-password",onChange:this.handleConfirmPasswordChange,required:!0,type:"password",value:this.state.confirmPassword}))),s.createElement("footer",{className:"modal-foot"},n&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(h.SubmitButton,{disabled:n||!r||r!==o},Object(u.translate)("change_verb")),s.createElement(h.ResetButtonLink,{onClick:this.props.onClose},Object(u.translate)("cancel")))))},t}(s.PureComponent),K=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.handleOpenDeactivateForm=function(){t.setState({openForm:"deactivate"})},t.handleOpenPasswordForm=function(){t.setState({openForm:"password"})},t.handleOpenUpdateForm=function(){t.setState({openForm:"update"})},t.handleCloseForm=function(){t.setState({openForm:void 0})},t.renderActions=function(){var e=t.props.user;return s.createElement(G.a,null,s.createElement(W.ActionsDropdownItem,{className:"js-user-update",onClick:t.handleOpenUpdateForm},Object(u.translate)("update_details")),e.local&&s.createElement(W.ActionsDropdownItem,{className:"js-user-change-password",onClick:t.handleOpenPasswordForm},Object(u.translate)("my_profile.password.title")),s.createElement(W.ActionsDropdownDivider,null),Object(J.c)(e)&&s.createElement(W.ActionsDropdownItem,{className:"js-user-deactivate",destructive:!0,onClick:t.handleOpenDeactivateForm},Object(u.translate)("users.deactivate")))},t}return K(t,e),t.prototype.render=function(){var e=this.state.openForm,t=this.props,n=t.isCurrentUser,r=t.onUpdateUsers,o=t.user;return s.createElement(s.Fragment,null,this.renderActions(),"deactivate"===e&&Object(J.c)(o)&&s.createElement(V,{onClose:this.handleCloseForm,onUpdateUsers:r,user:o}),"password"===e&&s.createElement(H,{isCurrentUser:n,onClose:this.handleCloseForm,user:o}),"update"===e&&s.createElement(P,{onClose:this.handleCloseForm,onUpdateUsers:r,user:o}))},t}(s.PureComponent),$=n(690),ee=n.n($),te=n(819),ne=n.n(te),re=n(1005),oe=n.n(re),ae=n(1004),se=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ce=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,c=a.length;s<c;s++,o++)r[o]=a[s];return r},le=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.fetchUsers=function(e){return Object(p.e)({login:n.props.user.login,organization:void 0,p:e.page,ps:e.pageSize,q:""!==e.query?e.query:void 0,selected:e.filter}).then(function(t){n.mounted&&n.setState(function(n){var r=null!=e.page&&e.page>1,o=r?ce(n.groups,t.groups):t.groups,a=t.groups.filter(function(e){return e.selected}).map(function(e){return e.name}),s=r?ce(n.selectedGroups,a):a;return{lastSearchParams:e,needToReload:!1,groups:o,groupsTotalCount:t.paging.total,selectedGroups:s}})})},n.handleSelect=function(e){return Object(ae.a)({name:e,login:n.props.user.login}).then(function(){n.mounted&&n.setState(function(t){return{needToReload:!0,selectedGroups:ce(t.selectedGroups,[e])}})})},n.handleUnselect=function(e){return Object(ae.e)({name:e,login:n.props.user.login}).then(function(){n.mounted&&n.setState(function(t){return{needToReload:!0,selectedGroups:ee()(t.selectedGroups,e)}})})},n.handleCloseClick=function(e){e.preventDefault(),n.handleClose()},n.handleClose=function(){n.props.onUpdateUsers(),n.props.onClose()},n.renderElement=function(e){var t=ne()(n.state.groups,{name:e});return s.createElement("div",{className:"select-list-list-item"},void 0===t?e:s.createElement(s.Fragment,null,t.name,s.createElement("br",null),s.createElement("span",{className:"note"},t.description)))},n.state={needToReload:!1,groups:[],selectedGroups:[]},n}return se(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=Object(u.translate)("users.update_groups");return s.createElement(R.a,{contentLabel:e,onRequestClose:this.handleClose},s.createElement("div",{className:"modal-head"},s.createElement("h2",null,e)),s.createElement("div",{className:"modal-body modal-container"},s.createElement(oe.a,{elements:this.state.groups.map(function(e){return e.name}),elementsTotalCount:this.state.groupsTotalCount,needToReload:this.state.needToReload&&this.state.lastSearchParams&&this.state.lastSearchParams.filter!==re.SelectListFilter.All,onSearch:this.fetchUsers,onSelect:this.handleSelect,onUnselect:this.handleUnselect,renderElement:this.renderElement,selectedElements:this.state.selectedGroups,withPaging:!0})),s.createElement("footer",{className:"modal-foot"},s.createElement("a",{className:"js-modal-close",href:"#",onClick:this.handleCloseClick},Object(u.translate)("Done"))))},t}(s.PureComponent),ie=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ue=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={openForm:!1,showMore:!1},t.handleOpenForm=function(){return t.setState({openForm:!0})},t.handleCloseForm=function(){return t.setState({openForm:!1})},t.toggleShowMore=function(e){e.preventDefault(),t.setState(function(e){return{showMore:!e.showMore}})},t}return ie(t,e),t.prototype.render=function(){var e=this.props.groups,t=e.length>3?2:3;return s.createElement("ul",null,e.slice(0,t).map(function(e){return s.createElement("li",{className:"little-spacer-bottom",key:e},e)}),e.length>3&&this.state.showMore&&e.slice(t).map(function(e){return s.createElement("li",{className:"little-spacer-bottom",key:e},e)}),s.createElement("li",{className:"little-spacer-bottom"},e.length>3&&!this.state.showMore&&s.createElement("a",{className:"js-user-more-groups spacer-right",href:"#",onClick:this.toggleShowMore},Object(u.translateWithParameters)("more_x",e.length-t)),s.createElement(h.ButtonIcon,{className:"js-user-groups button-small",onClick:this.handleOpenForm,tooltip:Object(u.translate)("users.update_groups")},s.createElement(L.a,null))),this.state.openForm&&s.createElement(le,{onClose:this.handleCloseForm,onUpdateUsers:this.props.onUpdateUsers,user:this.props.user}))},t}(s.PureComponent),pe=n(930),me=n(665),de=n(661);function he(e){var t=e.identityProvider,n=e.user;return s.createElement("td",{className:"text-middle"},s.createElement("div",null,s.createElement("strong",{className:"js-user-name"},n.name),s.createElement("span",{className:"js-user-login note little-spacer-left"},n.login)),n.email&&s.createElement("div",{className:"js-user-email little-spacer-top"},n.email),!n.local&&"sonarqube"!==n.externalProvider&&s.createElement(fe,{identityProvider:t,user:n}))}function fe(e){var t=e.identityProvider,n=e.user;return t?s.createElement("div",{className:"js-user-identity-provider little-spacer-top"},s.createElement("div",{className:"identity-provider",style:{backgroundColor:t.backgroundColor,color:Object(pe.getTextColor)(t.backgroundColor,de.colors.secondFontColor)}},s.createElement("img",{alt:t.name,className:"little-spacer-right",height:"14",src:Object(me.getBaseUrl)()+t.iconPath,width:"14"}),n.externalIdentity)):s.createElement("div",{className:"js-user-identity-provider little-spacer-top"},s.createElement("span",null,n.externalProvider,": ",n.externalIdentity))}var ge=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),ve=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={showMore:!1},t.toggleShowMore=function(e){e.preventDefault(),t.setState(function(e){return{showMore:!e.showMore}})},t}return ge(t,e),t.prototype.render=function(){var e=this.props.scmAccounts,t=e.length>3?2:3;return s.createElement("ul",{className:"js-scm-accounts"},e.slice(0,t).map(function(e,t){return s.createElement("li",{className:"little-spacer-bottom",key:t},e)}),e.length>3&&(this.state.showMore?e.slice(t).map(function(e,n){return s.createElement("li",{className:"little-spacer-bottom",key:n+t},e)}):s.createElement("li",{className:"little-spacer-bottom"},s.createElement("a",{className:"js-user-more-scm",href:"#",onClick:this.toggleShowMore},Object(u.translateWithParameters)("more_x",e.length-t)))))},t}(s.PureComponent),ye=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Ee=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={openTokenForm:!1},t.handleOpenTokensForm=function(){return t.setState({openTokenForm:!0})},t.handleCloseTokensForm=function(){return t.setState({openTokenForm:!1})},t}return ye(t,e),t.prototype.render=function(){var e=this.props,t=e.identityProvider,n=e.onUpdateUsers,r=e.organizationsEnabled,o=e.user;return s.createElement("tr",null,s.createElement("td",{className:"thin nowrap text-middle"},s.createElement(T.a,{hash:o.avatar,name:o.name,size:36})),s.createElement(he,{identityProvider:t,user:o}),s.createElement("td",{className:"thin nowrap text-middle"},s.createElement(ve,{scmAccounts:o.scmAccounts||[]})),s.createElement("td",{className:"thin nowrap text-middle"},s.createElement(M.a,{date:o.lastConnectionDate})),!r&&s.createElement("td",{className:"thin nowrap text-middle"},s.createElement(ue,{groups:o.groups||[],onUpdateUsers:n,user:o})),s.createElement("td",{className:"thin nowrap text-middle"},o.tokensCount,s.createElement(h.ButtonIcon,{className:"js-user-tokens spacer-left button-small",onClick:this.handleOpenTokensForm,tooltip:Object(u.translate)("users.update_tokens")},s.createElement(L.a,null))),s.createElement("td",{className:"thin nowrap text-right text-middle"},s.createElement(Y,{isCurrentUser:this.props.isCurrentUser,onUpdateUsers:n,user:o})),this.state.openTokenForm&&s.createElement(I,{onClose:this.handleCloseTokensForm,updateTokensCount:this.props.updateTokensCount,user:o}))},t}(s.PureComponent);function Ce(e){var t=e.currentUser,n=e.identityProviders,r=e.onUpdateUsers,o=e.organizationsEnabled,a=e.updateTokensCount,c=e.users;return s.createElement("div",{className:"boxed-group boxed-group-inner"},s.createElement("table",{className:"data zebra",id:"users-list"},s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null),s.createElement("th",{className:"nowrap"}),s.createElement("th",{className:"nowrap"},Object(u.translate)("my_profile.scm_accounts")),s.createElement("th",{className:"nowrap"},Object(u.translate)("users.last_connection")),!o&&s.createElement("th",{className:"nowrap"},Object(u.translate)("my_profile.groups")),s.createElement("th",{className:"nowrap"},Object(u.translate)("users.tokens")),s.createElement("th",{className:"nowrap"}," "))),s.createElement("tbody",null,c.map(function(e){return s.createElement(Ee,{identityProvider:n.find(function(t){return e.externalProvider===t.key}),isCurrentUser:t.isLoggedIn&&t.login===e.login,key:e.login,onUpdateUsers:r,organizationsEnabled:o,updateTokensCount:a,user:e})}))))}var be=n(836),_e=n.n(be),Oe=n(758),we=_e()(function(e){return{search:Object(Oe.parseAsString)(e.search)}}),je=_e()(function(e){return Object(Oe.cleanQuery)({search:e.search?Object(Oe.serializeString)(e.search):void 0})}),Ne=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Pe=function(){return(Pe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Ue=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,c=a.length;s<c;s++,o++)r[o]=a[s];return r},Se=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={identityProviders:[],loading:!0,users:[]},t.finishLoading=function(){t.mounted&&t.setState({loading:!1})},t.fetchIdentityProviders=function(){return Object(p.d)().then(function(e){var n=e.identityProviders;t.mounted&&t.setState({identityProviders:n})},function(){})},t.fetchUsers=function(e){var n=(void 0===e?t.props:e).location;t.setState({loading:!0}),Object(p.f)({q:we(n.query).search}).then(function(e){var n=e.paging,r=e.users;t.mounted&&t.setState({loading:!1,paging:n,users:r})},t.finishLoading)},t.fetchMoreUsers=function(){var e=t.state.paging;e&&(t.setState({loading:!0}),Object(p.f)({p:e.pageIndex+1,q:we(t.props.location.query).search}).then(function(e){var n=e.paging,r=e.users;t.mounted&&t.setState(function(e){return{loading:!1,users:Ue(e.users,r),paging:n}})},t.finishLoading))},t.updateQuery=function(e){var n=je(Pe(Pe({},we(t.props.location.query)),e));t.props.router.push(Pe(Pe({},t.props.location),{query:n}))},t.updateTokensCount=function(e,n){t.setState(function(t){return{users:t.users.map(function(t){return t.login===e?Pe(Pe({},t),{tokensCount:n}):t})}})},t}return Ne(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIdentityProviders(),this.fetchUsers()},t.prototype.componentWillReceiveProps=function(e){e.location.query.search!==this.props.location.query.search&&this.fetchUsers(e)},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=we(this.props.location.query),t=this.state,n=t.loading,r=t.paging,o=t.users;return s.createElement("div",{className:"page page-limited",id:"users-page"},s.createElement(m.a,{suggestions:"users"}),s.createElement(c.a,{defer:!1,title:Object(u.translate)("users.page")}),s.createElement(S,{loading:n,onUpdateUsers:this.fetchUsers}),s.createElement(F,{query:e,updateQuery:this.updateQuery}),s.createElement(Ce,{currentUser:this.props.currentUser,identityProviders:this.state.identityProviders,onUpdateUsers:this.fetchUsers,organizationsEnabled:this.props.organizationsEnabled,updateTokensCount:this.updateTokensCount,users:o}),void 0!==r&&s.createElement(i.a,{count:o.length,loadMore:this.fetchMoreUsers,ready:!n,total:r.total}))},t}(s.PureComponent),ke=Object(d.a)(Se);t.default=Object(o.connect)(function(e){return{currentUser:Object(a.getCurrentUser)(e),organizationsEnabled:Object(a.areThereCustomOrganizations)(e)}})(ke)},660:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r,o=n(12),a=n(684),s=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});function c(e){var t=e.suggestions;return o.createElement(a.a.Consumer,null,function(e){var n=e.addSuggestions,r=e.removeSuggestions;return o.createElement(l,{addSuggestions:n,removeSuggestions:r,suggestions:t})})}var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},t.prototype.componentDidUpdate=function(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))},t.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},t.prototype.render=function(){return null},t}(o.PureComponent)},680:function(e,t,n){var r=n(738),o=1/0,a=1.7976931348623157e308;e.exports=function(e){return e?(e=r(e))===o||e===-o?(e<0?-1:1)*a:e==e?e:0:0===e?e:0}},704:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(639),s=n(12),c=n(159),l=n(659),i=n(705),u=n(640),p=n(652),m=n(707),d=n(644),h=n(34);t.default=function(e){var t=e.children,n=e.className,r=e.overlayPlacement,o=e.small,c=e.toggleClassName;return s.createElement(p.default,{className:n,onOpen:e.onOpen,overlay:s.createElement("ul",{className:"menu"},t),overlayPlacement:r},s.createElement(u.Button,{className:a("dropdown-toggle",c,{"button-small":o})},s.createElement(i.default,{size:o?12:14}),s.createElement(l.default,{className:"little-spacer-left"})))};var f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return o(t,e),t.prototype.render=function(){var e=this,t=a(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?s.createElement("li",null,s.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?s.createElement("li",null,s.createElement(c.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?s.createElement(m.ClipboardBase,null,function(n){var r=n.setCopyButton,o=n.copySuccess;return s.createElement(d.default,{overlay:h.translate("copied_action"),visible:o},s.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:r},s.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))}):s.createElement("li",null,s.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(s.PureComponent);t.ActionsDropdownItem=f,t.ActionsDropdownDivider=function(){return s.createElement("li",{className:"divider"})}},705:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),o=n(643);t.default=function(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size,c=void 0===s?14:s;return r.createElement(o.default,{className:t,size:c,viewBox:"0 0 14 14"},r.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},r.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:a}})))}},710:function(e,t,n){var r=n(680);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},733:function(e,t){e.exports=function(e,t,n,r){for(var o=e.length,a=n+(r?1:-1);r?a--:++a<o;)if(t(e[a],a,e))return a;return-1}},746:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(714),o=n(713);function a(e){Object(o.default)().dispatch(r.b(e))}},798:function(e,t,n){var r=n(669),o=n(839),a=n(838);e.exports=function(e){return function(t,n,s){var c=Object(t);if(!o(t)){var l=r(n,3);t=a(t),n=function(e){return l(c[e],e,c)}}var i=e(t,n,s);return i>-1?c[l?t[i]:i]:void 0}}},819:function(e,t,n){var r=n(798)(n(820));e.exports=r},820:function(e,t,n){var r=n(733),o=n(669),a=n(710),s=Math.max;e.exports=function(e,t,n){var c=null==e?0:e.length;if(!c)return-1;var l=null==n?0:a(n);return l<0&&(l=s(c+l,0)),r(e,o(t,3),l)}},906:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),o=n(643);t.default=function(e){var t=e.className,n=e.fill,a=void 0===n?"currentColor":n,s=e.size;return r.createElement(o.default,{className:t,size:s},r.createElement("path",{d:"M2.968 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM2.968 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 11.274v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM2.968 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-1.51q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h1.51q0.102 0 0.177 0.075t0.075 0.177zM15.045 8.255v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 5.235v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177zM15.045 2.216v1.51q0 0.102-0.075 0.177t-0.177 0.075h-10.568q-0.102 0-0.177-0.075t-0.075-0.177v-1.51q0-0.102 0.075-0.177t0.177-0.075h10.568q0.102 0 0.177 0.075t0.075 0.177z",style:{fill:a}}))}}}]);
//# sourceMappingURL=317.1582644816097.chunk.js.map