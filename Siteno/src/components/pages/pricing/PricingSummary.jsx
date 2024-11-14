// PricingSummary.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPlanDetailsAndPrice } from "./pricingUtils";
import PricingRadioButton from "./PricingRadioButton"; // Importujemy komponent
import "./pricing.css";

const PricingSummary = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("once");
  const [selectedPaymentBy, setSelectedPaymentBy] = useState("Card");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);

    if (event.target.value === "basic") {
      setSelectedPayment("once");
    } else if (
      event.target.value === "standard" &&
      selectedPayment === "year"
    ) {
      setSelectedPayment("once");
    }
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handlePaymentByChange = (event) => {
    setSelectedPaymentBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const location = useLocation();
  const { plan } = location.state || {};

  useEffect(() => {
    if (plan) {
      setSelectedPlan(plan);
    }
  }, [plan]);

  const { planDetails, price } = getPlanDetailsAndPrice(selectedPlan, selectedPayment);

  return (
    <div className="summary">
      <div className="summary-container">
        <h1 className="summary-title">Plan Summary</h1>
        <p className="summary-description">{planDetails}</p>
      </div>
      <div className={isSubmitted ? "submit-center" : "submit-end"}>
        {isSubmitted ? (
          <span>
            Choosed Plan:{" "}
            <span className="hightlight-order">{selectedPlan}</span>, Payment
            by: <span className="hightlight-order">{selectedPayment}</span>{" "}
            <span className="hightlight-order">${price}</span> with{" "}
            <span className="hightlight-order">{selectedPaymentBy}</span>
          </span>
        ) : (
          <div className="submit-box">
            <h1 className="submit-title">Your order</h1>
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <h2 className="detail-title">Plan</h2>

                <PricingRadioButton
                  id="option-plan-1"
                  name="plan"
                  value="basic"
                  checked={selectedPlan === "basic"}
                  onChange={handlePlanChange}
                  label="Basic"
                />
                <PricingRadioButton
                  id="option-plan-2"
                  name="plan"
                  value="standard"
                  checked={selectedPlan === "standard"}
                  onChange={handlePlanChange}
                  label="Standard"
                />
                <PricingRadioButton
                  id="option-plan-3"
                  name="plan"
                  value="premium"
                  checked={selectedPlan === "premium"}
                  onChange={handlePlanChange}
                  label="Premium"
                />
              </div>

              <div>
                <h2 className="detail-title">Payment</h2>

                <PricingRadioButton
                  id="option-payment-1"
                  name="payment"
                  value="once"
                  checked={selectedPayment === "once"}
                  onChange={handlePaymentChange}
                  label="Once"
                />
                <PricingRadioButton
                  id="option-payment-2"
                  name="payment"
                  value="month"
                  checked={selectedPayment === "month"}
                  onChange={handlePaymentChange}
                  disabled={selectedPlan === "basic"}
                  label="By Month"
                />
                <PricingRadioButton
                  id="option-payment-3"
                  name="payment"
                  value="year"
                  checked={selectedPayment === "year"}
                  onChange={handlePaymentChange}
                  disabled={selectedPlan === "basic" || selectedPlan === "standard"}
                  label="By Year"
                />
              </div>

              <div>
                <h2 className="detail-title">How you gonna pay</h2>

                <PricingRadioButton
                  id="option-paymentBy-1"
                  name="paymentBy"
                  value="PayPal"
                  checked={selectedPaymentBy === "PayPal"}
                  onChange={handlePaymentByChange}
                  label="PayPal"
                />
                <PricingRadioButton
                  id="option-paymentBy-2"
                  name="paymentBy"
                  value="Card"
                  checked={selectedPaymentBy === "Card"}
                  onChange={handlePaymentByChange}
                  label="By Card"
                />
              </div>

              <div className="price">
                <h3>Total Price: ${price}</h3>
                <button
                  type="submit"
                  className="btn form-btn"
                  disabled={!selectedPlan}
                >
                  {!selectedPlan ? "Choose plan" : "Accept"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSummary;
