(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{42:function(e,t,a){},43:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(33),s=a.n(c),o=(a(42),a(15)),i=a(2),l=(a(43),a(44),a(9)),u=a(10),d=a(12),h=a(11),p=a(4),j=a.n(p),b=a(13),m=a(36),O=a(17),f=a(14),x=a.n(f),v=a(0),g=r.a.createContext(),y=function(e,t){switch(t.type){case"UPDATE_CONTACT":return Object(O.a)(Object(O.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});case"DELETE_CONTACT":return Object(O.a)(Object(O.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return Object(O.a)(Object(O.a)({},e),{},{contacts:[t.payload].concat(Object(m.a)(e.contacts))});default:return e}},C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],dispatch:function(t){return e.setState((function(e){return y(e,t)}))}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsx)(g.Provider,{value:this.state,children:this.props.children})}}]),a}(n.Component),N=g.Consumer,k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showContactInfo:!1},e.state={showContactInfo:!1},e.onDeleteClick=function(){var e=Object(b.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.name,n=t.email,r=t.phone,c=t.id,s=this.state.showContactInfo;return Object(v.jsx)(N,{children:function(t){var i=t.dispatch;return Object(v.jsxs)("div",{className:"card card-body mb-3",children:[Object(v.jsxs)("h4",{children:[a," ",Object(v.jsx)("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:s?"fas fa-sort-down":"fas fa-caret-right",style:{cursor:"pointer"}}),Object(v.jsx)("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,c,i)}),Object(v.jsx)(o.b,{to:"contact/edit/".concat(c),children:Object(v.jsx)("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}})})]}),s?Object(v.jsxs)("ul",{className:"list-group",children:[Object(v.jsxs)("li",{className:"list-group-item",children:["Email: ",n]}),Object(v.jsxs)("li",{className:"list-group-item",children:["Phone: ",r]})]}):null]})}})}}]),a}(n.Component),E=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(v.jsx)(N,{children:function(e){var t=e.contacts;return Object(v.jsxs)(r.a.Fragment,{children:[Object(v.jsx)("h1",{className:"display-4 mb-2",children:Object(v.jsx)("span",{className:"text-danger",children:"Contact List"})}),t.map((function(e){return Object(v.jsx)(k,{contact:e},e.id)}))]})}})}}]),a}(n.Component),S=a(18),w=a(35),A=a.n(w),T=function(e){var t=e.label,a=e.name,n=e.value,r=e.placeholder,c=e.type,s=e.onChange,o=e.errors;return console.log("errors:",o),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:a,children:t}),Object(v.jsx)("input",{type:c,name:a,className:A()("form-control form-control-lg",{"is-invalid":o}),placeholder:r,id:a,value:n,onChange:s}),o&&Object(v.jsx)("div",{className:"invalid-feedback",children:o})]})};T.defaultProps={type:"text"};var D=T,P=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e.onSubmit=function(){var t=Object(b.a)(j.a.mark((function t(a,n){var r,c,s,o,i,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},t.next=14,x.a.post("https://jsonplaceholder.typicode.com/users/",i);case 14:l=t.sent,a({type:"ADD_CONTACT",payload:l.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(v.jsx)(N,{children:function(t){var s=t.dispatch;return Object(v.jsxs)("div",{className:"card mb-3",children:[Object(v.jsx)("div",{className:"card-header",children:"Add Contact"}),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(v.jsx)(D,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,errors:c.name}),Object(v.jsx)(D,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,errors:c.email}),Object(v.jsx)(D,{label:"phone",name:"phone",placeholder:"Enter phone",value:r,onChange:e.onChange,errors:c.phone}),Object(v.jsx)("input",{type:"submit",className:"btn btn-light btn-block",value:"Add Contact"})]})})]})}})}}]),a}(n.Component),q=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(){var t=Object(b.a)(j.a.mark((function t(a,n){var r,c,s,o,i,l,u;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=e.state,c=r.name,s=r.email,o=r.phone,""!==c){t.next=5;break}return e.setState({errors:{name:"Name is required"}}),t.abrupt("return");case 5:if(""!==s){t.next=8;break}return e.setState({errors:{email:"email is required"}}),t.abrupt("return");case 8:if(""!==o){t.next=11;break}return e.setState({errors:{phone:"phone is required"}}),t.abrupt("return");case 11:return i={name:c,email:s,phone:o},l=e.props.match.params.id,console.log("id",l),t.next=16,x.a.put("https://jsonplaceholder.typicode.com/users/".concat(l),i);case 16:u=t.sent,a({type:"UPDATE_CONTACT",payload:u.data}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/");case 20:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.onChange=function(t){return e.setState(Object(S.a)({},t.target.name,t.target.value))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,x.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,r=t.phone,c=t.errors;return Object(v.jsx)(N,{children:function(t){var s=t.dispatch;return Object(v.jsxs)("div",{className:"card mb-3",children:[Object(v.jsx)("div",{className:"card-header",children:"Edit Contact"}),Object(v.jsx)("div",{className:"card-body",children:Object(v.jsxs)("form",{onSubmit:e.onSubmit.bind(e,s),children:[Object(v.jsx)(D,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,errors:c.name}),Object(v.jsx)(D,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,errors:c.email}),Object(v.jsx)(D,{label:"phone",name:"phone",placeholder:"Enter phone",value:r,onChange:e.onChange,errors:c.phone}),Object(v.jsx)("input",{type:"submit",className:"btn btn-light btn-block",value:"Update Contact"})]})})]})}})}}]),a}(n.Component),F=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"display-4",children:"About Contact Manager"}),Object(v.jsx)("p",{className:"lead",children:"Simple app to manage contacts"}),Object(v.jsx)("p",{className:"text-secondary",children:"Version 1.0"})]})},I=function(e){var t=e.branding;return Object(v.jsx)("div",{children:Object(v.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0",children:[Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("a",{href:"/",className:"navbar-brand",children:t})}),Object(v.jsx)("div",{children:Object(v.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(o.b,{to:"/",className:"nav-link",children:Object(v.jsx)("i",{className:"fas fa-home",children:"Home"})})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(o.b,{to:"/contact/add",className:"nav-link",children:Object(v.jsx)("i",{className:"fas fa-plus",children:"Add"})})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(o.b,{to:"/about",className:"nav-link",children:Object(v.jsx)("i",{className:"fas fa-question",children:"About"})})})]})})]})})};I.defaultProps={branding:"My App"};var _=I,L=function(){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("h1",{className:"display-4",children:[Object(v.jsx)("span",{className:"text-danger",children:"404"})," Page not Found"]}),Object(v.jsx)("p",{className:"lead",children:"Sorry that page does not exist"})]})};var M=function(){return Object(v.jsx)(C,{children:Object(v.jsx)(o.a,{basename:"/contactmanager",children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(_,{branding:"Contact Manager"}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(i.c,{children:[Object(v.jsx)(i.a,{exact:!0,path:"/",component:E}),Object(v.jsx)(i.a,{exact:!0,path:"/about",component:F}),Object(v.jsx)(i.a,{exact:!0,path:"/contact/add",component:P}),Object(v.jsx)(i.a,{exact:!0,path:"/contact/edit/:id",component:q}),Object(v.jsx)(i.a,{component:L})]})})]})})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root")),U()}},[[70,1,2]]]);
//# sourceMappingURL=main.8cbc983d.chunk.js.map