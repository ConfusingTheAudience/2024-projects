const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middleware/auth");
const users = require("../data/users");
const { games } = require("../data/games");
const { music } = require("../data/music");
const { art } = require("../data/art");
const { validateProfileUpdate } = require("../middleware/profileUpdateValidation");

// URL
router.get("/", checkAuth, (req, res) => {
  const user = req.session.user;

  const totalUsers = users.length;
  const sameCategoryUsers = users.filter((u) => u.category === user.category);
  const sortedUsers = sameCategoryUsers.sort(
    (a, b) => b.ratings.length - a.ratings.length
  );
  const userRank =
    sortedUsers.findIndex((u) => u.username === user.username) + 1;

  res.render("profile", {
    user,
    userRank,
    totalUsers,
    totalUsersInCategory: sameCategoryUsers.length,
  });
});

// API
router.post("/profile/delete-votes", (req, res) => {
  const user = req.session.user;
  if (!user) {
    return res.status(401).json({ error: "User not logged in" });
  }

  const category = user.category; // "games", "music", "art"
  let categoryData;

  if (category === "games") {
    categoryData = games;
  } else if (category === "music") {
    categoryData = music;
  } else if (category === "art") {
    categoryData = art;
  } else {
    return res.status(400).json({ error: "Invalid category" });
  }

  const userIndex = users.findIndex((u) => u.username === user.username);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  user.ratings.forEach((rating) => {
    const findSpecificItem = rating.item;
    const specificItem = categoryData.find(
      (item) => item.name === findSpecificItem
    );

    if (specificItem) {
      const userIndexInRatings = specificItem.ratings.findIndex(
        (r) => r === rating.rating
      );
      if (userIndexInRatings !== -1) {
        specificItem.ratings.splice(userIndexInRatings, 1);
        specificItem.totalRatings--;
        delete specificItem.usersRated[user.username];
      }
    }
  });

  users[userIndex].ratings = [];
  req.session.user = users[userIndex];

  res.json({ message: "Votes deleted successfully", categoryData });
});

router.post("/profile/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Could not log out.");
    }
    res.redirect("/");
  });
});

router.post("/profile/update-profile", validateProfileUpdate, (req, res) => {
  const { email, username } = req.body;
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ error: "User not logged in" });
  }

  const index = users.findIndex((u) => u.username === user.username);

  if (index === -1) {
    return res.status(404).json({ error: "User not found in database" });
  }

  if (email && email !== user.email) {
    user.email = email;
  }
  if (username && username !== user.username) {
    const oldUsername = user.username;
    user.username = username; 
    const category = user.category; 

    let categoryData;
    if (category === "games") {
      categoryData = games; 
    } else if (category === "music") {
      categoryData = music; 
    } else if (category === "art") {
      categoryData = art; 
    } else {
      return res.status(400).json({ error: "Unknown category" });
    }

    // set new username to his category items and delete the old ones
    categoryData.forEach((item) => {
      if (item.usersRated[oldUsername]) {
        item.usersRated[username] = item.usersRated[oldUsername]; 
        delete item.usersRated[oldUsername]; 
      }
    });
  }

  users[index] = user;

  req.session.user = user;

  res.json({
    user: user,
  });
});

module.exports = router;

// NOTE
// If I update the username I have to perform this udpate not only on the users file but also on the category that is assigned to that user, because it records there who gave the grade for the item (fe. data/games.js)
