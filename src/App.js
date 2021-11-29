import Header from "./components/Header";
import { Box } from "@material-ui/core";
import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";
import About from './components/About';
import Contact from './components/Contact'
import Register from './components/Register';
import Login from './components/Login';
import { LS_AUTH_TOKEN } from "./constants/data";

//browser router is used to enable the linking atmosphere in the app
function App() {

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  return (
    <BrowserRouter>
      <Header />
      <Box
        style={{
          marginTop: 64,
        }}
      >
        <Switch>
          <Route exact path='/'>
            {token ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route exact path='/about'>
            {token ? <About/> : <Redirect to="/login" />}
          </Route>
          <Route exact path='/contact'>
            {token ? <Contact/> : <Redirect to="/login" />}
          </Route>
          <Route exact path='/register'>
            {token ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path='/login'>
            {token ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route exact path='/details/:id'>
            {token ? <DetailView /> : <Redirect to="/login" />}
          </Route>
          <Route exact path='/create'>
            {token ? <CreateView /> : <Redirect to="/login" />}
          </Route>
          <Route exact path='/update/:id'>
            {token ? <UpdateView /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;