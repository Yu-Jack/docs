"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[34717],{57433:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>y,default:()=>N,frontMatter:()=>u,metadata:()=>k,toc:()=>f});var s=t(87462),m=(t(67294),t(3905)),i=t(58219),n=(t(62316),t(51039)),l=t.n(n),r=(t(82723),t(9487)),p=t(41429),c=t(5397),d=t(4667),o=t(9472),h=(t(1176),t(12005),t(85162));const u={id:"patch-namespaced-virtual-machine-image",title:"Patch a Virtual Machine Image",description:"Patch a VirtualMachineImage object.",sidebar_label:"Patch a Virtual Machine Image",hide_title:!0,hide_table_of_contents:!0,api:"eJytVk1v2zAM/SsGj5uypF0xYLltw4YFw7ZiaHtJc2BtJlZrSyopB0sL//dBcpo4iZO0xXyxIH68R4qk9AgZScraeW0NDOEcfZonmFxp9hUWPzHNtaFRiTNK7M0tpf4dKPA4ExiOIe4LTBRYR4zBxyiDIbjg5ReWJA5TyjqcgQKm+4rEf7bZAoaPkFrjyfiwROcKnUZ3/Vuxphf9vQ3LIJY0pxLDyi8cwRAaYlDXasO0JJ7Rs23rhpFmymDouaK4Ic4aIQkGp4NB+G3m6/cPUIeoH8JsA45BHKWg4E6bDEIc+opYAshEgeOQX68bIi3Z2qd41mYG9dJDl6Akjxl6bKKYYlUEyrU6SMtgSbsU4m4Xhnk69A5pSHGM8iX4mRZX4CIUEygQW3FKF0F/h1OaU3onVbmLrNZwEEhuHGFHEG3Mo87cPH2R4p7sbGszeV601LTxNCMGBVPLJfpm6/1p23BQb2ToKIZ4yzijLwWKnCNjSZ5YugoVs0yHdGFxvpHzQ/5rBRUXR7UiD/SVHC2L7S5whabssguijj3ZUG7zRGZcgALtqTyO1y7DKFsx3am9AsVfMBqJkBd6T3cEtUuXoae9KiWJhPnYJWNC2VOy6xQePnL/jMKIZzJFXVD2igIMMX6LxntjdGxnTCLP8R5i0w90VPXD2XZFd3dlvfwUnA1Oduf5pcHK55b1A2WvmOxtEAWu1VPjbaRAL7HTxOeUMDVtC2o5WZufAm2a2zSH7dtJ7QVXUBl9X9GoKfJ4ldVq5+KKVZ4EnARNloSwE0mtI5VIFd4AkkwtJ56wlKjh2AYT2STZjLP/yHQSL6rcrt4RofOD3yH00Wnp58hzEk+cp/qdtv35yQ15POmv2Ej/cbUejrH3MOh9nCz/19e9yZu6P29eJGXzItHxGdNYdRuAgnDmf9ZPlq9/sXQFNZNDm6mN4WkftuD7E8Xk0/koJGz+dF/Dki3U9T8XPUbK",sidebar_class_name:"patch api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},y=void 0,k={unversionedId:"api/patch-namespaced-virtual-machine-image",id:"version-v1.1/api/patch-namespaced-virtual-machine-image",title:"Patch a Virtual Machine Image",description:"Patch a VirtualMachineImage object.",source:"@site/versioned_docs/version-v1.1/api/patch-namespaced-virtual-machine-image.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-virtual-machine-image",permalink:"/v1.1/api/patch-namespaced-virtual-machine-image",draft:!1,editUrl:null,tags:[],version:"v1.1",frontMatter:{id:"patch-namespaced-virtual-machine-image",title:"Patch a Virtual Machine Image",description:"Patch a VirtualMachineImage object.",sidebar_label:"Patch a Virtual Machine Image",hide_title:!0,hide_table_of_contents:!0,api:"eJytVk1v2zAM/SsGj5uypF0xYLltw4YFw7ZiaHtJc2BtJlZrSyopB0sL//dBcpo4iZO0xXyxIH68R4qk9AgZScraeW0NDOEcfZonmFxp9hUWPzHNtaFRiTNK7M0tpf4dKPA4ExiOIe4LTBRYR4zBxyiDIbjg5ReWJA5TyjqcgQKm+4rEf7bZAoaPkFrjyfiwROcKnUZ3/Vuxphf9vQ3LIJY0pxLDyi8cwRAaYlDXasO0JJ7Rs23rhpFmymDouaK4Ic4aIQkGp4NB+G3m6/cPUIeoH8JsA45BHKWg4E6bDEIc+opYAshEgeOQX68bIi3Z2qd41mYG9dJDl6Akjxl6bKKYYlUEyrU6SMtgSbsU4m4Xhnk69A5pSHGM8iX4mRZX4CIUEygQW3FKF0F/h1OaU3onVbmLrNZwEEhuHGFHEG3Mo87cPH2R4p7sbGszeV601LTxNCMGBVPLJfpm6/1p23BQb2ToKIZ4yzijLwWKnCNjSZ5YugoVs0yHdGFxvpHzQ/5rBRUXR7UiD/SVHC2L7S5whabssguijj3ZUG7zRGZcgALtqTyO1y7DKFsx3am9AsVfMBqJkBd6T3cEtUuXoae9KiWJhPnYJWNC2VOy6xQePnL/jMKIZzJFXVD2igIMMX6LxntjdGxnTCLP8R5i0w90VPXD2XZFd3dlvfwUnA1Oduf5pcHK55b1A2WvmOxtEAWu1VPjbaRAL7HTxOeUMDVtC2o5WZufAm2a2zSH7dtJ7QVXUBl9X9GoKfJ4ldVq5+KKVZ4EnARNloSwE0mtI5VIFd4AkkwtJ56wlKjh2AYT2STZjLP/yHQSL6rcrt4RofOD3yH00Wnp58hzEk+cp/qdtv35yQ15POmv2Ej/cbUejrH3MOh9nCz/19e9yZu6P29eJGXzItHxGdNYdRuAgnDmf9ZPlq9/sXQFNZNDm6mN4WkftuD7E8Xk0/koJGz+dF/Dki3U9T8XPUbK",sidebar_class_name:"patch api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Virtual Machine Backup",permalink:"/v1.1/api/patch-namespaced-virtual-machine-backup"},next:{title:"Patch a Virtual Machine Instance Migration",permalink:"/v1.1/api/patch-namespaced-virtual-machine-instance-migration"}},g={},f=[{value:"Request",id:"request",level:2}],b={toc:f},v="wrapper";function N(e){let{components:a,...t}=e;return(0,m.kt)(v,(0,s.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Patch a Virtual Machine Image"),(0,m.kt)(l(),{method:"patch",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineimages/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Patch a VirtualMachineImage object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("span",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"object"))))),(0,m.kt)(h.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("span",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"object")))))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcNamespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"retry",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"sourceType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"storageClassParameters"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"appliedUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(d.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(d.Z,{collapsible:!1,name:"failed",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastFailedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"size",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "checksum": "string",\n    "description": "string",\n    "displayName": "string",\n    "pvcName": "string",\n    "pvcNamespace": "string",\n    "retry": 0,\n    "sourceType": "string",\n    "storageClassParameters": {},\n    "url": "string"\n  },\n  "status": {\n    "appliedUrl": "string",\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "failed": 0,\n    "lastFailedTime": "string",\n    "progress": 0,\n    "size": 0,\n    "storageClassName": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);