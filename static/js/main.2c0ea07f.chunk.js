(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{159:function(t,e,a){},162:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),i=a(46),c=a.n(i),s=a(7),l=a(69),o=a(244),d=a(213),j=a(245),b=a(228),x=a(246),h=a(116),u=a.n(h),g=a(220),p=a(38),m=a(240),v=a(243),O=a(241),f=a(242),k=a(212),y=a(207),S=a(17),w=a(0),C=n.a.forwardRef((function(t,e){return Object(w.jsx)(y.a,Object(p.a)({direction:"up",ref:e},t))}));var V=function(t){var e=t.title,a=t.text,r=t.donotQuite,i=Object(S.f)(),c=n.a.useState(!0),l=Object(s.a)(c,1)[0];return Object(w.jsx)("div",{children:Object(w.jsxs)(m.a,{open:l,TransitionComponent:C,keepMounted:!0,onClose:r,"aria-describedby":"alert-dialog-slide-description",children:[Object(w.jsx)(k.a,{children:e}),Object(w.jsx)(O.a,{children:Object(w.jsx)(f.a,{id:"alert-dialog-slide-description",children:a})}),Object(w.jsxs)(v.a,{children:[Object(w.jsx)(b.a,{onClick:r,children:"Nej"}),Object(w.jsx)(b.a,{onClick:function(){i.push({pathname:"/"})},children:"Ja"})]})]})})},B=a(77),T=a.n(B);function E(t){var e=t.header,a=t.step,n=Object(r.useState)(!1),i=Object(s.a)(n,2),c=i[0],h=i[1];return Object(w.jsxs)("div",{className:"appBarPadder",children:[Object(w.jsx)(d.a,{sx:{flexGrow:1},children:Object(w.jsx)(o.a,{sx:{height:"64px",width:"100%",maxWidth:"853px",left:"50%",transform:"translate(-50%)",bgcolor:"primary.main"},children:Object(w.jsxs)(j.a,{sx:{bgcolor:"primary.main"},children:[Object(w.jsx)(T.a,{sx:{mr:"15px",fontSize:35}}),Object(w.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1,userSelect:"none"},children:e}),a&&Object(w.jsxs)(b.a,{color:"inherit",children:[" ",a]}),Object(w.jsx)(g.a,{title:"Avsluta \xf6vningen",children:Object(w.jsx)(x.a,{onClick:function(){h(!0)},edge:"end",color:"inherit","aria-label":"close",children:Object(w.jsx)(u.a,{sx:{fontSize:35}})})})]})})}),c&&Object(w.jsx)(V,{title:"\xc4r du s\xe4ker att du vill avsluta \xf6vningen?",text:"Avslutar du nu kommer ditt resultat kommer inte sparas och du f\xe5r b\xf6rja om fr\xe5n b\xf6rjan n\xe4sta g\xe5ng",option1:"Nej",option2:"Ja",donotQuite:function(){h(!1),console.log("K\xf6rs")}})]})}var A=a(236),N=n.a.forwardRef((function(t,e){return Object(w.jsx)(y.a,Object(p.a)({direction:"up",ref:e},t))}));var W=function(t){var e=t.title,a=t.text,r=t.onYes,i=t.option1,c=t.option2,l=n.a.useState(!0),o=Object(s.a)(l,2),d=o[0],j=o[1],x=function(){j(!1)};return Object(w.jsx)("div",{children:Object(w.jsxs)(m.a,{open:d,TransitionComponent:N,keepMounted:!0,onClose:x,"aria-describedby":"alert-dialog-slide-description",children:[Object(w.jsx)(k.a,{children:e}),Object(w.jsx)(O.a,{children:Object(w.jsx)(f.a,{id:"alert-dialog-slide-description",children:a})}),Object(w.jsxs)(v.a,{children:[Object(w.jsx)(b.a,{onClick:x,children:i}),Object(w.jsx)(b.a,{onClick:r||x,children:c})]})]})})},F=a(247),L=a(78),I=a.n(L);var D=function(){var t=Object(S.f)();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(b.a,{variant:"contained",color:"primary","aria-label":"N\xe4sta",startIcon:Object(w.jsx)(I.a,{}),onClick:function(){t.goBack()},sx:{float:"left",mb:"15px",mt:"45px",mr:"15px"},children:"Tillbaka"})})},z=a(47),P=a.n(z),R=a(215),H=a(222);function M(t){var e=t.values,a=t.nrsToPick,n=t.next,i=Object(r.useState)(new Array(e.length).fill(!1)),c=Object(s.a)(i,2),o=c[0],j=c[1],x=Object(r.useState)(0),h=Object(s.a)(x,2),u=h[0],g=h[1],p=Object(r.useState)(!1),m=Object(s.a)(p,2),v=m[0],O=m[1],f=Object(r.useState)(!1),k=Object(s.a)(f,2),y=k[0],C=k[1],V=Object(R.a)("(max-width:322px)");Object(r.useEffect)((function(){var t=0;o.forEach((function(e,a){e&&(t+=1)})),g(t),O(t>=a)}),[o]);var B=Object(S.f)(),T=function(){var t=[];o.forEach((function(a,r){a&&t.push(e[r])})),B.push({pathname:n,state:t})};return Object(w.jsxs)(d.a,{sx:{overflow:"hidden"},children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(F.a,{variant:"determinate",value:100/a*u,color:"secondary",sx:{position:"fixed",top:"64px",width:"100%",maxWidth:"854px",left:"50%",transform:"translate(-50%, 0)",padding:"0px",zIndex:100,height:15}}),Object(w.jsx)(A.a,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:"100%","& ul":{padding:0}},subheader:Object(w.jsx)("li",{}),children:e.map((function(t,e){var a=t.title,r=t.desc;return Object(w.jsx)("li",{children:Object(w.jsxs)("div",{className:o[e]?"picked":"value-list-item",children:[Object(w.jsx)(H.a,{color:"default",sx:{"& .MuiSvgIcon-root":{fontSize:30},position:"absolute",right:"15px"},id:"custom-checkbox-".concat(e),title:a,checked:o[e],onChange:function(){return function(t){var e=t.id,a=(t.title,o.map((function(t,a){return a===e?!t:t})));v&&o[e]?(j(a),C(!1)):v?C(!0):(j(a),C(!1))}({id:e,title:a})}}),Object(w.jsx)(d.a,{sx:{mt:"15px","&:hover":{transform:"scale(1.01)"}},children:Object(w.jsxs)("label",{htmlFor:"custom-checkbox-".concat(e),children:[Object(w.jsx)(l.a,{variant:"h3",sx:{padding:"15px"},children:e+1+". "+a+" "}),Object(w.jsx)(l.a,{variant:"body1",sx:{padding:"15px",pt:"0px"},children:r})]})})]})},e)}))}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)(d.a,{sx:{transform:V?"scale(0.9)":null,width:"100%"},children:[Object(w.jsx)(D,{}),v&&Object(w.jsx)(b.a,{variant:"contained",color:"primary","aria-label":"Backa",endIcon:Object(w.jsx)(P.a,{}),onClick:T,sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:"N\xe4sta"}),u<a&&Object(w.jsxs)(b.a,{variant:"contained",disabled:"true",color:"success","aria-label":"Backa",endIcon:Object(w.jsx)(P.a,{}),onClick:T,sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:["V\xe4lj ",a-u," till"]})]})]}),y&&Object(w.jsx)(W,{title:"Du har valt tio v\xe4rderingar",text:"V\xe4lj bort en v\xe4rdering om du vill v\xe4lja en ny",option2:"Okej"})]})}var G=a(237),K=a(216);var J=function(t){return console.log(t.text),Object(w.jsx)("div",{children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(l.a,{variant:"h2",gutterBottom:!0,align:"center",sx:{mt:"30px",mb:"5px"},children:t.text}),Object(w.jsx)(K.a,{sx:{width:"75%",mx:"auto",mb:"15px"}})]})})},U=[{id:1,title:"Accepterande",desc:"Vara \xf6ppen, till\xe5tande och tillfreds med mig sj\xe4lv, andra, livet och mina k\xe4nslor.",pts:0},{id:2,title:"\xc4ventyrlig",desc:"Str\xe4va efter och skapa nya, sp\xe4nnande erfarenheter.",pts:0},{id:3,title:"Sj\xe4lvs\xe4ker",desc:"Lugnt, r\xe4ttvist och respektfullt st\xe5 upp f\xf6r mina r\xe4ttigheter och v\xe5ga be om det jag vill ha.",pts:0},{id:4,title:"Autentisk",desc:"Vara genuin, \xe4kta och sann mot mig sj\xe4lv.",pts:0},{id:5,title:"Omt\xe4nksam",desc:"Aktivt och medvetet ta hand om mig sj\xe4lv, andra och milj\xf6n.",pts:0},{id:6,title:"Medk\xe4nsla och sj\xe4lvmedk\xe4nsla ",desc:"Vara v\xe4nlig mot mig sj\xe4lv och andra n\xe4r livet \xe4r sv\xe5rt.",pts:0},{id:7,title:"Samarbetsvillig",desc:"Vara villig att assistera, hj\xe4lpa och arbeta med andra.",pts:0},{id:8,title:"Mod",desc:"V\xe5ga st\xe5 kvar n\xe4r jag m\xf6ter fara, risk eller hot.",pts:0},{id:9,title:"Kreativ",desc:"Vara fantasifull och uppfinningsrik.",pts:0},{id:10,title:"Nyfiken",desc:"Ha en \xf6ppen, villig och intresserad inst\xe4llning n\xe4r det handlar om att utforska och uppt\xe4cka.",pts:0},{id:11,title:"Uppmuntrande",desc:"St\xf6dja, inspirera och bel\xf6na beteenden som jag ser som positiva.",pts:0},{id:12,title:"Uttrycksfull",desc:"F\xf6rmedla mina tankar och k\xe4nslor genom det jag s\xe4ger och g\xf6r.",pts:0},{id:13,title:"Fokuserad",desc:"Fokusera p\xe5 och engagera mig i det jag g\xf6r.",pts:0},{id:14,title:"R\xe4ttvis",desc:"Agera r\xe4tt och r\xe4ttvist mot mig sj\xe4lv och andra.",pts:0},{id:15,title:"Flexibel",desc:"Vara villig till och ha f\xf6rm\xe5gan att anpassa mig till f\xf6r\xe4nderliga omst\xe4ndigheter.",pts:0},{id:16,title:"V\xe4nlig",desc:"Vara varm, \xf6ppen, omsorgsfull och k\xe4rleksfull mot andra.",pts:0},{id:17,title:"F\xf6rl\xe5tande",desc:"Kunna sl\xe4ppa agg och bitterhet mot andra och mig sj\xe4lv.",pts:0},{id:18,title:"Tacksam",desc:"Kunna uppskatta och se det jag redan har.",pts:0},{id:19,title:"Hj\xe4lpsam",desc:"Ge till, hj\xe4lpa och assistera andra m\xe4nniskor.",pts:0},{id:20,title:"\xc4rlig",desc:"Vara \xe4rlig, sanningsenlig och uppriktig mot mig sj\xe4lv och andra.",pts:0},{id:21,title:"Sj\xe4lvst\xe4ndig",desc:"Sj\xe4lv v\xe4lja vad jag g\xf6r och hur jag lever mitt liv.",pts:0},{id:22,title:"Arbetsam",desc:"Arbeta h\xe5rt och vara flitig.",pts:0},{id:23,title:"Sn\xe4ll",desc:"Visa h\xe4nsyn, vara hj\xe4lpsam och bry sig om mig sj\xe4lv och andra.",pts:0},{id:24,title:"K\xe4rleksfull",desc:"Vara k\xe4rleksfull och tillgiven, visa att jag verkligen bry mig om mig sj\xe4lv och andra.",pts:0},{id:25,title:"N\xe4rvarande",desc:"Vara fullt n\xe4rvarande och engagerad i vad jag \xe4n g\xf6r.",pts:0},{id:26,title:"\xd6ppen",desc:"V\xe5ga visa vem jag \xe4r, vad jag t\xe4nker och k\xe4nner.",pts:0},{id:27,title:"V\xe4lordnad",desc:"Vara ordentlig och organiserad.",pts:0},{id:28,title:"Ih\xe4rdig",desc:"Vara villig att forts\xe4tta \xe4ven n\xe4r problem eller sv\xe5righeter uppst\xe5r.",pts:0},{id:29,title:"Lekfull",desc:"Ha roligt, leva med ett sinne f\xf6r humor och kunna vara l\xe4ttsam.",pts:0},{id:30,title:"Skyddande",desc:"Se till att jag sj\xe4lv och andra \xe4r s\xe4kra och trygga.",pts:0},{id:31,title:"Respektfull",desc:"Behandla mig sj\xe4lv och andra med omsorg och h\xe4nsyn.",pts:0},{id:32,title:"Ansvarsfull",desc:"Vara trov\xe4rdig, p\xe5litlig och ta ansvar f\xf6r mina handlingar.",pts:0},{id:33,title:"Skicklig",desc:"G\xf6ra saker p\xe5 ett bra s\xe4tt, anv\xe4nda min kunskap, erfarenhet och tr\xe4ning optimalt.",pts:0},{id:34,title:"St\xf6djande",desc:"Vara hj\xe4lpsam, uppmuntrande och tillg\xe4nglig f\xf6r mig sj\xe4lv och andra.",pts:0},{id:35,title:"P\xe5litlig",desc:"Vara lojal, \xe4rlig, trogen, uppriktig och ansvarsfull.",pts:0},{id:36,title:"F\xf6rtroende",desc:"Tro p\xe5 \xe4rlighet, uppriktighet och f\xf6rm\xe5gan hos andra.",pts:0}];function q(){console.log(U);var t=Object(r.useState)(!1),e=Object(s.a)(t,2),a=e[0],n=e[1];return Object(r.useEffect)((function(){n(!0)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{header:"V\xe4rderinskompassen",step:"Steg 1 av 3"}),Object(w.jsx)(y.a,{direction:"up",in:a,mountOnEnter:!0,unmountOnExit:!0,children:Object(w.jsxs)(G.a,{sx:{backgroundColor:"white"},children:[Object(w.jsx)(J,{text:"V\xe4lj dina v\xe4rderingsord"}),Object(w.jsx)(l.a,{variant:"body1",children:"Nedan finner du en lista med 36 v\xe4rderingsord med en kort f\xf6rklaring. L\xe4s igenom listan och v\xe4lj de 10 v\xe4rderingar som k\xe4nns viktigast f\xf6r dig. Har du sv\xe5rt att v\xe4lja? Testa att st\xe4lla dig fr\xe5gan: med vilka ord hade jag velat att den som k\xe4nnde mig b\xe4st hade beskrivigt mig med p\xe5 min egna begravning?"}),Object(w.jsx)("br",{}),U&&Object(w.jsx)(M,{values:U,nrsToPick:10,next:"/valj5"})]})})]})}function Q(){var t=Object(S.g)().state;console.log(t);var e=Object(r.useState)(!1),a=Object(s.a)(e,2),n=a[0],i=a[1];return Object(r.useEffect)((function(){i(!0)}),[]),Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{header:"V\xe4rderinskompassen",step:"2 av 3"}),Object(w.jsx)(y.a,{direction:"up",in:n,mountOnEnter:!0,unmountOnExit:!0,children:Object(w.jsxs)(G.a,{sx:{backgroundColor:"white"},children:[Object(w.jsx)(J,{text:"V\xe4lj dina v\xe4rderingsord"}),Object(w.jsx)(l.a,{variant:"body1",children:"V\xe4lj nu ut de fem absolut viktigaste v\xe4rderingarna av de tio du valde tidigare."}),Object(w.jsx)("br",{}),U&&Object(w.jsx)(M,{values:t,nrsToPick:5,next:"/valueSorter"})]})})]})}a(159);var Y=a(122),X=a(248),Z=a(251),$=a(250),_=a(249),tt=a(252);function et(t){var e=t.text,a=t.rubrik,r=t.linkTo,n=(t.state,t.stateColor),i=t.isActive,c=t.img;console.log(n);var s=Object(S.f)(),o=function(){s.push({pathname:r})};return Object(w.jsxs)(X.a,{sx:{bgcolor:"background.paper",boxShadow:5,mx:"auto",transform:"scale(1)"},children:[Object(w.jsxs)(_.a,{onClick:o,children:[Object(w.jsx)($.a,{component:"img",height:"100",image:c,alt:"Kompass"}),Object(w.jsxs)(Z.a,{sx:{padding:"8px"},children:[Object(w.jsx)(l.a,{gutterBottom:!0,variant:"body1",component:"div",sx:{fontWeight:"bold",fontSize:"1,4rem"},children:a}),Object(w.jsx)(l.a,{variant:"body1",color:"text.secondary",children:e})]})]}),Object(w.jsx)(tt.a,{children:Object(w.jsx)(b.a,{fullWidth:!0,onClick:o,variant:"contained",color:n,disabled:!i,children:i?"STARTA \xd6VNINGEN":"kommer snart"})})]})}var at=a(229),rt=a(79),nt=a.n(rt),it=a(225),ct=a(232);function st(){var t=n.a.useState(null),e=Object(s.a)(t,2),a=e[0],r=e[1],i=Boolean(a),c=function(){r(null)};return Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{sx:{flexGrow:1},children:Object(w.jsx)(o.a,{position:"static",children:Object(w.jsxs)(j.a,{children:[Object(w.jsx)(x.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},id:"basic-button","aria-controls":i?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:function(t){r(t.currentTarget)},children:Object(w.jsx)(nt.a,{})}),Object(w.jsxs)(it.a,{id:"basic-menu",anchorEl:a,open:i,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(w.jsx)(ct.a,{onClick:c,children:"Profil"}),Object(w.jsx)(ct.a,{onClick:c,children:"Konto"}),Object(w.jsx)(ct.a,{onClick:c,children:"Logga ut"})]}),Object(w.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Bli Fri"}),Object(w.jsx)(b.a,{color:"inherit",children:"Login"})]})})})})}var lt=function(t){var e=Object(r.useState)(null),a=Object(s.a)(e,2),n=a[0],i=a[1],c=Object(r.useState)(!0),l=Object(s.a)(c,2),o=l[0],d=l[1],j=Object(r.useState)(null),b=Object(s.a)(j,2),x=b[0],h=b[1];return Object(r.useEffect)((function(){var e=new AbortController;return fetch(t,{signal:e.signal}).then((function(t){if(!t.ok)throw Error("Kunde inte h\xe4mta datan");return t.json()})).then((function(t){d(!1),i(t),h(null)})).catch((function(t){"AbortError"===t.name?console.log("fetch aborted"):(d(!1),h(t.message))})),function(){return e.abort()}}),[t]),{data:n,isPending:o,error:x}},ot=a(221),dt=a(238),jt=a(118),bt=a.n(jt),xt=a(119),ht=a.n(xt),ut=a.p+"static/media/compass.b14c0499.jpg",gt=a.p+"static/media/darkSky.54492b3c.jpg";function pt(t){var e=t.children,a=t.value,r=t.index,n=Object(Y.a)(t,["children","value","index"]);return Object(w.jsx)("div",Object(p.a)(Object(p.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:a===r&&Object(w.jsx)(d.a,{sx:{p:3},children:Object(w.jsx)(l.a,{children:e})})}))}function mt(t){return{id:"simple-tab-".concat(t),"aria-controls":"simple-tabpanel-".concat(t)}}function vt(){var t=lt("http://localhost:8000/user").data;console.log(t);var e=n.a.useState(0),a=Object(s.a)(e,2),r=a[0],i=a[1];return Object(w.jsxs)("div",{className:"",children:[Object(w.jsx)(st,{}),Object(w.jsxs)(d.a,{sx:{width:"100%"},children:[Object(w.jsx)(d.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(w.jsxs)(ot.a,{value:r,onChange:function(t,e){i(e)},"aria-label":"basic tabs example",centered:!0,children:[Object(w.jsx)(dt.a,Object(p.a)({icon:Object(w.jsx)(T.a,{}),label:"V\xe4rderingar"},mt(0))),Object(w.jsx)(dt.a,Object(p.a)({icon:Object(w.jsx)(bt.a,{}),label:"M\xe5l"},mt(1))),Object(w.jsx)(dt.a,Object(p.a)({icon:Object(w.jsx)(ht.a,{}),label:"Loggbok"},mt(2)))]})}),Object(w.jsx)(pt,{value:r,index:0,children:Object(w.jsxs)(at.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:[Object(w.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(w.jsx)(et,{text:"Ett verktyg f\xf6r att hitta dina v\xe4rderingar. Hitta svar p\xe5 fr\xe5gor som: hur vill du vara som m\xe4nniska? Vad viktigt f\xf6r dig?",rubrik:"\xd6vning 1: V\xe4rdekompassen",linkTo:"/varderingar-information",isActive:!0,img:ut})}),Object(w.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(w.jsx)(et,{text:"Forts\xe4tt f\xf6rdjupa dig i v\xe4rderingar, nu utifr\xe5n livsomr\xe5den. L\xe4gger du din tid och energi p\xe5 r\xe4tt saker?",rubrik:"Dina livsomr\xe5den",img:gt})})," ",Object(w.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(w.jsx)(et,{text:"H\xe4r presenteras n\xe5gra verktyg f\xf6r att hj\xe4lpa  dig att leva mer efter dina v\xe4rderingar",rubrik:"Lev som du \xf6nskar",img:gt})})]})}),Object(w.jsx)(pt,{value:r,index:1,children:Object(w.jsx)(at.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Object(w.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(w.jsx)(et,{text:"Vi jobbar h\xe5rt f\xf6r att f\xe5 detta f\xe4rdigt",rubrik:"Inte f\xe4rdigt",img:gt})})})}),Object(w.jsx)(pt,{value:r,index:2,children:Object(w.jsx)(at.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Object(w.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(w.jsx)(et,{text:"Kommer snart",rubrik:"Vi har inte kommit s\xe5 h\xe4r l\xe5ngt \xe4nnu!",linkTo:"/values1",img:gt})})})})]}),Object(w.jsx)("div",{className:"padderTop",children:Object(w.jsx)(G.a,{})})]})}var Ot=a(23);function ft(){var t=Object(S.h)().id;console.log("k\xf6rs");var e=Object(S.f)(),a=lt("http://localhost:3000/valueList/"+t),r=a.data,n=a.error,i=a.isPending;return Object(w.jsxs)("div",{children:[i&&Object(w.jsx)("div",{children:" Laddar.... "}),n&&Object(w.jsxs)("div",{children:[" ",n," "]}),r&&Object(w.jsxs)("artical",{children:[Object(w.jsxs)("h2",{children:[" ",r.title]}),Object(w.jsxs)("p",{children:[" ",r.desc]})]}),Object(w.jsx)("button",{onClick:function(){fetch("http://localhost:3000/valueList/"+r.id,{method:"DELETE"}).then((function(){return e.push("/")}))},children:" Delete "})]})}function kt(){var t=Object(r.useState)(" "),e=Object(s.a)(t,2),a=e[0],n=e[1],i=Object(r.useState)(" "),c=Object(s.a)(i,2),l=c[0],o=c[1],d=Object(r.useState)("Fritid"),j=Object(s.a)(d,2),b=j[0],x=j[1],h=Object(r.useState)(!1),u=Object(s.a)(h,2),g=u[0],p=u[1],m=Object(S.f)(),v=function(t){t.preventDefault();var e={title:a,desc:l,categori:b};p(!0),fetch("http://localhost:3000/valueList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){console.log(e),console.log("nytt v\xe4rde tillagt"),p(!1),m.push("/")}))};return Object(w.jsxs)("div",{className:"create",children:[Object(w.jsx)("h2",{children:" Du \xe4r p\xe5 create!"}),Object(w.jsxs)("form",{onSubmit:v,children:[Object(w.jsx)("lable",{children:"V\xe4rdering:"}),Object(w.jsx)("input",{type:"text",required:!0,value:a,onChange:function(t){return n(t.target.value)}}),Object(w.jsx)("lable",{children:"Beskrivning:"}),Object(w.jsx)("input",{type:"text",required:!0,value:l,onChange:function(t){return o(t.target.value)}}),Object(w.jsxs)("select",{value:b,onChange:function(t){return x(t.target.value)},children:[Object(w.jsx)("option",{value:"Arbete",children:" Arbete "}),Object(w.jsx)("option",{value:"Fritid",children:" Fritid "})]}),!g&&Object(w.jsx)("button",{onChange:function(t){return v(t)},children:"L\xe4gg till v\xe4rdering"}),g&&Object(w.jsx)("button",{disable:!0,onChange:function(t){return v(t)},children:"Laddar upp v\xe4rdering"}),Object(w.jsxs)("p",{children:[" ",a]}),Object(w.jsxs)("p",{children:[" ",l]}),Object(w.jsxs)("p",{children:[" ",b]})]})]})}var yt=function(){var t=Object(S.f)();return Object(w.jsx)("div",{children:Object(w.jsx)(b.a,{variant:"contained",onClick:function(){t.push({pathname:"/"})},sx:{mb:"25px",mt:"25px"},children:"Tillbaka till startsidan"})})};function St(){var t=n.a.useState(null),e=Object(s.a)(t,2),a=e[0],r=e[1],i=Boolean(a),c=function(){r(null)};return Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{sx:{flexGrow:1},children:Object(w.jsx)(o.a,{position:"static",children:Object(w.jsxs)(j.a,{children:[Object(w.jsx)(x.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},id:"basic-button","aria-controls":i?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:function(t){r(t.currentTarget)},children:Object(w.jsx)(nt.a,{})}),Object(w.jsxs)(it.a,{id:"basic-menu",anchorEl:a,open:i,onClose:c,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(w.jsx)(ct.a,{onClick:c,children:"Profil"}),Object(w.jsx)(ct.a,{onClick:c,children:"Konto"}),Object(w.jsx)(ct.a,{onClick:c,children:"Logga ut"})]}),Object(w.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Bli Fri"}),Object(w.jsx)(b.a,{color:"inherit",children:"Login"})]})})})})}var wt=a(217);var Ct=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(St,{}),Object(w.jsx)(J,{text:"Oj, n\xe5got som verkat g\xe5tt fel"}),Object(w.jsxs)(wt.a,{textAlign:"center",children:[Object(w.jsx)(l.a,{children:" Vi ber om urs\xe4kt, men sidan \xe4r ny och vi h\xe5ller p\xe5 att reda ut alla buggar. "}),Object(w.jsx)(yt,{})," "]})]})},Vt=a(14),Bt=a(120),Tt=a.n(Bt),Et=a(208);var At=function(t){var e=t.valueArray;console.log(e);var a=Object(S.f)(),n=Object(r.useState)(e),i=Object(s.a)(n,1)[0],c=Object(r.useState)(0),o=Object(s.a)(c,2),j=o[0],x=o[1],h=Object(r.useState)(1),u=Object(s.a)(h,2),g=u[0],p=u[1],m=Object(r.useState)(2),v=Object(s.a)(m,2),O=v[0],f=v[1],k=Object(r.useState)(!1),C=Object(s.a)(k,2),V=C[0],B=C[1],T=Object(r.useState)(0),E=Object(s.a)(T,2),A=E[0],N=E[1],L=Object(r.useState)(0),I=Object(s.a)(L,2),z=I[0],H=I[1],M=Object(r.useState)(!1),U=Object(s.a)(M,2),q=U[0],Q=U[1],Y=Object(r.useState)([]),X=Object(s.a)(Y,2),Z=X[0],$=X[1],_=Object(r.useState)(!1),tt=Object(s.a)(_,2),et=tt[0],at=tt[1],rt=Object(R.a)("(max-width:322px)");Object(r.useEffect)((function(){B(!0),nt()}),[]);var nt=function(){var t=0;e.forEach((function(e,a){t+=a})),console.log("clicks :"+t),H(t)},it=function(t){i.forEach((function(e,a){t===e.id&&(e.pts=e.pts+1)}))},ct=function(t){var e=t.index,a=t.id;$((function(t){return[].concat(Object(Vt.a)(t),[a])})),console.log("cardsSorted"),console.log(A),console.log("totalClicks"),console.log(z),console.log(A),A!==z&&N(A+1),et?Q(!0):(it(a),O!==i.length?e+1===i.length?(console.log("arr slut"),f(O+1),p(O),x(j+1),console.log("showtop / startvalue"+O)):p(e+1):at(!0))};return Object(w.jsxs)("div",{children:[Object(w.jsx)(F.a,{variant:"determinate",value:Math.round(100/z)*A,color:"secondary",sx:{position:"fixed",top:"64px",width:"100%",maxWidth:"854px",left:"50%",transform:"translate(-50%, 0)",padding:"0px",zIndex:100,height:15}}),Object(w.jsx)(y.a,{direction:"left",in:V,children:Object(w.jsxs)(G.a,{children:[Object(w.jsx)(J,{text:"Prioritera din v\xe4rdering"}),Object(w.jsxs)(l.a,{variant:"body1",align:"center",sx:{mb:"25px",mt:"25px"},children:[" ","Om du enbart kunde leva efter en av de tv\xe5 v\xe4rderingarna, vilken hade du valt?"]}),Object(w.jsx)(d.a,{textAlign:"center",sx:{mt:"15px",mb:"15px"},children:Object(w.jsx)(b.a,{disabled:0===A,variant:"outlined",startIcon:Object(w.jsx)(Tt.a,{}),sx:{justifyContent:"center",margin:"auto"},onClick:function(){return function(){console.log("cardsSorted"),console.log(A),N(A-1);var t=Z[Z.length-1];if(Z.pop(),et)return it(t),void at(!1);i.forEach((function(e,a){t===e.id&&(e.pts=e.pts-1)})),O===g+1?(console.log("\xe4r p\xe5 f\xf6rsta kortet i top, dvs om vi m\xe5ste \xe4ndra showTop"),f(O-1),x(j-1),p(i.length-1),console.log("-------------"),console.log(O),console.log(i.length)):g>=0&&p(g-1)}()},children:"\xc5ngra val"})}),Object(w.jsx)("div",{className:"relative",children:Object(w.jsx)(d.a,{children:i.map((function(t,e){var a=t.title,r=t.desc,n=t.id;return Object(w.jsx)(Et.a,{timeout:700,in:j===e,children:Object(w.jsxs)(d.a,{className:e===j?"show":"hidden",onClick:function(){return function(t){t.index;var e=t.id;if(console.log("cardsSorted"),console.log(A),$((function(t){return[].concat(Object(Vt.a)(t),[e])})),A!==z&&(console.log("setcardsSorted(cardsSorted + 1);"),N(A+1)),et)Q(!0);else{if(it(e),O===i.length)return console.log("done"),console.log(i),void at(!0);g+1===i.length?(f(O+1),x(j+1),p(O)):p(g+1)}}({index:e,id:n})},sx:{display:"table",mx:"auto",margin:"auto",boxShadow:2,width:"100%",height:"200px",maxWidth:"450px",backgroundColor:"white",borderRadius:"6px",userSelect:"none",bgcolor:"primary.main",color:"white","&:hover":{transform:"scale(1.02)"}},children:[et&&Object(w.jsxs)(l.a,{variant:"h3",color:"white",sx:{textAlign:"center",paddingBottom:"5px",p:"25px",pb:"10px",color:"white",padding:"10px",mt:"45px"},children:[" ",'Du \xe4r nu f\xe4rdig med \xf6vningen! Tryck p\xe5 "Se resultat" knappen f\xf6r att se ditt resultat.']}),Object(w.jsxs)(d.a,{className:et&&"hiddenCard",children:[Object(w.jsx)(l.a,{variant:"h2",color:"white",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",pb:"10px",mt:"5px",color:"white"},children:a}),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(K.a,{className:"white",sx:{width:"85%",mx:"auto"}})}),Object(w.jsx)(l.a,{variant:"body1",align:"center",sx:{p:"30px",pt:"15px",fontSize:"1.1rem"},children:r})]})]},"topCard"+n.toString())})}))})}),Object(w.jsxs)(d.a,{className:et&&"hiddenCard",children:[Object(w.jsxs)(K.a,{sx:{width:"50%",mt:"30px",mb:"30px",mx:"auto"},children:[" ",Object(w.jsx)(l.a,{variant:"h3",margin:"auto",gutterBottom:!0,children:"Eller.."})]}),Object(w.jsxs)("div",{className:"relative",children:[" ",i.map((function(t,e){var a=t.title,r=t.desc,n=t.id;return Object(w.jsx)(Et.a,{timeout:500,in:g===e,children:Object(w.jsxs)(d.a,{className:g===e?"show":"hidden",onClick:function(){return ct({index:e,id:n})},sx:{display:"table",mx:"auto",transform:"scale(1)",margin:"auto",boxShadow:2,borderColor:"grey.500",width:"95%",height:"200px",maxWidth:"450px",backgroundColor:"white",borderRadius:"6px",userSelect:"none",bgcolor:"primary.main",color:"white","&:hover":{transform:"scale(1.02)"}},children:[Object(w.jsx)(l.a,{variant:"h2",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",pb:"10px",mt:"5px",color:"white"},children:a}),Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(K.a,{className:"white",sx:{width:"85%",mx:"auto"}})}),Object(w.jsx)(l.a,{variant:"body1",align:"center",sx:{p:"30px",pt:"15px",fontSize:"1.1rem"},children:r})]},"bottomCard"+n.toString())})}))]})]}),Object(w.jsxs)(d.a,{sx:{transform:rt?"scale(0.9)":null,width:"100%"},children:[Object(w.jsx)(D,{}),et&&Object(w.jsx)(b.a,{variant:"contained",color:"primary","aria-label":"Backa",endIcon:Object(w.jsx)(P.a,{}),onClick:function(){a.push({pathname:"/valueResults",state:i})},sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:"Se Resultat"}),!et&&Object(w.jsxs)(b.a,{variant:"contained",disabled:"true",color:"success","aria-label":"Backa",endIcon:Object(w.jsx)(P.a,{}),sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:[z-A," kort kvar"]})]})]})}),q&&Object(w.jsx)(W,{title:"Bra jobbat!",text:"Du \xe4r nu klar med v\xe4rderingskompassen, tryck p\xe5 knappen SE RESULTAT f\xf6r att se ditt resultat",option2:"Okej!"})]})};var Nt=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(J,{text:"Oj, n\xe5got som verkat g\xe5tt fel"}),"  ",Object(w.jsx)(yt,{})]})};function Wt(t){var e=Object(S.g)().state;return console.log(e),console.log(t),Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{step:"Steg 3 av 3",header:"Rangordnare"}),e?Object(w.jsx)(At,{valueArray:e}):Object(w.jsx)(Nt,{})]})}var Ft=a(226),Lt=a(121),It=a.n(Lt),Dt=a(230),zt={0:"V\xe4ldigt D\xe5ligt",1:"Ganska D\xe5ligt",2:"R\xe4tt bra",3:"Bra",4:"Mycket Bra",5:"V\xe4ldigt Bra"};var Pt=function(t){var e=Object(r.useState)(!1),a=Object(s.a)(e,2),i=a[0],c=a[1],o=n.a.useState(3),j=Object(s.a)(o,2),b=j[0],x=j[1],h=n.a.useState(-1),u=Object(s.a)(h,2),g=u[0],p=u[1],m=n.a.useState(0),v=Object(s.a)(m,2),O=v[0],f=v[1];Object(r.useEffect)((function(){V(),c(!0)}),[]);var k=Object(S.g)().state.sort((function(t,e){return e.pts-t.pts})),C={values:k,state:1.1},V=function(){fetch("http://localhost:3000/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}).then((function(){console.log(k),console.log("resultat sparat")}))};return Object(w.jsx)(y.a,{direction:"left",in:i,mountOnEnter:!0,unmountOnExit:!0,children:Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{header:"V\xe4rderinskompassen",step:"3 av 3"}),Object(w.jsxs)(G.a,{maxWidth:"md",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)(l.a,{variant:"h2",gutterBottom:!0,align:"center",sx:{mt:"30px"},children:"Dina fem viktigaste v\xe4rderingar"}),Object(w.jsx)(K.a,{}),Object(w.jsx)(l.a,{variant:"body1",gutterBottom:!0,align:"center",sx:{mb:"25px",mt:"25px"},children:"Bra jobbat, ta ett djupt andetag och tacka dig sj\xe4lv, du har precis gjort n\xe5got viktigt och meningsfullt f\xf6r din egna skull. Ta nu en noggran titt p\xe5 dina v\xe4rderingar."}),Object(w.jsx)("div",{className:"noStyleList",children:k.map((function(t,e){var a=t.title,r=t.desc;t.pts;return Object(w.jsxs)(d.a,{onClick:function(){return function(t){console.log(t),f(t)}(e)},className:O===e?"transform90":"not active",sx:{display:"table",mx:"auto",transform:"scale(1)",margin:"auto",mt:"15px",boxShadow:5,borderColor:"grey.500",width:"95%",height:"200px",maxWidth:"450px",bgcolor:"primary.main",color:"white",borderRadius:"6px",mb:"25px","&:hover":{transform:"scale(1.05)"}},children:[Object(w.jsxs)(Dt.a,{sx:{position:"absolute",bgcolor:"white",color:"primary.main",float:"left",width:30,height:30,mt:"15px",ml:"15px",fontWeight:"bold"},children:[Object(w.jsxs)(l.a,{variant:"body1",sx:{fontWeight:"bold",userSelect:"none"},children:[" ",e+1]})," "]}),Object(w.jsxs)("li",{children:[Object(w.jsx)(l.a,{variant:"h2",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",ml:"30px",mr:"30px",pb:"5px",mt:"5px",color:"white",userSelect:"none"},children:a}),Object(w.jsx)(K.a,{className:"white",sx:{width:"65%",mx:"auto"}}),Object(w.jsx)(l.a,{variant:"body1",sx:{p:"15px",fontSize:"1.1rem",userSelect:"none",ml:"25px",mr:"25px"},children:" Jag vill vara "+r})]},e)]},e)}))}),Object(w.jsx)("br",{}),Object(w.jsx)(l.a,{variant:"h3",text:"center",sx:{textAlign:"center"},gutterBottom:!0,children:"Hur bra tycker du att du lever efter dessa fem v\xe4rderingar idag?"}),Object(w.jsxs)(d.a,{sx:{mx:"auto",width:200,display:"flex",alignItems:"center",height:"40px"},children:[Object(w.jsx)(Ft.a,{name:"hover-feedback",value:b,precision:1,onChange:function(t,e){x(e)},onChangeActive:function(t,e){p(e)},emptyIcon:Object(w.jsx)(It.a,{style:{opacity:.55},fontSize:"inherit"})}),null!==b&&Object(w.jsx)(d.a,{sx:{ml:2},children:zt[-1!==g?g:b]})]}),Object(w.jsx)(l.a,{variant:"h3",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",pb:"10px",mt:"5px",mr:"45px",userSelect:"none"},children:"F\xf6rsta \xf6vningen klar!"}),Object(w.jsx)(K.a,{}),Object(w.jsx)(l.a,{variant:"body1",gutterBottom:!0,sx:{pt:"10px"},children:"I n\xe4sta \xf6vning kommer vi forts\xe4tta f\xf6rdjupa oss i v\xe4rderingar. d\xe5 kommer vi kolla p\xe5 hur dina v\xe4rderingar ser ut i olika livsomr\xe5den och hur du v\xe4rderar de olika delarna av livet."})]}),Object(w.jsxs)(d.a,{textAlign:"center",children:[" ",Object(w.jsx)(yt,{})," "]})]})]})})},Rt=a(235),Ht=a(227),Mt=a(218),Gt=a(239);var Kt=function(){var t=Object(r.useState)(!0),e=Object(s.a)(t,2),a=e[0],n=e[1];Object(r.useEffect)((function(){n(!0)}),[]);var i=Object(S.f)(),c=Object(R.a)("(max-width:445px)");return console.log(c),Object(w.jsx)(y.a,{direction:"left",in:a,mountOnEnter:!0,unmountOnExit:!0,children:Object(w.jsxs)("div",{children:[Object(w.jsx)(E,{header:"V\xe4rdekompassen"}),Object(w.jsxs)(G.a,{maxWidth:"md",children:[Object(w.jsx)(J,{text:"Vad \xe4r en v\xe4rdering?"}),Object(w.jsxs)(l.a,{variant:"body1",sx:{fontWeight:"bold",lineHeight:1.7,mt:"25px"},gutterBottom:!0,children:["V\xe4rderingar representerar det du innersta inne \xf6nskar. Dom st\xe5r f\xf6r och \xe4r beskriver hur du vill agerade i v\xe4rlden. V\xe4rderingar handlar inte om vad du vill uppn\xe5, ha eller prestera, utan representerar kvaliteter som du \xf6nskade att du kunde inf\xf6rliva i dina handlingar. Vad vill jag att mitt liv ska handla om? Hur vill jag behandla mig sj\xe4lv och andra m\xe4nniskor? Vilken typ av m\xe4nniska vill jag vara?",Object(w.jsx)("br",{})," "]}),Object(w.jsxs)(Rt.a,{elevation:0,sx:{display:"flex",flexWrap:"wrap",m:"25px",mt:"10px",mx:"auto",p:"15px",width:c?"90%":"45%",float:c?null:"right",bgcolor:"primary.main",color:"white"},children:[Object(w.jsx)(l.a,{textAlign:"center",sx:{fontWeight:"bold"},children:"Att ha insikt i och leva efter sina v\xe4rderingar hj\xe4lper dig att: "}),Object(w.jsx)(K.a,{sx:{bgcolor:"white",width:"90%",mx:"auto",mt:"5px"},children:" "}),Object(w.jsx)(l.a,{variant:"body1",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Minska nedst\xe4mdhet "}),Object(w.jsx)("li",{children:" Skapa mening och motivation"}),Object(w.jsx)("li",{children:" Ta dig igenom sv\xe5ra situationer "}),Object(w.jsx)("li",{children:"Underl\xe4ttar sv\xe5ra val "})]})})]}),Object(w.jsxs)(l.a,{variant:"body1",sx:{lineHeight:1.7,width:c?"100%":"50%"},gutterBottom:!0,children:["Man kan j\xe4mf\xf6ra v\xe4rderingar med en kompass; du kan aldrig komma fram till \u201cnorr\u201d, men du kan st\xe4ndigt vandra norrut. V\xe4rderingar ger dig en riktigt att str\xe4va mot; en kompasskurs i livet.",Object(w.jsx)("br",{})]}),Object(w.jsx)(l.a,{variant:"body1",sx:{lineHeight:1.7,width:c?"100%":"50%"},gutterBottom:!0,children:"Till skillnad fr\xe5n ett m\xe5l g\xe5r det aldrig att uppn\xe5 eller bli klar med en v\xe4rdering. Som exempel kan man ta m\xe5let att gifta sig, j\xe4mf\xf6rt med v\xe4rderingen att vara en \xf6ppen, omt\xe4nksam och k\xe4rleksfull partner."}),Object(w.jsx)(l.a,{variant:"h3",sx:{mt:"15px"},gutterBottom:!0,children:"Hur fungerar V\xe4rdekompassen?"}),Object(w.jsx)(K.a,{}),Object(w.jsx)(l.a,{variant:"body1",sx:{lineHeight:1.7,mt:"10px"},gutterBottom:!0,children:"V\xe4rdekompassen \xe4r uppbyggd i tre steg. I det f\xf6rsta steget kommer du v\xe4lja ut tio v\xe4rderingsord ur v\xe5r v\xe4rderingslista. I det andra steget ska du v\xe4lja mellan dina v\xe4rderingar f\xf6r att hitta de fem v\xe4rderingar som \xe4r absolut viktigast f\xf6r dig. N\xe4r du har gjort detta kommer du f\xe5 se ditt resultat och f\xe5 m\xf6jlighet att l\xe4sa mer om dina valda v\xe4rderingar. Du kommer s\xe4kert m\xe4rka n\xe4r du l\xe4ser v\xe5r v\xe4rderingslista att olika v\xe4rderingarkan ha olika vikt i olika delar av livet; vissa v\xe4rderingar \xe4r viktiga p\xe5 arbetet, andra i relationer och \xe5terigen andra p\xe5 fritiden. Detta \xe4 n\xe5got vi kommer jobba vidare med i n\xe4sta etapp."}),Object(w.jsxs)(A.a,{sx:{display:"flex",flexWrap:"wrap",mt:c?"50px":"110px",mb:c?"50px":"110px",width:c?"90%":"45%",float:c?null:"left"},children:[Object(w.jsxs)(Ht.a,{children:[Object(w.jsx)(Gt.a,{children:Object(w.jsx)(Dt.a,{sx:{bgcolor:"primary.main",color:"white",fontWeight:"bold"},children:"1"})}),Object(w.jsx)(Mt.a,{primary:"V\xe4lj v\xe4rderingar",secondary:"V\xe4lj ut de 10 v\xe4rderingsord som k\xe4nns viktigast  f\xf6r dig ur v\xe5r v\xe4rderingslista."})]}),Object(w.jsxs)(Ht.a,{children:[Object(w.jsx)(Gt.a,{children:Object(w.jsx)(Dt.a,{sx:{bgcolor:"primary.main",color:"white",fontWeight:"bold"},children:"2"})}),Object(w.jsx)(Mt.a,{primary:"Rangordna din v\xe4rderingar",secondary:"St\xe4ll ord mot ord f\xf6r att rangordna din lista."})]}),Object(w.jsxs)(Ht.a,{children:[Object(w.jsx)(Gt.a,{children:Object(w.jsx)(Dt.a,{sx:{bgcolor:"primary.main",color:"white",fontWeight:"bold"},children:"3"})}),Object(w.jsx)(Mt.a,{primary:"Se ditt resultat",secondary:"Titta nog igenom din topp fem lista och  fundera \xf6ver dina v\xe4rderingar"})]})]}),Object(w.jsxs)(d.a,{sx:{width:c?"90%":"45%",float:c?null:"left",padding:"15px",mt:"25px",mb:"25px"},children:[Object(w.jsx)(l.a,{variant:"h3",sx:{},gutterBottom:!0,children:"Ett sista tips"}),Object(w.jsx)(K.a,{}),Object(w.jsx)(l.a,{variant:"body1",sx:{lineHeight:1.7,mt:"10px"},gutterBottom:!0,children:"T\xe4nka p\xe5 att dina v\xe4rderingar ska vara dina egna. V\xe4rderingar tappar sitt v\xe4rde om dom \xe4r baserad p\xe5 hur du tror att andra vill att du ska vara. Det finns inte r\xe4tt och fel, bra eller d\xe5liga v\xe4rderingar. Dina v\xe4rderingar ska vara dina egna, f\xf6r att dom ska kunna fungera v\xe4gvisande i livet och f\xf6r att dem ska bli meningsfulla f\xf6r dig \xe4r det viktigt att dom kommer fr\xe5n dig. Du beh\xf6ver aldrig kunna f\xf6rklara varf\xf6r en v\xe4rdering \xe4r viktig f\xf6r dig; precis som att du aldrig beh\xf6ver ha ett argument f\xf6r varf\xf6r bl\xe5tt \xe4r din favoritf\xe4rg, det \xe4r ditt tycke och din smak."})]}),Object(w.jsx)(b.a,{variant:"contained",color:"primary","aria-label":"Tillbaka",startIcon:Object(w.jsx)(I.a,{}),onClick:function(){i.goBack()},sx:{ml:"15px",mb:"15px"},children:"Tillbaka"}),Object(w.jsx)(b.a,{variant:"contained",color:"primary","aria-label":"N\xe4sta",endIcon:Object(w.jsx)(P.a,{}),onClick:function(){i.push({pathname:"/valj10varder"})},sx:{float:"right",mr:"15px",mb:"15px"},children:"N\xe4sta"})]})]})})},Jt=a(98),Ut=a(233),qt=(a(161),a(234)),Qt=a(52);function Yt(){var t=Object(S.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[t]),null}var Xt=Object(Jt.a)({palette:{primary:{main:Qt.a[800]},secondary:{main:Qt.a[200]}},typography:{fontFamily:"Montserrat",fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:800,h1:{fontSize:"2rem",fontWeight:"bolder"},h2:{fontSize:"1.6rem",fontWeight:"bold"},h3:{fontSize:"1,3rem",fontWeight:"bold"},h4:{fontSize:"1rem",fontWeight:"bold"},button:{fontWeight:"800"}}});var Zt=function(){return document.title="Bli Fri",Object(w.jsxs)(n.a.Fragment,{children:[Object(w.jsx)(qt.a,{}),Object(w.jsxs)(Ot.a,{basename:"/test-react",children:[Object(w.jsx)(Yt,{}),Object(w.jsx)("div",{className:"appWrapper",children:Object(w.jsx)("div",{className:"app",children:Object(w.jsx)(Ut.a,{theme:Xt,children:Object(w.jsxs)(S.c,{children:[Object(w.jsx)(S.a,{exact:!0,path:"/",children:Object(w.jsx)(vt,{})}),Object(w.jsx)(S.a,{exact:!0,path:"/varderingar-information",children:Object(w.jsx)(Kt,{})}),Object(w.jsx)(S.a,{exact:!0,path:"/valj10varder",children:Object(w.jsx)(q,{})}),Object(w.jsx)(S.a,{exact:!0,path:"/valj5",children:Object(w.jsx)(Q,{})}),Object(w.jsx)(S.a,{exact:!0,path:"/valueSorter",children:Object(w.jsx)(Wt,{})}),Object(w.jsx)(S.a,{exact:!0,path:"/valueResults",children:Object(w.jsx)(Pt,{})}),Object(w.jsx)(S.a,{path:"/createValue",children:Object(w.jsx)(kt,{})}),Object(w.jsx)(S.a,{path:"/values/:id",children:Object(w.jsx)(ft,{})}),Object(w.jsx)(S.a,{path:"*",children:Object(w.jsx)(Ct,{})})]})})})})]})]})},$t=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,253)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),r(t),n(t),i(t),c(t)}))};c.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(Zt,{})}),document.getElementById("root")),$t()}},[[162,1,2]]]);
//# sourceMappingURL=main.2c0ea07f.chunk.js.map