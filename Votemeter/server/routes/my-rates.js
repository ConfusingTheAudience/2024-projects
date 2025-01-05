const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/auth");
const users = require("../data/users");
const { games } = require("../data/games");
const { music } = require("../data/music");
const { art } = require("../data/art");
const { getBadges } = require("../data/badges");

// URL
router.get("/", checkAuth, (req, res) => {
  const user = req.session.user;

  // Badges based on total ratings made by user
  const userRatingsCount = user.ratings.length;

  // Badges use
  const userBadges = getBadges(userRatingsCount);

  // Last 3 activity to show
  const lastActivity = user.ratings.slice(-3);

  res.render("my-rates", { user: user, ratings: user.ratings || [], userBadges, lastActivity });
});

// API
router.delete("/my-rates/:item", (req, res) => {
  const { item } = req.params; // Game name, music or art
  const user = req.session.user;

  // Check if user exists by id but could be also by username or email
  const currentUser = users.find((u) => u.id === user.id);

  if (!currentUser) {
    return res.status(404).json({ message: "User not found." });
  }

  // Find the index of the rating for this item
  const ratingIndex = currentUser.ratings.findIndex(
    (rating) => rating.item === item
  );

  if (ratingIndex === -1) {
    return res.status(404).json({ message: "Rating not found." });
  }

  // Remove the rating from the user's ratings
  const removedRating = currentUser.ratings.splice(ratingIndex, 1)[0];

  // Now update the corresponding object (game, music, or art)
  let foundObject;
  if (currentUser.category === "games") {
    foundObject = games.find((obj) => obj.name === item);
  } else if (currentUser.category === "music") {
    foundObject = music.find((obj) => obj.name === item);
  } else if (currentUser.category === "art") {
    foundObject = art.find((obj) => obj.name === item);
  }

  if (foundObject) {
    // Remove the rating from the object's ratings
    const userRatingIndex = foundObject.ratings.findIndex(
      (rating) => rating === removedRating.rating
    );
    if (userRatingIndex !== -1) {
      foundObject.ratings.splice(userRatingIndex, 1);
      foundObject.totalRatings -= 1;
    }
    // Delete the user from the usersRated object
    delete foundObject.usersRated[currentUser.username];
  }

  req.session.user = currentUser;

  return res.status(200).json({ message: "Rating deleted successfully." });
});

module.exports = router;
