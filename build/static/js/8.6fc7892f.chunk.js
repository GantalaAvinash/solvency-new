(this.webpackJsonpsolvency=this.webpackJsonpsolvency||[]).push([[8],{1205:function(n,e,t){"use strict";t.r(e);var a,i,o,r,c,s,d,p,l,b,x,u=t(36),g=t(655),h=t.n(g),j=t(1),m=t(84),f=t.p+"static/media/show-password.7468b270.svg",O=t.p+"static/media/hide-password.2aaf769d.svg",w=t(6),v=t(7),y=t(50),S=v.a.div(a||(a=Object(w.a)(["\n    min-hight: 692px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 0;\n    overflow: hidden;\n    background: linear-gradient(\n        108deg,\n        rgba(1, 147, 86, 1) 0%,\n        rgba(10, 201, 122, 1) 100%\n    );\n"]))),k=v.a.div(i||(i=Object(w.a)(["\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    @media screen and (max-width: 480px) {\n        height: 80%;\n    }\n"]))),z=Object(v.a)(y.b)(o||(o=Object(w.a)(["\n    margin-left: 32px;\n    margin-top: 32px;\n    text-decoration: none;\n    color: #fff;\n    font-weight: 700;\n    font-size: 32px;\n\n    @media screen and (max-width: 480px) {\n        margin-left: 16px;\n        margiin-right: 8px;\n    }\n"]))),E=v.a.div(r||(r=Object(w.a)(["\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    @media screen and (max-width: 480px){\n        padding: 10px;\n    }\n"]))),C=v.a.form(c||(c=Object(w.a)(["\n    background: #010101;\n    max-width: 400px;\n    height: auto;\n    width: 100%;\n    z-index: 1;\n    display: grid;\n    margin: 0 auto;\n    padding: 80px 32px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9;);\n\n    @media screen and (max-width: 400px) {\n        padding: 32px 32px;\n    }\n"]))),A=v.a.h1(s||(s=Object(w.a)(["\n    margin-bottom: 40px;\n    color: #fff;\n    font-size: 20px;\n    font-weight: 400;\n    text-align: center;\n"]))),B=v.a.label(d||(d=Object(w.a)(["\n    margin-bottom: 8px;\n    font-size:14px;\n    color: #fff;\n"]))),F=v.a.input(p||(p=Object(w.a)(["\n    padding: 16px 16px;\n    margin-bottom: 32px;\n    border: none;\n    border-radius:4px;\n"]))),J=v.a.input(l||(l=Object(w.a)(["\n    padding: 16px 16px;\n    margin-bottom: 32px;\n    border: none;\n    border-radius:4px;\n    position: relative;\n"]))),P=v.a.button(b||(b=Object(w.a)(["\n    background: #01BF71;\n    padding: 16px 0;\n    border: none;\n    border-radius: 4px;\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n"]))),Y=v.a.img(x||(x=Object(w.a)(["\n    cursor: pointer;\n    position: relative;\n    width: 30px;\n    left: 90%;\n    top: -230%;\n"]))),q=t(2);e.default=function(n){var e=Object(j.useState)(""),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(j.useState)(""),r=Object(u.a)(o,2),c=r[0],s=r[1],d=Object(j.useState)(null),p=Object(u.a)(d,2),l=p[0],b=p[1],x=Object(j.useState)(!1),g=Object(u.a)(x,2),w=g[0],v=g[1],y=Object(j.useState)(!1),I=Object(u.a)(y,2),L=I[0],M=I[1];Object(j.useEffect)((function(){document.title="Admin Login - Solvency"}));var D=function(e){e.preventDefault(),b(null),v(!0),h.a.post("/api/signin",{email:a,password:c}).then((function(e){v(!1),Object(m.c)(e.data.token),n.history.push("/dashboard")})).catch((function(n){v(!1),404===n.response.status||400===n.response.status?b(n.response.data.message):b("Somthing went wrong. Please try again later."),console.error("error >>>>",n)}))};return Object(q.jsx)(S,{children:Object(q.jsxs)(k,{children:[Object(q.jsx)(z,{to:"/",children:"Solvency"}),Object(q.jsx)(E,{children:Object(q.jsxs)(C,{onSubmit:D,autoComplete:"off",children:[Object(q.jsx)(A,{children:"Sign in to your account"}),Object(q.jsx)(B,{htmlFor:"for",children:"Email"}),Object(q.jsx)(F,{value:a,type:"email",name:"email",required:!0,placeholder:"Enter Your Email",onChange:function(n){return i(n.target.value)}}),Object(q.jsx)(B,{htmlFor:"for",children:"Password"}),Object(q.jsx)(J,{value:c,type:L?"text":"password",name:"password",required:!0,placeholder:"Enter Your Password",onChange:function(n){return s(n.target.value)}}),Object(q.jsx)(Y,{alt:"",title:L?"Hide password":"Show password",src:L?O:f,onClick:function(){return M((function(n){return!n}))}}),l&&Object(q.jsx)("p",{style:{color:"red",textAlign:"Center",paddingBottom:"10px"},children:l}),Object(q.jsx)(P,{type:"submit",value:w?Object(q.jsx)("img",{src:"https://media.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.gif",alt:"SignIn"}):"Login",disabled:w,onSubmit:D,children:"SignIn"})]})})]})})}}}]);
//# sourceMappingURL=8.6fc7892f.chunk.js.map