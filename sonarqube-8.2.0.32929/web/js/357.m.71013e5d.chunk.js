(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{1136:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var n=a(309),s=a(2),r=a(310),l=a(326),i=a.n(l),o=a(338),c=a.n(o),m=a(323),u=a(5),h=a(357),p=a(376),d=a(462),v=a(463);function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){y(e,t,a[t])})}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class b extends s.PureComponent{constructor(e){var t;super(e),t=this,this.mounted=!1,this.getParams=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props,a=e.activation,n=e.rule;const s={};if(n&&n.params){for(const e of n.params)s[e.key]=e.defaultValue||"";if(a&&a.params)for(const e of a.params)s[e.key]=e.value}return s},this.getQualityProfilesWithDepth=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props,a=e.profiles;return Object(v.g)(a.filter(e=>!e.isBuiltIn&&e.actions&&e.actions.edit&&e.language===t.props.rule.lang)).map(e=>f({},e,{depth:e.depth-1}))},this.handleFormSubmit=e=>{e.preventDefault(),this.setState({submitting:!0});const t={key:this.state.profile,organization:this.props.organization,params:this.state.params,rule:this.props.rule.key,severity:this.state.severity};Object(h.a)(t).then(()=>this.props.onDone(t.severity)).then(()=>{this.mounted&&(this.setState({submitting:!1}),this.props.onClose())},()=>{this.mounted&&this.setState({submitting:!1})})},this.handleParameterChange=e=>{const t=e.currentTarget,a=t.name,n=t.value;this.setState(e=>({params:f({},e.params,{[a]:n})}))},this.handleProfileChange=e=>{let t=e.value;this.setState({profile:t})},this.handleSeverityChange=e=>{let t=e.value;this.setState({severity:t})},this.renderSeverityOption=e=>{let t=e.value;return s.createElement(p.a,{severity:t})};const a=this.getQualityProfilesWithDepth(e);this.state={params:this.getParams(e),profile:a.length>0?a[0].key:"",severity:e.activation?e.activation.severity:e.rule.severity,submitting:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.activation,a=e.rule,l=this.state,o=l.profile,h=l.severity,p=l.submitting,v=a.params,f=void 0===v?[]:v,y=this.getQualityProfilesWithDepth(),b=!!a.templateKey,g=y.length<=0,E=!!t;return s.createElement(i.a,{contentLabel:this.props.modalHeader,onRequestClose:this.props.onClose,size:"small"},s.createElement("form",{onSubmit:this.handleFormSubmit},s.createElement("div",{className:"modal-head"},s.createElement("h2",null,this.props.modalHeader)),s.createElement("div",{className:n("modal-body",{"modal-container":f.length>0})},!E&&g&&s.createElement(m.Alert,{variant:"info"},Object(u.translate)("coding_rules.active_in_all_profiles")),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(u.translate)("coding_rules.quality_profile")),s.createElement(c.a,{className:"js-profile",clearable:!1,disabled:p||1===y.length,onChange:this.handleProfileChange,options:y.map(e=>({label:"   ".repeat(e.depth)+e.name,value:e.key})),value:o})),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(u.translate)("severity")),s.createElement(c.a,{className:"js-severity",clearable:!1,disabled:p,onChange:this.handleSeverityChange,optionRenderer:this.renderSeverityOption,options:d.e.map(e=>({label:Object(u.translate)("severity",e),value:e})),searchable:!1,value:h,valueRenderer:this.renderSeverityOption})),b?s.createElement("div",{className:"modal-field"},s.createElement("p",{className:"note"},Object(u.translate)("coding_rules.custom_rule.activation_notice"))):f.map(e=>s.createElement("div",{className:"modal-field",key:e.key},s.createElement("label",{title:e.key},e.key),"TEXT"===e.type?s.createElement("textarea",{disabled:p,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,rows:3,value:this.state.params[e.key]||""}):s.createElement("input",{disabled:p,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,type:"text",value:this.state.params[e.key]||""}),s.createElement("div",{className:"note",dangerouslySetInnerHTML:{__html:e.htmlDesc||""}})))),s.createElement("footer",{className:"modal-foot"},p&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(r.SubmitButton,{disabled:p||g},E?Object(u.translate)("save"):Object(u.translate)("coding_rules.activate")),s.createElement(r.ResetButtonLink,{disabled:p,onClick:this.props.onClose},Object(u.translate)("cancel")))))}}},376:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(2),s=a(445),r=a.n(s),l=a(5);function i(e){let t=e.className,a=e.severity;return a?n.createElement("span",{className:t},n.createElement(r.a,{className:"little-spacer-right",severity:a}),Object(l.translate)("severity",a)):null}}}]);
//# sourceMappingURL=357.m.71013e5d.chunk.js.map