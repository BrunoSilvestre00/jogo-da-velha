(this["webpackJsonpreact-typescript-starter"]=this["webpackJsonpreact-typescript-starter"]||[]).push([[0],{33:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(15),c=t.n(o),i=t(34),a=t(19);var s=Object(a.a)(),O=t(2),l=t(3);let d=function(e){return e[e.EMPTY=0]="EMPTY",e[e.CROSS=1]="CROSS",e[e.CIRCLE=2]="CIRCLE",e[e.DRAW=3]="DRAW",e}({});var b,A,j,u,h,m,f;const g=l.b.div(b||(b=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n"]))),E=l.b.div(A||(A=Object(O.a)(["\n  display: grid;\n  width: fit-content;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n  padding: 1rem;\n  border-radius: 1rem;\n  background-color: #3f8fa5;\n"]))),R=Object(l.c)(j||(j=Object(O.a)(["\n  0%, 40%, 80% {\n    background-color: #61dafb;\n  }\n\n  20%, 60%, 100% {\n    background-color: #61FBCF;\n  }\n"]))),C="12vh",p=l.b.button(u||(u=Object(O.a)(["\n  width: ",";\n  height: ",";\n  background-color: ",";\n\n  border-radius: 1rem;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #282c34;\n\n  "," \n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n\n  svg {\n    width: 100%;\n  }\n"])),C,C,(e=>{let{winnerCell:n}=e;return n?"#61FBCF":"#61dafb"}),(e=>{let{winnerCell:n}=e;return n&&Object(l.a)(h||(h=Object(O.a)(["\n    animation: "," 2s ease-in-out;\n  "])),R)})),I=l.b.span(m||(m=Object(O.a)(["\n  color: ",";\n  font-size: 1.25rem;\n  font-weight: bold;\n"])),(e=>{let{winner:n}=e;return n==d.CROSS?"#618dfb":n==d.CIRCLE?"#fb8261":"#dafb61"})),x=l.b.button(f||(f=Object(O.a)(["\n  border: 0;\n  border-radius: 0.5rem;\n  background-color: #61dafb;\n  color: #282c34;\n  font-size: 1.25rem;\n  font-weight: bold;\n  padding: 0.5rem 1rem;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n"])));var T=t(1);var w=()=>Object(T.jsx)("svg",{fill:"current",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",viewBox:"0 0 505 505",children:Object(T.jsx)("g",{children:Object(T.jsx)("g",{children:Object(T.jsx)("path",{d:"M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407\r c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328\r c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814\r c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815\r C506.815,115.49,506.815,90.845,491.613,75.643z"})})})});var S=()=>Object(T.jsx)("svg",{viewBox:"0 0 100 100",children:Object(T.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"black",strokeWidth:"20",fill:"transparent"})});const L=Array.from({length:3},(()=>Array.from({length:3},(()=>d.EMPTY)))),M=Array.from({length:3},(()=>Array.from({length:3},(()=>!1))));var v,N,y=()=>{const[e,n]=Object(r.useState)(L),[t,o]=Object(r.useState)(d.CROSS),[c,i]=Object(r.useState)(d.EMPTY),[a,s]=Object(r.useState)(M),O=Object(r.useCallback)((()=>{o((e=>e===d.CROSS?d.CIRCLE:d.CROSS))}),[]),l=Object(r.useCallback)((()=>{window.location.reload()}),[]),b=Object(r.useCallback)((()=>{const n=[...a];for(let t=0;t<3;t++)if(e[t][0]===e[t][1]&&e[t][1]===e[t][2]&&e[t][0]!=d.EMPTY)return n[t][0]=!0,n[t][1]=!0,n[t][2]=!0,s(n),e[t][0];for(let t=0;t<3;t++)if(e[0][t]===e[1][t]&&e[1][t]===e[2][t]&&e[0][t]!=d.EMPTY)return n[0][t]=!0,n[1][t]=!0,n[2][t]=!0,s(n),e[0][t];if(e[0][0]===e[1][1]&&e[1][1]===e[2][2]&&e[0][0]!=d.EMPTY)return n[0][0]=!0,n[1][1]=!0,n[2][2]=!0,s(n),e[0][0];if(e[0][2]===e[1][1]&&e[1][1]===e[2][0]&&e[0][2]!=d.EMPTY)return n[0][2]=!0,n[1][1]=!0,n[2][0]=!0,s(n),e[0][2];for(let t=0;t<3;t++)for(let n=0;n<3;n++)if(e[t][n]===d.EMPTY)return d.EMPTY;return d.DRAW}),[e,a]),A=Object(r.useCallback)(((r,o)=>{if(e[r][o]!==d.EMPTY||c!=d.EMPTY)return;const a=[...e];a[r][o]=t,n(a);const s=b();s!==d.EMPTY?i(s):O()}),[e,c,t,b,O]),j=Object(r.useCallback)((e=>{switch(e){case d.EMPTY:return null;case d.CROSS:return Object(T.jsx)(w,{});case d.CIRCLE:return Object(T.jsx)(S,{})}}),[]);return Object(T.jsxs)(g,{children:[Object(T.jsxs)(I,{winner:t,children:["Vez do jogador ",t]}),Object(T.jsx)(E,{children:e.map(((e,n)=>e.map(((e,t)=>Object(T.jsx)(p,{onClick:()=>A(n,t),winnerCell:a[n][t],disabled:e!==d.EMPTY,children:j(e)},"cell-".concat(n,"-").concat(t))))))}),Object(T.jsx)(x,{onClick:l,children:"Recome\xe7ar"}),c!==d.EMPTY&&Object(T.jsx)(I,{winner:c,children:c===d.DRAW?"Empate!":"O jogador ".concat(c," venceu o jogo!")})]})};const P=l.b.div(v||(v=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3% 0;\n"]))),D=l.b.span(N||(N=Object(O.a)(["\n  color: #61dafb;\n  font-size: 2rem;\n  font-weight: bold;\n"])));var k,B=()=>Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(P,{children:Object(T.jsx)(D,{children:"Jogo da Velha"})}),Object(T.jsx)(y,{})]});const U=l.b.div(k||(k=Object(O.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  gap: 0;\n  background-color: #282c34;\n\n  * {\n    box-sizing: border-box;\n    font-family: 'Courier New', Courier, monospace;\n  }\n"])));var G,F,H,V,J,z,Y,X,Z=e=>{let{component:n,...t}=e;return Object(T.jsx)(U,{children:Object(T.jsx)(i.b,{...t,render:e=>Object(T.jsx)(n,{...e})})})};const W="#ff2d05",K="#008aff",Q="#dfff1c",_="#5dee2f",q=l.b.div(G||(G=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n"]))),$="15vw",ee=l.b.button(F||(F=Object(O.a)(["\n    width: ",";\n    height: ",";\n    border: 0;\n\n    &:not([disabled]):hover {\n        cursor: pointer;\n    }\n"])),$,$),ne=Object(l.b)(ee)(H||(H=Object(O.a)(["\n    background-color: ",";\n    border-top-left-radius: 100%;\n"])),W),te=Object(l.b)(ee)(V||(V=Object(O.a)(["\n    background-color: ",";\n    border-top-right-radius: 100%;\n"])),K),re=Object(l.b)(ee)(J||(J=Object(O.a)(["\n    background-color: ",";\n    border-bottom-left-radius: 100%;\n"])),Q),oe=Object(l.b)(ee)(z||(z=Object(O.a)(["\n    background-color: ",";\n    border-bottom-right-radius: 100%;\n"])),_),ce=l.b.div(Y||(Y=Object(O.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    width: 100%;\n    height: 100%;\n    gap: 0.5rem;\n\n    ",".active {\n        box-shadow: 0 0 1rem ",";\n        filter: brightness(1.2);\n    }\n\n    ",".active {\n        box-shadow: 0 0 1rem ",";\n        filter: brightness(1.2);\n    }\n\n    ",".active {\n        box-shadow: 0 0 1rem ",";\n        filter: brightness(1.2);\n    }\n\n    ",".active {\n        box-shadow: 0 0 1rem ",";\n        filter: brightness(1.2);\n    }\n"])),ne,W,te,K,re,Q,oe,_),ie=l.b.span(X||(X=Object(O.a)(["\n    font-size: 1.25rem;\n    font-weight: 700;\n    color: #ddd\n"]))),ae=e=>new Promise((n=>setTimeout(n,e)));var se,Oe,le=()=>{const[e,n]=Object(r.useState)([]),[t,o]=Object(r.useState)(0),[c,i]=Object(r.useState)(!0),[a,s]=Object(r.useState)(!1),[O,l]=Object(r.useState)(0),d=Object(r.useCallback)((async()=>{const t=Math.floor(4*Math.random())+1,r=[...e,t];for(let e=0;e<r.length;e++){const n=document.getElementById("button-".concat(r[e]));null===n||void 0===n||n.classList.add("active"),setTimeout((()=>{null===n||void 0===n||n.classList.remove("active")}),500),await ae(1e3)}n(r),i(!1)}),[e]),b=Object(r.useCallback)((async()=>{a||(await ae(1e3),i(!0),await d())}),[d,a]),A=Object(r.useCallback)((n=>{const r=document.getElementById("button-".concat(n));null===r||void 0===r||r.classList.add("active"),setTimeout((()=>{null===r||void 0===r||r.classList.remove("active")}),500),n===e[t]?(o(t+1),t+1===e.length&&(o(0),l(O+1),b())):s(!0)}),[e,t,O,b]),j=Object(r.useMemo)((()=>a?"Voc\xea perdeu!":c?"Aten\xe7\xe3o...":"Sua vez!"),[a,c]);return Object(r.useEffect)((()=>{b()}),[b]),Object(T.jsxs)(q,{children:[Object(T.jsx)(ie,{children:j}),Object(T.jsxs)(ce,{children:[Object(T.jsx)(ne,{id:"button-1",disabled:c||a,onClick:()=>A(1)}),Object(T.jsx)(te,{id:"button-2",disabled:c||a,onClick:()=>A(2)}),Object(T.jsx)(re,{id:"button-3",disabled:c||a,onClick:()=>A(3)}),Object(T.jsx)(oe,{id:"button-4",disabled:c||a,onClick:()=>A(4)})]}),Object(T.jsxs)(ie,{children:["Pontua\xe7\xe3o: ",O]})]})};const de=l.b.div(se||(se=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3% 0;\n"]))),be=l.b.span(Oe||(Oe=Object(O.a)(["\n  color: #61dafb;\n  font-size: 2rem;\n  font-weight: bold;\n"])));var Ae,je,ue=()=>Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(de,{children:Object(T.jsx)(be,{children:"Genius"})}),Object(T.jsx)(le,{})]});const he=l.b.div(Ae||(Ae=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 3% 0;\n"]))),me=l.b.span(je||(je=Object(O.a)(["\n  color: #61dafb;\n  font-size: 2rem;\n  font-weight: bold;\n"])));var fe,ge,Ee,Re,Ce,pe;const Ie=l.b.div(fe||(fe=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2.5rem;\n"]))),xe=l.b.div(ge||(ge=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n"]))),Te=l.b.span(Ee||(Ee=Object(O.a)(["\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: ",";\n"])),(e=>{let{state:n}=e;switch(n){case"win":return"#00ff00";case"lose":return"#ff0000"}})),we=l.b.span(Re||(Re=Object(O.a)(["\n    background-color: #61dafb;\n    color: #000;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 0.5rem 0.75rem;\n    border-radius: 1rem;\n"]))),Se=l.b.div(Ce||(Ce=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 4rem;\n"]))),Le=l.b.button(pe||(pe=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #61dafb;\n  border-radius: 1rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding: 0.75rem 1.5rem;\n  background-color: transparent;\n  color: #61dafb;\n  margin-top: 2rem;\n\n  &:hover {\n    background-color: #61dafb33;\n    cursor: pointer;\n  }\n"])));var Me,ve,Ne;const ye=l.b.div(Me||(Me=Object(O.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n"]))),Pe=l.b.div(ve||(ve=Object(O.a)(["\n    width: fit-content;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n"]))),De="3rem",ke=l.b.button(Ne||(Ne=Object(O.a)(["\n    width: ",";\n    height: ",";\n    border: 0;\n    border-radius: 0.5rem;\n    background-color: #61dafb;\n    color: #282c34;\n    font-size: 1.5rem;\n    font-weight: bold;\n    transition: opacity 0.2s ease-in-out;\n\n    &:hover {\n        cursor: pointer;\n        opacity: 0.8;\n    }\n\n    &:disabled {\n        cursor: not-allowed;\n        opacity: 0.5;\n    }\n"])),De,De),Be=[{tip:"Animais",words:["CACHORRO","GATO","LEAO","TIGRE","ELEFANTE","GIRAFA","GOLFINHO","TARTARUGA","CROCODILO","HIPOPOTAMO","MACACO","URSO","RATO","COELHO","PORCO"]},{tip:"Frutas",words:["BANANA","MA\xc7A","MORANGO","LARANJA","MELANCIA","MELAO","MANGA","ABACAXI","UVA","JABUTICABA","CAJU","ACEROLA","COCO","GOIABA","LIMAO"]},{tip:"Profiss\xf5es",words:["MEDICO","ENGENHEIRO","PROFESSOR","ADVOGADO","DENTISTA","CONTADOR","FARMACEUTICO","PSICOLOGO","VETERINARIO","FISIOTERAPEUTA","ENFERMEIRO","NUTRICIONISTA","ADMINISTRADOR","BOMBEIRO","POLICIAL"]},{tip:"Esportes",words:["FUTEBOL","BASQUETE","VOLEI","TENIS","NATA\xc7AO","CORRIDA","FUTSAL","HANDEBOL","ATLETISMO","GINASTICA","JUDO","KARATE","BOXE","ESGRIMA","CICLISMO"]},{tip:"Pa\xedses",words:["BRASIL","ESTADOS UNIDOS","CHINA","JAPAO","RUSSIA","CANADA","MEXICO","ESPANHA","FRAN\xc7A","ALEMANHA","ITALIA","ARGENTINA","AUSTRALIA","PORTUGAL","INDIA"]},{tip:"Cores",words:["VERMELHO","AZUL","VERDE","AMARELO","ROXO","LARANJA","ROSA","PRETO","BRANCO","MARROM","CINZA","BEGE","VIOLETA","DOURADO","PRATEADO"]},{tip:"Comidas",words:["ARROZ","FEIJAO","MACARRAO","LASANHA","PIZZA","HAMBURGUER","SANDUICHE","SALADA","SOPA","BOLO","PUDIM","SUCO","REFRIGERANTE","SALGADINHO","BISCOITO"]},{tip:"Objetos",words:["CADEIRA","MESA","GELADEIRA","FOGAO","TELEVISAO","CELULAR","COMPUTADOR","NOTEBOOK","CAMA","TRAVESSEIRO","CORTINA","JANELA","PORTA","CARRO","MOTO"]},{tip:"Roupas",words:["CAMISA","CAL\xc7A","BERMUDA","SAIA","VESTIDO","BLUSA","SHORTS","MEIA","SAPATO","SANDALIA","CHINELO","BONE","TOUCA","CUECA","SUTIA"]},{tip:"Corpo Humano",words:["CABE\xc7A","BRA\xc7O","PERNA","MAO","PE","OLHO","NARIZ","BOCA","ORELHA","COTOVELO","JOELHO","PESCO\xc7O","BARRIGA","COSTAS","CINTURA"]},{tip:"Instrumentos Musicais",words:["VIOLAO","GUITARRA","BAIXO","BATERIA","TECLADO","PIANO","FLAUTA","TROMPETE","SAXOFONE","VIOLINO","ACORDEON","TAMBOR","TAMBORIM","CUICA","PANDEIRO"]},{tip:"Meios de Transporte",words:["CARRO","MOTO","BICICLETA","ONIBUS","METRO","TREM","AVIAO","NAVIO","BARCO","CARRO\xc7A","CAVALO","JEGUE","BODE","CAMINHAO","TRATOR"]},{tip:"Objetos de Casa",words:["CADEIRA","MESA","GELADEIRA","FOGAO","TELEVISAO","CELULAR","COMPUTADOR","NOTEBOOK","CAMA","TRAVESSEIRO","CORTINA","JANELA","PORTA","CARRO","MOTO"]},{tip:"Objetos de Escola",words:["LIVRO","CANETA","LAPIS","BORRACHA","CADERNO","MOCHILA","REGUA","ESTOJO","LAPIS DE COR","GIZ DE CERA","APONTADOR","TESOURA","COLA","CARTOLINA","PAPEL"]},{tip:"Objetos de Cozinha",words:["PRATO","GARFO","FACA","COLHER","PANELA","FRIGIDEIRA","FOGAO","GELADEIRA","MICROONDAS","LIQUIDIFICADOR","BATEDEIRA","ESCORREDOR","COPO","XICARA","COADOR"]}],Ue=[10,9,7],Ge=Array.from({length:26},((e,n)=>String.fromCharCode(65+n))),Fe="keydown";var He,Ve,Je=e=>{let{onClick:n,selectedLetters:t}=e;const o=Object(r.useCallback)((e=>{n(String.fromCharCode(e.keyCode))}),[n]);Object(r.useEffect)((()=>(document.addEventListener(Fe,o,!1),()=>{document.removeEventListener(Fe,o,!1)})),[o]);const c=Object(r.useMemo)((()=>[Ge.slice(0,Ue[0]),Ge.slice(Ue[0],Ue[0]+Ue[1]),Ge.slice(Ue[0]+Ue[1],Ue[0]+Ue[1]+Ue[2])]),[]),i=Object(r.useCallback)((e=>t.includes(e)),[t]);return Object(T.jsx)(ye,{children:c.map(((e,t)=>Object(T.jsx)(Pe,{children:e.map((e=>Object(T.jsx)(ke,{onClick:()=>n(e),disabled:i(e),children:e},"letter-btn-".concat(e))))},"letter-row-".concat(t))))})};const ze=l.b.div(He||(He=Object(O.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.5rem;\n"]))),Ye="3rem",Xe=l.b.span(Ve||(Ve=Object(O.a)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    color: ",";\n    font-size: 2rem;\n    font-weight: bold;\n    width: ",";\n    height: ",";\n\n    &::after {\n        content: '';\n        position: absolute;\n        bottom: 0rem;\n        left: 0;\n        width: ",";\n        height: 0.2rem;\n        border-radius: 0.5rem;\n        background-color: #61dafb;\n        transition: transform 0.3s ease-in-out;\n    }\n"])),(e=>{let{include:n}=e;return n?"#61dafb":"#fa0"}),Ye,Ye,Ye);var Ze,We,Ke=e=>{let{word:n}=e;return Object(T.jsx)(ze,{children:n.map(((e,n)=>Object(T.jsx)(Xe,{include:e[0],children:e[1]},"letter-".concat(n))))})};const Qe="#61dafb",_e="0.2rem",qe=l.b.div(Ze||(Ze=Object(O.a)(["\n    opacity: ",";\n    position: absolute;\n    transition: opacity 0.3s ease-in-out;\n    border-radius: 0.5rem;\n"])),(e=>{let{show:n}=e;return n?1:0})),$e=l.b.div(We||(We=Object(O.a)(["\n    position: relative;\n    height: 16rem;\n    width: 10rem;\n    border-left: "," solid ",";\n\n    &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: ",";\n        width: 5rem;\n        background-color: ",";\n    }\n\n    &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 5rem;\n        width: ",";\n        height: 1.5rem;\n        background-color: ",";\n    }\n\n    ",".head {\n        top: 2rem;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        width: 4rem;\n        height: 4rem;\n        border-radius: 50%;\n        border: "," solid ",";\n    }\n\n    ",".body {\n        top: 6rem;\n        left: 0.125rem;\n        right: 0;\n        margin: 0 auto;\n        width: ",";\n        height: 7rem;\n        background-color: ",";\n    }\n\n    ",".left-arm {\n        top: 10rem;\n        left: 0;\n        right: 0;\n        height: ",";\n        width: 4rem;\n        transform: rotate(-40deg) translateX(50%);\n        background-color: ",";\n    }\n\n    ",".right-arm {\n        top: 5rem;\n        left: 0;\n        right: 0;\n        height: ",";\n        width: 4rem;\n        transform: rotate(40deg) translateX(150%);\n        background-color: ",";\n    }\n\n    ",".left-leg {\n        top: 15.4rem;\n        left: 0;\n        right: 0;\n        height: ",";\n        width: 4rem;\n        transform: rotate(-40deg) translateX(50%);\n        background-color: ",";\n    }\n\n    ",".right-leg {\n        top: 10.4rem;\n        left: 0;\n        right: 0;\n        height: ",";\n        width: 4rem;\n        transform: rotate(40deg) translateX(150%);\n        background-color: ",";\n    }\n"])),_e,Qe,_e,Qe,_e,Qe,qe,_e,Qe,qe,_e,Qe,qe,_e,Qe,qe,_e,Qe,qe,_e,Qe,qe,_e,Qe);var en=e=>{let{errors:n}=e;return Object(T.jsxs)($e,{children:[Object(T.jsx)(qe,{show:n>=1,className:"head"}),Object(T.jsx)(qe,{show:n>=2,className:"body"}),Object(T.jsx)(qe,{show:n>=3,className:"left-arm"}),Object(T.jsx)(qe,{show:n>=4,className:"right-arm"}),Object(T.jsx)(qe,{show:n>=5,className:"left-leg"}),Object(T.jsx)(qe,{show:n>=6,className:"right-leg"})]})};var nn=()=>{const[e,n]=Object(r.useState)(0),[t,o]=Object(r.useState)([]),[c,i]=Object(r.useState)("playing"),a=Object(r.useMemo)((()=>"playing"===c),[c]),[s,O]=Object(r.useMemo)((()=>{const e=(()=>{const e=Math.floor(Math.random()*Be.length),n=Math.floor(Math.random()*Be[e].words.length),t=Be[e];return{tip:t.tip,word:t.words[n]}})();return[e.tip,e.word]}),[]),l=Object(r.useMemo)((()=>O.split("").map((e=>{const n=t.includes(e);return[n,n||!a?e:" "]}))),[O,t,a]),d=Object(r.useCallback)((r=>{a&&(O.includes(r)||n(e+1),o([...t,r]))}),[t,O,e,a]),b=Object(r.useCallback)((()=>{location.reload()}),[]);Object(r.useEffect)((()=>{e>=6&&i("lose")}),[e]),Object(r.useEffect)((()=>{O.split("").every((e=>t.includes(e)))&&i("win")}),[O,t]);const A=Object(r.useMemo)((()=>"lose"===c?"Voc\xea perdeu!":"win"===c?"Voc\xea ganhou!":"Jogando"),[c]);return Object(T.jsxs)(Ie,{children:[Object(T.jsxs)(xe,{children:["playing"!==c&&Object(T.jsx)(Te,{state:c,children:A}),Object(T.jsxs)(we,{children:["Dica: ",s," (",O.length,")"]})]}),Object(T.jsxs)(Se,{children:[Object(T.jsx)(en,{errors:e}),Object(T.jsx)(Ke,{word:l})]}),a?Object(T.jsx)(Je,{selectedLetters:t,onClick:d}):Object(T.jsx)(Le,{onClick:b,children:"Restart"})]})};var tn=()=>Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(he,{children:Object(T.jsx)(me,{children:"Jogo da Forca"})}),Object(T.jsx)(nn,{})]});var rn=()=>Object(T.jsx)(i.c,{history:s,children:Object(T.jsxs)(i.d,{children:[Object(T.jsx)(Z,{path:"/tic-tac-toe",component:B}),Object(T.jsx)(Z,{path:"/genesis",component:ue}),Object(T.jsx)(Z,{path:"/hangman",component:tn}),Object(T.jsx)(Z,{path:"*",exact:!0,children:Object(T.jsx)(i.a,{to:"/home",exact:!0})})]})});var on=()=>Object(T.jsx)(rn,{});c.a.render(Object(T.jsx)(on,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.9d377909.chunk.js.map