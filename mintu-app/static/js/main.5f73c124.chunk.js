(this["webpackJsonpmintu-app"]=this["webpackJsonpmintu-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(10),o=n.n(s),r=n(11),l=n(1),i=n(4);n(17);i.initializeApp({apiKey:"AIzaSyCRjWJ1GGYRfiJ8H7vMtBtIfU8LgJ_wQUc",authDomain:"online-exam-3dbf6.firebaseapp.com",databaseURL:"https://online-exam-3dbf6.firebaseio.com",projectId:"online-exam-3dbf6",storageBucket:"online-exam-3dbf6.appspot.com",messagingSenderId:"887329167134",appId:"1:887329167134:web:01f9e8e2aa0f64b1dfdb0f",measurementId:"G-S1ZJM57K3Q"});var u=i.firestore(),m=function(e){var t=e.option,n=e.optionText,a=e.correctAnswer,s=e.checkAnswer,o=e.isShowCurrectAnswer&&a===t?"card option bg-success":"card option";return c.a.createElement("div",{className:"col-12 col-lg-6"},c.a.createElement("button",{className:o,onClick:function(){return s(t)}},c.a.createElement("div",{className:"card-body"},c.a.createElement("p",null,c.a.createElement("b",null,t,". ")," ",n))))},w=function(e){var t=e.question,n=e.checkAnswer,a=e.isShowCurrectAnswer,s=e.onSkipClick;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mt-4 mb-3"},c.a.createElement("p",{className:"question text-white"},c.a.createElement("b",null,"Q. ")," ",t.question)),c.a.createElement(m,{option:"A",optionText:t.option1,correctAnswer:t.correct_answer,checkAnswer:n,isShowCurrectAnswer:a}),c.a.createElement(m,{option:"B",optionText:t.option2,correctAnswer:t.correct_answer,checkAnswer:n,isShowCurrectAnswer:a}),c.a.createElement(m,{option:"C",optionText:t.option3,correctAnswer:t.correct_answer,checkAnswer:n,isShowCurrectAnswer:a}),c.a.createElement(m,{option:"D",optionText:t.option4,correctAnswer:t.correct_answer,checkAnswer:n,isShowCurrectAnswer:a}),c.a.createElement("div",{className:"col-12 text-center mt-4"},c.a.createElement("button",{className:"btn btn-danger",onClick:s},"Skip ",">>")))},d=function(){return c.a.createElement("h4",{className:"text-white text-center my-5"},"No question exists!")},p=function(){return c.a.createElement("div",{className:"popup d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"/assets/images/face_throwing_a_kiss_256_1.gif",alt:"success",width:"110"}),c.a.createElement("h4",{className:"text-success my-3"},"Correct Answer!")))},b=function(){return c.a.createElement("div",{className:"popup d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"/assets/images/loudly_crying_face_256_1.gif",alt:"wrong",width:"110"}),c.a.createElement("h3",{className:"text-wrong my-3"},"Wrong Answer!"),c.a.createElement("p",null,"Sare paise barbad ho gye.")))},h=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)(!1),i=Object(l.a)(o,2),m=i[0],h=i[1],E=Object(a.useState)(!1),f=Object(l.a)(E,2),g=f[0],_=f[1],N=Object(a.useState)(null),S=Object(l.a)(N,2),v=S[0],x=S[1],A=Object(a.useState)(!1),j=Object(l.a)(A,2),k=j[0],O=j[1],y=Object(a.useState)(0),C=Object(l.a)(y,2),q=C[0],T=C[1],I=Object(a.useState)(0),z=Object(l.a)(I,2),J=z[0],M=z[1],B=Object(a.useState)(0),W=Object(l.a)(B,2),G=W[0],Q=W[1],R=Object(a.useState)(0),U=Object(l.a)(R,2),D=U[0],K=U[1],L=["bg1","bg2","bg3","bg4","bg6","bg7","bg8","bg9","bg10","bg11","bg12"];return Object(a.useEffect)((function(){var e=L[Math.floor(Math.random()*L.length)];s(e),u.collection("questions").where("user_answer_status","==",0).limit(1).onSnapshot((function(e){e.empty?(x(null),console.log("No such document!")):x(Object(r.a)({id:e.docs[0].id},e.docs[0].data()))})),u.collection("questions").onSnapshot((function(e){T(e.size)})),u.collection("questions").where("user_answer_status",">",0).onSnapshot((function(e){M(e.size)})),u.collection("questions").where("user_answer_status","==",2).onSnapshot((function(e){K(e.size)})),u.collection("questions").where("user_answer_status","==",1).onSnapshot((function(e){Q(e.size)}))}),[]),c.a.createElement("div",{className:"bg ".concat(n)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 my-3"},c.a.createElement("h1",{className:"text-white text-center"},"Mintu App")),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},c.a.createElement("p",{className:"text-white"},c.a.createElement("b",null,"Total: ")," ",q)),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},c.a.createElement("p",{className:"text-white"},c.a.createElement("b",null,"Solved: ")," ",J)),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},c.a.createElement("p",{className:"text-white"},c.a.createElement("b",null,"Correct: ")," ",G)),c.a.createElement("div",{className:"col-12 col-md-6 col-lg-3"},c.a.createElement("p",{className:"text-white"},c.a.createElement("b",null,"Wrong: ")," ",D))),v?c.a.createElement(w,{question:v,checkAnswer:function(e){O(!0),setTimeout((function(){O(!1),e===v.correct_answer?(h(!0),setTimeout((function(){h(!1)}),1e3),u.collection("questions").doc(v.id).update({user_answer:e,user_answer_status:1})):(_(!0),setTimeout((function(){_(!1)}),1e3),u.collection("questions").doc(v.id).update({user_answer:e,user_answer_status:2}))}),500)},isShowCurrectAnswer:k,onSkipClick:function(){O(!0),setTimeout((function(){O(!1),u.collection("questions").doc(v.id).update({user_answer_status:3})}),1e3)}}):c.a.createElement(d,null),m&&c.a.createElement(p,null),g&&c.a.createElement(b,null)))},E=function(){return c.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(21),n(22);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.5f73c124.chunk.js.map