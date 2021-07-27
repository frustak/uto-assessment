import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/home";
import PostEdit from "./routes/post-edit";

function App() {
    return (
        <>
            <CssBaseline />

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/post-edit">
                        <PostEdit />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
