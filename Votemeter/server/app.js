const express = require("express");
const session = require("express-session");
const users = require("./data/users");
const homeRoutes = require("./routes/home");
const profileRoutes = require("./routes/profile");
const discoverRoutes = require("./routes/discover");
const ratingsRoutes = require("./routes/my-rates");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const { games } = require("./data/games");
const { music } = require("./data/music");
const { art } = require("./data/art");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultSecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  "/assets",
  express.static("node_modules/@flaticon/flaticon-uicons/css")
);
app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "views");

// URL ROUTES
app.use("/", homeRoutes);
app.use("/profile", profileRoutes);
app.use("/discover", discoverRoutes);
app.use("/my-rates", ratingsRoutes);
app.use("/login", loginRoutes);
app.use("/register", registerRoutes);

// API ROUTES
app.use("/api", profileRoutes);
app.use("/api", discoverRoutes);
app.use("/api", ratingsRoutes);
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);

// FOR TEST PURPOSES
app.get("/usersList", (req, res) => {
  res.send(users);
});

app.get("/gamesList", (req, res) => {
  res.send(games);
});

app.get("/musicsList", (req, res) => {
  res.send(music);
});

app.get("/artsList", (req, res) => {
  res.send(art);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
