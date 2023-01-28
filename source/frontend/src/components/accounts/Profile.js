import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="content-section">
        <div className="media mt-2" style={{ display: "inline" }}>
          <img
            className="rounded-circle account-img"
            style={{ height: 100, width: 100 }}
            src={this.props.user?.profile?.image}
          />
          <div className="media-body">
            <h4
              className="account-heading d-inline"
              style={{
                color: "green",
              }}
            >
              {this.props.user?.profile?.full_name}
            </h4>
            <p className=" fs-6 d-inline text-secondary mx-3">
              Serial No. {this.props.user?.id}
            </p>
            <h6 className="text-secondary">{this.props.user?.profile?.post}</h6>
            <h6 className="text-secondary">
              {this.props.user?.profile?.department}
            </h6>

            <h6 className="text-secondary">
              {this.props.user?.profile?.institute}
            </h6>
            <h6 className="text-secondary">
              {this.props.user?.profile?.address}
            </h6>
            <h6
              style={{
                color: "green",
              }}
            >
              <a
                className="text-secondary"
                href={this.props.user?.profile?.website}
                target="/"
                style={{
                  color: "green",
                }}
              >
                Go to Personal Website
              </a>
            </h6>
          </div>
        </div>

        <div
          style={{
            textAlign: "right",
          }}
        >
          {this.props.user.username !== "superadmin" &&
          this.props.user.id == this.props.owner?.id ? (
            <Link
              style={{ textDecoration: "none", color: "green", fontSize: 20 }}
              to="/papers"
            >
              Export Papers
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  owner: state.auth.user,
});

export default connect(mapStateToProps, {})(Profile);
