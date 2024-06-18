"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[61857],{30466:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>n,toc:()=>m});o(67294);var r=o(3905);const i={sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],description:"Overcommit resources to a VM."},a=void 0,n={unversionedId:"vm/resource-overcommit",id:"version-v1.3/vm/resource-overcommit",title:"Resource Overcommit",description:"Overcommit resources to a VM.",source:"@site/versioned_docs/version-v1.3/vm/resource-overcommit.md",sourceDirName:"vm",slug:"/vm/resource-overcommit",permalink:"/v1.3/vm/resource-overcommit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/vm/resource-overcommit.md",tags:[],version:"v1.3",lastUpdatedAt:1718679810,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Resource Overcommit",title:"Resource Overcommit",keywords:["Harvester","Overcommit","Overprovision","ballooning"],description:"Overcommit resources to a VM."},sidebar:"api",previous:{title:"Hot-Plug Volumes",permalink:"/v1.3/vm/hotplug-volume"},next:{title:"Clone VM",permalink:"/v1.3/vm/clone-vm"}},s={},m=[{value:"Configure the global setting <code>overcommit-config</code>",id:"configure-the-global-setting-overcommit-config",level:2},{value:"Configure overcommit for a single virtual machine",id:"configure-overcommit-for-a-single-virtual-machine",level:2},{value:"Reserve more memory for the system overhead",id:"reserve-more-memory-for-the-system-overhead",level:2},{value:"Why my virtual machines are scheduled unevenly?",id:"why-my-virtual-machines-are-scheduled-unevenly",level:2}],l={toc:m},c="wrapper";function v({components:e,...t}){return(0,r.kt)(c,{...l,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/resource-overcommit"})),(0,r.kt)("p",null,"Harvester supports global configuration of resource overload percentages on CPU, memory, and storage. By setting ",(0,r.kt)("a",{parentName:"p",href:"/v1.3/advanced/index#overcommit-config"},(0,r.kt)("inlineCode",{parentName:"a"},"overcommit-config")),", this will allow scheduling of additional virtual machines even when physical resources are fully utilized."),(0,r.kt)("p",null,"Harvester allows you to overcommit CPU and RAM on compute nodes. This allows you to increase the number of instances running on your cloud at the cost of reducing the performance of the instances. The Compute service uses the following ratios by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU allocation ratio: 1600%"),(0,r.kt)("li",{parentName:"ul"},"RAM allocation ratio: 150%"),(0,r.kt)("li",{parentName:"ul"},"Storage allocation ratio: 200%")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Classic memory overcommitment or memory ballooning is not yet supported by this feature. In other words, memory used by a virtual machine instance cannot be returned once allocated.")),(0,r.kt)("h2",{id:"configure-the-global-setting-overcommit-config"},"Configure the global setting ",(0,r.kt)("a",{parentName:"h2",href:"/v1.3/advanced/index#overcommit-config"},(0,r.kt)("inlineCode",{parentName:"a"},"overcommit-config"))),(0,r.kt)("p",null,"Users can modify the global ",(0,r.kt)("inlineCode",{parentName:"p"},"overcommit-config")," by following the steps below, and it will be applied to each newly created virtual machine after the change."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Advanced > Settings")," page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"overcommit page",src:o(62223).Z,width:"1909",height:"876"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the ",(0,r.kt)("inlineCode",{parentName:"p"},"overcommit-config")," setting.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the desired CPU, Memory, and Storage ratio."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"overcommit panel",src:o(14411).Z,width:"1615",height:"803"})))),(0,r.kt)("h2",{id:"configure-overcommit-for-a-single-virtual-machine"},"Configure overcommit for a single virtual machine"),(0,r.kt)("p",null,"In situations where you require specific configurations for individual virtual machines without affecting the global settings, you can easily achieve this by modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template.spec.domain.resources.limits.<memory|cpu>")," value on the corresponding virtual machine spec directly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vm overcommit config",src:o(30177).Z,width:"620",height:"143"})),(0,r.kt)("h2",{id:"reserve-more-memory-for-the-system-overhead"},"Reserve more memory for the system overhead"),(0,r.kt)("p",null,"By default, the Harvester reserves a certain amount of system management overhead memory from the memory allocated for the virtual machine. In most cases, this will not cause any problems. However, some operating systems, such as Windows 2022, will request more memory than is reserved."),(0,r.kt)("p",null,"To address the issue, Harvester provides an annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory")," on VirtualMachine custom resource to let you specify the amount of memory to reserve. For instance, add ",(0,r.kt)("inlineCode",{parentName:"p"},"harvesterhci.io/reservedMemory: 200Mi")," if you decide to reserve 200 MiB for the system overhead of the VM."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"}," apiVersion: kubevirt.io/v1\n kind: VirtualMachine\n metadata:\n   annotations:\n+    harvesterhci.io/reservedMemory: 200Mi\n     kubevirt.io/latest-observed-api-version: v1\n     kubevirt.io/storage-observed-api-version: v1alpha3\n     network.harvesterhci.io/ips: '[]'\n   ...\n   ...\n")),(0,r.kt)("h2",{id:"why-my-virtual-machines-are-scheduled-unevenly"},"Why my virtual machines are scheduled unevenly?"),(0,r.kt)("p",null,"The scheduling of virtual machines depends on the underlying behavior of the kube-scheduler. We have a dedicated article explaining the details. If you would like to learn more, check out:  ",(0,r.kt)("a",{parentName:"p",href:"https://harvesterhci.io/kb/vm-scheduling/"},"Harvester Knowledge Base: VM Scheduling"),"."))}v.isMDXComponent=!0},62223:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/overcommit-page-dce434aea661da539e60c8bef58038e1.png"},14411:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/overcommit-panel-c734569d29247d1c909455e6e5dae8dc.png"},30177:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/vm-overcommit-config-b3385970717064c2ba05d1fee8499259.png"}}]);