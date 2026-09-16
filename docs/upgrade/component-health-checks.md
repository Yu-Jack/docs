---
sidebar_position: 3
title: Component Health Checks
---

Harvester components publish `ComponentHealth` resources to report conditions that require attention.

| Check | What happens |
| --- | --- |
| `VMHostDeviceLiveMigrationUnsupported` | A virtual machine has a host device or vGPU device attached. The virtual machine cannot be live migrated and must be shut down or migrated using a non-live migration method before its node is taken offline. |
| `ReplicaSchedulingFailure` | One or more Longhorn volumes cannot schedule the configured number of replicas onto available nodes. The volume runs with fewer replicas than requested, reducing data redundancy. |
