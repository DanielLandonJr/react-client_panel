import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setAllowRegistration,
  setDisableBalanceOnAdd,
  setDisableBalanceOnEdit
} from '../../actions/settingsActions';

// components
import BackToDashboard from '../layout/BackToDashboard';

class Settings extends Component {
  allowRegistrationChange = event => {
    // pull the function from the props
    const { setAllowRegistration } = this.props;

    // call the function, which will trigger the action, which will return the reducer, which will toggle the value from true to false
    setAllowRegistration();
  };

  disableBalanceOnAddChange = event => {
    // pull the function from the props
    const { setDisableBalanceOnAdd } = this.props;

    // call the function, which will trigger the action, which will return the reducer, which will toggle the value from true to false
    setDisableBalanceOnAdd();
  };

  disableBalanceOnEditChange = event => {
    // pull the function from the props
    const { setDisableBalanceOnEdit } = this.props;

    // call the function, which will trigger the action, which will return the reducer, which will toggle the value from true to false
    setDisableBalanceOnEdit();
  };

  render() {
    const {
      disableBalanceOnAdd,
      disableBalanceOnEdit,
      allowRegistration
    } = this.props.settings;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <BackToDashboard />
          </div>
        </div>

        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label>Allow Registration</label>{' '}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Add</label>{' '}
                <input
                  type="checkbox"
                  name="disableBalanceOnAdd"
                  checked={!!disableBalanceOnAdd}
                  onChange={this.disableBalanceOnAddChange}
                />
              </div>
              <div className="form-group">
                <label>Disable Balance On Edit</label>{' '}
                <input
                  type="checkbox"
                  name="disableBalanceOnEdit"
                  checked={!!disableBalanceOnEdit}
                  onChange={this.disableBalanceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);
