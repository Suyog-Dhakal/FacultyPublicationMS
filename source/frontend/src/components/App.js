import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
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

import Landing from "./Landing.js";
import AdminApproval from "./papers/adminApproval.js";
import DetailPaper from "./papers/DetailPaper.js";
import DetailUser from "./papers/DetailUser";
import PaperForm from "./papers/PaperForm.js";
import PaperList from "./papers/PaperList.js";

//Alerts
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <div className="container">
                <Alerts />

                <Switch>
                  <Route path="/index" component={Landing} />
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
ReactDOM.render(<App />, document.getElementById("app"));
