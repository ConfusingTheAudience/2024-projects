const getBadges = (ratingsCount) => {
  let badges;
  if (ratingsCount <= 4) badges = "New User";
  if (ratingsCount >= 5) badges = "Newbie";
  if (ratingsCount >= 10) badges = "Voter";
  if (ratingsCount >= 15) badges = "Master";
  if (ratingsCount >= 15) badges = "Veteran";
  if (ratingsCount >= 20) badges = "Expert";
  if (ratingsCount >= 25) badges = "Legendary";
  return badges;
};

module.exports = { getBadges };
