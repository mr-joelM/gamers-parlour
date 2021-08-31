import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import RevByCat from "./components/RevByCat";
import SingleRev from "./components/SingleRev";
import RevComments from "./components/RevComments";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/reviews">
          <Reviews />
        </Route>
        <Route exact path="/categories">
          <RevByCat />
        </Route>
        <Route exact path="/review/:review_id">
          <SingleRev />
        </Route>
        <Route exact path="/review/:review_id/comments">
          <RevComments />
        </Route>
        <Route exact path="/review/:review_id/addComment">
          <AddComment />
        </Route>
        <Route>
          <p>404. Not Found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
