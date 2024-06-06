"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[13624],{60688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},o=void 0,s={unversionedId:"rancher/rancher-integration",id:"version-v0.3/rancher/rancher-integration",title:"Rancher Integration",description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1.",source:"@site/versioned_docs/version-v0.3/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/rancher-integration",permalink:"/v0.3/rancher/rancher-integration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/rancher-integration.md",tags:[],version:"v0.3",lastUpdatedAt:1717662223,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},sidebar:"api",previous:{title:"Monitoring",permalink:"/v0.3/monitoring/harvester-monitoring"},next:{title:"Virtualization Management",permalink:"/v0.3/rancher/virtualization-management"}},l={},h=[{value:"Deploying Rancher",id:"deploying-rancher",level:2},{value:"Quick Start Guide",id:"quick-start-guide",level:3},{value:"Virtualization Management",id:"virtualization-management",level:2},{value:"Creating Kubernetes Clusters using the Harvester Node Driver",id:"creating-kubernetes-clusters-using-the-harvester-node-driver",level:2}],c={toc:h},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/index"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," is an open-source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."),(0,n.kt)("p",null,"Users can now import and manage multiple Harvester clusters using the Rancher ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/virtualization-management"},"Virtualization Management")," page and leverage the Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/authentication-config"},"authentication")," feature and RBAC control for ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"multi-tenancy")," support."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"virtualization-management",src:r(94944).Z,width:"2559",height:"1055"})),(0,n.kt)("h2",{id:"deploying-rancher"},"Deploying Rancher"),(0,n.kt)("p",null,"Previously in Harvester v0.2.0, users had the option to enable the embedded Rancher server. This option has been removed from Harvester ",(0,n.kt)("inlineCode",{parentName:"p"},"v0.3.0"),". "),(0,n.kt)("p",null,"To use Rancher with Harvester, please install the Rancher server separately from the Harvester. As an option, You can spin up a VM in the Harvester and install the Rancher v2.6.1 or above to try out the integration features."),(0,n.kt)("h3",{id:"quick-start-guide"},"Quick Start Guide"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Begin creation of a custom cluster by provisioning a Linux host. Your host can be any of the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A cloud-hosted virtual machine (VM)"),(0,n.kt)("li",{parentName:"ul"},"An on-premises VM"),(0,n.kt)("li",{parentName:"ul"},"A bare-metal server"))),(0,n.kt)("li",{parentName:"ol"},"Log into your Linux host using your preferred shell, such as PuTTy or a remote terminal connection."),(0,n.kt)("li",{parentName:"ol"},"From your shell, enter the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# for a quick evaluation, you can run the Rancher server with the following command\n$ sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.2\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For more information about how to deploy the Rancher server, please refer to the Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/"},"documentation"),".")),(0,n.kt)("h2",{id:"virtualization-management"},"Virtualization Management"),(0,n.kt)("p",null,"With Rancher's Virtualization Management, users can now import and manage Harvester clusters. By clicking on one of the clusters, users are able to view and manage the downstream Harvester resources such as VMs, images, volumes, etc. Additionally, Rancher's VM feature has leveraged existing Rancher features such as authentication with various auth providers and multi-tenant support."),(0,n.kt)("p",null,"For more details, please reference the ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/virtualization-management"},"virtualization management")," page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import-cluster",src:r(71899).Z,width:"2559",height:"988"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Virtualization Management is in Tech Preview.")),(0,n.kt)("h2",{id:"creating-kubernetes-clusters-using-the-harvester-node-driver"},"Creating Kubernetes Clusters using the Harvester Node Driver"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/node-driver"},"Harvester node driver")," is used to provision VMs in the Harvester cluster, which Rancher uses to launch and manage Kubernetes clusters."),(0,n.kt)("p",null,"Starting with Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1"),", the Harvester node driver has been added by default. Users can reference this ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/node-driver"},"doc")," for more details."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Harvester Node Driver is in Tech Preview.")))}d.isMDXComponent=!0},71899:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},94944:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/virtualization-management-ae828e59eb26dddfb2b64eed2fc56652.png"}}]);