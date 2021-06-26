
import React, { Component } from "react";
import axios from 'axios'; 
import NaturePic from './Image/NaturePic.jpg';



class UsersGetData extends Component
{
    constructor(props) 
    {
        super(props);
    
        this.state = {
          Usersinfo: [],

          errorMessage: null
          
          
        };
      }

    
      
  componentDidMount() 
  {
    
    
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log("response : ", response);
      this.setState({
        Usersinfo: response.data,
      });
    })
    .catch(error => {
      this.setState({ errorMessage: error.message });
      console.error('There was an error!', error);
  });

    }
  
    render() 
    {
        const { Usersinfo } = this.state;
      
        
        console.log('Users state',this.state);
    
        

        return (
         
          
                 
             <div style={{ backgroundImage: `url(${NaturePic})` }} >
              {Usersinfo.length 
                ? Usersinfo.map((info) => (
                 
                    <div className="card text-center m-3" key={info.id}>
                      
                      
                       <span  className="card-body"> {info.userId} </span>
                      <p  className="card-body"> {info.title}</p>
                     


                     
                      
                    </div>
                    
                  ))
                : null}
            </div>
            
                
            
          );
        
                }
      
                

    }

 
export default UsersGetData;