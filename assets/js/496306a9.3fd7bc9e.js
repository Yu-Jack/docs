"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[98062],{24569:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>h});var a=t(87462),s=(t(67294),t(3905));const n={id:"terraform-provider",sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},o=void 0,i={unversionedId:"terraform/terraform-provider",id:"terraform/terraform-provider",title:"Harvester Terraform Provider",description:"Support Matrix",source:"@site/docs/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/v1.4/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/terraform/terraform-provider.md",tags:[],version:"current",lastUpdatedAt:1717662223,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:1,frontMatter:{id:"terraform-provider",sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"api",previous:{title:"Resource Quotas",permalink:"/v1.4/rancher/resource-quota"},next:{title:"Installation",permalink:"/v1.4/troubleshooting/index"}},l={},h=[{value:"Support Matrix",id:"support-matrix",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Install The Provider",id:"install-the-provider",level:2},{value:"Using the provider",id:"using-the-provider",level:2}],v={toc:h},p="wrapper";function m(e){let{components:r,...t}=e;return(0,s.kt)(p,(0,a.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/terraform/terraform-provider"})),(0,s.kt)("h2",{id:"support-matrix"},"Support Matrix"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Harvester Version"),(0,s.kt)("th",{parentName:"tr",align:null},"Supported Terraform Provider Harvester"),(0,s.kt)("th",{parentName:"tr",align:null},"Supported Terraformer Harvester"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.3.0"},"v1.3.0")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.4"},"v0.6.4")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.2.2"},"v1.2.2")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.4"},"v0.6.4")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.2.1"},"v1.2.1")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.4"},"v0.6.4")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.2.0"},"v1.2.0")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.3"},"v0.6.3")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.2"},"v1.1.2")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.3"},"v0.6.3")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.1"},"v1.1.1")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.3"},"v0.6.3")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.0"},"v1.1.0")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.3"},"v0.6.3")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))))),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," >= 0.13.x"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," 1.18 to build the provider plugin")),(0,s.kt)("h2",{id:"install-the-provider"},"Install The Provider"),(0,s.kt)("p",null,"copy and paste this code into your Terraform configuration. Then, run ",(0,s.kt)("inlineCode",{parentName:"p"},"terraform init")," to initialize it."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "<replace to the latest release version>"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,s.kt)("h2",{id:"using-the-provider"},"Using the provider"),(0,s.kt)("p",null,"More details about the provider-specific configurations can be found in the ",(0,s.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"docs"),"."),(0,s.kt)("p",null,"Github Repo: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/harvester/terraform-provider-harvester"},"https://github.com/harvester/terraform-provider-harvester")))}m.isMDXComponent=!0}}]);