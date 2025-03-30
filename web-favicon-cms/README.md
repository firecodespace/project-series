<h1>Favicon CMS - Dynamic Favicon Management System 🖼️🚀</h1>
A simple, local CMS for dynamically updating the favicon of a website through an admin panel. Built using Node.js, Express.js, Multer, and JavaScript, this system allows an admin to upload a new favicon that will be instantly reflected on both the admin and user websites—without third-party services.

📌 Features
✅ Admin Panel: Upload .ico favicon via a simple UI
✅ Real-Time Update: Favicon updates dynamically every 5 seconds
✅ No Third-Party Services: Fully local solution
✅ Simple Authentication: Prevents unauthorized uploads
✅ Cache Bypass: Forces browsers to refresh the favicon

<h2>🛠️ Tech Stack</h2>
Tech	Purpose
HTML/CSS/JS	Frontend for Admin & User Panels
Node.js + Express.js	Backend API & static file serving
Multer	File upload handling
JavaScript	Auto-refreshing favicon
Local Storage	Saves uploaded favicon in public/
📂 Project Structure
pgsql
Copy
Edit
favicon-cms/
│── admin/                # Admin Panel (Frontend)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
│── user/                 # User Website (Frontend)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
│── public/               # Stores uploaded favicon.ico
│   ├── favicon.ico       # Default favicon
│
│── server.js             # Backend (Node.js + Express)
│── package.json          # Node dependencies
│── README.md             # Documentation
🚀 How to Run Locally
1️⃣ Clone the Repository
sh
Copy
Edit
<code>git clone https://github.com/yourusername/favicon-cms.git</code>
cd favicon-cms
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Start the Server
sh
Copy
Edit
node server.js
Server runs on: http://localhost:5000/

URL	Function
http://localhost:5000/admin/	Admin Panel (Upload Favicon)
http://localhost:5000/user/	User Website (See Updated Favicon)
🖼️ How It Works
1️⃣ Open Admin Panel → Go to http://localhost:5000/admin/
2️⃣ Choose an .ico file → Click Upload
3️⃣ Success Message Appears ✅
4️⃣ User Website updates automatically → http://localhost:5000/user/
5️⃣ Favicon changes for both sites in real-time 🎉

🔧 Core Functionality Explained
📌 1. Express.js - Serving Static Files
javascript
Copy
Edit
app.use(express.static("public"));
app.use("/admin", express.static("admin"));
app.use("/user", express.static("user"));
Admin & User sites are served as static files

Uploaded favicons are stored in public/favicon.ico

📌 2. Multer - Handling File Uploads
javascript
Copy
Edit
const storage = multer.diskStorage({
  destination: "public",
  filename: (req, file, cb) => cb(null, "favicon.ico"),
});
const upload = multer({ storage });
Saves every uploaded favicon as favicon.ico

Automatically replaces the old one

📌 3. Admin Panel - Uploading the Favicon
javascript
Copy
Edit
fetch("http://localhost:5000/upload", {
    method: "POST",
    headers: { "Authorization": "Bearer secret123" },
    body: formData,
})
Sends the selected .ico file to the server

Uses a secret key to prevent unauthorized uploads

📌 4. User Website - Auto-Refreshing Favicon
javascript
Copy
Edit
function refreshFavicon() {
    const favicon = document.getElementById("favicon");
    const timestamp = new Date().getTime();
    favicon.href = `/favicon.ico?${timestamp}`;
}
setInterval(refreshFavicon, 5000);
Forces favicon reload every 5 seconds to bypass caching

🔐 Security (Basic Authentication)
javascript
Copy
Edit
app.post("/upload", (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization !== "Bearer secret123") {
        return res.status(403).json({ message: "Unauthorized!" });
    }
    next();
}, upload.single("favicon"), (req, res) => {
    res.json({ message: "Favicon updated successfully!" });
});
Prevents unauthorized access using a secret key

Only requests with "Bearer secret123" are allowed

🛠️ Possible Improvements
🚀 Multi-Favicon History → Store old favicons and allow switching
🔑 Admin Authentication → Real login system instead of a simple key
🌍 Deploy Online → Host on VPS, DigitalOcean, or Heroku
📱 Mobile Optimization → Improve UI for mobile users

📜 License
This project is open-source under the MIT License. Feel free to modify and improve!

👨‍💻 Author
Made with ❤️ by Your Name
