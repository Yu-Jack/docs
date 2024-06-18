"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[27148],{56438:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const i={sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},s=void 0,d={unversionedId:"host/host",id:"version-v0.3/host/host",title:"Host Management",description:"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are more than three nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.",source:"@site/versioned_docs/version-v0.3/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/v0.3/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/host/host.md",tags:[],version:"v0.3",lastUpdatedAt:1718611809,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},sidebar:"api",previous:{title:"Upload Images",permalink:"/v0.3/upload-image"},next:{title:"Create a Virtual Machine",permalink:"/v0.3/vm/create-vm"}},r={},l=[{value:"Node Maintenance",id:"node-maintenance",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Multi-disk Management - <code>Tech Preview</code>",id:"multi-disk-management---tech-preview",level:2}],m={toc:l},h="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/host"})),(0,o.kt)("p",null,"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are more than three nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"host.png",src:a(77035).Z,width:"3578",height:"1254"})),(0,o.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,o.kt)("p",null,"For admin users, you can click ",(0,o.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," to evict all VMs from a node automatically. It will leverage the ",(0,o.kt)("inlineCode",{parentName:"p"},"VM live migration")," feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"node-maintenance.png",src:a(57819).Z,width:"3042",height:"1058"})),(0,o.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,o.kt)("p",null,"Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you\u2019re done, power back on and make the node schedulable again by uncordoning it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cordon-node.png",src:a(84079).Z,width:"3062",height:"1554"})),(0,o.kt)("h2",{id:"multi-disk-management---tech-preview"},"Multi-disk Management - ",(0,o.kt)("inlineCode",{parentName:"h2"},"Tech Preview")),(0,o.kt)("p",null,"Users can view and add multiple disks as additional data volumes from the host detail page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,o.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Disks")," tab and click ",(0,o.kt)("strong",{parentName:"li"},"Add Disks"),"."),(0,o.kt)("li",{parentName:"ol"},"Select either an additional raw block device or partition to add as an additional data volume.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is required when adding an entire raw block device to form a single root disk partition using the ext4 filesystem."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is optional when adding partitions where the filesystem type is ",(0,o.kt)("inlineCode",{parentName:"li"},"ext4"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"XFS")," or cannot be found. It is required when adding partitions of any other filesystem type.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Edit Config",src:a(50510).Z,width:"1186",height:"460"}),"\n",(0,o.kt)("img",{alt:"Add Disks",src:a(22298).Z,width:"1177",height:"800"})))}c.isMDXComponent=!0},22298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disks-d7316fc96b86f8d9ac43b333d3fc1a59.png"},84079:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cordon-nodes-daa88373ce3b754fb6824073f2af4ae3.png"},50510:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-config-e4c98701a436a19352ff90a42981f193.png"},77035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/host-c992bf7b8372681205a1d62da54342c1.png"},57819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node-maintenance-d0d14c089568bcc6d40d8b5b431dc7c2.png"}}]);