(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(29),l=a.n(s),i=(a(36),a(37),a(5)),r=a(6),o=a(11),d=a(10),m=a(0),h=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("a",{href:"",children:"@All Rights Reversed with 2020"})})})}}]),a}(n.Component),j=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={},n}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("header",{children:Object(m.jsx)("nav",{className:"navbar navbar-expand-nd navbar-dark bg-light",children:Object(m.jsx)("div",{children:"EMPLOYEE MANAGEMENT SYSTEM"})})})})}}]),a}(n.Component),b=a(4),u=a(14),p=a.n(u),f="https://localhost:9191/api/v1/employees",O=new(function(){function e(){Object(i.a)(this,e)}return Object(r.a)(e,[{key:"getEmployees",value:function(){return p.a.get(f)}},{key:"createEmployee",value:function(e){return p.a.post(f,e)}},{key:"getEmployeeById",value:function(e){return p.a.get(f+"/"+e)}},{key:"updateEmployee",value:function(e,t){return p.a.put(f+"/"+t,e)}},{key:"deleteEmployee",value:function(e){return p.a.delete(f+"/"+e)}}]),e}()),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={employees:[]},n.addemployee=n.addemployee.bind(Object(b.a)(n)),n.editEmployee=n.editEmployee.bind(Object(b.a)(n)),n.deleteEmployee=n.deleteEmployee.bind(Object(b.a)(n)),n.viewEmployee=n.viewEmployee.bind(Object(b.a)(n)),n}return Object(r.a)(a,[{key:"deleteEmployee",value:function(e){var t=this;O.deleteEmployee(e).then((function(a){t.setState({employees:t.state.employees.filter((function(t){return t.id!==e}))})}))}},{key:"editEmployee",value:function(e){this.props.history.push("/update-employee/".concat(e))}},{key:"viewEmployee",value:function(e){this.props.history.push("/view-employee/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;O.getEmployees().then((function(t){e.setState({employees:t.data})}))}},{key:"addemployee",value:function(){this.props.history.push("/add-employee")}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"text-center",children:"Employee List"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn btn-primary",onClick:this.addemployee,children:"Add Employee"})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("table",{className:"table table-striped table-bordered",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Employee First Name"}),Object(m.jsx)("th",{children:"Employee Last Name"}),Object(m.jsx)("th",{children:"Employee Email ID"}),Object(m.jsx)("th",{children:"Action"})]})}),Object(m.jsx)("tbody",{children:this.state.employees.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.firstname}),Object(m.jsx)("td",{children:t.lastname}),Object(m.jsx)("td",{children:t.emailId}),Object(m.jsxs)("td",{children:[Object(m.jsx)("button",{onClick:function(){return e.editEmployee(t.id)},className:"btn btn-info",children:"Update"}),Object(m.jsx)("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteEmployee(t.id)},className:"btn btn-danger",children:"Delete"}),Object(m.jsx)("button",{onClick:function(){return e.viewEmployee(t.id)},className:"btn btn-info",children:"view"})]})]},t.id)}))})]})})]})}}]),a}(n.Component),v=a(30),x=a(2),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).saveEmployee=function(e){e.preventDefault();var t={firstname:n.state.firstname,lastname:n.state.lastname,emailId:n.state.emailId};console.log("employee =>"+JSON.stringify(t)),O.createEmployee(t).then((function(e){n.props.history.push("/employees")}))},n.changefirstnamehandler=function(e){n.setState({firstname:e.target.value})},n.changelastnamehandler=function(e){n.setState({lastname:e.target.value})},n.changeemailIdhandler=function(e){n.setState({emailId:e.target.value})},n.cancel=function(){n.props.history.push("/employees")},n.state={firstname:"",lastname:"",emailId:""},n.changefirstnamehandler=n.changefirstnamehandler.bind(Object(b.a)(n)),n.changelastnamehandler=n.changelastnamehandler.bind(Object(b.a)(n)),n.changeemailIdhandler=n.changeemailIdhandler.bind(Object(b.a)(n)),n.saveEmployee=n.saveEmployee.bind(Object(b.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[Object(m.jsx)("h3",{className:"text-center",children:"Add Employee"}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{children:"First Name"}),Object(m.jsx)("input",{type:"text",placeholder:"enter your firstname",name:"firstname",className:"form-control",value:this.state.firstname,onChange:this.changefirstnamehandler})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{children:"Last Name"}),Object(m.jsx)("input",{type:"text",placeholder:"enter your  lastname",name:"lastname",className:"form-control",value:this.state.lastname,onChange:this.changelastnamehandler})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{children:"Email id"}),Object(m.jsx)("input",{type:"text",placeholder:"enter your email Id",name:"emailId",className:"form-control",value:this.state.emailId,onChange:this.changeemailIdhandler})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"btn btn-success",onClick:this.saveEmployee,children:"Save"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Cancel"})]})]})})]})})})}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateEmployee=function(e){e.preventDefault();var t={firstname:n.state.firstname,lastname:n.state.lastname,emailId:n.state.emailId};console.log("employee =>"+JSON.stringify(t)),O.updateEmployee(t,n.state.id).then((function(e){n.props.history.push("/employees")}))},n.changefirstnamehandler=function(e){n.setState({firstname:e.target.value})},n.changelastnamehandler=function(e){n.setState({lastname:e.target.value})},n.changeemailIdhandler=function(e){n.setState({emailId:e.target.value})},n.cancel=function(){n.props.history.push("/employees")},n.state={id:n.props.match.params.id,firstname:"",lastname:"",emailId:""},n.changefirstnamehandler=n.changefirstnamehandler.bind(Object(b.a)(n)),n.changelastnamehandler=n.changelastnamehandler.bind(Object(b.a)(n)),n.changeemailIdhandler=n.changeemailIdhandler.bind(Object(b.a)(n)),n.updateEmployee=n.updateEmployee.bind(Object(b.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.getEmployeeById(this.state.id).then((function(t){var a=t.data;e.setState({firstname:a.firstname,lastname:a.lastname,emailId:a.emailId})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[Object(m.jsx)("h3",{className:"text-center",children:"Updated Employee"}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{children:"First Name"}),Object(m.jsx)("input",{type:"text",placeholder:"enter your firstname",name:"firstname",className:"form-control",value:this.state.firstname,onChange:this.changefirstnamehandler})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{children:"Last Name"}),Object(m.jsx)("input",{type:"text",placeholder:"enter your  lastname",name:"lastname",className:"form-control",value:this.state.lastname,onChange:this.changelastnamehandler})]}),Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("label",{children:"Email id"}),Object(m.jsx)("input",{type:"text",placeholder:"enter your email Id",name:"emailId",className:"form-control",value:this.state.emailId,onChange:this.changeemailIdhandler})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"btn btn-success",onClick:this.updateEmployee,children:"Save"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Cancel"})]})]})})]})})})}}]),a}(n.Component),E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,employee:{}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;O.getEmployeeById(this.state.id).then((function(t){e.setState({employee:t.data})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"card caol-md-6  offset-md-3",children:[Object(m.jsx)("h2",{className:"text-center",children:"wellcome to view "}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("label",{children:"Employee First Name:"}),Object(m.jsx)("div",{children:this.state.employee.firstname})]})})]})})}}]),a}(n.Component);var I=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(v.a,{children:[Object(m.jsx)(j,{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{path:"/",exact:!0,component:y}),Object(m.jsx)(x.a,{path:"/employees",component:y}),Object(m.jsx)(x.a,{path:"/add-employee",component:g}),Object(m.jsx)(x.a,{path:"/update-employee/:id",component:N}),Object(m.jsx)(x.a,{path:"/view-employee/:id",component:E})]})}),Object(m.jsx)(h,{})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.178de808.chunk.js.map