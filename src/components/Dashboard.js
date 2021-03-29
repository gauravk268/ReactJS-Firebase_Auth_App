import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  if (currentUser === null) {
    console.log("currentUser", currentUser);
    <Redirect to="/" />;
  }

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (e) {
      setError(e + " Try again Later.");
    }
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Alert variant="success">You have been logged in.</Alert>
          <strong>Email:</strong>
          {currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
