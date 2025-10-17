import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Example valid codes
const validCodes = ["ACCESS123", "WINYOUTH2025", "SPACEMATTERS"];

// POST /verify endpoint
app.post("/verify", (req, res) => {
  const { code, nickname } = req.body;
  if (validCodes.includes(code)) {
    console.log(`✅ Access granted for ${nickname}`);
    return res.json({ success: true });
  }
  console.log(`❌ Invalid code: ${code}`);
    res.json({ success: false });
});

// Basic check route
app.get("/", (req, res) => {
  res.send("SpaceMatters verification API is online 🚀");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
