"use strict";(self.webpackChunkfusion_docs=self.webpackChunkfusion_docs||[]).push([[4403],{1896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var i=t(5893),s=t(1151);const r={},a="A319/A320 Fleet Bulletins",o={id:"UAL/bulletins/A32F",title:"A319/A320 Fleet Bulletins",description:"---",source:"@site/docs/UAL/09-bulletins/A32F.md",sourceDirName:"UAL/09-bulletins",slug:"/UAL/bulletins/A32F",permalink:"/sabre-staging/docs/UAL/bulletins/A32F",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"UALSidebar",previous:{title:"Operations and Fleet Bulletins",permalink:"/sabre-staging/docs/UAL/bulletins/bulletins"},next:{title:"B738/B38M Fleet Bulletins",permalink:"/sabre-staging/docs/UAL/bulletins/B738B38M"}},l={},h=[{value:"25 DEC 23 | United Airlines A319/A320 Engine Variants and the Fenix A320",id:"25-dec-23--united-airlines-a319a320-engine-variants-and-the-fenix-a320",level:3},{value:"Summary",id:"summary",level:3},{value:"25 DEC 23 | Flap Retraction when Parking in High Temperatures",id:"25-dec-23--flap-retraction-when-parking-in-high-temperatures",level:3},{value:"Summary",id:"summary-1",level:4},{value:"25 DEC 23 | Fenix A320 and GSX: False Takeoffs in Log",id:"25-dec-23--fenix-a320-and-gsx-false-takeoffs-in-log",level:3},{value:"Summary",id:"summary-2",level:4},{value:"Suggested Actions",id:"suggested-actions",level:4}];function d(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"a319a320-fleet-bulletins",children:"A319/A320 Fleet Bulletins"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"25-dec-23--united-airlines-a319a320-engine-variants-and-the-fenix-a320",children:"25 DEC 23 | United Airlines A319/A320 Engine Variants and the Fenix A320"}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"United Airlines operates both the A319 and A320 exclusively using IAE V2500 engines. The Fenix A320 is currently only modeled with CFM engines (and the A319 is not yet released)."}),"\n",(0,i.jsx)(n.p,{children:"As we await the release of Fenix Block 2 with IAE engines, use of CFM engines is permitted. When the IAEs are released, there will be a transition period where we reset the approved A320 liveries inside vAMSYS and start cautioning pilots who file PIREPs with CFM engines, and at the end of that transition period we will begin requiring the use of IAE engines."}),"\n",(0,i.jsx)(n.p,{children:"For all other A319/A320 addons that allow the use of IAE engines, we require that IAEs be used."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"25-dec-23--flap-retraction-when-parking-in-high-temperatures",children:"25 DEC 23 | Flap Retraction when Parking in High Temperatures"}),"\n",(0,i.jsx)(n.h4,{id:"summary-1",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"In the summer months, we regularly see PIREPs for Airbus flights where the pilot left their flaps in position 1 when parking because the outside air temperature was 30C or higher, and they were consequently deducted points by the automated PIREP scorer for not retracting flaps prior to parking."}),"\n",(0,i.jsx)(n.p,{children:"We are aware of this Airbus procedure and acknowledge it is realistic/correct. However, Pegasus does not/cannot record the temperature when you park, and even if it could the PIREP scorers do not have sufficient logic for them to know that you left the flaps out for that reason, only that you left them out."}),"\n",(0,i.jsx)(n.p,{children:"Since we cannot configure the scorer to correctly detect these conditions, you can either leave the flaps out to be realistic and accept the points deduction, or you can retract the flaps to get the points. It would be too much administrative overhead for us to correct all PIREPs for this condition, and we want to leave the flaps retracted prior to parking scorer in place to make sure pilots are following the procedure that is correct more of the time."}),"\n",(0,i.jsx)(n.p,{children:"Please reach out to us via Discord with any questions."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"25-dec-23--fenix-a320-and-gsx-false-takeoffs-in-log",children:"25 DEC 23 | Fenix A320 and GSX: False Takeoffs in Log"}),"\n",(0,i.jsx)(n.h4,{id:"summary-2",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"When using the Fenix A320 along with GSX, you may notice something similar to the following in your PIREP log in Pegasus:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[18:05:13] Engine 1 is on\n[18:05:42] Taxiing to runway\n[18:05:50] Taking off\n[18:06:34] Rejected takeoff conditions met, returning to taxiing phase\n[18:07:44] Engine 2 is on\n"})}),"\n",(0,i.jsx)(n.p,{children:'This is a known bug with how the Fenix and GSX interact with each other and is not a problem with Pegasus or vAMSYS. Unfortunately this will cause a points deduction on your PIREP \u2014 "-10 - Engines Not Warmed Up (3 Mins)" and "-100 - Flaps not set before Takeoff\u201d.'}),"\n",(0,i.jsx)(n.h4,{id:"suggested-actions",children:"Suggested Actions"}),"\n",(0,i.jsx)(n.p,{children:"If this happens to you, please leave a comment on your PIREP alerting staff. We will recognize the sequence in the log and can remove the points deductions from your PIREP."}),"\n",(0,i.jsxs)(n.p,{children:["Some users have had good luck avoiding this happening by ensuring they have removed the chocks in the Fenix EFB ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"before"})})," requesting pushback in the GSX menu, however this is not a certain fix."]}),"\n",(0,i.jsx)(n.p,{children:"For those who use FSRealistic, it has been suggested to disable the \u201cMovement\u201d feature under the \u201cWind Ambience\u201d setting, this has reportedly solved the issue for many people."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);