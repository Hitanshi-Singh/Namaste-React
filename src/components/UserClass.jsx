import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, position } = this.props;
    return (
      <div className="userCard">
        <h2>User Details</h2>
        <img src="" alt="" />
        <h3>{"Name : " + name}</h3>
        <p>{"Position : " + position}</p>
        <p>Email : tech.hitanshi@gmail.com</p>
      </div>
    );
  }
}
export default UserClass;
