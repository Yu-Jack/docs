"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[70730],{41983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});a(67294);var r=a(3905),n=a(25108);const i={sidebar_position:2,sidebar_label:"Virtualization Management",title:"Virtualization Management",keywords:["Harvester","Rancher"]},s=void 0,o={unversionedId:"rancher/virtualization-management",id:"rancher/virtualization-management",title:"Virtualization Management",description:"With Rancher's virtualization management capabilities, you can import and manage multiple Harvester clusters. It provides a solution that unifies virtualization and container management from a single pane of glass.",source:"@site/docs/rancher/virtualization-management.md",sourceDirName:"rancher",slug:"/rancher/virtualization-management",permalink:"/v1.4/rancher/virtualization-management",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/virtualization-management.md",tags:[],version:"current",lastUpdatedAt:1718703512,formattedLastUpdatedAt:"Jun 18, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Virtualization Management",title:"Virtualization Management",keywords:["Harvester","Rancher"]},sidebar:"api",previous:{title:"Rancher Integration",permalink:"/v1.4/rancher/rancher-integration"},next:{title:"Harvester Node Driver",permalink:"/v1.4/rancher/node/node-driver"}},l={},c=[{value:"Importing Harvester cluster",id:"importing-harvester-cluster",level:2},{value:"Multi-Tenancy",id:"multi-tenancy",level:2},{value:"Multi-Tenancy Example",id:"multi-tenancy-example",level:3},{value:"Delete Imported Harvester Cluster",id:"delete-imported-harvester-cluster",level:2}],p=e=>function(t){return n.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),d=p("TabItem"),h={toc:c},u="wrapper";function g({components:e,...t}){return(0,r.kt)(u,{...h,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/virtualization-management"})),(0,r.kt)("p",null,"With Rancher's virtualization management capabilities, you can import and manage multiple Harvester clusters. It provides a solution that unifies virtualization and container management from a single pane of glass."),(0,r.kt)("p",null,"Additionally, Harvester leverages Rancher's existing capabilities, such as ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/authentication-config"},"authentication")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC control"),", to provide full multi-tenancy support."),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"Harvester & Rancher Support Matrix")," to find a desired Rancher version. You can use one of the following guides to deploy and provision Rancher and a Kubernetes cluster with the provider of your choice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/deploy-rancher-manager"},"AWS")," (uses Terraform)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"},"AWS Marketplace")," (uses Amazon EKS)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/azure"},"Azure")," (uses Terraform)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},"DigitalOcean")," (uses Terraform)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},"GCP")," (uses Terraform)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"},"Hetzner Cloud")," (uses Terraform)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},"Vagrant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},"Equinix Metal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/outscale-qs"},"Outscale")," (uses Terraform)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"},"Manual Install"))),(0,r.kt)("h2",{id:"importing-harvester-cluster"},"Importing Harvester cluster"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(d,{value:"ui",label:"UI",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check and prepare the container image."),(0,r.kt)("p",{parentName:"li"},"To facilitate the importing task, a new pod named ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent-***")," will be created on the Harvester cluster. The container image used for this pod depends on the version of your Rancher server (for example, the image ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher/rancher-agent:v2.7.9")," is used if you are running Rancher v2.7.9). Moreover, this dynamic image is not packed into the Harvester ISO and is instead pulled from the repository during importing."),(0,r.kt)("p",{parentName:"li"},"If your Harvester cluster is not directly accessible from the internet, perform one of the following actions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure a ",(0,r.kt)("a",{parentName:"p",href:"/v1.4/advanced/index#containerd-registry"},"private registry")," for the cluster and add the image. Harvester will automatically pull the image from this registry.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you configured an ",(0,r.kt)("a",{parentName:"p",href:"/v1.4/airgap/#configure-an-http-proxy-in-harvester-settings"},"HTTP proxy")," for accessing external services, verify that it is working as expected. The ",(0,r.kt)("a",{parentName:"p",href:"/v1.4/install/update-harvester-configuration#dns-servers"},"DNS servers")," that you specified in the Harvester configuration should be able to resolve the domain name ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.io"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the image using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"docker pull rancher/rancher-agent:v2.7.9 && docker save -o rancher-agent.tar rancher/rancher-agent:v2.7.9"),". Next, create a copy of the downloaded image in each cluster node, and then import the image to containerd using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo -i ctr --namespace k8s.io image import rancher-agent.tar"),". Finally, run ",(0,r.kt)("inlineCode",{parentName:"p"},'sudo -i crictl image ls | grep "rancher-agent"')," on each node to ensure that the image is ready.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the Rancher server is up and running, log in and click the hamburger menu and choose the ",(0,r.kt)("strong",{parentName:"p"},"Virtualization Management")," tab. Select ",(0,r.kt)("strong",{parentName:"p"},"Import Existing")," to import the downstream Harvester cluster into the Rancher server.\n",(0,r.kt)("img",{src:a(42214).Z,width:"1848",height:"724"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster Name")," and click ",(0,r.kt)("strong",{parentName:"p"},"Create"),". You will then see the registration guide; please open the dashboard of the target Harvester cluster and follow the guide accordingly.\n",(0,r.kt)("img",{src:a(85798).Z,width:"1024",height:"454"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the agent node is ready, you should be able to view and access the imported Harvester cluster from the Rancher server and manage your VMs accordingly.\n",(0,r.kt)("img",{src:a(34359).Z,width:"2559",height:"801"})),(0,r.kt)("p",{parentName:"li"},"  Whenever the agent node becomes stuck, run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pod cattle-cluster-agent-*** -n cattle-system -oyaml")," on the Harvester cluster. If the following message is displayed, check the information in step 1, kill this pod and then a new pod will be created automatically to restart the importing process."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nstate:\n  waiting:\n    message: Back-off pulling image "rancher/rancher-agent:v2.7.9"\n    reason: ImagePullBackOff\n...\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the Harvester UI, you can click the hamburger menu to navigate back to the Rancher multi-cluster management page.\n",(0,r.kt)("img",{src:a(72681).Z,width:"5116",height:"2084"}))))),(0,r.kt)(d,{value:"api",label:"API",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Rancher Kubernetes cluster, create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: provisioning.cattle.io/v1\nkind: Cluster\nmetadata:\n  name: harvester-cluster-name\n  namespace: fleet-default\n  labels:\n    provider.cattle.io: harvester\n  annotations:\n    field.cattle.io/description: Human readable cluster description\nspec:\n  agentEnvVars: []\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the status of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cluster")," resource is updated, obtain the cluster ID (format: ",(0,r.kt)("inlineCode",{parentName:"p"},"c-m-foobar"),") from the ",(0,r.kt)("inlineCode",{parentName:"p"},".status.clusterName")," property.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRegistrationToken")," using the cluster ID in the namespace with the same name as the cluster ID. You must specify the cluster ID in the token's ",(0,r.kt)("inlineCode",{parentName:"p"},".spec.clusterName")," field."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: management.cattle.io/v3\nkind: ClusterRegistrationToken\nmetadata:\n  name: default-token\n  namespace: c-m-foobar\nspec:\n  clusterName: c-m-foobar\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the status of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRegistrationToken")," is updated, obtain the value of the token's ",(0,r.kt)("inlineCode",{parentName:"p"},".status.manifestUrl")," property.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Harvester cluster, patch the setting ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-registration-url")," and specify the URL obtained from the cluster registration token's ",(0,r.kt)("inlineCode",{parentName:"p"},".status.manifestUrl")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," field."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: harvesterhci.io/v1beta1\nkind: Setting\nmetadata:\n  name: cluster-registration-url\nvalue: https://rancher.example.com/v3/import/abcdefghijkl1234567890-c-m-foobar.yaml\n")))))),(0,r.kt)("h2",{id:"multi-tenancy"},"Multi-Tenancy"),(0,r.kt)("p",null,"In Harvester, we have leveraged the existing Rancher ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC authorization")," such that users can view and manage a set of resources based on their cluster and project role permissions."),(0,r.kt)("p",null,"Within Rancher, each person authenticates as a user, which is a login that grants a user access to Rancher. As mentioned in ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/authentication-config"},"Authentication"),", users can either be local or external."),(0,r.kt)("p",null,"Once the user logs into Rancher, their authorization, also known as access rights, is determined by global permissions and cluster and project roles."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},(0,r.kt)("strong",{parentName:"a"},"Global Permissions")),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define user authorization outside the scope of any particular cluster."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},(0,r.kt)("strong",{parentName:"a"},"Cluster and Project Roles")),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define user authorization inside the specific cluster or project where users are assigned the role.")))),(0,r.kt)("p",null,"Both global permissions and cluster and project roles are implemented on top of ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC"),". Therefore, enforcement of permissions and roles is performed by Kubernetes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A cluster owner has full control over the cluster and all resources inside it, e.g., hosts, VMs, volumes, images, networks, backups, and settings."),(0,r.kt)("li",{parentName:"ul"},"A project user can be assigned to a specific project with permission to manage the resources inside the project.")),(0,r.kt)("h3",{id:"multi-tenancy-example"},"Multi-Tenancy Example"),(0,r.kt)("p",null,"The following example provides a good explanation of how the multi-tenant feature works:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, add new users via the Rancher ",(0,r.kt)("inlineCode",{parentName:"li"},"Users & Authentication")," page. Then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to add two new separated users, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly")," respectively.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," is a user with permission to manage a list of resources of a particular project, e.g., the default project."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly")," is a user with read-only permission of a particular project, e.g., the default project.\n",(0,r.kt)("img",{src:a(21638).Z,width:"2556",height:"1159"})))),(0,r.kt)("li",{parentName:"ol"},"Click one of the imported Harvester clusters after navigating to the Harvester UI.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Projects/Namespaces")," tab."),(0,r.kt)("li",{parentName:"ul"},"Select a project such as ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," and click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit Config")," menu to assign the users to this project with appropriate permissions. For example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," user will be assigned the project owner role.\n",(0,r.kt)("img",{src:a(74340).Z,width:"897",height:"733"})))),(0,r.kt)("li",{parentName:"ol"},"Continue to add the ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly")," user to the same project with read-only permissions and click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".\n",(0,r.kt)("img",{src:a(49226).Z,width:"2559",height:"947"})),(0,r.kt)("li",{parentName:"ol"},"Open an incognito browser and log in as ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner"),"."),(0,r.kt)("li",{parentName:"ol"},"After logging in as the ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," user, click the ",(0,r.kt)("strong",{parentName:"li"},"Virtualization Management")," tab. There you should be able to view the cluster and project to which you have been assigned."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Images")," tab to view a list of images previously uploaded to the ",(0,r.kt)("inlineCode",{parentName:"li"},"harvester-public")," namespace. You can also upload your own image if needed."),(0,r.kt)("li",{parentName:"ol"},"Create a VM with one of the images that you have uploaded."),(0,r.kt)("li",{parentName:"ol"},"Log in with another user, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly"),", and this user will only have the read permission of the assigned project.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester-public")," namespace is a predefined namespace accessible to all users assigned to this cluster.")),(0,r.kt)("h2",{id:"delete-imported-harvester-cluster"},"Delete Imported Harvester Cluster"),(0,r.kt)("p",null,"Users can delete the imported Harvester cluster from the Rancher UI via ",(0,r.kt)("strong",{parentName:"p"},"Virtualization Management > Harvester Clusters"),". Select the cluster you want to remove and click the ",(0,r.kt)("strong",{parentName:"p"},"Delete")," button to delete the imported Harvester cluster."),(0,r.kt)("p",null,"You will also need to reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-registration-url")," setting on the associated Harvester cluster to clean up the Rancher cluster agent."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete-cluster",src:a(21099).Z,width:"3578",height:"1638"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please do not run the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete -f ...")," command to delete the imported Harvester cluster as it will remove the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace which is required of the Harvester cluster.")))}g.isMDXComponent=!0},74340:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-member-943f18a8d8aab0377ddf8c74d15a44a4.png"},49226:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/added-user-74f30dba0c2ea1936837d3ebfa781335.png"},21638:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-user-9b8348a8edeeff5ea8537ea4739df041.png"},21099:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/delete-harvester-cluster-d4571d1521fa3e2b3bb4078d456bc481.png"},34359:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-cluster-view-066656890fd03300b5964da81dd0b079.png"},72681:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-go-back-a172a84b9bbe934f76d23af11090a40f.png"},85798:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-importing-3284d4c71fff9d88bde954de0fca8cb9.png"},42214:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vm-menu-9370f3a907e8bc5e4c78f2cf3ac17184.png"}}]);