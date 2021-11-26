import Header from "./components/Header";
import { Box } from "@material-ui/core";
import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";

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
          <Route exact path='/' component={(token) ? Home : Login}/>
          <Route exact path='/register' component={(token) ? Home : Register} />
          <Route exact path='/login' component={(token) ? Home : Login} />
          <Route exact path='/details/:id' component={(token) ? DetailView : Login} />
          <Route exact path='/create' component={(token) ? CreateView : Login} />
          <Route exact path='/update/:id' component={(token) ? UpdateView : Login} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
