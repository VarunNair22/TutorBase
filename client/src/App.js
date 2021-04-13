import React from "react";
import {SignUpPage} from "./containers/SignUpPage/SignupPage";
import ClientDashboard from "./containers/DashboardPage/client/ClientDashboard";
import TutorDashboard from "./containers/DashboardPage/tutor/TutorDashboard";
import {ToastProvider} from "react-toast-notifications";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoginPage} from "./containers/LoginPage/LoginPage";
import landing from "./containers/LandingPage/LandingPage";

function App() {
    return (
        <ToastProvider
            placement="top-right"
            autoDismissTimeout="3000"
            autoDismiss="true"
        >
            <Router>
                <Switch>
                    <Route exact path="/">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/signup">
                        <SignUpPage />
                    </Route>
                    <Route exact path="/landing" component={landing}/>
                    <Route exact path="/home/:panelContent?" component={ClientDashboard}/>
                    <Route exact path="/tutor" component={TutorDashboard}/>
                    <Route
                        exact
                        path="/tutor/preferences"
                        render={(props) => (
                            <TutorDashboard
                                {...props}
                                extension="preferences"
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/tutor/settings"
                        render={(props) => (
                            <TutorDashboard {...props} extension="settings"/>
                        )}
                    />
                    <Route
                        exact
                        path="/tutor/history"
                        render={(props) => (
                            <TutorDashboard {...props} extension="history"/>
                        )}
                    />
                    <Route
                        exact
                        path="/tutor/analytics"
                        render={(props) => (
                            <TutorDashboard {...props} extension="analytics"/>
                        )}
                    />
                    <Route
                        exact
                        path="/tutor/meetings"
                        render={(props) => (
                            <TutorDashboard {...props} extension="meetings"/>
                        )}
                    />
                    <Route
                        exact
                        path="/tutor/schedule"
                        render={(props) => (
                            <TutorDashboard {...props} extension="schedule"/>
                        )}
                    />
                </Switch>
            </Router>
        </ToastProvider>
    );
}

export default App;
