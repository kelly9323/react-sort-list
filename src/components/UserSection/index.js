import React, { Component } from "react";
import UserList from "./UserList";
import SelectedUserList from "./SelectedUserList";
const dbUsers = [
  {
    id: 3,
    firstName: "Brad",
    lastName: "Pitt",
  },
  {
    id: 4,
    firstName: "Tom",
    lastName: "Rot",
  },
  {
    id: 1,
    firstName: "Jim",
    lastName: "Carry",
  },
  {
    id: 2,
    firstName: "Rob",
    lastName: "Qwerty",
  },
  {
    id: 5,
    firstName: "Leo",
    lastName: "Kaprio",
  },
];
class UserSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbUsers.map((user) => ({ ...user, isSelected: false })),
    };
  }

  setUsersSelected = (newUsers) => {
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <SelectedUserList users={users} />
        <UserList users={users} setUsersSelected={this.setUsersSelected} />
      </>
    );
  }
}

export default UserSection;
