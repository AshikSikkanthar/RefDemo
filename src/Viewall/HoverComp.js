import React, { Component } from "react";
import CountFun from "./CouterFun";

class HoverComponent extends Component

{
    render()
    {
 
        const { name,count } = this.props;

        return( 
                         
        <div>
                 <h1 onMouseOver={this.props.increment}>
                 This is Hover count : {count}   {name} 

        </h1>
        
             </div>

        );

    }
}

export default CountFun(HoverComponent,5);