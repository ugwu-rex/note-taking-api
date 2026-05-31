const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

//logger
const logger = require("./middleware/logger");
app.use(logger);

// Routes
app.use("/api/notes", require("./routes/noteRoutes"));

// for route testing
app.get("/", (req: any, res: any) => {
  res.send("Note-Taking API is running");
});

// Error handler
const { errorHandler } = require("./middleware/errorHandler");
app.use(errorHandler);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err: any) => console.error("MongoDB connection error:", err));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
