const express = require("express");
const testRoutes = require("./routes/testRoutes"); // Fix typo here
const dotenv = require("dotenv");
const calculatorRoutes = require("./routes/calcRoutes");
dotenv.config();
const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined
// Route setup
app.use("/tests", testRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/home", express.static("public")); // Serve static files from 'public' on '/home'
// Catch-all route
app.use("/", (req, res) => {
  res.send("Hello");
});
// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
