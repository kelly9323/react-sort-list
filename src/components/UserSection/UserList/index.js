import React, { Component } from "react";
import UserCard from "../UserCard";

class UserList extends Component {
  userSelect = (id) => {
    const { users,  setUsersSelected} = this.props;
    const newUsers = users.map((user)=>({
      ...user,
      isSelected: user.id === id ? !user.isSelected: user.isSelected
    }))
    setUsersSelected(newUsers);
  };
  mapUsers = (user) => (
    <UserCard key={user.id} user={user} userSelect={this.userSelect} />
  );
  render() {
    const { users } = this.props;
    return (
      <section>
        <h2>Users list</h2>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UserList;
