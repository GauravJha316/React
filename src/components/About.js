import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
    constructor(props){ 
        super(props);

        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent Component Did Mount")
    }
render(){
    console.log("parent render");

    return(
        <div>
            <h1>About</h1>
            <h2>Namaste React</h2>
            {/* <User name={"Gaurav Jha function"} /> */}
            <UserClass name={"Gaurav its"} location={"Dehradun Class"}/>
             <UserClass name={"Saurav its"} location={"Dehradun Class"}/>
        </div>
    );
}
}
export default About;