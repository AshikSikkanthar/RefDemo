import React from 'react'
import Empobject  from './Empobject'

function ProductList(props) {

    const empList=[
//         {
//             id: 1,
//             employeeName: "Sam",
//             age: 40,
//             skill: "React"
//         },
//         {
//             id: 2,
//             employeeName: "Rob",
//             age: 28,
//             skill: "Java"
//         },
//         {
//             id: 3,
//             employeeName: "Jhon",
//             age: 35,
//             skill: "Angular"
//         }
    ]


   const employeeList = empList.map(getvalue=>(
       <Empobject  empdetail={getvalue}/>
   ))

   
    return (
       <div>
{/*           <h1>this is emp details</h1> */}
            {employeeList}
        </div>
    )
}

export default ProductList