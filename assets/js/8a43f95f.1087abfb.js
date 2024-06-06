"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[43405],{66146:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=i(87462),n=(i(67294),i(3905));const o={sidebar_position:6,sidebar_label:"Nvidia Driver Toolkit",title:"Nvidia Driver Toolkit"},d=void 0,r={unversionedId:"advanced/addons/nvidiadrivertoolkit",id:"advanced/addons/nvidiadrivertoolkit",title:"Nvidia Driver Toolkit",description:"Available as of v1.3.0",source:"@site/docs/advanced/addons/nvidiadrivertoolkit.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/nvidiadrivertoolkit",permalink:"/v1.4/advanced/addons/nvidiadrivertoolkit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/nvidiadrivertoolkit.md",tags:[],version:"current",lastUpdatedAt:1717662223,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Nvidia Driver Toolkit",title:"Nvidia Driver Toolkit"},sidebar:"api",previous:{title:"Managed DHCP",permalink:"/v1.4/advanced/addons/managed-dhcp"},next:{title:"Single-Node Clusters",permalink:"/v1.4/advanced/singlenodeclusters"}},l={},s=[],v={toc:s},p="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/advanced/nvidiadrivertoolkit"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.3.0")),(0,n.kt)("p",null,"nvidia-driver-toolkit is an add-on that allows you to deploy out-of-band NVIDIA GRID KVM drivers to your existing Harvester clusters."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The toolkit only includes the correct Harvester OS image, build utilities, and kernel headers that allow NVIDIA drivers to be compiled and loaded from the container. You must download the NVIDIA KVM drivers using a valid NVIDIA subscription. For guidance on identifying the correct driver for your NVIDIA GPU, see the ",(0,n.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-au/drivers/vgpu-software-driver/"},"NVIDIA documentation"),".")),(0,n.kt)("p",null,"The Harvester ISO does not include the nvidia-driver-toolkit container image. Because of its size, the image is pulled from Docker Hub by default. If you have an air-gapped environment, you can download and push the image to your private registry. The ",(0,n.kt)("strong",{parentName:"p"},"Image Repository")," and ",(0,n.kt)("strong",{parentName:"p"},"Image Tag")," fields on the ",(0,n.kt)("strong",{parentName:"p"},"nvidia-driver-toolkit")," screen provide information about the image that you must download."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(22433).Z,width:"2313",height:"509"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Each new Harvester version will be released with the correct nvidia-driver-toolkit image to ensure that all dependencies required to install the NVIDIA vGPU KVM drivers are available in the image.")),(0,n.kt)("p",null,"To enable the addon, users need to perform the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide the ",(0,n.kt)("inlineCode",{parentName:"li"},"Driver Location"),": which is an http location where nvidia vgpu kvm driver file is located (as shown in the example)"),(0,n.kt)("li",{parentName:"ul"},"update the ",(0,n.kt)("inlineCode",{parentName:"li"},"Image Repository")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Image Tag")," if needed")),(0,n.kt)("p",null,"Once the addon is enabled, a nvidia-driver-toolkit daemonset is deployed to the cluster."),(0,n.kt)("p",null,"On pod startup, the entrypoint script will download the nvidia driver from the speificied ",(0,n.kt)("inlineCode",{parentName:"p"},"Driver Location"),", install the driver and load the kernel drivers."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"PCIDevices")," addon can now leverage this addon to manage the lifecycle of the vGPU devices on nodes containing supported GPU ",(0,n.kt)("a",{parentName:"p",href:"/v1.4/advanced/vgpusupport"},"devices"),"."))}c.isMDXComponent=!0},22433:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/nvidia-driver-toolkit-0b8402112136eac0f408667ff01c3df7.png"}}]);