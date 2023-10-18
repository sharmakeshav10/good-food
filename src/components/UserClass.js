import React, { useEffect } from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "dummy location",
      },
    };

    console.log("Child Constr");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sharmakeshav10");
    const json = data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    console.log("child compDidMount");
  }

  render() {
    console.log("child render");

    return (
      <div>
        <img src={this.state.userInfo.avatar_url} />
        <h3>Name: {this.state.userInfo.name}</h3>
        <h4>Location: {this.state.userInfo.location}</h4>
      </div>
    );
  }
}

export default UserClass;
