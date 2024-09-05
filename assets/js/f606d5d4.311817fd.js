"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[38503],{94685:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>r});i(67294);var s=i(3905);const a={sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},n=void 0,o={unversionedId:"vm/access-to-the-vm",id:"version-v1.1/vm/access-to-the-vm",title:"Access to the Virtual Machine",description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI.",source:"@site/versioned_docs/version-v1.1/vm/access-to-the-vm.md",sourceDirName:"vm",slug:"/vm/access-to-the-vm",permalink:"/v1.1/vm/access-to-the-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/access-to-the-vm.md",tags:[],version:"v1.1",lastUpdatedAt:1725352560,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Access to the Virtual Machine",title:"Access to the Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Access to the VM"],description:"Once the VM is up and running, it can be accessed using either VNC or the serial console from the Harvester UI."},sidebar:"api",previous:{title:"Edit a Virtual Machine",permalink:"/v1.1/vm/edit-vm"},next:{title:"VM Backup, Snapshot & Restore",permalink:"/v1.1/vm/backup-restore"}},c={},r=[{value:"Access with the Harvester UI",id:"access-with-the-harvester-ui",level:2},{value:"SSH Access",id:"ssh-access",level:2},{value:"Static SSH Key Injection via cloud-init",id:"static-ssh-key-injection-via-cloud-init",level:3},{value:"Example of SSH key cloud-init configuration:",id:"example-of-ssh-key-cloud-init-configuration",level:4},{value:"Dynamic SSH Key Injection via Qemu guest agent",id:"dynamic-ssh-key-injection-via-qemu-guest-agent",level:3},{value:"Access with the SSH Client",id:"access-with-the-ssh-client",level:3}],l={toc:r},h="wrapper";function d({components:e,...t}){return(0,s.kt)(h,{...l,...t,components:e,mdxType:"MDXLayout"},(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/access-to-the-vm"})),(0,s.kt)("p",null,"Once the VM is up and running, you can access it using either the Virtual Network Computing (VNC) client or the serial console from the Harvester UI."),(0,s.kt)("p",null,"Additionally, you can connect directly from your computer's SSH client."),(0,s.kt)("h2",{id:"access-with-the-harvester-ui"},"Access with the Harvester UI"),(0,s.kt)("p",null,"VMs can be accessed from the UI directly using either VNC or the serial console."),(0,s.kt)("p",null,"If the VGA display is not enabled on the VM, e.g., the ",(0,s.kt)("inlineCode",{parentName:"p"},"Ubuntu-Minimal-Cloud")," image, the VM can only be accessed with the serial console."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(64321).Z,width:"4250",height:"1594"})),(0,s.kt)("h2",{id:"ssh-access"},"SSH Access"),(0,s.kt)("p",null,"Harvester provides two ways to inject SSH public keys into virtual machines. Generally, these methods fall into two categories. ",(0,s.kt)("a",{parentName:"p",href:"#static-ssh-key-injection-via-cloud-init"},"Static key injection"),", which places keys in the cloud-init script when the virtual machine is first powered on; ",(0,s.kt)("a",{parentName:"p",href:"#dynamic-ssh-key-injection-via-qemu-guest-agent"},"dynamic injection"),", which allows keys or basic auth to be updated dynamically at runtime."),(0,s.kt)("h3",{id:"static-ssh-key-injection-via-cloud-init"},"Static SSH Key Injection via cloud-init"),(0,s.kt)("p",null,"You can provide ssh keys to your virtual machines during the creation time on the ",(0,s.kt)("inlineCode",{parentName:"p"},"Basics")," tab. Additionally, you can place the public ssh keys into your cloud-init script to allow it to take place."),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(80350).Z,width:"2207",height:"912"})),(0,s.kt)("h4",{id:"example-of-ssh-key-cloud-init-configuration"},"Example of SSH key cloud-init configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\nssh_authorized_keys:\n  - >-\n    ssh-rsa #replace with your public key\n")),(0,s.kt)("h3",{id:"dynamic-ssh-key-injection-via-qemu-guest-agent"},"Dynamic SSH Key Injection via Qemu guest agent"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v1.0.1")),(0,s.kt)("p",null,"Harvester supports dynamically injecting public ssh keys at run time through the use of the ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.qemu.org/Features/GuestAgent"},"qemu guest agent"),". This is achieved through the ",(0,s.kt)("inlineCode",{parentName:"p"},"qemuGuestAgent")," propagation method."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"This method requires the qemu guest agent to be installed within the guest VM."),(0,s.kt)("p",{parentName:"admonition"},"When using ",(0,s.kt)("inlineCode",{parentName:"p"},"qemuGuestAgent")," propagation, the ",(0,s.kt)("inlineCode",{parentName:"p"},"/home/$USER/.ssh/authorized_keys")," file will be owned by the guest agent. Changes to that file that are made outside of the qemu guest agent's control will get deleted.")),(0,s.kt)("p",null,"You can inject your access credentials via the Harvester dashboard as below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Select the VM and click ",(0,s.kt)("inlineCode",{parentName:"li"},"\u22ee")," button."),(0,s.kt)("li",{parentName:"ol"},"Click the ",(0,s.kt)("inlineCode",{parentName:"li"},"Edit Config")," button and go to the ",(0,s.kt)("inlineCode",{parentName:"li"},"Access Credentials")," tab."),(0,s.kt)("li",{parentName:"ol"},"Click to add either basic auth credentials or ssh keys, (e.g., add ",(0,s.kt)("inlineCode",{parentName:"li"},"opensuse")," as the user and select your ssh keys if your guest OS is OpenSUSE)."),(0,s.kt)("li",{parentName:"ol"},"Make sure your qemu guest agent is already installed and the VM should be restarted after the credentials are added.")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You need to enter the VM to edit password or remove SSH-Key after deleting the credentials from the UI.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:i(54745).Z,width:"4250",height:"1576"})),(0,s.kt)("h3",{id:"access-with-the-ssh-client"},"Access with the SSH Client"),(0,s.kt)("p",null,"Once the VM is up and running, you can enter the IP address of the VM in a terminal emulation client, such as PuTTY. You may also run the following command to access the VM directly from your computer's SSH client:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," ssh -i ~/.ssh/your-ssh-key user@<ip-address-or-hostname>\n")))}d.isMDXComponent=!0},64321:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/access-to-vm-f791c865d36729ac644da4e124878e5f.png"},54745:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/vm-add-access-credentails-cb00d2dcde86ab3864d42c300a19caf6.png"},80350:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/vm-ssh-keys-566e05b859f07771f5f7268b4ce0c05e.png"}}]);