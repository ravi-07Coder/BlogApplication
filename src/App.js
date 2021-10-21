import Header from "./components/Header";
import { Box } from "@material-ui/core";
import Home from "./components/home/Home";
import DetailView from "./components/post/DetailView";
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import CreateView from "./components/post/CreateView";
import UpdateView from "./components/post/UpdateView";

//browser router is used to enable the linking atmosphere in the app
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box
        style={{
          marginTop: 64,
        }}
      >
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/details' component={DetailView} />
          <Route exact path='/create' component={CreateView} />
          <Route exact path='/update' component={UpdateView} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
