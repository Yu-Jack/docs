"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[47564],{43418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:4,sidebar_label:"Creating an K3s Kubernetes Cluster",title:"Creating an K3s Kubernetes Cluster"},l=void 0,s={unversionedId:"rancher/node/k3s-cluster",id:"version-v1.3/rancher/node/k3s-cluster",title:"Creating an K3s Kubernetes Cluster",description:"You can now provision K3s Kubernetes clusters on top of the Harvester cluster in Rancher using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v1.3/rancher/node/k3s-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/k3s-cluster",permalink:"/v1.3/rancher/node/k3s-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/rancher/node/k3s-cluster.md",tags:[],version:"v1.3",lastUpdatedAt:1718611809,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Creating an K3s Kubernetes Cluster",title:"Creating an K3s Kubernetes Cluster"},sidebar:"api",previous:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/v1.3/rancher/node/rke2-cluster"},next:{title:"Harvester Cloud Provider",permalink:"/v1.3/rancher/cloud-provider"}},o={},d=[{value:"Create your cloud credentials",id:"create-your-cloud-credentials",level:3},{value:"Create K3s Kubernetes cluster",id:"create-k3s-kubernetes-cluster",level:3},{value:"Add node affinity",id:"add-node-affinity",level:4},{value:"Using Harvester K3s node driver in air gapped environment",id:"using-harvester-k3s-node-driver-in-air-gapped-environment",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/k3s-cluster"})),(0,n.kt)("p",null,"You can now provision K3s Kubernetes clusters on top of the Harvester cluster in Rancher using the built-in Harvester node driver."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"k3s-cluster",src:r(60080).Z,width:"3070",height:"1436"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Harvester K3s node driver is in ",(0,n.kt)("strong",{parentName:"li"},"Tech Preview"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v1.3/networking/harvester-network#vlan-network"},"VLAN network")," is required for Harvester node driver."),(0,n.kt)("li",{parentName:"ul"},"Harvester node driver only supports cloud images."),(0,n.kt)("li",{parentName:"ul"},"For the port requirements of the guest clusters deployed within Harvester, please refer to the ",(0,n.kt)("a",{parentName:"li",href:"/v1.3/install/requirements#port-requirements-for-k3s-or-rkerke2-clusters"},"port requirements for guest clusters"),"."))),(0,n.kt)("h3",{id:"create-your-cloud-credentials"},"Create your cloud credentials"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your cloud credential name"),(0,n.kt)("li",{parentName:"ol"},'Select "Imported Harvester Cluster".'),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(46600).Z,width:"3062",height:"1614"})),(0,n.kt)("h3",{id:"create-k3s-kubernetes-cluster"},"Create K3s Kubernetes cluster"),(0,n.kt)("p",null,"You can create a K3s Kubernetes cluster from the ",(0,n.kt)("strong",{parentName:"p"},"Cluster Management")," page via the K3s node driver."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create")," button."),(0,n.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,n.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,n.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,n.kt)("li",{parentName:"ol"},"Select a ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credential"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Namespace")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Image")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Network Name")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"SSH User")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-k3s-harvester-cluster",src:r(22086).Z,width:"1919",height:"1079"})),(0,n.kt)("h4",{id:"add-node-affinity"},"Add node affinity"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.3 + Rancher v2.6.7")),(0,n.kt)("p",null,"The Harvester node driver now supports scheduling a group of machines to particular nodes through the node affinity rules. This provides high availability and better resource utilization."),(0,n.kt)("p",null,"Node affinity can be added to the machine pools during the cluster creation:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Show Advanced")," button and click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),(0,n.kt)("img",{alt:"affinity-add-node-selector",src:r(92866).Z,width:"3668",height:"1478"})),(0,n.kt)("li",{parentName:"ol"},"Set priority to ",(0,n.kt)("inlineCode",{parentName:"li"},"Required")," if you wish the scheduler to schedule the machines only when the rules are met."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Rule")," to specify the node affinity rules, e.g., for the ",(0,n.kt)("a",{parentName:"li",href:"/v1.3/rancher/node/node-driver#topology-spread-constraints"},"topology spread constraints")," use case, you can add the ",(0,n.kt)("inlineCode",{parentName:"li"},"region")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"zone")," labels as follows:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list \nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list \nvalues: us-east-1a\n")),(0,n.kt)("img",{alt:"affinity-add-rules",src:r(73753).Z,width:"3634",height:"1290"})),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," to save the node template. After the cluster is installed, you can check whether its machine nodes are scheduled according to the affinity rules.")),(0,n.kt)("h3",{id:"using-harvester-k3s-node-driver-in-air-gapped-environment"},"Using Harvester K3s node driver in air gapped environment"),(0,n.kt)("p",null,"K3s provisioning relies on the ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," package to get the IP of the virtual machine."),(0,n.kt)("p",null,"However, it may not be feasible to install packages in an air gapped environment."),(0,n.kt)("p",null,"You can address the installation constraints with the following options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Option 1. Use a VM image preconfigured with the required packages (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"iptables"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"qemu-guest-agent"),")."),(0,n.kt)("li",{parentName:"ul"},"Option 2. Go to ",(0,n.kt)("strong",{parentName:"li"},"Show Advanced")," > ",(0,n.kt)("strong",{parentName:"li"},"User Data")," to allow VMs to install the required packages via an HTTP(S) proxy.")),(0,n.kt)("p",null,"Example of ",(0,n.kt)("inlineCode",{parentName:"p"},"user data")," in Harvester node template:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\n")))}c.isMDXComponent=!0},92866:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/affinity-rke2-add-node-selector-43c8e7c2785ab6a07a2c90791d84f9c3.png"},73753:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/affinity-rke2-add-rules-6934a0009ec40592576d46f06523c040.png"},46600:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-cloud-credentials-43af60d7d9bbd67c36d544e69a678eec.png"},22086:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-k3s-harvester-cluster-3b0b62e216eaf050c48c10a762cf4ff4.png"},60080:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-k3s-node-driver-93bed7554d15f199dab02d5a37e39f80.png"}}]);