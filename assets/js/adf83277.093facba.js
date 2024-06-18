"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[13496],{60236:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>u,contentTitle:()=>y,default:()=>_,frontMatter:()=>k,metadata:()=>g,toc:()=>h});s(67294);var t=s(3905),m=s(54734),i=s(90238),l=s.n(i),n=s(36765),r=s(99473),p=s(50690),c=s(88337),o=s(48951),d=s(50551);const k={id:"replace-cluster-network",title:"Replace a Cluster Network",description:"Update a ClusterNetwork object.",sidebar_label:"Replace a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztWU1v20gM/SsCT7uLiZ0UPXR1S4ICWyy2KdJkL44PtERH0+hjOkM5dQ3994IzsiU7ttH00OSgXCwNOeQbko9ENCtgvHcQT+Aj8WNlHxxMFaTkEqsN66qEGG5NikwRRpd57ZhsqxlVsy+U8AgUVIYsivaHFGKwZHJMaFsbFFj6WpPjiypdQryCpCqZSpZHNCbXibcw/uLE6QpcklGB8sRLQxBDcNfa0ZZSQY1G/0/WCVAFD7pMBb6xAog1uWB8o9IZc2x1eQ9Nu2mfoCDGFNlDSGmOdS5YGwWY51dziCfHkZVY0FMwfnWfNxE4g8k+aaOANeey9PDOjXQ1WpyNrrzT/4gRmmmjwDFy7Z4BdhtYUpWplgS4HgC0FpegQDMVzzHdj0OLSwWlJwHJ0fGNxdJ55zf6QHhELdThQZWCnMP7/TJL6A7kv4vbtkh1hwXRC9LjWr1ElaHsRxnaBQkPskSHzM2I8Wx0uY63ZO9ZG7do9TmgFxu/asLD7jNwiUU+MHBg4MDA38fApp8ytjX5BWeq0oUsvTk9DenvT+arf0ENc3Rg8cDi18HiYY4ODBwY+KJztFHw5vTs6ai8tIRMw7gcyDqQ9bWQdRiXAwMHBr70uHy7b1zellhzVln9ndJfGJq9Av4pim/0PSKDFgtiss4XWaBO+FGgBZ5BzmD3O/VHLCiq5hFnFFlyVW0Tgt3/q9VB5+KXmayYmuDJ99OTv6ft793dyfQvaJqpbw5ZJV+5Tc1hSwYxjNFoNz4Q/nEb/nESwt+qufFKjtSAAkdJbTUvPwu0QI8LdDrpgcyYDbTg5X3m5Y2CC0JL9phmUJDASr6uu6/w779hYXLa7ZVdQEKL7N77nbHNykbW62N7SdbvM5P99O+M7bK+D6Ele7e05ni3svbarezUmWeNLueVj1vLnn/WaYvOP32QxrXYRKTNoJzIVI4LLHshuA73Hd0FSdTdeWxVaO/O4ycuVVrITN94bHLUpXivrSdQKDs/BQXogcKTI7TAFewUHyiI15MqqxyLtdVqho5ubd40svy1JruEeDJVsECrcSZRmqwg1U6eU4jnmDs6csg/rlvu/RkdIOfeQ66HUCkjaIF5LW9SjrRc9wE/+TLCVEp/smpFl8HzyY0Y6LY+aVmNWu84TxIyfFS3T/pPtzegYNbeYBVVKlssPkoV4iPEcAd34C/ENhPVr0u9l/d1KNxgVv5+AJh2lu4=",sidebar_class_name:"put api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},y=void 0,g={unversionedId:"api/replace-cluster-network",id:"version-v1.3/api/replace-cluster-network",title:"Replace a Cluster Network",description:"Update a ClusterNetwork object.",source:"@site/versioned_docs/version-v1.3/api/replace-cluster-network.api.mdx",sourceDirName:"api",slug:"/api/replace-cluster-network",permalink:"/v1.3/api/replace-cluster-network",draft:!1,editUrl:null,tags:[],version:"v1.3",frontMatter:{id:"replace-cluster-network",title:"Replace a Cluster Network",description:"Update a ClusterNetwork object.",sidebar_label:"Replace a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztWU1v20gM/SsCT7uLiZ0UPXR1S4ICWyy2KdJkL44PtERH0+hjOkM5dQ3994IzsiU7ttH00OSgXCwNOeQbko9ENCtgvHcQT+Aj8WNlHxxMFaTkEqsN66qEGG5NikwRRpd57ZhsqxlVsy+U8AgUVIYsivaHFGKwZHJMaFsbFFj6WpPjiypdQryCpCqZSpZHNCbXibcw/uLE6QpcklGB8sRLQxBDcNfa0ZZSQY1G/0/WCVAFD7pMBb6xAog1uWB8o9IZc2x1eQ9Nu2mfoCDGFNlDSGmOdS5YGwWY51dziCfHkZVY0FMwfnWfNxE4g8k+aaOANeey9PDOjXQ1WpyNrrzT/4gRmmmjwDFy7Z4BdhtYUpWplgS4HgC0FpegQDMVzzHdj0OLSwWlJwHJ0fGNxdJ55zf6QHhELdThQZWCnMP7/TJL6A7kv4vbtkh1hwXRC9LjWr1ElaHsRxnaBQkPskSHzM2I8Wx0uY63ZO9ZG7do9TmgFxu/asLD7jNwiUU+MHBg4MDA38fApp8ytjX5BWeq0oUsvTk9DenvT+arf0ENc3Rg8cDi18HiYY4ODBwY+KJztFHw5vTs6ai8tIRMw7gcyDqQ9bWQdRiXAwMHBr70uHy7b1zellhzVln9ndJfGJq9Av4pim/0PSKDFgtiss4XWaBO+FGgBZ5BzmD3O/VHLCiq5hFnFFlyVW0Tgt3/q9VB5+KXmayYmuDJ99OTv6ft793dyfQvaJqpbw5ZJV+5Tc1hSwYxjNFoNz4Q/nEb/nESwt+qufFKjtSAAkdJbTUvPwu0QI8LdDrpgcyYDbTg5X3m5Y2CC0JL9phmUJDASr6uu6/w779hYXLa7ZVdQEKL7N77nbHNykbW62N7SdbvM5P99O+M7bK+D6Ele7e05ni3svbarezUmWeNLueVj1vLnn/WaYvOP32QxrXYRKTNoJzIVI4LLHshuA73Hd0FSdTdeWxVaO/O4ycuVVrITN94bHLUpXivrSdQKDs/BQXogcKTI7TAFewUHyiI15MqqxyLtdVqho5ubd40svy1JruEeDJVsECrcSZRmqwg1U6eU4jnmDs6csg/rlvu/RkdIOfeQ66HUCkjaIF5LW9SjrRc9wE/+TLCVEp/smpFl8HzyY0Y6LY+aVmNWu84TxIyfFS3T/pPtzegYNbeYBVVKlssPkoV4iPEcAd34C/ENhPVr0u9l/d1KNxgVv5+AJh2lu4=",sidebar_class_name:"put api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Read a Node Network",permalink:"/v1.3/api/read-node-network"},next:{title:"Replace a Namespaced Key Pair",permalink:"/v1.3/api/replace-namespaced-key-pair"}},u={},h=[{value:"Request",id:"request",level:2}],N={toc:h},f="wrapper";function _({components:e,...a}){return(0,t.kt)(f,{...N,...a,components:e,mdxType:"MDXLayout"},(0,t.kt)("h1",{className:"openapi__heading"},"Replace a Cluster Network"),(0,t.kt)(l(),{method:"put",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name}",mdxType:"MethodEndpoint"}),(0,t.kt)("p",null,"Update a ClusterNetwork object."),(0,t.kt)("h2",{id:"request"},"Request"),(0,t.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{}},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,t.kt)("div",null,(0,t.kt)("ul",null,(0,t.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,t.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,t.kt)("span",{className:"openapi-schema__required"},"required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,t.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,t.kt)("span",{className:"openapi-schema__required"},"required")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))))))),(0,t.kt)("div",null,(0,t.kt)("div",null,(0,t.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.kt)(d.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"OK")),(0,t.kt)("div",null,(0,t.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"201",value:"201",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Create")),(0,t.kt)("div",null,(0,t.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"status"),(0,t.kt)("span",{className:"openapi-schema__name"}," object"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details"},(0,t.kt)("summary",{style:{}},(0,t.kt)("span",{className:"openapi-schema__container"},(0,t.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,t.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,t.kt)("div",{style:{marginLeft:"1rem"}},(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,t.kt)(c.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)(c.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,t.kt)("li",null,(0,t.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,t.kt)(d.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.kt)(p.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.kt)(d.default,{label:"401",value:"401",mdxType:"TabItem"},(0,t.kt)("div",null,(0,t.kt)("p",null,"Unauthorized")),(0,t.kt)("div",null,(0,t.kt)(n.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.kt)(d.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))),(0,t.kt)(d.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,t.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.kt)(d.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.kt)("strong",null,"Schema")),(0,t.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.kt)("ul",{style:{marginLeft:"1rem"}},(0,t.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,t.kt)("p",null,"string"))))))))))))))}_.isMDXComponent=!0}}]);