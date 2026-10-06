# Azure Windows Server Web Hosting — E-Commerce Platform

A web hosting and deployment project demonstrating how to **provision a Windows Server 2019 virtual machine on Microsoft Azure, configure IIS, deploy a frontend web application, and manage the server using Azure CLI, PowerShell, and Remote Desktop**.

The project combines a frontend application built with **HTML, CSS, and JavaScript** with practical **Azure infrastructure and Windows Server administration**.

---

## Recruiter Summary

**This project demonstrates hands-on experience deploying and hosting a web application on Microsoft Azure using a Windows Server 2019 virtual machine and IIS.** The environment was provisioned with **Azure CLI**, configured through **PowerShell**, accessed through **Remote Desktop**, and monitored using **IIS logs and Windows Event Viewer**. The project also demonstrates Git/GitHub-based source control and practical Windows web-server administration.

---

# Architecture

```text
                         Internet
                            │
                            ▼
                    Azure Public IP
                            │
                            ▼
                ┌──────────────────────┐
                │   Azure Windows VM   │
                │                      │
                │  Windows Server 2019│
                │                      │
                │        IIS           │
                └──────────┬───────────┘
                           │
                           ▼
                ┌──────────────────────┐
                │ E-Commerce Website   │
                │                      │
                │ HTML                 │
                │ CSS                  │
                │ JavaScript           │
                └──────────────────────┘


Administration:

Administrator
      │
      │ Remote Desktop
      ▼
Azure Windows Server VM
      │
      ▼
IIS / PowerShell
```

---

# Technology Stack

| Area                  | Technology                          |
| --------------------- | ----------------------------------- |
| Cloud Platform        | Microsoft Azure                     |
| Compute               | Azure Virtual Machine               |
| Operating System      | Windows Server 2019                 |
| Web Server            | Internet Information Services (IIS) |
| Frontend              | HTML, CSS, JavaScript               |
| Cloud Management      | Azure CLI                           |
| Server Administration | PowerShell                          |
| Remote Administration | Remote Desktop (RDP)                |
| Troubleshooting       | IIS Logs, Windows Event Viewer      |
| Version Control       | Git                                 |
| Source Repository     | GitHub                              |

---

# Project Overview

The project consists of a frontend e-commerce website containing:

* Responsive product catalog
* Product pages
* Shopping cart functionality
* Frontend interactivity using JavaScript

The application files include:

```text
homepage.html
products.html
styles.css
script.js
```

The website was then deployed to a **Windows Server 2019 virtual machine running in Azure**, with IIS configured as the web server.

---

# Azure Infrastructure

The hosting environment is based on an Azure Virtual Machine running Windows Server 2019.

```text
Azure
 │
 └── Resource Group
       │
       └── Windows Server 2019 VM
              │
              ├── Public IP
              │
              ├── Network Interface
              │
              └── IIS
                    │
                    └── E-Commerce Website
```

The VM was provisioned using the Azure CLI.

---

# Provisioning the Azure VM

Authenticate with Azure:

```bash
az login
```

Create the resource group:

```bash
az group create \
  --name <RESOURCE_GROUP> \
  --location eastus
```

Create the Windows Server 2019 VM:

```bash
az vm create \
  --resource-group <RESOURCE_GROUP> \
  --name <VM_NAME> \
  --image win2019datacenter \
  --admin-username <ADMIN_USERNAME> \
  --admin-password '<STRONG_PASSWORD>' \
  --size Standard_D2s_v3 \
  --authentication-type password \
  --public-ip-sku Standard
```

> **Security note:** Never commit real VM passwords, API keys, connection strings, or other credentials to source control. The values above are placeholders.

---

# Remote Administration

After provisioning the VM, its public IP can be retrieved using Azure CLI:

```bash
az vm list-ip-addresses \
  --resource-group <RESOURCE_GROUP> \
  --name <VM_NAME> \
  --output table
```

The public IP can then be used to establish a Remote Desktop connection to the Windows Server environment.

The administration workflow is:

```text
Azure CLI
    │
    ▼
Azure VM
    │
    ▼
Windows Server 2019
    │
    ▼
Remote Desktop
    │
    ▼
Server Administration
```

---

# IIS Web Server Configuration

Internet Information Services (IIS) was configured as the web server on Windows Server 2019.

IIS can be installed through Server Manager or PowerShell.

### Install IIS with PowerShell

Run PowerShell as Administrator:

```powershell
Install-WindowsFeature -Name Web-Server -IncludeManagementTools
```

Restart the IIS service:

```powershell
Restart-Service W3SVC
```

Verify IIS by opening:

```text
http://localhost/
```

A successful installation displays the default IIS welcome page.

---

# Deploying the Website

The application files are copied to:

```text
C:\inetpub\wwwroot\ecommerce-platform
```

The website contains:

```text
ecommerce-platform/
│
├── homepage.html
├── products.html
├── styles.css
├── script.js
└── images/
    ├── shoes/
    ├── bags/
    └── wristwatches/
```

The IIS website is configured with:

```text
Site Name: E-Commerce Platform

Physical Path:
C:\inetpub\wwwroot\ecommerce-platform

Binding:
HTTP

Port:
80
```

---

# Application Structure

```text
E-Commerce-Platform/
│
├── homepage.html
│
├── products.html
│
├── styles.css
│
├── script.js
│
├── vmfile
│
└── README.md
```

The frontend uses:

### HTML

Provides the structure and content of the website.

### CSS

Provides the layout, styling, and responsive presentation.

### JavaScript

Provides client-side interactivity and shopping-cart functionality.

---

# Deployment Workflow

The complete deployment process can be summarized as:

