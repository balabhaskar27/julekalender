(this.webpackJsonpjulekalender=this.webpackJsonpjulekalender||[]).push([[0],{162:function(e,a,t){},164:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(52),c=t.n(r),o=(t(64),t(11)),s=t(58),i=t(12);var m=function(e){var a=e.posts,t=Object(s.a)(Array(24));return l.a.createElement("div",{className:"grid-container luke-bakgrunn"},t.map((function(e,t){var n=a[t],r=t%2===0?"even":"odd";return n?l.a.createElement("div",{key:t,className:"post-element "+r},l.a.createElement(i.b,{className:"link-luke",to:"/luke/"+n.slug.current},l.a.createElement("div",{className:"nummer-".concat(r)},n.title))):l.a.createElement("div",{key:t,className:"post-element disabled"},l.a.createElement("div",{className:"nummer-".concat(r,"-disabled")},t+1))})))},u=t(18),d=t(25),p=t.n(d),v=t(73)({projectId:"jraodywc",dataset:"production",useCdn:!0}),g=t(55),E=t.n(g),b=t(19),f=t.n(b),k=t(47),h=t(51).DateTime,N=p()(v);var y={types:{code:function(e){return l.a.createElement("pre",{"data-language":e.node.language},l.a.createElement("code",null,e.node.code))}}},j=function(e,a,t){var n=l.a.createElement("div",{className:"luke-beskjed"},l.a.createElement("i",null,"Send inn svaret til ",l.a.createElement("a",{href:"mailto:julekalender@offerspill.no?subject=Luke ".concat(t)},"julekalender@offerspill.no")," innen midnatt. Hver l\xf8ste luke gir ett lodd i trekningen om et brett signert av Magnus Carlsen."));if(a){if(e.solution)return l.a.createElement("div",{className:"luke-beskjed"},l.a.createElement("i",null,"Luken er stengt."));n=l.a.createElement("div",{className:"luke-beskjed"},l.a.createElement("i",null,"Luken er stengt. L\xf8sningen dukker snart opp her p\xe5 siden."))}return n};var w=function(e){var a=e.nr,t=e.posts,r=Object(n.useState)("Vis l\xf8sning"),c=Object(o.a)(r,2),s=c[0],i=c[1],m=t.find((function(e){return e.slug.current==a})),d=parseInt(a,10);if(!m)return d>0&&d<25?l.a.createElement("div",{className:"luke-side"},l.a.createElement("h3",{className:"notfound"},"Du m\xe5 nok vente litt.")):l.a.createElement("div",{className:"luke-side"},l.a.createElement("h3",{className:"notfound"},"Denne luken finnes ikke."));var p,v=h.utc().toISO(),g=f.a.duration(f()(v).diff(f()(m.publishedAt)))._data.days>0;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.Helmet,null,l.a.createElement("title",null,"Luke ",d.toString()," \u2013\xa0OSK Julekalender")),l.a.createElement("div",{className:"luke-side"},l.a.createElement("div",{className:"oppgave-del"},l.a.createElement("h1",null,"Luke ",m.title),l.a.createElement("div",{className:"oppgavetekst"},l.a.createElement(k,{blocks:m.body,serializers:y,imageOptions:{w:500},projectId:"jraodywc",dataset:"production"})),j(m,g,d),l.a.createElement("div",null,m.solution?l.a.createElement("div",{className:"l\xf8sningwrapper"},l.a.createElement("a",{onClick:function(){i("Vis l\xf8sning"===s?"Skjul l\xf8sning":"Vis l\xf8sning")},id:"solutionButton",className:"btn btn-primary","data-toggle":"collapse",href:"#l\xf8sning",role:"button","aria-expanded":"false","aria-controls":"collapseExample"},s),l.a.createElement("div",{className:"collapse",id:"l\xf8sning"},l.a.createElement("div",{className:"card card-body"},l.a.createElement(k,{blocks:m.solution,serializers:y,imageOptions:{w:500},projectId:"jraodywc",dataset:"production"})))):null),m.mainImage&&m.mainImage.asset?l.a.createElement("img",{className:"oppgavebilde",src:(p=m.mainImage,N.image(p)).width(400).url()}):null),l.a.createElement(E.a,{className:"partikler",params:{particles:{number:{value:52,density:{enable:!0,value_area:631.3280775270874}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:1.5,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0}})))},O=t(56),I=t(47),S={types:{code:function(e){return l.a.createElement("pre",{"data-language":e.node.language},l.a.createElement("code",null,e.node.code))}}};var _=function(e){Object(O.a)(e);var a=Object(n.useState)({}),t=Object(o.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){v.fetch("*[_type == $type][0]",{type:"about"}).then((function(e){c(e)})).catch((function(e){console.log("err",e),console.error("Oh no, error occured: ",e)}))}),[]),l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,r.header),l.a.createElement("div",{className:"about-body"},l.a.createElement(I,{blocks:r.body,serializers:S,imageOptions:{w:500},projectId:"jraodywc",dataset:"production"})))},x=(t(162),t(57)),A=t.n(x),L=t(6),z=t(51).DateTime;var D=function(){var e=z.utc().toISO(),a=Object(n.useState)([]),t=Object(o.a)(a,2),r=t[0],c=t[1],s='*[_type == $type  && ((publishedAt <= "'.concat(e,'"))]{author, body, mainImage, publishedAt, slug, title, solution}');Object(n.useEffect)((function(){e&&v.fetch(s,{type:"post"}).then((function(e){c(e)})).catch((function(e){console.log("err",e),console.error("Oh no, error occured: ",e)}))}),[]);var d=r.sort((function(e,a){var t=parseInt(e.title,10),n=parseInt(a.title,10);return t<n?-1:t>n?1:0}));return l.a.createElement(i.a,{basename:""},l.a.createElement("div",{className:"App"},l.a.createElement(u.Helmet,null,l.a.createElement("title",null,"OSK Julekalender")),l.a.createElement("div",{className:"main-container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:A.a,height:"50px;"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(i.b,{className:"nav-item nav-link",to:"/"},"Luker")),l.a.createElement("li",null,l.a.createElement(i.b,{className:"nav-item nav-link",to:"/om"},"Om julekalenderen"))))),l.a.createElement(L.c,null,l.a.createElement(L.a,{exact:!0,path:"/"},l.a.createElement(m,{posts:d})),l.a.createElement(L.a,{exact:!0,path:"/om"},l.a.createElement(_,null)),l.a.createElement(L.a,{path:"/luke/:nr",component:function(e){return l.a.createElement(w,{nr:e.match.params.nr,posts:r})}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(163);c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,a,t){e.exports=t.p+"static/media/logo-offer.c4551d30.png"},59:function(e,a,t){e.exports=t(164)},64:function(e,a,t){}},[[59,1,2]]]);
//# sourceMappingURL=main.1e5bc439.chunk.js.map