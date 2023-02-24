import React, { useState, useEffect } from 'react';

export default function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in
    const loggedInUser = false;
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (

    <div className="App">
      <h1> My React App</h1>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in to continue</p>
      )}
    </div>
  );
}