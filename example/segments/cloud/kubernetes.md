---
title: "Kubernetes"
ring: "adopt"
moved: 0
tags:
  - cloud-native
  - containers
  - infrastructure
related:
  - cloud/helm
  - cloud/argocd
owner:
  name: "Platform Engineering"
  url: "https://github.com/orgs/example/teams/platform-engineering"
links:
  - label: Documentation
    url: https://kubernetes.io/docs/
    type: docs
  - label: GitHub
    url: https://github.com/kubernetes/kubernetes
    type: repo
  - label: Kubernetes Slack
    url: https://kubernetes.slack.com
    type: community
history:
  - date: "2025-01"
    ring: adopt
    description: "Fully adopted across all product teams."
  - date: "2023-06"
    ring: trial
    description: "Piloted on two non-critical services running on EKS."
  - date: "2022-09"
    ring: assess
    description: "Initial evaluation for container orchestration needs."
---

Kubernetes is our standard container orchestration platform. We run production workloads on managed Kubernetes clusters (EKS) and use it for both stateless and stateful applications.
