(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{6409:(e,s,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/control/events-transfer",function(){return n(229)}])},3562:(e,s,n)=>{"use strict";n.d(s,{A:()=>v});var a=n(4848),r=n(6715),l=n(1106),t=n.n(l),i=n(6540),o=n(898);let c=()=>{let e=(0,r.useRouter)(),s=s=>e.pathname.startsWith(s),n=e.pathname.startsWith("/control"),[l,c]=(0,i.useState)(n);return(0,a.jsxs)("div",{className:"sidebar__container",children:[(0,a.jsx)("div",{className:"dashboardLink",children:(0,a.jsx)(t(),{href:"/dashboard",className:s("/dashboard")?"active":"",children:"Dashboard"})}),(0,a.jsx)("div",{className:"eventsLink",children:(0,a.jsx)(t(),{href:"/events",className:s("/events")?"active":"",children:"Events"})}),(0,a.jsx)("div",{className:"trapsLink",children:(0,a.jsx)(t(),{href:"/traps",className:s("/traps")?"active":"",children:"Honeypots"})}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(t(),{href:"",onClick:()=>c(e=>!e),className:"controlLink",children:[(0,a.jsx)("span",{className:"controlLink__text",children:"Control"}),(0,a.jsx)(o.A,{className:"arrowIcon ".concat(l?"expanded":"")})]}),(0,a.jsxs)("div",{className:"controlSubLinks ".concat(l?"open":""),children:[(0,a.jsx)("div",{className:"authMethodLink",children:(0,a.jsx)(t(),{href:"/control/auth-method",className:s("/control/auth-method")?"active":"",children:"Auth Method"})}),(0,a.jsx)("div",{className:"eventsTransferLink",children:(0,a.jsx)(t(),{href:"/control/events-transfer",className:s("/control/events-transfer")?"active":"",children:"Events Transfer"})}),(0,a.jsx)("div",{className:"notificationsLink",children:(0,a.jsx)(t(),{href:"/control/notifications",className:s("/control/notifications")?"active":"",children:"Notifications"})})]})]}),(0,a.jsx)("div",{className:"settingsLink",children:(0,a.jsx)(t(),{href:"/settings",className:s("/settings")?"active":"",children:"Settings"})})]})};var d=n(2064),h=n(2424),x=n(1917),j=n(6550);let m=()=>{let e=(0,r.useRouter)();return(0,a.jsxs)(d.A,{className:"headerBar",children:[(0,a.jsx)(h.A,{edge:"start",color:"inherit","aria-label":"menu",style:{marginLeft:"10px"},onClick:()=>{e.push("/")},children:(0,a.jsx)(j.A,{})}),(0,a.jsx)("div",{className:"loginButton",children:(0,a.jsx)(x.A,{sx:{color:"black",fontSize:"20px"},children:"Login"})})]})};function v(e){let{children:s}=e;return(0,a.jsxs)("div",{className:"mainLayout__container",children:[(0,a.jsx)(c,{}),(0,a.jsxs)("div",{className:"mainLayout__main",children:[(0,a.jsx)(m,{}),(0,a.jsx)("main",{className:"mainLayout__content",children:s})]})]})}},229:(e,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>_});var a=n(4848),r=n(6540),l=n(3562),t=n(1917),i=n(1771),o=n(9990),c=n(258),d=n(7568),h=n(8036),x=n(44),j=n(1703),m=n(1303);let v=[u("Domendomen","192.168.0.1","Protocolprotocol"),u("Domendomen","192.168.0.1","Protocolprotocol"),u("Domendomen","192.168.0.1","Protocolprotocol")];function u(e,s,n){return{fqdn:e,ip:s,protocol:n}}let f=()=>(0,a.jsx)("div",{children:(0,a.jsx)(x.A,{component:j.A,sx:{minHeight:"500px"},children:(0,a.jsxs)(i.A,{"aria-label":"simple table",children:[(0,a.jsx)(d.A,{children:(0,a.jsxs)(h.A,{children:[(0,a.jsx)(c.A,{sx:{backgroundColor:"#dadada90"},children:"FQDN"}),(0,a.jsxs)(c.A,{sx:{backgroundColor:"#dadada90"},children:["IP address"," "]}),(0,a.jsx)(c.A,{sx:{backgroundColor:"#dadada90"},children:"Protocol of Transfer"})]})}),(0,a.jsx)(o.A,{children:v.map(e=>(0,a.jsxs)(h.A,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(c.A,{component:"th",scope:"row",children:e.fqdn}),(0,a.jsx)(c.A,{children:e.ip}),(0,a.jsx)(c.A,{children:e.protocol})]},(0,m.A)()))})]})})});var N=n(5493),A=n(6903),p=n(2594),b=n(4543);let k=e=>{let{open:s,handleClose:n}=e;return(0,a.jsxs)(N.A,{open:s,onClose:n,children:[(0,a.jsx)(A.A,{children:(0,a.jsxs)("div",{className:"addEventsTransferDialog",children:[(0,a.jsx)(p.A,{fullWidth:!0,label:"Enter FQDN",variant:"outlined",size:"small"}),(0,a.jsx)(p.A,{fullWidth:!0,label:"Enter IP",variant:"outlined",size:"small"}),(0,a.jsx)(p.A,{fullWidth:!0,label:"Protocol",variant:"outlined",size:"small"})]})}),(0,a.jsxs)(b.A,{className:"eventsTransferDialogActions",children:[(0,a.jsx)(t.A,{onClick:n,sx:{color:"black"},children:"Cancel"}),(0,a.jsx)(t.A,{type:"button",variant:"contained",sx:{color:"white",backgroundColor:"black"},children:"Add"})]})]})},_=()=>{let[e,s]=(0,r.useState)(!1);return(0,a.jsxs)(l.A,{children:[(0,a.jsxs)("div",{className:"eventsTransfer__container",children:[(0,a.jsx)("div",{className:"addEventsTransferButton",children:(0,a.jsx)(t.A,{sx:{color:"white",width:"110px",fontSize:"18px",backgroundColor:"black","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.7)"}},onClick:()=>{s(!0)},children:"Add"})}),(0,a.jsx)("div",{className:"eventsTransferTable",children:(0,a.jsx)(f,{})})]}),(0,a.jsx)(k,{open:e,handleClose:()=>{s(!1)}})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[84,594,466,541,636,593,792],()=>s(6409)),_N_E=e.O()}]);