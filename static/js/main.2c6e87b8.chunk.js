(this["webpackJsonpdaily-goals"]=this["webpackJsonpdaily-goals"]||[]).push([[0],[,,,function(t,e,n){t.exports={"form-control":"CourseInput_form-control__17vjl",invalid:"CourseInput_invalid__2Ppzt"}},,function(t,e,n){t.exports={button:"Button_button__2lgkF"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(4),i=n.n(c),l=(n(10),n(11),n(0));var s=t=>Object(l.jsx)("li",{className:"goal-item",onClick:()=>{t.onDelete(t.id)},children:t.children});n(13);var r=t=>Object(l.jsx)("ul",{className:"goal-list",children:t.items.map((e=>Object(l.jsx)(s,{id:e.id,onDelete:t.onDeleteItem,children:e.text},e.id)))}),a=n(5),d=n.n(a);var j=t=>Object(l.jsx)("button",{type:t.type,className:d.a.button,onClick:t.onClick,children:t.children}),u=n(3),b=n.n(u);var h=t=>{const[e,n]=Object(o.useState)(!0),[c,i]=Object(o.useState)("");return Object(l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),0!==c.trim().length?t.onAddGoal(c):n(!1)},children:[Object(l.jsxs)("div",{className:"".concat(b.a["form-control"]," ").concat(!e&&b.a.invalid),children:[Object(l.jsx)("label",{children:"Course Goal"}),Object(l.jsx)("input",{type:"text",onChange:t=>{t.target.value.trim().length>0&&n(!0),i(t.target.value)}})]}),Object(l.jsx)(j,{type:"submit",children:"Add Goal"})]})};n(14);var x=()=>{const[t,e]=Object(o.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),n=t=>{e((e=>e.filter((e=>e.id!==t))))};let c=Object(l.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"});return t.length>0&&(c=Object(l.jsx)(r,{items:t,onDeleteItem:n})),Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{id:"goal-form",children:Object(l.jsx)(h,{onAddGoal:t=>{e((e=>{const n=[...e];return n.unshift({text:t,id:Math.random().toString()}),n}))}})}),Object(l.jsx)("section",{id:"goals",children:c})]})};const m=document.getElementById("root");i.a.render(Object(l.jsx)(o.StrictMode,{children:Object(l.jsx)(x,{})}),m)}],[[15,1,2]]]);
//# sourceMappingURL=main.2c6e87b8.chunk.js.map