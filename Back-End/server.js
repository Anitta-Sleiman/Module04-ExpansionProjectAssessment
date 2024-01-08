import dotenv from "dotenv";
dotenv.config();
import express from "express";
import sequelize from "./config/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import errorHandler from "./Middleware/hand.js";

//routes
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);


//connecting to db
sequelize.sync({ force: false});

app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  try {
    console.log(`The server is connected on Port: ${port}`);
  } catch (error) {
    console.log(error);
  }
});
