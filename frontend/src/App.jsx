import React, { useState } from "react";
import Hero from "./components/Hero";
import Login from "./components/login/Login";
import SignIn from "./components/sign_in/SignIn";
import Note from "./components/notes/Note";
import EmailExits from "./components/error/EmailExits";
import UserNotFound from "./components/error/UserNotFound";
import Details from "./components/details/Details";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isUserNotfound, setIsUserNotfound] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [isDetails, setIsDetails] = useState(false);

  function logIn() {
    setIsLoginOpen(true);
  }

  function signIn() {
    setIsSignInOpen(true);
  }

  function userNotfound() {
    setIsUserNotfound(true);
  }

  function note() {
    setIsNote(true);
  }

  function emailExists() {
    setIsEmailExist(true);
  }

  function enterDetails() {
    setIsDetails(true);
  }

  return (
    <div>
      <Hero logIn={logIn} signIn={signIn} />
      {isLoginOpen && (
        <Login
          onError={userNotfound}
          onClose={() => {
            setIsLoginOpen(false);
          }}
          onSuccess={note}
        />
      )}

      {isSignInOpen && (
        <SignIn
          onError={emailExists}
          onClose={() => {
            setIsSignInOpen(false);
          }}
          onSuccess={note}
          onEmpty={enterDetails}
        />
      )}

      {isUserNotfound && (
        <UserNotFound
          onClose={() => {
            setIsUserNotfound(false);
          }}
        />
      )}

      {isNote && (
        <Note
          onClose={() => {
            setIsNote(false);
          }}
        />
      )}

      {isEmailExist && (
        <EmailExits
          onClose={() => {
            setIsEmailExist(false);
          }}
        />
      )}

      {isDetails && (
        <Details
          onClose={() => {
            setIsDetails(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
