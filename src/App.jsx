import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import TaskApp from './components/TaskApp';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route path="/ativos" exact>
            <TaskApp tab="ativos" />
          </Route>
          <Route path="/concluídas" exact>
            <TaskApp tab="concluídas" />
          </Route>
          
          <Route path="/" exact>
            <TaskApp tab="ativos" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
