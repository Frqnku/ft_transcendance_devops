
# ft_transcendance_devops ⚙️🚀

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![ElasticSearch](https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)

---

## Overview

This repository focuses on the **DevOps** part of the *ft_transcendance* school project, delivering a secure, scalable, and robust infrastructure to support microservices.

---

## 🚀 My DevOps Contribution

I am responsible for designing and implementing the following solutions:

### 🔐 Authentication Service  
- Secure authentication based on **JWT**  
- Integration of **2FA** (Two-Factor Authentication) for enhanced access security  

### 🐳 Dockerization of Microservices  
- Full **containerization of microservices** to ensure portability and isolation  
- Optimized Docker images with multi-staging and light distro for production use  

### 🌐 Nginx with Reverse Proxy & WAF  
- Setup of a performant **Nginx reverse proxy** for request routing  
- Integration of **ModSecurity** as a Web Application Firewall (WAF) to protect against common web attacks  

### 🔐 SSL Certificate Management  
- Secure storage of SSL certificates using **HashiCorp Vault**  
- Automated certificate renewal and deployment  

### 📊 Advanced Monitoring  
- Comprehensive infrastructure monitoring with **Prometheus**  
- Custom dashboards visualization via **Grafana**  

### 📝 Centralized Logging  
- Log collection and processing with the **ELK stack** (Elasticsearch, Logstash, Kibana)  
- Simplified troubleshooting and security auditing  

---

## 📦 Architecture Summary

```
[Clients] -> [Nginx Reverse Proxy + ModSecurity WAF] -> [Dockerized Microservices]
                                           |
                              [HashiCorp Vault SSL Certificates]
                                           |
             [Monitoring (Prometheus + Grafana)] & [Logging (ELK Stack)]
```

---

## ⚙️ Key Technologies

| Feature                      | Technology                   |
|------------------------------|------------------------------|
| Authentication & Security    | JWT, 2FA                     |
| Containerization             | Docker                       |
| Proxy & Web Security         | Nginx, ModSecurity (WAF)     |
| SSL Certificate Management   | HashiCorp Vault              |
| Monitoring                   | Prometheus, Grafana          |
| Centralized Logging          | ELK Stack                    |

---

## 🔧 Installation & Deployment

This project is designed for deployment in a **Docker**-orchestrated environment.  
To get started quickly:

```bash
make up
```

---

## 📬 Contact & Contributions

Feel free to open an issue or submit a pull request to improve the DevOps components.

---

Thank you for checking out this repository!  
**Frqnku** – DevOps & Infrastructure Engineer 🔧🔥
