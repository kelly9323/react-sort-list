import React, { Component } from 'react';
import Ciao from '../Ciao';

class CiaoList extends Component {
  mapUsers = ({ firstName, lastName, id }) => (
    <Ciao key={id} username={`${id}: ${firstName} ${lastName}`} />
  );
  render() {
    const {users} = this.props;
    return (
      <section>{users.map(this.mapUsers)}</section>
    );
  }
}

export default CiaoList;
