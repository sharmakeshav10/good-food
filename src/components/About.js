import React from "react";
import Header from "./Header";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>Welcome!!</h1>
//       <h3>This is our story...</h3>
//       <UserClass name="Keshav Sharma" contact="@Keshav007" />
//     </div>
//   );
// };

// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent const");
  }

  componentDidMount() {
    console.log("Parent compDidMount");
  }

  render() {
    console.log("parent render");
    return <UserClass name={"Keshav"} />;
  }
}

export default About;
