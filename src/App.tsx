import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/home";
import PostEdit from "./routes/post-edit";

function App() {
    return (
        <>
            <CssBaseline />

            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/post-edit">
                            <PostEdit />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </>
    );
}

export default App;
