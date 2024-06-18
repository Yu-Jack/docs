"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[95421],{65211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=r(87462),a=(r(67294),r(3905));const n={id:"singlenodeclusters",sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",keywords:["Single Node"],Description:"Support for deployment of single-node clusters"},i=void 0,o={unversionedId:"advanced/singlenodeclusters",id:"advanced/singlenodeclusters",title:"Single-Node Clusters",description:"As of Harvester release v1.2.0, single-node clusters are supported for implementations that require minimal initial deployment resources or that can tolerate lower resiliency. You can create single-node clusters using the standard installation methods (ISO, USB, and PXE boot).",source:"@site/docs/advanced/singlenodeclusters.md",sourceDirName:"advanced",slug:"/advanced/singlenodeclusters",permalink:"/v1.4/advanced/singlenodeclusters",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/singlenodeclusters.md",tags:[],version:"current",lastUpdatedAt:1718611809,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:7,frontMatter:{id:"singlenodeclusters",sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",keywords:["Single Node"],Description:"Support for deployment of single-node clusters"},sidebar:"api",previous:{title:"Nvidia Driver Toolkit",permalink:"/v1.4/advanced/addons/nvidiadrivertoolkit"},next:{title:"Custom SUSE VM Images",permalink:"/v1.4/advanced/customsuseimages"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/singlenodeclusters"})),(0,a.kt)("p",null,"As of Harvester release v1.2.0, single-node clusters are supported for implementations that require minimal initial deployment resources or that can tolerate lower resiliency. You can create single-node clusters using the standard installation methods (",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/install/index"},"ISO"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/install/usb-install"},"USB"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/install/pxe-boot-install"},"PXE boot"),")."),(0,a.kt)("p",null,"Single-node clusters support most Harvester features, including the creation of RKE2 clusters and node upgrades (with some limitations). However, this deployment type has the following key disadvantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No high availability: Errors and updates that require rebooting of the node cause downtime to running VMs."),(0,a.kt)("li",{parentName:"ul"},"No multi-replica support: Only one replica is created for each volume in Longhorn."),(0,a.kt)("li",{parentName:"ul"},"No live migration and zero-downtime support during upgrades.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin deploying your single-node cluster, ensure that the following requirements are addressed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hardware: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/install/requirements#hardware-requirements"},"Use server-class hardware")," with sufficient resources to run Harvester and a production workload. Laptops and nested virtualization are not supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Network: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/install/requirements#port-requirements-for-harvester-nodes"},"Configure ports")," based on the type of traffic to be transmitted among VMs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"StorageClass: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/advanced/storageclass#creating-a-storageclass"},"Create a new default StorageClass")," with the ",(0,a.kt)("strong",{parentName:"p"},"Number of Replicas"),' parameter set to "1". This ensures that only one replica is created for each volume in Longhorn.'),(0,a.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The default StorageClass ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," has a replica count value of ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),' for high availability. If you use this StorageClass to create volumes for your single-node cluster, Longhorn is unable to create the configured number of replicas. This results in volumes being marked as "Degraded" on the Longhorn UI.')))))}c.isMDXComponent=!0}}]);