import React, { Component } from "react";
import axios from "axios";

class UsersPostData extends Component 
{

    constructor(props) {
        super(props);
    
        this.state = {
            userId: "",
            title: "",
            body: "",
        };
      }
      changeEvent = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
     
  submitEvent = (e) => {
    e.preventDefault();
    console.log("Post operation api objects :: ", this.state);
     axios
    .post("https://jsonplaceholder.typicode.com/posts", this.state)
    .then((res) => console.log("response :: ", res))
    .catch((err) => console.log(err));
 
  };


      render() 
      {
        const { userId, title, body } = this.state;
        return (
          <div>
            <form onSubmit={this.submitEvent}>
              <div>
                <input type="text" name="userId" onChange={this.changeEvent} />
              </div>
              <div>
                <input type="text" name="title" onChange={this.changeEvent} />
              </div>
              <div>
                <input type="text" name="body" onChange={this.changeEvent} />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        );
      }









}
export default UsersPostData;