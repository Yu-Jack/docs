"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9814],{63888:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=r(87462),a=(r(67294),r(3905));const n={title:"Glossary",sidebar_label:"Glossary",keywords:["Harvester","glossary","terminology"]},o=void 0,l={unversionedId:"glossary",id:"version-v1.2/glossary",title:"Glossary",description:"guest cluster / guest Kubernetes cluster",source:"@site/versioned_docs/version-v1.2/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/v1.2/glossary",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/glossary.md",tags:[],version:"v1.2",lastUpdatedAt:1718608839,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{title:"Glossary",sidebar_label:"Glossary",keywords:["Harvester","glossary","terminology"]},sidebar:"api",previous:{title:"Replace a Virtual Machine",permalink:"/v1.2/api/replace-namespaced-virtual-machine"}},i={},u=[{value:"<strong>guest cluster</strong> / <strong>guest Kubernetes cluster</strong>",id:"guest-cluster--guest-kubernetes-cluster",level:2},{value:"<strong>guest node</strong> / <strong>guest cluster node</strong>",id:"guest-node--guest-cluster-node",level:2},{value:"<strong>Harvester cluster</strong>",id:"harvester-cluster",level:2},{value:"<strong>Harvester hypervisor</strong>",id:"harvester-hypervisor",level:2},{value:"<strong>Harvester node</strong>",id:"harvester-node",level:2},{value:"<strong>Harvester Node Driver</strong>",id:"harvester-node-driver",level:2}],d={toc:u},c="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/glossary"})),(0,a.kt)("h2",{id:"guest-cluster--guest-kubernetes-cluster"},(0,a.kt)("strong",{parentName:"h2"},"guest cluster")," / ",(0,a.kt)("strong",{parentName:"h2"},"guest Kubernetes cluster")),(0,a.kt)("p",null,"Group of integrated Kubernetes worker machines that run in VMs on top of a Harvester cluster. "),(0,a.kt)("p",null,"You can create RKE1, RKE2, and K3s guest clusters using the Harvester and Rancher interfaces. Creating guest clusters involves pulling images from either the internet or a private registry."),(0,a.kt)("p",null,"Guest clusters form the main infrastructure for running container workloads. Certain versions of Harvester and Rancher allow you to deploy container workloads ",(0,a.kt)("a",{parentName:"p",href:"./rancher/index#harvester-baremetal-container-workload-support-experimental"},"directly to Harvester clusters")," (with some limitations)."),(0,a.kt)("h2",{id:"guest-node--guest-cluster-node"},(0,a.kt)("strong",{parentName:"h2"},"guest node")," / ",(0,a.kt)("strong",{parentName:"h2"},"guest cluster node")),(0,a.kt)("p",null,"Kubernetes worker VM that uses guest cluster resources to run container workloads. "),(0,a.kt)("p",null,"Guest nodes are managed through a control plane that controls pod-related activity and maintains the desired cluster state."),(0,a.kt)("h2",{id:"harvester-cluster"},(0,a.kt)("strong",{parentName:"h2"},"Harvester cluster")),(0,a.kt)("p",null,"Group of integrated physical servers (hosts) on which the Harvester hypervisor is installed. These servers collectively manage compute, memory, and storage resources to provide an environment for running VMs."),(0,a.kt)("p",null,"A three-node cluster is required to fully realize the multi-node features of Harvester, particularly high availability. Certain versions of Harvester allow you to create clusters with two management nodes and one ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/advanced/witness"},"witness node")," (and optionally, one or more worker nodes). You can also create ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/advanced/singlenodeclusters"},"single-node clusters")," that support most Harvester features (excluding high availability, multi-replica support, and live migration)."),(0,a.kt)("p",null,'Harvester clusters can be imported into and managed by Rancher. Within the Rancher context, an imported Harvester cluster is known as a "managed cluster" or "downstream user cluster" (often abbreviated to "downstream cluster"). The Rancher term refers to any Kubernetes cluster that is connected to a Rancher server.'),(0,a.kt)("p",null,"Certain versions of Harvester and Rancher allow you to deploy container workloads directly to Harvester clusters (with some limitations). When this ",(0,a.kt)("a",{parentName:"p",href:"./rancher/index#harvester-baremetal-container-workload-support-experimental"},"experimental feature")," is enabled, container workloads seamlessly interact with VM workloads."),(0,a.kt)("h2",{id:"harvester-hypervisor"},(0,a.kt)("strong",{parentName:"h2"},"Harvester hypervisor")),(0,a.kt)("p",null,"Specialized operating system and ",(0,a.kt)("a",{parentName:"p",href:"./#harvester-architecture"},"software stack")," that runs on a single physical server."),(0,a.kt)("h2",{id:"harvester-node"},(0,a.kt)("strong",{parentName:"h2"},"Harvester node")),(0,a.kt)("p",null,"Physical server on which the Harvester hypervisor is installed. "),(0,a.kt)("p",null,"Each node that joins a Harvester cluster must be assigned a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.3/host/#role-management"},"role")," that determines the functions the node can perform within the cluster. All Harvester nodes process data but not all can store data."),(0,a.kt)("h2",{id:"harvester-node-driver"},(0,a.kt)("strong",{parentName:"h2"},"Harvester Node Driver")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./rancher/node/node-driver"},"Driver")," that Rancher uses to provision VMs in a Harvester cluster, and to launch and manage guest Kubernetes clusters on top of those VMs."))}h.isMDXComponent=!0}}]);