const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.use("/api/notes", require("./routes/noteRoutes"));



// for route testing
app.get("/", (req: any, res: any) => {
  res.send("Note-Taking API is running");
});

const { errorHandler } = require("./middleware/errorHandler");
app.use(errorHandler);


// connection to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err: any) => console.error("MongoDB connection error:", err));

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
