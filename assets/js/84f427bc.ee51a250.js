"use strict";(self.webpackChunkfusion_docs=self.webpackChunkfusion_docs||[]).push([[8130],{247:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=t(5893),r=t(1151);const a={sidebar_position:9},o="Chatper 3: Flight Planning",l={id:"NKS/fom/flight_planning",title:"Chatper 3: Flight Planning",description:"Not intended for real world pilotage. For entertainment purposes only. Consult your manufacturer, operator, and/or local regulatory body for all operational requirements.",source:"@site/docs/NKS/05-fom/flight_planning.md",sourceDirName:"NKS/05-fom",slug:"/NKS/fom/flight_planning",permalink:"/sabre-staging/docs/NKS/fom/flight_planning",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"NKSSidebar",previous:{title:"Chapter 2: General Operations and Policies",permalink:"/sabre-staging/docs/NKS/fom/general_operations_and_policies"},next:{title:"Chapter 4: Operational Flight Plan (OFP) Format",permalink:"/sabre-staging/docs/NKS/fom/ofp"}},s={},h=[{value:"\u201cMANUAL ROUTE PLANNING REQUIRED\u201d",id:"manual-route-planning-required",level:2},{value:"Cost Index",id:"cost-index",level:2},{value:"Weight and Balance",id:"weight-and-balance",level:2},{value:"Fuel Requirements",id:"fuel-requirements",level:2},{value:"Extra Fuel and ETOPS Planning",id:"extra-fuel-and-etops-planning",level:3},{value:"Domestic and International Fuel Reserves",id:"domestic-and-international-fuel-reserves",level:3},{value:"Example SimBrief Fuel Reserve Settings (A320)",id:"example-simbrief-fuel-reserve-settings-a320",level:3},{value:"Weather Minima",id:"weather-minima",level:3},{value:"Alternate Airports (3-2-1 Rule)",id:"alternate-airports-3-2-1-rule",level:3},{value:"Diversions",id:"diversions",level:2}];function d(e){const i={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"chatper-3-flight-planning",children:"Chatper 3: Flight Planning"}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Not intended for real world pilotage. For entertainment purposes only. Consult your manufacturer, operator, and/or local regulatory body for all operational requirements."})}),"\n",(0,n.jsx)(i.h2,{id:"manual-route-planning-required",children:"\u201cMANUAL ROUTE PLANNING REQUIRED\u201d"}),"\n",(0,n.jsx)(i.p,{children:"The current state of vAMSYS's integration with SimBrief includes a limitation when it comes to regarding Standard Instrument Departures (SIDs) and Standard Arrival Routes (STARs)."}),"\n",(0,n.jsx)(i.p,{children:"If you book a flight with the Dispatch via SimBrief method, the route given by vAMSYS will start with the exit waypoint of the SID that SimBrief selected and will end at the entry waypoint for the STAR."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"TRYTN3 LOOSE MEM J42 GVE KORRY4"})}),"\n",(0,n.jsx)(i.p,{children:"However, if you booked with the Dispatch via SimBrief method, you would only be given the following:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"LOOSE DCT MEM J42 GVE"})}),"\n",(0,n.jsxs)(i.p,{children:["Unfortunately, as it is a limitation of the platform in the current version, ",(0,n.jsx)(i.strong,{children:"vAAL"})," does not have any control over this part of the dispatch process in vAMSYS. We will advocate for more robust route generation functionality in future versions."]}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Pilots should not construe the lack of SID or STAR in the route in vAMSYS as permission, an endorsement, or a requirement to fly the route without the appropriate SID and/or STAR.  The opposite is true: the pilot is expected and required to plan the flight with the appropriate SID and/or STAR and to include those in the filed flight plan, where appropriate, if flying online."})}),"\n",(0,n.jsx)(i.h2,{id:"cost-index",children:"Cost Index"}),"\n",(0,n.jsxs)(i.p,{children:["If you prefer a fixed CI to use for your flights, we recommend a baseline cost index (CI) of ",(0,n.jsx)(i.strong,{children:"21"})," for ",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"vspirit"})}),"."]}),"\n",(0,n.jsx)(i.p,{children:"However, cost indices are variable and are calculated by wind/weather, delays, and other operational factors into account, so this is not a fixed value in real world operations. You may prefer to let your flight planning tool (SimBrief, etc.) calculate the CI automatically for each flight to replicate this variability."}),"\n",(0,n.jsx)(i.h2,{id:"weight-and-balance",children:"Weight and Balance"}),"\n",(0,n.jsxs)(i.p,{children:["Each aircraft add-on is modeled by the developer to represent different subvariants and reference aircraft, and so it is impossible for there to be a standardized aircraft weights and payloads across the ",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"vspirit"})})," fleet."]}),"\n",(0,n.jsx)(i.p,{children:"Some addons, such as the FSLabs Airbus family, will allow some customization of aircraft weight and payloads. Each addon will also vary regarding the standard weight for passengers and bags."}),"\n",(0,n.jsx)(i.p,{children:"When booking a flight with the Dispatch via SimBrief method, the default values of 230 pounds per passenger (175 for the person, 55 for their bags) will be used. The Cargo field in the booking screen will therefore always be empty as the weight of bags is already factored into the passenger weight."}),"\n",(0,n.jsx)(i.h2,{id:"fuel-requirements",children:"Fuel Requirements"}),"\n",(0,n.jsxs)(i.admonition,{type:"warning",children:[(0,n.jsx)(i.p,{children:"It is each pilot\u2019s responsibility to ensure when planning their flight that they carry enough fuel on board to reach their destination, as well as fuel for any required alternates and/or contingency fuel."}),(0,n.jsxs)(i.p,{children:["Pegasus will detect ",(0,n.jsx)(i.em,{children:"any and all"})," instances of fuel changes in-flight, and any PIREP with a fuel increase during flight is subject to immediate invalidation without appeal by the admin/staff team."]}),(0,n.jsx)(i.p,{children:"If a flight cannot be completed due to the fuel load, the pilot should divert to the closest company airport rather than increase fuel in flight. Diverting appropriately combined with an honest assessment in the required PIREP comment will upgrade the resulting PIREP from invalidation to rejection (hours granted, no points)."})]}),"\n",(0,n.jsx)(i.h3,{id:"extra-fuel-and-etops-planning",children:"Extra Fuel and ETOPS Planning"}),"\n",(0,n.jsx)(i.p,{children:"When booking a flight via the Dispatch via SimBrief method, a pop-up window will appear offering an Extra Fuel amount \u2013 defaulted to zero pounds \u2013 and a tick box to enable ETOPS planning."}),"\n",(0,n.jsx)(i.p,{children:"The ETOPS Planning tick box corresponds to the ETOPS Planning tick box in the New Flight screen on the SimBrief site and selects whether SimBrief should find ETOPS alternates if the route requires them."}),"\n",(0,n.jsx)(i.h3,{id:"domestic-and-international-fuel-reserves",children:"Domestic and International Fuel Reserves"}),"\n",(0,n.jsx)(i.p,{children:"All flights are prohibited from pushing back from the gate unless the following fuel requirements are met:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Domestic Flights:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Sufficient fuel to fly to the destination airport"}),"\n",(0,n.jsx)(i.li,{children:"Sufficient fuel to fly to the most distant filed alternate (if an alternate is required)"}),"\n",(0,n.jsx)(i.li,{children:"45 minutes of normal cruising fuel consumption (FAR Reserve)"}),"\n",(0,n.jsxs)(i.li,{children:["15 minutes additional fuel, ",(0,n.jsx)(i.strong,{children:"OR"})," the following minimum arrival fuel quantity, whichever is greater:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A319: 5,000 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A320: 5,500 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A20N: 4,600 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A321: 6,000 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A21N: 5,300 lbs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"International Flights (Flag):"}),"\nYou may apply the domestic reserve fuel policy to all international destinations that are within 950 nautical miles of the Continental United States. All destinations outside of that 950 nm range must follow the flag fuel reserve policy:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Sufficient fuel to fly to the destination airport"}),"\n",(0,n.jsx)(i.li,{children:"Sufficient fuel to fly to the most distant filed alternate (if an alternate is required)"}),"\n",(0,n.jsx)(i.li,{children:"30 minutes of normal cruising fuel consumption (FAR Reserve)"}),"\n",(0,n.jsx)(i.li,{children:"10% contingency fuel"}),"\n",(0,n.jsxs)(i.li,{children:["15 minutes additional fuel, ",(0,n.jsx)(i.strong,{children:"OR"})," the following minimum arrival fuel quantity, whichever is greater:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"A319: 5,000 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A320: 5,500 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A20N: 4,600 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A321: 6,000 lbs"}),"\n",(0,n.jsx)(i.li,{children:"A21N: 5,300 lbs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"example-simbrief-fuel-reserve-settings-a320",children:"Example SimBrief Fuel Reserve Settings (A320)"}),"\n",(0,n.jsx)(i.p,{children:"SimBrief has recently made it possible to save fuel planning settings within saved aircraft profiles, which makes meeting these requirements easy."}),"\n",(0,n.jsx)(i.p,{children:"The following examples are for the A320:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Domestic Flights (see the follow up message after this):"}),"\n",(0,n.jsx)(i.img,{alt:"Example of A320 domestic fuel reserve settings in SimBrief",src:t(7532).Z+"",width:"761",height:"207"})]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"International Flights (Flag):"}),"\n",(0,n.jsx)(i.img,{alt:"Example of A320 domestic fuel reserve settings in SimBrief",src:t(7019).Z+"",width:"764",height:"208"})]}),"\n",(0,n.jsx)(i.p,{children:"The Reserve Fuel drop down allows you to select FAA (Domestic), FAA (Flag), as well as FAA (Auto) -- using those options should get you to the same end result, the only reason we are not currently recommending the use of FAA (Auto) is because the use of domestic reserves for destinations within 950nm of the United States is the application of a real world OpSpec that allows use of domestic reserves for destinations that would otherwise require Flag reserves."}),"\n",(0,n.jsx)(i.p,{children:"The Arrival Fuel drop down will ensure that you meet the minimum required arrival fuel; if the specified reserve fuel, etc. exceeds that amount then you will arrive with more than the minimum arrival fuel amount."}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"After the vAMSYS v5 launch, we will explore integrating these fuel requirements into the vAMSYS Dispatch via SimBrief functionality."})}),"\n",(0,n.jsx)(i.h3,{id:"weather-minima",children:"Weather Minima"}),"\n",(0,n.jsx)(i.p,{children:"A flight may not depart if the arrival airport is forecasted to have visibility below the published approach minimums at the time of arrival. If the weather deteriorates enroute, visibility must be above the published minimums for that approach prior to beginning the final approach segment. If visibility drops after beginning the final approach segment, the approach may be continued but a missed approach must be executed if the runway cannot be seen visually at minimums."}),"\n",(0,n.jsx)(i.h3,{id:"alternate-airports-3-2-1-rule",children:"Alternate Airports (3-2-1 Rule)"}),"\n",(0,n.jsx)(i.p,{children:"All flights must be dispatched with at least one (1) alternate airport included in the flight plan, unless the following condition is met: for at least one (1) hour before and one (1) hour after the estimated time of arrival at the destination airport the forecasted weather indicates the ceiling will be at least 2,000 feet above the airport elevation and the visibility will be at least 3 miles."}),"\n",(0,n.jsx)(i.h2,{id:"diversions",children:"Diversions"}),"\n",(0,n.jsx)(i.p,{children:"The way that vAMSYS currently handles diversions is not ideal, but must be worked around for now. We will continue to lobby vAMSYS for improvements to this part of the system in the future as we recognize it does not function in a way that lines up to how diversions are handled in the real world."}),"\n",(0,n.jsx)(i.p,{children:"If you divert (in the eyes of vAMSYS this simply means to land at any destination other than your booked destination) during your flight, vAMSYS will flag the PIREP and ask you to enter the airport you diverted to in a prompt within vAMSYS as well as a comment explaining the reason for the diversion - this comment is required."}),"\n",(0,n.jsx)(i.p,{children:"If the airport to which you diverted is within our route network, you will be moved to that airport and can book a flight out."}),"\n",(0,n.jsxs)(i.p,{children:["If the airport to which you diverted is ",(0,n.jsx)(i.em,{children:"not"})," within our route network, you will be moved to your originally booked destination."]}),"\n",(0,n.jsx)(i.p,{children:"Therefore, we recommend both for the purposes of realism and also to make it easier for you to try and simulate continuing your diverted flight, we recommend you land at the closest company airport whenever this is both practical and \u201csafe\u201d to do so. This will make the odds of being able to have a bookable flight to either your destination or a hub available if you jumpseat to the airport you diverted to."}),"\n",(0,n.jsx)(i.p,{children:"Generally speaking, we do not add special/custom flights to the system to allow people to pick up a diverted flight and take it to the destination, but feel free to ask in Discord and, if someone has time and you are willing to wait, we may do so."})]})}function c(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},7532:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/fueldom-a78ec1f23ee4d41e917cdb95d4b61fff.png"},7019:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/fuelint-6a1cdfd654381a01494d44c757e6a4ed.png"},1151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>o});var n=t(7294);const r={},a=n.createContext(r);function o(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);