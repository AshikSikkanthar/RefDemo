import React ,{useContext} from 'react'
// import {Context} from '../App';
import {ColorContext} from '../App';
function ChildContext()
{ 

    
    const theme = useContext(ColorContext);
    
 
     return (

    <button style={{ background: theme.background, color: theme.foreground }}>
    
    Click Me </button>
       
    
        // <div>
        //     <Context.Consumer>
        //    {
        //    parentdata =>
        //    {
        //        return <div>This is context value {parentdata}
        //         </div> 
   
        //    }
        // }
             
        //      </Context.Consumer>
        // </div>
    )

    
}
export default ChildContext;
