(this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar=this.webpackJsonphashlips_nft_minting_dapp_fazelpejmanfar||[]).push([[0],{367:function(n,e){},373:function(n,e){},374:function(n,e){},400:function(n,e){},402:function(n,e){},416:function(n,e){},418:function(n,e){},448:function(n,e){},450:function(n,e){},533:function(n,e){},535:function(n,e){},541:function(n,e){},553:function(n,e){},556:function(n,e){},561:function(n,e){},795:function(n,e,t){},796:function(n,e,t){"use strict";t.r(e);var i,a,o,r,c,s,d,l,x,p,b,h,g,j,u,f,m,O,w,y,v,k,E,S,C,T,A,_,N,F,M,z,R,P,D,L,I,U,Y,K,W,X,H,B,G,q=t(0),Q=t.n(q),J=t(34),V=t.n(J),Z=t(21),$=t(46),nn=t(22),en=t(5),tn=t(42),an=t(82),on=t.n(an),rn=t(97),cn=t.n(rn),sn=t(101),dn=t(328),ln=t(18),xn={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},pn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(ln.a)(Object(ln.a)({},xn),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(ln.a)(Object(ln.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(ln.a)(Object(ln.a)({},xn),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(ln.a)(Object(ln.a)({},n),{},{account:e.payload.account});default:return n}},bn={loading:!1,totalSupply:0,error:!1,errorMsg:""},hn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(ln.a)(Object(ln.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(ln.a)(Object(ln.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(ln.a)(Object(ln.a)({},bn),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},gn=Object(sn.b)({blockchain:pn,data:hn}),jn=[dn.a],un=Object(sn.c)(sn.a.apply(void 0,jn)),fn=Object(sn.d)(gn,un),mn=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},On=function(){return function(){var n=Object($.a)(Object(Z.a)().mark((function n(e){var t;return Object(Z.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,fn.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(mn("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},wn=function(n){return{type:"CONNECTION_FAILED",payload:n}},yn=function(){return function(){var n=Object($.a)(Object(Z.a)().mark((function n(e){var t,i,a,o,r,c,s,d,l,x,p,b;return Object(Z.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(o=n.sent,r=window,c=r.ethereum,!(c&&c.isMetaMask)){n.next=50;break}return on.a.setProvider(c),s=new cn.a(c),n.prev=18,n.next=21,c.request({method:"eth_requestAccounts"});case 21:return d=n.sent,n.next=24,c.request({method:"net_version"});case 24:if(n.sent!=o.NETWORK.ID){n.next=33;break}l=new on.a(i,o.CONTRACT_ADDRESS),x=new on.a(i,o.TOKEN),e({type:"CONNECTION_SUCCESS",payload:{account:d[0],smartContract:l,smartToken:x,web3:s}}),c.on("accountsChanged",(function(n){e(vn(n[0]))})),c.on("chainChanged",(function(){window.location.reload()})),n.next=43;break;case 33:return p=o.NETWORK.ID,b=cn.a.utils.toHex(p.toString()),n.prev=35,n.next=38,c.request({method:"wallet_switchEthereumChain",params:[{chainId:b}]});case 38:n.next=43;break;case 40:n.prev=40,n.t0=n.catch(35),4902===n.t0.code&&e(wn("Please Add ".concat(o.NETWORK.NAME," Network to your Metamask.")));case 43:n.next=48;break;case 45:n.prev=45,n.t1=n.catch(18),e(wn("Something went wrong."));case 48:n.next=51;break;case 50:e(wn("Install Metamask."));case 51:case"end":return n.stop()}}),n,null,[[18,45],[35,40]])})));return function(e){return n.apply(this,arguments)}}()},vn=function(n){return function(){var e=Object($.a)(Object(Z.a)().mark((function e(t){return Object(Z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(On());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},kn=t(6),En=kn.b.div(i||(i=Object(en.a)(["\n  background-color: #fff;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Sn=kn.b.div(a||(a=Object(en.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Cn=kn.b.div(o||(o=Object(en.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Tn=kn.b.div(r||(r=Object(en.a)(["\n  height: 24px;\n  width: 24px;\n"]))),An=kn.b.div(c||(c=Object(en.a)(["\n  height: 32px;\n  width: 32px;\n"]))),_n=kn.b.div(s||(s=Object(en.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),Nn=kn.b.div(d||(d=Object(en.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: center;\n  justify-content: center;\n  align-items: center;\n  //border: 2px solid #A673EF;\n  border-radius: 10px;\n  //box-shadow: 0px 0px 3px 0px #A673EF;\n"])),(function(n){var e=n.flex;return e||0})),Fn=kn.b.p(l||(l=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 60px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 25px;\n    text-align: center;\n    letter-spacing: 2px;\n  }\n"]))),Mn=kn.b.p(x||(x=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 24px;\n  font-weight: 400;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n  }\n"]))),zn=kn.b.p(p||(p=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: var(--primary-text);\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 2px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n  }\n"]))),Rn=(kn.b.p(b||(b=Object(en.a)(["\n  font-family: 'Upheaval';\n  color: white;\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: 8px;\n  line-height: 1.6;\n  border: 2px solid midnightblue;\n  width: 400px;\n  background: #9DC5F0;\n  text-align: center;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    letter-spacing: 2px;\n    width: 200px;\n  }\n"]))),kn.b.p(h||(h=Object(en.a)(["\n  font-family: 'Renomono';\n  color: var(--primary-text);\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 0.75rem;\n    letter-spacing: 2px;\n    text-align: center;\n  }\n"])))),Pn=kn.b.p(g||(g=Object(en.a)(["\n  color: var(--primary-text);\n  font-size: 60px;\n  line-height: 1.6;\n"]))),Dn=kn.b.p(j||(j=Object(en.a)(["\n  color: var(--primary-text);\n  font-size: 30px;\n  line-height: 1.6;\n  @media (max-width: 565px) {\n    font-size: 20px;\n    line-height: 0;\n  }\n"]))),Ln=(kn.b.div(u||(u=Object(en.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),kn.b.hr(f||(f=Object(en.a)(["\n  border: 2px solid white;  \n  background-color: white;\n  border-radius: 2px;\n  width: 450px;\n  @media (max-width: 565px) {\n    width: 350px;\n  }\n"]))),kn.b.a(m||(m=Object(en.a)(["\n  color: var(--primary-text);\n  text-decoration: none;\n  margin-right: 5rem;\n  cursor: pointer;\n  :hover {\n    color: #FF8938;\n  }\n  @media (max-width: 565px) {\n    margin-right: 0.75rem;\n    margin-top: 1rem;\n  }\n"])))),In=kn.b.img(O||(O=Object(en.a)(["\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    :hover {\n      transform: scale(1.5);\n      transition: transform 0.5s;\n    }\n"]))),Un=kn.b.div(w||(w=Object(en.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 3.5rem;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  flex-direction: column;\n}\n"]))),Yn=kn.b.div(y||(y=Object(en.a)(["\ndisplay: flex;\nalign-items: center;\n@media (max-width: 565px) {\n  margin-right: 0;\n  margin-top: 20px;\n  flex-direction: row;\n}\n"]))),Kn=kn.b.div(v||(v=Object(en.a)(["\n    display: flex;\n    align-items: center;\n    @media (max-width: 565px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n    }\n"]))),Wn=kn.b.div(k||(k=Object(en.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: center;;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  margin-top: 5%;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){return n.test?"pink":"none"})),Xn=kn.b.p(E||(E=Object(en.a)(["\ntext-align: center;\nfont-size: 1rem;\nletter-spacing: 1px;\nline-height: 2;\nwidth: 70%;\n"]))),Hn=(kn.b.button(S||(S=Object(en.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 40px;\n  border: none;\n  background: linear-gradient(86.57deg, #D8AE43 6.92%, rgba(255, 92, 0, 0.79) 100.73%);\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),kn.b.div(C||(C=Object(en.a)(["\n  display: flex;\n  background: #171717;\n  border-radius: 40px;\n  width: max-content;\n  margin-top: 5%;\n  align-items: center;\n    justify-content: center;\n    @media (max-width: 565px) {\n      width: 100%;\n    }\n"]))),kn.b.div(T||(T=Object(en.a)(["\n  display: flex;\n  margin-top: 5%;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 5%;\n  @media (max-width: 565px) {\n    flex-direction: column;\n  }\n"]))),kn.b.div(A||(A=Object(en.a)(["\nheight: 120px;\nwidth: 250px;\nborder-radius: 20px;\nbackground: #171717;\npadding: 10px;\n@media (max-width: 565px) {\n  margin-top: 10px;\n}\n:hover {\n  transform: scale(1.2);\n}\n\n"]))),kn.b.div(_||(_=Object(en.a)(["\n    flex-direction: row;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    padding: 10px;\n"]))),kn.b.img(N||(N=Object(en.a)(["\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"]))),kn.b.p(F||(F=Object(en.a)(["\ntext-align: left;\nwidth: 125px;\nfont-size: 1rem;\n"]))),kn.b.p(M||(M=Object(en.a)(["\ntext-align: left;\nfont-size: 0.75rem;\n"]))),kn.b.div(z||(z=Object(en.a)(["\nwidth: 30%;\n@media (max-width: 565px) {\n  width: 80%;\n}\n"])))),Bn=(t(649),t(650),t(786)),Gn=t(809),qn=t(808),Qn=t(807),Jn=t(811),Vn=t(810),Zn=t(812),$n=t(1),ne=kn.b.button(R||(R=Object(en.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),ee=kn.b.button(P||(P=Object(en.a)(["\n  font-family: 'coder';\n  padding: 10px;\n  font-size: 1rem;\n  border-radius: 6px;\n  border: none;\n  background-color: black;\n  padding: 10px;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: white;\n  width: 270px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px black;\n  -webkit-box-shadow: 0px 6px 0px -2px black;\n  -moz-box-shadow: 0px 6px 0px -2px black;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),te=kn.b.button(D||(D=Object(en.a)(["\n  font-family: 'coder';\n  font-size: 0.75rem;\n  border-radius: 10px;\n  background-color: #F48C2C;\n  font-weight: bold;\n  color: white;\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  letter-spacing: 2px;\n  :hover {\n    color: black;\n  }\n  @media (max-width: 565px) {\n    width: 200px;\n    height: 50px;\n    font-size: 0.75rem;\n  }\n"]))),ie=kn.b.button(L||(L=Object(en.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: transparent;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 30px;\n  color: white;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    color: silver;\n  }\n"]))),ae=kn.b.div(I||(I=Object(en.a)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nalign-content: center;\ngap: 10%;\nwidth: 300px;\n"]))),oe=kn.b.div(U||(U=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: center;\n  margin: auto;\n  width: 70%;\n  border: 8px solid white;\n  border-radius: 40px;\n  background: #7f9fd8;\n    @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),re=kn.b.div(Y||(Y=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  max-height: 80px;\n  padding: 10px;\n  background-color : #252525;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n  @media (max-width: 565px) {\n    max-height: 220px;\n  }\n"]))),ce=kn.b.img(K||(K=Object(en.a)(["\n  display: inline;\n  width: 200px;\n  @media (max-width: 767px) {\n    width: 150px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),se=kn.b.img(W||(W=Object(en.a)(["\n  width: 450px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 450px;\n  }\n  @media (min-width: 1000px) {\n    width: 450px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),de=(kn.b.img(X||(X=Object(en.a)(["\n  width: 100%;\n  border-radius: 5px;\n  transition: width 0.5s;\n"]))),kn.b.img(H||(H=Object(en.a)(["\n  width: 220px;\n  height: 220px;\n  border-radius: 5px;\n  @media (min-width: 900px) {\n    width: 220px;\n    height: 220px;\n  }\n  @media (min-width: 1000px) {\n    width: 220px;\n    height: 220px;\n  }\n  transition: width 0.5s;\n  @media (max-width: 565px) {\n    width: 200px;\n  }\n"]))),kn.b.a(B||(B=Object(en.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])))),le=kn.b.div(G||(G=Object(en.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: transparent;\n  //padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 180px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px white;\n  -webkit-box-shadow: 0px 4px 0px -2px white;\n  -moz-box-shadow: 0px 4px 0px -2px white;\n  @media (max-width: 565px) {\n    margin-top: 20px;\n  \n"])));var xe,pe,be,he,ge,je,ue,fe,me=function(){var n=Object(tn.b)(),e=Object(tn.c)((function(n){return n.blockchain})),t=Object(tn.c)((function(n){return n.data})),i=Object(q.useState)("Not Connected"),a=Object(nn.a)(i,2),o=a[0],r=a[1],c=Object(q.useState)(!1),s=Object(nn.a)(c,2),d=s[0],l=s[1],x=Object(q.useState)(""),p=Object(nn.a)(x,2),b=p[0],h=p[1],g=Object(q.useState)(1),j=Object(nn.a)(g,2),u=j[0],f=j[1],m=Object(q.useState)("2px solid #FFFFFF"),O=Object(nn.a)(m,2),w=O[0],y=O[1],v=Object(q.useState)("0px 0px 3px 0px #FFFFFF"),k=Object(nn.a)(v,2),E=k[0],S=k[1],C=Object(q.useState)("red"),T=Object(nn.a)(C,2),A=T[0],_=T[1],N=Q.a.useState("info"),F=Object(nn.a)(N,2),M=(F[0],F[1],Q.a.useState("topStart")),z=Object(nn.a)(M,2),R=z[0],P=(z[1],Object($n.jsx)(Qn.a,{type:"error",header:"error",closable:!0,children:"Sorry, something went wrong please try again later."})),D=Object($n.jsx)(Qn.a,{type:"success",header:"success",closable:!0,children:"Congrats, Mint Was successfull."}),L=Object($n.jsxs)(Qn.a,{type:"info",header:"success",closable:!0,children:[Object($n.jsx)(Vn.a,{})," Minting in Progress...."]}),I=Object(q.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,FREE_SUPPLY:1,DISPLAY_COST:0,GAS_LIMIT:0,MAX_PER_TX:0,MAX_PER_TX_FREE:0,MARKETPLACE:"",MARKETPLACE_LINK:"",Telegram:"",Discord:"",Twitter:"",SHOW_BACKGROUND:!1}),U=Object(nn.a)(I,2),Y=U[0],K=U[1],W=function(){""!==e.account&&null!==e.smartContract&&(n(On(e.account)),r(e.account.substring(0,4)+"..."+e.account.substring(38,42)),_("green"))},X=function(){var n=Object($.a)(Object(Z.a)().mark((function n(){var e,t;return Object(Z.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,K(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(q.useEffect)((function(){X()}),[]),Object(q.useEffect)((function(){W()}),[e.account]),Object($n.jsx)(En,{children:Object($n.jsxs)(_n,{flex:1,style:{backgroundColor:"#7f9fd3"},image:Y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object($n.jsxs)(re,{children:[Object($n.jsx)(ae,{children:Object($n.jsx)("a",{href:"#",target:"_blank",children:Object($n.jsx)(ce,{alt:"logo",src:"/config/images/logo.png"})})}),Object($n.jsxs)(Kn,{children:[Object($n.jsx)(Ln,{href:"#story",style:{fontSize:23},children:"Story"}),Object($n.jsx)(Ln,{href:"#sneak",style:{fontSize:23},children:"Sneak Peaks"}),Object($n.jsx)(Ln,{href:"#faq",style:{fontSize:23},children:"FAQ"})]}),Object($n.jsxs)(Un,{children:[Object($n.jsxs)(Yn,{children:[Object($n.jsx)("a",{href:Y.Twitter,target:"_blank",children:Object($n.jsx)(In,{src:"/config/images/twitter.svg",alt:"twitter"})}),Object($n.jsx)("a",{href:Y.MARKETPLACE_LINK,target:"_blank",children:Object($n.jsx)(In,{src:"/config/images/opensea.svg",alt:"opensea"})})]}),Object($n.jsx)(le,{children:""!==e.account?Object($n.jsx)($n.Fragment,{children:Object($n.jsxs)(Rn,{style:{fontSize:"1rem",color:"white"},children:[Object($n.jsx)(Zn.a,{color:A})," ",o]})}):null})]})]}),Object($n.jsx)(An,{}),Object($n.jsx)(_n,{flex:1,jc:"center",ai:"center",children:Object($n.jsxs)(Fn,{children:["Mint Your ",Y.NFT_NAME]})}),Object($n.jsx)(Cn,{}),Object($n.jsxs)(oe,{flex:1,style:{padding:24},test:!0,children:[Object($n.jsx)(se,{src:"/config/images/13.gif",alt:"image"}),Object($n.jsx)(Cn,{}),Object($n.jsxs)(_n,{flex:1,jc:"center",ai:"center",children:[Number(t.totalSupply)>=Y.MAX_SUPPLY?Object($n.jsxs)($n.Fragment,{children:[Object($n.jsx)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:"The sale has ended."}),Object($n.jsxs)(Pn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:["You can still find ",Y.NFT_NAME," on"]}),Object($n.jsx)(Cn,{}),Object($n.jsx)(de,{target:"_blank",href:Y.MARKETPLACE_LINK,children:Y.MARKETPLACE})]}):Object($n.jsxs)($n.Fragment,{children:[Number(t.totalSupply)+u<=Y.FREE_SUPPLY?Object($n.jsxs)($n.Fragment,{children:[Object($n.jsxs)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",Y.FREE_SUPPLY]}),Object($n.jsx)(Cn,{}),Object($n.jsx)(zn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:"Free MINT"}),Object($n.jsx)(Tn,{})]}):Object($n.jsxs)($n.Fragment,{children:[Object($n.jsxs)(Mn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder"},children:[t.totalSupply," | ",Y.MAX_SUPPLY]}),Object($n.jsx)(Cn,{}),Object($n.jsxs)(zn,{style:{background:"white",borderRadius:5,padding:8,color:"black"},children:["Price\u2003\u2003\u2003\u2003\u2003",Y.DISPLAY_COST," ",Y.NETWORK.SYMBOL]}),Object($n.jsx)(Tn,{})]}),""===e.account||null===e.smartContract?Object($n.jsx)($n.Fragment,{children:Object($n.jsxs)(_n,{ai:"center",jc:"center",children:[Object($n.jsx)(Cn,{}),Object($n.jsxs)(ee,{onClick:function(e){e.preventDefault(),n(yn()),W()},children:["CONNECT Wallet",Object($n.jsx)("img",{style:{width:30,paddingLeft:10},src:"/config/images/mm.svg"})]}),""!==e.errorMsg?Object($n.jsxs)($n.Fragment,{children:[Object($n.jsx)(Cn,{}),Object($n.jsx)(Pn,{style:{textAlign:"center",color:"var(--accent-text)",fontFamily:"coder",fontSize:20},children:e.errorMsg})]}):null]})}):Object($n.jsxs)($n.Fragment,{children:[Object($n.jsxs)(Nn,{style:{border:w,boxShadow:E},children:[Object($n.jsx)(ie,{style:{lineHeight:.4},disabled:d?1:0,onClick:function(n){n.preventDefault(),function(){var n=u-1;n<1&&(n=1),f(n)}()},children:"-"}),Object($n.jsxs)(Dn,{children:["\u2002\u2002\u2002\u2002",u,"\u2002\u2002\u2002\u2002"]}),Object($n.jsx)(Tn,{}),Object($n.jsx)(ie,{disabled:d?1:0,onClick:function(n){n.preventDefault(),function(){var n=u+1;Number(t.totalSupply)+u<=Y.FREE_SUPPLY?n>Y.MAX_PER_TX_FREE&&(n=Y.MAX_PER_TX_FREE):n>Y.MAX_PER_TX&&(n=Y.MAX_PER_TX),f(n)}()},children:"+"})]}),Object($n.jsx)(Cn,{}),Object($n.jsx)(te,{onClick:function(n){n.preventDefault(),Number(t.totalSupply)+u<=Y.FREE_SUPPLY?f(Y.MAX_PER_TX_FREE):f(Y.MAX_PER_TX)},children:"SetMax"}),Object($n.jsx)(Cn,{}),Object($n.jsx)(Cn,{}),Number(t.totalSupply)+u<=Y.FREE_SUPPLY?Object($n.jsxs)($n.Fragment,{children:[Object($n.jsx)(zn,{style:{color:"black"},children:"FREE"}),Object($n.jsx)(Cn,{}),Object($n.jsx)(Sn,{})]}):Object($n.jsxs)($n.Fragment,{children:[Object($n.jsxs)(zn,{style:{color:"black"},children:["Total\u2003\u2003\u2003\u2003\u2003",(Y.DISPLAY_COST*u).toString().substring(0,6)," ",Y.NETWORK.SYMBOL]}),Object($n.jsx)(Cn,{}),Object($n.jsx)(Sn,{})]}),Object($n.jsx)(_n,{ai:"center",jc:"center",fd:"column",children:Number(t.totalSupply)+u<=Y.FREE_SUPPLY?Object($n.jsx)($n.Fragment,{children:Object($n.jsx)(ne,{disabled:d?1:0,onClick:function(t){t.preventDefault(),function(){var t=Y.GAS_LIMIT,i=String(t);console.log("Gas limit: ",i),h("Minting your ".concat(Y.NFT_NAME,"...")),l(!0),y("2px solid yellow"),S("0px 0px 3px 0px yellow"),Jn.a.push(L,{placement:R}),e.smartContract.methods.freemint(u).send({gasLimit:String(i),to:Y.CONTRACT_ADDRESS,from:e.account,value:0}).once("error",(function(n){console.log(n),h("Sorry, something went wrong please try again later."),l(!1),Jn.a.push(P,{placement:R}),y("2px solid red"),S("0px 0px 3px 0px red")})).then((function(t){console.log(t),h("WOW, the ".concat(Y.NFT_NAME," is yours! go visit Opensea.io to view it.")),Jn.a.push(D,{placement:R}),y("2px solid green"),S("0px 0px 3px 0px green"),l(!1),n(On(e.account))}))}(),W()},children:d?Object($n.jsx)(Vn.a,{speed:"fast",content:"Minting..."}):"Free MINT"})}):Object($n.jsx)($n.Fragment,{children:Object($n.jsx)(ne,{disabled:d?1:0,onClick:function(t){t.preventDefault(),function(){var t=Y.DISPLAY_COST*u,i=cn.a.utils.toWei(t.toString(),"ether"),a=Y.GAS_LIMIT,o=String(a);console.log("Cost: ",i),console.log("Gas limit: ",o),h("Minting your ".concat(Y.NFT_NAME,"...")),l(!0),y("2px solid yellow"),S("0px 0px 3px 0px yellow"),Jn.a.push(L,{placement:R}),e.smartContract.methods.mint(u).send({gasLimit:String(o),to:Y.CONTRACT_ADDRESS,from:e.account,value:i}).once("error",(function(n){console.log(n),h("Sorry, something went wrong please try again later."),l(!1),Jn.a.push(P,{placement:R}),y("2px solid red"),S("0px 0px 3px 0px red")})).then((function(t){console.log(t),h("WOW, the ".concat(Y.NFT_NAME," is yours! go visit Opensea.io to view it.")),Jn.a.push(D,{placement:R}),y("2px solid green"),S("0px 0px 3px 0px green"),l(!1),n(On(e.account))}))}(),W()},children:d?Object($n.jsx)(Vn.a,{speed:"fast",content:"Minting..."}):"MINT"})})}),Object($n.jsx)(Sn,{}),Number(t.totalSupply)+u<=Y.FREE_SUPPLY?Object($n.jsxs)($n.Fragment,{children:[Object($n.jsxs)(Rn,{style:{fontSize:15},children:["Max ",Y.MAX_PER_TX_FREE," Per Wallet Free"]}),Object($n.jsx)(Sn,{})]}):Object($n.jsxs)($n.Fragment,{children:[Object($n.jsxs)(Rn,{style:{fontSize:15},children:["Max ",Y.MAX_PER_TX," Per Tx"]}),Object($n.jsx)(Sn,{})]}),Object($n.jsx)(Rn,{style:{textAlign:"center",fontSize:"1rem"},children:b})]})]}),Object($n.jsx)(Tn,{})]}),Object($n.jsx)(An,{})]}),Object($n.jsx)(An,{}),Object($n.jsxs)(Wn,{id:"story",children:[Object($n.jsx)(Fn,{children:"STORY"}),Object($n.jsx)(An,{}),Object($n.jsxs)(Xn,{style:{fontSize:23},children:["The Nakamigos Opepen Edition are here! The ultimate fusion between the trendy Nakamigos and the still to be revealed Opepen NFTs. Mint your Opepen Nakamigo now and explore the collection! Discover how Nakamigos can transform into the Opepen World and join our community. Nakamigos Opepen Edition are all about community and connecting: Go on twitter and connect with EVERYONE who rocks a Nakamigos Opepe! Post about the project & the community and do your part in turning this into a success!",Object($n.jsx)("br",{}),"Every Nakamigos Opepen Edition will be your whitelist/ early access pass for all upcoming projects of the artist and creator @TheDawgNFT!",Object($n.jsx)("br",{}),Object($n.jsx)("br",{}),"Enjoy!"]})]}),Object($n.jsxs)(Wn,{id:"sneak",children:[Object($n.jsx)(Fn,{children:"Sneak Peaks"}),Object($n.jsx)(An,{}),Object($n.jsx)(Hn,{children:Object($n.jsxs)(qn.a,{autoplay:!0,className:"custom-slider",style:{padding:0,margin:0,backgroundColor:"#7f9fd3"},children:[Object($n.jsx)("img",{src:"/config/images/1.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/2.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/3.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/4.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/5.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/6.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/7.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/8.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/9.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}}),Object($n.jsx)("img",{src:"/config/images/10.png",style:{width:"100%",height:"100%",objectFit:"contain",padding:0,margin:0,backgroundColor:"#7f9fd3"}})]})})]}),Object($n.jsxs)(Wn,{id:"faq",children:[Object($n.jsx)(Fn,{children:"FAQ"}),Object($n.jsx)(An,{}),Object($n.jsxs)(Bn.a,{style:{width:"80%",borderColor:"#A9D0D2"},accordion:!0,bordered:!0,children:[Object($n.jsx)(Gn.a,{header:"What can I do with my Nakamigos Opepen Edition?",defaultExpanded:!0,children:Object($n.jsx)(Xn,{style:{textAlign:"left",fontSize:20},children:"The NFTs are distributed under cc0 rights. You can copy, modify and distribute the work, even for commercial purposes, all without asking permission."})}),Object($n.jsx)(Gn.a,{header:"Who are the creators of Nakamigos Opepen Edition?",defaultExpanded:!0,children:Object($n.jsx)(Xn,{style:{textAlign:"left",fontSize:20},children:"The creators of this collection are @TheDawgNFT and @jackbutcher \ud83d\ude09"})}),Object($n.jsx)(Gn.a,{header:"Will we go to the moon?",children:Object($n.jsx)(Xn,{style:{textAlign:"left"},children:"Yes of course but only if YOU share your Nakamigo Opepen on Twitter (click on the logo below) and link us."})}),Object($n.jsx)(Gn.a,{header:"What can I do to help?",children:Object($n.jsx)(Xn,{style:{textAlign:"left"},children:"Like all our posts on @TheDawgNFT, connect with everyone rocking a Nakamigos Opepen Edition pfp and post about your new NFT. You guys are the strongest marketing tool!          "})}),Object($n.jsx)(Gn.a,{header:"When is public mint?",children:Object($n.jsx)(Xn,{style:{textAlign:"left"},children:"Public mint starts at SUNDAY 9th April at 6pm est."})}),Object($n.jsx)(Gn.a,{header:"Can anyone participate in the mint?",children:Object($n.jsx)(Xn,{style:{textAlign:"left"},children:"Yes!"})}),Object($n.jsx)(Gn.a,{header:"What is the mint price?",children:Object($n.jsx)(Xn,{style:{textAlign:"left"},children:"Mint price will be 0.0025 eth each. (Max 10 per Tx)"})})]})]}),Object($n.jsxs)(Wn,{id:"",children:[Object($n.jsxs)(Yn,{children:[Object($n.jsx)("a",{href:Y.Twitter,target:"_blank",children:Object($n.jsx)(In,{src:"/config/images/twitter.svg",alt:"twitter"})}),Object($n.jsx)("a",{href:Y.MARKETPLACE_LINK,target:"_blank",children:Object($n.jsx)(In,{src:"/config/images/opensea.svg",alt:"opensea"})})]}),Object($n.jsx)(An,{}),Object($n.jsx)(Xn,{children:"Created by TheDawgNFT"})]}),Object($n.jsx)(Tn,{})]})})};kn.b.button(xe||(xe=Object(en.a)(["\n  font-family: 'Upheaval';\n  padding: 10px;\n  font-size: 24px;\n  border-radius: 6px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  letter-spacing: 6px;\n  // font-weight: bold;\n  color: #7167E3;\n  width: 450px;\n  height: 50px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),kn.b.button(pe||(pe=Object(en.a)(["\n  padding: 10px;\n  border-radius: 10px;\n  border: none;\n  background-color: #fff;\n  padding: 10px;\n  // font-weight: bold;\n  font-size: 50px;\n  color: #7167E3;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),kn.b.div(be||(be=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  // margin: auto;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),kn.b.div(he||(he=Object(en.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),kn.b.img(ge||(ge=Object(en.a)(["\n  display: inline;\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),kn.b.img(je||(je=Object(en.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  // border: 4px dashed var(--secondary);\n  // background-color: var(--accent);\n  // border-radius: 100%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 350px;\n  }\n  @media (min-width: 1000px) {\n    width: 400px;\n  }\n  transition: width 0.5s;\n"]))),kn.b.a(ue||(ue=Object(en.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))),kn.b.div(fe||(fe=Object(en.a)(["\n  text-decoration: none;\n  border-radius: 10px;\n  border: 2px solid white;\n  background-color: #7167E3;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  width: 250px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n"])));var Oe,we=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,813)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),o(n),r(n)}))},ye=(t(795),t.p+"static/media/RenoMono.8b239c68.otf"),ve=t.p+"static/media/upheavtt.e3d365ba.ttf",ke=Object(kn.a)(Oe||(Oe=Object(en.a)(["\n    @font-face {\n        font-family: 'Upheaval';\n        src: url(",") format('truetype');\n    }\n\n    @font-face {\n        font-family: 'Renomono';\n        src: url(",") format('opentype');\n    }\n"])),ve,ye);V.a.render(Object($n.jsxs)(tn.a,{store:fn,children:[Object($n.jsx)(ke,{}),Object($n.jsx)(me,{})]}),document.getElementById("root")),we()}},[[796,1,2]]]);
//# sourceMappingURL=main.983a56c8.chunk.js.map