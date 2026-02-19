import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

      this.state={
        userInfo:{
            name:"Dummy",
            location:"Default",
            avatar_url:"Dummy Photo"
        }
      };
    }

    async componentDidMount(){
        //API Call here
        const data = await fetch("https://api.github.com/users/GauravJha316");
        const json= await data.json();
        this.setState({
             userInfo:json,
        });
        console.log(json)
    }
    
    render(){
         const{login,location,avatar_url}=this.state.userInfo;

        return(
         <div className="user-card">
        
        <img src={avatar_url}/>
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        </div>
        );
    }
}

export default UserClass;