import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 6;
  let country = "in";
  let apiKey = "afb67355753046fb8e0c50fd748c2c2b";

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <LoadingBar color="#f11946" progress={progress} />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={country}
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={country}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                category="entertainment"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={country}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={country}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={country}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

 export default App;
