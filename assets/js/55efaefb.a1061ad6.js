"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[83414],{87406:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:6,sidebar_label:"Managed DHCP",title:"Managed DHCP"},i=void 0,l={unversionedId:"advanced/addons/managed-dhcp",id:"version-v1.3/advanced/addons/managed-dhcp",title:"Managed DHCP",description:"Available as of v1.3.0",source:"@site/versioned_docs/version-v1.3/advanced/addons/managed-dhcp.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/managed-dhcp",permalink:"/v1.3/advanced/addons/managed-dhcp",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/advanced/addons/managed-dhcp.md",tags:[],version:"v1.3",lastUpdatedAt:1718608981,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Managed DHCP",title:"Managed DHCP"},sidebar:"api",previous:{title:"Rancher Manager",permalink:"/v1.3/advanced/addons/rancher-vcluster"},next:{title:"Nvidia Driver Toolkit",permalink:"/v1.3/advanced/addons/nvidiadrivertoolkit"}},s={},d=[{value:"Install and Enable the vm-dhcp-controller Add-On",id:"install-and-enable-the-vm-dhcp-controller-add-on",level:2},{value:"Usage",id:"usage",level:2},{value:"vm-dhcp-controller Pods and CRDs",id:"vm-dhcp-controller-pods-and-crds",level:2},{value:"IPPool CRD",id:"ippool-crd",level:3},{value:"VirtualMachineNetworkConfig CRD",id:"virtualmachinenetworkconfig-crd",level:3}],c={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/advanced/managed-dhcp"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.3.0")),(0,o.kt)("p",null,"Beginning with v1.3.0, you can configure IP pool information and serve IP addresses to VMs running on Harvester clusters using the embedded Managed DHCP feature. This feature, which is an alternative to the standalone DHCP server, leverages the vm-dhcp-controller add-on to simplify guest cluster deployment."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Harvester uses the planned infrastructure network so you must ensure that network connectivity is available and plan the IP pools in advance.")),(0,o.kt)("h2",{id:"install-and-enable-the-vm-dhcp-controller-add-on"},"Install and Enable the vm-dhcp-controller Add-On"),(0,o.kt)("p",null,"The vm-dhcp-controller add-on is not packed into the Harvester ISO, but you can download it from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/experimental-addons"},"experimental-addons repository"),". You can install the add-on by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/harvester/experimental-addons/main/harvester-vm-dhcp-controller/harvester-vm-dhcp-controller.yaml\n")),(0,o.kt)("p",null,"After installation, enable the add-on on the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," screen of the Harvester UI or using the command-line tool kubectl."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(65637).Z,width:"1823",height:"782"})),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," screen of the Harvester UI, ",(0,o.kt)("a",{parentName:"p",href:"/v1.3/networking/harvester-network#create-a-vm-network"},"create a VM Network"),".  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(47999).Z,width:"2980",height:"1114"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an IPPool object using the command-line tool kubectl."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<EOF | kubectl apply -f -\napiVersion: network.harvesterhci.io/v1alpha1\nkind: IPPool\nmetadata:\n  name: net-48\n  namespace: default\nspec:\n  ipv4Config:\n    serverIP: 192.168.48.77\n    cidr: 192.168.48.0/24\n    pool:\n      start: 192.168.48.81\n      end: 192.168.48.90\n      exclude:\n      - 192.168.48.81\n      - 192.168.48.90\n    router: 192.168.48.1\n    dns:\n    - 1.1.1.1\n    leaseTime: 300\n  networkName: default/net-48\nEOF\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/v1.3/vm/index#how-to-create-a-vm"},"Create a VM")," that is connected to the VM Network you previously created."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(61687).Z,width:"2980",height:"1708"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait for the corresponding VirtualMachineNetworkConfig object to be created and for the MAC address of the VM's network interface to be applied to the object.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},".status")," field of the IPPool and VirtualMachineNetworkConfig objects, and verify that the IP address is allocated and assigned to the MAC address."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get ippools.network net-48 -o yaml                      \napiVersion: network.harvesterhci.io/v1alpha1\nkind: IPPool\nmetadata:\n  creationTimestamp: "2024-02-15T13:17:21Z"\n  finalizers:\n  - wrangler.cattle.io/vm-dhcp-ippool-controller\n  generation: 1\n  name: net-48\n  namespace: default\n  resourceVersion: "826813"\n  uid: 5efd44b7-3796-4f02-947e-3949cb4c8e3d\nspec:\n  ipv4Config:\n    cidr: 192.168.48.0/24\n    dns:\n    - 1.1.1.1\n    leaseTime: 300\n    pool:\n      end: 192.168.48.90\n      exclude:\n      - 192.168.48.81\n      - 192.168.48.90\n      start: 192.168.48.81\n    router: 192.168.48.1\n    serverIP: 192.168.48.77\n  networkName: default/net-48\nstatus:\n  agentPodRef:\n    name: default-net-48-agent\n    namespace: harvester-system\n  conditions:\n  - lastUpdateTime: "2024-02-15T13:17:21Z"\n    status: "True"\n    type: Registered\n  - lastUpdateTime: "2024-02-15T13:17:21Z"\n    status: "True"\n    type: CacheReady\n  - lastUpdateTime: "2024-02-15T13:17:30Z"\n    status: "True"\n    type: AgentReady\n  - lastUpdateTime: "2024-02-15T13:17:21Z"\n    status: "False"\n    type: Stopped\n  ipv4:\n    allocated:\n      192.168.48.81: EXCLUDED\n      192.168.48.84: ca:70:82:e6:84:6e\n      192.168.48.90: EXCLUDED\n    available: 7\n    used: 1\n  lastUpdate: "2024-02-15T13:48:20Z"\n')),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get virtualmachinenetworkconfigs.network test-vm -o yaml\napiVersion: network.harvesterhci.io/v1alpha1\nkind: VirtualMachineNetworkConfig\nmetadata:\n  creationTimestamp: "2024-02-15T13:48:02Z"\n  finalizers:\n  - wrangler.cattle.io/vm-dhcp-vmnetcfg-controller\n  generation: 2\n  labels:\n    harvesterhci.io/vmName: test-vm\n  name: test-vm\n  namespace: default\n  ownerReferences:\n  - apiVersion: kubevirt.io/v1\n    kind: VirtualMachine\n    name: test-vm\n    uid: a9f8ce12-fd6c-4bd2-b266-245d8e77dae3\n  resourceVersion: "826809"\n  uid: 556440c7-eeeb-4daf-9c98-60ab39688ba8\nspec:\n  networkConfig:\n  - macAddress: ca:70:82:e6:84:6e\n    networkName: default/net-48\n  vmName: test-vm\nstatus:\n  conditions:\n  - lastUpdateTime: "2024-02-15T13:48:20Z"\n    status: "True"\n    type: Allocated\n  - lastUpdateTime: "2024-02-15T13:48:02Z"\n    status: "False"\n    type: Disabled\n  networkConfig:\n  - allocatedIPAddress: 192.168.48.84\n    macAddress: ca:70:82:e6:84:6e\n    networkName: default/net-48\n    state: Allocated\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check the ",(0,o.kt)("a",{parentName:"p",href:"/v1.3/vm/access-to-the-vm#access-with-the-harvester-ui"},"VM's serial console")," and verify that the IP address is correctly configured on the network interface (via DHCP)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:a(82183).Z,width:"1584",height:"878"})))),(0,o.kt)("h2",{id:"vm-dhcp-controller-pods-and-crds"},"vm-dhcp-controller Pods and CRDs"),(0,o.kt)("p",null,"When the vm-dhcp-controller add-on is enabled, the following types of pods run:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Controller: Reconciles CRD objects to determine allocation and mapping between IP and MAC addresses. The results are persisted in the IPPool objects."),(0,o.kt)("li",{parentName:"ul"},"Webhook: Validates and mutates CRD objects when receiving requests (creation, updating, and deletion)"),(0,o.kt)("li",{parentName:"ul"},"Agent: Serves DHCP requests and ensures that the internal DHCP lease store is up to date. This is accomplished by syncing the specific IPPool object that the agent is associated with. Agents are spawned on-demand whenever you create new IPPool objects.")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/vm-dhcp-controller"},"vm-dhcp-controller")," introduces the following new CRDs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IPPool (ippl)"),(0,o.kt)("li",{parentName:"ul"},"VirtualMachineNetworkConfig (vmnetcfg)")),(0,o.kt)("h3",{id:"ippool-crd"},"IPPool CRD"),(0,o.kt)("p",null,"The IPPool CRD allows you to define IP pool information. You must map each IPPool object to a specific NetworkAttachmentDefinition (NAD) object, which must be created beforehand."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'Multiple CRDs named "IPPool" are used in the Harvester ecosystem, including a similarly-named CRD in the ',(0,o.kt)("inlineCode",{parentName:"p"},"loadbalancer.harvesterhci.io")," API group. To avoid issues, ensure that you are working with the ",(0,o.kt)("strong",{parentName:"p"},"IPPool CRD in the ",(0,o.kt)("inlineCode",{parentName:"strong"},"network.harvesterhci.io")," API group"),". For more information about IPPool CRD operations in relation to load balancers, see ",(0,o.kt)("a",{parentName:"p",href:"/v1.3/networking/ippool"},"IP Pool"),".")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: network.harvesterhci.io/v1alpha1\nkind: IPPool\nmetadata:\n  name: example\n  namespace: default\nspec:\n  ipv4Config:\n    serverIP: 192.168.100.2 # The DHCP server's IP address\n    cidr: 192.168.100.0/24 # The subnet information, must be in the CIDR form\n    pool:\n      start: 192.168.100.101\n      end: 192.168.100.200\n      exclude:\n      - 192.168.100.151\n      - 192.168.100.187\n    router: 192.168.100.1 # The default gateway, if any\n    dns:\n    - 1.1.1.1\n    domainName: example.com\n    domainSearch:\n    - example.com\n    ntp:\n    - pool.ntp.org\n    leaseTime: 300\n  networkName: default/example # The namespaced name of the NAD object\n")),(0,o.kt)("p",null,"After the IPPool object is created, the controller reconciliation process initializes the IP allocation module and spawns the agent pod for the network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get ippools.network example\nNAME      NETWORK           AVAILABLE   USED   REGISTERED   CACHEREADY   AGENTREADY\nexample   default/example   98          0      True         True         True\n")),(0,o.kt)("h3",{id:"virtualmachinenetworkconfig-crd"},"VirtualMachineNetworkConfig CRD"),(0,o.kt)("p",null,"The VirtualMachineNetworkConfig CRD resembles a ",(0,o.kt)("strong",{parentName:"p"},"request for IP address issuance")," and is associated with NetworkAttachmentDefinition (NAD) objects."),(0,o.kt)("p",null,"A sample VirtualMachineNetworkConfig object looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: network.harvesterhci.io/v1alpha1\nkind: VirtualMachineNetworkConfig\nmetadata:\n  name: test-vm\n  namespace: default\nspec:\n  networkConfig:\n  - macAddress: 22:37:37:82:93:7d\n    networkName: default/example\n  vmName: test-vm\n")),(0,o.kt)("p",null,"After the VirtualMachineNetworkConfig object is created, the controller attempts to retrieve a list of unused IP addresses from the IP allocation module for each recorded MAC address. The IP-MAC mapping is then updated in the VirtualMachineNetworkConfig object and the corresponding IPPool objects."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Manual creation of VirtualMachineNetworkConfig objects for VMs is unnecessary in most cases because vm-dhcp-controller handles that task during the VirtualMachine reconciliation process. Automatically-created VirtualMachineNetworkConfig objects are deleted when VirtualMachine objects are removed.")))}m.isMDXComponent=!0},61687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vm-bf66c9c443824e3939699dd4396c0e68.png"},65637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enable-addon-15e8398f6027a8250b21cbb3c3799a6c.png"},82183:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-console-749fef8faa9d75b7a12a97b58d9703fc.png"},47999:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-network-e73a2cf62669d5c4fb4ed7debd606730.png"}}]);