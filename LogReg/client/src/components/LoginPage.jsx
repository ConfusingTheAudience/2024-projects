import React, { useState } from "react";

const LoginPanel = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter all data");
    } else {
      setError("");
      console.log("Logged in:", { email, password });
    }
  };

  // REGISTER
  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !password || !name || password !== confirmPassword) {
      setError("Please enter all data and make sure passwords match");
    } else {
      setError("");
      console.log("Registered:", { name, email, password });
    }
  };

  // CLEAR EVERY INPUT WHILE SWITCHING FORM
  const switchForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setError("");

    setIsRegistering(!isRegistering);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl uppercase font-semibold text-center mb-6">
          {isRegistering ? "Register" : "Login"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {/* Name input */}
          {isRegistering && (
            <div className="mb-4">
              <label className="block text-gray-600" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {/* Email input */}
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label className="block text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm password */}
          {isRegistering && (
            <div className="mb-6">
              <label className="block text-gray-600" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isRegistering ? "Register" : "Log in"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => switchForm()}
                >
                  Log in
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => switchForm()}
                >
                  Register
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;
