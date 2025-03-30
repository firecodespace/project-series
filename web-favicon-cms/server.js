const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static files (favicon & admin/user sites)
app.use(express.static("public"));
app.use("/admin", express.static("admin"));
app.use("/user", express.static("user"));

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: "public",
    filename: (req, file, cb) => {
        cb(null, "favicon.ico"); // Always save as favicon.ico
    },
});

const upload = multer({ storage });

// Upload route (Admin uploads favicon)
app.post("/upload", upload.single("favicon"), (req, res) => {
    res.json({ message: "Favicon updated successfully!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
