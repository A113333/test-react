(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{188:function(t,e,a){},368:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),i=a(46),s=a.n(i),c=a(7),l=a(73),o=function(t){var e=Object(r.useState)(null),a=Object(c.a)(e,2),n=a[0],i=a[1],s=Object(r.useState)(!0),l=Object(c.a)(s,2),o=l[0],d=l[1],j=Object(r.useState)(null),b=Object(c.a)(j,2),h=b[0],x=b[1];return Object(r.useEffect)((function(){var e=new AbortController;return fetch(t,{signal:e.signal}).then((function(t){if(!t.ok)throw Error("Kunde inte h\xe4mta datan");return t.json()})).then((function(t){d(!1),i(t),x(null)})).catch((function(t){"AbortError"===t.name?console.log("fetch aborted"):(d(!1),x(t.message))})),function(){return e.abort()}}),[t]),{data:n,isPending:o,error:h}},d=a(446),j=a(445),b=a(447),h=a(437),x=a(448),u=a(140),g=a.n(u),p=a(429),m=a(37),v=a(453),O=a(456),f=a(454),k=a(455),y=a(422),S=a(416),w=a(16),C=a(0),V=n.a.forwardRef((function(t,e){return Object(C.jsx)(S.a,Object(m.a)({direction:"up",ref:e},t))}));var B=function(t){var e=t.title,a=t.text,r=t.donotQuite,i=Object(w.f)(),s=n.a.useState(!0),l=Object(c.a)(s,2),o=l[0];return l[1],Object(C.jsx)("div",{children:Object(C.jsxs)(v.a,{open:o,TransitionComponent:V,keepMounted:!0,onClose:r,"aria-describedby":"alert-dialog-slide-description",children:[Object(C.jsx)(y.a,{children:e}),Object(C.jsx)(f.a,{children:Object(C.jsx)(k.a,{id:"alert-dialog-slide-description",children:a})}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{onClick:r,children:"Nej"}),Object(C.jsx)(h.a,{onClick:function(){i.push({pathname:"/"})},children:"Ja"})]})]})})};function N(t){var e=t.header,a=t.step,n=Object(r.useState)(!1),i=Object(c.a)(n,2),s=i[0],o=i[1];return Object(C.jsxs)("div",{className:"appBarPadder",children:[Object(C.jsx)(j.a,{sx:{flexGrow:1},children:Object(C.jsx)(d.a,{sx:{height:"64px",width:"100%",maxWidth:"853px",left:"50%",transform:"translate(-50%)",bgcolor:"primary.main"},children:Object(C.jsxs)(b.a,{sx:{bgcolor:"primary.main"},children:[Object(C.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1,userSelect:"none"},children:e}),Object(C.jsxs)(h.a,{color:"inherit",children:[" Steg ",a]}),Object(C.jsx)(p.a,{title:"Avsluta \xf6vningen",children:Object(C.jsx)(x.a,{onClick:function(){o(!0)},size:"medium",edge:"end",color:"inherit","aria-label":"close",children:Object(C.jsx)(g.a,{})})})]})})}),s&&Object(C.jsx)(B,{title:"\xc4r du s\xe4ker att du vill avsluta \xf6vningen?",text:"Avslutar du nu kommer ditt resultat kommer inte sparas och du f\xe5r b\xf6rja om fr\xe5n b\xf6rjan n\xe4sta g\xe5ng",option1:"Nej",option2:"Ja",donotQuite:function(){o(!1),console.log("K\xf6rs")}})]})}var T=a(449),A=n.a.forwardRef((function(t,e){return Object(C.jsx)(S.a,Object(m.a)({direction:"up",ref:e},t))}));var W=function(t){var e=t.title,a=t.text,r=t.onYes,i=t.option1,s=t.option2,l=n.a.useState(!0),o=Object(c.a)(l,2),d=o[0],j=o[1],b=function(){j(!1)};return Object(C.jsx)("div",{children:Object(C.jsxs)(v.a,{open:d,TransitionComponent:A,keepMounted:!0,onClose:b,"aria-describedby":"alert-dialog-slide-description",children:[Object(C.jsx)(y.a,{children:e}),Object(C.jsx)(f.a,{children:Object(C.jsx)(k.a,{id:"alert-dialog-slide-description",children:a})}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(h.a,{onClick:b,children:i}),Object(C.jsx)(h.a,{onClick:r||b,children:s})]})]})})},E=a(457),F=a(86),L=a.n(F);var I=function(){var t=Object(w.f)();return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(h.a,{variant:"contained",color:"primary","aria-label":"N\xe4sta",startIcon:Object(C.jsx)(L.a,{}),onClick:function(){t.goBack()},sx:{float:"left",mb:"15px",mt:"45px",mr:"15px"},children:"Tillbaka"})})},D=a(47),R=a.n(D),z=a(425),H=a(431);function M(t){var e=t.values,a=Object(r.useState)(new Array(e.length).fill(!1)),n=Object(c.a)(a,2),i=n[0],s=n[1],o=Object(r.useState)(0),d=Object(c.a)(o,2),b=d[0],x=d[1],u=Object(r.useState)(!1),g=Object(c.a)(u,2),p=g[0],m=g[1],v=Object(r.useState)(!1),O=Object(c.a)(v,2),f=O[0],k=O[1],y=Object(r.useState)(!0),S=Object(c.a)(y,2),V=(S[0],S[1],Object(z.a)("(max-width:322px)"));Object(r.useEffect)((function(){var t=0;i.forEach((function(e,a){e&&(t+=1)})),x(t),m(t>=10)}),[i]);var B=Object(w.f)(),N=function(){var t=[];i.forEach((function(a,r){a&&t.push(e[r])})),window.scrollTo({top:0}),console.log("scroll k\xf6rs"),B.push({pathname:"/valuesorter",state:t})};return Object(C.jsxs)(j.a,{sx:{overflow:"hidden"},children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(E.a,{variant:"determinate",value:10*b,color:"secondary",sx:{position:"fixed",top:"64px",width:"100%",maxWidth:"854px",left:"50%",transform:"translate(-50%, 0)",padding:"0px",zIndex:100,height:15}}),Object(C.jsx)(T.a,{sx:{width:"100%",bgcolor:"background.paper",position:"relative",overflow:"auto",maxHeight:"100%","& ul":{padding:0}},subheader:Object(C.jsx)("li",{}),children:e.map((function(t,e){var a=t.title,r=t.desc;return Object(C.jsx)("li",{children:Object(C.jsxs)("div",{className:i[e]?"picked":"value-list-item",children:[Object(C.jsx)(H.a,{color:"default",sx:{"& .MuiSvgIcon-root":{fontSize:30},position:"absolute",right:"36px",verticalAlign:"middle"},id:"custom-checkbox-".concat(e),title:a,checked:i[e],onChange:function(){return function(t){var e=t.id,a=(t.title,i.map((function(t,a){return a===e?!t:t})));p&&i[e]?(s(a),k(!1)):p?k(!0):(s(a),k(!1))}({id:e,title:a})}}),Object(C.jsx)(j.a,{sx:{mt:"15px","&:hover":{transform:"scale(1.01)"}},children:Object(C.jsxs)("label",{htmlFor:"custom-checkbox-".concat(e),children:[Object(C.jsx)(l.a,{variant:"h3",children:e+1+". "+a+" "}),Object(C.jsx)(l.a,{variant:"body1",children:r})]})})]})},e)}))}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)(j.a,{sx:{transform:V?"scale(0.9)":null,width:"100%"},children:[Object(C.jsx)(I,{}),p&&Object(C.jsx)(h.a,{variant:"contained",color:"primary","aria-label":"Backa",endIcon:Object(C.jsx)(R.a,{}),onClick:N,sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:"N\xe4sta"}),b<10&&Object(C.jsxs)(h.a,{variant:"contained",disabled:"true",color:"success","aria-label":"Backa",endIcon:Object(C.jsx)(R.a,{}),onClick:N,sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:["V\xe4lj ",10-b," till"]})]})]}),f&&Object(C.jsx)(W,{title:"Du har valt tio v\xe4rderingar",text:"V\xe4lj bort en v\xe4rdering om du vill v\xe4lja en ny",option2:"Okej"})]})}var P=a(450);function K(t){var e=t.text,a=[{id:1,title:"Accepterande",desc:"Vara \xf6ppen, till\xe5tande och tillfreds med mig sj\xe4lv, andra, livet och mina k\xe4nslor.",pts:0},{id:2,title:"\xc4ventyrlig",desc:"Str\xe4va efter och skapa nya, sp\xe4nnande erfarenheter.",pts:0},{id:3,title:"Sj\xe4lvs\xe4ker",desc:"Lugnt, r\xe4ttvist och respektfullt st\xe5 upp f\xf6r mina r\xe4ttigheter och v\xe5ga be om det jag vill ha.",pts:0},{id:4,title:"Autentisk",desc:"Vara genuin, \xe4kta och sann mot mig sj\xe4lv.",pts:0},{id:5,title:"Omt\xe4nksam",desc:"Aktivt och medvetet ta hand om mig sj\xe4lv, andra och milj\xf6n.",pts:0},{id:6,title:"Medk\xe4nsla och sj\xe4lvmedk\xe4nsla ",desc:"Vara v\xe4nlig mot mig sj\xe4lv och andra n\xe4r livet \xe4r sv\xe5rt.",pts:0},{id:7,title:"Samarbetsvillig",desc:"Vara villig att assistera, hj\xe4lpa och arbeta med andra.",pts:0},{id:8,title:"Mod",desc:"V\xe5ga st\xe5 kvar n\xe4r jag m\xf6ter fara, risk eller hot.",pts:0},{id:9,title:"Kreativ",desc:"Vara fantasifull och uppfinningsrik.",pts:0},{id:10,title:"Nyfiken",desc:"Ha en \xf6ppen, villig och intresserad inst\xe4llning n\xe4r det handlar om att utforska och uppt\xe4cka.",pts:0},{id:11,title:"Uppmuntrande",desc:"St\xf6dja, inspirera och bel\xf6na beteenden som jag ser som positiva.",pts:0},{id:12,title:"Uttrycksfull",desc:"F\xf6rmedla mina tankar och k\xe4nslor genom det jag s\xe4ger och g\xf6r.",pts:0},{id:13,title:"Fokuserad",desc:"Fokusera p\xe5 och engagera mig i det jag g\xf6r.",pts:0},{id:14,title:"R\xe4ttvis",desc:"Agera r\xe4tt och r\xe4ttvist mot mig sj\xe4lv och andra.",pts:0},{id:15,title:"Flexibel",desc:"Vara villig till och ha f\xf6rm\xe5gan att anpassa mig till f\xf6r\xe4nderliga omst\xe4ndigheter.",pts:0},{id:16,title:"V\xe4nlig",desc:"Vara varm, \xf6ppen, omsorgsfull och k\xe4rleksfull mot andra.",pts:0},{id:17,title:"F\xf6rl\xe5tande",desc:"Kunna sl\xe4ppa agg och bitterhet mot andra och mig sj\xe4lv.",pts:0},{id:18,title:"Tacksam",desc:"Kunna uppskatta och se det jag redan har.",pts:0},{id:19,title:"Hj\xe4lpsam",desc:"Ge till, hj\xe4lpa och assistera andra m\xe4nniskor.",pts:0},{id:20,title:"\xc4rlig",desc:"Vara \xe4rlig, sanningsenlig och uppriktig mot mig sj\xe4lv och andra.",pts:0},{id:21,title:"Sj\xe4lvst\xe4ndig",desc:"Sj\xe4lv v\xe4lja vad jag g\xf6r och hur jag lever mitt liv.",pts:0},{id:22,title:"Arbetsam",desc:"Arbeta h\xe5rt och vara flitig.",pts:0},{id:23,title:"Sn\xe4ll",desc:"Visa h\xe4nsyn, vara hj\xe4lpsam och bry sig om mig sj\xe4lv och andra.",pts:0},{id:24,title:"K\xe4rleksfull",desc:"Vara k\xe4rleksfull och tillgiven, visa att jag verkligen bry mig om mig sj\xe4lv och andra.",pts:0},{id:25,title:"N\xe4rvarande",desc:"Vara fullt n\xe4rvarande och engagerad i vad jag \xe4n g\xf6r.",pts:0},{id:26,title:"\xd6ppen",desc:"V\xe5ga visa vem jag \xe4r, vad jag t\xe4nker och k\xe4nner.",pts:0},{id:27,title:"V\xe4lordnad",desc:"Vara ordentlig och organiserad.",pts:0},{id:28,title:"Ih\xe4rdig",desc:"Vara villig att forts\xe4tta \xe4ven n\xe4r problem eller sv\xe5righeter uppst\xe5r.",pts:0},{id:29,title:"Lekfull",desc:"Ha roligt, leva med ett sinne f\xf6r humor och kunna vara l\xe4ttsam.",pts:0},{id:30,title:"Skyddande",desc:"Se till att jag sj\xe4lv och andra \xe4r s\xe4kra och trygga.",pts:0},{id:31,title:"Respektfull",desc:"Behandla mig sj\xe4lv och andra med omsorg och h\xe4nsyn.",pts:0},{id:32,title:"Ansvarsfull",desc:"Vara trov\xe4rdig, p\xe5litlig och ta ansvar f\xf6r mina handlingar.",pts:0},{id:33,title:"Skicklig",desc:"G\xf6ra saker p\xe5 ett bra s\xe4tt, anv\xe4nda min kunskap, erfarenhet och tr\xe4ning optimalt.",pts:0},{id:34,title:"St\xf6djande",desc:"Vara hj\xe4lpsam, uppmuntrande och tillg\xe4nglig f\xf6r mig sj\xe4lv och andra.",pts:0},{id:35,title:"P\xe5litlig",desc:"Vara lojal, \xe4rlig, trogen, uppriktig och ansvarsfull.",pts:0},{id:36,title:"F\xf6rtroende",desc:"Tro p\xe5 \xe4rlighet, uppriktighet och f\xf6rm\xe5gan hos andra.",pts:0}],n=Object(r.useState)(!1),i=Object(c.a)(n,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){o(!0)}),[]),Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{header:"V\xe4rderinskompassen",step:"2 av 3"}),Object(C.jsx)(S.a,{direction:"left",in:s,mountOnEnter:!0,unmountOnExit:!0,children:Object(C.jsxs)(P.a,{sx:{backgroundColor:"white"},children:[Object(C.jsx)(l.a,{variant:"h1",children:" V\xe4lj dina v\xe4rderingsord "}),Object(C.jsxs)(l.a,{variant:"body1",children:[e,"Nedan finner du en lista med 36 v\xe4rderingsord med en kort f\xf6rklaring. L\xe4s igenom listan och v\xe4lj de 10 v\xe4rderingar som k\xe4nns viktigast f\xf6r dig. Har du sv\xe5rt att v\xe4lja? Testa att st\xe4lla dig fr\xe5gan: med vilka ord hade jag velat att den som k\xe4nnde mig b\xe4st hade beskrivigt mig med p\xe5 min egna begravning?"]}),Object(C.jsx)("br",{}),a&&Object(C.jsx)(M,{values:a})]})})]})}a(188);var G=a(141),J=a.n(G),U=a(434),q=a(438);function Q(){var t=n.a.useState(null),e=Object(c.a)(t,2),a=e[0],r=e[1],i=Boolean(a),s=function(){r(null)};return Object(C.jsx)("div",{children:Object(C.jsx)(j.a,{sx:{flexGrow:1},children:Object(C.jsx)(d.a,{position:"static",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(x.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},id:"basic-button","aria-controls":i?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:function(t){r(t.currentTarget)},children:Object(C.jsx)(J.a,{})}),Object(C.jsxs)(U.a,{id:"basic-menu",anchorEl:a,open:i,onClose:s,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(C.jsx)(q.a,{onClick:s,children:"Profil"}),Object(C.jsx)(q.a,{onClick:s,children:"Konto"}),Object(C.jsx)(q.a,{onClick:s,children:"Logga ut"})]}),Object(C.jsx)(l.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Bli Fri"}),Object(C.jsx)(h.a,{color:"inherit",children:"Login"})]})})})})}var Y=a(149),X=a(458),Z=a(461),$=a(460),_=a(459),tt=a(462);a(190);function et(t){var e=t.text,a=t.rubrik,r=t.linkTo,n=(t.state,t.stateColor),i=t.isActive,s=t.img;console.log(n);var c=Object(w.f)(),o=function(){c.push({pathname:r})};return Object(C.jsxs)(X.a,{sx:{bgcolor:"background.paper",boxShadow:5,mx:"auto",transform:"scale(1)"},children:[Object(C.jsxs)(_.a,{onClick:o,children:[Object(C.jsx)($.a,{component:"img",height:"100",image:s,alt:"Kompass"}),Object(C.jsxs)(Z.a,{sx:{padding:"8px"},children:[Object(C.jsx)(l.a,{gutterBottom:!0,variant:"body1",component:"div",sx:{fontWeight:"bold",fontSize:"1,4rem"},children:a}),Object(C.jsx)(l.a,{variant:"body1",color:"text.secondary",children:e})]})]}),Object(C.jsx)(tt.a,{children:Object(C.jsx)(h.a,{fullWidth:!0,onClick:o,variant:"contained",color:n,disabled:!i,children:i?"STARTA \xd6VNINGEN":"kommer snart"})})]})}var at=a(439),rt=a(430),nt=a(451),it=a(109),st=a.n(it),ct=a(144),lt=a.n(ct),ot=a(145),dt=a.n(ot);function jt(t){var e=t.children,a=t.value,r=t.index,n=Object(Y.a)(t,["children","value","index"]);Object(z.a)("(max-width:322px)");return Object(C.jsx)("div",Object(m.a)(Object(m.a)({role:"tabpanel",hidden:a!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},n),{},{children:a===r&&Object(C.jsx)(j.a,{sx:{p:3},children:Object(C.jsx)(l.a,{children:e})})}))}function bt(t){return{id:"simple-tab-".concat(t),"aria-controls":"simple-tabpanel-".concat(t)}}function ht(){var t=o("http://localhost:8000/user"),e=t.data;t.isPending,t.error;console.log(e);var a=n.a.useState(0),r=Object(c.a)(a,2),i=r[0],s=r[1];return Object(C.jsxs)("div",{className:"",children:[Object(C.jsx)(Q,{}),Object(C.jsxs)(j.a,{sx:{width:"100%"},children:[Object(C.jsx)(j.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(C.jsxs)(rt.a,{value:i,onChange:function(t,e){s(e)},"aria-label":"basic tabs example",centered:!0,children:[Object(C.jsx)(nt.a,Object(m.a)({icon:Object(C.jsx)(st.a,{}),label:"V\xe4rderingar"},bt(0))),Object(C.jsx)(nt.a,Object(m.a)({icon:Object(C.jsx)(lt.a,{}),label:"M\xe5l"},bt(1))),Object(C.jsx)(nt.a,Object(m.a)({icon:Object(C.jsx)(dt.a,{}),label:"Loggbok"},bt(2)))]})}),Object(C.jsx)(jt,{value:i,index:0,children:Object(C.jsxs)(at.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:[Object(C.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(C.jsx)(et,{text:"F\xe5 hj\xe4lp att hitta din kurs; hur vill du vara som m\xe4nniska? Vad viktigt f\xf6r dig?",rubrik:"\xd6vning 1: V\xe4rdekompassen",linkTo:"/values1",isActive:!0,img:"public/images/compass.jpg"})}),Object(C.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(C.jsx)(et,{text:"Forts\xe4tt f\xf6rdjupa dig i v\xe4rderingar, nu utifr\xe5n livsomr\xe5den. L\xe4gger du din tid och energi p\xe5 r\xe4tt saker?",rubrik:"Dina livsomr\xe5den",img:"/images/map.jpg"})})," ",Object(C.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(C.jsx)(et,{text:"H\xe4r presenteras n\xe5gra verktyg f\xf6r att hj\xe4lpa  dig att leva mer efter dina v\xe4rderingar",rubrik:"Lev som du \xf6nskar",img:"/images/water.jpg"})})]})}),Object(C.jsx)(jt,{value:i,index:1,children:Object(C.jsx)(at.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Object(C.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(C.jsx)(et,{text:"Vi jobbar h\xe5rt f\xf6r att f\xe5 detta f\xe4rdigt",rubrik:"Inte f\xe4rdigt",img:"/images/darkSky.jpg"})})})}),Object(C.jsx)(jt,{value:i,index:2,children:Object(C.jsx)(at.a,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Object(C.jsx)(at.a,{item:!0,xs:12,sm:4,md:4,children:Object(C.jsx)(et,{text:"Kommer snart",rubrik:"Vi har inte kommit s\xe5 h\xe4r l\xe5ngt \xe4nnu!",linkTo:"/values1",img:"/images/darkSky.jpg"})})})})]}),Object(C.jsx)("div",{className:"padderTop",children:Object(C.jsx)(P.a,{})})]})}var xt=a(22);function ut(){var t=Object(w.h)().id;console.log("k\xf6rs");var e=Object(w.f)(),a=o("http://localhost:3000/valueList/"+t),r=a.data,n=a.error,i=a.isPending;return Object(C.jsxs)("div",{children:[i&&Object(C.jsx)("div",{children:" Laddar.... "}),n&&Object(C.jsxs)("div",{children:[" ",n," "]}),r&&Object(C.jsxs)("artical",{children:[Object(C.jsxs)("h2",{children:[" ",r.title]}),Object(C.jsxs)("p",{children:[" ",r.desc]})]}),Object(C.jsx)("button",{onClick:function(){fetch("http://localhost:3000/valueList/"+r.id,{method:"DELETE"}).then((function(){return e.push("/")}))},children:" Delete "})]})}function gt(){var t=Object(r.useState)(" "),e=Object(c.a)(t,2),a=e[0],n=e[1],i=Object(r.useState)(" "),s=Object(c.a)(i,2),l=s[0],o=s[1],d=Object(r.useState)("Fritid"),j=Object(c.a)(d,2),b=j[0],h=j[1],x=Object(r.useState)(!1),u=Object(c.a)(x,2),g=u[0],p=u[1],m=Object(w.f)(),v=function(t){t.preventDefault();var e={title:a,desc:l,categori:b};p(!0),fetch("http://localhost:3000/valueList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){console.log(e),console.log("nytt v\xe4rde tillagt"),p(!1),m.push("/")}))};return Object(C.jsxs)("div",{className:"create",children:[Object(C.jsx)("h2",{children:" Du \xe4r p\xe5 create!"}),Object(C.jsxs)("form",{onSubmit:v,children:[Object(C.jsx)("lable",{children:"V\xe4rdering:"}),Object(C.jsx)("input",{type:"text",required:!0,value:a,onChange:function(t){return n(t.target.value)}}),Object(C.jsx)("lable",{children:"Beskrivning:"}),Object(C.jsx)("input",{type:"text",required:!0,value:l,onChange:function(t){return o(t.target.value)}}),Object(C.jsxs)("select",{value:b,onChange:function(t){return h(t.target.value)},children:[Object(C.jsx)("option",{value:"Arbete",children:" Arbete "}),Object(C.jsx)("option",{value:"Fritid",children:" Fritid "})]}),!g&&Object(C.jsx)("button",{onChange:function(t){return v(t)},children:"L\xe4gg till v\xe4rdering"}),g&&Object(C.jsx)("button",{disable:!0,onChange:function(t){return v(t)},children:"Laddar upp v\xe4rdering"}),Object(C.jsxs)("p",{children:[" ",a]}),Object(C.jsxs)("p",{children:[" ",l]}),Object(C.jsxs)("p",{children:[" ",b]})]})]})}function pt(){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:" Oj, n\xe5got har blivit fel!"}),Object(C.jsx)("p",{children:" Sidan kan inte hittas"}),Object(C.jsx)(xt.b,{to:"/",children:" Tillbaka till startsidan "})]})}var mt=a(14),vt=a(426),Ot=a(146),ft=a.n(Ot),kt=a(418);var yt=function(t){var e=t.valueArray,a=Object(z.a)("(max-width:322px)");console.log(e);var n=Object(w.f)(),i=Object(r.useState)(e),s=Object(c.a)(i,2),o=s[0],d=(s[1],Object(r.useState)(0)),b=Object(c.a)(d,2),x=b[0],u=b[1],g=Object(r.useState)(1),p=Object(c.a)(g,2),m=p[0],v=p[1],O=Object(r.useState)(2),f=Object(c.a)(O,2),k=f[0],y=f[1],V=Object(r.useState)(!1),B=Object(c.a)(V,2),N=B[0],T=B[1],A=Object(r.useState)(0),F=Object(c.a)(A,2),L=F[0],D=F[1],H=Object(r.useState)(0),M=Object(c.a)(H,2),K=M[0],G=M[1],J=Object(r.useState)(!1),U=Object(c.a)(J,2),q=U[0],Q=U[1],Y=Object(r.useState)([]),X=Object(c.a)(Y,2),Z=X[0],$=X[1],_=Object(r.useState)(!1),tt=Object(c.a)(_,2),et=tt[0],at=tt[1];Object(r.useEffect)((function(){T(!0),console.log("cardsSorted "),console.log(L),rt()}),[]);var rt=function(){var t=0;e.map((function(e,a){t+=a})),console.log("clicks :"+t),G(t)},nt=function(t){var e=t.index,a=t.id;$((function(t){return[].concat(Object(mt.a)(t),[a])})),console.log("cardsSorted"),console.log(L),console.log("totalClicks"),console.log(K),console.log(L),L!==K&&D(L+1),et?Q(!0):(o.map((function(t,e){a===t.id&&(t.pts=t.pts+1)})),k!==o.length?e+1===o.length?(console.log("arr slut"),y(k+1),v(k),u(x+1),console.log("showtop / startvalue"+k)):v(e+1):at(!0))};return Object(C.jsxs)("div",{children:[Object(C.jsx)(E.a,{variant:"determinate",value:Math.round(100/K)*L,color:"secondary",sx:{position:"fixed",top:"64px",width:"100%",maxWidth:"854px",left:"50%",transform:"translate(-50%, 0)",padding:"0px",zIndex:100,height:15}}),Object(C.jsx)(S.a,{direction:"left",in:N,children:Object(C.jsxs)(P.a,{children:[Object(C.jsx)(l.a,{variant:"h2",gutterBottom:!0,align:"center",sx:{mt:"30px"},children:"Sortera din lista"}),Object(C.jsx)(vt.a,{}),Object(C.jsxs)(l.a,{variant:"body1",align:"center",sx:{mb:"25px",mt:"25px"},children:[" ","Om du enbart kunde leva efter en av de tv\xe5 v\xe4rderingarna, vilken hade du valt?"]}),Object(C.jsx)(j.a,{textAlign:"center",sx:{mt:"15px",mb:"15px"},children:Object(C.jsx)(h.a,{disabled:0===L,variant:"outlined",startIcon:Object(C.jsx)(ft.a,{}),sx:{justifyContent:"center",margin:"auto"},onClick:function(){return function(){console.log("cardsSorted"),console.log(L),D(L-1);var t=Z[Z.length-1];if(Z.pop(),et)return o.map((function(e,a){t===e.id&&(e.pts=e.pts-1)})),void at(!1);o.map((function(e,a){t===e.id&&(e.pts=e.pts-1)})),k===m+1?(console.log("\xe4r p\xe5 f\xf6rsta kortet i top, dvs om vi m\xe5ste \xe4ndra showTop"),y(k-1),u(x-1),v(o.length-1),console.log("-------------"),console.log(k),console.log(o.length)):m>=0&&v(m-1)}()},children:"\xc5ngra val"})}),Object(C.jsx)("div",{className:"relative",children:Object(C.jsx)(j.a,{children:o.map((function(t,e){var a=t.title,r=t.desc,n=t.id;return Object(C.jsx)(kt.a,{timeout:500,in:x===e,children:Object(C.jsxs)(j.a,{className:e===x?"show":"hidden",onClick:function(){return function(t){t.index;var e=t.id;if(console.log("cardsSorted"),console.log(L),$((function(t){return[].concat(Object(mt.a)(t),[e])})),L!==K&&(console.log("setcardsSorted(cardsSorted + 1);"),D(L+1)),et)Q(!0);else{if(o.map((function(t,a){e===t.id&&(t.pts=t.pts+1)})),k===o.length)return console.log("done"),console.log(o),void at(!0);m+1===o.length?(y(k+1),u(x+1),v(k)):v(m+1)}}({index:e,id:n})},sx:{display:"table",mx:"auto",margin:"auto",boxShadow:2,width:"100%",height:"200px",maxWidth:"450px",backgroundColor:"white",borderRadius:"6px",userSelect:"none",bgcolor:"primary.main",color:"white","&:hover":{transform:"scale(1.02)"}},children:[et&&Object(C.jsxs)(l.a,{variant:"h3",color:"white",sx:{textAlign:"center",paddingBottom:"5px",p:"25px",pb:"10px",color:"white",padding:"10px",mt:"45px"},children:[" ",'Du \xe4r nu f\xe4rdig med \xf6vningen! Tryck p\xe5 "Se resultat" knappen f\xf6r att se ditt resultat.']}),Object(C.jsxs)(j.a,{className:et&&"hiddenCard",children:[Object(C.jsx)(l.a,{variant:"h2",color:"white",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",pb:"10px",mt:"5px",color:"white"},children:a}),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(vt.a,{className:"white",sx:{width:"85%",mx:"auto"}})}),Object(C.jsx)(l.a,{variant:"body1",align:"center",sx:{p:"30px",pt:"15px",fontSize:"1.1rem"},children:r})]})]},"topCard"+n.toString())})}))})}),Object(C.jsxs)(j.a,{className:et&&"hiddenCard",children:[Object(C.jsxs)(vt.a,{sx:{width:"50%",mt:"30px",mb:"30px",mx:"auto"},children:[" ",Object(C.jsx)(l.a,{variant:"h3",margin:"auto",gutterBottom:!0,children:"Eller.."})]}),Object(C.jsxs)("div",{className:"relative",children:[" ",o.map((function(t,e){var a=t.title,r=t.desc,n=t.id;return Object(C.jsx)(kt.a,{timeout:500,in:m===e,children:Object(C.jsxs)(j.a,{className:m===e?"show":"hidden",onClick:function(){return nt({index:e,id:n})},sx:{display:"table",mx:"auto",transform:"scale(1)",margin:"auto",boxShadow:2,borderColor:"grey.500",width:"95%",height:"200px",maxWidth:"450px",backgroundColor:"white",borderRadius:"6px",userSelect:"none",bgcolor:"primary.main",color:"white","&:hover":{transform:"scale(1.02)"}},children:[Object(C.jsx)(l.a,{variant:"h2",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",pb:"10px",mt:"5px",color:"white"},children:a}),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(vt.a,{className:"white",sx:{width:"85%",mx:"auto"}})}),Object(C.jsx)(l.a,{variant:"body1",align:"center",sx:{p:"30px",pt:"15px",fontSize:"1.1rem"},children:r})]},"bottomCard"+n.toString())})}))]})]}),Object(C.jsxs)(j.a,{sx:{transform:a?"scale(0.9)":null,width:"100%"},children:[Object(C.jsx)(I,{}),et&&Object(C.jsx)(h.a,{variant:"contained",color:"primary","aria-label":"Backa",endIcon:Object(C.jsx)(R.a,{}),onClick:function(){n.push({pathname:"/valueResults",state:o})},sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:"Se Resultat"}),!et&&Object(C.jsxs)(h.a,{variant:"contained",disabled:"true",color:"success","aria-label":"Backa",endIcon:Object(C.jsx)(R.a,{}),sx:{float:"right",mb:"15px",mt:"45px",mr:"15px"},children:[K-L," kort kvar"]})]})]})}),q&&Object(C.jsx)(W,{title:"Bra jobbat!",text:"Du \xe4r nu klar med v\xe4rderingskompassen, tryck p\xe5 knappen SE RESULTAT f\xf6r att se ditt resultat",option2:"Okej!"})]})};function St(t){var e=Object(w.g)().state;return console.log(e),console.log(t),Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{step:"2 av 3",header:"Rangordnare"}),e&&Object(C.jsx)(yt,{valueArray:e})]})}var wt=a(435),Ct=a(147),Vt=a.n(Ct);var Bt=function(){var t=Object(w.f)();return Object(C.jsx)("div",{children:Object(C.jsx)(h.a,{variant:"contained",onClick:function(){t.push({pathname:"/"})},sx:{mb:"25px",mt:"25px"},children:"Tillbaka till startsidan"})})},Nt=a(440),Tt={0:"V\xe4ldigt D\xe5ligt",1:"Ganska D\xe5ligt",2:"R\xe4tt bra",3:"Bra",4:"Mycket Bra",5:"V\xe4ldigt Bra"};var At=function(t){var e=Object(r.useState)(!1),a=Object(c.a)(e,2),i=a[0],s=a[1],o=n.a.useState(3),d=Object(c.a)(o,2),b=d[0],h=d[1],x=n.a.useState(-1),u=Object(c.a)(x,2),g=u[0],p=u[1],m=n.a.useState(0),v=Object(c.a)(m,2),O=v[0],f=v[1],k=n.a.useState(30),y=Object(c.a)(k,2);y[0],y[1],Object(r.useEffect)((function(){T(),s(!0)}),[]);var V=Object(w.g)().state.sort((function(t,e){return e.pts-t.pts})),B={values:V,state:1.1},T=function(){fetch("http://localhost:3000/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)}).then((function(){console.log(V),console.log("resultat sparat")}))};return Object(C.jsx)(S.a,{direction:"left",in:i,mountOnEnter:!0,unmountOnExit:!0,children:Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{header:"V\xe4rderinskompassen",step:"3 av 3"}),Object(C.jsxs)(P.a,{maxWidth:"md",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(l.a,{variant:"h2",gutterBottom:!0,align:"center",sx:{mt:"30px"},children:"Dina fem viktigaste v\xe4rderingar"}),Object(C.jsx)(vt.a,{}),Object(C.jsx)(l.a,{variant:"body1",gutterBottom:!0,align:"center",sx:{mb:"25px",mt:"25px"},children:"Bra jobbat, ta ett djupt andetag och tacka dig sj\xe4lv, du har precis gjort n\xe5got viktigt och meningsfullt f\xf6r din egna skull. Ta nu en noggran titt p\xe5 dina v\xe4rderingar."}),Object(C.jsx)("div",{className:"noStyleList",children:V.map((function(t,e){var a=t.title,r=t.desc;t.pts;return Object(C.jsxs)(j.a,{onClick:function(){return function(t){console.log(t),f(t)}(e)},className:O===e?"transform90":"not active",sx:{display:"table",mx:"auto",transform:"scale(1)",margin:"auto",mt:"15px",boxShadow:5,borderColor:"grey.500",width:"95%",height:"200px",maxWidth:"450px",bgcolor:"primary.main",color:"white",borderRadius:"6px",mb:"25px","&:hover":{transform:"scale(1.05)"}},children:[Object(C.jsxs)(Nt.a,{sx:{position:"absolute",bgcolor:"white",color:"primary.main",float:"left",width:30,height:30,mt:"15px",ml:"15px",fontWeight:"bold"},children:[Object(C.jsxs)(l.a,{variant:"body1",sx:{fontWeight:"bold",userSelect:"none"},children:[" ",e+1]})," "]}),Object(C.jsxs)("li",{children:[Object(C.jsx)(l.a,{variant:"h2",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",ml:"30px",mr:"30px",pb:"5px",mt:"5px",color:"white",userSelect:"none"},children:a}),Object(C.jsx)(vt.a,{className:"white",sx:{width:"65%",mx:"auto"}}),Object(C.jsx)(l.a,{variant:"body1",sx:{p:"15px",fontSize:"1.1rem",userSelect:"none",ml:"25px",mr:"25px"},children:" Jag vill vara "+r})]},e)]},e)}))}),Object(C.jsx)("br",{}),Object(C.jsx)(l.a,{variant:"h3",text:"center",sx:{textAlign:"center"},gutterBottom:!0,children:"Hur bra tycker du att du lever efter dessa fem v\xe4rderingar idag?"}),Object(C.jsxs)(j.a,{sx:{mx:"auto",width:200,display:"flex",alignItems:"center",height:"40px"},children:[Object(C.jsx)(wt.a,{name:"hover-feedback",value:b,precision:1,onChange:function(t,e){h(e)},onChangeActive:function(t,e){p(e)},emptyIcon:Object(C.jsx)(Vt.a,{style:{opacity:.55},fontSize:"inherit"})}),null!==b&&Object(C.jsx)(j.a,{sx:{ml:2},children:Tt[-1!==g?g:b]})]}),Object(C.jsx)(l.a,{variant:"h3",sx:{textAlign:"center",paddingBottom:"5px",pt:"25px",pb:"10px",mt:"5px",mr:"45px",userSelect:"none"},children:"F\xf6rsta \xf6vningen klar!"}),Object(C.jsx)(vt.a,{}),Object(C.jsx)(l.a,{variant:"body1",gutterBottom:!0,children:"I n\xe4sta \xf6vning kommer vi forts\xe4tta f\xf6rdjupa oss i v\xe4rderingar. d\xe5 kommer vi kolla p\xe5 hur dina v\xe4rderingar ser ut i olika livsomr\xe5den och hur du v\xe4rderar de olika delarna av livet."})]}),Object(C.jsxs)(j.a,{textAlign:"center",children:[" ",Object(C.jsx)(Bt,{})," "]})]})]})})},Wt=a(5),Et=a(444),Ft=a(436),Lt=a(427),It=a(452);var Dt=function(){var t,e=Object(r.useState)(!0),a=Object(c.a)(e,2),n=a[0],i=a[1];Object(r.useEffect)((function(){i(!0)}),[]);var s=Object(w.f)(),o=Object(z.a)("(max-width:445px)");return console.log(o),Object(C.jsx)(S.a,{direction:"left",in:n,mountOnEnter:!0,unmountOnExit:!0,children:Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{header:"V\xe4rdeKompassen",step:"1 av 3"}),Object(C.jsxs)(P.a,{maxWidth:"md",children:[Object(C.jsx)(l.a,{variant:"h2",gutterBottom:!0,align:"center",sx:{mt:"30px"},children:"Vad \xe4r en v\xe4rdering?"}),Object(C.jsx)(vt.a,{sx:{width:"75%",mx:"auto"}}),Object(C.jsxs)(l.a,{variant:"body1",sx:{fontWeight:"bold",lineHeight:1.7,mt:"25px"},gutterBottom:!0,children:["V\xe4rderingar \xe4r v\xe5rt hj\xe4rtas innersta \xf6nskan och \xe4r beskriver hur du vill agerade i v\xe4rlden. V\xe4rderingar handlar inte om vad du vill uppn\xe5, ha eller prestera, utan representerar kvaliteter som du \xf6nskade att du kunde inf\xf6rliva i dina handlingar. Vad vill jag att mitt liv ska handla om? Hur vill jag behandla mig sj\xe4lv och andra m\xe4nniskor? Vilken typ av m\xe4nniska vill jag vara?",Object(C.jsx)("br",{})," "]}),Object(C.jsxs)(Et.a,{elevation:3,sx:{display:"flex",flexWrap:"wrap",m:"25px",mt:"10px",mx:"auto",p:"15px",width:o?"90%":"45%",float:o?null:"right",bgcolor:"primary.main",color:"white"},children:[Object(C.jsx)(l.a,{sx:{fontWeight:"bold"},children:"Att leva efter sina v\xe4rderingar kan: "}),Object(C.jsx)(l.a,{variant:"body1",children:" minska nedst\xe4mdhet, skapa mening och motivation, hj\xe4lpa dig ta dig igenom sv\xe5ra situationer och underl\xe4ttar sv\xe5ra val. nedst\xe4mdhet, skapa mening och motivation, hj\xe4lpa dig ta dig igenom sv\xe5ra situationer och underl\xe4ttar sv\xe5ra val."})]}),Object(C.jsxs)(l.a,{variant:"body1",sx:{lineHeight:1.7,width:o?"100%":"50%"},gutterBottom:!0,children:["Man kan j\xe4mf\xf6ra v\xe4rderingar med en kompass; du kan aldrig komma fram till \u201cnorr\u201d, men du kan st\xe4ndigt vandra norrut. V\xe4rderingar ger dig en riktigt att str\xe4va mot; en kompasskurs i livet.",Object(C.jsx)("br",{})]}),Object(C.jsx)(l.a,{variant:"body1",sx:{lineHeight:1.7,width:o?"100%":"50%"},gutterBottom:!0,children:"Till skillnad fr\xe5n ett m\xe5l g\xe5r det aldrig att uppn\xe5 eller bli klar med en v\xe4rdering. Som exempel kan man ta m\xe5let att gifta sig, j\xe4mf\xf6rt med v\xe4rderingen att vara en \xf6ppen, omt\xe4nksam och k\xe4rleksfull partner."}),Object(C.jsx)(l.a,{variant:"h3",sx:{mt:"15px"},gutterBottom:!0,children:"Hur fungerar V\xe4rdekompassen?"}),Object(C.jsx)(vt.a,{}),Object(C.jsx)(l.a,{variant:"body1",sx:{lineHeight:1.7,mt:"10px"},gutterBottom:!0,children:"V\xe4rdekompassen \xe4r uppbyggd i tre steg. I det f\xf6rsta steget kommer du v\xe4lja ut tio v\xe4rderingsord ur v\xe5r v\xe4rderingslista. I det andra steget ska du v\xe4lja mellan dina v\xe4rderingar f\xf6r att hitta de fem v\xe4rderingar som \xe4r absolut viktigast f\xf6r dig. N\xe4r du har gjort detta kommer du f\xe5 se ditt resultat och f\xe5 m\xf6jlighet att l\xe4sa mer om dina valda v\xe4rderingar. Du kommer s\xe4kert m\xe4rka n\xe4r du l\xe4ser v\xe5r v\xe4rderingslista att olika v\xe4rderingarkan ha olika vikt i olika delar av livet; vissa v\xe4rderingar \xe4r viktiga p\xe5 arbetet, andra i relationer och \xe5terigen andra p\xe5 fritiden. Detta \xe4 n\xe5got vi kommer jobba vidare med i n\xe4sta etapp."}),Object(C.jsxs)(T.a,{sx:{display:"flex",flexWrap:"wrap",mt:o?"50px":"110px",mb:o?"50px":"110px",width:o?"90%":"45%",float:o?null:"left"},children:[Object(C.jsxs)(Ft.a,{children:[Object(C.jsx)(It.a,{children:Object(C.jsx)(Nt.a,{sx:{bgcolor:"primary.main",color:"white",fontWeight:"bold"},children:"1"})}),Object(C.jsx)(Lt.a,{primary:"V\xe4lj v\xe4rderingar",secondary:"V\xe4lj ut de 10 v\xe4rderingsord som k\xe4nns viktigast  f\xf6r dig ur v\xe5r v\xe4rderingslista."})]}),Object(C.jsxs)(Ft.a,{children:[Object(C.jsx)(It.a,{children:Object(C.jsx)(Nt.a,{sx:{bgcolor:"primary.main",color:"white",fontWeight:"bold"},children:"2"})}),Object(C.jsx)(Lt.a,{primary:"Rangordna din v\xe4rderingar",secondary:"St\xe4ll ord mot ord f\xf6r att rangordna din lista."})]}),Object(C.jsxs)(Ft.a,{children:[Object(C.jsx)(It.a,{children:Object(C.jsx)(Nt.a,{sx:{bgcolor:"primary.main",color:"white",fontWeight:"bold"},children:"3"})}),Object(C.jsx)(Lt.a,{primary:"Se ditt resultat",secondary:"Titta nog igenom din topp fem lista och  fundera \xf6ver dina v\xe4rderingar"})]})]}),Object(C.jsxs)(j.a,{sx:(t={width:"49%",float:"right"},Object(Wt.a)(t,"width",o?"90%":"45%"),Object(Wt.a)(t,"float",o?null:"left"),Object(Wt.a)(t,"padding","15px"),Object(Wt.a)(t,"mt","25px"),Object(Wt.a)(t,"mb","25px"),t),children:[Object(C.jsx)(l.a,{variant:"h3",sx:{},gutterBottom:!0,children:"Ett sista tips"}),Object(C.jsx)(vt.a,{}),Object(C.jsx)(l.a,{variant:"body1",sx:{lineHeight:1.7,mt:"10px"},gutterBottom:!0,children:"T\xe4nka p\xe5 att dina v\xe4rderingar ska vara dina egna. V\xe4rderingar tappar sitt v\xe4rde om dom \xe4r baserad p\xe5 vad hur du tror att andra vill att du ska vara. Det finns inget r\xe4tt och fel, inga bra eller d\xe5liga v\xe4rden. Dina v\xe4rderingar \xe4r dina, f\xf6r att dom ska kunna fungera v\xe4gvisande i livet och f\xf6r att dem ska bli meningsfulla f\xf6r dig \xe4r det viktigt att dom \xe4r Dina. Du beh\xf6ver aldrig kunna f\xf6rklara varf\xf6r en v\xe4rdering \xe4r viktig f\xf6r dig; precis som att du aldrig beh\xf6ver ha ett argument f\xf6r varf\xf6r bl\xe5tt \xe4r din favoritf\xe4rg, det \xe4r ditt tycke och din smak."})]}),Object(C.jsx)(h.a,{variant:"contained",color:"primary","aria-label":"N\xe4sta",startIcon:Object(C.jsx)(L.a,{}),onClick:function(){s.goBack()},sx:{ml:"15px",mb:"15px"},children:"Tillbaka"}),Object(C.jsx)(h.a,{variant:"contained",color:"primary","aria-label":"Backa",endIcon:Object(C.jsx)(R.a,{}),onClick:function(){s.push({pathname:"/valueList"})},sx:{float:"right",mr:"15px",mb:"15px"},children:"N\xe4sta"})]})]})})},Rt=a(148),zt=a(442),Ht=(a(367),a(443)),Mt=a(53);var Pt=Object(w.i)((function(t){var e=t.history;return Object(r.useEffect)((function(){var t=e.listen((function(){window.scrollTo(0,0)}));return function(){t()}})),null})),Kt=Object(Rt.a)({palette:{primary:{main:Mt.a[800]},secondary:{main:Mt.a[200]}},typography:{fontFamily:"Montserrat",fontWeightRegular:500,fontWeightMedium:600,fontWeightBold:800,h1:{fontSize:"2rem",fontWeight:"bolder"},h2:{fontSize:"1.6rem",fontWeight:"bold"},h3:{fontSize:"1,3rem",fontWeight:"bold"},h4:{fontSize:"1rem",fontWeight:"bold"},button:{fontWeight:"800"}}});var Gt=function(){return Object(C.jsxs)(n.a.Fragment,{children:[Object(C.jsx)(Ht.a,{}),Object(C.jsxs)(xt.a,{basename:"/test-react",children:[Object(C.jsx)(Pt,{}),Object(C.jsx)("div",{className:"appWrapper",children:Object(C.jsx)("div",{className:"app",children:Object(C.jsx)(zt.a,{theme:Kt,children:Object(C.jsxs)(w.c,{children:[Object(C.jsx)(w.a,{exact:!0,path:"/",children:Object(C.jsx)(ht,{})}),Object(C.jsx)(w.a,{exact:!0,path:"/values1",children:Object(C.jsx)(Dt,{})}),Object(C.jsx)(w.a,{exact:!0,path:"/valueList",children:Object(C.jsx)(K,{text:" "})}),Object(C.jsx)(w.a,{exact:!0,path:"/valueSorter",children:Object(C.jsx)(St,{})}),Object(C.jsx)(w.a,{exact:!0,path:"/valueResults",children:Object(C.jsx)(At,{})}),Object(C.jsx)(w.a,{path:"/createValue",children:Object(C.jsx)(gt,{})}),Object(C.jsx)(w.a,{path:"/values/:id",children:Object(C.jsx)(ut,{})}),Object(C.jsx)(w.a,{path:"*",children:Object(C.jsx)(pt,{})})]})})})})]})]})},Jt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,463)).then((function(e){var a=e.getCLS,r=e.getFID,n=e.getFCP,i=e.getLCP,s=e.getTTFB;a(t),r(t),n(t),i(t),s(t)}))};s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(Gt,{})}),document.getElementById("root")),Jt()}},[[368,1,2]]]);
//# sourceMappingURL=main.45c9f9d8.chunk.js.map