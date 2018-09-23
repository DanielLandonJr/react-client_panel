import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class AppNavBar extends Component {
  state = {
    isAuth: false
  };

  static getDerivedStateFromProps(props, state) {
    const { auth } = props;

    if (auth.uid) {
      return { isAuth: true };
    } else {
      return { isAuth: false };
    }
  }

  onLogoutClick = event => {
    event.preventDefault();

    const { firebase } = this.props;

    firebase.logout();
  };

  render() {
    const { isAuth } = this.state;
    const { auth } = this.props;

    return (
      <nav className="navbar navbar-dark navbar-expand-md bg-primary navigation-clean">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Client Panel
          </Link>
          <button
            data-toggle="collapse"
            data-target="#navcol-1"
            className="navbar-toggler"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            {isAuth ? (
              <ul className="nav navbar-nav mr-auto">
                <li role="presentation" className="nav-item">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              </ul>
            ) : null}
            {isAuth ? (
              <ul className="nav navbar-nav ml-auto">
                <li role="presentation" className="nav-item">
                  <a href="#!" className="nav-link active">
                    {auth.email}
                  </a>
                </li>
                <li role="presentation" className="nav-item">
                  <Link to="/settings" className="nav-link">
                    Settings
                  </Link>
                </li>
                <li role="presentation" className="nav-item">
                  <a
                    href="#!"
                    className="nav-link"
                    onClick={this.onLogoutClick}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

AppNavBar.propTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired
};

export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }))
)(AppNavBar);
