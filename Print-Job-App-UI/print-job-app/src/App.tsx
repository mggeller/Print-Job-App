import React from 'react';
import PrintJobs from './components/printjobs/PrintJobs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatePrintJob from './components/printjobs/CreatePrintJob';

const App = () => {
  return (
    <Router>
      <html lang="en">
        <body>
          <Switch>
            <Route exact path="/"><PrintJobs /></Route>
            <Route exact path="/CreatePrintJob"><CreatePrintJob /></Route>
          </Switch>
        </body>
      </html>

    </Router>
  );
}

export default App;
