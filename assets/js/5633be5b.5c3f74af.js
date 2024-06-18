"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[95158],{90162:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(87462),i=(t(67294),t(3905)),r=t(25108);const s={id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},o=void 0,l={unversionedId:"upload-image",id:"upload-image",title:"Upload Images",description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required.",source:"@site/docs/upload-image.md",sourceDirName:".",slug:"/upload-image",permalink:"/v1.4/upload-image",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upload-image.md",tags:[],version:"current",lastUpdatedAt:1718611809,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:6,frontMatter:{id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},sidebar:"api",previous:{title:"Authentication",permalink:"/v1.4/authentication"},next:{title:"Host Management",permalink:"/v1.4/host/"}},m={},p=[{value:"Upload Images via URL",id:"upload-images-via-url",level:3},{value:"Upload Images via Local File",id:"upload-images-via-local-file",level:3},{value:"HTTP 413 Error in Rancher Multi-Cluster Management",id:"http-413-error-in-rancher-multi-cluster-management",level:4},{value:"Prolonged Uploading of Large Images in Rancher Multi-Cluster Management",id:"prolonged-uploading-of-large-images-in-rancher-multi-cluster-management",level:4},{value:"Create Images via Volumes",id:"create-images-via-volumes",level:3},{value:"Image StorageClass",id:"image-storageclass",level:3},{value:"Image Labels",id:"image-labels",level:3}],d=e=>function(a){return r.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",a)},u=d("Tabs"),c=d("TabItem"),g={toc:p},h="wrapper";function k(e){let{components:a,...r}=e;return(0,i.kt)(h,(0,n.Z)({},g,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upload-image"})),(0,i.kt)("p",null,"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes."),(0,i.kt)("h3",{id:"upload-images-via-url"},"Upload Images via URL"),(0,i.kt)(u,{mdxType:"Tabs"},(0,i.kt)(c,{value:"ui",label:"UI",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"To import virtual machine images in the ",(0,i.kt)("strong",{parentName:"p"},"Images")," page, enter a URL that can be accessed from the cluster. Description and labels are optional."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image name will be auto-filled using the URL address's filename. You can customize the image name at any time.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(56118).Z,width:"5120",height:"1512"}))),(0,i.kt)(c,{value:"api",label:"API",mdxType:"TabItem"},(0,i.kt)("p",null,"To import a virtual machine image from a repository using the API, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"VirtualMachineImage")," object. You must specify a URL that can be accessed from the cluster."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: harvesterhci.io/v1beta1\nkind: VirtualMachineImage\nmetadata:\n  name: opensuse-leap\n  namespace: default\nspec:\n  description: A human-readable description for the VM image\n  displayName: openSUSE-Leap\n  sourceType: download\n  url: "https://download.opensuse.org/repositories/Cloud:/Images:/Leap_15.5/images/openSUSE-Leap-15.5.x86_64-NoCloud.qcow2"\n  checksum: 80c27afb7cd791ac86ee1b0b0c572a242f6142579db5beac841e71151d370cd6\n')),(0,i.kt)("p",null,"For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"./api/create-namespaced-virtual-machine-image"},"API reference"),".")),(0,i.kt)(c,{value:"terraform",label:"Terraform",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hcl"},'resource "harvester_image" "opensuse154" {\n  name      = "opensuse154"\n  namespace = "harvester-public"\n\n  display_name = "openSUSE-Leap-15.4.x86_64-NoCloud.qcow2"\n  source_type  = "download"\n  url          = "https://downloadcontent-us1.opensuse.org/repositories/Cloud:/Images:/Leap_15.4/images/openSUSE-Leap-15.4.x86_64-NoCloud.qcow2"\n}\n')))),(0,i.kt)("h3",{id:"upload-images-via-local-file"},"Upload Images via Local File"),(0,i.kt)("p",null,"Currently, qcow2, raw, and ISO images are supported."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Please do not refresh the page until the file upload is finished."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(23339).Z,width:"5120",height:"1616"})),(0,i.kt)("h4",{id:"http-413-error-in-rancher-multi-cluster-management"},"HTTP 413 Error in Rancher Multi-Cluster Management"),(0,i.kt)("p",null,"You can upload images from the ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/rancher/virtualization-management#importing-harvester-cluster"},(0,i.kt)("strong",{parentName:"a"},"Multi-Cluster Management"))," screen on the ",(0,i.kt)("strong",{parentName:"p"},"Rancher UI"),". When the status of an image is ",(0,i.kt)("em",{parentName:"p"},"Uploading")," but the progress indicator displays ",(0,i.kt)("em",{parentName:"p"},"0%")," for an extended period, check the HTTP response status code. ",(0,i.kt)("em",{parentName:"p"},"413")," indicates that the size of the request body exceeds the limit."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(34114).Z,width:"1921",height:"791"})),(0,i.kt)("p",null,"The maximum request body size should be specific to the cluster that is hosting Rancher (for example, RKE2 clusters have a default limit of 1 MB but no such limit exists in K3s clusters)."),(0,i.kt)("p",null,"The current workaround is to upload images from the ",(0,i.kt)("strong",{parentName:"p"},"Harvester UI"),". If you choose to upload images from the Rancher UI, you may need to configure related settings on the ingress server (for example, ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#custom-max-body-size"},(0,i.kt)("inlineCode",{parentName:"a"},"proxy-body-size"))," in NGINX)."),(0,i.kt)("p",null,"If Rancher is deployed on an RKE2 cluster, perform the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the Rancher ingress."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system edit ingress rancher\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Specify a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io/proxy-body-size"),"."),(0,i.kt)("p",{parentName:"li"},"Example:\n",(0,i.kt)("img",{src:t(43566).Z,width:"1905",height:"719"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the stuck image, and then restart the upload process."))),(0,i.kt)("h4",{id:"prolonged-uploading-of-large-images-in-rancher-multi-cluster-management"},"Prolonged Uploading of Large Images in Rancher Multi-Cluster Management"),(0,i.kt)("p",null,"If you upload a very large image (over 10 GB) from the ",(0,i.kt)("strong",{parentName:"p"},"Multi-Cluster Management")," screen on the Rancher UI, the operation may take longer than usual and the image status (Uploading) may not change."),(0,i.kt)("p",null,"This behavior is related to ",(0,i.kt)("em",{parentName:"p"},"proxy-request-buffering")," in the ingress configuration, which is also specific to the cluster that is hosting Rancher."),(0,i.kt)("p",null,"The current workaround is to upload images from the ",(0,i.kt)("strong",{parentName:"p"},"Harvester UI"),". If you choose to upload images from the Rancher UI, you may need to configure related settings on the ingress server (for example, ",(0,i.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_request_buffering"},(0,i.kt)("inlineCode",{parentName:"a"},"proxy-request-buffering"))," in NGINX)."),(0,i.kt)("p",null,"If Rancher is deployed on an RKE2 cluster, perform the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the Rancher ingress."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system edit ingress rancher\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Turn off ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io/proxy-request-buffering"),"."),(0,i.kt)("p",{parentName:"li"},"Example:\n",(0,i.kt)("img",{src:t(90144).Z,width:"1917",height:"751"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the stuck image, and then restart the upload process."))),(0,i.kt)("h3",{id:"create-images-via-volumes"},"Create Images via Volumes"),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Volumes")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Export Image"),". Enter the image name and select a StorageClass to create an image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(27506).Z,width:"2538",height:"1164"})),(0,i.kt)("h3",{id:"image-storageclass"},"Image StorageClass"),(0,i.kt)("p",null,"When creating an image, you can select a ",(0,i.kt)("a",{parentName:"p",href:"/v1.4/advanced/storageclass"},"StorageClass")," and use its pre-defined parameters like replicas, node selectors and disk selectors ."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image will not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," selected here directly. It's just a ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," template."),(0,i.kt)("p",{parentName:"admonition"},"Instead, it will create a special StorageClass under the hood with a prefix name of ",(0,i.kt)("inlineCode",{parentName:"p"},"longhorn-"),". This is automatically done by the Harvester backend, but it will inherit the parameters from the StorageClass you have selected.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(18637).Z,width:"2536",height:"896"})),(0,i.kt)("h3",{id:"image-labels"},"Image Labels"),(0,i.kt)("p",null,"You can add labels to the image, which will help identify the OS type more accurately. Also, you can add any custom labels for filtering if needed."),(0,i.kt)("p",null,"If your image name or URL contains any valid information, the UI will automatically recognize the OS type and image category for you. If not, you can also manually specify those corresponding labels on the UI."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(76168).Z,width:"4382",height:"1498"})))}k.isMDXComponent=!0},90144:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img-ingress-request-proxy-buffering-e3c8ab908c3dc8af85b6d071090ce9a7.png"},76168:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-labels-d742377d68f63e01883436d86f3422e6.png"},18637:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-storageclass-04b9f064d14c26ae62e8b9a0a94ccbc9.png"},23339:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-image-local-4a9a097f0a1cc582797a58411f0940a0.png"},56118:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-image-400a8a7376f481a4347e81d134a80b89.png"},27506:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/export-volume-to-image-1-0281e9ded41ab207e1869b372061aae1.png"},34114:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img-413-code-b4a9eb417b96524f89c30c340dd4e871.png"},43566:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img-ingress-client-body-08dae9c4bfd54713df86da980c5206d6.png"}}]);