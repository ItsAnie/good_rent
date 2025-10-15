import React, { useState } from "react";
import Register from "./Register";
import AuthForm from "./AuthForm";

function AuthPage() {
  const [view, setView] = useState("register");

  return (
    <>
      {view === "register" && (
        <Register
          onSignUpClick={() => setView("signup")}
          onSignInClick={() => setView("signin")}
        />
      )}
    </>
  );
}

export default AuthPage;
