import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
// import AuthContext from "./contexts/authContext";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice"
import Home from './pages/index';
import SignUpPage from './pages/signup';
import LogInPage from './pages/login';
import TaskPage from "./pages/task";
import DietPage from "./pages/diet";
import UserHomePage from "./pages/userhome";

function App() {
  // const authCtx = React.useContext(AuthContext);
  // console.log(authCtx.user);
  const user = useSelector(selectUser);
  return (
    <>
    {

        <Router>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/signup' component={SignUpPage} exact/>
            {(!user)? <Route path='/login' component={LogInPage}/>: <Route path='/login' component={UserHomePage}/>}
            {(user)?<Route path='/userhome' component={UserHomePage}/>:<Route path='/userhome' component={LogInPage}/>}
            {(user)?<Route path='/task' component={TaskPage}/>:<Route path='/code' component={LogInPage}/>}
            {(user)?<Route path='/diet' component={DietPage}/>:<Route path='/code' component={LogInPage}/>}

          </Switch>
        </Router>
     
    }
    
    
    </>
  );
}

export default App;



