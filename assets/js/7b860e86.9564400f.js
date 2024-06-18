"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1060],{7109:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>p});a(67294);var o=a(3905);const n={sidebar_position:5,sidebar_label:"IP Pool",title:"IP Pool",keywords:["IP Pool"]},l=void 0,i={unversionedId:"networking/ippool",id:"networking/ippool",title:"IP Pool",description:"Available as of v1.2.0",source:"@site/docs/networking/ippool.md",sourceDirName:"networking",slug:"/networking/ippool",permalink:"/v1.4/networking/ippool",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/networking/ippool.md",tags:[],version:"current",lastUpdatedAt:1718679810,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"IP Pool",title:"IP Pool",keywords:["IP Pool"]},sidebar:"api",previous:{title:"Load Balancer",permalink:"/v1.4/networking/loadbalancer"},next:{title:"Harvester Network Best Practice",permalink:"/v1.4/networking/best-practice"}},r={},p=[{value:"Features",id:"features",level:2},{value:"How to create",id:"how-to-create",level:2},{value:"Selection policy",id:"selection-policy",level:2},{value:"Examples",id:"examples",level:3},{value:"Allocation policy",id:"allocation-policy",level:2}],s={toc:p},c="wrapper";function d({components:e,...t}){return(0,o.kt)(c,{...s,...t,components:e,mdxType:"MDXLayout"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,o.kt)("p",null,"Harvester IP Pool is a built-in IP address management (IPAM) solution exclusively available to Harvester load balancers (LBs)."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiple IP ranges:")," Each IP pool can contain multiple IP ranges or CIDRs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Allocation history:")," The IP pool keeps track of the allocation history of every IP address and prioritizes assigning previously allocated addresses by load balancer name.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"status:\n  allocatedHistory:\n    192.168.178.8: default/rke2-default-lb-pool-2fab9ac0\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scope:")," IP pools can be confined to a particular network, project, namespace, or guest cluster.")),(0,o.kt)("h2",{id:"how-to-create"},"How to create"),(0,o.kt)("p",null,"To create a new IP pool:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Networks")," > ",(0,o.kt)("strong",{parentName:"li"},"IP Pools")," page and select ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Specify the ",(0,o.kt)("strong",{parentName:"li"},"Name")," of the IP pool."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Range")," tab to specify the ",(0,o.kt)("strong",{parentName:"li"},"IP ranges")," for the IP pool. You can add multiple IP ranges.\n",(0,o.kt)("img",{src:a(86222).Z,width:"3476",height:"1138"})),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Selector")," tab to specify the ",(0,o.kt)("strong",{parentName:"li"},"Scope")," and ",(0,o.kt)("strong",{parentName:"li"},"Priority")," of the IP pool.\n",(0,o.kt)("img",{src:a(38077).Z,width:"3504",height:"1208"}))),(0,o.kt)("h2",{id:"selection-policy"},"Selection policy"),(0,o.kt)("p",null,"Each IP pool will have a specific range, and you can specify the corresponding requirements in the LB ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations"),". IP pools that meet the specified requirements will automatically assign IP addresses to LBs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LBs utilize the following annotations to express requirements (all annotations are optional):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/network")," specifies the VM network the guest cluster nodes use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/project")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/namespace")," identify the project and namespace of the VMs that comprise the guest cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/cluster")," denotes the name of the guest cluster."))),(0,o.kt)("li",{parentName:"ul"},"The IP pool has a selector, including network and scope, to match the requirements of the LB.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Network is a hard condition. The optional IP pool must match the value of the LB annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/network"),"."),(0,o.kt)("li",{parentName:"ul"},"Every IP pool, except the global IP pool, has a unique scope different from others if its priority is ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),". The project, namespace, or cluster name of LBs should be in the scope of the IP pool if they want to get an IP from this pool."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spec.selector.priority")," specifies the priority of the IP Pool. The larger the number, the higher the priority. If the priority is not ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", the value should differ. The priority helps you to migrate the old IP pool to the new one."),(0,o.kt)("li",{parentName:"ul"},"If the IP Pool has a scope that matches all projects, namespaces, and guest clusters, it's called a global IP pool, and only one global IP pool is allowed. If there is no IP pool matching the requirements of the LB, the IPAM will allocate an IP address from the global IP pool if it exists.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 1:")," You wish to set up an IP pool within the range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.100.0/24")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace. In this scenario, all load balancers within the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace will receive an IP address from this designated IP pool:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: default-ip-pool\nspec:\n  ranges:\n  - subnet: 192.168.100.0/24\n  selector:\n    scope:\n      namespace: default\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 2:")," You have a guest cluster ",(0,o.kt)("inlineCode",{parentName:"p"},"rke2")," deployed within the network ",(0,o.kt)("inlineCode",{parentName:"p"},"default/vlan1"),", and its ",(0,o.kt)("inlineCode",{parentName:"p"},"project/namespace")," name is ",(0,o.kt)("inlineCode",{parentName:"p"},"product/default"),". If you want to configure an exclusive IP pool range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.10-192.168.10.20")," for it. Refer to the following ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," config:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: rke2-ip-pool\nspec:\n  ranges:\n  - subnet: 192.168.10.0/24\n    rangeStart: 192.168.10.10\n    rangeEnd: 192.168.10.20\n  selector:\n    network: default/vlan1\n    scope:\n    - project: product\n      namespace: default\n      guestCluster: rke2\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 3:")," If you have specified the IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace, you want to migrate the IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool")," to a different IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool-2")," with range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.0/24"),". It's not allowed to specify over one IP pool for the same scope, but you can give the IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool-2")," a higher priority than ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool"),". Refer to the following ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," config:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: default-ip-pool-2\nspec:\n  ranges:\n  - subnet: 192.168.200.0/24\n  selector:\n    priority: 1  # The priority is higher than default-ip-pool\n    scope:\n      namespace: default\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 4:")," You want to configure a global IP pool with a CIDR range of ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.20.0/24"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: global-ip-pool\nspec:\n  ranges:\n  - subnet: 192.168.20.0/24\n  selector:\n    scope:\n    - project: "*"\n      namespace: "*"\n      guestCluster: "*"\n')))),(0,o.kt)("h2",{id:"allocation-policy"},"Allocation policy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The IP pool prioritizes the allocation of previously assigned IP addresses based on their allocation history."),(0,o.kt)("li",{parentName:"ul"},"IP addresses are assigned in ascending order.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Starting with Harvester v1.2.0,  the ",(0,o.kt)("inlineCode",{parentName:"p"},"vip-pools")," setting is deprecated. Following the upgrade, this setting will be automatically migrated to the Harvester IP pools.")))}d.isMDXComponent=!0},38077:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ippool-scope-bceb3ec439ec83235fa7c2779980b892.png"},86222:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/multiple-ranges-6319a81c47e46a445e56de10ba318a43.png"}}]);