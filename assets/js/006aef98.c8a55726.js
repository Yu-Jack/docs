"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[73606],{83198:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>y,default:()=>v,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var t=s(87462),m=(s(67294),s(3905)),i=s(58219),n=(s(62316),s(51039)),l=s.n(n),r=(s(82723),s(9487)),p=s(41429),c=s(5397),o=s(4667),d=s(9472),u=(s(1176),s(12005),s(85162));const h={id:"read-namespaced-support-bundle",title:"Read a Support Bundle",description:"Get a SupportBundle object.",sidebar_label:"Read a Support Bundle",hide_title:!0,hide_table_of_contents:!0,api:"eJztl1FvGzcMx7+KwJcCgxInXVGgHvawAcMWbGiLttlL6gdaR/vU3kmKyEubGPfdB+psx67tJh36ssFPOhwp/X+kxDtxARWxyz6JjwHG8DuJQfO2Sylm+bULVUMmTj+Qk1OwIDhnGF/B0m4GB4aJhZgooy5yUcEYMmH1ElvihI6qreXAQsKMLQllXWzxBcHbOnZNZaQmQ5+LylSf0Mmp+U2H1esWfRD0gY1rOhbKJ5zI+Zl3Zuapqdg0/iOZJ2uOJxpCwJZgDGVBsOBV8rqjfAsW2NXUIowXILdJvaYxNoQBLHTBX3d0IdQyjCV31Pf2ILlnc4NNRwO5wlKl8AWbJfvEK0SpURPeMWXjMJgQxQxh3G7R6tTvjKt5MXFWMp2JY5cd3UuWYSmYUGqwkOm685mqYcU9+hpamD9S/lU5VUZ1DIbKYCe1YRcTWcOdqw2ymcVshLDl4pFy1Cm8DVm29nuSTnQ+pxiYWKc8PTvT4Qv6P8GCi0EoiFoxpca7UgCjD6wui13VoZC2+K5AdxssfPShAguY/N+UWUUmFlLWshI/gGzYdiLplyvsM7QkWKHgEMUMu0aRe/tVrJLhHYQh73s07ndi19r3dojyW/Q3072DsbUXu5u6FgFF88wdXb756yHPgikoHT8Iuk3jYqi8svCGBOaMWqR+OFrfEHmxrVF2Ym+Q5V3GwEXynT+wIep2mSoUOujSEjPO99syIR84Z/c5+nreB+tDOe8tzHxDBw+WGtnfbRp9EJpTBguzmFuU4dXzZ+qecpxnYn7Q/cenq1j2H9lCtlnVt9g2x6o+VvWxqv9PVa3/6p9YMmH78ycUVx9L/FjixxL/b5e4sj07O9+9tV8G7TJi9ndU/Yv7+1rkkTeDA/6P++ZsRlQ+BXXUznpO5RxrnzOGESbPoxrzDWkDXDt/6uPo5nxKguejdWnzaLF+Hl/hyd3ZyYvJcnz//mTyQz/ioUWfDg394L/ftbRas1hIvTSK+scKwPzy+kLbs5vV1w6WLND3/wAEnK3O",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},y=void 0,g={unversionedId:"api/read-namespaced-support-bundle",id:"version-v1.2/api/read-namespaced-support-bundle",title:"Read a Support Bundle",description:"Get a SupportBundle object.",source:"@site/versioned_docs/version-v1.2/api/read-namespaced-support-bundle.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-support-bundle",permalink:"/v1.2/api/read-namespaced-support-bundle",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"read-namespaced-support-bundle",title:"Read a Support Bundle",description:"Get a SupportBundle object.",sidebar_label:"Read a Support Bundle",hide_title:!0,hide_table_of_contents:!0,api:"eJztl1FvGzcMx7+KwJcCgxInXVGgHvawAcMWbGiLttlL6gdaR/vU3kmKyEubGPfdB+psx67tJh36ssFPOhwp/X+kxDtxARWxyz6JjwHG8DuJQfO2Sylm+bULVUMmTj+Qk1OwIDhnGF/B0m4GB4aJhZgooy5yUcEYMmH1ElvihI6qreXAQsKMLQllXWzxBcHbOnZNZaQmQ5+LylSf0Mmp+U2H1esWfRD0gY1rOhbKJ5zI+Zl3Zuapqdg0/iOZJ2uOJxpCwJZgDGVBsOBV8rqjfAsW2NXUIowXILdJvaYxNoQBLHTBX3d0IdQyjCV31Pf2ILlnc4NNRwO5wlKl8AWbJfvEK0SpURPeMWXjMJgQxQxh3G7R6tTvjKt5MXFWMp2JY5cd3UuWYSmYUGqwkOm685mqYcU9+hpamD9S/lU5VUZ1DIbKYCe1YRcTWcOdqw2ymcVshLDl4pFy1Cm8DVm29nuSTnQ+pxiYWKc8PTvT4Qv6P8GCi0EoiFoxpca7UgCjD6wui13VoZC2+K5AdxssfPShAguY/N+UWUUmFlLWshI/gGzYdiLplyvsM7QkWKHgEMUMu0aRe/tVrJLhHYQh73s07ndi19r3dojyW/Q3072DsbUXu5u6FgFF88wdXb756yHPgikoHT8Iuk3jYqi8svCGBOaMWqR+OFrfEHmxrVF2Ym+Q5V3GwEXynT+wIep2mSoUOujSEjPO99syIR84Z/c5+nreB+tDOe8tzHxDBw+WGtnfbRp9EJpTBguzmFuU4dXzZ+qecpxnYn7Q/cenq1j2H9lCtlnVt9g2x6o+VvWxqv9PVa3/6p9YMmH78ycUVx9L/FjixxL/b5e4sj07O9+9tV8G7TJi9ndU/Yv7+1rkkTeDA/6P++ZsRlQ+BXXUznpO5RxrnzOGESbPoxrzDWkDXDt/6uPo5nxKguejdWnzaLF+Hl/hyd3ZyYvJcnz//mTyQz/ioUWfDg394L/ftbRas1hIvTSK+scKwPzy+kLbs5vV1w6WLND3/wAEnK3O",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Persistent Volume Claim",permalink:"/v1.2/api/read-namespaced-persistent-volume-claim"},next:{title:"Read an Upgrade",permalink:"/v1.2/api/read-namespaced-upgrade"}},k={},f=[{value:"Request",id:"request",level:2}],b={toc:f},_="wrapper";function v(e){let{components:a,...s}=e;return(0,m.kt)(_,(0,t.Z)({},b,s,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Read a Support Bundle"),(0,m.kt)(l(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/supportbundles/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Get a SupportBundle object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(u.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(u.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"issueURL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"filename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"filesize",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "issueURL": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "filename": "string",\n    "filesize": 0,\n    "progress": 0,\n    "state": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(u.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(u.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}v.isMDXComponent=!0}}]);