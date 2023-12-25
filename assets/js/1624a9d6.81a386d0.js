"use strict";(self.webpackChunkfusion_docs=self.webpackChunkfusion_docs||[]).push([[7038],{2459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=n(5893),s=n(1151);const o={sidebar_position:13},r="A32F Fleet Bulletins",a={id:"AAL/bulletins/A32F",title:"A32F Fleet Bulletins",description:"---",source:"@site/docs/AAL/09-bulletins/A32F.md",sourceDirName:"AAL/09-bulletins",slug:"/AAL/bulletins/A32F",permalink:"/sabre-staging/docs/AAL/bulletins/A32F",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"AALSidebar",previous:{title:"Operations and Fleet Bulletins",permalink:"/sabre-staging/docs/AAL/bulletins/bulletins"},next:{title:"MD-80 Fleet Bulletins",permalink:"/sabre-staging/docs/AAL/bulletins/MD80"}},l={},h=[{value:"5 JUL 23 | Flap Retraction when Parking in High Temperatures",id:"5-jul-23--flap-retraction-when-parking-in-high-temperatures",level:3},{value:"Summary",id:"summary",level:4},{value:"19 MAR 23 | Fenix A320 and GSX: False Takeoffs in Log",id:"19-mar-23--fenix-a320-and-gsx-false-takeoffs-in-log",level:3},{value:"Summary",id:"summary-1",level:4},{value:"Suggested Actions",id:"suggested-actions",level:4}];function c(e){const t={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"a32f-fleet-bulletins",children:"A32F Fleet Bulletins"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"5-jul-23--flap-retraction-when-parking-in-high-temperatures",children:"5 JUL 23 | Flap Retraction when Parking in High Temperatures"}),"\n",(0,i.jsx)(t.h4,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"In the summer months, we regularly see PIREPs for Airbus flights where the pilot left their flaps in position 1 when parking because the outside air temperature was 30C or higher, and they were consequently deducted points by the automated PIREP scorer for not retracting flaps prior to parking."}),"\n",(0,i.jsx)(t.p,{children:"We are aware of this Airbus procedure and acknowledge it is realistic/correct. However, Pegasus does not/cannot record the temperature when you park, and even if it could the PIREP scorers do not have sufficient logic for them to know that you left the flaps out for that reason, only that you left them out."}),"\n",(0,i.jsx)(t.p,{children:"Since we cannot configure the scorer to correctly detect these conditions, you can either leave the flaps out to be realistic and accept the points deduction, or you can retract the flaps to get the points. It would be too much administrative overhead for us to correct all PIREPs for this condition, and we want to leave the flaps retracted prior to parking scorer in place to make sure pilots are following the procedure that is correct more of the time."}),"\n",(0,i.jsx)(t.p,{children:"Please reach out to us via Discord with any questions."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"19-mar-23--fenix-a320-and-gsx-false-takeoffs-in-log",children:"19 MAR 23 | Fenix A320 and GSX: False Takeoffs in Log"}),"\n",(0,i.jsx)(t.h4,{id:"summary-1",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"When using the Fenix A320 along with GSX, you may notice something similar to the following in your PIREP log in Pegasus:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"[18:05:13] Engine 1 is on\n[18:05:42] Taxiing to runway\n[18:05:50] Taking off\n[18:06:34] Rejected takeoff conditions met, returning to taxiing phase\n[18:07:44] Engine 2 is on\n"})}),"\n",(0,i.jsx)(t.p,{children:'This is a known bug with how the Fenix and GSX interact with each other and is not a problem with Pegasus or vAMSYS. Unfortunately this will cause a points deduction on your PIREP \u2014 "-10 - Engines Not Warmed Up (3 Mins)" and "-100 - Flaps not set before Takeoff\u201d.'}),"\n",(0,i.jsx)(t.h4,{id:"suggested-actions",children:"Suggested Actions"}),"\n",(0,i.jsx)(t.p,{children:"If this happens to you, please leave a comment on your PIREP alerting staff. We will recognize the sequence in the log and can remove the points deductions from your PIREP."}),"\n",(0,i.jsxs)(t.p,{children:["Some users have had good luck avoiding this happening by ensuring they have removed the chocks in the Fenix EFB ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"before"})})," requesting pushback in the GSX menu, however this is not a certain fix."]}),"\n",(0,i.jsx)(t.p,{children:"For those who use FSRealistic, it has been suggested to disable the \u201cMovement\u201d feature under the \u201cWind Ambience\u201d setting, this has reportedly solved the issue for many people."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);