import React, { Component } from "react";

class UserCard extends Component {
  btnHandler = ()=>{
    const {
      user: { id }, userSelect
    } = this.props;
    userSelect(id);
  }
  render() {
    const {
      user: { id, firstName, isSelected },
    } = this.props;
    const styles = { backgroundColor: isSelected ? "pink" : undefined };
    return (
      <article key={id} style={styles}>
        <h3>
          <span>{id}: </span>
          {firstName}
        </h3>
        <button onClick={this.btnHandler}>select user</button>
      </article>
    );
  }
}

export default UserCard;
