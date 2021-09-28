import React from 'react';
import {Route, Switch ,BrowserRouter} from 'react-router-dom';
import AddExpense from './components/AddExpense/AddExpense'
import EditExpense from './components/EditExpense/EditExpense'
import HelpPage from './components/HelpPage/HelpPage'
import NotFoundPage from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/create" component={AddExpense} />
            <Route path="/edit" component={EditExpense} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch > 
        </div>
      </BrowserRouter>
  );
}

export default App;
