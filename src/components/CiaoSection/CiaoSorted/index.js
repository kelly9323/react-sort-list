import React, { Component } from "react";

class CiaoSorted extends Component {
  
  render() {
    const { isDirectionById, sortUsersById } = this.props;
    return (
      <p>
        <button onClick={sortUsersById}>
          sort by id {isDirectionById ? "right" : "revert"}
        </button>
      </p>
    );
  }
}

export default CiaoSorted;
