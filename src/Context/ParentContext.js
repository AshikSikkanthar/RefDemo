import react from 'react'
import ChildContext from './ChildContext';
 
//import {ColorContext} from '../App';

function Parentcontext()
{

    //const theme = useContext(ColorContext);
    
    // const  parentdata = useContext(Context);
   
     
      return (
    
         <div>
             <ChildContext  />
         </div>

      )
      }
export default Parentcontext