(this.webpackJsonpjulekalender=this.webpackJsonpjulekalender||[]).push([[0],{156:function(e,a,t){},158:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(50),c=t.n(r),o=(t(62),t(11)),s=t(56),i=t(12);var m=function(e){var a=e.posts,t=Object(s.a)(Array(24));return l.a.createElement("div",{className:"grid-container luke-bakgrunn"},t.map((function(e,t){var n=a[t],r=t%2===0?"even":"odd";return n?l.a.createElement("div",{key:t,className:"post-element "+r},l.a.createElement(i.b,{className:"link-luke",to:"/luke/"+n.slug.current},l.a.createElement("div",{className:"nummer-".concat(r)},n.title))):l.a.createElement("div",{key:t,className:"post-element disabled"},l.a.createElement("div",{className:"nummer-".concat(r,"-disabled")},t+1))})))},u=t(24),d=t.n(u),p=t(67)({projectId:"jraodywc",dataset:"production",useCdn:!0}),v=t(53),g=t.n(v),b=t(18),E=t.n(b),f=t(45),k=t(49).DateTime,h=d()(p);var N={types:{code:function(e){return l.a.createElement("pre",{"data-language":e.node.language},l.a.createElement("code",null,e.node.code))}}},y=function(e,a,t){var n=l.a.createElement("div",{className:"luke-beskjed"},l.a.createElement("i",null,"Send inn svaret til ",l.a.createElement("a",{href:"mailto:julekalender@offerspill.no?subject=Luke ".concat(t)},"julekalender@offerspill.no")," f\xf8r ",t+1,". desember."));if(a){if(e.solution)return l.a.createElement("div",{className:"luke-beskjed"},l.a.createElement("i",null,"Luken er stengt."));n=l.a.createElement("div",{className:"luke-beskjed"},l.a.createElement("i",null,"Luken er stengt. L\xf8sningen dukker snart opp her p\xe5 siden."))}return n};var j=function(e){var a=e.nr,t=e.posts,r=Object(n.useState)("Vis l\xf8sning"),c=Object(o.a)(r,2),s=c[0],i=c[1],m=t.find((function(e){return e.slug.current==a})),u=parseInt(a,10);if(!m)return u>0&&u<25?l.a.createElement("div",{className:"luke-side"},l.a.createElement("h3",{className:"notfound"},"Du m\xe5 nok vente litt.")):l.a.createElement("div",{className:"luke-side"},l.a.createElement("h3",{className:"notfound"},"Denne luken finnes ikke."));var d,p=k.utc().toISO(),v=E.a.duration(E()(p).diff(E()(m.publishedAt)))._data.days>0;return console.log("POST"),console.log(m),l.a.createElement("div",{className:"luke-side"},l.a.createElement("div",{className:"oppgave-del"},l.a.createElement("h1",null,"Luke ",m.title),l.a.createElement("div",{className:"oppgavetekst"},l.a.createElement(f,{blocks:m.body,serializers:N,imageOptions:{w:500},projectId:"jraodywc",dataset:"production"})),y(m,v,u),l.a.createElement("div",null,m.solution?l.a.createElement("div",{className:"l\xf8sningwrapper"},l.a.createElement("a",{onClick:function(){i("Vis l\xf8sning"===s?"Skjul l\xf8sning":"Vis l\xf8sning")},id:"solutionButton",className:"btn btn-primary","data-toggle":"collapse",href:"#l\xf8sning",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},s),l.a.createElement("div",{className:"collapse",id:"l\xf8sning"},l.a.createElement("div",{className:"card card-body"},l.a.createElement(f,{blocks:m.solution,serializers:N,imageOptions:{w:500},projectId:"jraodywc",dataset:"production"})))):null),m.mainImage&&m.mainImage.asset?l.a.createElement("img",{className:"oppgavebilde",src:(d=m.mainImage,h.image(d)).width(400).url()}):null),l.a.createElement(g.a,{className:"partikler",params:{particles:{number:{value:52,density:{enable:!0,value_area:631.3280775270874}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:1.5,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0}}))},w=t(54),O=t(45),I={types:{code:function(e){return l.a.createElement("pre",{"data-language":e.node.language},l.a.createElement("code",null,e.node.code))}}};var _=function(e){Object(w.a)(e);var a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){p.fetch("*[_type == $type][0]",{type:"about"}).then((function(e){c(e)})).catch((function(e){console.log("err",e),console.error("Oh no, error occured: ",e)}))}),[]),l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,r.header),l.a.createElement("div",{className:"about-body"},l.a.createElement(O,{blocks:r.body,serializers:I,imageOptions:{w:500},projectId:"jraodywc",dataset:"production"})))},x=(t(156),t(55)),A=t.n(x),S=t(6),L=t(49).DateTime;var z=function(){var e=L.utc().toISO(),a=Object(n.useState)([]),t=Object(o.a)(a,2),r=t[0],c=t[1],s='*[_type == $type  && ((publishedAt <= "'.concat(e,'"))]{author, body, mainImage, publishedAt, slug, title, solution}');Object(n.useEffect)((function(){e&&p.fetch(s,{type:"post"}).then((function(e){c(e)})).catch((function(e){console.log("err",e),console.error("Oh no, error occured: ",e)}))}),[]);var u=r.sort((function(e,a){var t=parseInt(e.title,10),n=parseInt(a.title,10);return t<n?-1:t>n?1:0}));return l.a.createElement(i.a,{basename:""},l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"main-container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:A.a,height:"50px;"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(i.b,{className:"nav-item nav-link",to:"/"},"Luker")),l.a.createElement("li",null,l.a.createElement(i.b,{className:"nav-item nav-link",to:"/om"},"Om"))))),l.a.createElement(S.c,null,l.a.createElement(S.a,{exact:!0,path:"/"},l.a.createElement(m,{posts:u})),l.a.createElement(S.a,{exact:!0,path:"/om"},l.a.createElement(_,null)),l.a.createElement(S.a,{path:"/luke/:nr",component:function(e){return l.a.createElement(j,{nr:e.match.params.nr,posts:r})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(157);c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e,a,t){e.exports=t.p+"static/media/logo-offer.c4551d30.png"},57:function(e,a,t){e.exports=t(158)},62:function(e,a,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.6b939900.chunk.js.map