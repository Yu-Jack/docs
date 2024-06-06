"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[61945],{96397:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={id:"index",sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Create a VM"],description:"Create one or more virtual machines from the Virtual Machines page."},r=void 0,s={unversionedId:"vm/index",id:"version-v1.3/vm/index",title:"Create a Virtual Machine",description:"Create one or more virtual machines from the Virtual Machines page.",source:"@site/versioned_docs/version-v1.3/vm/create-vm.md",sourceDirName:"vm",slug:"/vm/index",permalink:"/v1.3/vm/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/vm/create-vm.md",tags:[],version:"v1.3",lastUpdatedAt:1717662223,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Create a Virtual Machine",title:"Create a Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Virtual Machine","virtual machine","Create a VM"],description:"Create one or more virtual machines from the Virtual Machines page."},sidebar:"api",previous:{title:"Host Management",permalink:"/v1.3/host/"},next:{title:"Create a Windows Virtual Machine",permalink:"/v1.3/vm/create-windows-vm"}},l={},d=[{value:"How to Create a VM",id:"how-to-create-a-vm",level:2},{value:"Volumes",id:"volumes",level:2},{value:"Adding a container disk",id:"adding-a-container-disk",level:3},{value:"Networks",id:"networks",level:2},{value:"Management Network",id:"management-network",level:3},{value:"Secondary Network",id:"secondary-network",level:3},{value:"Node Scheduling",id:"node-scheduling",level:2},{value:"VM Scheduling",id:"vm-scheduling",level:2},{value:"Advanced Options",id:"advanced-options",level:2},{value:"Run Strategy",id:"run-strategy",level:3},{value:"Cloud Configuration",id:"cloud-configuration",level:3},{value:"Cloud-init",id:"cloud-init",level:4},{value:"Installing the QEMU guest agent",id:"installing-the-qemu-guest-agent",level:4},{value:"TPM Device",id:"tpm-device",level:3},{value:"One-time Boot For ISO Installation",id:"one-time-boot-for-iso-installation",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/create-vm"})),(0,i.kt)("h2",{id:"how-to-create-a-vm"},"How to Create a VM"),(0,i.kt)("p",null,"You can create one or more virtual machines from the ",(0,i.kt)("strong",{parentName:"p"},"Virtual Machines")," page."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"/v1.3/vm/create-windows-vm"},"this page")," for creating Windows virtual machines.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Choose the option to create either one or multiple VM instances."),(0,i.kt)("li",{parentName:"ol"},"Select the namespace of your VMs, only the ",(0,i.kt)("inlineCode",{parentName:"li"},"harvester-public")," namespace is visible to all users."),(0,i.kt)("li",{parentName:"ol"},"The VM Name is a required field."),(0,i.kt)("li",{parentName:"ol"},"(Optional) VM template is optional, you can choose ",(0,i.kt)("inlineCode",{parentName:"li"},"iso-image"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"raw-image")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"windows-iso-image")," template to speed up your VM instance creation."),(0,i.kt)("li",{parentName:"ol"},"Configure the virtual machine's CPU and memory (see ",(0,i.kt)("a",{parentName:"li",href:"/v1.3/advanced/index#overcommit-config"},"overcommit settings")," if you want to over-provision)."),(0,i.kt)("li",{parentName:"ol"},"Select SSH keys or upload new keys."),(0,i.kt)("li",{parentName:"ol"},"Select a custom VM image on the ",(0,i.kt)("strong",{parentName:"li"},"Volumes")," tab. The default disk will be the root disk. You can add more disks to the VM."),(0,i.kt)("li",{parentName:"ol"},"To configure networks, go to the ",(0,i.kt)("strong",{parentName:"li"},"Networks")," tab. ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"Management Network")," is added by default, you can remove it if the VLAN network is configured."),(0,i.kt)("li",{parentName:"ol"},"You can also add additional networks to the VMs using VLAN networks. You may configure the VLAN networks on ",(0,i.kt)("strong",{parentName:"li"},"Advanced > Networks")," first."))),(0,i.kt)("li",{parentName:"ol"},"(Optional) Set node affinity rules on the ",(0,i.kt)("strong",{parentName:"li"},"Node Scheduling")," tab."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Set workload affinity rules on the ",(0,i.kt)("strong",{parentName:"li"},"VM Scheduling")," tab."),(0,i.kt)("li",{parentName:"ol"},"Advanced options such as run strategy, os type and cloud-init data are optional. You may configure these in the ",(0,i.kt)("strong",{parentName:"li"},"Advanced Options")," section when applicable.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-vm",src:a(95853).Z,width:"5120",height:"1740"})),(0,i.kt)("h2",{id:"volumes"},"Volumes"),(0,i.kt)("p",null,"You can add one or more additional volumes via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Volumes")," tab, by default the first disk will be the root disk, you can change the boot order by dragging and dropping volumes, or using the arrow buttons."),(0,i.kt)("p",null,"A disk can be made accessible via the following types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"disk"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This type will expose the volume as an ordinary disk to the VM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"cd-rom"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This type will expose the volume as a cd-rom drive to the VM. It is read-only by default.")))),(0,i.kt)("p",null,"A volume's ",(0,i.kt)("a",{parentName:"p",href:"/v1.3/advanced/storageclass"},"StorageClass")," can be specified when adding a new empty volume; for other volumes (such as VM images), the ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," is defined during image creation."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-vm",src:a(68161).Z,width:"2560",height:"1297"})),(0,i.kt)("h3",{id:"adding-a-container-disk"},"Adding a container disk"),(0,i.kt)("p",null,"A container disk is an ephemeral storage volume that can be assigned to any number of VMs and provides the ability to store and distribute VM disks in the container image registry. A container disk is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An ideal tool if you want to replicate a large number of VM workloads or inject machine drivers that do not require persistent data. Ephemeral volumes are designed for VMs that need more storage but don't care whether that data is stored persistently across VM restarts or only expect some read-only input data to be present in files, like configuration data or secret keys."),(0,i.kt)("li",{parentName:"ul"},"Not a good solution for any workload that requires persistent root disks across VM restarts.")),(0,i.kt)("p",null,"A container disk is added when creating a VM by providing a Docker image. When creating a VM, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Volumes")," tab."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Add Container"),".\n",(0,i.kt)("img",{alt:"add-container-volume",src:a(60923).Z,width:"1066",height:"690"})),(0,i.kt)("li",{parentName:"ol"},"Enter a ",(0,i.kt)("strong",{parentName:"li"},"Name")," for the container disk."),(0,i.kt)("li",{parentName:"ol"},"Choose a disk ",(0,i.kt)("strong",{parentName:"li"},"Type"),"."),(0,i.kt)("li",{parentName:"ol"},"Add a ",(0,i.kt)("strong",{parentName:"li"},"Docker Image"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A disk image, with the format qcow2 or raw, must be placed into the ",(0,i.kt)("inlineCode",{parentName:"li"},"/disk")," directory."),(0,i.kt)("li",{parentName:"ul"},"Raw and qcow2 formats are supported, but qcow2 is recommended in order to reduce the container image's size. If you use an unsupported image format, the VM will get stuck in a ",(0,i.kt)("inlineCode",{parentName:"li"},"Running")," state."),(0,i.kt)("li",{parentName:"ul"},"A container disk also allows you to store disk images in the ",(0,i.kt)("inlineCode",{parentName:"li"},"/disk")," directory. An example of creating such a container image can be found ",(0,i.kt)("a",{parentName:"li",href:"https://kubevirt.io/user-guide/virtual_machines/disks_and_volumes/#containerdisk-workflow-example"},"here"),". "))),(0,i.kt)("li",{parentName:"ol"},"Choose a ",(0,i.kt)("strong",{parentName:"li"},"Bus")," type.",(0,i.kt)("br",{parentName:"li"}),(0,i.kt)("img",{alt:"add-container-volume",src:a(73660).Z,width:"775",height:"340"}))),(0,i.kt)("h2",{id:"networks"},"Networks"),(0,i.kt)("p",null,"You can choose to add both the ",(0,i.kt)("inlineCode",{parentName:"p"},"management network")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"VLAN network")," to your VM instances via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Networks")," tab, the ",(0,i.kt)("inlineCode",{parentName:"p"},"management network")," is optional if you have the VLAN network configured."),(0,i.kt)("p",null,"Network interfaces are configured through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," field. They describe the properties of the virtual interfaces seen inside the guest OS:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"bridge"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Connect using a Linux bridge")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"masquerade"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Connect using iptables rules to NAT the traffic")))),(0,i.kt)("h3",{id:"management-network"},"Management Network"),(0,i.kt)("p",null,"A management network represents the default VM eth0 interface configured by the cluster network solution that is present in each VM."),(0,i.kt)("p",null,"By default, VMs are accessible through the management network within the cluster nodes."),(0,i.kt)("h3",{id:"secondary-network"},"Secondary Network"),(0,i.kt)("p",null,"It is also possible to connect VMs using additional networks with Harvester's built-in ",(0,i.kt)("a",{parentName:"p",href:"/v1.3/networking/harvester-network"},"VLAN networks"),"."),(0,i.kt)("p",null,"In bridge VLAN, virtual machines are connected to the host network through a linux ",(0,i.kt)("inlineCode",{parentName:"p"},"bridge"),". The network IPv4 address is delegated to the virtual machine via DHCPv4. The virtual machine should be configured to use DHCP to acquire IPv4 addresses."),(0,i.kt)("h2",{id:"node-scheduling"},"Node Scheduling"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Node Scheduling")," allows you to constrain which nodes your VMs can be scheduled on based on node labels."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity"},"Kubernetes Node Affinity Documentation")," for more details."),(0,i.kt)("h2",{id:"vm-scheduling"},"VM Scheduling"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"VM Scheduling")," allows you to constrain which nodes your VMs can be scheduled on based on the labels of workloads (VMs and Pods) already running on these nodes, instead of the node labels."),(0,i.kt)("p",null,"For instance, you can combine ",(0,i.kt)("inlineCode",{parentName:"p"},"Required")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Affinity")," to instruct the scheduler to place VMs from two services in the same zone, enhancing communication efficiency. Likewise, the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"Preferred")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"Anti-Affinity")," can help distribute VMs of a particular service across multiple zones for increased availability."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#inter-pod-affinity-and-anti-affinity"},"Kubernetes Pod Affinity and Anti-Affinity Documentation")," for more details."),(0,i.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("h3",{id:"run-strategy"},"Run Strategy"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.0.2")),(0,i.kt)("p",null,"Prior to v1.0.2, Harvester used the ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," (a boolean) field to determine if the VM instance should be running. However, a simple boolean value is not always sufficient to fully describe the user's desired behavior. For example, in some cases the user wants to be able to shut down the instance from inside the virtual machine. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"running")," field is used, the VM will be restarted immediately."),(0,i.kt)("p",null,"In order to meet the scenario requirements of more users, the ",(0,i.kt)("inlineCode",{parentName:"p"},"RunStrategy")," field is introduced. This is mutually exclusive with ",(0,i.kt)("inlineCode",{parentName:"p"},"Running")," because their conditions overlap somewhat. There are currently four ",(0,i.kt)("inlineCode",{parentName:"p"},"RunStrategies")," defined:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Always: The VM instance will always exist. If VM instance crashes, a new one will be spawned. This is the same behavior as ",(0,i.kt)("inlineCode",{parentName:"p"},"Running: true"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RerunOnFailure (default): If the previous instance failed in an error state, a VM instance will be respawned. If the guest is successfully stopped (e.g. shut down from inside the guest), it will not be recreated.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Manual: The presence or absence of a VM instance is controlled only by the ",(0,i.kt)("inlineCode",{parentName:"p"},"start/stop/restart")," VirtualMachine actions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stop: There will be no VM instance. If the guest is already running, it will be stopped. This is the same behavior as ",(0,i.kt)("inlineCode",{parentName:"p"},"Running: false"),"."))),(0,i.kt)("h3",{id:"cloud-configuration"},"Cloud Configuration"),(0,i.kt)("p",null,"Harvester supports the ability to assign a startup script to a virtual machine instance which is executed automatically when the VM initializes."),(0,i.kt)("p",null,"These scripts are commonly used to automate injection of users and SSH keys into VMs in order to provide remote access to the machine. For example, a startup script can be used to inject credentials into a VM that allows an Ansible job running on a remote host to access and provision the VM."),(0,i.kt)("h4",{id:"cloud-init"},"Cloud-init"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," is a widely adopted project and the industry standard multi-distribution method for cross-platform cloud instance initialization. It is supported across all major cloud image provider like SUSE, Redhat, Ubuntu and etc., cloud-init has established itself as the defacto method of providing startup scripts to VMs."),(0,i.kt)("p",null,"Harvester supports injecting your custom cloud-init startup scripts into a VM instance through the use of an ephemeral disk. VMs with the cloud-init package installed will detect the ephemeral disk and execute custom user-data and network-data scripts at boot."),(0,i.kt)("p",null,"Example of password configuration for the default user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"#cloud-config\npassword: password\nchpasswd: { expire: False }\nssh_pwauth: True\n")),(0,i.kt)("p",null,"Example of network-data configuration using DHCP:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},"network:\n  version: 1\n  config:\n    - type: physical\n      name: eth0\n      subnets:\n        - type: dhcp\n    - type: physical\n      name: eth1\n      subnets:\n        - type: dhcp\n")),(0,i.kt)("p",null,"You can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced > Cloud Config Templates")," feature to create a pre-defined cloud-init configuration template for the VM."),(0,i.kt)("h4",{id:"installing-the-qemu-guest-agent"},"Installing the QEMU guest agent"),(0,i.kt)("p",null,"The QEMU guest agent is a daemon that runs on the virtual machine instance and passes information to the host about the VM, users, file systems, and secondary networks."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Install guest agent")," checkbox is enabled by default when a new VM is created."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(14943).Z,width:"2554",height:"1267"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If your OS is openSUSE and the version is less than 15.3, please replace ",(0,i.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent.service")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"qemu-ga.service"),".")),(0,i.kt)("h3",{id:"tpm-device"},"TPM Device"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Trusted_Platform_Module"},"Trusted Platform Module (TPM)")," is a cryptoprocessor that secures hardware using cryptographic keys."),(0,i.kt)("p",null,"According to ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/whats-new/windows-11-requirements"},"Windows 11 Requirements"),", the TPM 2.0 device is a hard requirement of Windows 11."),(0,i.kt)("p",null,"In the Harvester UI, you can add an emulated TPM 2.0 device to a VM by checking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Enable TPM")," box in the ",(0,i.kt)("strong",{parentName:"p"},"Advanced Options")," tab."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, only non-persistent vTPMs are supported, and their state is erased after each VM shutdown. Therefore, ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview"},"Bitlocker")," should not be enabled.")),(0,i.kt)("h2",{id:"one-time-boot-for-iso-installation"},"One-time Boot For ISO Installation"),(0,i.kt)("p",null,"When creating a VM to boot from cd-rom, you can use the ",(0,i.kt)("strong",{parentName:"p"},"bootOrder")," option so that the OS can boot from cd-rom during image installation, and boot from the disk when the installation is complete without unmounting the cd-rom."),(0,i.kt)("p",null,"The following example describes how to install an ISO image using ",(0,i.kt)("a",{parentName:"p",href:"https://get.opensuse.org/leap/15.4/"},"openSUSE Leap 15.4"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Images")," in the left sidebar and download the openSUSE Leap 15.4 ISO image."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Virtual Machines")," in the left sidebar, then create a VM. You need to fill up those VM basic configurations."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Volumes")," tab, In the ",(0,i.kt)("strong",{parentName:"li"},"Image")," field, select the image downloaded in step 1 and ensure ",(0,i.kt)("strong",{parentName:"li"},"Type")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"cd-rom")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add Volume")," and select an existing ",(0,i.kt)("strong",{parentName:"li"},"StorageClass"),"."),(0,i.kt)("li",{parentName:"ol"},"Drag ",(0,i.kt)("strong",{parentName:"li"},"Volume")," to the top of ",(0,i.kt)("strong",{parentName:"li"},"Image Volume")," as follows. In this way, the ",(0,i.kt)("strong",{parentName:"li"},"bootOrder")," of ",(0,i.kt)("strong",{parentName:"li"},"Volume")," will become ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"one-time-boot-create-vm-bootorder",src:a(51259).Z,width:"4136",height:"1570"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"Open the VM web-vnc you just created and follow the instructions given by the installer."),(0,i.kt)("li",{parentName:"ol"},"After the installation is complete, reboot the VM  as instructed by the operating system (you can remove the installation media after booting the system)."),(0,i.kt)("li",{parentName:"ol"},"After the VM reboots, it will automatically boot from the disk volume and start the operating system.")))}m.isMDXComponent=!0},60923:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-container-volume-1-bcb4b56bad7da809cbb75796b6d0bf1a.png"},73660:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-container-volume-2-a1a0a20e344b6ab16e7617f61ce6b141.png"},68161:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-volumes-e8e820f4a3e9af9ff1ab1bb36e475a21.png"},95853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-aa84ec354ffbf83f6466fea5b2967537.png"},51259:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/one-time-boot-create-vm-bootorder-0ca6a67fa98d6173d8cea99e6580f843.png"},14943:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/qga-90f05b81749ae9d4778770e240da5c55.png"}}]);