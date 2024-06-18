"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[57420],{65844:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});a(67294);var n=a(3905);const o={sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},i=void 0,s={unversionedId:"host/host",id:"version-v1.0/host/host",title:"Host Management",description:"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.",source:"@site/versioned_docs/version-v1.0/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/v1.0/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/host/host.md",tags:[],version:"v1.0",lastUpdatedAt:1718703512,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},sidebar:"api",previous:{title:"Upload Images",permalink:"/v1.0/upload-image"},next:{title:"Create a Virtual Machine",permalink:"/v1.0/vm/create-vm"}},d={},r=[{value:"Node Maintenance",id:"node-maintenance",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Deleting a Node",id:"deleting-a-node",level:2},{value:"Multi-disk Management - <code>Tech Preview</code>",id:"multi-disk-management---tech-preview",level:2}],l={toc:r},m="wrapper";function h({components:e,...t}){return(0,n.kt)(m,{...l,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/host"})),(0,n.kt)("p",null,"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"host.png",src:a(83054).Z,width:"3578",height:"1254"})),(0,n.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,n.kt)("p",null,"For admin users, you can click ",(0,n.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," to evict all VMs from a node automatically. It will leverage the ",(0,n.kt)("inlineCode",{parentName:"p"},"VM live migration")," feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"node-maintenance.png",src:a(94932).Z,width:"3042",height:"1058"})),(0,n.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,n.kt)("p",null,"Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you\u2019re done, power back on and make the node schedulable again by uncordoning it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cordon-node.png",src:a(83066).Z,width:"3062",height:"1554"})),(0,n.kt)("h2",{id:"deleting-a-node"},"Deleting a Node"),(0,n.kt)("p",null,"Deleting a node is done in two phases:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the node from Harvester"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Hosts")," page"),(0,n.kt)("li",{parentName:"ul"},"On the node you want to modify, click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Delete")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Uninstall RKE2 from the node"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Login to the node as root"),(0,n.kt)("li",{parentName:"ul"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," to delete the whole RKE2 service.")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You will lose all data of the control plane node after deleting the RKE2 service.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"There's a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1497"},"known issue")," about node hard delete.\nOnce resolved, the last step can be skipped.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delete.png",src:a(17991).Z,width:"1241",height:"482"})),(0,n.kt)("h2",{id:"multi-disk-management---tech-preview"},"Multi-disk Management - ",(0,n.kt)("inlineCode",{parentName:"h2"},"Tech Preview")),(0,n.kt)("p",null,"Users can view and add multiple disks as additional data volumes from the host detail page."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,n.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"Select the ",(0,n.kt)("strong",{parentName:"li"},"Disks")," tab and click ",(0,n.kt)("strong",{parentName:"li"},"Add Disks"),"."),(0,n.kt)("li",{parentName:"ol"},"Select an additional raw block device to add as an additional data volume.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is required if the block device has never been force-formatted.")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In order for Harvester to identify the disks, each disk needs to have a unique ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Name"},"WWN"),". Otherwise, Harvester will refuse to add the disk.\nIf your disk does not have a WWN, you can format it with the ",(0,n.kt)("inlineCode",{parentName:"p"},"EXT4")," filesystem to help Harvester recognize the disk.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are testing Harvester in a QEMU environment, you'll need to use QEMU v6.0 or later. Previous versions of QEMU will always generate the same WWN for NVMe disks emulation. This will cause Harvester to not add the additional disks, as explained above.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Edit Config",src:a(73265).Z,width:"1186",height:"460"}),"\n",(0,n.kt)("img",{alt:"Add Disks",src:a(63302).Z,width:"1177",height:"800"})))}h.isMDXComponent=!0},63302:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disks-d7316fc96b86f8d9ac43b333d3fc1a59.png"},83066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cordon-nodes-daa88373ce3b754fb6824073f2af4ae3.png"},17991:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete-c6b5ae377dce51029b8762fa93d00f8a.png"},73265:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-config-e4c98701a436a19352ff90a42981f193.png"},83054:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/host-c992bf7b8372681205a1d62da54342c1.png"},94932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node-maintenance-d0d14c089568bcc6d40d8b5b431dc7c2.png"}}]);