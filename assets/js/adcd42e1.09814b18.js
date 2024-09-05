"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[98985],{78430:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>o});i(67294);var a=i(3905);const n={sidebar_position:2,sidebar_label:"PCI Devices",title:"PCI Devices"},s=void 0,d={unversionedId:"advanced/addons/pcidevices",id:"version-v1.2/advanced/addons/pcidevices",title:"PCI Devices",description:"Available as of v1.1.0",source:"@site/versioned_docs/version-v1.2/advanced/addons/pcidevices.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/pcidevices",permalink:"/v1.2/advanced/addons/pcidevices",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/advanced/addons/pcidevices.md",tags:[],version:"v1.2",lastUpdatedAt:1725352560,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"PCI Devices",title:"PCI Devices"},sidebar:"api",previous:{title:"Addons",permalink:"/v1.2/advanced/addons"},next:{title:"VM Import",permalink:"/v1.2/advanced/addons/vmimport"}},c={},o=[{value:"Enabling Passthrough on a PCI Device",id:"enabling-passthrough-on-a-pci-device",level:2},{value:"Attaching PCI Devices to a VM",id:"attaching-pci-devices-to-a-vm",level:2},{value:"Using a passed-through PCI Device inside the VM",id:"using-a-passed-through-pci-device-inside-the-vm",level:2},{value:"Installing drivers for your PCI device inside the VM",id:"installing-drivers-for-your-pci-device-inside-the-vm",level:2},{value:"SRIOV Network Devices",id:"sriov-network-devices",level:2}],r={toc:o},l="wrapper";function p({components:e,...t}){return(0,a.kt)(l,{...r,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/pcidevices"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDevice")," in Harvester represents a host device with a PCI address.\nThe devices can be passed through the hypervisor to a VM by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDeviceClaim")," resource,\nor by using the UI to enable passthrough. Passing a device through the hypervisor means that\nthe VM can directly access the device, and effectively owns the device. A VM can even install\nits own drivers for that device."),(0,a.kt)("p",null,"This is accomplished by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon."),(0,a.kt)("p",null,"To use the PCI devices feature, users need to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon first."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(48491).Z,width:"1039",height:"577"})),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon is deployed successfully, it can take a few minutes for it to scan and the PCIDevice CRDs to become available.\n",(0,a.kt)("img",{src:i(22333).Z,width:"1854",height:"650"})),(0,a.kt)("h2",{id:"enabling-passthrough-on-a-pci-device"},"Enabling Passthrough on a PCI Device"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced -> PCI Devices")," page:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(64391).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Search for your device by vendor name (e.g. NVIDIA, Intel, etc.) or device name."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(20212).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the devices you want to enable for passthrough:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(30285).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then click ",(0,a.kt)("strong",{parentName:"p"},"Enable Passthrough")," and read the warning message. If you still want to enable these devices, click ",(0,a.kt)("strong",{parentName:"p"},"Enable")," and wait for all devices to be ",(0,a.kt)("inlineCode",{parentName:"p"},"Enabled"),"."),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"host-owned")," PCI devices (e.g., management and VLAN NICs). Incorrect device allocation may cause damage to your cluster, including node failure.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(69905).Z,width:"1440",height:"810"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(77171).Z,width:"1440",height:"810"})))),(0,a.kt)("h2",{id:"attaching-pci-devices-to-a-vm"},"Attaching PCI Devices to a VM"),(0,a.kt)("p",null,"After enabling these PCI devices, you can navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Virtual Machines")," page and select ",(0,a.kt)("strong",{parentName:"p"},"Edit Config")," to pass these devices."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(98700).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"PCI Devices")," and use the ",(0,a.kt)("strong",{parentName:"p"},"Available PCI Devices")," drop-down. Select the devices you want to attach from the list displayed and then click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(87149).Z,width:"1440",height:"810"})),(0,a.kt)("h2",{id:"using-a-passed-through-pci-device-inside-the-vm"},"Using a passed-through PCI Device inside the VM"),(0,a.kt)("p",null,"Boot the VM up, and run ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci")," inside the VM, the attached PCI devices will show up, although the PCI address in the VM won't necessarily match the PCI address in the host. "),(0,a.kt)("h2",{id:"installing-drivers-for-your-pci-device-inside-the-vm"},"Installing drivers for your PCI device inside the VM"),(0,a.kt)("p",null,"This is just like installing drivers in the host. The PCI passthrough feature will bind the host device to the ",(0,a.kt)("inlineCode",{parentName:"p"},"vfio-pci")," driver, which gives VMs the ability to use their own drivers. ",(0,a.kt)("a",{parentName:"p",href:"https://tobilehman.com/posts/suse-harvester-pci/#toc"},"Here is a screenshot")," of NVIDIA drivers being installed in a VM. It includes a CUDA example that proves that the device drivers work."),(0,a.kt)("h2",{id:"sriov-network-devices"},"SRIOV Network Devices"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6922).Z,width:"302",height:"318"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon can now scan network interfaces on the underlying hosts and check if they support SRIOV Virtual Functions (VFs). If a valid device is found, ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will generate a new ",(0,a.kt)("inlineCode",{parentName:"p"},"SRIOVNetworkDevice")," object."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(88132).Z,width:"2313",height:"357"})),(0,a.kt)("p",null,"To create VFs on a SriovNetworkDevice, you can click ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > Enable")," and then define the ",(0,a.kt)("strong",{parentName:"p"},"Number of Virtual Functions"),".\n",(0,a.kt)("img",{src:i(43926).Z,width:"614",height:"309"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(93873).Z,width:"668",height:"289"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will define the VFs on the network interface and report the new PCI device status for the newly created VFs."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(10577).Z,width:"2319",height:"152"})),(0,a.kt)("p",null,"On the next re-scan, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will create the PCIDevices for VFs. This can take up to 1 minute."),(0,a.kt)("p",null,"You can now navigate to the ",(0,a.kt)("strong",{parentName:"p"},"PCI Devices")," page to view the new devices."),(0,a.kt)("p",null,"We have also introduced a new filter to help you filter PCI devices by the underlying network interface."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(54017).Z,width:"2326",height:"228"})),(0,a.kt)("p",null,"The newly created PCI device can be passed through to virtual machines like any other PCI device.\n",(0,a.kt)("img",{src:i(85395).Z,width:"2311",height:"442"})))}p.isMDXComponent=!0},22333:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/PcideviceEnabled-0360b54035ff09b417de7c295741b17d.png"},43926:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SriovNetworkDeviceEnable-da813b9d6089e04a7db22e8e854f01f0.png"},54017:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SriovNetworkDevicesFilter-64ec6f52634a226ff04c54d8d4dccd2e.png"},85395:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SriovNetworkDevicesFilterResult-59c6772dc178318eb91ab186f558ecd5.png"},6922:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SriovNetworkDevicesLink-fe6f72a776c8716d3500963f4def615c.png"},88132:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SriovNetworkDevicesList-07aa1c1929ed631a33a44fda291a5d63.png"},10577:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SriovNetworkDevicesVFStatus-056a48920d22af72bff4217c434bf4e6.png"},93873:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/SriovNetworkVFDefinition-df67600dbe4ac7119ff1099b631c130c.png"},64391:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/advanced-pcidevices-index-10becdf0d781a4e708413d422356740e.png"},77171:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/enable-pcidevices-done-6abc17f90036b1314c0085cd7ebe4808.png"},69905:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/enable-pcidevices-inprogress-c687c20689e9d90b585c892b4ab731c2.png"},20212:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/search-pcidevices-e72c0e5794891383d5de58edea8f58b0.png"},30285:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/select-pcidevices-9f4f0947bfb5f60b38f542f98f08575b.png"},87149:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/vm-pcidevices-attach-8909167894055bfbd363b32fcad812e1.png"},98700:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/vm-pcidevices-edit-config-fce9da60aa378d6213ba7a8352acfc16.png"},48491:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);