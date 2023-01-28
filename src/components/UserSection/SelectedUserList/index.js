import React, { Component } from "react";

class SelectedUserList extends Component {
  mapSelectUsers = ({ id, firstName }) => <li key={id}>{firstName}</li>;
  render() {
    const { users } = this.props;
    const selectUsers = users.filter((user) => user.isSelected);
    return (
      <header>
        <ul>{selectUsers.map(this.mapSelectUsers)}</ul>
      </header>
    );
  }
}

export default SelectedUserList;
