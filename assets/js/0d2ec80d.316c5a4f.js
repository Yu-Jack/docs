"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[32563],{12359:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const s={title:"Developer Mode Installation",keywords:["Harvester","harvester","Rancher","rancher","Developer Mode Installation"],Description:"Developer mode (dev mode) is intended to be used for testing and development purposes."},l="Developer Mode Installation",o={type:"mdx",permalink:"/v1.1/dev/dev-mode",source:"@site/src/pages/v1.1/dev/dev-mode.md",title:"Developer Mode Installation",description:"Developer mode (dev mode) is intended to be used for local testing and development purposes.",frontMatter:{title:"Developer Mode Installation",keywords:["Harvester","harvester","Rancher","rancher","Developer Mode Installation"],Description:"Developer mode (dev mode) is intended to be used for testing and development purposes."}},i=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"DigitalOcean Test Environment",id:"digitalocean-test-environment",level:3}],p={toc:i},c="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(c,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-mode-installation"},"Developer Mode Installation"),(0,r.kt)("admonition",{title:"attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Developer mode (dev mode) is intended to be used for local testing and development purposes.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Kubernetes node must pass the ",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/harvester/harvester/master/hack/host-check.sh"},"host-check")),(0,r.kt)("li",{parentName:"ul"},"If the Kubelet's RootDir is not ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/kubelet"),", you must create a ",(0,r.kt)("inlineCode",{parentName:"li"},"bind mount")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/kubelet")," as follows:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'KUBELET_ROOT_DIR="path to your kubelet root dir"\necho "${KUBELET_ROOT_DIR} /var/lib/kubelet none bind 0 0" >> /etc/fstab\nmkdir -p /var/lib/kubelet && mount -a\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/#multus-a-multi-network-plugin"},(0,r.kt)("strong",{parentName:"a"},"Multus"))," is installed across your cluster and a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"NetworkAttachmentDefinition")," CRD is created."),(0,r.kt)("li",{parentName:"ul"},"The Harvester Chart already contains the Kubevirt and Longhorn")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"For development purpose, Harvester can be installed on a Kubernetes cluster by using the ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," CLI."),(0,r.kt)("p",null,"Please refer to the Harvester ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/blob/master/deploy/charts/harvester/README.md"},"Helm chart")," for more details on installing and configuring the Helm chart."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the cattle-system namespace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns cattle-system\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the rancher-latest helm repo"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Rancher chart"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm install rancher rancher-latest/rancher \\\n--namespace cattle-system \\\n--set tls=external \\\n--set rancherImagePullPolicy=IfNotPresent \\\n--set rancherImage=rancher/rancher \\\n--set rancherImageTag=v2.6.3-harvester1 \\\n--set noDefaultAdmin=false \\\n--set features="multi-cluster-management=false\\,multi-cluster-management-agent=false" \\\n--set useBundledSystemChart=true \\\n--set bootstrapPassword=admin\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the 'status.provider' of the local cluster object to \"harvester\""),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit clusters.management.cattle.io local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the GitHub repository"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/harvester/harvester.git --depth=1\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Helm chart"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd harvester/deploy/charts\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the harvester-system namespace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns harvester-system\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Harvester crd chart"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install harvester-crd ./harvester-crd --namespace harvester-system\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Harvester chart"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## In order to use the service type LoadBalancer and create a vip in control-plane nodes, we need to enable kubevip.\nVIP_IP="replace with your vip ip, such as 192.168.5.10"\nVIP_NIC="replace with your vip interface name, such as eth0"\nhelm install harvester ./harvester --namespace harvester-system \\\n--set harvester-node-disk-manager.enabled=true \\\n--set harvester-network-controller.enabled=true \\\n--set harvester-load-balancer.enabled=true \\\n--set kube-vip.enabled=true \\\n--set kube-vip.config.vip_interface=${VIP_NIC} \\\n--set kube-vip.config.vip_address=${VIP_IP} \\\n--set service.vip.enabled=true \\\n--set service.vip.ip=${VIP_IP}\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## In some Kubernetes distributions (such as kubeadm), we need to modify the kube-vip nodeSelector to match the control-plane nodes.\n--set kube-vip.nodeSelector."node-role\\.kubernetes\\.io/master"=""\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expose Harvester UI"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"## Refer to https://kube-vip.chipzoller.dev/docs/usage/cloud-provider/. Add `cidr-cattle-system: ${VIP_IP}/32` to kubevip configMap.\nkubectl -n kube-system edit cm kubevip\n\n## Change the rancher service type from ClusterIP to LoadBalancer, and then you can access Harvester UI via https://${VIP_IP}.\nkubectl -n cattle-system edit svc rancher\n")))),(0,r.kt)("h3",{id:"digitalocean-test-environment"},"DigitalOcean Test Environment"),(0,r.kt)("p",null,"You can create a test Kubernetes environment in Rancher using ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcean")," as a cloud provider, which supports nested virtualization."),(0,r.kt)("p",null,"We recommend using a ",(0,r.kt)("inlineCode",{parentName:"p"},"8 core, 16 GB RAM")," droplet, which will have nested virtualization enabled by default."),(0,r.kt)("p",null,"This screenshot shows how to create a Rancher node template that would allow Rancher to provision such a node in DigitalOcean:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"do.png",src:a(68227).Z,width:"1893",height:"1031"})),(0,r.kt)("p",null,"For more information on how to launch DigitalOcean nodes with Rancher, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/digital-ocean/"},"Rancher documentation.")))}m.isMDXComponent=!0},68227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/do-9d47cfbd0126b6b6c9eae88caa80a3ce.png"}}]);