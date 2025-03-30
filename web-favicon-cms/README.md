# **Favicon CMS - Dynamic Favicon Management System** 🖼️🚀  

A **simple, local CMS** for dynamically updating the **favicon** of a website through an **admin panel**. Built using **Node.js, Express.js, Multer, and JavaScript**, this system allows an **admin to upload a new favicon** that will be **instantly reflected** on both the admin and user websites—**without third-party services**.  

---

## **📌 Features**  

✅ **Admin Panel**: Upload `.ico` favicon via a simple UI  
✅ **Real-Time Update**: Favicon updates dynamically every 5 seconds  
✅ **No Third-Party Services**: Fully local solution  
✅ **Simple Authentication**: Prevents unauthorized uploads  
✅ **Cache Bypass**: Forces browsers to refresh the favicon  

---

## **🛠️ Tech Stack**  

| Tech        | Purpose |
|-------------|---------|
| **HTML/CSS/JS** | Frontend for Admin & User Panels |
| **Node.js + Express.js** | Backend API & static file serving |
| **Multer** | File upload handling |
| **JavaScript** | Auto-refreshing favicon |
| **Local Storage** | Saves uploaded favicon in `public/` |

---

## **📂 Project Structure**  

favicon-cms/ │── admin/ # Admin Panel (Frontend) │ ├── index.html │ ├── style.css │ ├── script.js │ │── user/ # User Website (Frontend) │ ├── index.html │ ├── style.css │ ├── script.js │ │── public/ # Stores uploaded favicon.ico │ ├── favicon.ico # Default favicon │ │── server.js # Backend (Node.js + Express) │── package.json # Node dependencies │── README.md # Documentation


---

## **🚀 How to Run Locally**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/favicon-cms.git
cd favicon-cms

2️⃣ Install Dependencies
npm install
