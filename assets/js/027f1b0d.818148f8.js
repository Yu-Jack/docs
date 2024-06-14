"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[47653],{22194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const s={sidebar_position:6,sidebar_label:"Upgrade from v1.1.0/v1.1.1 to v1.1.2",title:"Upgrade from v1.1.0/v1.1.1 to v1.1.2"},l=void 0,i={unversionedId:"upgrade/v1-1-to-v1-1-2",id:"version-v1.3/upgrade/v1-1-to-v1-1-2",title:"Upgrade from v1.1.0/v1.1.1 to v1.1.2",description:"Please do not upgrade a running cluster to v1.1.2 if your machine has an Intel E810 NIC card. We saw some reports that the NIC card has a problem when added to a bonding device. Please check this issue for more info//github.com/harvester/harvester/issues/3860.",source:"@site/versioned_docs/version-v1.3/upgrade/v1-1-to-v1-1-2.md",sourceDirName:"upgrade",slug:"/upgrade/v1-1-to-v1-1-2",permalink:"/v1.3/upgrade/v1-1-to-v1-1-2",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/upgrade/v1-1-to-v1-1-2.md",tags:[],version:"v1.3",lastUpdatedAt:1718271160,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Upgrade from v1.1.0/v1.1.1 to v1.1.2",title:"Upgrade from v1.1.0/v1.1.1 to v1.1.2"},sidebar:"api",previous:{title:"Upgrade from v1.1.1/v1.1.2 to v1.1.3",permalink:"/v1.3/upgrade/v1-1-1-to-v1-1-3"},next:{title:"Troubleshooting",permalink:"/v1.3/upgrade/troubleshooting"}},o={},d=[{value:"General information",id:"general-information",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"1. An upgrade is stuck when pre-draining a node",id:"1-an-upgrade-is-stuck-when-pre-draining-a-node",level:3},{value:"2. An upgrade is stuck when pre-draining a node (case 2)",id:"2-an-upgrade-is-stuck-when-pre-draining-a-node-case-2",level:3},{value:"3. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline",id:"3-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline",level:3},{value:"4. After an upgrade, a fleet bundle&#39;s status is <code>ErrApplied(1) [Cluster fleet-local/local: another operation (install/upgrade/rollback) is in progress]</code>",id:"4-after-an-upgrade-a-fleet-bundles-status-is-errapplied1-cluster-fleet-locallocal-another-operation-installupgraderollback-is-in-progress",level:3},{value:"5. An upgrade stops because it can&#39;t retrieve the harvester-release.yaml file",id:"5-an-upgrade-stops-because-it-cant-retrieve-the-harvester-releaseyaml-file",level:3},{value:"6. An upgrade is stuck in the Pre-drained state",id:"6-an-upgrade-is-stuck-in-the-pre-drained-state",level:3}],p={toc:d},u="wrapper";function h(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.3/upgrade/v1-1-to-v1-1-2"})),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Please do not upgrade a running cluster to v1.1.2 if your machine has an ",(0,n.kt)("strong",{parentName:"p"},"Intel E810")," NIC card. We saw some reports that the NIC card has a problem when added to a bonding device. Please check this issue for more info: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3860"},"https://github.com/harvester/harvester/issues/3860"),".")),(0,n.kt)("h2",{id:"general-information"},"General information"),(0,n.kt)("p",null,"Once there is an upgradable version, the Harvester GUI Dashboard page will show an upgrade button. For more details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/upgrade/index#start-an-upgrade"},"start an upgrade"),"."),(0,n.kt)("p",null,"For the air-gap env upgrade, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/upgrade/index#prepare-an-air-gapped-upgrade"},"prepare an air-gapped upgrade"),"."),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-an-upgrade-is-stuck-when-pre-draining-a-node"},"1. An upgrade is stuck when pre-draining a node"),(0,n.kt)("p",null,'Starting from v1.1.0, Harvester will wait for all volumes to become healthy (when node count >= 3) before upgrading a node. Generally, you can check volumes\' health if an upgrade is stuck in the "pre-draining" state.'),(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},'"Access Embedded Longhorn"')," to see how to access the embedded Longhorn GUI."),(0,n.kt)("p",null,"You can also check the pre-drain job logs. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/upgrade/troubleshooting#phase-4-upgrade-nodes"},"Phase 4: Upgrade nodes")," in the troubleshooting guide."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-an-upgrade-is-stuck-when-pre-draining-a-node-case-2"},"2. An upgrade is stuck when pre-draining a node (case 2)"),(0,n.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(45476).Z,width:"1128",height:"470"})),(0,n.kt)("p",null,"And you can also observe that multiple nodes' status is ",(0,n.kt)("inlineCode",{parentName:"p"},"SchedulingDisabled"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get nodes\nNAME    STATUS                     ROLES                       AGE   VERSION\nnode1   Ready                      control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode2   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode3   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216"},"[BUG] Multiple nodes pre-drains in an upgrade")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"},"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3-an-upgrade-is-stuck-in-upgrading-the-first-node-job-was-active-longer-than-the-specified-deadline"},"3. An upgrade is stuck in upgrading the first node: Job was active longer than the specified deadline"),(0,n.kt)("p",null,"An upgrade fails, as shown in the screenshot below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4947).Z,width:"1140",height:"918"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894"},"[BUG] Upgrade stuck in upgrading first node: Job was active longer than specified deadline")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"},"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"4-after-an-upgrade-a-fleet-bundles-status-is-errapplied1-cluster-fleet-locallocal-another-operation-installupgraderollback-is-in-progress"},"4. After an upgrade, a fleet bundle's status is ",(0,n.kt)("inlineCode",{parentName:"h3"},"ErrApplied(1) [Cluster fleet-local/local: another operation (install/upgrade/rollback) is in progress]")),(0,n.kt)("p",null,"There is a chance fleet-managed bundle's status is ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrApplied(1) [Cluster fleet-local/local: another operation (install/upgrade/rollback) is in progress]")," after an upgrade. To check if this happened, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get bundles -A\n")),(0,n.kt)("p",null,"If you see the following output, it's possible that your cluster has hit the issue:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NAMESPACE     NAME                                          BUNDLEDEPLOYMENTS-READY   STATUS\nfleet-local   fleet-agent-local                             0/1                       ErrApplied(1) [Cluster fleet-local/local: another operation (install/upgrade/rollback) is in progress]\nfleet-local   local-managed-system-agent                    1/1\nfleet-local   mcc-harvester                                 1/1\nfleet-local   mcc-harvester-crd                             1/1\nfleet-local   mcc-local-managed-system-upgrade-controller   1/1\nfleet-local   mcc-rancher-logging                           1/1\nfleet-local   mcc-rancher-logging-crd                       1/1\nfleet-local   mcc-rancher-monitoring                        1/1\nfleet-local   mcc-rancher-monitoring-crd                    1/1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3616"},"[BUG] Harvester single node upgrade will get another operation (install/upgrade/rollback) is in progress error")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3616#issuecomment-1489892688"},"https://github.com/harvester/harvester/issues/3616#issuecomment-1489892688"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"5-an-upgrade-stops-because-it-cant-retrieve-the-harvester-releaseyaml-file"},"5. An upgrade stops because it can't retrieve the harvester-release.yaml file"),(0,n.kt)("p",null,"An upgrade is stopped with the ",(0,n.kt)("inlineCode",{parentName:"p"},'Get "http://upgrade-repo-hvst-upgrade-mldzx.harvester-system/harvester-iso/harvester-release.yaml": \ncontext deadline exceeded (Client.Timeout exceeded while awaiting headers)')," message:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(58855).Z,width:"1600",height:"801"})),(0,n.kt)("p",null,"We have fixed this issue in v1.1.2. But for v1.1.0 and v1.1.1 users, the workaround is to start over an upgrade. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.3/upgrade/troubleshooting#start-over-an-upgrade"},"Start over an upgrade"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3729"},"https://github.com/harvester/harvester/issues/3729")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v1.3/upgrade/troubleshooting#start-over-an-upgrade"},"Start over an upgrade"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"6-an-upgrade-is-stuck-in-the-pre-drained-state"},"6. An upgrade is stuck in the Pre-drained state"),(0,n.kt)("p",null,'You might see an upgrade is stuck in the "pre-drained" state:'),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(30150).Z,width:"1130",height:"530"})),(0,n.kt)("p",null,"This could be caused by a misconfigured PDB. To check if that's the case, perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Assume the stuck node is ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-node-1"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," pod names on the stuck node:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl get pods -n longhorn-system --field-selector spec.nodeName=harvester-node-1 | grep instance-manager\ninstance-manager-r-d4ed2788          1/1     Running   0              3d8h\n")),(0,n.kt)("p",{parentName:"li"},"The output above shows that the ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-r-d4ed2788")," pod is on the node. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check Rancher logs and verify that the ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," pod can't be drained:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'$ kubectl logs deployment/rancher -n cattle-system\n...\n2023-03-28T17:10:52.199575910Z 2023/03/28 17:10:52 [INFO] [planner] rkecluster fleet-local/local: waiting: draining etcd node(s) custom-4f8cb698b24a,custom-a0f714579def\n2023-03-28T17:10:55.034453029Z evicting pod longhorn-system/instance-manager-r-d4ed2788\n2023-03-28T17:10:55.080933607Z error when evicting pods/"instance-manager-r-d4ed2788" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the command to check if there is a PDB associated with the stuck node:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'$ kubectl get pdb -n longhorn-system -o yaml | yq \'.items[] | select(.spec.selector.matchLabels."longhorn.io/node"=="harvester-node-1") | .metadata.name\'\ninstance-manager-r-466e3c7f\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the owner of the instance manager to this PDB:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl get instancemanager instance-manager-r-466e3c7f -n longhorn-system -o yaml | yq -e '.spec.nodeID'\nharvester-node-2\n")),(0,n.kt)("p",{parentName:"li"},"If the output doesn't match the stuck node (in this example output, ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-node-2")," doesn't match the stuck node ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-node-1"),"), then we can conclude this issue happens.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before applying the workaround, check if all volumes are healthy:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get volumes -n longhorn-system -o yaml | yq '.items[] | select(.status.state == \"attached\")| .status.robustness'\n")),(0,n.kt)("p",{parentName:"li"},"The output should all be ",(0,n.kt)("inlineCode",{parentName:"p"},"healthy"),". If this is not the case, you might want to uncordon nodes to make the volume healthy again.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the misconfigured PDB:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl delete pdb instance-manager-r-466e3c7f -n longhorn-system\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3730"},"[BUG] 3 Node AirGapped Cluster Upgrade Stuck v1.1.0->v1.1.2-rc4"))))),(0,n.kt)("hr",null))}h.isMDXComponent=!0},4947:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/2894-deadline-8fbfd53960ef87f904f6a893a4a0bfcd.png"},45476:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3216-stuck-pre-drain-33d5537a9151085216d2cd275c92cf1f.png"},58855:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3729-error-300bdaf4155b9268cacff39d15d60103.png"},30150:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/3730-stuck-c48392f50cb65bcfe1e0e823d6696e3e.png"}}]);