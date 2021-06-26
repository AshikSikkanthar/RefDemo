import axios from "axios";
import React, { useState, useEffect } from "react";

function FormEffect ()

{ 
     const [UserPost,Setuserpost] =useState([]);
    const [userid,Setuserid] =useState();
    const [idFromButtonClick, setIdFromButtonClick] = useState();

    useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${userid}`)
      .then((response) => {
        console.log(response);
        Setuserpost(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromButtonClick]);

  const changeEvent = (e) => {
    console.log(e.target.value);
     Setuserid(e.target.value);
  };

  const buttonEvent = () => {
    setIdFromButtonClick(userid);
  };


return (
    <div>
      <input type="text" value={userid} onChange={changeEvent} />
      <button onClick={buttonEvent}>Submit</button>
        {/* {
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      }   */}
       { 
       <table className="w3-table-all w3-centered">
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
         
         <tr>
             <td>{UserPost.id}</td> 
         <td>{UserPost.title}</td> 
         <td> {UserPost.body}</td>
        
            
          </tr>  
          <tr>
             <td>{UserPost.id}</td> 
         <td>{UserPost.title}</td> 
         <td> {UserPost.body}</td>
        
            
          </tr>  
       </table> }
    </div>
  );
}







export default FormEffect;
