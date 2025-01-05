const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/auth");
const users = require("../data/users");
const { games, gamesCategory } = require("../data/games");
const { music, musicCategory } = require("../data/music");
const { art, artCategory } = require("../data/art");

let discoverItem;
let discoverCategory;

// URL
router.get("/", checkAuth, (req, res) => {
  const user = req.session.user;


  if (user.category === "games") {
    discoverItem = games;
    discoverCategory = gamesCategory;
  } else if (user.category === "music") {
    discoverItem = music;
    discoverCategory = musicCategory;
  } else if (user.category === "art") {
    discoverItem = art;
    discoverCategory = artCategory;
  }

  res.render("discover", { user, discoverItem, discoverCategory });
});

// API
router.post("/discover/rate-item", (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ error: "User not logged in" });
  }

  const { item, rating } = req.body;

  const index = users.findIndex((u) => u.username === user.username);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  // check if user already did vote on this item
  const existingRating = users[index].ratings.find((r) => r.item === item);
  if (existingRating) {
    existingRating.rating = rating;
  } else {
    users[index].ratings.push({ item, rating });
  }

  req.session.user = users[index];

  res.status(200).json({ message: `Rating added/updated to user account` });
});

router.post("/discover/add-rate", (req, res) => {
  const { item, rating } = req.body;
  // userId was prepared to use id from users.js but username is unique so I can use it aswell
  const userId = req.session.user ? req.session.user.username : null;

  if (!userId) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const userPickedCategory = discoverItem.find((g) => g.name === item);

  if (userPickedCategory) {
    if (userPickedCategory.usersRated[userId]) {
      const oldRating = userPickedCategory.usersRated[userId];
      const ratingIndex = userPickedCategory.ratings.indexOf(oldRating);

      if (ratingIndex > -1) {
        userPickedCategory.ratings.splice(ratingIndex, 1);
        userPickedCategory.totalRatings--;
      }
    }

    userPickedCategory.ratings.push(rating);
    userPickedCategory.totalRatings++;

    userPickedCategory.usersRated[userId] = rating;

    const avgRating = (
      userPickedCategory.ratings.reduce((acc, rating) => acc + rating, 0) /
      userPickedCategory.ratings.length
    ).toFixed(1);

    res.json({
      message: "Rating updated successfully",
      averageRating: avgRating,
      totalVotes: userPickedCategory.totalRatings,
    });
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});

module.exports = router;

// NOTE
// /discover/rate-item - here I add items to specific user in data/users.js -> ratings: []
// /discover/add-item - here I add items to specific category from data/games,music or art.js -> usersRated: []