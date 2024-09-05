"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[87620],{68721:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>n,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});t(67294);var i=t(3905);const o={sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},a=void 0,s={unversionedId:"terraform/terraform-provider",id:"version-v1.0/terraform/terraform-provider",title:"Harvester Terraform Provider",description:"Requirements",source:"@site/versioned_docs/version-v1.0/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/v1.0/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/terraform/terraform-provider.md",tags:[],version:"v1.0",lastUpdatedAt:1725352560,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"api",previous:{title:"Harvester CSI Driver",permalink:"/v1.0/rancher/csi-driver"},next:{title:"Settings",permalink:"/v1.0/settings/"}},n={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Install The Provider",id:"install-the-provider",level:2},{value:"Using the provider",id:"using-the-provider",level:2}],v={toc:d},l="wrapper";function p({components:r,...e}){return(0,i.kt)(l,{...v,...e,components:r,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/terraform/terraform-provider"})),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," >= 0.13.x"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," 1.18 to build the provider plugin")),(0,i.kt)("h2",{id:"install-the-provider"},"Install The Provider"),(0,i.kt)("p",null,"copy and paste this code into your Terraform configuration. Then, run ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform init")," to initialize it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "<replace to the latest release version>"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,i.kt)("h2",{id:"using-the-provider"},"Using the provider"),(0,i.kt)("p",null,"More details about the provider-specific configurations can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"docs"),"."),(0,i.kt)("p",null,"Github Repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/terraform-provider-harvester"},"https://github.com/harvester/terraform-provider-harvester")))}p.isMDXComponent=!0}}]);