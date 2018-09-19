import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

// components
import Spinner from '../layout/Spinner';
import BackToDashboard from '../layout/BackToDashboard';

class EditClient extends Component {
  constructor(props) {
    super(props);

    // because we are use ref tag in input we need to create the refs to the values
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.balanceInput = React.createRef();
  }

  onSubmit = event => {
    event.preventDefault();

    const { client, firestore } = this.props;

    const updatedClient = {
      firstName: this.firstNameInput.current.value,
      lastName: this.lastNameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      balance:
        this.balanceInput.current.value === ''
          ? 0
          : this.balanceInput.current.value
    };

    // update the database..incidate which collection and what data to send
    firestore
      .update({ collection: 'clients', doc: client.id }, updatedClient)
      .then(this.props.history.push('/'))
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { client } = this.props;

    if (client) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <BackToDashboard />
            </div>
          </div>

          <div className="card">
            <div className="card-header">Edit Client</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id="firstName"
                    minLength="2"
                    required
                    ref={this.firstNameInput}
                    defaultValue={client.firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    id="lastName"
                    minLength="2"
                    required
                    ref={this.lastNameInput}
                    defaultValue={client.lastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    ref={this.emailInput}
                    defaultValue={client.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    minLength="10"
                    required
                    ref={this.phoneInput}
                    defaultValue={client.phone}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="balance">Balance</label>
                  <input
                    type="text"
                    className="form-control"
                    name="balance"
                    id="balance"
                    ref={this.balanceInput}
                    defaultValue={client.balance}
                  />
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

EditClient.propTypes = {
  firestore: PropTypes.object.isRequired
};

// need to work on this onemptied...not particularly sure how this works
export default compose(
  firestoreConnect(props => [
    // where data comes from the collection...storeAs ... sort the data for a specific client based on client id received from url
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
  ]),
  // getting ordered from firestore assinging it to props
  connect(({ firestore: { ordered } }, props) => ({
    // client will equal the very first object in the array since we "filtered" it above using client.id
    client: ordered.client && ordered.client[0]
  }))
)(EditClient);
