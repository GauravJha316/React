import User from "./User";
import UserClass from "./UserClass";
const About =()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>Namaste React</h2>
            {/* <User name={"Gaurav Jha function"} /> */}
            <UserClass name={"userClass its"} location={"Dehradun Class"}/>
        </div>
    )
};

export default About;