import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "./routes/Edit";
import Home from "./routes/Home";

function App() {
    return (
        <>
            <CssBaseline />

            <Router>
                <Switch>
                    <Route path="/edit">
                        <Edit />
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
