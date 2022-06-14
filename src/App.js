import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import PasswordRecovery from './pages/PasswordRecovery';
import SendEmail from './pages/SendEmail';
import NewPassword from './pages/NewPassword';
import MyAccount from './pages/MyAccount';
import CreateAccount from './pages/CreateAccount';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import NotFound from './pages/NotFound';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
import './styles/global.css';



function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
        <BrowserRouter> 
          <Layout>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/Login' component={Login}/>
              <Route exact path='/Password-Recovery'component={PasswordRecovery }/>
              <Route exact path=" /send-Email" component={SendEmail}/>
              <Route exact path= "/new-password" component={NewPassword}/>
              <Route exact path= "/Account" component={MyAccount}/>
              <Route exact path= "/Signup" component={CreateAccount}/>
              <Route exact path= "/checkout" component={Checkout}/>
              <Route exact path="/Order" component={Orders}/>
              <Route exact path='*'  component={NotFound}/>
            </Switch>
          </Layout>
        </BrowserRouter>
     </AppContext.Provider> 
    
    

  
  );
}

export default App;