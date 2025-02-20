# E-Commerce-Platform
Design, Development, and Deployment of a Scalable E-Commerce Website Using HTML, CSS, and JavaScript, Hosted on a Windows Server 2019 Virtual Machine with IIS as the Web Server
# Introduction
Developing and deploying a scalable e-commerce platform requires a robust architecture, efficient development practices, and a reliable hosting environment. In this project, I successfully built an e-commerce platform using HTML, CSS, and JavaScript and deployed it on a Windows Server 2019 environment using Internet Information Services (IIS). This article outlines the end-to-end process, from development to deployment.
# Tech Stack
Frontend: HTML, CSS, JavaScript
Hosting Server: Windows Server 2019
Web Server: Internet Information Services (IIS)
Version Control: Git and GitHub
# Project Overview
The e-commerce platform includes essential features such as:
a. Responsive product catalog
b. Shopping cart functionality
c. User authentication 
# Development Process
1. Setting Up the Project Structure
I organized the project with the following structure:

```/ecommerce-platform
│
├── index.html          (Home Page)
├── products.html       (Products Page)
├── styles.css          (CSS for styling)
├── script.js           (JavaScript for interactivity)
├── images/             (Folder for images)
│   ├── shoes/
│   ├── bags/
│   └── wristwatches/

2. Building the Frontend
The frontend was developed using HTML for structure, CSS for styling, and JavaScript for interactivity.(find the html,css, and js in the E-Commercr Platform folder)
3. Deployed Windows Server 2019 VM on Azure using Azure CLI
# Install Azure CLI If you haven’t already
After installation of the Azure CLI,
a. log In to Your Azure Account by run command:
az login
b. Create a Resource Group by run the command:
az group create --name Mojeedrg --location eastus
c. After creating your Resource Group, Use the command below to Create the Windows Server 2019 VM:

az vm create \
  --resource-group Mojeedrg \
  --name mojvm \
  --image win2019datacenter \
  --admin-username tiani \
  --admin-password 'iusedstrongpwd125@' \
  --size Standard_D2s_v3 \
  --authentication-type password \
  --public-ip-sku Standard

Note: Replace 'iusedstrongpwd125@' with a secure password of your choice.

d. Allow RDP Access: The above command automatically sets up an inbound rule for RDP. If needed, you can manually open port 3389 using:
az vm open-port --port 3389 --resource-group Mojeedrg --name Mojvm
e. Connect to Your VM
Once the VM is created, retrieve its public IP address:
az vm list-ip-addresses --resource-group Mojeedrg --name Mojvm --output table
f. Use the Public IP address to connect via Remote Desktop from your local machine.

4. Hosting on Windows Server 2019 with IIS
a. Step 1: Install a Web-server (IIS) on the Windows Server 2019 VM 
i.  Open Server Manager > Manage > Add Roles and Features.
ii. Select Web Server (IIS) and complete the installation.

Alternatively, you can install the web server using by open the PowerShell on Windows server 2019 vm and run as Administrator, after the PowerShell terminal has opened, run the following scripts to install web servsr (IIS) automatically:

# To Install Web Server (IIS) Run:
Install-WindowsFeature -name Web-Server -IncludeManagementTools

## To restart service Run:
Restart-Service W3SVC

## Confirm your Installation
To check if IIS is installed on your Windows Server, open a web browser and enter http://localhost/ in the address bar. If IIS is installed and running, you should see the default IIS welcome page.
 
b. Step 2: Deploy the Web Files
i.   Copy the E-Commerce files to C:\inetpub\wwwroot\ecommerce-platform.
ii.  Open IIS Manager and add a new website:
iii. Set Site Name: E-Commerce Platform
iv.  Choose the Physical Path: C:\inetpub\wwwroot\ecommerce-platform
v.   Set the Binding: HTTP, Port 80
vi.  Start the site.

5. Testing and Deployment
a. Open a browser and access http://your-server-ip to verify the deployment.
b. Monitor logs via Event Viewer and IIS logs for debugging.

6. Version Control and GitHub: To ensure version control, I used Git and GitHub

# Conclusion
By leveraging HTML, CSS, and JavaScript for development and deploying via IIS on Windows Server 2019, I successfully built a scalable e-commerce platform. This project demonstrates the fundamentals of web hosting and deployment in a Windows environment, offering a structured approach for future web applications.






