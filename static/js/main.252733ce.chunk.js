(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),i=n(18),s=n.n(i),c=(n(24),n(7)),o=n(3),l=n(4),p=n(6),u=n(5),h=(n(9),n(19)),j=n.n(h),m=n(0),y=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t="employee",n=this.props,r=n.person,a=(n.isActive,n.onChange),i=r.lastName+" "+r.firstName;return Object(m.jsxs)("div",{onChange:a,children:[Object(m.jsx)("h4",{className:t,children:i}),Object(m.jsx)("input",{type:"radio",value:"true",name:r.id,onChange:(e=!0,t+=e?" employee-active":"",void console.log(t))}),"active",Object(m.jsx)("input",{type:"radio",value:"false",name:r.id}),"not active"]})}}]),n}(a.a.Component),v=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.employees?this.props.employees:[],t=this.props.onActivityChange,n=e.sort((function(e,t){return e.lastName<t.lastName?-1:e.lastName>t.lastName?1:0})),r=new Map;for(var a,i=(a=97,Array(122-a+1).fill().map((function(e,t){return a+t}))),s=0;s<i.length;s++){r.has(String.fromCharCode(i[s]))||r.set(String.fromCharCode(i[s]),[]);for(var c=0;c<n.length;c++)n[c].lastName[0].toLowerCase()===String.fromCharCode(i[s])&&r.get(String.fromCharCode(i[s])).push(n[c])}return Object(m.jsx)("div",{className:"person-wrap",children:Object(m.jsx)("div",{children:Array.from(r.keys()).map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e}),r.get(e).map((function(e){return Object(m.jsx)(y,{isActive:!1,person:e,onChange:function(n){return t(e.id,n.target.value)}},e.id)}))]},e)}))})})}}]),n}(a.a.Component),b=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){for(var e=this.props.employees?this.props.employees:[],t=this.props.employeesActivity?this.props.employeesActivity:{},n=e.filter((function(e){return t[e.id]})),r=new Map,a=["May","June","July","August","September","October","November","December","January","February","March","April"],i=0;i<a.length;i++)r.has(String.fromCharCode(a[i]))||r.set(a[i],[]);console.log(r);var s=0;for(var c in n){var o=n.map((function(e){return parseInt(e.dob.slice(5,7))}))[s],l=n.map((function(e){return parseInt(e.dob.slice(0,4))}))[s],p=n.map((function(e){return parseInt(e.dob.slice(8,10))}))[s],u=a[(o+6)%12];r.get(u).push(n[s].lastName+" "+n[s].firstName+" - "+p+" "+u+", "+l),s++}return console.log(r.get("March")),Object(m.jsx)("div",{children:Array.from(r.keys()).map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:r.get(e).length>=1?e:null}),r.get(e).map((function(e){return Object(m.jsx)("li",{children:e})}))]},e)}))})}}]),n}(a.a.Component),d=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],employeesActivity:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(t){var n=t.data;e.setState(Object(c.a)(Object(c.a)({},e.state),{},{employees:n}))}))}},{key:"onActivityChange",value:function(e,t){var n=Object(c.a)({},this.state.employeesActivity);n[e]="true"===t,this.setState(Object(c.a)(Object(c.a)({},this.state),{},{employeesActivity:n}))}},{key:"render",value:function(){var e=this;return console.log(b),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)("h1",{children:"Employees"}),Object(m.jsx)(v,{employees:this.state.employees,onActivityChange:function(t,n){return e.onActivityChange(t,n)}})]}),Object(m.jsxs)("div",{class:"container",children:[Object(m.jsx)("h1",{children:"Employees Birthday"}),Object(m.jsx)(b,{employees:this.state.employees,employeesActivity:this.state.employeesActivity})]})]})}}]),n}(a.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(d,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[44,1,2]]]);
//# sourceMappingURL=main.252733ce.chunk.js.map