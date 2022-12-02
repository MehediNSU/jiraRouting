import { view } from "@forge/bridge";
import React, { Fragment, useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router";
import Issues from "./pages/newIssues.js";
//import Issues from "./pages/Issues.js";
import Projects from "./pages/test.js";
//import Projects from "./pages/Projects.js";
import Form from "./pages/form.js";


 export function Home() {
  return (
    <Fragment>
      <br></br>
      <h2>Projects</h2>
      <Projects/>
    </Fragment>
  );
}

 export function Issue() {
  return (
    <Fragment>
      <br></br>
      <h2>Issues List Page </h2>
      <br></br>
      <Form/>
      <br></br>
      <br></br>
      <br></br>
      <Issues/>
    </Fragment>
  );
}


function App() {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    view.createHistory().then((newHistory) => {
      setHistory(newHistory);
    });
  }, []);

  const [historyState, setHistoryState] = useState(null);

  useEffect(() => {
    if (!historyState && history) {
      setHistoryState({
        action: history.action,
        location: history.location,
      });
    }
  }, [history, historyState]);

  useEffect(() => {
    if (history) {
      history.listen((location, action) => {
        setHistoryState({
          action,
          location,
        });
      });
    }
  }, [history]);

  return (
    <div>
      {history && historyState ? (
        <Router
          navigator={history}
          navigationType={historyState.action}
          location={historyState.location}
        >
          <Routes>
            <Route path="/issues/:id" element={<Issue />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;