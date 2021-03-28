import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          <strong>Email:</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link">Log Out</Button>
      </div>
    </div>
  );
}

export default Dashboard;
