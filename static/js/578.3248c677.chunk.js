"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[578],{7359:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(885),n=t(2791),s=t(4925),l=["title","titleId"];var o=n.forwardRef((function(e,a){var t=e.title,r=e.titleId,o=(0,s.Z)(e,l);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},o),t?n.createElement("title",{id:r},t):null,n.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z",clipRule:"evenodd"}))})),i=["title","titleId"];var d=n.forwardRef((function(e,a){var t=e.title,r=e.titleId,l=(0,s.Z)(e,i);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},l),t?n.createElement("title",{id:r},t):null,n.createElement("path",{d:"M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"}),n.createElement("path",{d:"M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"}))})),m=["title","titleId"];var c=n.forwardRef((function(e,a){var t=e.title,r=e.titleId,l=(0,s.Z)(e,m);return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":r},l),t?n.createElement("title",{id:r},t):null,n.createElement("path",{fillRule:"evenodd",d:"M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z",clipRule:"evenodd"}))})),u=t(3329);function p(e){var a=e.handleSubmit,t=e.name,s=void 0===t?"":t,l=e.number,i=void 0===l?"":l,m=e.submitName,p=e.add,h=e.edit,g=e.login,f=e.register,x=(0,n.useState)(""),b=(0,r.Z)(x,2),v=b[0],w=b[1],y=(0,n.useState)(""),j=(0,r.Z)(y,2),N=j[0],k=j[1],C=(0,n.useState)(""),z=(0,r.Z)(C,2),A=z[0],Z=z[1],E=(0,n.useState)(""),F=(0,r.Z)(E,2),S=F[0],I=F[1];(0,n.useEffect)((function(){w(s),k(i)}),[s,i]);var R=function(e){switch(e.target.name){case"name":w(e.target.value);break;case"number":k(e.target.value);break;case"email":Z(e.target.value);break;case"password":I(e.target.value)}};return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({evt:e,setName:w,setNumber:k,setEmail:Z,setPassword:I})},className:"mt-5 px-2 sm:px-3",autoComplete:"off",children:[(p||h)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("label",{htmlFor:"name",className:"block text-lg font-medium text-gray-700",children:"Name"}),(0,u.jsx)("input",{className:"block w-full rounded-md border border-gray-300 px-4 py-2 leading-6 drop-shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",id:"name",name:"name",type:"text",value:v,onChange:R,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,u.jsx)("label",{htmlFor:"number",className:"mt-5 block text-lg font-medium text-gray-700",children:"Phone number"}),(0,u.jsx)("input",{className:"block w-full rounded-md border border-gray-300 px-4 py-2 leading-6 drop-shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",id:"number",name:"number",type:"tel",value:N,onChange:R,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(g||f)&&(0,u.jsxs)("div",{className:"-space-y-px rounded-md shadow-sm",children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"email",className:"sr-only",children:"Email address"}),(0,u.jsx)("input",{className:"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 leading-6 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",id:"email",name:"email",type:"email",value:A,onChange:R,autoComplete:"email",placeholder:"Email address",required:!0})]}),f&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("label",{htmlFor:"name",className:"sr-only",children:"Name"}),(0,u.jsx)("input",{className:"relative block w-full appearance-none border border-gray-300 px-3 py-2 leading-6 text-gray-900 placeholder-gray-500 focus:border-b-2  focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",id:"name",name:"name",type:"text",value:v,onChange:R,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),(0,u.jsx)("input",{className:"relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3  py-2 leading-6 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-t focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm",id:"password",name:"password",type:"password",value:S,onChange:R,autoComplete:"current-password",placeholder:"Password",required:!0})]})]}),(0,u.jsxs)("button",{type:"submit",className:" mx-auto mt-5 flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm drop-shadow-sm transition duration-150 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:[p&&(0,u.jsx)(o,{className:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),h&&(0,u.jsx)(d,{className:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),g&&(0,u.jsx)(c,{className:"-ml-1 mr-2 h-5 w-5 text-indigo-300 group-hover:text-indigo-400","aria-hidden":"true"}),m]})]})}},4578:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var r=t(9648),n=t(9434),s=t(7532),l=t(5710),o=t(7359),i=t(3329);function d(){var e=(0,n.I0)();return(0,i.jsx)(s.Z,{children:(0,i.jsx)("div",{className:"flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"w-full max-w-md space-y-8",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("img",{className:"mx-auto h-12 w-auto",src:l,alt:"Logo"}),(0,i.jsx)("h2",{className:"mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",children:"Sign in to your account"})]}),(0,i.jsx)(o.Z,{login:!0,submitName:"Sign in",handleSubmit:function(a){var t=a.evt,n=a.setEmail,s=a.setPassword;t.preventDefault();var l=t.target.elements.email.value,o=t.target.elements.password.value;e(r.w1.authLogin({email:l,password:o})),n(""),s("")}})]})})})}},5710:function(e,a,t){e.exports=t.p+"static/media/phonebook.c74ddbaf33603bd49ac3.png"}}]);
//# sourceMappingURL=578.3248c677.chunk.js.map