import express from "express";
import dotenv from "dotenv";
import { sequelizeConfig } from "./config/sequelize.config.mjs";
import morgan from "morgan";
import bodyParser from "body-parser";

// import route
import adminRoute from "./routes/admin.route.mjs";
import authRoute from "./routes/auth.route.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));


app.use(adminRoute);
app.use(authRoute);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    message: "can not found url !!!",
  });
});


// connect to dabatabse
sequelizeConfig
  .sync({ alter: true })
  .then(() => {
    console.clear();
    app.listen(PORT, () => {
      console.log(`App running in PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Can not connect to Database");
    console.log(err);
  });
