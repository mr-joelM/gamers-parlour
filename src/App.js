import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Reviews from "./components/Reviews";
import SingleRev from "./components/SingleRev";
import RevComments from "./components/RevComments";
import AddComment from "./components/AddComment";
import Categories from "./components/Categories";
import RevByCat from "./components/RevByCat";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/reviews">
          <Reviews />
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
        <Route exact path="/categories">
          <Categories />
        </Route>
        <Route exact path="/reviews?category=">
          <RevByCat />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/:username">
          <SingleUser />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
