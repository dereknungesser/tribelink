import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Schedule from "./components/Schedule";
import MessageBoard from "./components/MessageBoard";
import Homeview from "./components/Homeview"
import Event from "./components/Event";
import { getMessages } from './store/message';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/messageboard">
            <MessageBoard />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/event">
            <Event />
          </Route>
          <Route path="/">
            <Homeview />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
