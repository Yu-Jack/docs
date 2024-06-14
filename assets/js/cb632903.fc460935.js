"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[64786],{88616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=a(87462),n=(a(67294),a(3905));const r={sidebar_position:6,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],description:"The Harvester provides a virtual IP as the management address."},d=void 0,i={unversionedId:"install/management-address",id:"version-v1.0/install/management-address",title:"Management Address",description:"The Harvester provides a virtual IP as the management address.",source:"@site/versioned_docs/version-v1.0/install/management-address.md",sourceDirName:"install",slug:"/install/management-address",permalink:"/v1.0/install/management-address",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/install/management-address.md",tags:[],version:"v1.0",lastUpdatedAt:1718271160,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Management Address",title:"Management Address",keywords:["VIP"],description:"The Harvester provides a virtual IP as the management address."},sidebar:"api",previous:{title:"Harvester Configuration",permalink:"/v1.0/install/harvester-configuration"},next:{title:"Air Gapped Environment",permalink:"/v1.0/airgap"}},o={},l=[{value:"How to get the VIP MAC address",id:"how-to-get-the-vip-mac-address",level:2},{value:"Usages",id:"usages",level:2}],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/management-address"})),(0,n.kt)("p",null,"Harvester provides a fixed virtual IP (VIP) as the management address, VIP must be different from any Node IP.  You can find the management address on the console dashboard after the installation."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you selected the IP address to be configured via DHCP, you will need to configure static MAC-to-IP address mapping on your DHCP server in order to have a persistent Virtual IP")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(31557).Z,width:"1580",height:"770"})),(0,n.kt)("h2",{id:"how-to-get-the-vip-mac-address"},"How to get the VIP MAC address"),(0,n.kt)("p",null,"To get the VIP MAC address, you can run the following command on the management node:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get svc -n kube-system ingress-expose -ojsonpath='{.metadata.annotations}'\n")),(0,n.kt)("p",null,"Example of output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"kube-vip.io/hwaddr":"02:00:00:09:7f:3f","kube-vip.io/requestedIP":"10.84.102.31"}\n')),(0,n.kt)("h2",{id:"usages"},"Usages"),(0,n.kt)("p",null,"The management address has two usages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows the access to the Harvester API/UI via ",(0,n.kt)("inlineCode",{parentName:"li"},"HTTPS")," protocol."),(0,n.kt)("li",{parentName:"ul"},"Is the address the other nodes use to join the cluster.\n",(0,n.kt)("img",{src:a(77036).Z,width:"1207",height:"339"}))))}u.isMDXComponent=!0},77036:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/configure-management-address-43ff76d24277f42606a4ad31cea2464b.png"},31557:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/iso-installed-f4263be997514c7510a5865390e66421.png"}}]);