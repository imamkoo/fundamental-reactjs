import React, { Component } from "react";
import profile from "../../assets/profile.svg";

export class UserClass extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div className="flex flex-row gap-4 mb-12 justify-center items-center">
        <img src={profile} alt="profile" height={50} width={50} />
        <div>
          <h6 className=" m-0 text-left">{name}</h6>
          <p className=" m-0 text-left">{email}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
