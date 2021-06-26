import React,{ Component } from 'react'
class ButtonOperation extends Component
{
    constructor()
    {
        super()
        this.state = {
            count:0
        }
    }
    addbutton()
    {
        this.setState({
          count:this.this.state.count+1

        },
        console.log("count ::", this.state.count)
        )
    }
    subbutton()
    {
        this.setState({
          count:this.this.state.count-1

        },
        console.log("count ::", this.state.count)
        )
    }

    reset()
    {
        this.setState({
            count:0
  
          },
          console.log("count ::", this.state.count)     
         ) 
        }
        render(){
            return(
                <div>
                    {/* <center>
                    
                    <button onClick={()=>this.addbutton()}>Addbutton</button>
                    <button onClick={()=>this.subbutton()}>Subbutton</button>
                    <button onClick={()=>this.reset()}>Reset</button>
                    </center> */}
                </div>
            )
        }
}
export default ButtonOperation;