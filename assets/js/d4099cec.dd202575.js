"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[49798],{17779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});r(67294);var n=r(3905);const i={sidebar_position:1,sidebar_label:"Overview",title:"Overview",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},a=void 0,o={unversionedId:"networking/best-practice/overview",id:"version-v1.0/networking/best-practice/overview",title:"Overview",description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs.",source:"@site/versioned_docs/version-v1.0/networking/best-practice/overview.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/overview",permalink:"/v1.0/networking/best-practice/overview",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/overview.md",tags:[],version:"v1.0",lastUpdatedAt:1718679810,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Overview",title:"Overview",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"api",previous:{title:"Harvester Network",permalink:"/v1.0/networking/harvester-network"},next:{title:"Multiple NICs with VLAN-aware Switch",permalink:"/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"}},s={},c=[{value:"Best Practice",id:"best-practice",level:2}],l={toc:c},w="wrapper";function p({components:e,...t}){return(0,n.kt)(w,{...l,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("p",null,"In a real production environment, we generally recommend that you have multiple NICs in your machine, one for node access and one for VM networking. If your machine has multiple NICs, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"},"multiple NICs")," for best practices. Otherwise, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.0/networking/best-practice/single-nic-vlan-aware-switch"},"Single NIC")," best practice."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you configure a ",(0,n.kt)("inlineCode",{parentName:"p"},"bond")," interface with multiple NICs, please refer to the single NIC scenario, unless the Harvester node has multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"bond")," interfaces.")),(0,n.kt)("h2",{id:"best-practice"},"Best Practice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"},"Multiple NICs with VLAN-aware switch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch"},"Multiple NICs with non VLAN-aware switch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v1.0/networking/best-practice/single-nic-vlan-aware-switch"},"Single NIC with VLAN-aware switch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v1.0/networking/best-practice/single-nic-non-vlan-aware-switch"},"Single NIC with non VLAN-aware switch"))))}p.isMDXComponent=!0}}]);