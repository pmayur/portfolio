import Navigator    from "./components/navigation/Navigator";
import View         from "./components/views/View";
import Me           from "./components/me/Me"

import { MemoryRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigator />

                <Switch>
                    <Route
                        exact path="/"
                        component={() => <Me />}
                    />
                    <Route
                        path="/work"
                        component={() => <View name="work" />}
                    />
                    <Route
                        path="/education"
                        component={() => <View name="education" />}
                    />
                    <Route
                        path="/projects"
                        component={() => <View name="projects" />}
                    />
                    <Route
                        path="/aboutme"
                        component={() => <View name="about" />}
                    />
                </Switch>

                <div></div>
            </div>
        </Router>
    );
}

export default App;
