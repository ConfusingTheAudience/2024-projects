import React, { useState } from "react";
import Dashboard from "./Dashboard";
import LoginRegisterPage from "./LoginRegisterPage";

const Authentication = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameEmail, setUserNameEmail] = useState("");

  const getUsernameEmail = (email) => {
    setUserNameEmail(email);
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
        <Dashboard loggedUsername={userName} loggedUsernameEmail={userNameEmail} onLogout={handleLogout} />
      ) : (
        <LoginRegisterPage onLoginSuccess={handleLoginSuccess} getUsernameEmail={getUsernameEmail}/>
      )}
    </div>
  );
};

export default Authentication;
