import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostEdit from "./routes/PostEdit";
import Home from "./routes/Home";

function App() {
    return (
        <>
            <CssBaseline />

            <Router>
                <Switch>
                    <Route path="/post-edit">
                        <PostEdit />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
