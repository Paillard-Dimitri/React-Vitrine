(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[0],{18:function(e,t,a){e.exports=a(32)},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=a(1),s=a(3),m=function(e){return console.log(e),l.a.createElement("div",{className:"scroll-bottom"},l.a.createElement("div",{className:"sb-main"},e.left&&l.a.createElement(s.b,{to:e.left,className:"left hover"},l.a.createElement("span",null,"\u276c")),l.a.createElement("p",{className:"center"},"Scroll"),e.right&&l.a.createElement(s.b,{to:e.right,className:"right hover"},l.a.createElement("span",null,"\u276d"))))},i=function(){return l.a.createElement("span",{className:"logo"},"DP")},u=function(){return Object(n.useEffect)((function(){window.addEventListener("mousemove",(function(e){document.querySelector(".cursor").style.top=e.pageY+"px",document.querySelector(".cursor").style.left=e.pageX+"px"}));var e=function(){document.querySelector(".cursor").classList.add("hovered")},t=function(){document.querySelector(".cursor").style.transition=".3s ease-out",document.querySelector(".cursor").classList.remove("hovered")};document.querySelectorAll(".hover").forEach((function(a){a.addEventListener("mouseover",e),a.addEventListener("mouseleave",t)}))}),[]),l.a.createElement("span",{className:"cursor"})},p=function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement(s.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null,"Accueil")),l.a.createElement("li",{className:"nav-portfolio"},"Portfolio",l.a.createElement("ul",{className:"nav-projects"},l.a.createElement(s.b,{to:"/project-1",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 1")),l.a.createElement(s.b,{to:"/project-2",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 2")),l.a.createElement(s.b,{to:"/project-3",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 3")),l.a.createElement(s.b,{to:"/project-4",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 4")))),l.a.createElement(s.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null,"Contact"))))},E=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var a=t.offsetX-20,n=t.offsetY-13;e.style.transform="translate( ".concat(a,"px, ").concat(n,"px)")})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return l.a.createElement("div",{className:"social-network"},l.a.createElement("ul",{className:"content"},l.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-facebook-f"}))),l.a.createElement("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-twitter"}))),l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-instagram"})))))},d=a(13),v=a(7),f=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(v.a)(c,2),s=o[0],m=o[1],i=Object(n.useState)(""),u=Object(v.a)(i,2),p=u[0],E=u[1],d=Object(n.useState)(""),f=Object(v.a)(d,2),h=f[0],g=f[1],b=Object(n.useState)(""),j=Object(v.a)(b,2),N=j[0],y=j[1],w=function(e,t){var a=document.querySelector(".form-message");window.emailjs.send("service_vjmxnjs",e,t).then((function(e){console.log("success !"),a.innerHTML="Message envoy\xe9 ! Nous vous recontacterons d\xe8s que possible.",a.style.background="#00c1ec",a.style.opacity="1",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),r(""),m(""),E(""),g(""),y(""),setTimeout((function(){a.style.opacity="0"}),5e3)})).catch((function(e){return a.innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))};return l.a.createElement("form",{className:"contact-form"},l.a.createElement("h2",null,"Contactez-nous"),l.a.createElement("div",{className:"form-content"},l.a.createElement("input",{type:"text",id:"name",name:"name",required:!0,onChange:function(e){return r(e.target.value)},placeholder:"nom *",value:a}),l.a.createElement("input",{type:"text",id:"company",name:"company",onChange:function(e){return m(e.target.value)},placeholder:"soci\xe9t\xe9",value:s}),l.a.createElement("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return E(e.target.value)},placeholder:"t\xe9l\xe9phone",value:p}),l.a.createElement("div",{className:"email-content"},l.a.createElement("label",{id:"not-mail"},"Email non valide"),l.a.createElement("input",{type:"mail",id:"email",name:"email",required:!0,onChange:function(e){return g(e.target.value)},placeholder:"email *",value:h})),l.a.createElement("textarea",{id:"message",name:"message",onChange:function(e){return y(e.target.value)},placeholder:"message *",value:N,required:!0})),l.a.createElement("input",{className:"button hover",type:"submit",value:"Envoyer",onClick:function(e){e.preventDefault();var t=document.getElementById("name"),n=document.getElementById("email"),l=document.getElementById("message"),r=document.querySelector(".form-message");a&&function(){var e=document.getElementById("not-mail");return h.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&N?(t.classList.remove("red"),n.classList.remove("red"),l.classList.remove("red"),w("template_bxxb7xp",{name:a,company:s,phone:p,email:h,message:N})):(r.innerHTML="Merci de remplir correctement les champs requis *",r.style.background="rgb(253, 87, 87)",r.style.opacity="1",a||t.classList.add("error"),h||n.classList.add("error"),N||l.classList.add("error"))}}),l.a.createElement("div",{className:"form-message"}))},h=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"contact"},l.a.createElement(p,null),l.a.createElement(i,null),l.a.createElement(f,null),l.a.createElement("div",{className:"contact-infos"},l.a.createElement("div",{className:"address"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Adresse"),l.a.createElement("p",null," 13 avenue de Guyenne"),l.a.createElement("p",null,"35000 Rennes"))),l.a.createElement("div",{className:"phone"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"T\xe9l\xe9phone"),l.a.createElement(d.CopyToClipboard,{text:"0698133452",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("T\xe9l\xe9phone copi\xe9 !")}},"06 98 13 34 52")))),l.a.createElement("div",{className:"email"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Email"),l.a.createElement(d.CopyToClipboard,{text:"DimitriPaillard.dev@gmail.com",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9 !")}},"DimitriPaillard.dev@gmail.com")))),l.a.createElement(E,null),l.a.createElement("div",{className:"credits"},l.a.createElement("p",null,"Dimitri PAILLARD - 2021"))),l.a.createElement(m,{left:"/project-4"})))},g=function(){var e=["PHP","Javascript","Symfony","React"],t=0,a=0;return Object(n.useEffect)((function(){var n=document.getElementById("text-target");!function l(){setTimeout((function(){t>=e.length?(t=0,a=0,l()):a<e[t].length?(!function(){var l=document.createElement("span");n.appendChild(l),l.classList.add("letter"),l.style.opacity="0",l.style.animation="anim 5s ease forwards",l.textContent=e[t][a],setTimeout((function(){l.remove()}),2e3)}(),a++,l()):(a=0,t++,setTimeout((function(){l()}),2e3))}),80)}()}),[]),l.a.createElement("span",{className:"dynamic-text"},l.a.createElement("span",{className:"simply"},"D\xe9veloppeur Web Junior"),l.a.createElement("span",{id:"text-target"}))},b=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"home"},l.a.createElement(p,null),l.a.createElement(E,null),l.a.createElement("div",{className:"home-main"},l.a.createElement("div",{className:"main-content"},l.a.createElement("h1",null,"PAILLARD Dimitri "),l.a.createElement("h2",null,l.a.createElement(g,null)))),l.a.createElement(m,{right:"/project-1"})))},j=[{id:1,title:"Casta",date:"Janvier 2020",languages:["React","Php","Sass"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-2.jpg",link:"http://www.google.com"},{id:2,title:"Lyon B\xe9ton",date:"Mars 2020",languages:["Symfony","Vue"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-1.jpg",link:"http://www.google.com"},{id:3,title:"Everpost",date:"Avril 2020",languages:["Wordpress","Php","React"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-3.jpg",link:"http://www.google.com"},{id:4,title:"Creative Dev",date:"Juillet 2020",languages:["Vue","Php"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-4.jpg",link:"http://www.google.com"}],N=function(e){var t=Object(n.useState)(j),a=Object(v.a)(t,1)[0][e.projectNumber],r=Math.floor(200*Math.random()+1e3)+"px",c=Math.floor(200*Math.random()+150)+"px",o="scale("+(Math.random()+.7)+")";return l.a.createElement("div",{className:"project-main"},l.a.createElement("div",{className:"project-content"},l.a.createElement("h1",null,a.title),l.a.createElement("p",null,a.date),l.a.createElement("ul",{className:"languages"},a.languages.map((function(e){return l.a.createElement("li",{key:e},e)})))),l.a.createElement("div",{className:"img-content"},l.a.createElement("div",{className:"img-container hover"},l.a.createElement("span",null,l.a.createElement("h3",null,a.title),l.a.createElement("p",null,a.infos)),l.a.createElement("img",{src:a.img,alt:a.title})),l.a.createElement("div",{className:"button-container"},l.a.createElement("a",{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"hover"},l.a.createElement("span",{className:"button"},"Voir le site")))),l.a.createElement("span",{className:"random-circle",style:{left:r,top:c,tranform:o}}))},y=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(p,null),l.a.createElement(i,null),l.a.createElement(N,{projectNumber:0}),l.a.createElement(m,{left:"/",right:"/project-2"})))},w=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(p,null),l.a.createElement(i,null),l.a.createElement(N,{projectNumber:1}),l.a.createElement(m,{left:"/project-1",right:"/project-3"})))},L=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(p,null),l.a.createElement(i,null),l.a.createElement(N,{projectNumber:2}),l.a.createElement(m,{left:"/project-2",right:"/project-4"})))},k=function(){return l.a.createElement("main",null,l.a.createElement(u,null),l.a.createElement("div",{className:"project"},l.a.createElement(p,null),l.a.createElement(i,null),l.a.createElement(N,{projectNumber:3}),l.a.createElement(m,{left:"/project-3",right:"/contact"})))},x=function(){var e=Object(o.h)(),t=Object(o.g)();return Object(n.useEffect)((function(){window.addEventListener("wheel",(function(e){var a=window.location.origin+"/",n=function(a,n){e.wheelDeltaY<0?setTimeout((function(){t.push(a)}),400):e.wheelDeltaY>0&&setTimeout((function(){t.push(n)}),400)};switch(window.location.href.toString()){case a:e.wheelDeltaY<0&&setTimeout((function(){t.push("project-1")}),400);break;case a+"project-1":n("project-2","");break;case a+"project-2":n("project-3","project-1");break;case a+"project-3":n("project-4","project-2");break;case a+"project-4":n("contact","project-3");break;case a+"contact":e.wheelDeltaY>0&&t.push("project-4");break;default:console.log("nothing")}}))}),[t]),l.a.createElement(o.d,{location:e,key:e.pathname},l.a.createElement(o.b,{exact:!0,path:"/",component:b}),l.a.createElement(o.b,{exact:!0,path:"/project-1",component:y}),l.a.createElement(o.b,{exact:!0,path:"/project-2",component:w}),l.a.createElement(o.b,{exact:!0,path:"/project-3",component:L}),l.a.createElement(o.b,{exact:!0,path:"/project-4",component:k}),l.a.createElement(o.b,{exact:!0,path:"/contact",component:h}),l.a.createElement(o.a,{to:"/"}))};a(31);c.a.render(l.a.createElement(s.a,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.46952ccb.chunk.js.map