(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{1736:function(e,r,t){"use strict";t.r(r);var o=t(2),s=t(316),n=t(28),c=t(319),p=t(332),u=t(318);r.default=Object(n.withRouter)(Object(s.connect)(e=>({currentUser:Object(u.getCurrentUser)(e)}))(class extends o.PureComponent{componentDidMount(){const e=this.props.currentUser;if(e&&Object(p.b)(e))if(e.homepage){const r=Object(c.l)(e.homepage);this.props.router.replace(r)}else this.props.router.replace("/projects");else this.props.router.replace("/about")}render(){return null}}))}}]);
//# sourceMappingURL=360.m.2b65520e.chunk.js.map