---
id: airgap
sidebar_position: 3
sidebar_label: Air Gapped Environment
title: "Air Gapped Environment"
keywords:
- Harvester
- offline
- Air-gap
- HTTP proxy
---

<head>
  <link rel="canonical" href="https://docs.harvesterhci.io/v1.4/airgap"/>
</head>

This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy.

The Harvester ISO image contains all the packages to make it work in an air gapped environment.

## Working Behind an HTTP Proxy

In some environments, the connection to external services, from the servers or VMs, requires an HTTP(S) proxy.

### Configure an HTTP Proxy During Installation

You can configure the HTTP(S) proxy during the [ISO installation](./install/iso-install.md) as shown in picture below:

![iso-proxy](/img/v1.2/iso-proxy.png)

### Configure an HTTP Proxy in Harvester Settings

You can configure the HTTP(S) proxy in the settings page of the Harvester dashboard:

1. Go to the settings page of the Harvester UI.
1. Find the `http-proxy` setting, click **⋮ > Edit setting**
1. Enter the value(s) for `http-proxy`, `https-proxy` and `no-proxy`.

![proxy-setting](/img/v1.2/proxy-setting.png)

:::note

Harvester appends necessary addresses to user configured `no-proxy` to ensure the internal traffic works.
i.e., `localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,harvester-system,.svc,.cluster.local`. `harvester-system` was added into the list since v1.1.2.

When the nodes in the cluster do not use a proxy to communicate with each other, the CIDR needs to be added to `http-proxy.noProxy` after the first node is installed successfully. Please refer to [fail to deploy a multi-node cluster](./troubleshooting/harvester.md#fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting).

:::

## Guest Cluster Images

All necessary images to install and run Harvester are conveniently packaged into the ISO, eliminating the need to pre-load images on bare-metal nodes. A Harvester cluster manages them independently and effectively behind the scenes.

However, it's essential to understand a guest K8s cluster (e.g., RKE2 cluster) created by the [Harvester node driver](./rancher/node/node-driver.md) is a distinct entity from a Harvester cluster. A guest cluster operates within VMs and requires pulling images either from the internet or a [private registry](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry#configure-a-private-registry-with-credentials-when-creating-a-cluster).

If the **Cloud Provider** option is configured to **Harvester** in a guest K8s cluster, it deploys the Harvester cloud provider and Container Storage Interface (CSI) driver.

![cluster-registry](/img/v1.2/cluster-registry.png)

As a result, we recommend monitoring each [RKE2 release](https://github.com/rancher/rke2/releases) in your air gapped environment and pulling the required images into your private registry. Please refer to the **Harvester CCM & CSI Driver** with RKE2 Releases section on the [Harvester support matrix page](https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/harvester-v1-1-2/) for the best Harvester cloud provider and CSI driver capability support.

## Integrate with External Rancher

Rancher determines the `rancher-agent` image to be used whenever a Harvester cluster is imported. If the image is not included in the Harvester ISO, it must be pulled from the internet and loaded on each node, or pushed to the Harvester cluster's registry.

```bash
# Run the following commands on a computer that can access both the internet and the Harvester cluster.
docker pull rancher/rancher-agent:<version>
docker save rancher/rancher-agent:<version> -o rancher-agent-<version>.tar

# Copy the image TAR file to the air-gapped environment.
scp rancher-agent-<version>.tar rancher@<harvester-node-ip>:/tmp

# Use SSH to connect to the Harvester node, and then load the image.
ssh rancher@<harvester-node-ip>
sudo -i
docker load -i /tmp/rancher-agent-<version>.tar
```

## Known issues

---

### 1. Missing rancher/rancher-agent:v2.9.2 image affects deployment in air-gapped environments. (Issue [#7157](https://github.com/harvester/harvester/issues/7157))

Rancher v2.9.2, which is embedded in Harvester v1.4.0, introduced a new cronjob ([`rke2-machine-config-cleanup`](https://github.com/rancher/rancher/commit/53ba791e11f98a5594c6fa8a30d321602483446c)). This cronjob uses a container image (`rancher/rancher-agent:v2.9.2`) that is not included in the Harvester v1.4.0 ISO. To mitigate the issue, you can pull the image from the internet and then load it in the air-gapped environment.

```bash
# on a computer which can reach the internet and harvester cluster
docker pull rancher/rancher-agent:v2.9.2
docker save rancher/rancher-agent:v2.9.2 -o rancher-agent-v2.9.2.tar

# copy rancher-agent-v2.9.2.tar to the air-gapped environment
scp rancher-agent-v2.9.2.tar rancher@<harvester-node-ip>:/tmp

# ssh to the harvester node and load the image
ssh rancher@<harvester-node-ip>
sudo -i
docker load -i /tmp/rancher-agent-v2.9.2.tar
```
