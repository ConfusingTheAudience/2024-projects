// pricingUtils.js (nowy plik pomocniczy)
export const getPlanDetailsAndPrice = (selectedPlan, selectedPayment) => {
  let planDetails = "";
  let price = 0;

  switch (selectedPlan) {
    case "basic":
      planDetails =
        "You have selected the Basic Plan. Includes one site, hosting, and domain.";
      price = 30;
      break;
    case "standard":
      planDetails =
        "You have selected the Standard Plan. Includes three sites, standard help, and security check.";
      if (selectedPayment === "once") {
        price = 70;
      } else if (selectedPayment === "month") {
        price = 120;
      }
      break;
    case "premium":
      planDetails =
        "You have selected the Premium Plan. Includes unlimited sites, 24/7 support, high-risk security, and more.";
      if (selectedPayment === "once") {
        price = 150;
      } else if (selectedPayment === "month") {
        price = 210;
      } else if (selectedPayment === "year") {
        price = 260;
      }
      break;
    default:
      planDetails = "No plan selected.";
      price = 0;
  }

  return { planDetails, price };
};
