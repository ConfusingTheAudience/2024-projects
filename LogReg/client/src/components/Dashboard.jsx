import React from "react";

const Dashboard = ({ loggedUsername, onLogout }) => {
  return (
    <div className="p-8">
      <h2 className="text-2xl">Hi, {loggedUsername}!</h2>
      <button
        onClick={onLogout}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Log out
      </button>
    </div>
  );
};

export default Dashboard;
