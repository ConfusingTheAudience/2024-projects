import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginRegisterPage from "./LoginRegisterPage";

const Authentication = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const getUsernameEmail = (email) => {
    setUserEmail(email);
  };

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
        <Dashboard loggedUsername={userName} loggedEmail={userEmail} onLogout={handleLogout} />
      ) : (
        <LoginRegisterPage onLoginSuccess={handleLoginSuccess} getUsernameEmail={getUsernameEmail}/>
      )}
    </div>
  );
};

export default Authentication;
