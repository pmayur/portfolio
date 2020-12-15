import Navigator    from "./components/navigation/Navigator";
import Me           from "./components/me/Me"
import Work         from "./components/work/Work"
import Education    from "./components/education/Education"
import Projects     from "./components/projects/Projects"

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
                        component={() => <Work/>}
                    />
                    <Route
                        path="/education"
                        component={() => <Education />}
                    />
                    <Route
                        path="/projects"
                        component={() => <Projects />}
                    />
                </Switch>

                <div></div>
            </div>
        </Router>
    );
}

export default App;
