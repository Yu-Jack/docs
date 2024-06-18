"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[84053],{36575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>s});n(67294);var a=n(3905);const o={id:"index",sidebar_position:1,sidebar_label:"Installation",title:"Installation"},i=void 0,r={unversionedId:"troubleshooting/index",id:"version-v1.3/troubleshooting/index",title:"Installation",description:"The following sections contain tips to troubleshoot or get assistance with failed installations.",source:"@site/versioned_docs/version-v1.3/troubleshooting/installation.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/index",permalink:"/v1.3/troubleshooting/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/troubleshooting/installation.md",tags:[],version:"v1.3",lastUpdatedAt:1718679810,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Installation",title:"Installation"},sidebar:"api",previous:{title:"Harvester Terraform Provider",permalink:"/v1.3/terraform/terraform-provider"},next:{title:"Harvester",permalink:"/v1.3/troubleshooting/harvester"}},l={},s=[{value:"Logging into the Harvester Installer (a live OS)",id:"logging-into-the-harvester-installer-a-live-os",level:2},{value:"Meeting hardware requirements",id:"meeting-hardware-requirements",level:2},{value:"Stuck in <code>Loading images. This may take a few minutes...</code>",id:"stuck-in-loading-images-this-may-take-a-few-minutes",level:2},{value:"Modifying cluster token on agent nodes",id:"modifying-cluster-token-on-agent-nodes",level:2},{value:"Collecting troubleshooting information",id:"collecting-troubleshooting-information",level:2}],d={toc:s},h="wrapper";function c({components:e,...t}){return(0,a.kt)(h,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/installation"})),(0,a.kt)("p",null,"The following sections contain tips to troubleshoot or get assistance with failed installations."),(0,a.kt)("h2",{id:"logging-into-the-harvester-installer-a-live-os"},"Logging into the Harvester Installer (a live OS)"),(0,a.kt)("p",null,"Users can press the key combination ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL + ALT + F2")," to switch to another TTY and log in with the following credentials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User: ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher"))),(0,a.kt)("h2",{id:"meeting-hardware-requirements"},"Meeting hardware requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check that your hardware meets the ",(0,a.kt)("a",{parentName:"li",href:"/v1.3/install/requirements#hardware-requirements"},"minimum requirements")," to complete installation.")),(0,a.kt)("h2",{id:"stuck-in-loading-images-this-may-take-a-few-minutes"},"Stuck in ",(0,a.kt)("inlineCode",{parentName:"h2"},"Loading images. This may take a few minutes...")),(0,a.kt)("p",null,'Because the system doesn\'t have a default route, your installer may become "stuck" in this state. You can check your route status by executing the following command:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ip route\ndefault via 10.10.0.10 dev mgmt-br proto dhcp        <-- Does a default route exist?\n10.10.0.0/24 dev mgmt-br proto kernel scope link src 10.10.0.15\n")),(0,a.kt)("p",null,"Check that your DHCP server offers a default route option. Attaching content from ",(0,a.kt)("inlineCode",{parentName:"p"},"/run/cos/target/rke2.log")," is helpful too."),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/install/pxe-boot-install#dhcp-server-configuration"},"DHCP Server Configuration"),"."),(0,a.kt)("h2",{id:"modifying-cluster-token-on-agent-nodes"},"Modifying cluster token on agent nodes"),(0,a.kt)("p",null,"When an agent node fails to join the cluster, it can be related to the cluster token not being identical to the server node token.\nIn order to confirm the issue, connect to your agent node (i.e. with ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/troubleshooting/os#how-to-log-in-to-a-harvester-node"},"SSH")," and check the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancherd")," service log with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo journalctl -b -u rancherd\n")),(0,a.kt)("p",null,"If the cluster token setup in the agent node is not matching the server node token, you will find several entries of the following message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'msg="Bootstrapping Rancher (v2.7.5/v1.25.9+rke2r1)"\nmsg="failed to bootstrap system, will retry: generating plan: response 502: 502  Bad Gateway getting cacerts: <html>\\r\\n<head><title>502 Bad Gateway</title></head>\\r\\n<body>\\r\\n<center><h1>502 Bad Gateway</h1></center>\\r\\n<hr><center>nginx</center>\\r\\n</body>\\r\\n</html>\\r\\n"\n')),(0,a.kt)("p",null,"Note that the Rancher version and IP address depend on your environment and might differ from the message above."),(0,a.kt)("p",null,"To fix the issue, you need to update the token value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancherd")," configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rancherd/config.yaml"),"."),(0,a.kt)("p",null,"For example, if the cluster token setup in the server node is ",(0,a.kt)("inlineCode",{parentName:"p"},"ThisIsTheCorrectOne"),", you will update the token value as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"token: 'ThisIsTheCorrectOne'\n")),(0,a.kt)("p",null,"To ensure the change is persistent across reboots, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," value of the OS configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Harvester Configuration\nstages:\n  ...\n  initramfs:\n  - commands:\n    - rm -f /etc/sysconfig/network/ifroute-mgmt-br\n    files:\n    - path: /etc/rancher/rancherd/config.yaml\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n        server: https://$cluster-vip:443\n        role: agent\n        token: "ThisIsTheCorrectOne"\n        kubernetesVersion: v1.25.9+rke2r1\n        rancherVersion: v2.7.5\n        rancherInstallerImage: rancher/system-agent-installer-rancher:v2.7.5\n        labels:\n         - harvesterhci.io/managed=true\n        extraConfig:\n          disable:\n          - rke2-snapshot-controller\n          - rke2-snapshot-controller-crd\n          - rke2-snapshot-validation-webhook\n      encoding: ""\n      ownerstring: ""\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"To see what is the current cluster token value, log in your server node (i.e. with SSH)\nand look in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rancherd/config.yaml"),". For example,\nyou can run the following command to only display the token's value:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo yq eval .token /etc/rancher/rancherd/config.yaml\n"))),(0,a.kt)("h2",{id:"collecting-troubleshooting-information"},"Collecting troubleshooting information"),(0,a.kt)("p",null,"Please include the following information in a bug report when reporting a failed installation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A failed installation screenshot.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"System information and logs."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Available as of v1.0.2"),(0,a.kt)("p",{parentName:"li"},"Please follow the guide in ",(0,a.kt)("a",{parentName:"p",href:"#logging-into-the-harvester-installer-a-live-os"},"Logging into the Harvester Installer (a live OS)")," to log in. And run the command to generate a tarball that contains troubleshooting information:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"supportconfig -k -c\n")),(0,a.kt)("p",{parentName:"li"},"The command output messages contain the generated tarball path. For example the path is ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/loq/scc_aaa_220520_1021 804d65d-c9ba-4c54-b12d-859631f892c5.txz")," in the following example:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(85703).Z,width:"1484",height:"754"})),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A failure PXE Boot installation automatically generates a tarball if the ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/install/harvester-configuration#installdebug"},(0,a.kt)("inlineCode",{parentName:"a"},"install.debug"))," field is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," in the Harvester configuration file.")))))))}c.isMDXComponent=!0},85703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installation-support-config-example-668f76f104e59f6ff74d2ae6dacf268b.png"}}]);