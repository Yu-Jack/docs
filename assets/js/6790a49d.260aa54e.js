"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[39822],{11224:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>k,default:()=>_,frontMatter:()=>h,metadata:()=>y,toc:()=>f});var s=t(87462),m=(t(67294),t(3905)),i=t(58219),l=(t(62316),t(51039)),n=t.n(l),p=(t(82723),t(9487)),r=t(41429),c=t(5397),o=t(4667),d=t(9472),u=(t(1176),t(12005),t(85162));const h={id:"read-namespaced-virtual-machine-template",title:"Read a Virtual Machine Template",description:"Get a VirtualMachineTemplate object.",sidebar_label:"Read a Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:"eJztlktv2zAMx7+KwEuBQWnSbpd52GGHYQuGPYBtvbQ5MDITq7UlVaKzpYG/+0A7j6ZJt3btMb7IsPj4ifpb4gJySibawNY7yOADsUJ1ZiPXWH5GU1hHP6gKJTIpP74kw8eggXGaIDuHpaFaWqqVaYKRBh8oosQd5pBBJMy/YEUpoKF8fwbQEDBiRUxR4i/u0H0vfF3migtS9Dv4yGosb2j4WL2XYfW5QusYrUvKlHViir0UyNiJNWpiqcyTKu0VqaM10JGsymFFkEEbEDRYSXldU5yDhmQKqhCyBfA8iNXY+5LQgYba2euahkxVgoxjTU2j7yW3Sc2wrKkjF1jKBb7FThxtSCtELlA2o04UlUGnnGfVLWO+RSuuz4wrdVF+0lY6UvJ1NLRJ2Q7LhAG5AA2RrmsbKe8i7skvS3PTB6b/2gpNSR6FLldYc6GS8YG0SrUpFCY18VExYZVaixC9uKRtyHZrn5N0JP4peJcoicvpYCDDHfpPoMF4x+RYZjGE0pr2T+hfJjFZ7Gbt/q0tvnO4si4HDRjsGcUk0UcaQpQfi21HcGtuZwmN7iLsm6iIMUfGDn+CdSmsjf4rT1vaHYSu4HtybLZgd7ZpNIiY/5l/O9fSdLnk4Z616U04EIitvdmPwch1ehLIrcjWMU0pgoaJjxVy9+nlqbC0R+OjfNpHb0lojlV5kNBBQk+QkJxCbxJHwurtL2RTHPR00NOj9CSQrwYnu5ffTyeXtY/2hvL/uAbXRXjgmXeP/cMEvql408mv8NKpTqmtrbQLGfQx2NQvMM5I+sjC2GPr+7OTMTGe9NdySv3F+j07x97NoPd6tBwvLnqjF01/1rW8Vdfy8qpT7hz3+7Sty8S3yJZLYf64IlHvvg2l3Zmttg6WUNA0fwCPUSDT",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},k=void 0,y={unversionedId:"api/read-namespaced-virtual-machine-template",id:"version-v1.2/api/read-namespaced-virtual-machine-template",title:"Read a Virtual Machine Template",description:"Get a VirtualMachineTemplate object.",source:"@site/versioned_docs/version-v1.2/api/read-namespaced-virtual-machine-template.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-virtual-machine-template",permalink:"/v1.2/api/read-namespaced-virtual-machine-template",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"read-namespaced-virtual-machine-template",title:"Read a Virtual Machine Template",description:"Get a VirtualMachineTemplate object.",sidebar_label:"Read a Virtual Machine Template",hide_title:!0,hide_table_of_contents:!0,api:"eJztlktv2zAMx7+KwEuBQWnSbpd52GGHYQuGPYBtvbQ5MDITq7UlVaKzpYG/+0A7j6ZJt3btMb7IsPj4ifpb4gJySibawNY7yOADsUJ1ZiPXWH5GU1hHP6gKJTIpP74kw8eggXGaIDuHpaFaWqqVaYKRBh8oosQd5pBBJMy/YEUpoKF8fwbQEDBiRUxR4i/u0H0vfF3migtS9Dv4yGosb2j4WL2XYfW5QusYrUvKlHViir0UyNiJNWpiqcyTKu0VqaM10JGsymFFkEEbEDRYSXldU5yDhmQKqhCyBfA8iNXY+5LQgYba2euahkxVgoxjTU2j7yW3Sc2wrKkjF1jKBb7FThxtSCtELlA2o04UlUGnnGfVLWO+RSuuz4wrdVF+0lY6UvJ1NLRJ2Q7LhAG5AA2RrmsbKe8i7skvS3PTB6b/2gpNSR6FLldYc6GS8YG0SrUpFCY18VExYZVaixC9uKRtyHZrn5N0JP4peJcoicvpYCDDHfpPoMF4x+RYZjGE0pr2T+hfJjFZ7Gbt/q0tvnO4si4HDRjsGcUk0UcaQpQfi21HcGtuZwmN7iLsm6iIMUfGDn+CdSmsjf4rT1vaHYSu4HtybLZgd7ZpNIiY/5l/O9fSdLnk4Z616U04EIitvdmPwch1ehLIrcjWMU0pgoaJjxVy9+nlqbC0R+OjfNpHb0lojlV5kNBBQk+QkJxCbxJHwurtL2RTHPR00NOj9CSQrwYnu5ffTyeXtY/2hvL/uAbXRXjgmXeP/cMEvql408mv8NKpTqmtrbQLGfQx2NQvMM5I+sjC2GPr+7OTMTGe9NdySv3F+j07x97NoPd6tBwvLnqjF01/1rW8Vdfy8qpT7hz3+7Sty8S3yJZLYf64IlHvvg2l3Zmttg6WUNA0fwCPUSDT",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Virtual Machine Template Version",permalink:"/v1.2/api/read-namespaced-virtual-machine-template-version"},next:{title:"Read a Virtual Machine",permalink:"/v1.2/api/read-namespaced-virtual-machine"}},g={},f=[{value:"Request",id:"request",level:2}],b={toc:f},v="wrapper";function _(e){let{components:a,...t}=e;return(0,m.kt)(v,(0,s.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Read a Virtual Machine Template"),(0,m.kt)(n(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachinetemplates/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Get a VirtualMachineTemplate object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(r.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(r.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(r.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(r.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(u.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(u.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"defaultVersionId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"defaultVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"latestVersion",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "defaultVersionId": "string",\n    "description": "string"\n  },\n  "status": {\n    "defaultVersion": 0,\n    "latestVersion": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(u.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(u.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}_.isMDXComponent=!0}}]);