const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes.js");
const positionRoute = require("./routes/postionRoute.js");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/employee", employeeRoutes);
app.use("/api/postion", positionRoute);
const PORT = 8000;
app.listen(PORT, () => console.log(`✅Server running on port ${PORT}`));
