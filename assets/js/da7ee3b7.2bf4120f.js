"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[39894],{28362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>i});a(67294);var n=a(3905);const d={sidebar_position:4,sidebar_label:"Seeder",title:"Seeder"},s=void 0,r={unversionedId:"advanced/addons/seeder",id:"version-v1.2/advanced/addons/seeder",title:"Seeder",description:"Available as of v1.2.0",source:"@site/versioned_docs/version-v1.2/advanced/addons/seeder.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/seeder",permalink:"/v1.2/advanced/addons/seeder",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/advanced/addons/seeder.md",tags:[],version:"v1.2",lastUpdatedAt:1718703512,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Seeder",title:"Seeder"},sidebar:"api",previous:{title:"VM Import",permalink:"/v1.2/advanced/addons/vmimport"},next:{title:"Rancher Manager",permalink:"/v1.2/advanced/addons/rancher-vcluster"}},o={},i=[{value:"Power operations",id:"power-operations",level:2},{value:"Hardware event aggregation",id:"hardware-event-aggregation",level:2}],p={toc:i},l="wrapper";function c({components:e,...t}){return(0,n.kt)(l,{...p,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/seeder"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," addon lets you perform out-of-band operations on underlying nodes. "),(0,n.kt)("p",null,"This addon can also discover hardware and hardware events for bare-metal nodes that support redfish-based access and then associate the hardware with the corresponding Harvester nodes."),(0,n.kt)("p",null,"You must enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," addon from the ",(0,n.kt)("strong",{parentName:"p"},"Addons")," page to get started."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(48491).Z,width:"1039",height:"577"})),(0,n.kt)("p",null,"Once the addon is enabled, find the desired host and select ",(0,n.kt)("strong",{parentName:"p"},"Edit Config")," and go to the ",(0,n.kt)("strong",{parentName:"p"},"Out-Of-Band Access")," tab."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(15176).Z,width:"1250",height:"544"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(32594).Z,width:"1271",height:"682"})),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"seeder")," leverages ",(0,n.kt)("inlineCode",{parentName:"p"},"ipmi")," to manage the underlying node hardware."),(0,n.kt)("p",null,"Hardware discovery and event detection require ",(0,n.kt)("inlineCode",{parentName:"p"},"redfish")," support."),(0,n.kt)("h2",{id:"power-operations"},"Power operations"),(0,n.kt)("p",null,"Once you've defined the out-of-band config for a node, you can put the node into ",(0,n.kt)("inlineCode",{parentName:"p"},"Maintenance")," mode, which allows you to shut down or reboot the node as needed."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(69730).Z,width:"1179",height:"381"})),(0,n.kt)("p",null,"If a node is shut down, you can also select ",(0,n.kt)("strong",{parentName:"p"},"Power On")," to power it on again:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(86660).Z,width:"1175",height:"222"})),(0,n.kt)("h2",{id:"hardware-event-aggregation"},"Hardware event aggregation"),(0,n.kt)("p",null,"If you've enabled ",(0,n.kt)("strong",{parentName:"p"},"Event")," in ",(0,n.kt)("strong",{parentName:"p"},"Out-of-Band Access"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"seeder")," will leverage ",(0,n.kt)("inlineCode",{parentName:"p"},"redfish")," to query the underlying hardware for information about component failures and fan temperatures."),(0,n.kt)("p",null,"This information is associated with Harvester nodes and can be used as Kubernetes events."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(61320).Z,width:"1111",height:"263"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Sometimes, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Out-Of-Band Access")," section may be stuck with the message ",(0,n.kt)("inlineCode",{parentName:"p"},'Waiting for "inventories.metal.harvesterhci.io" to be ready'),". In this case, you need to refresh the page. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4412"},"this issue"),".")))}c.isMDXComponent=!0},15176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EditConfig-a6417b75728e54327ffa1be2e408e461.png"},61320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HardwareEvents-cc0c8422f453b4bf923129d8db896f09.png"},32594:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/OutOfBandAccess-5cc330e566556c72ae97b290fd0a165a.png"},86660:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PowerOn-0fe7143d3be8a1c57ecc883db2500e30.png"},69730:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ShutdownReboot-e83fae9ea2bbfcbb7bfd2b1487afb2e1.png"},48491:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);