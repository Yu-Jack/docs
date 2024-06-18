"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[70432],{83249:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(87462),s=(t(67294),t(3905));const a={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},n=void 0,o={unversionedId:"rancher/csi-driver",id:"version-v0.3/rancher/csi-driver",title:"Harvester CSI Driver",description:"The Harvester Container Storage Interface (CSI) Driver provides a CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance.",source:"@site/versioned_docs/version-v0.3/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/v0.3/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/csi-driver.md",tags:[],version:"v0.3",lastUpdatedAt:1718611809,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},sidebar:"api",previous:{title:"Harvester Cloud Provider",permalink:"/v0.3/rancher/cloud-provider"},next:{title:"Harvester Terraform Provider",permalink:"/v0.3/terraform/terraform-provider"}},d={},l=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying with Harvester RKE2 Node Driver",id:"deploying-with-harvester-rke2-node-driver",level:3},{value:"Deploying with Harvester RKE1 Node Driver",id:"deploying-with-harvester-rke1-node-driver",level:3}],v={toc:l},c="wrapper";function h(e){let{components:r,...a}=e;return(0,s.kt)(c,(0,i.Z)({},v,a,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/csi-driver"})),(0,s.kt)("p",null,"The Harvester Container Storage Interface (CSI) Driver provides a CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance."),(0,s.kt)("h2",{id:"deploying"},"Deploying"),(0,s.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,s.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace.")),(0,s.kt)("h3",{id:"deploying-with-harvester-rke2-node-driver"},"Deploying with Harvester RKE2 Node Driver"),(0,s.kt)("p",null,"When spinning up a Kubernetes cluster using Rancher RKE2 node driver, the Harvester CSI driver will be deployed when Harvester cloud provider is selected."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"select-harvester-cloud-provider",src:t(50409).Z,width:"1916",height:"964"})),(0,s.kt)("h3",{id:"deploying-with-harvester-rke1-node-driver"},"Deploying with Harvester RKE1 Node Driver"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Select the external cloud provider option.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver/blob/master/deploy/generate_addon_csi.sh"},"Generate addon configuration")," and add it in the RKE config YAML."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# depend on kubectl to operate the Harvester cluster\n./deploy/generate_addon_csi.sh <serviceaccount name> <namespace>\n")))}h.isMDXComponent=!0},50409:(e,r,t)=>{t.d(r,{Z:()=>i});const i=t.p+"assets/images/select-harvester-cloud-provider-7e9fe45280de6f364e7e4bce3b11224d.png"}}]);