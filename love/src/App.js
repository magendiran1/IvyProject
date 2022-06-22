import { useState } from 'react';
import Loginpage from './Components/Login/Loginpage';
import Signup from  './Components/Sign up/Signup'
import Appbar from './Components/Dashboard/Appbar';
import  Calculator  from './Components/Dashboard/Calculator'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Addmovie from './Components/Dashboard/AddMovies'

import Movies  from './Components/Dashboard/Movies';
import EditMovie from './Components/Dashboard/EditMovie'
import Counter from './Components/CentralState/Counter';

function App() {

   const [userLoggedIn, setUserLoggedIN] =useState(false)

return(
<>
<Router>
<Link to="/" />
<Link to="/Signup" />
<Link to="/Appbar" />
<Link to="/Calculator" />
<Link to="/Movies" />
<Link to="/Addmovie" />
<Link to="/EditMovie" />
<Link to="/Counter" />

<Switch>
  <Route exact path="/" ><Loginpage /></Route>
  <Route path="/Signup" ><Signup /></Route>
  <Route path="/Appbar"><Appbar /></Route>
  <Route path="/Calculator"><Calculator /></Route>
  <Route path="/Movies"><Movies /></Route>
  <Route path="/Addmovie"><Addmovie /></Route>
  <Route path="/EditMovie/:id"><EditMovie /></Route>
  <Route path="/Counter"><Counter /></Route>

</Switch>
</Router>

</>


)

}

export default App;
