(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,n,a){e.exports={superInput:"SuperInputText_superInput__fMz3D",errorInput:"SuperInputText_errorInput__1Vle3",error:"SuperInputText_error__3TCEh"}},function(e,n,a){e.exports={default:"SuperButton_default__2eVZX",red:"SuperButton_red__AagH_"}},function(e,n,a){e.exports={checkbox:"SuperCheckbox_checkbox__SVf5u",spanClassName:"SuperCheckbox_spanClassName__R9ZvC"}},,,,function(e,n,a){e.exports={blue:"HW4_blue__uQzSh",column:"HW4_column__2PQrx"}},function(e,n,a){e.exports=a(16)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(7),o=a.n(c),s=(a(14),a(15),a(5)),l=a(1),u=a(2),m=a.n(u),p=function(e){e.type;var n=e.onChange,a=e.onChangeText,t=e.onKeyPress,c=e.onEnter,o=e.error,s=(e.className,e.spanClassName),u=Object(l.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),p="".concat(m.a.error," ").concat(s||""),i="".concat(o?m.a.errorInput:m.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){t&&t(e),"Enter"===e.key&&c&&c()},className:i},u)),o&&r.a.createElement("span",{className:p},o))},i=a(8),h=a.n(i),d=a(3),C=a.n(d),_=function(e){var n=e.red,a=e.className,t=Object(l.a)(e,["red","className"]),c="".concat(n?C.a.red:C.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:c},t))},g=a(4),E=a.n(g),f=function(e){e.type;var n=e.onChange,a=e.onChangeChecked,t=e.className,c=(e.spanClassName,e.children),o=Object(l.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(E.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){n&&n(e),a&&a(e.currentTarget.checked)},className:s},o)),c&&r.a.createElement("span",{className:E.a.spanClassName},c))};var b=function(){var e=Object(t.useState)(""),n=Object(s.a)(e,2),a=n[0],c=n[1],o=function(){l?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},l=a?"":"error",u=Object(t.useState)(!1),m=Object(s.a)(u,2),i=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:h.a.column},r.a.createElement(p,{value:a,onChangeText:c,onEnter:o,error:l}),r.a.createElement(_,{red:!0,onClick:o},"Delete "),r.a.createElement(f,{checked:i,onChangeChecked:d},"some text "),r.a.createElement(f,{checked:i,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ef7bf45c.chunk.js.map