"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[15485],{1268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>s});r(67294);var a=r(3905);const n={sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster"},i=void 0,o={unversionedId:"rancher/node/rke2-cluster",id:"version-v1.3/rancher/node/rke2-cluster",title:"Creating an RKE2 Kubernetes Cluster",description:"You can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v1.3/rancher/node/rke2-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke2-cluster",permalink:"/v1.3/rancher/node/rke2-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/rancher/node/rke2-cluster.md",tags:[],version:"v1.3",lastUpdatedAt:1725352560,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster"},sidebar:"api",previous:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/v1.3/rancher/node/rke1-cluster"},next:{title:"Creating an K3s Kubernetes Cluster",permalink:"/v1.3/rancher/node/k3s-cluster"}},l={},s=[{value:"Backward Compatibility Notice",id:"backward-compatibility-notice",level:3},{value:"Create your cloud credentials",id:"create-your-cloud-credentials",level:3},{value:"Create RKE2 kubernetes cluster",id:"create-rke2-kubernetes-cluster",level:3},{value:"Add node affinity",id:"add-node-affinity",level:4},{value:"Add workload affinity",id:"add-workload-affinity",level:4},{value:"Update RKE2 Kubernetes cluster",id:"update-rke2-kubernetes-cluster",level:3},{value:"Using Harvester RKE2 node driver in air gapped environment",id:"using-harvester-rke2-node-driver-in-air-gapped-environment",level:3}],d={toc:s},p="wrapper";function c({components:e,...t}){return(0,a.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/rke2-cluster"})),(0,a.kt)("p",null,"You can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher using the built-in Harvester node driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke2-cluster",src:r(60080).Z,width:"3070",height:"1436"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v1.3/networking/harvester-network#vlan-network"},"VLAN network")," is required for Harvester node driver."),(0,a.kt)("li",{parentName:"ul"},"Harvester node driver only supports cloud images."),(0,a.kt)("li",{parentName:"ul"},"For the port requirements of the guest clusters deployed within Harvester, please refer to the doc ",(0,a.kt)("a",{parentName:"li",href:"/v1.3/install/requirements#port-requirements-for-k3s-or-rkerke2-clusters"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"For RKE2 with Harvester cloud provider support matrix, please refer to the website ",(0,a.kt)("a",{parentName:"li",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"here"),"."))),(0,a.kt)("h3",{id:"backward-compatibility-notice"},"Backward Compatibility Notice"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please note a known backward compatibility issue if you're using the Harvester cloud provider version ",(0,a.kt)("strong",{parentName:"p"},"v0.2.2")," or higher.  If your Harvester version is below ",(0,a.kt)("strong",{parentName:"p"},"v1.2.0")," and you intend to use newer RKE2 versions (i.e., >= ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.26.6+rke2r1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.25.11+rke2r1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.24.15+rke2r1"),"), it is essential to upgrade your Harvester cluster to v1.2.0 or a higher version before proceeding with the upgrade of the guest Kubernetes cluster or Harvester cloud provider."),(0,a.kt)("p",{parentName:"admonition"},"For a detailed support matrix, please refer to the ",(0,a.kt)("strong",{parentName:"p"},"Harvester CCM & CSI Driver with RKE2 Releases")," section of the official ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"website"),".")),(0,a.kt)("h3",{id:"create-your-cloud-credentials"},"Create your cloud credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your cloud credential name"),(0,a.kt)("li",{parentName:"ol"},'Select "Imported Harvester Cluster".'),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(46600).Z,width:"3062",height:"1614"})),(0,a.kt)("h3",{id:"create-rke2-kubernetes-cluster"},"Create RKE2 kubernetes cluster"),(0,a.kt)("p",null,"Users can create a RKE2 Kubernetes cluster from the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," page via the RKE2 node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button."),(0,a.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,a.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Image")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Network Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"SSH User")," (required)."),(0,a.kt)("li",{parentName:"ol"},"(optional) Configure the ",(0,a.kt)("strong",{parentName:"li"},"Show Advanced > User Data")," to install the required packages of VM.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\npackages:\n  - iptables\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Calico and Canal networks require the ",(0,a.kt)("inlineCode",{parentName:"p"},"iptables")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"xtables-nft")," package to be installed on the node, for more details, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/known_issues#canal-and-ip-exhaustion"},"RKE2 known issues"),".")),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-rke2-harvester-cluster-1",src:r(46363).Z,width:"1919",height:"1079"}),"\n",(0,a.kt)("img",{alt:"create-rke2-harvester-cluster-2",src:r(55177).Z,width:"1919",height:"968"}),"\n",(0,a.kt)("img",{alt:"create-rke2-harvester-cluster-3",src:r(28048).Z,width:"1919",height:"967"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"RKE2 v1.21.5+rke2r2 or above provides a built-in Harvester Cloud Provider and Guest CSI driver integration."),(0,a.kt)("li",{parentName:"ul"},"Only imported Harvester clusters are supported by the Harvester node driver."))),(0,a.kt)("h4",{id:"add-node-affinity"},"Add node affinity"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.3 + Rancher v2.6.7")),(0,a.kt)("p",null,"The Harvester node driver now supports scheduling a group of machines to particular nodes through the node affinity rules, which can provide high availability and better resource utilization."),(0,a.kt)("p",null,"Node affinity can be added to the machine pools during the cluster creation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Show Advanced")," button and click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),(0,a.kt)("img",{alt:"affinity-add-node-selector",src:r(92866).Z,width:"3668",height:"1478"})),(0,a.kt)("li",{parentName:"ol"},"Set priority to ",(0,a.kt)("inlineCode",{parentName:"li"},"Required")," if you wish the scheduler to schedule the machines only when the rules are met."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Rule")," to specify the node affinity rules, e.g., for the ",(0,a.kt)("a",{parentName:"li",href:"/v1.3/rancher/node/node-driver#topology-spread-constraints"},"topology spread constraints")," use case, you can add the ",(0,a.kt)("inlineCode",{parentName:"li"},"region")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"zone")," labels as follows:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list \nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list \nvalues: us-east-1a\n")),(0,a.kt)("img",{alt:"affinity-add-rules",src:r(73753).Z,width:"3634",height:"1290"}))),(0,a.kt)("h4",{id:"add-workload-affinity"},"Add workload affinity"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.2.0 + Rancher v2.7.6")),(0,a.kt)("p",null,"The workload affinity rules allow you to constrain which nodes your machines can be scheduled on based on the labels of workloads (VMs and Pods) already running on these nodes, instead of the node labels."),(0,a.kt)("p",null,"Workload affinity rules can be added to the machine pools during the cluster creation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Show Advanced")," and choose ",(0,a.kt)("strong",{parentName:"li"},"Add Workload Selector"),".\n",(0,a.kt)("img",{alt:"affinity-add-workload-selector",src:r(60384).Z,width:"3840",height:"1858"})),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Type"),", ",(0,a.kt)("strong",{parentName:"li"},"Affinity")," or ",(0,a.kt)("strong",{parentName:"li"},"Anti-Affinity"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Priority"),". ",(0,a.kt)("strong",{parentName:"li"},"Prefered")," means it's an optional rule, and ",(0,a.kt)("strong",{parentName:"li"},"Required")," means a mandatory rule."),(0,a.kt)("li",{parentName:"ol"},"Select the namespaces for the target workloads."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," to specify the workload affinity rules."),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("strong",{parentName:"li"},"Topology Key")," to specify the label key that divides Harvester hosts into different topologies.")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity"},"Kubernetes Pod Affinity and Anti-Affinity Documentation")," for more details."),(0,a.kt)("h3",{id:"update-rke2-kubernetes-cluster"},"Update RKE2 Kubernetes cluster"),(0,a.kt)("p",null,"The fields highlighted below of the RKE2 machine pool represent the Harvester VM configurations. Any modifications to these fields will trigger node reprovisioning."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke2-harvester-fields",src:r(17012).Z,width:"3840",height:"1858"})),(0,a.kt)("h3",{id:"using-harvester-rke2-node-driver-in-air-gapped-environment"},"Using Harvester RKE2 node driver in air gapped environment"),(0,a.kt)("p",null,"RKE2 provisioning relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," package to get the IP of the virtual machine."),(0,a.kt)("p",null,"Calico and Canal require the ",(0,a.kt)("inlineCode",{parentName:"p"},"iptables")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"xtables-nft")," package to be installed on the node."),(0,a.kt)("p",null,"However, it may not be feasible to install packages in an air gapped environment."),(0,a.kt)("p",null,"You can address the installation constraints with the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Option 1. Use a VM image preconfigured with required packages (e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"iptables"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"qemu-guest-agent"),")."),(0,a.kt)("li",{parentName:"ul"},"Option 2. Go to ",(0,a.kt)("strong",{parentName:"li"},"Show Advanced")," > ",(0,a.kt)("strong",{parentName:"li"},"User Data")," to allow VMs to install the required packages via an HTTP(S) proxy.")),(0,a.kt)("p",null,"Example user data in Harvester node template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\n")))}c.isMDXComponent=!0},92866:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/affinity-rke2-add-node-selector-43c8e7c2785ab6a07a2c90791d84f9c3.png"},73753:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/affinity-rke2-add-rules-6934a0009ec40592576d46f06523c040.png"},60384:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/affinity-rke2-add-workload-selector-edff51c025176e101cb6840ceb7897e1.png"},46600:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-cloud-credentials-43af60d7d9bbd67c36d544e69a678eec.png"},46363:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-rke2-harvester-cluster-1-8731b8b7cfdf310cd02d0ab8c38114cf.png"},55177:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-rke2-harvester-cluster-2-2e580a0058844095fd12f6b470ddd075.png"},28048:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-rke2-harvester-cluster-3-00cefe48d71723e84d9ab215c1f11bfd.png"},17012:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-harvester-fields-5a027971225f48ecfe956bcae4b58e19.png"},60080:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-k3s-node-driver-93bed7554d15f199dab02d5a37e39f80.png"}}]);