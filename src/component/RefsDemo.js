// import React, { Component } from "react";
// import RefComponent from "./RefComponent ";

// class RefsDemo extends Component
// {
//     constructor(props) {
//         super(props);
    
//         //to call the focus method in the input element
//         //current property refers to the actual DOM element
//         this.refernceObj = React.createRef();
//       }

 
//       clickHandler=()=>{
//         this.refernceObj.current.focusInput();
//     }

//      handler = () => {
//          alert(this.refernceObj.current.value);
//      };


//       componentDidMount() {
//         this.refernceObj.current.focus();
//        console.log(this.refernceObj);
//       }

      

//       render() {
//         return (
//           <div>
//           <h1>Refs Sample view the webapp </h1>
//          <RefComponent />
//           <input type="text" ref={this.refernceObj}/>
//         <button onClick={this.handler}>Click Me</button><br></br>  

    
//          <input type="text" ref={this.refernceObj}/>

//          <button onClick={this.clickHandler}>click Event</button>  
         

//             </div>
    
//         )
//       }
// }
// export default RefsDemo;