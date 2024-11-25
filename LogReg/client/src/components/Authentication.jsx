import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginRegisterPage from "./LoginRegisterPage";

const Authentication = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setShowDashboard(true);
  };

  const handleLogout = () => {
    setUserName("");
    setShowDashboard(false);
  };

  return (
    <div>
      {showDashboard ? (
        <Dashboard loggedUsername={userName} onLogout={handleLogout} />
      ) : (
        <LoginRegisterPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Authentication;
