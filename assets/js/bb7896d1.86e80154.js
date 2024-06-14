"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[51443],{35362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:5,sidebar_label:"VM",title:"VM"},o=void 0,s={unversionedId:"troubleshooting/vm",id:"troubleshooting/vm",title:"VM",description:"The following sections contain information useful in troubleshooting issues related to Harvester VM management.",source:"@site/docs/troubleshooting/vm.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/vm",permalink:"/v1.4/troubleshooting/vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/troubleshooting/vm.md",tags:[],version:"current",lastUpdatedAt:1718271160,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"VM",title:"VM"},sidebar:"api",previous:{title:"Monitoring",permalink:"/v1.4/troubleshooting/monitoring"},next:{title:"FAQ",permalink:"/v1.4/faq"}},l={},d=[{value:"VM Start Button is Not Visible",id:"vm-start-button-is-not-visible",level:2},{value:"Issue Description",id:"issue-description",level:3},{value:"VM General Operations",id:"vm-general-operations",level:3},{value:"General VM Related Objects",id:"general-vm-related-objects",level:3},{value:"A Running VM",id:"a-running-vm",level:4},{value:"A VM Stopped Using the Harvester UI",id:"a-vm-stopped-using-the-harvester-ui",level:4},{value:"A VM Stopped Using the VM&#39;s Poweroff Command",id:"a-vm-stopped-using-the-vms-poweroff-command",level:4},{value:"Issue Analysis",id:"issue-analysis",level:3},{value:"Root Cause",id:"root-cause",level:4},{value:"Workaround",id:"workaround",level:3},{value:"Related Issue",id:"related-issue",level:3},{value:"VM Stuck in Starting State with Error Messsage <code>not a device node</code>",id:"vm-stuck-in-starting-state-with-error-messsage-not-a-device-node",level:2},{value:"Issue Description",id:"issue-description-1",level:3},{value:"Issue Analysis",id:"issue-analysis-1",level:3},{value:"Root Cause",id:"root-cause-1",level:4},{value:"Workaround",id:"workaround-1",level:3},{value:"Related Issue",id:"related-issue-1",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/troubleshooting/vm"})),(0,i.kt)("p",null,"The following sections contain information useful in troubleshooting issues related to Harvester VM management."),(0,i.kt)("h2",{id:"vm-start-button-is-not-visible"},"VM Start Button is Not Visible"),(0,i.kt)("h3",{id:"issue-description"},"Issue Description"),(0,i.kt)("p",null,"On rare occasions, the ",(0,i.kt)("strong",{parentName:"p"},"Start")," button is unavailable on the Harvester UI for VMs that are ",(0,i.kt)("em",{parentName:"p"},"Off"),". Without that button, users are unable to start the VMs."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69907).Z,width:"3114",height:"1244"})),(0,i.kt)("h3",{id:"vm-general-operations"},"VM General Operations"),(0,i.kt)("p",null,"On the Harvester UI, the ",(0,i.kt)("strong",{parentName:"p"},"Stop")," button is visible after a VM is created and started."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(66939).Z,width:"3178",height:"1526"})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Start")," button is visible after the VM is stopped."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(66086).Z,width:"3190",height:"1238"})),(0,i.kt)("p",null,"When the VM is powered off from inside the VM, both the ",(0,i.kt)("strong",{parentName:"p"},"Start")," and ",(0,i.kt)("strong",{parentName:"p"},"Restart")," buttons are visible."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(20542).Z,width:"3174",height:"1376"})),(0,i.kt)("h3",{id:"general-vm-related-objects"},"General VM Related Objects"),(0,i.kt)("h4",{id:"a-running-vm"},"A Running VM"),(0,i.kt)("p",null,"The objects ",(0,i.kt)("inlineCode",{parentName:"p"},"vm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vmi"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"pod"),", which are all related to the VM, exist. The status of all three objects is ",(0,i.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," # kubectl get vm\nNAME   AGE     STATUS    READY\nvm8    7m25s   Running   True\n\n # kubectl get vmi\nNAME   AGE   PHASE     IP            NODENAME   READY\nvm8    78s   Running   10.52.0.199   harv41     True\n\n # kubectl get pod\nNAME                      READY   STATUS    RESTARTS   AGE\nvirt-launcher-vm8-tl46h   1/1     Running   0          80s\n")),(0,i.kt)("h4",{id:"a-vm-stopped-using-the-harvester-ui"},"A VM Stopped Using the Harvester UI"),(0,i.kt)("p",null,"Only the object ",(0,i.kt)("inlineCode",{parentName:"p"},"vm")," exists and its status is ",(0,i.kt)("inlineCode",{parentName:"p"},"Stopped"),". Both ",(0,i.kt)("inlineCode",{parentName:"p"},"vmi")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pod")," disappear."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," # kubectl get vm\nNAME   AGE    STATUS    READY\nvm8    123m   Stopped   False\n\n # kubectl get vmi\nNo resources found in default namespace.\n\n # kubectl get pod\nNo resources found in default namespace.\n # \n")),(0,i.kt)("h4",{id:"a-vm-stopped-using-the-vms-poweroff-command"},"A VM Stopped Using the VM's Poweroff Command"),(0,i.kt)("p",null,"The objects ",(0,i.kt)("inlineCode",{parentName:"p"},"vm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vmi"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"pod"),", which are all related to the VM, exist. The status of ",(0,i.kt)("inlineCode",{parentName:"p"},"vm")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Stopped"),", while the status of ",(0,i.kt)("inlineCode",{parentName:"p"},"pod")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," # kubectl get vm\nNAME   AGE    STATUS    READY\nvm8    134m   Stopped   False\n\n # kubectl get vmi\nNAME   AGE     PHASE       IP            NODENAME   READY\nvm8    2m49s   Succeeded   10.52.0.199   harv41     False\n\n # kubectl get pod\nNAME                      READY   STATUS      RESTARTS   AGE\nvirt-launcher-vm8-tl46h   0/1     Completed   0          2m54s\n\n")),(0,i.kt)("h3",{id:"issue-analysis"},"Issue Analysis"),(0,i.kt)("p",null,"When the issue occurs, the objects ",(0,i.kt)("inlineCode",{parentName:"p"},"vm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"vmi"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"pod")," exist. The status of the objects is similar to that of ",(0,i.kt)("strong",{parentName:"p"},"A VM Stopped Using the VM's Poweroff Command"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"The VM ",(0,i.kt)("inlineCode",{parentName:"p"},"ocffm031v000")," is not ready (",(0,i.kt)("inlineCode",{parentName:"p"},'status: "False"'),") because the virt-launcher pod is terminating (",(0,i.kt)("inlineCode",{parentName:"p"},'reason: "PodTerminating"'),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'- apiVersion: kubevirt.io/v1\n  kind: VirtualMachine\n...\n  status:\n    conditions:\n    - lastProbeTime: "2023-07-20T08:37:37Z"\n      lastTransitionTime: "2023-07-20T08:37:37Z"\n      message: virt-launcher pod is terminating\n      reason: PodTerminating\n      status: "False"\n      type: Ready\n')),(0,i.kt)("p",null,"Similarly, the VMI (virtual machine instance) ",(0,i.kt)("inlineCode",{parentName:"p"},"ocffm031v000")," is not ready (",(0,i.kt)("inlineCode",{parentName:"p"},'status: "False"'),") because the virt-launcher pod is terminating (",(0,i.kt)("inlineCode",{parentName:"p"},'reason: "PodTerminating"'),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'- apiVersion: kubevirt.io/v1\n  kind: VirtualMachineInstance\n...\n    name: ocffm031v000\n...\n  status:\n    activePods:\n      ec36a1eb-84a5-4421-b57b-2c14c1975018: aibfredg02\n    conditions:\n    - lastProbeTime: "2023-07-20T08:37:37Z"\n      lastTransitionTime: "2023-07-20T08:37:37Z"\n      message: virt-launcher pod is terminating\n      reason: PodTerminating\n      status: "False"\n      type: Ready\n')),(0,i.kt)("p",null,"On the other hand, the pod ",(0,i.kt)("inlineCode",{parentName:"p"},"virt-launcher-ocffm031v000-rrkss")," is not ready (",(0,i.kt)("inlineCode",{parentName:"p"},'status: "False"'),") because the pod has run to completion (",(0,i.kt)("inlineCode",{parentName:"p"},'reason: "PodCompleted"'),")."),(0,i.kt)("p",null,"The underlying container ",(0,i.kt)("inlineCode",{parentName:"p"},"0d7a0f64f91438cb78f026853e6bebf502df1bdeb64878d351fa5756edc98deb")," is terminated, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"exitCode")," is 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'- apiVersion: v1\n  kind: Pod\n...\n    name: virt-launcher-ocffm031v000-rrkss\n...\n    ownerReferences:\n    - apiVersion: kubevirt.io/v1\n...\n      kind: VirtualMachineInstance\n      name: ocffm031v000\n      uid: 8d2cf524-7e73-4713-86f7-89e7399f25db\n    uid: ec36a1eb-84a5-4421-b57b-2c14c1975018\n...\n  status:\n    conditions:\n    - lastProbeTime: "2023-07-18T13:48:56Z"\n      lastTransitionTime: "2023-07-18T13:48:56Z"\n      message: the virtual machine is not paused\n      reason: NotPaused\n      status: "True"\n      type: kubevirt.io/virtual-machine-unpaused\n    - lastProbeTime: "null"\n      lastTransitionTime: "2023-07-18T13:48:55Z"\n      reason: PodCompleted\n      status: "True"\n      type: Initialized\n    - lastProbeTime: "null"\n      lastTransitionTime: "2023-07-20T08:38:56Z"\n      reason: PodCompleted\n      status: "False"\n      type: Ready\n    - lastProbeTime: "null"\n      lastTransitionTime: "2023-07-20T08:38:56Z"\n      reason: PodCompleted\n      status: "False"\n      type: ContainersReady\n...\n    containerStatuses:\n    - containerID: containerd://0d7a0f64f91438cb78f026853e6bebf502df1bdeb64878d351fa5756edc98deb\n      image: registry.suse.com/suse/sles/15.4/virt-launcher:0.54.0-150400.3.3.2\n      imageID: sha256:43bb08efdabb90913534b70ec7868a2126fc128887fb5c3c1b505ee6644453a2\n      lastState: {}\n      name: compute\n      ready: false\n      restartCount: 0\n      started: false\n      state:\n        terminated:\n          containerID: containerd://0d7a0f64f91438cb78f026853e6bebf502df1bdeb64878d351fa5756edc98deb\n          exitCode: 0\n          finishedAt: "2023-07-20T08:38:55Z"\n          reason: Completed\n          startedAt: "2023-07-18T13:50:17Z"\n')),(0,i.kt)("p",null,"A critical difference is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Stop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," actions appear in the ",(0,i.kt)("inlineCode",{parentName:"p"},"stateChangeRequests")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"vm"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  status:\n    conditions:\n...\n    printableStatus: Stopped\n    stateChangeRequests:\n    - action: Stop\n      uid: 8d2cf524-7e73-4713-86f7-89e7399f25db\n    - action: Start\n")),(0,i.kt)("h4",{id:"root-cause"},"Root Cause"),(0,i.kt)("p",null,"The root cause of this issue is under investigation."),(0,i.kt)("p",null,"It is notable that the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/blob/7357d0b660557566bf9ff2e83790635aea71d1bc/pkg/api/vm/formatter.go#L166"},"source code")," checks the status of ",(0,i.kt)("inlineCode",{parentName:"p"},"vm")," and assumes that the object is starting. No ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Restart")," operations are added to the object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"func (vf *vmformatter) canStart(vm *kubevirtv1.VirtualMachine, vmi *kubevirtv1.VirtualMachineInstance) bool {\n  if vf.isVMStarting(vm) {\n    return false\n  }\n..\n}\n\nfunc (vf *vmformatter) canRestart(vm *kubevirtv1.VirtualMachine, vmi *kubevirtv1.VirtualMachineInstance) bool {\n  if vf.isVMStarting(vm) {\n    return false\n  }\n...\n}\n\nfunc (vf *vmformatter) isVMStarting(vm *kubevirtv1.VirtualMachine) bool {\n  for _, req := range vm.Status.StateChangeRequests {\n    if req.Action == kubevirtv1.StartRequest {\n      return true\n    }\n  }\n  return false\n}\n")),(0,i.kt)("h3",{id:"workaround"},"Workaround"),(0,i.kt)("p",null,"To address the issue, you can force delete the pod using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl delete pod virt-launcher-ocffm031v000-rrkss -n namespace --force"),"."),(0,i.kt)("p",null,"After the pod is successfully deleted, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," button becomes visible again on the Harvester UI."),(0,i.kt)("h3",{id:"related-issue"},"Related Issue"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4659"},"https://github.com/harvester/harvester/issues/4659")),(0,i.kt)("h2",{id:"vm-stuck-in-starting-state-with-error-messsage-not-a-device-node"},"VM Stuck in Starting State with Error Messsage ",(0,i.kt)("inlineCode",{parentName:"h2"},"not a device node")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Impacted versions: v1.3.0")),(0,i.kt)("h3",{id:"issue-description-1"},"Issue Description"),(0,i.kt)("p",null,"Some VMs may fail to start and then become unresponsive after the cluster or some nodes are restarted. On the ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," screen of the Harvester UI, the status of the affected VMs is stuck at ",(0,i.kt)("em",{parentName:"p"},"Starting"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69157).Z,width:"2910",height:"920"})),(0,i.kt)("h3",{id:"issue-analysis-1"},"Issue Analysis"),(0,i.kt)("p",null,"The status of the pod related to the affected VM is ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateContainerError"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kubectl get pods\nNAME                      READY   STATUS                 RESTARTS   AGE\nvirt-launcher-vm1-w9bqs   0/2     CreateContainerError   0          9m39s\n")),(0,i.kt)("p",null,"The phrase ",(0,i.kt)("inlineCode",{parentName:"p"},"failed to generate spec: not a device node")," can be found in the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$kubectl get pods -oyaml\napiVersion: v1\nitems:\n  apiVersion: v1\n  kind: Pod\n  metadata:\n...\n    containerStatuses:\n    - image: registry.suse.com/suse/sles/15.5/virt-launcher:1.1.0-150500.8.6.1\n      imageID: ""\n      lastState: {}\n      name: compute\n      ready: false\n      restartCount: 0\n      started: false\n      state:\n        waiting:\n          message: \'failed to generate container "50f0ec402f6e266870eafb06611850a5a03b2a0a86fdd6e562959719ccc003b5"\n            spec: failed to generate spec: not a device node\'\n          reason: CreateContainerError\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubelet.log")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file path: /var/lib/rancher/rke2/agent/logs/kubelet.log\n\nE0205 20:44:31.683371    2837 pod_workers.go:1294] "Error syncing pod, skipping" err="failed to \\"StartContainer\\" for \\"compute\\" with CreateContainerError: \\"failed t\no generate container \\\\\\"255d42ec2e01d45b4e2480d538ecc21865cf461dc7056bc159a80ee68c411349\\\\\\" spec: failed to generate spec: not a device node\\"" pod="default/virt-laun\ncher-caddytest-9tjzj" podUID=d512bf3e-f215-4128-960a-0658f7e63c7c\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"containerd.log")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'file path: /var/lib/rancher/rke2/agent/containerd/containerd.log\n\ntime="2024-02-21T11:24:00.140298800Z" level=error msg="CreateContainer within sandbox \\"850958f388e63f14a683380b3c52e57db35f21c059c0d93666f4fdaafe337e56\\" for &ContainerMetadata{Name:compute,Attempt:0,} failed" error="failed to generate container \\"5ddad240be2731d5ea5210565729cca20e20694e364e72ba14b58127e231bc79\\" spec: failed to generate spec: not a device node"\n\n')),(0,i.kt)("p",null,"After adding debug information to ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd"),", it identifies the error message ",(0,i.kt)("inlineCode",{parentName:"p"},"not a device node")," is upon the file ",(0,i.kt)("inlineCode",{parentName:"p"},"pvc-3c1b28fb-*"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'time="2024-02-22T15:15:08.557487376Z" level=error msg="CreateContainer within sandbox \\"d23af3219cb27228623cf8168ec27e64e836ed44f2b2f9cf784f0529a7f92e1e\\" for &ContainerMetadata{Name:compute,Attempt:0,} failed" error="failed to generate container \\"e4ed94fb5e9145e8716bcb87aae448300799f345197d52a617918d634d9ca3e1\\" spec: failed to generate spec: get device path: /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/publish/pvc-3c1b28fb-683e-4bf5-9869-c9107a0f1732/20291c6b-62c3-4456-be8a-fbeac118ec19 containerPath: /dev/disk-0 error: not a device node"\n')),(0,i.kt)("p",null,"This is a CSI related file, but it is an empty file instead of the expected device file. Then the containerd denied the ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateContainer")," request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ls /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/publish/pvc-3c1b28fb-683e-4bf5-9869-c9107a0f1732/ -alth\ntotal 8.0K\ndrwxr-x--- 2 root root 4.0K Feb 22 15:10 .\n-rw-r--r-- 1 root root    0 Feb 22 14:28 aa851da3-cee1-45be-a585-26ae766c16ca\n-rw-r--r-- 1 root root    0 Feb 22 14:07 20291c6b-62c3-4456-be8a-fbeac118ec19\ndrwxr-x--- 4 root root 4.0K Feb 22 14:06 ..\n-rw-r--r-- 1 root root    0 Feb 21 15:48 4333c9fd-c2c8-4da2-9b5a-1a310f80d9fd\n-rw-r--r-- 1 root root    0 Feb 21 09:18 becc0687-b6f5-433e-bfb7-756b00deb61b\n\n$file /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/publish/pvc-3c1b28fb-683e-4bf5-9869-c9107a0f1732/20291c6b-62c3-4456-be8a-fbeac118ec19\n: empty\n")),(0,i.kt)("p",null,"The output listed above directly contrasts with the following example, which shows the expected device file of a running VM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ls  /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/publish/pvc-732f8496-103b-4a08-83af-8325e1c314b7/ -alth\ntotal 8.0K\ndrwxr-x--- 2 root root  4.0K Feb 21 10:53 .\ndrwxr-x--- 4 root root  4.0K Feb 21 10:53 ..\nbrw-rw---- 1 root root 8, 16 Feb 21 10:53 4883af80-c202-4529-a2c6-4e7f15fe5a9b\n")),(0,i.kt)("h4",{id:"root-cause-1"},"Root Cause"),(0,i.kt)("p",null,"After the cluster or specific nodes are rebooted, the kubelet calls ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePublishVolume")," for the new pod without first calling ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeStageVolume"),". Moreover, the Longhorn CSI plugin bind mounts the regular file at the staging target path (previously used by the deleted pod) to the target path, and the operation is considered successful."),(0,i.kt)("h3",{id:"workaround-1"},"Workaround"),(0,i.kt)("p",null,"Cluster level operation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the backing pods of the affected VMs and the related Longhorn volumes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl get pods\nNAME                      READY   STATUS                 RESTARTS   AGE\nvirt-launcher-vm1-nxfm4   0/2     CreateContainerError   0          7m11s\n\n$ kubectl get pvc -A\nNAMESPACE                  NAME                       STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS           AGE\ndefault                    vm1-disk-0-9gc6h           Bound    pvc-f1798969-5b72-4d76-9f0e-64854af7b59c   1Gi        RWX            longhorn-image-fxsqr   7d22h\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#vm-general-operations"},"Stop")," the affected VMs from Harvester UI."),(0,i.kt)("p",{parentName:"li"},"The VM may stuck in ",(0,i.kt)("inlineCode",{parentName:"p"},"Stopping"),", continue the next step.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the backing pods forcely."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ kubectl delete pod virt-launcher-vm1-nxfm4 --force\nWarning: Immediate deletion does not wait for confirmation that the running resource has been terminated. The resource may continue to run on the cluster indefinitely.\npod "virt-launcher-vm1-nxfm4" force deleted\n')),(0,i.kt)("p",{parentName:"li"},"The VM is off now."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(43064).Z,width:"3292",height:"758"})))),(0,i.kt)("p",null,"Node level operation, node by node:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/v1.4/host/#cordoning-a-node"},"Cordon")," a node.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unmout all the affected Longhorn volumes in this node."),(0,i.kt)("p",{parentName:"li"},"You need to ssh to this node and execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo -i umount path")," command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ umount /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/pvc-f1798969-5b72-4d76-9f0e-64854af7b59c/dev/*\numount: /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/pvc-f1798969-5b72-4d76-9f0e-64854af7b59c/dev/4b2ab666-27bd-4e3c-a218-fb3d48a72e69: not mounted.\numount: /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/pvc-f1798969-5b72-4d76-9f0e-64854af7b59c/dev/6aaf2bbe-f688-4dcd-855a-f9e2afa18862: not mounted.\numount: /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/pvc-f1798969-5b72-4d76-9f0e-64854af7b59c/dev/91488f09-ff22-45f4-afc0-ca97f67555e7: not mounted.\numount: /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/pvc-f1798969-5b72-4d76-9f0e-64854af7b59c/dev/bb4d0a15-737d-41c0-946c-85f4a56f072f: not mounted.\numount: /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/pvc-f1798969-5b72-4d76-9f0e-64854af7b59c/dev/d2a54e32-4edc-4ad8-a748-f7ef7a2cacab: not mounted.\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/v1.4/host/#cordoning-a-node"},"Uncordon")," this node.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#vm-general-operations"},"Start")," the affected VMs from harvester UI."),(0,i.kt)("p",{parentName:"li"},"Wait some time, the VM will run successfully."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(4031).Z,width:"3020",height:"618"})),(0,i.kt)("p",{parentName:"li"},"The newly generated csi file is an expected device file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ls /var/lib/kubelet/plugins/kubernetes.io/csi/volumeDevices/publish/pvc-f1798969-5b72-4d76-9f0e-64854af7b59c/ -alth\n...\nbrw-rw---- 1 root root 8, 64 Mar  6 11:47 7beb531d-a781-4775-ba5e-8773773d77f1\n")))),(0,i.kt)("h3",{id:"related-issue-1"},"Related Issue"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/5109"},"https://github.com/harvester/harvester/issues/5109")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/longhorn/longhorn/issues/8009"},"https://github.com/longhorn/longhorn/issues/8009")))}c.isMDXComponent=!0},20542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/actively-powered-off-vm-8ddfe55dc03b4d18550c11ccdbfbc192.png"},66086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/start-vm-after-vm-is-stopped-from-webui-ff846e390db001228d2e1752d8ad9856.png"},66939:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stop-vm-from-webui-2ed8b8aa96c707a3bdffb7c5d1a34c41.png"},69907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-start-button-is-not-visible-7fe4f7c2d61c26a48e2ceb29f7ed8ab5.png"},4031:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/start-vm-and-run-75ad8b9d2677dcd2af4eb14d5ebc50a4.png"},43064:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-is-off-fd81cd413b392edc3a7030b0f0a28934.png"},69157:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-stuck-at-starting-010d5db7bf2623f08aef863ffcb082e5.png"}}]);