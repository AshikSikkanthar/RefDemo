import React, { Component } from 'react'
import Purchase from './Product';

class ProdTable extends Component {
   
   
        
    
    render() {
        
        return (
            <div className="prodname">
                <table>
                    <h1>
                    <tr>
                        
                
               <tr> Prodname: {this.props.prod1}</tr><tr>ProdId: {this.props.prod2}</tr><tr>Rate: {this.props.prod3}</tr>
               </tr>
               <tr>
                <button onClick={this.props.exchageto}> chect out for the  product Details
                
                </button>
            </tr>
                
                
                </h1>
                </table>
            </div>
        )
    }
}

export default Purchase(ProdTable)