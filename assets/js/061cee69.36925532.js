"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[81256],{84514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1,sidebar_label:"Monitoring",title:"Monitoring"},i=void 0,s={unversionedId:"monitoring/harvester-monitoring",id:"version-v1.0/monitoring/harvester-monitoring",title:"Monitoring",description:"Available as of v0.3.0",source:"@site/versioned_docs/version-v1.0/monitoring/harvester-monitoring.md",sourceDirName:"monitoring",slug:"/monitoring/harvester-monitoring",permalink:"/v1.0/monitoring/harvester-monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/monitoring/harvester-monitoring.md",tags:[],version:"v1.0",lastUpdatedAt:1717662223,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Monitoring",title:"Monitoring"},sidebar:"api",previous:{title:"Single NIC with Non VLAN-aware Switch",permalink:"/v1.0/networking/best-practice/single-nic-non-vlan-aware-switch"},next:{title:"Rancher Integration",permalink:"/v1.0/rancher/rancher-integration"}},l={},m=[{value:"Dashboard Metrics",id:"dashboard-metrics",level:2},{value:"VM Detail Metrics",id:"vm-detail-metrics",level:2},{value:"How to Configure Monitoring Settings",id:"how-to-configure-monitoring-settings",level:2},{value:"From WebUI",id:"from-webui",level:3},{value:"From CLI",id:"from-cli",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/monitoring/harvester-monitoring"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,a.kt)("h2",{id:"dashboard-metrics"},"Dashboard Metrics"),(0,a.kt)("p",null,"Harvester has provided a built-in monitoring integration using ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),". Monitoring is automatically enabled during the Harvester installations."),(0,a.kt)("p",null,"From the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dashboard")," page, users can view the cluster metrics and top 10 most used VM metrics respectively.\nAlso, users can click the ",(0,a.kt)("a",{parentName:"p",href:"http://grafana.com/"},"Grafana")," dashboard link to view more dashboards on the Grafana UI."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(11167).Z,width:"2554",height:"1305"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only admin users are able to view the cluster dashboard metrics."),(0,a.kt)("p",{parentName:"admonition"},"Additionally, Grafana is provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),", so the default admin password is: prom-operator"),(0,a.kt)("p",{parentName:"admonition"},"Reference: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/dev-v2.7/charts/rancher-project-monitoring"},"values.yaml"))),(0,a.kt)("h2",{id:"vm-detail-metrics"},"VM Detail Metrics"),(0,a.kt)("p",null,"For VMs, you can view VM metrics by clicking on the ",(0,a.kt)("inlineCode",{parentName:"p"},"VM details page > VM Metrics"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(24742).Z,width:"2264",height:"1132"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The current ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory Usage")," is calculated based on ",(0,a.kt)("inlineCode",{parentName:"p"},"(1 - free/total) * 100%"),", not ",(0,a.kt)("inlineCode",{parentName:"p"},"(used/total) * 100%"),".")),(0,a.kt)("p",null,"For example, in a Linux OS, the ",(0,a.kt)("inlineCode",{parentName:"p"},"free -h")," command outputs the current memory statistics as follows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ free -h\n                total        used        free      shared  buff/cache   available\nMem:          7.7Gi       166Mi       4.6Gi       1.0Mi       2.9Gi       7.2Gi\nSwap:            0B          0B          0B\n")),(0,a.kt)("p",null,"The corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory Usage")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"(1 - 4.6/7.7) * 100%"),", roughly ",(0,a.kt)("inlineCode",{parentName:"p"},"40%"),"."),(0,a.kt)("h2",{id:"how-to-configure-monitoring-settings"},"How to Configure Monitoring Settings"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.1")),(0,a.kt)("p",null,"Monitoring has several components that help to collect and aggregate metric data from all Nodes/Pods/VMs. The resources required for monitoring depend on your workloads and hardware resources. Harvester sets defaults based on general use cases, and you can change them accordingly."),(0,a.kt)("p",null,"Currently, ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources Settings")," can be configured for the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Prometheus Node Exporter(",(0,a.kt)("em",{parentName:"li"},"UI configurable as of v1.0.2"),")")),(0,a.kt)("h3",{id:"from-webui"},"From WebUI"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," page, you can view and change the resources settings as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to settings page, find ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-monitoring"),".\n",(0,a.kt)("img",{src:n(53279).Z,width:"5060",height:"948"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Show harvester-monitoring")," to view the current values.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"\u22ee > Edit Setting")," to set a new value.\n",(0,a.kt)("img",{src:n(70807).Z,width:"4394",height:"2426"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," resource will be restarted within a few seconds. Please be aware that the reboot can take some time to reload previous data."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The most frequently used option is the memory setting:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Requested Memory")," is the minimum memory required by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," resource. The recommended value is about 5% to 10% of the system memory of one single management node. A value less than 500Mi will be denied.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Memory Limit")," is the maximum memory that can be allocated to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," resource. The recommended value is about 30% of the system's memory for one single management node. When the ",(0,a.kt)("inlineCode",{parentName:"p"},"Monitoring")," reaches this threshold, it will automatically restart."))),(0,a.kt)("p",null,"Depending on the available hardware resources and system loads, you may change the above settings accordingly."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you have multiple management nodes with different hardware resources, please set the value of Prometheus based on the smaller one.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When an increasing number of VMs get deployed on one node, the ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus-node-exporter")," pod might get killed due to OOM(out of memory). In that case, you should increase the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"limits.memory"),".")),(0,a.kt)("h3",{id:"from-cli"},"From CLI"),(0,a.kt)("p",null,"To update those values, you can also use the CLI command with: ",(0,a.kt)("inlineCode",{parentName:"p"},"$kubectl edit managedchart rancher-monitoring -n fleet-local"),"."),(0,a.kt)("p",null,"For Harvester version ",(0,a.kt)("inlineCode",{parentName:"p"},">= v1.0.1"),", the related path and default value are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Prometheus configs\nspec.values.prometheus.prometheusSpec.resources.limits.cpu: 1000m\nspec.values.prometheus.prometheusSpec.resources.limits.memory: 2500Mi\nspec.values.prometheus.prometheusSpec.resources.requests.cpu: 750m\nspec.values.prometheus.prometheusSpec.resources.requests.memory: 1750Mi\n---\n# node exporter configs\nspec.values.prometheus-node-exporter.resources.limits.cpu: 200m\nspec.values.prometheus-node-exporter.resources.limits.memory: 180Mi\nspec.values.prometheus-node-exporter.resources.requests.cpu: 100m\nspec.values.prometheus-node-exporter.resources.requests.memory: 30Mi\n")),(0,a.kt)("p",null,"For versions ",(0,a.kt)("inlineCode",{parentName:"p"},"<= v1.0.0"),", the related path and default value are not specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"managedchart rancher-monitoring"),", you need to add them accordingly."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"For Monitoring support and troubleshooting, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v1.0/troubleshooting/monitoring"},"troubleshooting page")," ."))}u.isMDXComponent=!0},11167:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monitoring-dashboard-8f49b2e77f152646e4f48d9d84e903a3.png"},70807:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monitoring-setting-edit-config-fd28596de256cedcc1b5bccc15262efc.png"},53279:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monitoring-setting-d44e542f715e722df9ae74c233f48c0a.png"},24742:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vm-metrics-46cc5179899848d80187d69f7185e29e.png"}}]);