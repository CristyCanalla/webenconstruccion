import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
