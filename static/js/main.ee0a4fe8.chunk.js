(this["webpackJsonpnod-fe-project"]=this["webpackJsonpnod-fe-project"]||[]).push([[0],{143:function(e,a,t){e.exports=t(180)},148:function(e,a,t){},178:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},179:function(e,a,t){},180:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),o=t.n(r),i=(t(148),t(30)),c=t(112),s=t(206),u=t(208),d=t(55),m=function(){return l.a.createElement("div",null,l.a.createElement(s.a,{position:"static"},l.a.createElement(u.a,null,l.a.createElement(d.a,null,"NOD Frontend Challenge"))))},f=t(83),b=t(97),g=t(123),v=t(224),h=t(220),p=t(213),E=t(214),O=t(209),C=Object(O.a)((function(){return{formButton:{position:"absolute",top:"30%",left:"40%"},formActions:{marginTop:"20px",background:"darkGray"},formHeader:{background:"darkGray"}}})),j=t(118),y=function(e){var a=e.id,t=e.label,n=e.type,r=e.field,o=e.value,i=e.onChange;return l.a.createElement("div",null,l.a.createElement(j.a,{margin:"dense",id:a,label:t,type:n,fullWidth:!0,value:o,onChange:function(e){i(e.target.value,r)}}))};y.defaultProps={id:"field",label:"label",type:"text",field:"firstName",value:"",onChange:function(){}};var N=y,k=t(212),x=t(125),S=t(18),w=t(221),P=t(211),A=function(e){var a=e.id,t=e.label,n=e.value,r=e.field,o=e.onChange;return l.a.createElement("div",null,l.a.createElement(P.a,{fullWidth:!0},l.a.createElement(S.a,{utils:x.a},l.a.createElement(k.a,{container:!0,justify:"space-around"},l.a.createElement(w.a,{format:"MM/dd/yyyy",margin:"normal",id:a,label:t,value:n,onChange:function(e){return o(e.toISOString(),r)},KeyboardButtonProps:{"aria-label":"change date"},fullWidth:!0})))))};A.defaultProps={id:"dob",label:"date of birth",value:"02/02/2020",field:"dob",onChange:function(){}};var B=A,F=t(124),I=t.n(F),M=t(126),W=Object(O.a)((function(){return{root:{width:"100%",marginTop:"16px"}}})),T=function(e){var a=W(),t=e.id,r=(e.label,e.field),o=(e.value,e.onChange),c=Object(n.useState)(!1),s=Object(i.a)(c,2),u=s[0],d=s[1],m=Object(n.useState)(""),f=Object(i.a)(m,2),b=f[0],g=f[1];return l.a.createElement("div",null,l.a.createElement(P.a,{className:a.root},l.a.createElement(I.a,{error:u,helperText:b,id:t,defaultCountry:"us",onChange:function(e){if(!Object(M.a)(e))return console.log("here"),d(!0),void g("Invalid Phone Number");d(!1),g(""),o(e,r),console.log("send to onchange: ",e)}})))};T.defaultProps={id:"field",label:"label"};var D=T,H=t(226),G=t(227),J=t(187),K=t(119),L=t(223),q=t(218),z=Object(O.a)((function(){return{root:{width:"100%"}}})),R={PaperProps:{style:{maxHeight:224,width:250}}},V=function(e){var a=z(),t=e.id,r=e.label,o=e.variant,c=e.currentOptions,s=e.value,u=e.field,d=e.onChange,m="multiple"===o,f=Object(n.useState)(s),b=Object(i.a)(f,2),g=b[0],v=b[1];return l.a.createElement("div",null,l.a.createElement(P.a,{className:a.root},l.a.createElement(H.a,{id:"".concat(t,"-label")},r),l.a.createElement(G.a,{labelId:"".concat(t,"-checkbox-label"),id:"".concat(t,"-checkbox"),multiple:m,value:g,onChange:function(e){v(e.target.value),d(e.target.value,u)},input:l.a.createElement(J.a,null),renderValue:function(e){return m?e.join(", "):e},MenuProps:R},c.map((function(e){return l.a.createElement(K.a,{key:e,value:e},l.a.createElement(L.a,{checked:g.indexOf(e)>-1}),l.a.createElement(q.a,{primary:e}))})))))};V.defaultProps={id:"field",label:"label",variant:"single",field:"select",value:["1"],onChange:function(){},currentOptions:["1","2","3"]};var $=V,Q=t(229),U=t(219),X=function(e){return l.a.createElement(Q.a,{display:"flex",alignItems:"center"},l.a.createElement(Q.a,{width:"100%",mr:1},l.a.createElement(U.a,Object.assign({variant:"determinate"},e))),l.a.createElement(Q.a,{minWidth:35},l.a.createElement(d.a,{variant:"body2",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))};X.defaultProps={value:20};var Y=X,Z=function(e){var a=e.onSubmit,t=e.onChange,n=e.currentFields,r=e.genders,o=e.recommendations,i=e.progress,s=C(),u=e.open,d=e.handleClickClose;return l.a.createElement("div",null,l.a.createElement(v.a,{fullWidth:!0,open:u,onClose:d,"aria-labelledby":"form-dialog-title"},l.a.createElement(h.a,{className:s.formHeader,id:"form-dialog-title"},"NOD Form"),l.a.createElement(p.a,null,l.a.createElement("form",null,l.a.createElement(Y,{value:i}),l.a.createElement(N,Object.assign({id:"first-name",label:"First Name",type:"text",field:"firstName",value:n.firstName},{onChange:t})),l.a.createElement(N,Object.assign({id:"last-name",label:"Last Name",type:"text",field:"lastName",value:n.lastName},{onChange:t})),l.a.createElement(B,Object.assign({id:"dob",label:"Date of Birth",field:"dob",value:n.dob},{onChange:t})),l.a.createElement(N,Object.assign({id:"email",label:"Email",type:"email",field:"email",value:n.email},{onChange:t})),l.a.createElement(N,Object.assign({id:"address",label:"Address",type:"text",field:"address",value:n.address},{onChange:t})),l.a.createElement(D,Object.assign({id:"phone",label:"Phone Number",field:"phone",value:n.phone},{onChange:t})),l.a.createElement($,Object.assign({id:"gender",label:"Gender",field:"gender",variant:"single",currentOptions:r,value:n.gender},{onChange:t})),l.a.createElement($,Object.assign({id:"recommendation",label:"Areas of Recommendation",field:"recommendation",variant:"multiple",currentOptions:o,value:n.recommendation},{onChange:t})))),l.a.createElement(E.a,{className:s.formActions},l.a.createElement(c.a,{onClick:d,color:"secondary"},"Cancel"),l.a.createElement(c.a,{disabled:100!==i,onClick:a,variant:"contained",color:"primary"},"Submit"))))},_=["Female","Male","Other"],ee=["Insurance","Superannuation","Investments","Cashflow","Pension","Estate Planning"],ae={firstName:"",lastName:"",dob:null,email:"",address:"",phone:"",gender:[],recommendation:[]},te={fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!0,title:"NOD form data",useTextFile:!1,useBom:!0,useKeysAsHeaders:!0},ne=function(e){var a=e.handleClickClose,t=Object(n.useState)(ae),r=Object(i.a)(t,2),o=r[0],c=r[1],s=Object(n.useState)(0),u=Object(i.a)(s,2),d=u[0],m=u[1];return l.a.createElement(Z,Object.assign({},e,{onSubmit:function(){new g.ExportToCsv(te).generateCsv([o]),c(ae),a()},onChange:function(e,a){console.log(e,a);var t=Object(b.a)(Object(b.a)({},o),{},Object(f.a)({},a,e));c(t),function(e){var a=0;console.log(e),Object.keys(e).forEach((function(t){var n=e[t];(Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n)&&(console.log("item: ",t),a+=1)}));var t=Math.ceil(a/8*100);m(t)}(t)},currentFields:o,genders:_,recommendations:ee,progress:d}))},le=Object(O.a)((function(){return{formButton:{position:"absolute",top:"30%",left:"40%"}}})),re=function(){var e=le(),a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],o=t[1];return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement("div",{className:e.formButton},l.a.createElement(c.a,{variant:"outlined",size:"large",color:"primary",onClick:function(){o(!0)}},"Open form")),l.a.createElement(ne,{open:r,handleClickClose:function(){o(!1)}}))};t(178),t(179);var oe=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[143,1,2]]]);
//# sourceMappingURL=main.ee0a4fe8.chunk.js.map