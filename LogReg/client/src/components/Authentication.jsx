import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginRegisterPage from "./LoginRegisterPage";

const Authentication = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      {showDashboard ? (
        <Dashboard />
      ) : (
        <LoginRegisterPage onLoginSuccess={setShowDashboard} />
      )}
    </div>
  );
};

export default Authentication;