```text
Frontend Development
        │
        ▼
Git / GitHub
        │
        ▼
Azure CLI
        │
        ▼
Create Resource Group
        │
        ▼
Provision Windows Server 2019 VM
        │
        ▼
Connect through RDP
        │
        ▼
Install IIS
        │
        ▼
Configure IIS Website
        │
        ▼
Copy Application Files
        │
        ▼
Configure Port 80
        │
        ▼
Test Website
        │
        ▼
Monitor Logs
```

---

# Testing

After configuring IIS, the website can be tested through the VM's public IP:

```text
http://<VM_PUBLIC_IP>
```

Testing verifies that:

* The Azure VM is reachable
* Windows Server is running
* IIS is running
* The website files are correctly deployed
* IIS is serving the application
* HTTP traffic reaches the web server

---

# Troubleshooting & Operations

Troubleshooting is performed using Windows and IIS administration tools.

## IIS Logs

IIS logs can be inspected when investigating:

* HTTP errors
* Request failures
* Website availability
* Server responses
* Application access issues

---

## Windows Event Viewer

Windows Event Viewer provides additional operating-system and application-level diagnostic information.

```text
Website Issue
     │
     ▼
Check IIS
     │
     ▼
Check IIS Logs
     │
     ▼
Check Event Viewer
     │
     ▼
Identify Failure
     │
     ▼
Apply Configuration Fix
     │
     ▼
Retest Website
```

This provides practical experience troubleshooting a Windows-based web hosting environment.

---

# Server Administration

The Windows Server environment was managed using both graphical and command-line administration tools.

### Azure CLI

Used for cloud-side operations such as:

```bash
az login
az group create
az vm create
az vm list-ip-addresses
```

### PowerShell

Used for Windows Server configuration and IIS administration:

```powershell
Install-WindowsFeature -Name Web-Server -IncludeManagementTools
Restart-Service W3SVC
```

### Remote Desktop

Used to access the Windows Server environment for administration and deployment.

---

# Version Control

Git and GitHub are used to maintain the project source code.

```text
Local Development
       │
       ▼
      Git
       │
       ▼
    GitHub
       │
       ▼
Version-controlled
Application
```

The repository contains the frontend application together with the deployment documentation.

---

# Infrastructure & Administration Skills Demonstrated

## Azure

* Azure Virtual Machines
* Azure Resource Groups
* Azure CLI
* Public IP configuration
* Windows Server workloads

## Windows Server

* Windows Server 2019
* Remote Desktop administration
* PowerShell
* IIS installation
* IIS website configuration
* Windows Event Viewer

## Web Hosting

* IIS
* Website deployment
* HTTP bindings
* Application file deployment
* Web-server troubleshooting
* IIS log analysis

## Development

* HTML
* CSS
* JavaScript
* Git
* GitHub

---

# Key Engineering Lessons

### 1. Cloud provisioning and server configuration are separate responsibilities

Creating an Azure VM is only the infrastructure provisioning stage.

The server still needs to be configured and prepared to host the application.

```text
Azure VM
   ↓
Windows Server
   ↓
IIS
   ↓
Website Configuration
   ↓
Application Deployment
```

---

### 2. Web-server configuration is part of application deployment

A working application does not automatically mean a working web deployment.

IIS needs to be correctly configured with:

* Website path
* Binding
* Port
* Application files
* Running web service

---

### 3. Troubleshooting requires multiple layers

A website availability problem can originate at different layers:

```text
Internet
   ↓
Azure VM
   ↓
Windows Server
   ↓
IIS
   ↓
Website Configuration
   ↓
Application Files
```

Using Azure CLI, PowerShell, IIS logs, and Event Viewer provides multiple ways to investigate problems.

---

### 4. Source control should contain code, not secrets

Cloud credentials and server passwords should never be committed to Git repositories.

Sensitive values should instead be supplied securely during deployment.

---

# Project Outcomes

This project demonstrates the ability to:

* Provision an Azure Windows Server VM
* Manage Azure resources through Azure CLI
* Configure Windows Server 2019
* Install and configure IIS
* Deploy a frontend application to IIS
* Configure an IIS website and HTTP binding
* Administer Windows Server using PowerShell
* Access Azure VMs through Remote Desktop
* Troubleshoot IIS-hosted applications
* Inspect IIS logs and Windows Event Viewer
* Manage source code using Git and GitHub

---

# Project Status

| Area                             | Status   |
| -------------------------------- | -------- |
| Frontend application             | Complete |
| Azure VM provisioning            | Complete |
| Windows Server 2019 deployment   | Complete |
| IIS installation                 | Complete |
| IIS website configuration        | Complete |
| Application deployment           | Complete |
| Azure CLI deployment workflow    | Complete |
| PowerShell administration        | Complete |
| RDP administration               | Complete |
| IIS/Event Viewer troubleshooting | Complete |
| Git/GitHub version control       | Complete |

---

# Project Focus

This project focuses on the practical relationship between:

```text
Azure Cloud
     +
Windows Server
     +
IIS
     +
PowerShell
     +
Web Hosting
     +
Troubleshooting
```

It provides a foundation for understanding how traditional Windows-based web workloads are deployed and managed in Azure.

---

# Author

**Mojeed Tijani**

Cloud Engineer (Azure)

### Certifications

* **AZ-104** — Microsoft Azure Administrator
* **KCNA** — Kubernetes and Cloud Native Associate
* **FinOps Certified Engineer**

---

## Repository

**GitHub:** `mojeed-88/E-Commerce-Platform`

**Primary focus:** Azure VM • Windows Server • IIS • Azure CLI • PowerShell • Web Hosting • Troubleshooting
