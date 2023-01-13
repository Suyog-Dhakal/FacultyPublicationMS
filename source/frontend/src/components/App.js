import React, { Component, Fragment } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store.js";

import Alerts from "./layout/Alerts";
import Header from "./layout/Header";
import DashBoard from "./papers/DashBoard";

import Login from "./accounts/Login";
import PasswordReset from "./accounts/PasswordReset";
import Register from "./accounts/Register";
import Search from "./papers/Search.js";

import PrivateRoute from "./common/PrivateRoute";

import Landing from "./Landing.jsx";
import AdminApproval from "./papers/adminApproval.js";
import DetailPaper from "./papers/DetailPaper.js";
import DetailUser from "./papers/DetailUser";
import PaperForm from "./papers/PaperForm.js";

import { loadUser } from "../actions/auth.js";
import PaperList from "./papers/PaperList.js";

//Alerts
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <div>
                <Alerts />

                <Switch>
                  <PrivateRoute exact path="/profile" component={DashBoard} />
                  <PrivateRoute exact path="/papers" component={PaperList} />
                  <PrivateRoute exact path="/" component={Search} />
                  <PrivateRoute
                    exact
                    path="/paper/:id"
                    component={DetailPaper}
                  />
                  <PrivateRoute exact path="/user/:id" component={DetailUser} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route
                    exact
                    path="/password-reset"
                    component={PasswordReset}
                  />
                  <PrivateRoute exact path="/addPaper" component={PaperForm} />
                  <PrivateRoute
                    exact
                    path="/superadmin"
                    component={AdminApproval}
                  />
                  <Route exact path="/index" component={Landing} />
                </Switch>
              </div>
              {/* <Footer /> */}
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}
export default App;
