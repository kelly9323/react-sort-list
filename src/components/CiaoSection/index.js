import { Component } from "react";
import CiaoList from "./CiaoList";
import CiaoSorted from "./CiaoSorted";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
      isDirectionById: true,
    };
  }
  sortUsersById = () => {
    const { users, isDirectionById } = this.state;
    const usersCopy = [...users];
    usersCopy.sort((curr, next) => {
      return isDirectionById ? curr.id - next.id : next.id - curr.id;
    });
    this.setState({ users: usersCopy, isDirectionById: !isDirectionById });
  };

  render() {
    const { users, isDirectionById } = this.state;
    return (
      <>
        <CiaoSorted isDirectionById={isDirectionById} sortUsersById = {this.sortUsersById}/>
        <CiaoList users={users}/>
      </>
    );
  }
}

export default CiaoSection;
