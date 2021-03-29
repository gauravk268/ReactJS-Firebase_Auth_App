import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const Error404 = (props) => {
  const { currentUser } = useAuth();
  const history = useHistory();

  const goToHome = () => {
    if (currentUser === null) {
      history.push("/login");
    } else {
      history.push("/");
    }
  };

  return (
    <div className="text-center">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Error 404</h2>
          <h1 className="style-error-mark" style={styleErrorMark}>
            &#33;
          </h1>
          <h1>Page not found</h1>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={goToHome}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

const styleErrorMark = {
  fontSize: "8rem",
  color: "red",
  border: "10px solid red",
  margin: "3rem auto",
  borderRadius: "50%",
  width: "11rem",
  height: "11rem",
};

export default Error404;
